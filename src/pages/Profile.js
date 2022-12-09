import { useState, useEffect, Fragment } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import { axiosInstance, URI } from "../components/component-config"
import Confirm from '../components/confirmation'

export default function Profile() {
  const navigate = useNavigate()
  const [user, setUser] = useState([])
  const [showConfirm, setShowConfirm] = useState(false)
  const URL = URI + "/user/"
  
  useEffect(() => {  
    (async () => {
      try {
        const res = await axiosInstance.get(URL + 'profile')
        setUser(res.data)
      } catch(err) {
        console.log(err)
      }
    })()
  }, [])

  const handleClick = async (e) => {
    try{
      const res = await axiosInstance.post(URL + 'logout')
      console.log(res.data)
      navigate("/login")
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Fragment>
    <div className='flex w-full justify-center'>
      <div className='w-full md:w-5/6 lg:w-1/2 px-10 py-10'>
        <h1 className='flex text-4xl font-bold justify-center'>Profile</h1>
        <div className='flex justify-center h-[18vw] lg:h-[8vw]'>
          <img className='auto rounded-full bg-slate-50' src={user.profilepic} alt=''/>
        </div>
        <div className=''>
          <h3 className='text-xl font-semibold'>About</h3>
          <p className='py-1 px-2 w-full h-20 border-2 rounded-lg border-gray-100 bg-blue-100'>
            {user.about}
          </p>
        </div>
        <div className='md:flex mt-2'>
          <div className='md:w-[49%] md:mr-[2%]'>
            <h3 className='text-xl font-semibold'>Username</h3>
            <p className='py-1 px-2 w-full border-2 rounded-lg border-gray-100 bg-blue-100'>
              {user.username}
            </p>
          </div>
          <div className='md:w-[49%] md:mt-0 mt-2'>
            <h3 className='text-xl font-semibold'>Email</h3>
            <p className='py-1 px-2 w-full border-2 rounded-lg border-gray-100 bg-blue-100'>
              {user.email}
            </p>
          </div>
        </div>
        <div className='mt-16 flex justify-center'>
          <Link 
            className='w-3/5 md:w-2/5 bg-blue-500 text-white text-center py-2 px-6 rounded-xl hover:bg-blue-400 duration-500' 
            to='/profile-edit' 
            state={{ user }}>
              Edit Profile
          </Link>
        </div>
        <div className='mt-5 flex justify-center'>
          <button 
            className='w-3/5 md:w-2/5 bg-red-500 text-white py-2 px-6 rounded-xl hover:bg-red-400 duration-500'
            onClick={() => setShowConfirm(true) }
            >Logout
          </button>
        </div>
      </div>
    </div>

    <Confirm 
      isVisible={showConfirm} 
      onClose={() => setShowConfirm(false)}
      text = "Logout"
      loc = {handleClick}>
    </Confirm>

    </Fragment>
  )
}