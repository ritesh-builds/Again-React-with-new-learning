import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../taskList/TaskList'

function EmployeeDashboard({data}) {
  console.log(data);  
  
  return (
    <div className='flex flex-col bg-[#1C1C1C] h-screen overflow-auto rounded-xl'>
        <Header />
        <TaskListNumbers data={data} />
        <TaskList />
        

      </div>
  )
}

export default EmployeeDashboard
