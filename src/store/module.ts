/*
 * @Description: module
 * @Author: Mankeung
 * @Date: 2020-10-10 14:07:05
 * @LastEditors: Mankeung
 * @LastEditTime: 2020-10-10 14:07:41
 */
import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import test from './modules/test'
import * as getters from './getters'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    home,
    test
  },
  getters,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
