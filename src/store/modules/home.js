const state = {
  home: '你好！欢迎来到MK'
}

/* const getters = {
  home (state) {
    return state.home
  }
} */

const mutations = {
  setHome (state, home) {
    state.home = home
  }
}

const actions = {
  changeHome ({
    commit,
    state
  }, addHome) {
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
