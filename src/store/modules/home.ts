/*
 * @Description: home
 * @Author: Mankeung
 * @Date: 2020-10-10 14:05:13
 * @LastEditors: Mankeung
 * @LastEditTime: 2020-10-10 14:05:57
 */
const state = {
  home: '你好！欢迎来到MK'
}

/* const getters = {
  home (state) {
    return state.home
  }
} */

const mutations = {
  setHome (state: { home: any }, home: any) {
    state.home = home
  }
}

const actions = {
  changeHome ({
    commit,
    state
  }: any, addHome: any) {
    commit('setHome', state.home + addHome)
  }
}

export default {
  namespaced: true,
  state,
  // getters,
  mutations,
  actions
}
