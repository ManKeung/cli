import Home from '../views/Home.vue'
import { KEEPALIVE as keepAlive } from '../config'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      index: 0,
      title: '首页',
      keepAlive
    }
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      index: 1,
      title: '关于',
      auth: true,
      keepAlive
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      index: 2,
      title: '登录',
      keepAlive
    },
    component: () => import(/* webpackChunkName: "no" */ '../views/Login.vue')
  },
  {
    path: '/404',
    name: 'no',
    meta: {
      index: 100,
      title: '404',
      keepAlive
    },
    component: () => import(/* webpackChunkName: "no" */ '../views/NotFound.vue')
  },
  {
    path: '*',
    redirect: '/404'
  }
]

export default routes
