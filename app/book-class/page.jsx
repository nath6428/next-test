"use client"

import React, { useState } from 'react'
import ClassForm from '@components/classform'
import { getSession, useSession } from 'next-auth/react'



const BookClass = () => {
    
    const [classDetails, setClassDetais] = useState({
        tutor: "abc",
        time: "379812"
    });
    const { data: session, status } = useSession();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('api/class/new', {
                method: 'POST',
                body: JSON.stringify({
                    tutor: classDetails.tutor,
                    time: classDetails.time,
                    userId: session?.user.id
                })
                })
        } catch (error) {
            console.log(error)
        }
        return null;
    }


  return (
    <ClassForm handleSubmit={handleSubmit} />
  )
}

export default BookClass