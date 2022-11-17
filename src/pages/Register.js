import { LoginImg } from '../img'
import RegisterForm from '../components/register-form'

export default function Register() {
  return (
    <div className='flex w-full h-screen -mt-[80px]'>
      <div className='hidden lg:flex h-full w-1/2 items-center justify-center bg-gray-200'>
        <img class="max-w-none" src={LoginImg} alt="bgImg"/>
      </div>
      <div className='w-full flex item-center items-center justify-center lg:w-1/2'>
      <RegisterForm/>
      </div>
    </div>  
  )
}