import React from 'react'

function App() {

  const inputChanging = (val) => {
    console.log(val);
  }

  const btnClicked = (evt) => {
      console.log("button clicked.");
      console.log(evt.target.value);
      
  }

  const pageScrolling = (val) => {
      console.log(val);
      console.log("page scrolling at speed: "+val);
      
  }

  return (
    <div>
        <h1>Hello, Ritesh</h1>

      <input
      type="text" 
      placeholder='Enter your name' 
      onChange={(evt) => {
        inputChanging(evt.target.value) 
      }}
      />

      <button
      onClick={btnClicked}
      >Change User</button>

      <button>explore this</button>

      <div
      className='box'
      onMouseMove={(evt) => {
        console.log("Nacho");
        console.log("x-axis: "+evt.clientX)
        console.log("y-axis: "+evt.clientY)
      }}
      >

      </div>

      <div
      onWheel={(evt) => {
          console.log(evt.deltaY);
          console.log(evt.deltaY);
          pageScrolling(evt.deltaY)
          
        }}
      >
          <div id='page' className='page1'></div>
          <div id='page' className='page2'></div>
          <div id='page' className='page3'></div>
      </div>

    </div>
  )
}

export default App
