import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { thunk } from '../app/slices/thunkSlice'
import Contact from './Contact'

const User = () => {
    // const {username} = useParams()
    // const [userData, setUserData] = useState()
    const dispatch = useDispatch()
    const {isLoading,user,error} = useSelector(state => state.thunkReducer)
    console.log({isLoading,user,error})
    useEffect(() => {
        dispatch(thunk())
    },[])
  return (
    <div>
        {/* <h1>User: {username}</h1> */}
        {isLoading && <h1 className='animate-spin'>Loading...</h1>}
        {user && user.map(u =>(
            <ul key={u.id}>
                <li>{u.name}</li>
            </ul>
        ))}
        {error && <h2>{error}</h2>}
        {/* <Contact name="bharath" /> */}
    </div>
  )
}

export default User