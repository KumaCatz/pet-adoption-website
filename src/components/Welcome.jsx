import React, { useContext } from 'react'

import Link from 'next/link'

import userDataReducerContext from '@/app/contexts/userDataReducerContext'

const Welcome = () => {
  const { userData } = useContext(userDataReducerContext)

  return (
    <>
      <div>Welcome {userData.firstName}! :)</div>
      <button><Link href='/search'>Search</Link></button>
      <button><Link href='/mypets'>My Pets</Link></button>
      <button><Link href='/profile'>Profile</Link></button>
    </>
  )
}

export default Welcome