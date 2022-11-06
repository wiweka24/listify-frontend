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
    <div>Login</div>
  )
}
