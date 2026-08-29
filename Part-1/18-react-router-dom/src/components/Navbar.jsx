import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

  return (
    <div className='nav'>
          <Link to="/" className="logo">
            <h3>Comfort Footwear</h3>
          </Link>
          <div>
            <Link to='/' >Home</Link>
            <Link to='About'>About</Link>
            <Link to='Contact'>Contact</Link>
            <Link to='Product'>Product</Link>
          </div>
          <Link to="/login" className="login-btn">
            Login / Sign Up
          </Link>
      </div>
  )
}

export default Navbar
