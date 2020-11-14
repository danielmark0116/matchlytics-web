import styled from "styled-components";
import tw from "twin.macro";

const StyledLayout = styled.main.attrs({
  className:
    "flex flex-col min-h-screen max-w-screen items-center bg-gray-300 relative pt-24",
})`
  & {
    nav {
      ${tw`fixed flex top-0 left-0 w-screen bg-white p-4 justify-between items-center flex-row z-50`};
    }
  }
`;

export default StyledLayout;
