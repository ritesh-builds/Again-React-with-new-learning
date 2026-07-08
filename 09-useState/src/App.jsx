import React from 'react'
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0)
  const [dec, setDec] = useState(0)

  return (
    <div className='box'>
      <h1>{count}</h1>
      <button onClick={() => {
        setCount(count+(Math.floor(Math.random()*10)))
      }} >Increase</button>
      <button onClick={() => {
        setCount(count-1)
      }}>Decrease</button>
    </div>
  )
}

export default App
