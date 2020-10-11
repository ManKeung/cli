/*
 * @Description: 路由
 * @Author: Mankeung
 * @Date: 2020-10-10 10:21:42
 * @LastEditors: Mankeung
 * @LastEditTime: 2020-10-10 10:30:38
 */
import loadable from '@loadable/component'
const Home = loadable(() => import('../views/home'))
const No = loadable(() => import('../views/no'))
const About = loadable(() => import('../views/about'))
const AboutMe = loadable(() => import('../views/about/me'))
const AboutBus = loadable(() => import('../views/about/bus'))

export default [
  {
    path: '/',
    component: Home,
    title: '首页',
    exact: true
  },
  {
    path: '/about',
    component: About,
    title: '关于',
    routes: [
      {
        path: '/about/bus',
        component: AboutBus,
        title: 'bus'
      },
      {
        path: '/about',
        component: AboutMe,
        title: '关于我'
      }
    ]
  },
  {
    path: '/404',
    component: No,
    title: '404'
  }
]