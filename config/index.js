'use strict';

const path = require('path');

module.exports = {
  DEV: {
    devtool: 'cheap-module-source-map',
    assetsPublicPath: '/',
    assetsSubDirectory: 'static',
    host: 'localhost',
    port: 8080,
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false,
    useEslint: true,
    showEslintErrorsInOverlay: false
  },
  BUILD: {
    assetsRoot: path.resolve(__dirname, '../dist'),
    devtool: 'source-map',
    productionSourceMap: false,
    assetsSubDirectory: 'static',
    bundleAnalyzerReport: process.env.yarn_config_report
  }
};