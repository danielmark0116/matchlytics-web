import React from "react";
import AnalyticsProvider from "../providers/AnalyticsProvider";
import AuthProvider from "../providers/AuthProvider";

const GlobalProviders: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <AnalyticsProvider>{children}</AnalyticsProvider>
    </AuthProvider>
  );
};

export default GlobalProviders;
