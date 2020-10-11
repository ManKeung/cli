/*
 * @Description: 
 * @Author: Mankeung
 * @Date: 2020-09-30 14:05:42
 * @LastEditors: Mankeung
 * @LastEditTime: 2020-09-30 14:14:35
 */
import { fromJS } from 'immutable'
import * as types from './types'
import TYPES from './type'

export const changeHome = (name: TYPES.NAME) => ({
  type: types.HOMECHANGEDATA,
  name
})

export const initHome = (data: TYPES.DATA) => ({
  type: types.HOMECHANAGEINIT,
  data: fromJS(data)
})

export const init = () => ({
  type: types.HOMEINIT
})