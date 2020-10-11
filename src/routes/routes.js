import loadable from '@loadable/component' // https://loadable-components.com/docs/fallback/
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
