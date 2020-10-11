/*
 * @Description: reducer
 * @Author: Mankeung
 * @Date: 2020-09-26 14:45:55
 * @LastEditors: Mankeung
 * @LastEditTime: 2020-09-30 14:27:51
 */
import { combineReducers } from 'redux-immutable'
import { reducer as homeReducer } from './home'

export default combineReducers({
  home: homeReducer
})