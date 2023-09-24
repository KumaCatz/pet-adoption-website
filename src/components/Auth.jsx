import LoginModal from "@/components/LoginModal"
import SignupModal from '@/components/SignupModal'

const Auth = () => {
  return (
    <div className='flex flex-row h-screen'>
      <header className='flex flex-col mx-auto w-1/2'>
        <div className='flex flex-col items-center justify-center basis-1/3 mt-10'>
          <span>:D</span>
          <h1 className=''>Welcome!</h1>
          <h2>To Pet Project!</h2>
        </div>
        <div className='basis-1/3 flex items-center text-center  justify-center'>
          <p>Here to help you find your <br/><b>perfect companion</b></p>
        </div>
        <div className='basis-1/3 flex items-center justify-center mb-14'>
          <p className="text-center">To help you start, let's<br /> <button className='h-1/4 w-2/5 border-black border-solid border-2'>Search</button> <br />for our New Friend!</p>
        </div>
      </header>
      <section className='w-1/2 flex flex-col items-center justify-evenly'>
        <p>Already a member?</p>
        <LoginModal />
        <p>or</p>
        <SignupModal />
        <p>as our new friend!</p>
      </section>
    </div>

  )
}

export default Auth