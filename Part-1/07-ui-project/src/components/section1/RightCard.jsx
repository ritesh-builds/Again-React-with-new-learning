import React from 'react'
import RightCardContent from './RightCardContent'

function RightCard(props) {
  return (
      <div className='shadow-none hover:shadow-[0_0_10px_#111] transition-all duration-300 overflow-hidden relative h-full w-80 bg-blue-950 rounded-3xl shrink-0'>
            <img src={props.img} alt="img" className='h-full w-full object-cover'/>
          <RightCardContent id={props.id} tag={props.tag} color={props.color} />
      </div>
  )
}

export default RightCard
