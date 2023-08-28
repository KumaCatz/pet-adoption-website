'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

function LoginModal() {
  const [isShow, setIsShow] = useState<boolean>(false)
  const router = useRouter()

  const validate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push('/userpage')

    return (
      console.log('hi')
    )
  }

  return (
    <div>
      <button onClick={() => setIsShow(!isShow)}>Login</button>
      { isShow &&
      <form onSubmit={ validate }>
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