import {useState, useEffect} from 'react'
import axios from 'axios'

export default function Activity_Test({searchData}) {
  const[activity, setActivity] = useState([])
  const URL = "http://localhost:5000/activity"
  const axiosInstance = axios.create({
    withCredentials: true
  })

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

  console.log(searchData)

  return (
    <ul>
    {
      activity.map((act)=>(
        <li key={act._id}>
          <button className="w-full hover:bg-blue-500 group hover:ring-blue-500 hover:shadow-md md:p-0 bg-white ring-1 ring-slate-200 shadow-sm">
            <article className="w-auto flex space-x-6 my-7 mx-8">
              {/* di sini akan ada status */}
              <div className="w-[0.5%] py-10 px-1 rounded-full bg-red-500"></div>
              <div className="w-[99.5%]">
                <div className='flex items-center'>
                  <h1 class="mr-3 group-hover:text-white font-semibold text-lg text-slate-900">
                    {act.actName}
                  </h1>
                  <label class="group-hover:text-blue-200 text-sm text-slate-500">
                    {act.actCategory}
                  </label>
                </div>    
                <div class="group-hover:text-blue-50 my-1 flex text-sm font-medium text-slate-700">
                  {act.actDate}
                </div>
                <div class="w-auto text-left group-hover:text-blue-50 my-1 text-sm text-slate-700">
                  <p className="truncate">
                    Di sini akan tertulis deskripsi dari activity yang ditampilkan. Deskripsi ini akan terpotong sesuai dengan ukuran tampilan page. Sebagai contoh, deskripsi ini akan ditulis dengan panjang sehingga terlihat perbedannya ketika ukuran page berubah. 
                  </p>
                </div>
              </div>
            </article>  
          </button>
        </li>
      ))
    }
    </ul>
  )
}
