import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { setQuery } from '../redux/features/SearchSlice'

function SearchBar() {

  const [text, setText] = useState('')  
  const dispatch = useDispatch()

  const submitHandler = (evt) => {
    evt.preventDefault()
    console.log("form submitted...");
    console.log(text);
    dispatch(setQuery(text))
    setText('')
  }

  return (
    <div>
       <form
        onSubmit={(evt) => {
        submitHandler(evt)   
        }}
        className='flex gap-5 bg-gray-800 p-8'
        >

        <input required
        value={text}
        className=' px-2 py-2 border-2 rounded outline-0 border-amber-500 w-full'
        onChange={(evt) => {   
            setText(evt.target.value)
        }}
        type="text" 
        placeholder='Search anything...'
        />
            
        <button
        onClick={(evt) => {
            
        }}
        className='bg-amber-600 px-4 py-2 cursor-pointer text-black rounded hover:bg-amber-700 active:scale-98 '
        >Search</button>

      </form>
    </div>
  )
}

export default SearchBar
