import React, { useContext, useEffect, useState } from 'react'
import Login from './components/auth/Login'
import EmployeeDashboard from './components/dashboard/EmployeeDashboard'
import AdminDashboard from './components/dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

function App() {

  const [user, setUser] = useState('')

  const authData = useContext(AuthContext)
  // console.log();

  useEffect(() => {
    if(authData){
      const loggedInUser = localStorage.getItem("loggedInUser")
    }
  }, [])

  const handleLogin = (email, password) => {  

      if(authData && authData?.admin.find((e) => email == e.email && password == e.password)){
        setUser('admin')
        localStorage.setItem('loggedInUser', JSON.stringify({role: 'admin'}))
        console.log(`this is ${user}...`);
      }
      else if(authData && authData?.employees.find((e) => email == e.email && password == e.password)){
        setUser('employee')
        localStorage.setItem('loggedInUser', JSON.stringify({role: 'employee'}))
        console.log(`This is ${user}`);
      }
      

      else alert('Invalid Credentials')   
  }

  
  

  // handleLogin('user@me.com', '123')

    return (
  <>
    {!user && <Login handleLogin={handleLogin} />}

    {user === 'admin' && <AdminDashboard />}
    {user === 'employee' && <EmployeeDashboard />}
  </>
  )

}

export default App
App