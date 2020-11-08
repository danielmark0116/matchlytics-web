import styled from "styled-components";
import tw from "twin.macro";

interface Props {
  toggled?: boolean;
}

export const Menu = styled.aside.attrs<Props>(({ toggled }) => ({
  toggled: false,
  className: `transform transition-transform duration-150 bg-white p-4 absolute top-0 left-0 w-screen h-screen ${
    toggled ? "-translate-x-0" : "-translate-x-full"
  }`,
}))<Props>`
  & {
    ul {
      ${tw`flex flex-col justify-center items-center`}

      & {
        li {
          ${tw`text-sm my-1`}
        }

        a {
          ${tw`text-green-500 font-bold text-lg`}
        }
      }
    }
  }
`;
