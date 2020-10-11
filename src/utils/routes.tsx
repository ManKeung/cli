import React from 'react'
import { Route } from 'react-router-dom'

export default function RouteWithSubRoutes(route: { path?: any; title?: string; component?: any; routes?: any; }) {
  return (
    <Route
      path={route.path}
      render={props => {
        document.title = route.title || '默认title';
        return <route.component {...props} routes={route.routes} />
      }}
    />
  )
}