import React from 'react'
import './styles/style.css'
import './styles/mobstyles.css'
import { BrowserRouter,
  Routes,
  Route,
  Navigate, } from "react-router-dom"

import Home from './pages/Home'
import AdminDashbaord from './pages/AdminDashbaord'
import UserDashboard from './pages/UserDashboard'

export default function App() {
  
  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <Route  path='/' element={<Home/>} />
          <Route  path='/adminDashboard' element={<AdminDashbaord/>} />
          <Route  path='/userDashboard' element={<UserDashboard/>} />
          
          
          
        </Routes>
      
      </BrowserRouter>
    </>
  )
}
