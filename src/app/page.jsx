'use client'

import React, { useContext } from 'react'
import Auth from '../components/Auth'
import Welcome from '../components/Welcome'
import userDataReducerContext from './contexts/userDataReducerContext'

export default function Homepage() {
  const { userData } = useContext(userDataReducerContext)

  return (
    <>
      {userData.id ?
        <Welcome />
        :
        <Auth />
      }
      <button className='fixed bottom-0' onClick={() => console.log(userData)}>userData</button>
    </>
  )
}
