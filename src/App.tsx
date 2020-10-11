import React from 'react'
import {
  // HashRouter as Router, // hash
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom'
import RouteWithSubRoutes from './utils/routes'
import routes from './routers'
import { Provider } from 'react-redux'
import redux from './redux'

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