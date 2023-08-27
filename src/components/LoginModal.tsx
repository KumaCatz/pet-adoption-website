'use client'

import { redirect } from 'next/navigation'

function LoginModal() {

  const validate = () => {

    return (
      console.log('hi')
    )
  }

  return (
    <div>
      <form onSubmit={validate}>
        Provide login:
        <input type='text' />
        Provide password:
        <input type='password' />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default LoginModal