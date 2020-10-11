const baseConfig = require('./webpack.base.conf')
const merge = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = merge(baseConfig, {
  mode: 'production',
  optimization: {
    ...baseConfig.optimization,
    minimizer: [new TerserPlugin({
      terserOptions: {
        compress: {
          drop_console: true,
        }
      }
    })], // 替换js压缩默认配置
  }
})