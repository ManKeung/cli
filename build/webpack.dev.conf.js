const baseConfig = require('./webpack.base.conf')
const merge = require('webpack-merge')

module.exports = merge(baseConfig, {
  mode: 'development',
  // watch: true,
  // watchOptions: {
  //   // 当代码首次被改变后增加一个时间延迟
  //   // 如果在这段延迟时间内，又有其他代码发生了改变，
  //   // 则其他的改变也将在这段延迟时间后，一并进行编译
  //   aggregateTimeout: 500,

  //     // 不进行监测的文件
  //     // 监测大量的文件将占用CPU或许多内存空间，例如node_modules
  //     ignored: /node_modules/,

  //     // 每隔一段时间，自动检查代码的改变，例如1000表示每秒进行一次检查
  //     // 在观察模式不起作用的时候，可以尝试打开这个配置项
  //     poll: 1000
  // },
  devtool: 'inline-source-map'
})