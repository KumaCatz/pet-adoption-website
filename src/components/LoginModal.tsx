'use client'

import React, { useContext, SetStateAction } from 'react'

import Link from 'next/link'

import userDataReducerContext from '@/app/contexts/userDataReducerContext'
import { userDataReducerActions } from '@/app/reducers/userDataReducer'

type Props = {
  isLogged: boolean;
  setIsLogged: React.Dispatch<SetStateAction<boolean>>;
  isShow: boolean;
}

const LoginModal: React.FC<Props> = ({ isLogged, setIsLogged, isShow }) => {
  const { userData, dispatchUserData } = useContext(userDataReducerContext)

  return (
    <div>
      { isShow &&
      <form onSubmit={() => {setIsLogged(!isLogged)}}>
      Provide login:
      <input type='text' onChange={(e) => dispatchUserData({type: userDataReducerActions.COMPARE_USERNAME})} />
      Provide password:
      <input type='password' />
      <button type='submit'>Submit</button>
      </form>
      }
    </div>
  )
}

export default LoginModal