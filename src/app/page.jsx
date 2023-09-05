'use client'

import React, { useState } from 'react'

import Link from 'next/link'

import LoginModal from "@/components/LoginModal"
import SignupModal from '@/components/SignupModal'
import Welcome from '../components/Welcome'

export default function Homepage() {
  const [isLogged, setIsLogged] = useState(false)

  return (
    <>
      {isLogged ?
        <Welcome />
        :
        <div className='flex flex-row'>
          <header className='grow'>
            <h1>Welcome to Pet Project</h1>
            <p>We're here to help you find your perfect companion</p>
            <button><Link href='./search'>Start Searching</Link></button>
          </header>
          <section className='grow'>
            <LoginModal />
            <SignupModal />
          </section>
        </div>
      }
      <div onClick={() => setIsLogged(!isLogged)}>LogIn/LogOut</div>
    </>
  )
}
