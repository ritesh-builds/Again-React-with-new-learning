import React from 'react'

function Card(props) {
  console.log(props.user);
  
  return (
    <div>
        <div className='card'>
        <img src={props.img} alt="" />
        <h1>{props.user}, {props.age} </h1>
        <p>Lorem ipsum dolor sit amet </p>
        <p>consectetur, adipisicing elit. Excepturi, error!</p>
        <button>View Profile</button>
      </div>    
    </div>
  )
}

export default Card
