import React, {useEffect} from 'react'
import {fetchPhotos, fetchVideos} from '../api/MediaApi'
import {setQuery, setLoading, setError, setResults, clearResult} from '../redux/features/SearchSlice'
import { useDispatch, useSelector } from 'react-redux'


function ResultGrid() {

  const dispatch = useDispatch()
  
  const {query, activeTab, results, loading, error} = useSelector((store) => (store.search))

  useEffect(() => {
    const getData = async () => {
      let data;
      if(activeTab == "photos"){
        const response = await fetchPhotos(query)
        data = response.results
      }
      if(activeTab == "video"){
        const response = await fetchVideos(query)
        data = response.results
      }

      console.log(data);
      
    }
  }, [query, activeTab])
  

  return (
    <div>
      <button 
      className='bg-blue-700 mx-6 my-2 px-6 py-2 rounded active:scale-97'
      >Get Data</button>
    </div>
  )
}

export default ResultGrid
