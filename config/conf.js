// 项目域名地址
// const url = 'http://10.8.49.58:13600'
const url = 'http://10.8.49.138:30881'
// const url = 'http://192.168.203.151:30881'
// const url = 'http://ggsep7.natappfree.cc'

let ROOT
const FAMILY = '/familys'
// let FAMILY = 'https://mywx.zone139.com/SC/v20/family' // 正式环境
// let FAMILY = 'http://221.176.34.113:8761/v20/family' // 测试环境

if (process.env.NODE_ENV === 'development') {
  // 开发环境下的代理地址，解决本地跨域跨域，配置在config目录下的index.js dev.proxyTable中
  ROOT = '/apis'
} else {
  // 生产环境下的地址
  ROOT = url
}

// 代理指向地址
exports.PROXYROOT = url
exports.ROOT = ROOT
exports.FAMILY = FAMILY
