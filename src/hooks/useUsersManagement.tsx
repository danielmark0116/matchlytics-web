/** @format */

import {useCallback, useEffect, useState} from 'react'
import {useAuthContext} from '../hooks/useAuth'
import axios from 'axios'
import config from '../config'
import {User, UserRoles} from '../types/user'
import {updateToken} from '../utils/axios'

export interface UseUsersManagement {
  fetchAllUsers: () => void
  users: User[]
  updateRole: (newRole: UserRoles, userId: string) => void
}

const API = config.apiBase

export const useUsersManagement = (): UseUsersManagement => {
  const [users, setUsers] = useState<User[]>([])
  const {accessToken} = useAuthContext()

  const fetchAllUsers = useCallback(async () => {
    try {
      if (!accessToken) {
        throw new Error('No token')
      }

      updateToken(accessToken)

      const users: User[] = (await axios.get(API + '/api/users/all')).data.users

      setUsers(users)
    } catch (e) {
      console.log(e)
      setUsers([])
    }
  }, [accessToken])

  const updateRole = useCallback(
    async (newRole: UserRoles, userId: string) => {
      try {
        if (!accessToken) {
          throw new Error('No token')
        }

        updateToken(accessToken)

        const user: User = (await axios.patch(API + '/api/users/' + userId + '/role/' + newRole)).data.user

        setUsers((users) =>
          users.map((e) => {
            if (e.id === user?.id ?? '') {
              return user
            }

            return e
          }),
        )
      } catch (e) {
        console.log('Could not update user role')
      }
    },
    [accessToken],
  )

  useEffect(() => {
    fetchAllUsers()
  }, [fetchAllUsers])

  return {
    fetchAllUsers,
    updateRole,
    users,
  }
}
