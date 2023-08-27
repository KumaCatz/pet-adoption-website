'use client'

import Link from "next/link"
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import { useState } from "react"

function Navbar() {
  const [loginModal, isLoginModal] = useState(false)
  const [signupModal, isSignupModal] = useState(false)

  return (
    <nav>
      <input type='text' placeholder='Who are you looking for?' />
      <button>Search Pets</button>
      <ul>
        <li>
          <Link href='/profile'>My Profile</Link>
        </li>
        <li>
          <Link href='/mypets'>My Pets</Link>
        </li>
        <li onClick={() => isSignupModal(!signupModal)}>
          Not a member?
          {signupModal ? <SignupModal /> : null}
        </li>
        <li>
          <button onClick={() => isLoginModal(!loginModal)}>Log In</button>
          {loginModal ? <LoginModal /> : null}
        </li>
      </ul>
    </nav>
  )
}

export default Navbar