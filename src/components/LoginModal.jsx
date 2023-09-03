'use client'

import React, { useContext, useState } from 'react'

import userDataReducerContext from '@/app/contexts/userDataReducerContext'
import { userDataReducerActions } from '@/app/reducers/userDataReducer'

const LoginModal = ({ isLogged, setIsLogged, isShow }) => {
  const { userData, dispatchUserData } = useContext(userDataReducerContext)
  const [userLogin, setUserLogin] = useState('')
  const [userPassword, setUserPassword] = useState('')

  function validateLogin(e) {
    e.preventDefault()

    dispatchUserData({ type: userDataReducerActions.LOGIN, username: userLogin, password: userPassword })
    console.log(userData)
    setIsLogged(!isLogged)
  }

  return (
    <div>
      { isShow &&
      <form onSubmit={validateLogin}>
      Provide login:
      <input type='text' onChange={(e) => setUserLogin(e.target.value)} />
      Provide password:
      <input type='password' onChange={(e) => setUserPassword(e.target.value)} />
      <button type='submit'>Submit</button>
      </form>
      }
    </div>
  )
}

export default LoginModal

// dispatchUserData({ type: userDataReducerActions.COMPARE_USERNAME})