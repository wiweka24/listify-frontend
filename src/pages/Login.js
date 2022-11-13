import { logRoles } from '@testing-library/react'
import bgImg from '../img/to-do-list.png'
import LoginForm from '../components/login-form'

export default function Login() {

  return (
    <div className='flex w-full h-screen'>
      <div className="hidden lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
        <img class="max-w-none" src={bgImg} alt="bgImg"/>
      </div>
      <div className='w-full flex item-center items-center justify-center lg:w-1/2'>
        <LoginForm/>
      </div>
    </div>
    
  )
}
