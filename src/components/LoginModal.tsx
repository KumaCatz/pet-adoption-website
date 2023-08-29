'use client'

import React, { useState, SetStateAction } from 'react'

type Props = {
  isLogged: boolean;
  setIsLogged: React.Dispatch<SetStateAction<boolean>>;
}

const LoginModal: React.FC<Props> = ({
  isLogged, setIsLogged
}) => {
  const [isShow, setIsShow] = useState(false)

  const validateUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLogged(!isLogged)

    return (
      console.log('hi')
    )
  }

  return (
    <div>
      <button onClick={() => setIsShow(!isShow)}>Login</button>
      { isShow &&
      <form onSubmit={ validateUser }>
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