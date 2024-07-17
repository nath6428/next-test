"use client"

import React from 'react'
import {useParams} from 'next/navigation'

const TutorProfile = () => {

  const { tutorName } = useParams() as { tutorName: string };

  return (
    <div>{tutorName}</div>
  )
}

export default TutorProfile
