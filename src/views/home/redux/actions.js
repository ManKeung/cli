import { fromJS } from 'immutable'
import * as types from './types'

export const changeHome = name => ({
  type: types.CHANGE_HOME_DATA,
  name
})

export const initHome = data => ({
  type: types.CHANGE_HOME_INIT,
  data: fromJS(data)
})

export const init = () => ({
  type: types.CHANGE_INIT
})
