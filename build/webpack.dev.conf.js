'use strict';

// 开发配置

const path = require('path');
const webpack =require('webpack');
const config = require('../config');
const {merge} = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const portfinder = require('portfinder');
const RULES = require('./loaders');
const utils = require('./utils');

const HOST = process.env.HOST;
const PORT = process.env.PORT && Number.parseInt(process.env.PORT);

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: config.DEV.devtool,
  output: {
    path: config.DEV.assetsPublicPath,
    publicPath: config.DEV.assetsPublicPath
  },
  devServer: {
    contentBase: path.join(__dirname, '..', 'dist'),
    clientLogLevel: 'warning',
    historyApiFallback: true,
    hot: true,
    compress: true,
    host: HOST || config.DEV.host,
    port: PORT || config.DEV.port,
    open: config.DEV.autoOpenBrowser,
    overlay: config.DEV.errorOverlay ? { warnings: false, errors: true } : false,
    publicPath: config.DEV.assetsPublicPath,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.DEV.poll,
    }
  },
  module: {
    rules: [
      ...RULES()
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    ...utils.htmlConfig()
  ]
});

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.DEV.port;

  portfinder.getPort((err, port) => {
    if (err) {
      reject(err);
    } else {
      process.env.PORT = port;
      devWebpackConfig.devServer.port = port;

      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is runing here: http://${devWebpackConfig.devServer.host}:${port}`],
          // notes: ['----------']
        },
        onErrors: config.DEV.notifyOnErrors ? utils.createNotifierCallback() : undefined
      }));
      resolve(devWebpackConfig);
    }
  });
});