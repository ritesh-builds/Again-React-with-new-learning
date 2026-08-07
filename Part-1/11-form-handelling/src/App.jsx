import React from 'react'

function App() {
  const submitHandler = (e) => {
    e.preventDefault()
    console.log('Form submitted');
    
  }

  

  return (
    <div>
      <form onSubmit={(evt) => {
        submitHandler(evt)
      }} >
        <input 
        type="text" 
        placeholder='Enter your name'
        onChange={() => {
          console.log('inputing...');
          
        }}
        />
        
        <button>submit</button>
      </form>
    </div>
  )
}

export default App
