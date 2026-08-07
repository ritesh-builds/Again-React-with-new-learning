import React from 'react'
// import User from './components/User'
import Card from './components/Body/Card'
import Navbar from './components/Header/Navbar'
import Footer from './components/Footer/Footer'
import { ReactLenis, useLenis } from 'lenis/react'
import { jobs } from './components/Data/Data'

function App() {  

  const lenis = useLenis((lenis) => {
    // called every scroll
    console.log(lenis)
  })

  return (
    <>

      <ReactLenis root /> 
      <Navbar />
     
      <div className='parent'>
        { 
          jobs.map((job, idx) => {
            return <div key={idx}>
              <Card
                    key={job.id}
                    img={job.img}
                    company={job.company}
                    posted={job.posted}
                    role={job.role}
                    jobType={job.jobType}
                    level={job.level}
                    salary={job.salary}
                    location={job.location}
                  />
            </div>
                })
                
              }
      </div>

      <Footer/>
    </>
  )
}

export default App
