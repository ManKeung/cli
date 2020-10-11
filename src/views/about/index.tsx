import React from 'react'
import { Switch, Redirect } from 'react-router-dom'
import RouteWithSubRoutes from '../../utils/routes'

export default ({routes}: any) => {
  console.log(routes)

  return (
    <Switch>
      {
        routes.map((route: JSX.IntrinsicAttributes & { path: any; title: string; component: any; routes: any }, i: string | number | null | undefined) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))
      }
      <Redirect to="/404" />
    </Switch>
  )
}
