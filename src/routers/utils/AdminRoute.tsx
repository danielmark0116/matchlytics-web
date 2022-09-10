/** @format */

import React from 'react'
import {Redirect, Route, RouteProps} from 'react-router-dom'
import {useAuthContext} from '../../hooks/useAuth'
import Unauthorized from '../../pages/Unauthorized'

const AdminRoute: React.FC<RouteProps> = ({
  component: Component,
  ...rest
}: // eslint-disable-next-line
any) => {
  const {user, isAdmin} = useAuthContext()

  const condition = !!user && isAdmin

  return (
    <Route
      {...rest}
      render={(props) =>
        condition ? (
          <Component {...props} />
        ) : (
          <>
            {!user ? <Redirect to="login" /> : null}
            <Unauthorized />
          </>
        )
      }
    />
  )
}

export default AdminRoute
