import React from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../app/slices/logSlice'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleUser = () => {
        dispatch(setUser({
            name: "bharath",
            email: "bk.kd@gmail.com"
        }))
        navigate('/')
    }
  return (
    <div className='flex justify-center flex-col items-center gap-2'>
        <h1 className='font-bold text-2xl leading-6'>Login</h1>
        <button className='p-1 bg-green-600 text-white w-1/2 hover:opacity-75 rounded border-2' onClick={handleUser}>Login</button>
    </div>
  )
}

export default Login