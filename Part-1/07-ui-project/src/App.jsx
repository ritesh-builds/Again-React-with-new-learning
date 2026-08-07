import React from 'react'
import { ReactLenis, useLenis } from 'lenis/react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'

function App() {

  const lenis = useLenis((lenis) => {
    // called every scroll
    console.log(lenis)
  })

  const users = [
    {
      img:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      intro: "",
      tag:"Satisfied",
      color: "red"
    },
    {
      img:"https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      intro: "",
      tag:"Underserved",
      color:"blue"
    },
    {
      img:"https://plus.unsplash.com/premium_photo-1731355865761-69e8d539e328?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D",
      intro: "",
      tag:"Underbanked",
      color: "violet"
    },
    {
      img:"https://plus.unsplash.com/premium_photo-1672691612717-954cdfaaa8c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbCUyMGdpcmx8ZW58MHx8MHx8fDA%3D",
      intro: "",
      tag:"Underlinked",
      color: "green"
    },
    {
      img:"https://plus.unsplash.com/premium_photo-1661583687357-f047d7f7b399?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWwlMjBnaXJsfGVufDB8fDB8fHww",
      intro: "",
      tag:"Underworked",
      color: "pink"
    },
    
  ]
  
  return (
    <div>
       <ReactLenis root />
        <Section1 users={users} />
        <Section2 />
    </div>
  )
}

export default App
