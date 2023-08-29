'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

function LoginModal() {
  const [isShow, setIsShow] = useState<boolean>(false)
  const [isUser, setIsUser] = useState<boolean>(false)
  const router = useRouter()

  const validateUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsUser(true)

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