import React from 'react'

function Navbar() {
  return (
    <div className='flex items-center justify-between px-16 py-6'>
      <h4 className='bg-black text-white px-5 py-2 uppercase rounded-full '>Target Audience</h4>
      <button className='bg-gray-200 px-6 py-2 uppercase text-black rounded-full tracking-wider
text-sm font-medium'>Digital banking platform</button>
    </div>
  )
}

export default Navbar
