import React from 'react'

function TaskList() {
      const currentDate = new Date();

    const formattedDate = currentDate.toLocaleDateString("en-IN", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });
  return (
    <div id='taskList' className="p-5 h-screen rounded-xl overflow-x-auto grid grid-cols-1 lg:grid-cols-4 gap-4">

        <div className="bg-green-600 rounded-xl p-5">
            <div className='flex justify-between items-center'>
                <p className='bg-red-500 px-4 py-1 font-bold text-white rounded '>High</p>
                <h1 className="text-black font-bold">{formattedDate}</h1>
            </div>
                <h1 className='font-bold py-4'>One more Task</h1>
                <h2>Task jaisa kabhi nhi dekha hoga waisa Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, quaerat.</h2>
        </div>
        <div className="bg-blue-600 rounded-xl p-5">
            <div className='flex justify-between items-center'>
                <p className='bg-red-500 px-4 py-1 font-bold text-white rounded '>High</p>
                <h1 className="text-black font-bold">{formattedDate}</h1>
            </div>
                <h1 className='font-bold py-4'>One more Task</h1>
                <h2>Task jaisa kabhi nhi dekha hoga waisa Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, quaerat.</h2>
        </div>
        <div className="bg-pink-600 rounded-xl p-5">
            <div className='flex justify-between items-center'>
                <p className='bg-red-500 px-4 py-1 font-bold text-white rounded '>High</p>
                <h1 className="text-black font-bold">{formattedDate}</h1>
            </div>
                <h1 className='font-bold py-4'>One more Task</h1>
                <h2>Task jaisa kabhi nhi dekha hoga waisa Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, quaerat.</h2>
        </div>
        <div className="bg-amber-600 rounded-xl p-5">
            <div className='flex justify-between items-center'>
                <p className='bg-red-500 px-4 py-1 font-bold text-white rounded '>High</p>
                <h1 className="text-black font-bold">{formattedDate}</h1>
            </div>
                <h1 className='font-bold py-4'>One more Task</h1>
                <h2>Task jaisa kabhi nhi dekha hoga waisa Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, quaerat.</h2>
        </div>

        

    </div>
  )
}

export default TaskList
