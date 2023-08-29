'use client'

import React, { useState } from 'react'

import Title from "@/components/Title"
import Description from "@/components/Description"
import LoginModal from "@/components/LoginModal"
import Searchbutton from '@/components/Searchbar'
import SignupModal from '@/components/SignupModal'
import Welcome from '@/components/Welcome'

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
        <Searchbutton />
        <LoginModal
          isLogged={isLogged}
          setIsLogged={setIsLogged} />
        <SignupModal />
      </>
    }
    <div onClick={() => setIsLogged(!isLogged)}>LogIn/LogOut</div>
    </>
  )
}
