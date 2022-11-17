import { axiosInstance } from "./axiosInstance";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

export default function RegisterForm(){
  const URL = "http://localhost:5000/user/signup"
  
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.id]: e.target.value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(values.email)
    console.log(values.password)
    try{
      const res = await axiosInstance.post(URL,  
        {
          username: values.username,
          email: values.email,
          password: values.password
        })
      console.log(res.data)

      navigate("/")
  
    } catch (err) {
      console.error(err.response.data);
      alert(err.response.data.error.toString())
    }
  };

  return(
    <div className='bg-white px-10 py-10 rounded-3xl border-2 border-gray-100'>
      <form onSubmit={handleSubmit}>
        <h1 className='flex justify-center item-center text-3xl font-semibold'>Register</h1>
        <div className='mt-4 flex justify-center item-center'>
          <p className='text-base font-medium'>Already have an account? &nbsp;</p>
          <Link 
            to="/"
            className='text-base font-medium text-blue-500'
            >Log In
          </Link>
        </div>
        {/* Username */}
        <div className='mt-8'>
          <div className='mt-3'>
            <label className='text-base font-medium'>Username</label>
            <input
              id='username'
              className='w-full rounded-xl border-2 border-gray-100 p-2 mt-1 bg-transparent'
              placeholder='name'
              type='text'
              onChange={handleChange}
              value={values.username}
            />
          </div>
          {/* Email*/}
          <div className='mt-3'>
            <label className='text-base font-medium'>Email</label>
            <input
              id='email'
              className='w-full rounded-xl border-2 border-gray-100 p-2 mt-1 bg-transparent'
              placeholder='*@mail.com'
              type='email'
              onChange={handleChange}
              value={values.email}
            />
          </div>
          {/* Password */}
          <div className='mt-3'>
            <label className='text-base font-medium'>Password</label>
            <input
              id='password'
              className='w-full rounded-xl border-2 border-gray-100 p-2 mt-1 bg-transparent'
              placeholder='****'
              type='password'
              onChange={handleChange}
              value={values.password}
          />
          </div>
          {/* Remember me */}
          <div className='mt-5 flex justify-between item-center'>
            <div>
              <input 
                type='checkbox'
                id='remember'
              />
              <label className='ml-2 font-medium text-base' for='remember'>Remember me</label>
            </div>
          </div>
        </div>
        <div className='mt-8 flex flex-col'>
          <button 
            type="submit" 
            className='active:scale-[0.98] py-1.5 rounded-xl bg-blue-500 text-white text-lg hover:bg-blue-400 duration-500 font-semibold'
            >Register
          </button>
        </div>
      </form>
    </div>
  )
}