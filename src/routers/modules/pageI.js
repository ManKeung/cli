import Layout from '../../views/layout'
import Home from '../../views/pageI'

const routes = [
  {
    path: '/account',
    component: Layout,
    meta: {
      permission: ['0'],
      title: '员工账号管理',
      icon: 'el-icon-tickets',
      type: 'account'
    },
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
        // component: () => import(/* webpackChunkName: "home" */ '../../views/pageI'),
        meta: {
          title: '工作人员',
          type: 'account'
        }
      },
      {
        path: 'a',
        name: 'Home2',
        component: Home,
        meta: {
          title: '服务商',
          type: 'account'
        }
      },
      {
        path: 'c',
        component: Home,
        meta: {
          title: '其他',
          icon: 'el-icon-document',
          type: 'account'
        },
        children: [
          {
            path: '',
            name: 'Home3',
            component: Home,
            // component: () => import(/* webpackChunkName: "home" */ '../../views/pageI'),
            meta: {
              title: '医护人员',
              type: 'account'
            }
          },
          {
            path: 'd',
            name: 'Home4',
            component: Home,
            // component: () => import(/* webpackChunkName: "home" */ '../../views/pageI'),
            meta: {
              title: '管理员',
              type: 'account',
              hidden: true
            }
          }
        ]
      }
    ]
  },
  {
    path: '/rights',
    component: Layout,
    meta: {
      permission: ['0'],
      title: '角色权限',
      icon: 'el-icon-tickets',
      type: 'rights'
    },
    children: [
      {
        path: '',
        name: 'Home11',
        component: Home,
        // component: () => import(/* webpackChunkName: "home" */ '../../views/pageI'),
        meta: {
          title: '工作人员',
          type: 'rights'
        }
      },
      {
        path: 'a',
        name: 'Home12',
        component: Home,
        meta: {
          title: '服务商',
          type: 'rights'
        }
      },
      {
        path: 'c',
        component: Home,
        meta: {
          title: '其他',
          icon: 'el-icon-document',
          type: 'rights'
        },
        children: [
          {
            path: '',
            name: 'Home13',
            component: Home,
            // component: () => import(/* webpackChunkName: "home" */ '../../views/pageI'),
            meta: {
              title: '医护人员',
              type: 'rights'
            }
          },
          {
            path: 'd',
            name: 'Home14',
            component: Home,
            // component: () => import(/* webpackChunkName: "home" */ '../../views/pageI'),
            meta: {
              title: '管理员',
              type: 'rights'
            }
          }
        ]
      }
    ]
  }
]

export default routes
