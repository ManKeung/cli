import * as TYPES from './type'

const actions = {
  [TYPES.ADD1000] (vuex) {
    vuex.commit(TYPES.SET_COUMT, vuex.state.count + 1000)
  },
  [TYPES.REDUCE1000] (vuex, v) {
    vuex.commit(TYPES.SET_COUMT, v)
  }
}

export default actions
