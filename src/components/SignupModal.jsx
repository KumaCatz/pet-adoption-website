import axios from "axios"
import { useState } from "react"

function SignupModal() {
  const [isShow, setIsShow] = useState(false)
  const [registerForm, setRegisterForm] = useState({})

  const handleChange = (value, key) => {
    setRegisterForm((pre) => {
      return {
        ...pre,
        [key]: value
      }
    })
  }

  const registerNewUser = async (e) => {
    e.preventDefault()
    console.log(registerForm)
    axios.post('http://localhost:2500/users', registerForm)
      .then(function(res) {
        console.log(res)
      })
      .catch(function (err) {
        console.log(err)
      })
  }

  return (
    <div>
    <button onClick={() => setIsShow(!isShow)}>create new account</button>
    { isShow &&
      <form onSubmit={registerNewUser}>
        Provide email adress:
        <input type='email' onChange={(e) => handleChange(e.target.value, "email")} />
        Provide password:
        <input type='password' onChange={(e) => handleChange(e.target.value, "password")} />
        Re-enter password:
        <input type='password' />
        Provide first name:
        <input type='text' onChange={(e) => handleChange(e.target.value, "first-name")} />
        Provide last name:
        <input type='text' onChange={(e) => handleChange(e.target.value, "last-name")} />
        Provide phone number:
        <input type='tel' onChange={(e) => handleChange(e.target.value, "phone")} />
        <button type='submit'>Submit</button>
      </form>
    }
    </div>
  )
}

export default SignupModal