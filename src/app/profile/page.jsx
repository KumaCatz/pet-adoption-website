'use client'

import { useState } from "react"

function Profile() {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState(0)
  const [bio, setBio] = useState('')

  function saveProfile(e) {
    e.preventDefault()
  }

  return (
    <form onSubmit={saveProfile}>
      <label htmlFor='password'>Password:</label>
      <input type='password' name='password' onChange={(e) => setPassword(e.target.value)} />
      <label htmlFor='email'>Email:</label>
      <input type='email' name='email' onChange={(e) => setEmail(e.target.value)} />
      <label htmlFor='first-name'>first-name:</label>
      <input type='text' name='first-name' onChange={(e) => setFirstName(e.target.value)} />
      <label htmlFor='last-name'>last-name:</label>
      <input type='text' name='last-name' onChange={(e) => setLastName(e.target.value)} />
      <label htmlFor='phone'>phone:</label>
      <input type='phone?' name='phone' onChange={(e) => setPhone(e.target.value)} />
      <label htmlFor='bio'>bio:</label>
      <input type='bio' name='bio' onChange={(e) => setBio(e.target.value)} />
      <button>save</button>
    </form>
  )
}

export default Profile