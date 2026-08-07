import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function App() {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  const aChanging = () => {
    console.log("A ki value change ho gayi...");
    
  }
  const bChanging = () => {
    console.log("B ki value change ho gayi...");
    
  }

  useEffect(() => {
    aChanging()
    console.log("useEffect is running...");
    
  },[a])

  useEffect(() => {
    bChanging()
    console.log("useEffect is running...");
    
  },[b])

  return (
    <div>

      <h1>value of A is {a}</h1>
      <h1>value of B is {b}</h1>
      <button
      onClick={() => {
        setA(a+1)
      }}
      >Change A</button>
      <button
      onClick={() => {
        setB(b+1)
      }}
      >Change B
      </button>

    </div>
  )
}

export default App
