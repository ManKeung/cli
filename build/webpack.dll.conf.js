const webpack = require('webpack')
const pkg = require('../package.json')
const path = require('path')
const config = require('../config')

function filterTypes () {
  const tpsReg = /^@/i

  return Object.keys(pkg.dependencies).filter(item => {
    return !tpsReg.test(item)
  })
}

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    vendor: filterTypes()
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].dll.js',
    library: '_dll_[name]' // 全局变量名，其他模块会从此变量上获取里面模块
  },
  plugins: [
    new webpack.DllPlugin({
      name: '_dll_[name]',
      path: path.join(config.build.assetsRoot, 'manifest.json'),
      context: path.resolve(__dirname, '..')
    })
  ]
}