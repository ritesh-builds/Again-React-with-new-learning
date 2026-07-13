import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../taskList/TaskList'

function EmployeeDashboard() {

  return (
    <div className='flex flex-col bg-[#1C1C1C] h-screen overflow-auto rounded-xl'>
        <Header />
        <TaskListNumbers />
        <TaskList />
        

      </div>
  )
}

export default EmployeeDashboard
