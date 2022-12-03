import { axiosInstance, URI, toastifyConfig } from "./component-config";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LoginForm(){
  const URL = URI + "/user/login"
  const navigate = useNavigate()
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  
  const handleChange = (e) => {
    setValues({ ...values, [e.target.id]: e.target.value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      const res = await axiosInstance.post(URL,  
        {
          email: values.email,
          password: values.password
        })

      toast.success(res.data, toastifyConfig);
      navigate("/activities")
  
    } catch (err) {
      toast.error(err.response.data.error, toastifyConfig)
    }
  };

  return(
    <div className='bg-white px-10 py-10 rounded-3xl border-2 border-gray-100'>
      <ToastContainer/>
      <form onSubmit={handleSubmit}>
        <h1 className='flex justify-center items-center text-3xl font-semibold'>Log In</h1>
        <div className='mt-4 flex justify-center items-center'>
          <p className='text-base font-medium'>Don't have an account yet? &nbsp;</p>
          <Link 
            to="/register"
            className='text-base font-medium text-blue-500'
            >Register
          </Link>
        </div>
        <div className='mt-8'>
        {/* Email */}
         <div>
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
          {/* Remember Me */}
          <div className='mt-5 flex justify-between items-center'>
            <div>
              <input 
                type='checkbox'
                id='remember'
              />
              <label className='ml-2 font-medium text-base' for='remember'>Remember me</label>
            </div>
            <button className='text-base font-medium text-blue-500'>Lupa password</button>
          </div>
        </div>
        <div className='mt-8 flex flex-col'>
          <button 
            type="submit" 
            className='active:scale-[0.98] py-1.5 rounded-xl bg-blue-500 text-white text-lg hover:bg-blue-400 duration-500 font-semibold'
            >Log In
          </button>
        </div>
      </form>
    </div>
  )     
}