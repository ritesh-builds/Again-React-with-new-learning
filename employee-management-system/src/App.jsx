import React, { useEffect, useState } from 'react'
import Login from './components/auth/Login'
import EmployeeDashboard from './components/dashboard/EmployeeDashboard'
import AdminDashboard from './components/dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'

function App() {

  const [user, setUser] = useState('ritesh')

  const handleLogin = (email, password) => {
      if(email == 'admin@me.com' && password == '123')
      console.log("This is admin...");

      else if(email == 'user@me.com' && password == '123')
      console.log("This is user...");

      else alert('Invalid Credentials')   
  }

  handleLogin('user@me.com', '123')


  return (
    <>
      {user ? <Login handleLogin={handleLogin} /> : ''}
      {/* <EmployeeDashboard />   */}
      {/* <AdminDashboard /> */}
    </>
  )
}

export default App
App