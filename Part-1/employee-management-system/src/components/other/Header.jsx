import React from 'react'

function Header() {
  return (
    <div className='flex items-end justify-between p-5'>
      <h1>Hello, <br /> Ritesh👋</h1>
      <button className='bg-red-500 text-white text-xl px-5 py-2 rounded hover:bg-red-600 active:scale-98'>Log Out</button>
    </div>
  )
}

export default Header
