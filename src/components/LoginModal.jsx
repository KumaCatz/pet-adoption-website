'use client'

import React, { useContext, useState } from 'react'

import userDataReducerContext from '@/app/contexts/userDataReducerContext'
import { userDataReducerActions } from '@/app/reducers/userDataReducer'

const LoginModal = () => {
  const { userData, dispatchUserData } = useContext(userDataReducerContext)
  const [loginForm, setLoginForm] = useState({})
  const [isShow, setIsShow] = useState(false)

  const handleChange = (value, key) => {
    setLoginForm((pre) => {
      return {
        ...pre,
        [key]: value
      }
    })
  }

  function validateLogin(e) {
    e.preventDefault()

    dispatchUserData({
      type: userDataReducerActions.LOGIN,
      user: loginForm
    })
    console.log(userData)
  }

  return (
    <div>
      <button onClick={() => setIsShow(!isShow)} className='border-solid border bg-white'>Login</button>
      { isShow &&
        <form onSubmit={validateLogin}>
          Provide email:
          <input type='email' onChange={(e) => handleChange(e.target.value, "email")} />
          Provide password:
          <input type='password' onChange={(e) => handleChange(e.target.value, "password")} />
          <button type='submit'>Submit</button>
        </form>
      }
    </div>
  )
}

export default LoginModal

// dispatchUserData({ type: userDataReducerActions.COMPARE_USERNAME})