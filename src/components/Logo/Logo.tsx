/** @format */

import React from 'react'

interface Props {
  small?: boolean
}

const Logo: React.FC<Props> = ({small}) => {
  return (
    <h1 className={`${small ? 'text-m' : 'text-xl'} font-bold text-blue-900 ${small ? '' : 'mb-8'}`}>
      {small ? '⚽' : '⚽ Matchlytics ⚽️'}
    </h1>
  )
}

export default Logo
