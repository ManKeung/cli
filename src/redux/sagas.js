import { all } from 'redux-saga/effects'
import { sagas as homeSaga } from '../views/home/redux'

function* root () {
  yield all([
    ...homeSaga
  ])
}

export default root
