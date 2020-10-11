/*
 * @Description: axios
 * @Author: Mankeung
 * @Date: 2020-09-26 16:32:42
 * @LastEditors: Mankeung
 * @LastEditTime: 2020-09-30 14:45:07
 */
import JSONP from 'jsonp'
import AXIOS from 'axios'
import { METHODTYPE, HTTPURL } from './conf'


export function param (data: { [x: string]: any }): string {
  let url: string = ''

  for (const k in data) {
    const value = data[k] !== undefined ? data[k] : ''
    url += '&' + k + '=' + encodeURIComponent(value)
  }

  return url ? url.substring(1) : ''
}

export default class Axios {

  static jsonp (options: { url: any; data?: { params: any }; option?: { param: string } }) {
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

  static ajax(options: { url: any; type?: any; headers?: { 'X-Requested-With': string; 'Content-Type'?: string }; baseURL?: any; params?: any }) {
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
        } else if (data && data.code === 500) {
          console.log('500捕获')
          alert(data.msg)
        }

        return response
      }, error => {
        console.log('连接服务器失败')
        return Promise.reject(error)
      })

      AXIOS({
        url,
        method,
        baseURL: options.baseURL || HTTPURL,
        headers,
        [data]: options.baseURL || {},
        withCredentials: true
      }).then(response => {
        const { data } = response
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  }
}