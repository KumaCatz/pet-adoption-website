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
        <div className='flex flex-row h-screen'>
          <header className='flex flex-col mx-auto w-1/2'>
            <div className='flex flex-col items-center justify-center basis-1/2'>
              <h1 className='mb-2 mt-4'>Welcome to Pet Project!</h1>
              <p>We're here to help you find your perfect companion!</p>
            </div>
            <div className='basis-1/2 flex justify-center'>
              <button className='h-1/4 w-2/5 border-black border-solid border-2'><Link href='./search'>Start Searching</Link></button>
            </div>
          </header>
          <section className='w-1/2 flex flex-col'>
            <LoginModal />
            <SignupModal />
          </section>
        </div>
      }
      <div className='fixed bottom-0'>clear cache</div>
    </>
  )
}
