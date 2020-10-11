'use strict';

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const config = require('../../config');

module.exports = (env = 'development') => {
  const baseCSS = ['css-loader', 'postcss-loader']

  if (env === 'development') {
    baseCSS.unshift({
      loader: 'style-loader'
    })
  } else {
    baseCSS.unshift({
      loader: MiniCssExtractPlugin.loader,
      options: {
        publicPath: config.BUILD.assetsSubDirectory === '' ? '../' : '../../'
      }
    })
  }

  const css = env === 'development' ? ['css-hot-loader', ...baseCSS] : baseCSS
  const less = [...css, 'less-loader']
  const scss = [...css, 'sass-loader']

  return {
    css,
    less,
    scss
  }
}