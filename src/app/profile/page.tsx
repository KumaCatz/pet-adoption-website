function Profile() {

  return (
    <form>
      <label htmlFor='password'>Password:</label>
      <input type='password' name='password' />
      <label htmlFor='email'>Email:</label>
      <input type='email' name='email' />
      <label htmlFor='first-name'>first-name:</label>
      <input type='text' name='first-name' />
      <label htmlFor='last-name'>last-name:</label>
      <input type='text' name='last-name' />
      <label htmlFor='phone'>phone:</label>
      <input type='phone?' name='phone' />
      <label htmlFor='bio'>bio:</label>
      <input type='bio' name='bio' />
      <button>save</button>
    </form>
  )
}

export default Profile