import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

function AdminDashboard() {

  

  return (
    <div className='h-full w-full lg:p-5'>
      <Header />
      <CreateTask />
      <AllTask /> 
    </div>
  )
}

export default AdminDashboard
