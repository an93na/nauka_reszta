import React from 'react'
import { useSelector } from 'react-redux'
import { usersSelector } from './usersSlice'

export const UsersList = () => {
  const selectUser = useSelector(usersSelector);
  return (
    <div>
      <ul>
        {selectUser.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  )
}
