import { useState, Fragment } from 'react'

import { useNavigate, useLocation } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

import { axiosInstance, URI, toastifyConfig } from "../components/component-config"
import Confirm from '../components/confirmation'
import ProfilePicture from '../components/profpic';
import { EditIcon } from '../img'

export default function ProfileEdit() {
  const navigate = useNavigate()
  const location = useLocation();
  const { user } = location.state;
  const URL = URI + "/user/profile"

  const [showPicture, setShowPicture] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [userEdit, setUserEdit] = useState({
    username: user.username,
    email: user.email,
    password: user.password,
    about: user.about
  })
  const [profpic, setProfpic] = useState(user.profilepic)
  
  const handleClick = async (e) => {
    try {
      const res = await axiosInstance.patch(URL,  
        {
          username: userEdit.username,
          email: userEdit.email,
          password: userEdit.password,
          about: userEdit.about,
          profilepic: profpic
        })
        console.log(res.data)
        navigate("/profile")
        
    } catch (err) {
      console.error(err.response.data);
      toast.error(err.response.data.error, toastifyConfig)
    }
  }

  const handleChange = (e) => {
    setUserEdit({ ...user, [e.target.id]: e.target.value });
  };
    
  const handleCancel = () => {
    navigate("/profile")
  };

  return (
    <Fragment>
    <ToastContainer/>
    <div className='flex w-full justify-center'>
      <div className='w-full md:w-5/6 lg:w-1/2 px-10 py-10'>
        <h1 className='flex text-4xl font-bold justify-center pb-2'>Profile</h1>
        <div className='flex justify-center h-[18vw] lg:h-[8vw]'>
          <img className='auto rounded-full bg-slate-50' src={profpic} alt=''/>
          <button 
            className="h-[18vw] w-[18vw] lg:h-[8vw] lg:w-[8vw] group hover:bg-gray-200 opacity-60 rounded-full absolute flex justify-center items-center cursor-pointer transition duration-500"
            onClick={setShowPicture}>
            <div className='hidden group-hover:block w-10'>
              <EditIcon/>
            </div>
          </button>
        </div>
        <div className=''>
          <h3 className='text-xl font-semibold'>About</h3>
          <textarea 
              className='py-1 px-2 w-full h-20 border-2 rounded-lg border-gray-200'
              id="about"
              value={userEdit.about}
              onChange={handleChange}
              type='text'
            />
        </div>
        <div className='md:flex mt-2'>
          <div className='md:w-[49%] md:mr-[2%]'>
            <h3 className='text-xl font-semibold'>Username</h3>
            <input 
              className='py-1 px-2 w-full border-2 rounded-lg border-gray-200'
              id="username"
              value={userEdit.username}
              onChange={handleChange}
              type='text'
            />
          </div>
          <div className='md:w-[49%] md:mt-0 mt-2'>
            <h3 className='text-xl font-semibold'>Email</h3>
            <input 
              className='py-1 px-2 w-full border-2 rounded-lg border-gray-200'
              id="email"
              value={userEdit.email}
              type='email'
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='md:w-[49%] mt-2'>
          <h3 className='text-xl font-semibold'>Password</h3>
          <input 
            className='py-1 px-2 w-full border-2 rounded-lg border-gray-200'
            id="password"
            value={userEdit.password}
            type="password"
            onChange={handleChange}
          />
        </div>
        <div className='mt-16 flex justify-center'>
          <button className='w-3/5 md:w-2/5 bg-blue-500 text-white py-2 px-6 rounded-xl hover:bg-blue-400 duration-500'
            onClick={() => setShowConfirm(true) }
            // onClick={handleClick}
            >
            Save
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

    <ProfilePicture
      isVisible={showPicture}
      onClose={() => setShowPicture(false)}
      modalpic={setProfpic}>
    </ProfilePicture>

    </Fragment>
  )
}