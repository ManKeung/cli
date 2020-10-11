/*
 * @Description: 
 * @Author: Mankeung
 * @Date: 2020-09-30 14:05:54
 * @LastEditors: Mankeung
 * @LastEditTime: 2020-09-30 14:27:12
 */
import { fromJS } from 'immutable'
import * as types from './types'

const defaultState = fromJS({
  name: 'Hello saga',
  list: []
})

const addInit = (state: any, action: any) => {
  return state.set('list', state.get('list').concat(action))
}

export default (state = defaultState, action: { type: any; name: any }) => {
  switch (action.type) {
    case types.HOMECHANGEDATA:
      return state.set('name', action.name)
    case types.HOMECHANAGEINIT:
      return addInit(state, action)
    default:
      return state
  }
}