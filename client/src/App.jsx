import React from 'react'
import Register from './components/pages/Register'
import Login from './components/pages/Login'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </>
  )
}

export default App
