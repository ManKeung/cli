'use strict'

const path = require('path')
const glob = require('glob')
const config = require('../config')
const packageConfig = require('../package.json')
const HtmlWebpackPlugin = require('html-webpack-plugin')

exports.assetsPath = function (_path) {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory

  return path.posix.join(assetsSubDirectory, _path)
}

exports.createNotifierCallback = () => {
  const notifier = require('node-notifier')

  return (severity, errors) => {
    if (severity !== 'error') return

    const error = errors[0]
    const filename = error.file && error.file.split('!').pop()

    notifier.notify({
      title: packageConfig.name,
      message: severity + ': ' + error.name,
      subtitle: filename || '',
      icon: path.join(__dirname, 'logo.png')
    })
  }
}

function createHash (hashLength = 20) {
  return Array.from(Array(Number(hashLength)), () => Math.floor(Math.random() * 36).toString(36)).join('')
}

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

function getEntry() {
  let globPath = resolve('src/templates/**/*.html')
  // (\/|\\\\) 这种写法是为了兼容 windows和 mac系统目录路径的不同写法
  let reDir = /(.*?)src(\/|\\\\)templates(\/|\\\\)(.*?)/
  let files = glob.sync(globPath)
  let dirname, entries = []

  for (let f of files) {
    dirname = path.dirname(f)
    entries.push(dirname.replace(reDir, '$4'))
  }

  return entries
}

exports.addEntry = () => {
  let entryObj = {}

  if (config.mode) {
    return {
      main: resolve('src/main.js')
    }
  }

  getEntry().forEach(item => {
    entryObj[item] = resolve(`src/templates/${item}/index.js`)
  })

  return entryObj
}

exports.htmlConfig = (env = 'development') => {

  let htmlPlugin = []
  let hash = createHash()

  if (config.mode) {
    let conf = {
      filename: 'index.html',
      template: 'public/index.html',
      vendor: `./vendor.dll.js?${hash}`,
      inject: true,
      // hash: true
    }

    if (env !== 'development') {
      conf.minify = {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    }

    return [new HtmlWebpackPlugin(conf)]
  }

  getEntry().forEach(item => {
    let conf = {
      filename: `${item}.html`,
      template: resolve(`src/templates/${item}/index.html`),
      chunks: [item, 'common'],
      vendor: `./vendor.dll.js?${hash}`,
      inject: true
    }

    if (env !== 'development') {
      conf.minify = {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    }

    htmlPlugin.push(new HtmlWebpackPlugin(conf))
  })

  return htmlPlugin
}
