import React from 'react'
import {ArrowRight} from "lucide-react"

function RightCardContent(props) {
  return (
    <div >   
        <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
            <h2 className='bg-white text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center'>{props.id+1}</h2>
            <div>
                <p className='text-xl font-light leading-relaxed text-white p-2 m-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, facere.</p>
                <div className='flex  justify-between'>
                    <button style={{backgroundColor:props.color}} className=' text-lg text-white font-semibold px-7 py-3 rounded-full shadow-none hover:shadow-[0_0_20px_#111] transition-all duration-300 cursor-pointer'>{props.tag}</button>
                    <button style={{backgroundColor:props.color}} className=' text-white font-semibold px-3 py-3 rounded-full shadow-none hover:shadow-[0_0_10px_#111] transition-all duration-300 cursor-pointer'><ArrowRight size={25} /></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RightCardContent
