/*
 * @Description: main
 * @Author: Mankeung
 * @Date: 2020-10-10 11:09:49
 * @LastEditors: Mankeung
 * @LastEditTime: 2020-10-10 14:48:08
 */
import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './store/module'
// 过滤器
import * as filters from './filters'

// 引入公共样式
import './scss/index.scss'

import hacks from 'viewport-units-buggyfill/viewport-units-buggyfill.hacks'
import viewport from 'viewport-units-buggyfill'

// 移动端调试
// eslint-disable-next-line no-unused-vars
// import vConsole from './utils/vconsole'

viewport.init({ hacks })

// token
const token = null

// 遍历所有导出的过滤器并添加到全局过滤器
Object.keys(filters).forEach((key) => {
  Vue.filter(key, (filters as any)[key])
})

Vue.config.productionTip = false

console.log(process.env.VUE_APP_ENV)


router.beforeEach((to, _from, next) => {
  // 路由跳转 => 触发取消正在请求
  if (window._axiosPromiseArr) {
    window._axiosPromiseArr.forEach((ele, index) => {
      ele.cancel()
      delete window._axiosPromiseArr[index]
    })
  }

  document.title = to.meta.title || document.title
  // next()
  // 根据字段判断是否路由过滤
  if (to.matched.some(record => record.meta.auth)) {
    if (token !== null) {
      next()
    } else {
      // 防止无限循环
      if (to.name === 'login') {
        next()
        return
      }
      next({
        path: '/login'
      })
    }
  } else {
    next() // 若点击的是不需要验证的页面,则进行正常的路由跳转
  }
})

router.afterEach(() => {
  Vue.nextTick(() => {
    // document.documentElement.scrollTop = document.body.scrollTop = 0
    window.scrollTo(0, 0)
  })
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
