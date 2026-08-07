import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './redux/features/CounterSlice'

const App = () => {

  const [number, setNumber] = useState(5)

  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.value)

  return (
    <div>

      <h1>count value: {count} </h1>

      <button 
      onClick={() => {
        dispatch(increment())
      }}
      >Increment</button>

      <button
      onClick={() => {
        dispatch(decrement())
      }}
      >Decrement</button>

      <input type="number"
      // value={number}
      onChange={(evt) => {
        console.log(evt.target.value);
        setNumber(Number(evt.target.value))
      }}
      />

      <button
      onClick={() => {
        dispatch(incrementByAmount(number))
      }}
      >Increase By amount</button>

    </div>
  )
}

export default App
