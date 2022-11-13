import {useState, useEffect} from 'react'
import axios from 'axios'

export default function Activity() {
    const[activity, setActivity] = useState([])
    const URL = "http://localhost:5000/activity"
    const axiosInstance = axios.create({
      withCredentials: true
    })

    // useEffect(() => {    
    //   axiosInstance
    //     .get(URL)
    //     .then(res => {
    //       setActivity(res.data)
    //       console.log(activity)
    //     })
    //     .catch(err => {
    //       console.log(err)
    //     })
    // }, [])

    useEffect(() => {  
      (async () => {
        try {
          const res = await axiosInstance.get(URL)
          setActivity(res.data)
        } catch(err) {
          console.log(err)
        }
      })()
    }, [])
    console.log(activity)

  return (
    <div>Activity</div>
  )
}
