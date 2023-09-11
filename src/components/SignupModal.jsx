import axios from "axios"
import { useState, useContext } from "react"
import userDataReducerContext from "@/app/contexts/userDataReducerContext"
import { userDataReducerActions } from "@/app/reducers/userDataReducer"
import { REG_NEW_USER } from '../utils/api'

function SignupModal() {
  const [isShow, setIsShow] = useState(false)
  const [registerForm, setRegisterForm] = useState({})
  const { userData, dispatchUserData } = useContext(userDataReducerContext)

  const handleChange = (value, key) => {
    setRegisterForm((pre) => {
      return {
        ...pre,
        [key]: value
      }
    })
    dispatchUserData({
      type: userDataReducerActions.REGISTER_NEW,
      newUser: registerForm
    })
  }

  const registerNewUser = async (e) => {
    e.preventDefault()



    REG_NEW_USER('/', userData)

    // axios.post('http://localhost:2500/users', registerForm)
    //   .then(function(res) {
    //     console.log(res)
    //   })
    //   .catch(function (err) {
    //     console.log(err)
    //   })
  }

  return (
    <div className='basis-1/2 flex items-center justify-center'>
      <button onClick={() => setIsShow(!isShow)} className='border-solid border bg-white p-6 mb-10'>create new account</button>
      { isShow &&
        <>
          <div
          className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  Hi
                </div>
                <div className="relative p-6 flex-auto">
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

export default SignupModal