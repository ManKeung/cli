import { asyncRouterMap, constantRouterMap } from '../../routers'

/**
 * 通过路由判断用户权限是否匹配
 * @param {用户权限} permissions
 * @param {路由} route
 */
function hasPermission (permissions, route) {
  if (route.meta && route.meta.permission) {
    return permissions.some(au => route.meta.permission.includes(au))
  } else {
    return true
  }
}

/**
 * 递归过滤异步路由表， 返回符合用户角色权限的路由表
 * @param {路由} routes
 * @param {用户权限} permissions
 */
function filterAsyncRouter (routes, permissions) {
  const res = []

  routes.forEach(route => {
    const tmp = { ...route }

    if (hasPermission(permissions, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRouter(tmp.children, permissions)
      }

      res.push(tmp)
    }
  })

  return res
}

const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: [],
    systemType: ''
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
    },
    SET_SYSTEMTYPE: (state, systemType) => {
      state.systemType = systemType
    }
  },
  actions: {
    GenerateRoutes ({ commit }, permissions) {
      return new Promise(resolve => {
        const accessedRouters = filterAsyncRouter(asyncRouterMap, permissions)
        commit('SET_ROUTERS', accessedRouters)
        resolve()
      })
    },
    SetType ({ commit }, systemType) {
      commit('SET_SYSTEMTYPE', systemType)
    }
  }
}

export default permission
