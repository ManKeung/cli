import React from 'react'
import { NavLink } from 'react-router-dom'
import { goTop } from '../../mixins'
import './index.scss'

@goTop
class Page extends React.PureComponent {
  render () {
    return (
      <div className="no">
        404
        <NavLink to="/">goHome</NavLink>
      </div>
    )
  }
}

export default Page
