'use strict'

// webpack 公共配置

const path = require('path')
const config = require('../config')
const utils = require('./utils')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')


function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: utils.addEntry(),
  output: {
    path: config.build.assetsRoot,
  },
  optimization: { //webpack4.x的最新优化配置项，用于提取公共代码
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: "initial",
          name: "common",
          minChunks: 2,
          maxInitialRequests: 5, // The default limit is too small to showcase the effect
          minSize: 0, // This is example is too small to create commons chunks
          reuseExistingChunk: true // 可设置是否重用该chunk（查看源码没有发现默认值）
        },
        // // 首先： 打包node_modules中的文件
        // vendor: {
        //   name: 'vendor',
        //   test: /[\\/]node_modules[\\/]/,
        //   chunks: "all",
        //   priority: 10,
        //   // enforce: true
        // }
      }
    }
  },
  resolve: {
    modules: [resolve('node_modules')],
    mainFields: ['style', 'main', 'module'],
    extensions: ['.js', '.scss', '.less', '.css', '.json'],
    alias: {
      '@': resolve('src')
    }
  },
  node: {
    setImmediate: false,
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
  plugins: [
    new webpack.ProvidePlugin({ // 在每个模块中注入$
      $: 'jquery'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: resolve('public'),
          to: resolve('dist'),
          globOptions: {
            ignore: ['*.html']
          }
        }
      ]
    }),
    new webpack.DllReferencePlugin({
      manifest: path.join(config.build.assetsRoot, 'manifest.json')
    })
  ]
}