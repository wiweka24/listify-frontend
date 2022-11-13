import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function LoginForm(){
  const axiosInstance = axios.create({
    withCredentials: true
  })
  const URL = "http://localhost:5000/user/login"
  
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  // "email": "wiweka24@mail.com",
  // "password": "Wiweka12345#"
  
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
          email: values.email,
          password: values.password
        })
      console.log(res.data)

      navigate("/1")
  
    } catch (err) {
      console.error(err);
    }
  };

  return(
    <div className='bg-white px-10 py-10 rounded-3xl border-2 border-gray-100'>
      <form onSubmit={handleSubmit}>
        <h1 className='flex justify-center item-center text-3xl font-semibold'>Log In</h1>
        <div className='mt-4 flex justify-center item-center'>
            <div>
                <p className='text-base font-medium'>Don't have an account yet? &nbsp;</p>
            </div>
            <a href= "/#/Reg" className='text-base font-medium text-blue-500'>Register</a>
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
          <div className='mt-5 flex justify-between item-center'>
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
          <button type="submit" className='active:scale-[0.98] py-1.5 bg-blue-500 text-white rounded hover:bg-blue-400 duration-500' >Log In</button>
        </div>
      </form>
    </div>
  )     
}