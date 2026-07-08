import React, { useState } from 'react'

function App() {

  const [num, setNum] = useState({user: "Ritesh", age: 29})
  const btnClicked = () => {
    const newNum = {...num}
    newNum.user = "Radhika"
    newNum.age = 21;
    setNum(newNum)
  }

  const [count, setCount] = useState([10,20,30,40,50])
  const btn = () => {
    const newCount = [...count]
    newCount[0] = 11
    newCount[1] = 22
    newCount[2] = 33
    newCount.push(100)
    setCount(newCount)
  }

  const [state, setState] = useState(10);
  const changeState = () => {
    setState((prev) => prev + 1)
    setState((prev) => prev + 1)
    setState((prev) => prev + 1)
  }

  return (
    <div>
      <h1>Name: {num.user}, Age: {num.age} </h1>
      <button onClick={btnClicked}>click</button>

      <h1> {count} </h1>
      <button onClick={btn}>click</button>

      <h1>{state}</h1>
      <button onClick={changeState}>click</button>
    </div>
  )
}

export default App
