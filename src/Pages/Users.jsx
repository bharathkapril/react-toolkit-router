import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUsers } from '../app/slices/userSlice'

const Users = () => {
  const {user} = useSelector(state => state.userInfo)
  const dispatch = useDispatch()
  console.log(user)

  const deleteUser = (i) => {
    dispatch(deleteUsers(i))
  }
  return (
    <div>
      {user && user.map((us,i) => (
        <div key={i}>
          <h1>{us.name}</h1>
          <h2>{us.age}</h2>
          <h2>{us.email}</h2>
          <h2>{us.contact}</h2>
          <button onClick={() => deleteUser(i)} className='border-2 px-4 py-3 text-white bg-red-500 mt-3 hover:opacity-90'>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default Users