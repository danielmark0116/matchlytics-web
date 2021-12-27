/** @format */

import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

interface StyledProps {
  light?: boolean
  small?: boolean
  align?: 'center' | 'left' | 'right'
}

const StyledText = styled.h1.attrs<StyledProps>({
  className: 'font-normal text-base text-gray-900',
})<StyledProps>`
  ${({light}) => (light ? tw`text-sm font-light` : null)}
  ${({small}) => (small ? tw`text-xs` : null)};
  ${({align}) => `text-align: ${align ?? 'left'}`};
`

interface Props {
  children: string | React.ReactNode
  light?: boolean
  small?: boolean
  align?: 'center' | 'left' | 'right'
}

const Text: React.FC<Props> = ({children, light, small, align}) => {
  return <StyledText {...{light, small, align}}>{children ?? ''}</StyledText>
}

export default Text
