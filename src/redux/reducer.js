import { combineReducers } from 'redux-immutable'
import { reducer as homeReducer } from '../views/home/redux'

export default combineReducers({
  home: homeReducer
})
