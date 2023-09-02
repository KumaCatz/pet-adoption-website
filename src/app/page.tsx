'use client'

import React, { useReducer, useState } from 'react'

import Link from 'next/link'

import Title from "@/components/Title"
import Description from "@/components/Description"
import LoginModal from "@/components/LoginModal"
import SearchButton from '@/components/SearchButton'
import SignupModal from '@/components/SignupModal'
import Welcome from '@/components/Welcome'

import { userDataReducer, userDataReducerActions } from './reducers/userDataReducer'

export default function Homepage() {
  const [isLogged, setIsLogged] = useState<boolean>(false)
  const [isShow, setIsShow] = useState(false)
  const [userData, dispatchUserData] = useReducer(userDataReducer, {})
  // const [userData, setUserData] actually reducer for userData

  return (
    <>
    {isLogged ?
      <Welcome /> 
      :
      <>
        <header>
          <h1>Welcome to Pet Project</h1>
          <p>We're here to help you find your perfect companion</p>
        </header>
        <button><Link href='./search'>Start Searching</Link></button>
        <button onClick={() => setIsShow(!isShow)}>Login</button>
        <LoginModal
          isLogged={isLogged}
          setIsLogged={setIsLogged}
          isShow={isShow}
        />
        <SignupModal />
      </>
    }
    <Link href='/mypets'>My Pets! :)</Link>
    <Link href='/profile'>my profile page</Link>
    <div onClick={() => setIsLogged(!isLogged)}>LogIn/LogOut</div>
    </>
  )
}
