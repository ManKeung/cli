import React from 'react'
import { Switch, Redirect } from 'react-router-dom'
import { RouteWithSubRoutes } from '../../utils'

export default ({routes}) => {
  console.log(routes)

  return (
    <Switch>
      {
        routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))
      }
      <Redirect to="/404" />
    </Switch>
  )
}
