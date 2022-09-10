/** @format */

import {useContext} from 'react'
import AuthContext, {AuthContextData} from '../contexts/AuthContext'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useAuthContext = (): AuthContextData => {
  const authContext = useContext(AuthContext)

  if (authContext === null) {
    throw new Error('This hook must be used in a component with an <AuthProvider />')
  }

  return authContext
}
