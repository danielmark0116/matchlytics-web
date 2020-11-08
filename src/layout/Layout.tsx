import React from "react";
import StyledLayout from "./Layout.styled";
import Navbar from "./Navbar";

const Layout: React.FC = ({ children }) => {
  return (
    <StyledLayout>
      <Navbar />
      {children}
    </StyledLayout>
  );
};

export default Layout;
