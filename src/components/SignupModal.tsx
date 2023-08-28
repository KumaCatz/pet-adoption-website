import { useState } from "react"

function SignupModal() {
  const [isShow, setIsShow] = useState<boolean>(false)

  return (
    <div>
    <button onClick={() => setIsShow(!isShow)}>create new account</button>
    { isShow &&
      <form>
      Provide email adress:
      <input type='email' />
      Provide password:
      <input type='password' />
      Re-enter password:
      <input type='password' />
      Provide first name:
      <input type='text' />
      Provide last name:
      <input type='text' />
      Provide phone number:
      <input type='tel' />
      </form>
    }
    </div>
  )
}

export default SignupModal