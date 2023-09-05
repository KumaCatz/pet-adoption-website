'use client'

import React, { useReducer, useState } from 'react'

import Link from 'next/link'

import Title from "@/components/Title"
import Description from "@/components/Description"
import LoginModal from "@/components/LoginModal"
import SearchButton from '@/components/SearchButton'
import SignupModal from '@/components/SignupModal'
import Welcome from '../components/Welcome'

import userDataReducerContext from './contexts/userDataReducerContext.js'

import { userDataReducer, userDataReducerActions } from './reducers/userDataReducer.js'

export default function Homepage() {
  const [isLogged, setIsLogged] = useState(false)
  const [isShow, setIsShow] = useState(false)
  const [userData, dispatchUserData] = useReducer(userDataReducer, {})

  return (
    <userDataReducerContext.Provider value={{userData, dispatchUserData}}>
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
            <LoginModal
              isLogged={isLogged}
              setIsLogged={setIsLogged}
            />
            <SignupModal />
          </section>
        </div>
      }
      <div onClick={() => setIsLogged(!isLogged)}>LogIn/LogOut</div>
    </userDataReducerContext.Provider>
  )
}
