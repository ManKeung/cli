import axios from 'axios'
import { Message } from 'element-ui'
import { getToken } from '../utils/auth'
import conf from '../config'

const http = axios.create({
  baseURL: conf.BASE_API
  // timeout: 60 * 1000 // 请求超时
})

// request拦截器
http.interceptors.request.use(
  config => {
    const token = getToken()
    if (token) {
      config.headers['X-Token'] = getToken()
    }

    return config
  },
  error => {
    console.log(error)
    Promise.reject(error)
  }
)

// response拦截器
http.interceptors.response.use(
  response => {
    /**
     * code为非20000是抛错 可结合自己业务进行修改
     */
    const res = response.data

    if (res.stat && res.stat !== 'sucess') {
      Message({
        message: res.msg,
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(res.msg)
    } else {
      if (res.stat) {
        return res
      } else {
        return response
      }
    }
  },
  error => {
    console.log(`err${error}`) // fordebug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default http
