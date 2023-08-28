'use client'

import { useState } from 'react'
import Title from "@/components/Title"
import Description from "@/components/Description"
import LoginModal from "@/components/LoginModal"
import Searchbutton from '@/components/Searchbar'
import SignupModal from '@/components/SignupModal'

export default function Homepage() {
  // const [isLogged, setIsLogged] = useState<boolean>(true)

  return (
    <>
    {/* {isLogged && <Title />} */}
      <Title />
      <Description />
      <Searchbutton />
      <LoginModal />
      <SignupModal />
    </>
  )
}
