/** @format */

import styled from 'styled-components'
import tw from 'twin.macro'

interface Props {
  small?: boolean
  secondary?: boolean
}

export const Button = styled.button.attrs<Props>({
  className:
    'bg-green-500 hover:bg-white text-white font-bold py-2 px-4 border border-green-500 rounded mb-2 hover:border-green-500 hover:text-green-500',
})<Props>`
  ${({small}) => (small ? tw`py-1 px-2 font-normal text-sm mb-1` : null)}
  ${({secondary}) => (secondary ? tw`bg-white hover:bg-white text-green-500 border-white hover:border-green-500 shadow` : null)}
`
