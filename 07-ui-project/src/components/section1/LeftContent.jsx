import React from 'react'

import Hero from './Hero'
import Arrow from './Arrow'

function LeftContent() {
  return (
    <div className='flex flex-col h-full w-1/3'>
      <Hero />
      <Arrow />
    </div>
  )
}

export default LeftContent
