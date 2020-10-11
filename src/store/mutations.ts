/*
 * @Description: mutations
 * @Author: Mankeung
 * @Date: 2020-10-10 14:00:54
 * @LastEditors: Mankeung
 * @LastEditTime: 2020-10-10 14:01:26
 */
import * as TYPES from './types'

const mutations = {
  [TYPES.SET_COUMT] (state: { count: any }, v: any) {
    state.count = v
  },
  [TYPES.SET_COUMT_ADD] (state: { count: number }, v: any) {
    if (v) {
      state.count += v
    } else {
      state.count++
    }
  },
  [TYPES.SET_COUMT_REDUCE] (state: { count: number }, v: number) {
    if (v) {
      state.count -= v
    } else {
      state.count--
    }
  }
}

export default mutations
