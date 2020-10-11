/*
 * @Description:
 * @Author: Mankeung
 * @Date: 2020-10-10 11:09:49
 * @LastEditors: Mankeung
 * @LastEditTime: 2020-10-10 14:04:47
 */
import Vue from 'vue'
import Vuex from 'vuex'
import state from './states'
import getters from './getter'
import mutations from './mutations'
import actions from './actions'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'


export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
