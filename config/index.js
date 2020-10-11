'use strict'

const path = require('path')
const proxyConfig = require('./proxyConfig')

module.exports = {
  mode: true, // 标记是单页面还是多页面
  dev: {
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: proxyConfig.proxy,
    devtool: 'cheap-module-source-map',
    host: 'localhost',
    port: 8080,
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false,
    useEslint: true,
    showEslintErrorsInOverlay: false
  },
  build: {
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',
    productionSourceMap: false,
    devtool: 'source-map',
    bundleAnalyzerReport: process.env.yarn_config_report
  }
}