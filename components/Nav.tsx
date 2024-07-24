"use client"

import '../styles/globals.css'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { signIn, signOut, useSession, getProviders, ClientSafeProvider, LiteralUnion } from 'next-auth/react'
import { BuiltInProviderType } from 'next-auth/providers'

const Nav = () => {
  
  const { data: session } = useSession();
  const [providers, setProviders] = useState<Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> | null>(null);
  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    const providersEffect = async () => {
      const response = await getProviders();
      setProviders(response);
    }

    providersEffect();
    
  }, [])

  return (
    <nav className='flex justify-between items-center m-16 max-h-1/10'>
      <Link href='/'>
        <h1 className = 'font-extrabold text-5xl'>SkyTutors</h1>
      </Link>
      <Link href='/tutors'>
        <p>Tutors</p>
      </Link>
      <Link href='/contact-us'>
        <p>Contact Us</p>
      </Link>
      <Link href='/book-class'>
        <button className="rounded bg-red-500 text-white p-4">Book Class</button>
      </Link>
      

      {session?.user ? 
      <div className='flex flex-col items-center'>
        <div className='border-2 border-black rounded-full max-w-max'>
          <Image 
            className ='rounded-full'
            src= {session?.user.image} 
            alt='User Image' 
            height={60} 
            width={60}
            onClick={() => setDropdown((prev) => {return !prev})}>
          </Image>
        </div>
        {dropdown ? <div className = "flex flex-col m-4 border-black border-2 p-2 absolute mt-16">
          <Link 
            href="/profile"
            onClick={() => {setDropdown(false)}}
          >
          My Profile
          </Link>
          <Link
            href="/classes"
            onClick={() => {setDropdown(false)}}
            >
          My Classes
          </Link>
          <button
            className=''
            onClick={() => {
              setDropdown(false);
              signOut();
            }}>
            Sign Out
          </button>
        </div> : <></>}
      </div>
      :
      <>
        {providers && 
          Object.values(providers).map((provider) => (
              <button
                type="button"
                key={provider.name}
                onClick={() => {signIn(provider.id)}}>
                {provider.name}
              </button>
            ))}
      </>
      }

      
    </nav>
    
  )
}

export default Nav