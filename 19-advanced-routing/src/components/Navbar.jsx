import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (

      <div className='flex py-4 px-8 justify-between items-center bg-blue-900'>
          <Link to='https://github.com/ritesh-builds'><h2 className='text-xl font-bold'>Comfort Footwear</h2></Link>
          <div className='flex gap-8'>
            <Link to="/">Home</Link>
            <Link to="Contact">About</Link>
            <Link to="About">Contact</Link>
            <Link to="Product">Product</Link>
          </div>
      </div>
  )
}

export default Navbar
