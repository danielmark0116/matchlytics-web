import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

interface StyledProps {
  light?: boolean;
  small?: boolean;
}

const StyledText = styled.h1.attrs<StyledProps>({
  className: "font-normal text-base text-gray-900",
})<StyledProps>`
  ${({ light }) => (light ? tw`text-sm font-light` : null)}
  ${({ small }) => (small ? tw`text-xs` : null)}
`;

interface Props {
  children: string;
  light?: boolean;
  small?: boolean;
}

const Text: React.FC<Props> = ({ children, light, small }) => {
  return <StyledText {...{ light, small }}>{children ?? ""}</StyledText>;
};

export default Text;
