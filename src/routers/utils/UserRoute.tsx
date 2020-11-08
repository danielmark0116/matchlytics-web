import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuth";

const UserRoute: React.FC<RouteProps> = ({
  component: Component,
  ...rest
}: // eslint-disable-next-line
any) => {
  const { user } = useAuthContext();

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to="/unauthorized" />
      }
    />
  );
};

export default UserRoute;
