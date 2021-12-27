/** @format */

import React from 'react'
import {Container} from '../components/Container/Container.styled'
import UserBlob from '../components/UserBlob/UserBlob'
import {useUsersManagement} from '../hooks/useUsersManagement'

const Users: React.FC = () => {
  const {users, updateRole} = useUsersManagement()

  return (
    <Container>
      <>
        {users.map((user) => (
          <UserBlob {...{user, onRoleChangeClick: updateRole}} key={user.id} />
        ))}
      </>
    </Container>
  )
}

export default Users
