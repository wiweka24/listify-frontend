import RegisterForm from '../components/register-form'

export default function Register() {
  return (
    <div className='flex w-full h-screen'>
      <div className='hidden lg:flex h-full w-1/2 items-center justify-center bg-gray-200'>
      to be hide
      </div>
      <div className='w-full flex item-center items-center justify-center lg:w-1/2'>
      <RegisterForm/>
      </div>
    </div>  
  )
}