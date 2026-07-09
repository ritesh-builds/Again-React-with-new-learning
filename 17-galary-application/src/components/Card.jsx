import React from 'react'
import { motion } from "motion/react";
function Card(props) {
  return (
    <div>
      <a href={props.elem.download_url} target="_blank" rel="noopener noreferrer">
                <motion.img 
                src={props.elem.download_url}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 15
                }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className='rounded-2xl h-40 w-70 m-5 object-cover transition-all ease-in-out hover:scale-102' 
                src={props.elem.download_url} 
                alt={props.elem.author} />
              </a>
              <div className='flex justify-center'><p className='text-gray-500'>by: {props.elem.author} </p></div>
    </div>
  )
}

export default Card
