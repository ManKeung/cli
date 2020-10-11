'use strict';

// webpack 公共配置

const path = require('path');
const config = require('../config');
const CopywebpackPlugin = require('copy-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

// 路劲方法 dir [String = ''] 路径 defalut
function resolve(dir = '') {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    main: resolve('./src/main.ts')
  },
  output: {
    path: config.BUILD.assetsRoot
  },
  resolve: {
    modules: [resolve('node_modules')],
    mainFields: ['style', 'main', 'module'],
    extensions: ['.ts', 'tsx', '.js', '.scss', '.less', '.css', '.json'],
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
    new CopywebpackPlugin({
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
    new ForkTsCheckerWebpackPlugin({
      eslint: {
        files: [resolve('src')]
      }
    })
  ]
};