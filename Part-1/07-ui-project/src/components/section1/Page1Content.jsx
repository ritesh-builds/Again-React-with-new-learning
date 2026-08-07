import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

function Page1Content(props) {
   
    
  return (
    <div className='py-10 flex px-18 h-[90vh] gap-10'>
      <LeftContent />
      <RightContent users={props.users} />
    </div>
  )
}

export default Page1Content
