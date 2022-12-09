import { useState, useEffect, Fragment } from 'react'
import { ProfileIcon } from '../img'
import { axiosInstance, URI, toastifyConfig } from "../components/component-config"
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import Confirm from '../components/confirmation'

export default function ProfileEdit() {
  const navigate = useNavigate()
  const [user, setUser] = useState([])
  const [showConfirm, setShowConfirm] = useState(false)
  const URL = URI + "/user/" + 'profile'
  
  useEffect(() => {  
    (async () => {
      try {
        const res = await axiosInstance.get(URL)
        setUser(res.data)
      } catch(err) {
        console.log(err)
      }
    })()
  }, [])

  const handleChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };
  
  const handleClick = async (e) => {
    e.preventDefault()
    try{
      const res = await axiosInstance.patch(URL + '/'+ user._id,  
        {
          username: user.username,
          email: user.email,
          password: user.password,
        })
      console.log(res.data)
      navigate("/profile")
  
    } catch (err) {
      console.error(err.response.data);
      toast.error(err.response.data.error, toastifyConfig)
    }
  };

  const handleCancel = () => {
    navigate("/profile")
  }

  return (
    <Fragment>
    <ToastContainer/>
    <div className='flex w-full justify-center'>
      <div className='w-full md:w-5/6 lg:w-1/2 px-10 py-10'>
        <h1 className='flex text-4xl font-bold justify-center'>Profile</h1>
        <div className='flex justify-center h-[18vw] lg:h-[10vw]'>
          <ProfileIcon/>
        </div>
        <div className=''>
          <h3 className='text-xl font-semibold'>About</h3>
          <p className='py-1 px-2 w-full h-20 border-2 rounded-lg border-gray-100 bg-blue-100'>test</p>
        </div>
        <div className='md:flex mt-2'>
          <div className='md:w-[49%] md:mr-[2%]'>
            <h3 className='text-xl font-semibold'>Username</h3>
            <input 
              className='py-1 px-2 w-full border-2 rounded-lg border-gray-100 bg-blue-100'
              id="username"
              value={user.username}
              onChange={handleChange}
              type='text'
            />
          </div>
          <div className='md:w-[49%] md:mt-0 mt-2'>
            <h3 className='text-xl font-semibold'>Email</h3>
            <input 
              className='py-1 px-2 w-full border-2 rounded-lg border-gray-100 bg-blue-100'
              id="email"
              value={user.email}
              type='email'
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='md:w-[49%] mt-2'>
          <h3 className='text-xl font-semibold'>Password</h3>
          <input 
            className='py-1 px-2 w-full border-2 rounded-lg border-gray-100 bg-blue-100'
            value={user.password}
            type='password'
            // onChange={handleChange}
          />
        </div>
        <div className='mt-16 flex justify-center'>
          <button className='w-3/5 md:w-2/5 bg-blue-500 text-white py-2 px-6 rounded-xl hover:bg-blue-400 duration-500'
            // onClick={() => setShowConfirm(true) }
            onClick={handleClick}>
            Edit
          </button>
        </div>
        <div className='mt-5 flex justify-center'>
          <button 
            className='w-3/5 md:w-2/5 bg-red-500 text-white py-2 px-6 rounded-xl hover:bg-red-400 duration-500'
            onClick={handleCancel}
            >Cancel
          </button>
        </div>
      </div>
    </div>

    <Confirm 
      isVisible={showConfirm} 
      onClose={() => setShowConfirm(false)}
      text = "Edit Profile"
      loc = {handleClick}>
    </Confirm>

    </Fragment>
  )
}