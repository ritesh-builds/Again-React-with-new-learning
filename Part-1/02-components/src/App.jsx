import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'

const App = () => {

  const user = "Ishika"
  const age = 21

  return (
    <>
      {Navbar()}
    <div className='Card'>
      <h1>Hi, I am Ritesh Kumar, and she is {user} her age is {age}.</h1> 
      {Card()}
    </div>
    </>
  )
}

export default App
