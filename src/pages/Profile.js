import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Profile() {
  const navigate = useNavigate()
  const[user, setUser] = useState([])
  const URL = "http://localhost:5000/user/"
  const axiosInstance = axios.create({
    withCredentials: true
  })
  
  useEffect(() => {  
    (async () => {
      try {
        const res = await axiosInstance.get(URL+'profile')
        setUser(res.data)
      } catch(err) {
        console.log(err)
      }
    })()
  }, [])
  console.log(user)

  const handleClick = async (e) => {
    try{
      const res = await axiosInstance.post(URL+'logout')
      console.log(res.data)
      navigate("/")
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='flex w-full h-screen justify-center'>
      <div className='w-full md:w-5/6 lg:w-1/2 px-10 py-10'>
        <h1 className='flex text-4xl font-semibold justify-center'>Profile</h1>
        <div className='flex justify-center text-[17vw] lg:text-[10vw]'>
          <ion-icon name="person-circle-outline"></ion-icon>
        </div>
        <div className=''>
          <h3 className='text-xl font-semibold'>About</h3>
          <p className='py-1 px-1 w-full h-20 border-2 rounded-lg border-gray-500'>test</p>
        </div>
        <div className='md:flex mt-2'>
          <div className='md:w-[49%] md:mr-[2%]'>
            <h3 className='text-xl font-semibold'>Username</h3>
            <input 
              className='py-1 px-1 w-full border-2 rounded-lg border-gray-500'
              value={user.username}
              readOnly
            />
          </div>
          <div className='md:w-[49%] md:mt-0 mt-2'>
            <h3 className='text-xl font-semibold'>Email</h3>
            <input 
              className='py-1 px-1 w-full border-2 rounded-lg border-gray-500'
              value={user.email}
              type='email'
              readOnly
            />
          </div>
        </div>
        <div className='md:w-[49%] mt-2'>
          <h3 className='text-xl font-semibold'>Password</h3>
          <input 
            className='py-1 px-1 w-full border-2 rounded-lg border-gray-500'
            value={user.password}
            type='password'
            readOnly
          />
        </div>
        <div className='mt-16 flex justify-center'>
          <button className='w-3/5 md:w-2/5 bg-indigo-600 text-white py-2 px-6 rounded hover:bg-indigo-400 duration-500'>Edit Profile</button>
        </div>
        <div className='mt-5 flex justify-center'>
          <button 
            className='w-3/5 md:w-2/5 bg-red-500 text-white py-2 px-6 rounded hover:bg-indigo-400 duration-500'
            onClick={handleClick}
            >Logout
          </button>
        </div>
      </div>
    </div>
  )
}