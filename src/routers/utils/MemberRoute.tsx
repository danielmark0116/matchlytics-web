import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuth";

const MemberRoute: React.FC<RouteProps> = ({
  component: Component,
  ...rest
}: // eslint-disable-next-line
any) => {
  const { user, isMember } = useAuthContext();

  const condition = !!user && isMember;

  return (
    <Route
      {...rest}
      render={(props) =>
        condition ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default MemberRoute;
