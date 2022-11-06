import axios from 'axios'
import LoginForm from '../components/login-form'

export default function Login() {
  const axiosInstance = axios.create({
    withCredentials: true
  })
  const URL = "http://localhost:5000/user/login"

  const Login = async () => {
    try {
        const res = await axiosInstance.post(
          URL, 
          {
            "email": "wiweka24@mail.com",
            "password": "Wiweka12345#"
          })
        console.log(res.data);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
  };

  Login()

  return (
    <div className='flex w-full h-screen'>
      <div className='hidden lg:flex h-full w-1/2 items-center justify-center bg-gray-200'>
        to be hide
      </div>
      <div className='w-full flex item-center items-center justify-center lg:w-1/2'>
        <LoginForm/>
      </div>
    </div>
  )
}
