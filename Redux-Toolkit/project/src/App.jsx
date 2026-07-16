import React from 'react'
import { fetchPhotos, fetchVideos } from './api/MediaApi'
import SearchBar from './components/SearchBar';
import Tabs from './components/Tabs';
import ResultGrid from './components/ResultGrid';

function App() {

  const getPhotos = async () => {
    const data = await fetchPhotos('dog')
    console.log( data.results);
    
  }

  const getVideos = async () => {
    const data = await fetchVideos('car')
    console.log( data.results);
    
  }

  return (
    <div className='h-screen w-full bg-gray-950 text-white  '>
      <SearchBar />
      <Tabs />
      <ResultGrid />
    </div>
  )
}

export default App
