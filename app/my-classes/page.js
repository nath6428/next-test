"use client"

import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'

const page = () => {

    const { data: session, status } = useSession();
    const [classes, setClasses] = useState([])
    const ID = session?.user.id || "admin"
    useEffect(() => {
        
        const fetchClasses = async () => {
            
            try {
                
                const res = await fetch(`api/class/view/${ID}`);
                const data = await res.json();
                
                setClasses(data)
            
            } catch (error) {
                console.log(error)
            }
        }

        fetchClasses()

    }, [])
  
    return (
    <div>
        {classes.map((a) => {
            return <div>{a.tutor}, {a.time}</div>
        })}
    </div>
  )
}

export default page