import React from 'react'
import {
  // HashRouter as Router, // hash #
  BrowserRouter as Router, // 没有#
  Switch,
  Redirect
} from 'react-router-dom'
import { RouteWithSubRoutes } from './utils'
import routes from './routes'
import { Provider } from 'react-redux'
import redux from './redux'

// 挂载Mock
import './mock'

export default () => {
  return (
    <Provider store={redux}>
      <Router>
        <Switch>
          {
            routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))
          }
          <Redirect to="/404" />
        </Switch>
      </Router>
    </Provider>
  )
}
