import Feed from '../components/Feed'
import '../styles/globals.css'
import React from 'react'

const HomePage = () => {
  return (
    <div className='text-center'>
      <span className='text-center text-blue-500'>Connecting students with tutors.</span>
      <Feed />
    </div>
  )
}

export default HomePage