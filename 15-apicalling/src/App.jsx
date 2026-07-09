import React from 'react'
import { useState } from 'react'
import axios from "axios"

function App() {

  const [data, setData] = useState([])

  const getData = async (evt) => {
    const response = await axios.get('https://picsum.photos/v2/list')
    setData(response.data)
  }

  return (
    <div>
      <button onClick={(evt) => {
          getData(evt)
      }}
      style={{height:50, width:100, padding:10, margin: 100, fontFamily:'sans-serif', cursor:'pointer'}}
      > 
      Get Data
      </button>
      <div>
        {data.map((elem, idx) => {
            return <h3>hello {elem.author} {idx} </h3>
      })}
      </div>
    </div>
  )
}

export default App


// const getData = async (evt) => {
//    await fetch("https://api.github.com/users/ritesh-builds")
//    .then((res) => {
//       res.json()
//       .then((data) => {
//           console.log(data);  
//           setData(data)
//       })
//    }).catch((e) => {
//       console.error(e.message);
      
//    })
    
//   }