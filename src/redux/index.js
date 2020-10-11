import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer'
import rootSaga from './sagas'

const sagaMiddlewar = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
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

