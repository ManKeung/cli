import http from '../axios'

// 获取用户信息
export function getUserInfo () {
  return http({
    url: '/user',
    method: 'get'
  })
}
