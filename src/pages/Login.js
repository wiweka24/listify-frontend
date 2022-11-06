import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Login() {
  const[activity, setActivity] = useState([])
  const URL = "http://localhost:5000/activity"

  useEffect(() => {    
    axios
      .get(URL)
      .then(res => {
        setActivity(res.data)
        console.log(res)
      })
      .catch(err => {
      })
    }, [])

  return (
    <div className='flex w-full h-screen'>
      <div className='hidden lg:flex h-full w-1/2 items-center justify-center bg-gray-200'>
        to be hide
      </div>
      <div className='w-full flex item-center items-center justify-center lg:w-1/2'>
        form
      </div>
    </div>
    
  )
}
