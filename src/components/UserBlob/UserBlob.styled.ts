import styled from "styled-components";
import tw from "twin.macro";

export const UserBlobContainer = styled.div`
  ${tw`w-full p-4 rounded-xl shadow mb-4 bg-white`}
`;

export const UserBlobHeader = styled.div`
  ${tw`flex flex-row`}
`;

export const UserBlobHeaderTitle = styled.div`
  ${tw`flex-grow`}
`;

export const UserBlobHeaderSide = styled.div`
  ${tw`flex-none`}
`;
