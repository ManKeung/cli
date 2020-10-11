export default {
  BASE_API: process.env.NODE_ENV === 'production' ? '/med' : '/apis/med',
  CODE: {
    ok: 1100000000,
    err: 1100000001, // 接口错误
    auth: 11000000002 // 用户未登录
  }
}
