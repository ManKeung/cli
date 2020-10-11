import JSONP from 'jsonp'
import AXIOS from 'axios'
import router from '../routes'
import { METHODTYPE, HTTPURL } from './conf'

export function param (data) {
  let url = ''

  // eslint-disable-next-line no-unused-vars
  for (let k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += '&' + k + '=' + encodeURIComponent(value)
  }

  return url ? url.substring(1) : ''
}

export default class Axios {
  static jsonp (options) {
    let url = options.url
    let params = options.data && (options.data.params || {})
    let option = options.option || { param: 'callback' }
    url += (url.indexOf('?') < 0 ? '?' : '&') + param(params)

    return new Promise((resolve, reject) => {
      JSONP(url, option, (err, response) => {
        if (!err) {
          resolve(response)
          return
        }
        reject(err)
      })
    })
  }

  static ajax (options) {
    const url = options.url
    const method = options.type || METHODTYPE.GET
    const data = method.toUpperCase() === METHODTYPE.GET ? 'params' : 'data'
    let headers = {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json'
    }

    if (options.headers) {
      headers = {
        ...headers,
        ...options.headers
      }
    }

    return new Promise((resolve, reject) => {
      // 请求拦截
      AXIOS.interceptors.request.use(config => {
        // 在发送请求设置cancelToken
        config.cancelToken = new AXIOS.CancelToken(cancel => {
          window._axiosPromiseArr.push({
            cancel
          })
        })
        return config
      }, error => {
        return Promise.reject(error)
      })

      // 响应拦截
      AXIOS.interceptors.response.use(response => {
        // 请求成功处理
        let data = response.data
        // 判断token过期, 重新登录
        if (data && data.code === 1005) {
          console.log('进入登录拦截')
          router.push({
            name: 'login'
          })
        } else if (data && data.code === 500) {
          console.log('500捕获')
          alert(data.msg)
        }

        return response
      }, error => {
        // 请求取消时，也会进入error，根据axios.isCancel(): true--请求取消 false--请求失败
        // 仅在请求失败时做后续处理
        if (AXIOS.isCancel(error)) {
          console.log('请求取消')
        } else {
          console.log('连接服务器失败')
          return Promise.reject(error)
        }
      })

      AXIOS({
        url,
        method,
        baseURL: options.baseURL || HTTPURL,
        headers,
        [data]: options.params || {},
        crossDomain: true, // 跨域设置
        withCredentials: true // 设置cross跨域 并设置访问权限 允许跨域携带cookie信息
      }).then(response => {
        let { data } = response
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  }
}
