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

export const ScheduledMatchBlobContainer = styled.div.attrs(({className}) => ({
  className: 'rounded-xl bg-white p-4 shadow-sm ' + className || '',
}))<{isFavourite?: boolean}>`
  ${({isFavourite}) => isFavourite && tw`border-green-400 border-2`}

  .header_row {
    display: flex;
    flex-direction: row;

    &__text_container {
      flex: 1;
    }

    &__icon_container {
      display: flex;
      width: 40px;
      justify-content: flex-end;
      align-items: center;
    }
  }

  i {
    width: 20px;
    padding: 0 8px;
    margin-right: 12px;

    &.icon_button {
      ${tw`text-green-800`}

      &:hover {
        cursor: pointer;
      }

      &__delete {
        ${tw`text-red-500`}
      }
    }
  }
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
