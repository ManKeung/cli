'use strict'

// webpack生成配置

const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin")
const WebpackParallelUglifyPlugin = require('webpack-parallel-uglify-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCss = require('optimize-css-assets-webpack-plugin')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const glob = require('glob')
const RULES = require('./loaders')

const smp = new SpeedMeasurePlugin()

const proWebpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  devtool: config.build.productionSourceMap ? config.build.devtool : false,
  output: {
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js'),
    publicPath: config.build.assetsPublicPath
  },
  module: {
    rules: [...RULES('prod')]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/prod.env')
    }),
    new OptimizeCss({
      cssProcessor: require('cssnano'),
      cssProcessorOptions: {
        discardComments: {
          removeAll: true
        }
      },
      canPrint: true
    }),
    new PurgecssPlugin({
      paths: glob.sync(`${path.join(__dirname, '..', 'public')}/*`, {
        nodir: true // 不匹配目录，只匹配文件
      }),
    }),
    ...utils.htmlConfig('prod'),
    new MiniCssExtractPlugin({
      filename: utils.assetsPath('css/[name].[hash:8].css'),
      chunkFilename: utils.assetsPath('css/[id].css')
    }),
    new webpack.HashedModuleIdsPlugin(),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*', '*', '!vendor.dll.js', '!manifest.json']
    }),
    new WebpackParallelUglifyPlugin({
      uglifyJS: {
        output: {
          beautify: false, //不需要格式化
          comments: false //不保留注释
        },
        warnings: true, // 是否在UglifyJS删除没有用到的代码时输出警告信息，默认为false
        compress: {
          drop_console: process.env.NODE_ENV === 'production', // 删除所有的 `console` 语句，可以兼容ie浏览器
          collapse_vars: true, // 内嵌定义了但是只用到一次的变量
          reduce_vars: true // 提取出出现多次但是没有定义成变量去引用的静态值
        }
      }
    }),
    new webpack.BannerPlugin(`make ${new Date()} by mankeung ${process.env.NODE_ENV}`)
  ]
})

if (config.build.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  proWebpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = config.build.bundleAnalyzerReport ? smp.wrap(proWebpackConfig) : proWebpackConfig