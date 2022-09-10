/** @format */

import React, {createContext} from 'react'
import {User} from '../types/user'

export interface AuthContextData {
  isAuth: boolean
  isAdmin: boolean
  isSuperAdmin: boolean
  isMember: boolean
  accessToken: string
  user: null | User
  getUser: (accessToken: string) => Promise<User>
  logout: () => void
  setAccessToken: React.Dispatch<React.SetStateAction<string>>
}

const AuthContext = createContext<AuthContextData | null>(null)

export default AuthContext
