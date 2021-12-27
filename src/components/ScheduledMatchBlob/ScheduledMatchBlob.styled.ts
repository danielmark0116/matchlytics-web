/** @format */

import styled from 'styled-components'
import tw, {theme} from 'twin.macro'

interface HistoryQProps {
  quantity: number
}

interface RoundDataProps {
  last?: boolean
  noIndicator?: boolean
}

export const ScheduledMatchBlobContainer = styled.div.attrs(() => ({
  className: 'rounded-xl bg-white p-4 mb-4 shadow-sm',
}))<{isFavourite?: boolean}>`
  ${({isFavourite}) => isFavourite && tw`border-green-400 border-2`}
`

export const HistoryQuantity = styled.span<HistoryQProps>`
  ${({quantity}) => (quantity ? tw`font-bold text-green-400` : tw`font-bold text-red-400`)}
`

export const ShowHistory = styled.footer`
  ${tw`flex flex-row justify-center items-center mt-4`}
`

export const RoundsContainer = styled.div`
  ${tw`flex flex-row`}
`

export const RoundData = styled.div<RoundDataProps>`
  ${tw`flex-grow flex justify-end px-4 relative`};
  ${({last}) => (last ? tw`justify-start` : null)};

  &::before {
    ${({last}) => (!last ? tw`hidden` : null)};
    ${({noIndicator}) => (noIndicator ? tw`hidden` : null)};
    ${tw`rounded`}
    content: "";
    position: absolute;
    top: -10%;
    left: -1px;
    width: 2px;
    height: 140%;
    background-color: ${theme`colors.red.400`};
  }
`
