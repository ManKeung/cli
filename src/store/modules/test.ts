/*
 * @Description: test
 * @Author: Mankeung
 * @Date: 2020-10-10 14:06:07
 * @LastEditors: Mankeung
 * @LastEditTime: 2020-10-10 14:06:37
 */
const state = {
  test: '---test---'
}

/* const getters = {
  test (state) {
    return state.test
  }
} */

const mutations = {
  setTest (state: { test: any }, test: any) {
    state.test = test
  }
}

/**
 * 第一个是 store, 第二个是 dispatch 调用时传过来的参数
 * store 这个对象又包含了 4 个键,
 * 其中 commit 是调用 mutations 用的,
 * dispatch 是调用 actions 用的, state 是当前模块的 state, 而 rootState 是根 state,
 */
const actions = {
  changeTest (
    store: { commit: any; dispatch: any; state: any; rootState: any },
    config = {}
  ) {
    const {
      commit,
      dispatch,
      state,
      rootState
    } = store
    console.log(state)
    console.log(rootState)
    console.log(rootState.home)
    commit('home/setHome', '-Mk-', {
      root: true
    })
    dispatch('home/changeHome', {}, {
      root: true
    })
  }
}

export default {
  namespaced: true,
  state,
  // getters,
  mutations,
  actions
}
