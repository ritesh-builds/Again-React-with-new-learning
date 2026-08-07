import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs } from '../redux/features/SearchSlice'

function Tabs() {
  const tabs = ['photos', 'videos', 'gif']
  const dispatch = useDispatch()
  const activeTab = useSelector((state) => {
    return state.search.activeTab
  })

  return (
    <div className='flex gap-10 p-10'>
      {tabs.map((element, idx) => {
        return  (<button 
        className={`${activeTab == element ? 'bg-blue-700' : 'bg-gray-500'}  active:scale-98 cursor-pointer transition-all ease-in-out text-white gap-4 rounded  px-4 py-2`}
        key={idx}
        onClick={() => {
          dispatch(setActiveTabs(element))
          console.log(element);  
        }}
        >{element}
        </button>
          )
      })}
    </div>
  )
}

export default Tabs
