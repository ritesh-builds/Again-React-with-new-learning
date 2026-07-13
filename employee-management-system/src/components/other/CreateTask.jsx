import React, { useState } from 'react'

function CreateTask() {

    const submitHandler = (e) => {
    e.preventDefault()
    // console.log(e.target.value);
    
  }

  const [taskTitle, setTaskTitle] = useState('')

  return (
    <div className=' h-full w-full'>
        <form 
        className='p-5 lg:flex lg:flex-col items-start'
        onChange={(evt) => {  
          submitHandler(evt)
        }}  
        >

          <div className=' flex flex-col lg:mx-70 lg:w-1/2'>

            <h1 className='my-2 lg:mx-0 lg:my-5 text-3xl'>Create Task</h1>

            <h2 className='text-gray-400'>Task Title</h2>
            <input 
            className='mx-1 my-4 w-full p-5 rounded-xl border border-red-600' type="text" placeholder='Make a UI design' 
            
            />

            <h2 className='text-gray-400'>Description</h2>
            <textarea className='mx-1 my-4 w-full h-50 p-5 rounded-xl border border-red-600' type="text" placeholder='detailed description of task (Max 500 words)'/>

            <h2 className='text-gray-400'>Date</h2>
            <input className='mx-1 my-4 w-full p-5 rounded-xl border border-red-600' type="date" placeholder='dd/mm/yyyy' />

            <h2 className='text-gray-400'>Assign To</h2>
            <input className='mx-1 my-4 w-full p-5 rounded-xl border border-red-600' type="text" />

            <h2 className='text-gray-400'>Category</h2>
            <input className='mx-1 my-4 w-full p-5 rounded-xl border border-red-600' type="text" placeholder='Design, Development, etc...' />

            <div className='flex justify-center'>
            <button className='bg-gray-700 m-5 py-4 px-7 rounded-xl active:scale-97 cursor-pointer'>Create Task</button>
          </div>
          </div>

        </form>
      </div>
  )
}

export default CreateTask
