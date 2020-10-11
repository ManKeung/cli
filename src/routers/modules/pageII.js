import Layout from '../../views/layout/Layout.vue'
import Home from '../../views/pageII'

const routes = [
  {
    path: '/home2',
    component: Layout,
    meta: {
      permission: ['1'],
      title: '首页',
      icon: 'el-icon-user'
    },
    children: [
      {
        path: '',
        name: 'Home2',
        component: Home,
        // component: () => import(/* webpackChunkName: "home2" */ '../../views/pageII'),
        meta: {
          title: '首页'
        }
      },
      {
        path: 'a',
        name: 'Home2',
        component: Home,
        meta: {
          title: '服务商'
        }
      },
      {
        path: 'c',
        component: Home,
        meta: {
          title: '其他',
          icon: 'el-icon-document'
        },
        children: [
          {
            path: '',
            name: 'Home3',
            component: Home,
            // component: () => import(/* webpackChunkName: "home" */ '../../views/pageI'),
            meta: {
              title: '医护人员'
            }
          },
          {
            path: 'd',
            name: 'Home4',
            component: Home,
            // component: () => import(/* webpackChunkName: "home" */ '../../views/pageI'),
            meta: {
              title: '管理员'
            }
          }
        ]
      }
    ]
  }
]

export default routes
