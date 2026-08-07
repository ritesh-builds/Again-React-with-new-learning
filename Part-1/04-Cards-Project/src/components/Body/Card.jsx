import React from 'react'
import {Bookmark} from "lucide-react"
// Object structure...
// {
//     id: 8,
//     company: "Meta",
//     posted: "4 days ago",
//     role: "Frontend Engineer",
//     jobType: "Remote",
//     level: "Senior Level",
//     salary: "$165/hr",
//     location: "Gurugram, India",
//     img: "https://logo.clearbit.com/meta.com"
//   }

function Card(props) {
  
  return (
    <div className="card">
      <div className="top">
        <img src={props.img} alt="" />
        <button>  Save <Bookmark size={15} /> </button>
      </div>
      <div className='center'>
        <h3>{props.company} <span>{props.posted}</span></h3>
        <h2>{props.role}</h2>
        <div className='tag'>
          <h4>{props.jobType}</h4>
          <h4>{props.level}</h4>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h3>{props.salary}/hr</h3>
          <p>{props.location}</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  )
}

export default Card
