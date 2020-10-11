/*
 * @Description: actions
 * @Author: Mankeung
 * @Date: 2020-10-10 13:58:28
 * @LastEditors: Mankeung
 * @LastEditTime: 2020-10-10 13:58:57
 */
import * as TYPES from './types'

const actions = {
  [TYPES.ADD1000] (vuex: { commit: (arg0: string, arg1: any) => void; state: { count: number } }) {
    vuex.commit(TYPES.SET_COUMT, vuex.state.count + 1000)
  },
  [TYPES.REDUCE1000] (vuex: { commit: (arg0: string, arg1: any) => void }, v: any) {
    vuex.commit(TYPES.SET_COUMT, v)
  }
}

export default actions
