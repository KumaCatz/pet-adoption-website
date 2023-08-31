'use client'

import React, { useState } from 'react'

import Link from 'next/link'

import Title from "@/components/Title"
import Description from "@/components/Description"
import LoginModal from "@/components/LoginModal"
import SearchButton from '@/components/SearchButton'
import SignupModal from '@/components/SignupModal'
import Welcome from '@/components/loggedIn/Welcome'

export default function Homepage() {
  const [isLogged, setIsLogged] = useState<boolean>(false)
  // const [userData, setUserData] actually reducer for userData

  return (
    <>
    {isLogged ?
      <Welcome /> 
      :
      <>
        <Title />
        <Description />
        <SearchButton />
        <LoginModal
          isLogged={isLogged}
          setIsLogged={setIsLogged} />
        <SignupModal />
      </>
    }
    <Link href='/mypets'>My Pets! :)</Link>
    <Link href='/profile'>my profile page</Link>
    <div onClick={() => setIsLogged(!isLogged)}>LogIn/LogOut</div>
    </>
  )
}
