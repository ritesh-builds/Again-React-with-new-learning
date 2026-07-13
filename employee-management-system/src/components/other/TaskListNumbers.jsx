import React from 'react'

function TaskListNumbers() {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 m-5'>

          <div className='p-10 bg-amber-500 rounded-xl flex flex-col justify-center items-center'>
            <h1 className='text-black font-bold text-5xl p-3'>0</h1>
            <p>New Task</p>
          </div>

          <div className='p-10 bg-red-500 rounded-xl flex flex-col justify-center items-center'>
            <h1 className='text-black font-bold text-5xl p-3'>10</h1>
            <p>Completed</p>
          </div>

          <div className='p-10 bg-blue-500 rounded-xl flex flex-col justify-center items-center'>
            <h1 className='text-black font-bold text-5xl p-3'>34</h1>
            <p>Accepted</p>
          </div>

          <div className='p-10 bg-green-500 rounded-xl flex flex-col justify-center items-center'>
            <h1 className='text-black font-bold text-5xl p-3'>6</h1>
            <p>Failed</p>
          </div>

        </div>
  )
}

export default TaskListNumbers
