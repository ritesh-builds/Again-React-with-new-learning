import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

function CourseDetail() {

    const params = useParams()
    console.log((params.id));

  return (
    <div>
      <h1> {params.id} Course Details Page</h1>
    </div>
  )
}

export default CourseDetail
