import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuth";

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
        condition ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default SuperAdminRoute;
