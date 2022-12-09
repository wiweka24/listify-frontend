import { useState, Fragment } from 'react'
import { EditIcon, ProfileIcon } from '../img'
import { axiosInstance, URI, toastifyConfig } from "../components/component-config"
import { useNavigate, useLocation } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import Confirm from '../components/confirmation'
import ProfilePicture from '../components/profpic';

export default function ProfileEdit() {
  const location = useLocation();
  const { user } = location.state;
  const [showPicture, setShowPicture] = useState(false)
  const URL = URI + "/user/" + 'profile'
  const [showConfirm, setShowConfirm] = useState(false)
  const [userEdit, setUserEdit] = useState({
    username: user.username,
    email: user.email,
    password: user.password,
    about: user.about
  })

  const navigate = useNavigate()

  
  const handleClick = async (e) => {
    e.preventDefault()
    try {
      const res = await axiosInstance.patch(URL,  
        {
          username: userEdit.username,
          email: userEdit.email,
          password: userEdit.password,
          about: userEdit.about
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

  const [picture, setPicture] = useState({
    source:"",
  });

  const handleEdit = (pic) => {

  }

  return (
    <Fragment>
    <ToastContainer/>
    <div className='flex w-full justify-center'>
      <div className='w-full md:w-5/6 lg:w-1/2 px-10 py-10'>
        <h1 className='flex text-4xl font-bold justify-center'>Profile</h1>
        <div className='flex justify-center h-[18vw] lg:h-[10vw]'>
          <div className='flex justify-center h-[18vw] lg:h-[10vw]'>
            <img className='w-24 h-24 rounded-full bg-slate-50' src="" alt=''/>
            <button 
              className="w-24 h-24 group hover:bg-gray-200 opacity-60 rounded-full absolute flex justify-center items-center cursor-pointer transition duration-500"
              onClick={setShowPicture}>
              <div className='hidden group-hover:block w-10'>
                <EditIcon/>
              </div>
            </button>
          </div>
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

    <ProfilePicture
      isVisible={showPicture}
      onClose={() => setShowPicture(false)}
      profpic={() => handleEdit()}>
    </ProfilePicture>

    </Fragment>
  )
}