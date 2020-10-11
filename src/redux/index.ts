/*
 * @Description: redux
 * @Author: Mankeung
 * @Date: 2020-09-26 16:02:45
 * @LastEditors: Mankeung
 * @LastEditTime: 2020-09-30 14:28:03
 */
import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducers'
import rootSaga from './sagas'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const sagaMiddlewar = createSagaMiddleware()
const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose
const middlewares = [sagaMiddlewar]

if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger')
  middlewares.push(logger)
}

const redux = createStore(reducer, composeEnhancers(
  applyMiddleware(...middlewares)
))

sagaMiddlewar.run(rootSaga)

export default redux