const config = require('./conf')

module.exports = {
  proxy: {
    [config.ROOT]: { // 将www.exaple.com印射为/apis
      target: config.PROXYROOT, // 接口域名
      // secure: false, // 如果是https接口，需要配置这个参数
      changeOrigin: true, // 是否跨域
      // logLevel: 'debug', // 调试
      pathRewrite: {
        [`^${config.FAMILY}`]: `${config.ROOT}/v20/family/free`
      }
    }
  }
}
