import Vue from 'vue'
import VueRouter from 'vue-router'

import Redirect from '../views/Redirect.vue'

import PageI from './modules/pageI'
import PageII from './modules/pageII'

// 解决ElementUI导航栏中vue-router在3.0版本以上重复点击报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

export const constantRouterMap = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录'
    },
    hidden: true,
    component: () => import(/* webpackChunkName: "login" */ '../views/login')
  },
  {
    path: '/404',
    name: '404',
    meta: {
      title: '404'
    },
    hidden: true,
    component: () => import(/* webpackChunkName: "404" */ '../views/404.vue')
  },
  {
    path: '/',
    name: 'Redirect',
    component: Redirect,
    hidden: true
  }
]

export const asyncRouterMap = [
  ...PageI,
  ...PageII,
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

const router = new VueRouter({
  // mode: 'history',
  scrollBehavior: () => ({
    y: 0
  }),
  base: process.env.BASE_URL,
  routes: [
    ...constantRouterMap
    // ...asyncRouterMap
  ]
})

export default router
