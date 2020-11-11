import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuth";
import Unauthorized from "../../pages/Unauthorized";

const SuperAdminRoute: React.FC<RouteProps> = ({
  component: Component,
  ...rest
}: // eslint-disable-next-line
any) => {
  const { user, isSuperAdmin } = useAuthContext();

  const condition = !!user && isSuperAdmin;

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
  );
};

export default SuperAdminRoute;
