/** @format */

import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h1.attrs({
  className: 'font-bold text-5xl text-black leading-none mb-1',
})``

interface Props {
  children: string
}

const Title: React.FC<Props> = ({children}) => {
  return <StyledTitle>{children ?? ''}</StyledTitle>
}

export default Title
