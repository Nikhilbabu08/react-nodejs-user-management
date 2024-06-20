import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import AllUsers from './components/pages/AllUsers'
// import Profile from './components/pages/Profile'
import Home from './components/pages/Home'

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      {/* <Route path="/profile" element={<Profile/>} /> */}
      <Route path="/allusers" element={<AllUsers/>} />
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </>
  )
}

export default App
