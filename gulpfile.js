const path = require('path')
const { series, src, dest, watch, parallel } = require('gulp')
// const watch = require('gulp-watch') // 提供更为强大的监听功能
const sass = require('gulp-sass')
// const imagemin = require('gulp-imagemin')
const base64 = require('gulp-base64')
const plumber = require('gulp-plumber') // 任务出错时不退出任务，待任务正确后继续执行
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
// const sequence = require('run-sequence') // 控制构建任务执行顺序
const flatten = require('gulp-flatten') // 清除目录层级
const del = require('del')
const size = require('gulp-size') // 终端中显示构建后静态资源文件大小
const changed = require('gulp-changed') // 通过比较源文件和生成文件，只对有修改的文件进行构建
const replace = require('gulp-replace')
const cssmin = require('gulp-cssmin')
const webpack = require('webpack-stream')
const connect = require('gulp-connect')
const through2 = require('through2')
const config = require('./gulp.env')
const rename = require('gulp-rename')
const proxy = require('http-proxy-middleware')
const chalk = require('chalk')
const portfinder = require('portfinder')

// 构建任务

// 编译sass
function scss () {
  return src([
    config.paths.app + '/**/*.scss',
    config.paths.components + '/**/*.scss',
    config.paths.sass + '/*.scss'
  ])
    .pipe(plumber())
    .pipe(sass({
      outputStyle: 'expanded'
    })).on('error', sass.logError)
    .pipe(base64({
      baseDir: 'public/assets',
      extensions: ['png', 'jpg', 'jpeg', 'gif'],
      maxImageSize: 20 * 1024, // bytes
      debug: true
    }))
    .pipe(postcss([autoprefixer()]))
    .pipe(replace('//localhost:8081', config.APP_HOST))
    .pipe(changed(config.paths.assets, {
      extension: '.css'
    }))
    /**
		 * 暂未实现的：
		 * 这里考虑使用postcss-copy[https://www.npmjs.com/package/postcss-copy]来进行拷贝样式表中引用的图片文件，
		 * 以减少在后续阶段不断冗余的图片资源。
		 * 经典场景：更新改版涉及到图片的更迭，无效的图片得不到清除，造成图片资源冗余。
		 */
    .pipe(flatten())
    .pipe(size({
      showFiles: true
    }))
    .pipe(dest(config.paths.staticStyle))
    // 浏览器无刷新修改CSS文件
    .pipe(connect.reload())
}

exports.scss = scss

// 优化图片
function image () {
  return src([config.paths.images + '/**/*'])
    .pipe(config.ENV === 'dev' ? changed(config.paths.staticImgs) : through2.obj())
    // .pipe(imagemin([
    //   imagemin.gifsicle({
    //     interlaced: true
    //   }),
    //   imagemin.jpegtran({
    //     progressive: true
    //   }),
    //   imagemin.optipng({
    //     optimizationLevel: 5
    //   }),
    //   imagemin.svgo({
    //     plugins: [{
    //       removeViewBox: true
    //     }]
    //   })
    // ]))
    .pipe(dest(config.paths.staticImgs))
    .pipe(connect.reload())
}

exports.image = image

// webpack js
function script () {
  const jsFiles = [
    config.paths.app + '/**/*.js',
    config.paths.components + '/**/*.js'
  ]

  return src(jsFiles)
    .pipe(webpack(require(config.ENV !== 'dev' ? './build/webpack.prod.conf' : './build/webpack.dev.conf')))
    .pipe(changed(config.paths.assets, {
      extension: '.js'
    }))
    .pipe(dest(config.paths.staticWebpackJs))
    .pipe(connect.reload())
}

exports.script = script

// 第三方库资源打包脚本
function externalLib() {
  const externalLibFiles = [config.paths.lib + '/**/*']

  return src(externalLibFiles)
    .pipe(changed(config.paths.lib + '/**/*'))
    .pipe(dest(config.paths.staticLib))
}

exports.externalLib = externalLib

function watchList () {
  watch([
    config.paths.app + '/**/*.scss',
    config.paths.components + '/**/*.scss',
    config.paths.sass + '/*.scss'
  ], series(scss))
  watch(config.paths.images + '/**/*', series(image))
  watch([
    config.paths.app + '/**/*.js',
    config.paths.components + '/**/*.js'
  ], series(script))
  watch(config.paths.lib + '/**/*', series(externalLib))
}

exports.watch = watchList

function clean() {
  return del([
    config.paths.dist + '/**/*'
  ]).then(() => {
    console.log(chalk.green(`[${config.ENV}] '项目初始化清理完成...`))
  })
}

exports.clean = clean

let serverOptions = {
  name: 'ENV: ' + config.ENV,
  root: config.paths.static,
  host: '0.0.0.0',
  port: 8000,
  liverload: true
}

if (config.proxyOptions.changeOrigin) {
  serverOptions = {
    ...serverOptions,
    middleware: () => {
      return [proxy('/api', config.proxyOptions)]
    }
  }
}

function server () {
  portfinder.basePort = serverOptions.port
  portfinder.getPort((err, port) => {
    if (err) {
      console.log(chalk.red(err))
      return
    }
    serverOptions.port = port
    connect.server(serverOptions)
  })
}

exports.server = server


exports.default = series(parallel(server, watchList))

exports.init = config.ENV === 'dev' ? series(
  scss,
  image,
  script,
  externalLib,
  done => {
    console.log(chalk.green(`[${config.ENV}] '项目初始化构建完成...`))
    done()
  }
): config.ENV === 'test' ? series(parallel([scss, image, script, externalLib]), clean, copySrcTest, miniCss, done => {
  console.log(chalk.green(`[${config.ENV}] '项目初始化构建完成...`))
  done()
}): series(parallel([scss, image, script, externalLib]), clean, copySrcProd, parallel([minAndRenameCss, renameJs]), done => {
  console.log(chalk.green(`[${config.ENV}] '项目初始化构建完成...`))
  done()
})

function copySrcTest () {
  files = [
    config.paths.src + '/**/*',
    '!' + config.paths.nm,
    '!' + config.paths.nm + '/**/*',
    '!' + config.paths.assets,
    '!' + config.paths.assets + '/**/*',
  ]
  return src(files)
    .pipe(dest(config.paths.dist))
}

function copySrcProd () {
  const files = [
    config.paths.src + '/**/*',
    '!' + config.paths.staticStyle + '/*.css',
    '!' + config.paths.staticJs + '/*.js',
    '!' + config.paths.nm,
    '!' + config.paths.nm + '/**/*',
    '!' + config.paths.assets,
    '!' + config.paths.assets + '/**/*',
  ]
  return src(files)
    .pipe(dest(config.paths.dist))
}

function miniCss () {
  return src(config.paths.staticStyle + '/*.css')
    .pipe(replace('/v3/static/image', config.APP_CDN_HOST + '/v3/static/image'))
		.pipe(replace('//localhost:8081', config.APP_HOST))
		.pipe(cssmin())
		.pipe(dest(config.paths.dist + '/public/static/css'))
}

function minAndRenameCss () {
  return src(config.paths.staticStyle + '/*.css')
    .pipe(replace('/v3/static/image', config.APP_CDN_HOST + '/v3/static/image'))
    .pipe(replace('//localhost:8081', config.APP_HOST))
    .pipe(cssmin())
    .pipe(rename(function (path) {
      path.dirname += '/public/static/css/' + config.APP_VERSION
    }))
    .pipe(dest(config.paths.dist))
}

function renameJs () {
  return src([
      config.paths.staticJs + '/*.js'
    ])
    .pipe(rename(function (path) {
      path.dirname += '/public/static/scripts/' + config.APP_VERSION
    }))
    .pipe(dest(config.paths.dist))
}