import React from 'react'
import ReactDOM from 'react-dom'
import './scss/index.scss'
import App from './App'
import * as serviceWorker from './serviceWorker'
// 处理vm兼容性
import hacks from 'viewport-units-buggyfill/viewport-units-buggyfill.hacks'
import viewport from 'viewport-units-buggyfill'
viewport.init({ hacks })
console.log(process.env.REACT_APP_ENV)
ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
