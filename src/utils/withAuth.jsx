import React from 'react'

const withAuth = (Component) => {
    const isAuth = false
 return (props) => {
   if(!isAuth) return <h1 className='text-white font-bold text-3xl flex self-center justify-center bg-[#0D0D0D] h-screen'>Not Auth</h1>
   return <Component {...props}/>
 }
}

export default withAuth