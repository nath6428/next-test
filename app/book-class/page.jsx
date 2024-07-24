"use client"

import React from 'react'
import ClassForm from '@components/classform'

const BookClass = () => {
    
    const [class, setClass] = useState({
        tutor: "",
        time: ""
    });

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        
        try {
            const res = await fetch('api/prompt/new', {
                method: 'POST',
                body: JSON.stringify({
                    tutor: class.tutor,
                    time: class.time,
                    userId: session?.user.id
                })
            })
        } catch (error) {
            
        }
        return null;
    }


  return (
    <ClassForm handleSubmit={handleSubmit} />
  )
}

export default BookClass