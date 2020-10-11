'use strict'

// webpack icon

const WebpackIconfontPluginNodejs = require('webpack-iconfont-plugin-nodejs')
const path = require('path')


function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

const options = {
  fontName: 'my-icons',
  cssPrefix: 'ico',
  svgs: resolve('src/icons/svg/*.svg'),
  // template: path.join(dir, 'css.njk'),
  fontsOutput: resolve('src/icons/fonts/'),
  cssOutput: resolve('src/icons/fonts/font.css'),
  htmlOutput: resolve('src/icons/fonts/_font-preview.html'),
  jsOutput: resolve('src/icons/fonts/fonts.js'),
  // formats: ['ttf', 'woff', 'svg'],
}

new WebpackIconfontPluginNodejs(options).build()