import React, { useEffect, useState } from "react";
import { Redirect, useLocation } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuth";

const OAuthRedirect: React.FC = () => {
  const { search } = useLocation();
  const { getUser } = useAuthContext();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const token = search.split("?token=")[1];
        const user = await getUser(token);
        if (user) {
          setLoggedIn(true);
        }
      } catch (e) {
        setLoggedIn(false);
      }
    })();
  }, [search, getUser]);

  return <>{loggedIn && <Redirect to="/" />}</>;
};

export default OAuthRedirect;
