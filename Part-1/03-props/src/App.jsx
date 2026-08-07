import React from 'react'
import Card from './components/Card'

function App() {
  return (
    <div className='parent'>
      <Card user="Ritesh" age={18} img="https://4kwallpapers.com/images/walls/thumbs_2t/18536.png" />
      <Card user="Ishika" age={19} img="https://4kwallpapers.com/images/walls/thumbs_2t/15635.jpg" />
      <Card user="Radhika" age={19} img="https://4kwallpapers.com/images/walls/thumbs_2t/25602.jpg" />
    </div>
  )
}

export default App
