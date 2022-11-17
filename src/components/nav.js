import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Logo from '../img/note.png'

export default function Nav() {
  const [username, setUsername] = useState()
  const [linkto, setLinkto] = useState()
  const navigate = useNavigate()
  const URL = "http://localhost:5000/user/"
  const axiosInstance = axios.create({
    withCredentials: true
  })
  
  useEffect(() => {  
    (async () => {
      try {
        const res = await axiosInstance.get(URL+'profile')
        setUsername(res.data.username)
        setLinkto('/profile')
      } catch(err) {
        setUsername('LOGIN')
        setLinkto('/')
      }
    })()
  }, [axiosInstance, URL])

  const handleClick = () => {
    navigate(linkto)
  }

  const Links = [
    {name:"Home", link:"/"},
    {name:"Activities", link:"/activities"},
    {name:"Calendar", link:"/*"},
  ]
  const [open,setOpen] = useState(false)

  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
          <span className='text-3xl text-indigo-600 mr-1'>
            <img className="w-8 " src={Logo} alt="Logo"/>
          </span>
          Listify
        </div>
        
        <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
          <ion-icon name={open ? 'close':'menu'}></ion-icon>
        </div>
    
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
          {
            Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <Link to={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</Link>
            </li>
            ))
          }
          <button 
            className='active:scale-[0.98] bg-blue-500 text-white py-2 px-6 rounded md:ml-8 hover:bg-blue-400 duration-500'
            onClick={handleClick}
            >{username}
          </button>
        </ul>
      </div>
    </div>
  )
}
