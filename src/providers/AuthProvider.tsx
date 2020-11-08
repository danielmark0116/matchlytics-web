import React, { useCallback, useEffect, useMemo, useState } from "react";
import AuthContext from "../contexts/AuthContext";
import { User, UserRoles } from "../types/user";
import config from "../config";
import axios from "axios";
import { LocalStorageKeys, useLocalStorage } from "../hooks/useLocalStorage";

const API = config.apiBase;

type UserWithHash = User & { password_hash?: string };

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<null | User>(null);
  const [accessToken, setAccessToken] = useState<string>("");
  const {
    setItem: saveToLocalStorage,
    getItem: getFromLocalStorage,
  } = useLocalStorage();

  const getUser = useCallback(async (accessToken: string): Promise<User> => {
    try {
      const user: UserWithHash =
        (
          await axios.get(API + "/api/users", {
            headers: {
              authorization: `Bearer ${accessToken}`,
            },
          })
        ).data?.user ?? null;

      if (!user) {
        throw new Error("No user");
      }

      setUser({
        email: user.email,
        googleId: user.googleId,
        id: user.id,
        name: user.name,
        role: user.role,
      });

      delete user.password_hash;

      console.log("Got the user! " + user.email);

      setAccessToken(accessToken);
      saveToLocalStorage(LocalStorageKeys.ACCESS_TOKEN, accessToken);
      return Promise.resolve(user);
    } catch (e) {
      setUser(null);
      saveToLocalStorage(LocalStorageKeys.ACCESS_TOKEN, "");
      return Promise.reject();
    }
  }, []);

  const logout = useCallback(() => {
    setAccessToken("");
    setUser(null);
  }, []);

  const isAdmin = useMemo(
    () =>
      user?.role === UserRoles.ADMIN || user?.role === UserRoles.SUPER_ADMIN,
    [user]
  );
  const isSuperAdmin = useMemo(() => user?.role === UserRoles.SUPER_ADMIN, [
    user,
  ]);
  const isMember = useMemo(
    () => user?.role === UserRoles.MEMBER || isSuperAdmin || isAdmin,
    [user, isSuperAdmin, isAdmin]
  );

  useEffect(() => {
    const token = getFromLocalStorage(LocalStorageKeys.ACCESS_TOKEN);

    getUser(typeof token === "string" ? token : "");
  }, [getFromLocalStorage, getUser]);

  return (
    <AuthContext.Provider
      value={{
        accessToken,
        setAccessToken,
        isAdmin,
        isSuperAdmin,
        isMember,
        isAuth: !!user,
        user,
        getUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
