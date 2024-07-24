"use client"

import React, { useRef } from 'react'

const ClassForm = ({ handleSubmit }) => {
    
    const selectedTutor = useRef<HTMLSelectElement>(null);

  return (
    <div className='flex justify-center'>
      <div>Book New Class</div>
      <select id='tutor' ref={selectedTutor}>
          <option value="a">Tutor1</option>
          <option value="b">Tutor2</option>
          <option value="c">Tutor3</option>
          <option value="d">Tutor4</option>
      </select>
      <input className='border-black border-16' ></input>
      <button className='border-red-800 bg-red-600' onClick={handleSubmit}>Book</button>
    </div>
  )
}

export default ClassForm