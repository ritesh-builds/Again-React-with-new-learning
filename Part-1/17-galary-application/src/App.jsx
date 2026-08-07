import React, { useState, useEffect } from 'react'
import { motion } from "motion/react";
import axios from "axios"
import { ReactLenis, useLenis } from 'lenis/react'
import Card from "./components/Card"

function App() {

  const [userData, setUserData] = useState([])
  
  const [index, setIndex] = useState(1);

  const lenis = useLenis((lenis) => {
    // called every scroll
    console.log(lenis)
  })


  const getData = async () => {
    console.log(index);
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index+1}&limit=8`)
    setUserData(response.data)
    response.data.map((res) => {
    })
  }

  let printUserData = <h3 className='text-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading...</h3>
  if(userData.length > 0){
    printUserData = userData.map((elem, idx) => {
      console.log(elem);
      
      return <div key={idx} className=''>
              <Card elem={elem} />
              </div>
            })
  }

  useEffect(() => {
    getData()
  }, [index])

  return (
    <div className='bg-black p-4 min-h-screen h-[100] text-white '> 

      <ReactLenis root />
      <h1 className='fixed text-6xl bg-gray-600 z-10 rounded p-4 '> {index} </h1>
      <button
      onClick={getData}
      className='bg-green-600 text-white px-10 p-5  hover:bg-green-700 transition-all ease-in-out active:scale-98 rounded-xl mb-3 mx-150 text-2xl'
      >Get Data</button>

      <div className='flex flex-wrap h-130 gap-4 py-5 text-gray-500'> 
        {printUserData} 
      </div>

      <div className='flex justify-center items-center gap-6 p-4'>

        <button 
        style={{opacity:index==1 ? .5 : 1}}
        className='bg-amber-400 text-black rounded px-4 py-2 font-semibold hover:bg-amber-500 active:scale-98'
        onClick={() => {
          console.log("Prev button clicked!");
          if(index > 0){
            setIndex(index - 1)
            setUserData([])
          }
        }}
        >Prev</button>
        <h3>Page {index} </h3>
        <button 
        className='bg-amber-400 text-black rounded px-4 py-2 font-semibold hover:bg-amber-500 active:scale-98'
        onClick={() => {
          console.log("Next button clicked!");
          setIndex(index + 1)
          setUserData([])
        }}
        >Next</button>

      </div>
    </div>

  )
}

export default App
