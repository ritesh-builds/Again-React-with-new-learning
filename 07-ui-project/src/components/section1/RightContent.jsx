import React from 'react'
import RightCard from './RightCard'

function RightContent(props) {

    
  return (
    <div id="right" className='h-full w-2/3 p-6 rounded-4xl flex flex-nowrap overflow-x-auto justify-between gap-10'>
      {props.users.map((user, idx) => {
        return <RightCard key={idx} id={idx} img={user.img} tag={user.tag} color={user.color} />
      })}
    </div>
  )
}

export default RightContent
