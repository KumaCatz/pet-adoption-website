'use client'

import React, { useContext, useState } from 'react'

import userDataReducerContext from '@/app/contexts/userDataReducerContext'
import { userDataReducerActions } from '@/app/reducers/userDataReducer'

const LoginModal = ({ isLogged, setIsLogged }) => {
  const { userData, dispatchUserData } = useContext(userDataReducerContext)
  const [loginUsername, setLoginUsername] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [isShow, setIsShow] = useState(false)

  function validateLogin(e) {
    e.preventDefault()

    dispatchUserData({
      type: userDataReducerActions.LOGIN,
      username: loginUsername,
      password: loginPassword,
    })
    console.log(userData)
    setIsLogged(!isLogged)
  }

  return (
    <div>
      <button onClick={() => setIsShow(!isShow)} className='border-solid border bg-white'>Login</button>
      { isShow &&
      <form onSubmit={validateLogin}>
      Provide login:
      <input type='text' onChange={(e) => setLoginUsername(e.target.value)} />
      Provide password:
      <input type='password' onChange={(e) => setLoginPassword(e.target.value)} />
      <button type='submit'>Submit</button>
      </form>
      }
    </div>
  )
}

export default LoginModal

// dispatchUserData({ type: userDataReducerActions.COMPARE_USERNAME})