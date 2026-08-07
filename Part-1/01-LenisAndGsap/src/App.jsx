import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState()

  return (
    <>
      <button className='p-20' onClick={() => setCount((count) => count + 1)}>{count} Click</button>
    </>
  )
}

export default App
