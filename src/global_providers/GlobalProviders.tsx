import React from "react";
import AuthProvider from "../providers/AuthProvider";

const GlobalProviders: React.FC = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default GlobalProviders;
