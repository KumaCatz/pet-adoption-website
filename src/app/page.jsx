'use client'

import React, { useContext } from 'react'
import Link from 'next/link'

import LoginModal from "@/components/LoginModal"
import SignupModal from '@/components/SignupModal'
import Welcome from '../components/Welcome'

import userDataReducerContext from './contexts/userDataReducerContext'

export default function Homepage() {
  const { userData } = useContext(userDataReducerContext)

  return (
    <>
      {userData.id ?
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
      <div >clear cache</div>
    </>
  )
}
