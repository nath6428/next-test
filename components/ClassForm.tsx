"use client"

import React from 'react'

const ClassForm = ({ handleSubmit, setClassDetails, classDetails }) => {
    
    
  return (
    <div className='flex justify-center'>
      <div>Book New Class</div>
      <select id='tutor' onChange={(e) => {setClassDetails({...classDetails, tutor: e.target.value})}}>
          <option value="Saif">Tutor1</option>
          <option value="Nathan">Tutor2</option>
          <option value="Joey">Tutor3</option>
          <option value="Bartholomew">Tutor4</option>
      </select>
      <input className='border-black border-16'  onChange={(e) => {setClassDetails({...classDetails, time: e.target.value })}} ></input>
      <button className='border-red-800 bg-red-600' onClick={handleSubmit}>Book</button>
    </div>
  )
}

export default ClassForm