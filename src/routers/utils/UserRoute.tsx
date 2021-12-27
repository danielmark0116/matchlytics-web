/** @format */

import React from 'react'
import {Route, RouteProps} from 'react-router-dom'
import {useAuthContext} from '../../hooks/useAuth'
import Unauthorized from '../../pages/Unauthorized'

const UserRoute: React.FC<RouteProps> = ({
  component: Component,
  ...rest
}: // eslint-disable-next-line
any) => {
  const {user} = useAuthContext()

  return <Route {...rest} render={(props) => (user ? <Component {...props} /> : <Unauthorized />)} />
}

export default UserRoute
