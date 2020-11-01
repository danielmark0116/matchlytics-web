import { createContext } from "react";

export interface AuthContextData {
  isAuth: boolean;
  isAdmin: boolean;
  isSuperAdmin: boolean;
  accessToken: string;
  user: string;
}

const AuthContext = createContext<AuthContextData | null>(null);

export default AuthContext;
