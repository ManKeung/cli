import { getToken, setToken, removeToken } from '../../utils/auth'
import { login, logOut } from '../../api/login'
import { getUserInfo } from '../../api/user'
import config from '../../config'

const user = {
  state: {
    token: getToken(),
    avatar: '',
    name: '',
    role: '',
    permissions: '',
    msgNum: '',
    topNav: []
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, role) => {
      state.role = role
    },
    SET_PERMISSIONS: (state, permissions) => {
      state.permissions = permissions
    },
    SET_MSGNUM: (state, msgNum) => {
      state.msgNum = msgNum
    },
    SET_TOPNAV: (state, topNav) => {
      state.topNav = topNav
    }
  },

  actions: {
    // 登录
    Login ({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo).then(({ data }) => {
          if (data.code === config.CODE.ok) {
            setToken(data.data.token)
            commit('SET_TOKEN', data.data.token)
          }

          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 获取用户信息
    GetInfo ({ commit }) {
      return new Promise((resolve, reject) => {
        getUserInfo().then(({ data }) => {
          if (data.code === config.CODE.ok) {
            commit('SET_NAME', data.data.name)
            commit('SET_AVATAR', data.data.avatar)
            commit('SET_ROLES', data.data.role)
            commit('SET_PERMISSIONS', data.data.permissions)
            commit('SET_MSGNUM', data.data.msgNum)
            commit('SET_TOPNAV', data.data.topNav)
          } else {
            reject(data)
          }
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 登出
    LogOut ({ commit }) {
      return new Promise((resolve, reject) => {
        logOut().then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', '')
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 前端 登出
    FedLogOut ({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', '')
        removeToken()
        resolve()
      })
    }
  }
}

export default user
