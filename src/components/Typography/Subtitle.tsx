/** @format */

import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

interface StyledProps {
  small?: boolean
  secondary?: boolean
  align?: 'center' | 'left' | 'right'
}

const StyledSubTitle = styled.h1.attrs<StyledProps>({
  className: 'font-medium text-2xl text-black leading-none mb-1',
})<StyledProps>`
  ${({small}) => (small ? tw`text-xl` : null)}
  ${({secondary}) => (secondary ? tw`font-normal text-gray-900` : null)};
  ${({align}) => `text-align: ${align ?? 'left'}`};
`

interface Props {
  children: string
  small?: boolean
  secondary?: boolean
  align?: 'center' | 'left' | 'right'
}

const SubTitle: React.FC<Props & React.HTMLAttributes<HTMLTitleElement>> = ({children, small, secondary, align, ...rest}) => {
  return <StyledSubTitle {...{small, secondary, rest, align}}>{children ?? ''}</StyledSubTitle>
}

export default SubTitle
