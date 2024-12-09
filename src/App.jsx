import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Users from './Pages/Users'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Navbar from './components/Navbar'
import User from './Pages/User'
import Four0Four from './Pages/404'
import CustomUser from './Pages/CustomUser'
import Settings from './Pages/Settings'
import Login from './Pages/Login'
import PrivateRoute from './components/PrivateRoute'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/users' element={<Users />} />
      {/* <Route path='/user/:username' element={<User />} /> */}
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/people' element={<User />} />
      <Route path='/custom' element={<CustomUser />} />
      <Route element={<PrivateRoute />}>
      <Route path='/settings' element={<Settings />} />
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<Four0Four />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App