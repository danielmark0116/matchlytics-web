import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuth";

const AdminRoute: React.FC<RouteProps> = ({
  component: Component,
  ...rest
}: // eslint-disable-next-line
any) => {
  const { user, isAdmin } = useAuthContext();

  const condition = !!user && isAdmin;

  return (
    <Route
      {...rest}
      render={(props) =>
        condition ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default AdminRoute;
