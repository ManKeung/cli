'use strict';

const path = require('path');
const config = require('../config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const packageConfig = require('../package.json');

// 文件路径 _path [String = 'static'] 路径
exports.assetsPath = function (_path = 'static') {
  const assetsSubDirectory = process.env.NODE_ENV === 'production' ?
    config.BUILD.assetsSubDirectory :
    config.DEV.assetsSubDirectory;

  return path.posix.join(assetsSubDirectory, _path);
}

exports.htmlConfig = (env = 'development') => {
  const conf = {
    filename: 'index.html',
    template: 'public/index.html',
    inject: true,
    hash: true
  };

  if (env !== 'development') {
    conf.minify = {
      removeComments: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true
    }
  }

  return [new HtmlWebpackPlugin(conf)];
}

exports.createNotifierCallback = () => {
  const notifier = require('node-notifier');

  return (severity, errors) => {
    if (severity !== 'error') return;

    const error = errors[0];
    const filename = error.file && error.file.split('!').pop();

    notifier.notify({
      title: packageConfig.name,
      message: severity + ': ' + error.name,
      subtitle: filename || '',
      icon: path.join(__dirname, 'logo.png')
    });
  }
}