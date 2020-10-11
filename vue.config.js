module.exports = {
  // 基本路径
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  // 输出文件目录
  outputDir: 'build',
  // 静态资源
  assetsDir: 'static',
  // 是否保存的时候检查
  lintOnSave: true,
  // 生产环境是否生产 sourceMap
  productionSourceMap: process.env.VUE_APP_ENV === 'test环境',
  // webpack-dev-server配置
  devServer: {
    open: true,
    // host: '127.0.0.1',
    port: 8000,
    https: false,
    hotOnly: true,
    proxy: null // 设置代理
    // before: app => { }
  }
}
