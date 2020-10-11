import http from '../axios'

// 获取验证码
export function getCode () {
  return http({
    url: '/login/code',
    method: 'get'
  })
}

// 登录
export function login (data) {
  return http({
    url: '/login',
    method: 'post',
    data
  })
}

// 登出
export function logOut () {
  return http({
    url: '/login/out',
    method: 'post'
  })
}
