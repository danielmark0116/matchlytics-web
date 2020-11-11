import React from "react";
import styled from "styled-components";

const StyledSubTitle = styled.h1.attrs({
  className: "font-medium text-2xl text-black",
})``;

interface Props {
  children: string;
}

const SubTitle: React.FC<Props> = ({ children }) => {
  return <StyledSubTitle>{children ?? ""}</StyledSubTitle>;
};

export default SubTitle;
