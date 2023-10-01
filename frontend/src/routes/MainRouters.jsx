import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Login from '../pages/Login'
import Home from '../pages/Home'
import Signup from '../pages/Signup'
function MainRouters() {
  return (
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<Signup/>}/>
      
    </Routes>
  )
}

export default MainRouters
