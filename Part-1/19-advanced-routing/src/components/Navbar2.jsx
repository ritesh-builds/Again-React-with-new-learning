import React from 'react'
import { useNavigate } from 'react-router-dom';

function Navbar2() {

    const navigate = useNavigate()
  
    return (
    <div className='py-1 px-5 bg-gray-900'>
      <button 
        className='p-4 rounded active:scale-99 bg-blue-700 hover:bg-blue-800 m-4'
        onClick={() => {
        console.log('Button is Clicked...');
        navigate('/')
        }}
        >
        Return to Home Page</button>

        <button 
        className='p-4 rounded active:scale-99 bg-blue-700 hover:bg-blue-800 m-4'
        onClick={() => {
        console.log('Button is Clicked...');
        navigate(-1)
        }}
        >
        Back</button>
        <button 
        className='p-4 rounded active:scale-99 bg-blue-700 hover:bg-blue-800 m-4'
        onClick={() => {
        console.log('Button is Clicked...');
        navigate(1)
        }}
        >
        Next</button>
    </div>
  )
}

export default Navbar2
