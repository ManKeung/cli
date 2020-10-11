import router from './routers'
import store from './store'
// import { Message } from 'element-ui'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from './utils/auth'
// import { getToken } from './utils/auth'

NProgress.configure({ showSpinner: false })// NProgress configuration

const whiteList = ['/login']

router.beforeEach((to, _from, next) => {
  to.meta.title && (document.title = to.meta.title)
  NProgress.start()

  if (getToken()) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      if (!store.getters.role) { // 判断当前用户是否已拉取完user_info信息
        store.dispatch('GetInfo').then(res => {
          const permissions = res.data.permissions

          store.dispatch('GenerateRoutes', permissions).then(() => {
            router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表

            next({ ...to, replace: true })
          })
        }).catch(() => {
          store.dispatch('FedLogOut').then(() => {
            next({
              path: '/'
            })
          })
        })
      } else {
        next()
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next({ path: '/login' })
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})
