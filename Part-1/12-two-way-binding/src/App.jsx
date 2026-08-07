import React from 'react'
import { useState } from 'react';

function App() {
  const submitHandler = (e) => {
    e.preventDefault()
    console.log('Form submitted', title);
    setTitle('')
  }

  const [title, setTitle] = useState("")  

  return (
    <div>
      <div className="card">
        <form onSubmit={(evt) => {
        submitHandler(evt)
      }} >
        <input 
        type="text" 
        placeholder='Enter your name...' 
        value={title}
        onChange={(evt) => {
          console.log(evt.target.value)
          setTitle(evt.target.value)
        }}
        />
        
        <button>submit</button>
      </form>
      </div>
    </div>
  )
}

export default App
