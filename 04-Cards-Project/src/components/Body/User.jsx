import React from 'react'

function User() {

    const array = [10,20,30,40,50]
  return (
    <>
      {array.map((element) => {
        return <h1>{element}</h1>
      })}
    </>
  )
}

export default User
