'use strict'

// webpack icon

const WebpackIconfontPluginNodejs = require('webpack-iconfont-plugin-nodejs')
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const options = {
  fontName: 'my-icons',
  cssPrefix: 'ico',
  svgs: resolve('src/icons/*.svg'),
  // template: path.join(dir, 'css.njk'),
  fontsOutput: resolve('src/assets/fonts/'),
  cssOutput: resolve('src/assets/fonts/font.css'),
  htmlOutput: resolve('src/assets/fonts/_font-preview.html'),
  jsOutput: resolve('src/assets/fonts/fonts.js')
  // formats: ['ttf', 'woff', 'svg'],
}

new WebpackIconfontPluginNodejs(options).build()
