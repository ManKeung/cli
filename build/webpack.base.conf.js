const path = require('path')
const webpack = require('webpack')

// 目录枚举
const BASE_PATH = '../src/public/assets/app'
const BASE_INDEX_PATH = '../src/public/assets/app/index'
const BASE_MY_PATH = '../src/public/assets/app/my'

module.exports = {
  entry: {
    // 'vendor': ['jquery', 'loadash'] // 公用库打包
    'index': path.resolve(__dirname, BASE_INDEX_PATH + '/index'),
    'my': path.resolve(__dirname, BASE_MY_PATH + '/my')
  },
  output: {
    publicPath: '/',
    filename: 'scripts/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader?cacheDirectory=true']
      }
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, '../node_modules')],
    alias: {
      app: path.resolve(__dirname, BASE_PATH)
    }
  },
  externals: {
    'jquery': '$'
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery'
    })
  ],
  optimization: {
    runtimeChunk: {
      name: "manifest",
    }
  }
}