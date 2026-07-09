# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.


import React, { useState } from 'react'
import axios from "axios"

function App() {

  const [userData, setUserData] = useState([])

  const getData = async () => {
    console.log("data aa gaya hai ...");
    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=15')
    console.log(response.data);
    console.log(response.data[0].author);
    console.log(response.data[0].download_url);
    setUserData(response.data)
  }

  let printUserData = 'No User Available'

  if(userData.length > 0){
    printUserData = userData.map((elem, idx) => {
      return <div key={idx} className=''>
        <img
        className='h-50 w-70 bg-amber-50 rounded-2xl my-5 transition-ease duration-200  hover:scale-105 hover:shadow-2xs'
        src={elem.download_url} alt="" />
      </div>
    })
  }

  return (
    <div className='bg-black h-screen p-4 text-white overflow-auto'>
      <button 
      onClick={getData}
      className='bg-green-600 hover:bg-green-700 active:bg-green-800 active:scale-99 text-white px-5 py-3 rounded'
      >
      Get Data
      </button>
      <div className='flex flex-wrap gap-5'>
        {printUserData}
      </div>
    </div>
  )
}

export default App
