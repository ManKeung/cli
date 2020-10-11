import {
  select,
  fork,
  take,
  call,
  put,
  all,
  // takeLatest,
  takeEvery
} from 'redux-saga/effects'
import * as types from './types'
import * as selectors from './selectors'
import { initHome } from './actions'

function* home () {
  const name = yield select(selectors.getHome)
  const action = yield take(types.CHANGE_HOME_DATA)
  console.log(name)
  alert(name)
  console.log(action)
}

function* getList () {
  const data = 'mankeung'
  const action = initHome(data.data)
  yield put(action)
}

function* getData () {
  const data = 'muqing'
  const action = initHome(data.data)
  yield put(action)
}

function* initData () {
  // const a = yield take(types.CHANGE_HOME_INIT);
  // console.log(a);
  yield all([
    call(getData),
    call(getList)
  ])
  // yield call(getList);
}

// export function* init() {
//   while (true) {
//     const a = yield take(types.CHANGE_INIT);
//     console.log(a);
//     yield fork(initData);
//   }
// }

function* init () {
  yield takeEvery(types.CHANGE_INIT, initData)
  // yield takeLatest(types.CHANGE_INIT, initData); // 和takeEvery不同，在任何时刻 takeLatest 只允许执行一个 fetchData 任务，并且这个任务是最后被启动的那个，如果之前已经有一个任务在执行，那之前的这个任务会自动被取消
}

export default [
  fork(home),
  fork(init)
]
