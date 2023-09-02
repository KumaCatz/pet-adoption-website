'use client'

import React, { useState, SetStateAction } from 'react'
import Link from 'next/link'

type Props = {
  isLogged: boolean;
  setIsLogged: React.Dispatch<SetStateAction<boolean>>;
  isShow: boolean;
}

const LoginModal: React.FC<Props> = ({ isLogged, setIsLogged, isShow }) => {

  return (
    <div>
      { isShow &&
      <form onSubmit={() => {setIsLogged(!isLogged)}}>
      Provide login:
      <input type='text' />
      Provide password:
      <input type='password' />
      <button type='submit'>Submit</button>
      </form>
      }
    </div>
  )
}

export default LoginModal