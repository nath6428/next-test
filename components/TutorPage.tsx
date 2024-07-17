"use client"

import React, { useState } from 'react'
import TutorPreview from './TutorPreview'


const TutorPage = () => {
    
    const [tutors, setTutors] = useState([]);

  return (
    <>
    <div>Tutors</div>
    <div>Meet our tutors:</div>
    {tutors.map(tutor => {
        <TutorPreview tutor = {tutor}/>
    })}
    </>
  )
}

export default TutorPage