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
    setIsShow(!isShow)
  }

  return (
    <div className='basis-1/2 flex items-center justify-center'>
      <button onClick={() => setIsShow(!isShow)} className='border-solid border bg-white p-6'>Login</button>
      { isShow &&
        <>
          <div
          className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <p>Hi</p><span onClick={() => setIsShow(!isShow)}>close</span>
                </div>
                <div className="relative p-6 flex-auto">
                  <form onSubmit={validateLogin}>
                    Provide email:
                    <input type='email' onChange={(e) => handleChange(e.target.value, "email")} />
                    Provide password:
                    <input type='password' onChange={(e) => handleChange(e.target.value, "password")} />
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button type='submit'>Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      }
    </div>
  )
}

export default LoginModal

// dispatchUserData({ type: userDataReducerActions.COMPARE_USERNAME})