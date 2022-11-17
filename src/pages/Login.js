import { LoginImg } from '../img'
import LoginForm from '../components/login-form'

export default function Login() {

  return (
    <div className='flex w-full h-screen -mt-[80px]'>
      <div className="hidden lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
        <img class="max-w-none" src={LoginImg} alt="bgImg"/>
      </div>
      <div className='w-full flex items-center justify-center lg:w-1/2'>
        <LoginForm/>
      </div>
    </div>  
  )
}