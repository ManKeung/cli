/*
 * @Description: sagas
 * @Author: Mankeung
 * @Date: 2020-09-26 16:01:05
 * @LastEditors: Mankeung
 * @LastEditTime: 2020-09-30 14:26:14
 */
import { all } from 'redux-saga/effects'
import { saga as homeSaga} from './home'


function* root () {
  yield all([
    ...homeSaga
  ])
}

export default root