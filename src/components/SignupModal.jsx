
import { useState, useContext } from "react"

import userDataReducerContext from "@/app/contexts/userDataReducerContext"
import { userDataReducerActions } from "@/app/reducers/userDataReducer"
import { POST } from '../utils/api'

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

  }

  const registerNewUser = async (e) => {
    try {
      e.preventDefault()

      const res = await POST('/auth/register', registerForm)
      
      if(!res) {return}

      dispatchUserData({
        type: userDataReducerActions.REGISTER_NEW,
        payload: {
          id: res.id,
          body: registerForm,
        }
      })
  
      setIsShow(!isShow)  
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <div className='basis-1/2 flex items-center justify-center'>
      <button onClick={() => setIsShow(!isShow)} className='border-solid w-2/3 h-3/4 border bg-white p-6'>Create Account</button>
      { isShow &&
        <>
          <div
          className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <p>Welcome!</p><button onClick={() => setIsShow(!isShow)}>close</button>
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
                    <input type='text' onChange={(e) => handleChange(e.target.value, "firstName")} />
                    Provide last name:
                    <input type='text' onChange={(e) => handleChange(e.target.value, "lastName")} />
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