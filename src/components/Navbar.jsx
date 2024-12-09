import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { removeUser } from '../app/slices/logSlice'

const Navbar = () => {
  const {user} = useSelector(state => state.logInfo)

  const dispatch = useDispatch()
  const navigate = useNavigate();

  const logout = () => {
    dispatch(removeUser())
    // navigate('/login')
  }
  return (
   <>
    <nav className='flex bg-blue-500 py-3 px-4 flex-[1_0_0] gap-5 mb-6 text-lg leading-6 text-white'>
        <Link to={'/'} className='focus:border-red-500 p-2 hover:text-slate-500'>Home</Link>
        <Link to={'/about'} className='focus:border-red-500 p-2 hover:text-slate-500'>About</Link>
        <Link to={'/users'} className='focus:border-red-500 p-2 hover:text-slate-500'>Users</Link>
        <Link to={'/people'} className='focus:border-red-500 p-2 hover:text-slate-500'>People</Link>
        <Link to={'/custom'} className='focus:border-red-500 p-2 hover:text-slate-500'>Custom user</Link>
        <Link to={'/contact'} className='focus:border-red-500 p-2 hover:text-slate-500'>Contact</Link>
       {!user && <Link to={'/login'} className='focus:border-red-500 p-2 hover:text-slate-500'>Login</Link>}
       {user && <>
        <Link to={'/settings'} className='focus:border-red-500 p-2 hover:text-slate-500'>Settings</Link>
        <Link onClick={logout} className='focus:border-red-500 p-2 hover:text-slate-500'>Logout</Link>
       </>}
    </nav>
    <main>
        <Outlet />
    </main>
   </>
  )
}

export default Navbar