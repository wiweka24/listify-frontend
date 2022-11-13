import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Nav() {
  let linkto = '/'
  let username = 'LOGIN'
  const [status, setStatus] = useState()
  const navigate = useNavigate()
  const URL = "http://localhost:5000/user/"
  const axiosInstance = axios.create({
    withCredentials: true
  })
  
  useEffect(() => {  
    (async () => {
      try {
        const res = await axiosInstance.get(URL+'profile')
        setStatus(res.data)
      } catch(err) {
        console.log(err)
      }
    })()
  }, [axiosInstance])

  if (status !== undefined && status !== null){
    username = status.username
    linkto = '/profile'
  }

  const handleClick = () => {
    navigate(linkto)
  }

  const Links = [
    {name:"HOME",link:"/"},
    {name:"CALENDAR",link:"/"},
    {name:"ABOUT",link:"/"},
  ]
  const [open,setOpen] = useState(false)

  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
          <span className='text-3xl text-indigo-600 mr-1 pt-2'>
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
          Designer
        </div>
        
        <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
          <ion-icon name={open ? 'close':'menu'}></ion-icon>
        </div>
    
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
          {
            Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
            </li>
            ))
          }
          <button 
            className='bg-indigo-600 text-white py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500'
            onClick={handleClick}
            >{username}
          </button>
        </ul>
      </div>
    </div>
  )
}
