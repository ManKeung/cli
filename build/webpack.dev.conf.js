'use strict'

// webpack 开发配置

const path = require('path')
const webpack = require('webpack')
const config = require('../config')
const utils = require('./utils')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')
const RULES = require('./loaders')

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

// console.log(...RULES())

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: config.dev.devtool,
  output: {
    path: config.dev.assetsPublicPath,
    publicPath: config.dev.assetsPublicPath
  },
  devServer: {
    contentBase: path.join(__dirname, '..', 'dist'),
    clientLogLevel: 'warning',
    historyApiFallback: true,
    hot: true,
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay ? { warnings: false, errors: true } : false,
    publicPath: config.dev.assetsPublicPath,
    // proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    }
  },
  module: {
    rules: [
      ...RULES(),
      {
        test: /\.js$/,
        use: [{
          loader: 'eslint-loader',
          options: { // 这里的配置项参数将会被传递到 eslint 的 CLIEngine
            formatter: require('eslint-friendly-formatter') // 指定错误报告的格式规范
          }
        }],
        enforce: 'pre', // 编译前检查
        exclude: /node_modules/, // 不检测的文件
        include: path.join(__dirname, '..', 'src'), // 指定检查的目录
      }
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
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port

  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      process.env.PORT = port
      devWebpackConfig.devServer.port = port

      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is runing here: http://${devWebpackConfig.devServer.host}:${port}`],
          // notes: ['----------']
        },
        onErrors: config.dev.notifyOnErrors ? utils.createNotifierCallback() : undefined
      }))
      resolve(devWebpackConfig)
    }
  })
})
