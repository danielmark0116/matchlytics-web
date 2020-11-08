import styled from "styled-components";
import tw from "twin.macro";

const StyledLayout = styled.main.attrs({
  className:
    "flex flex-col min-h-screen w-screen justify-center items-center bg-gray-400 relative pt-8",
})`
  & {
    nav {
      ${tw`fixed flex top-0 left-0 w-screen bg-white p-4 justify-between items-center flex-row`}
    }
  }
`;

export default StyledLayout;
