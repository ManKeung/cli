import { fromJS } from 'immutable'
import * as types from './types'

const defaultState = fromJS({
  name: 'hello saga',
  list: []
})

const addInit = (state, action) => {
  // return state.merge({
  //   list: state.get('list').concat(action.data)
  // })

  return state.set('list', state.get('list').concat(action.data))
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.CHANGE_HOME_DATA:
      return state.set('name', action.name)
    case types.CHANGE_HOME_INIT:
      return addInit(state, action)
    default:
      return state
  }
}
