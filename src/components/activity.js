import { Fragment, useState, useEffect} from 'react'
import axios from 'axios'
import Modal from "../components/modal"

export default function Activity({searchData}) {
  const [activity, setActivity] = useState([])
  const [showModal, setShowModal] = useState(false)
  const URL = "http://localhost:5000/activity"
  const axiosInstance = axios.create({
    withCredentials: true
  })

  useEffect(() => {  
    (async () => {
    try {
      const res = await axiosInstance.get(URL + '?search='
        + searchData)
      setActivity(res.data.data.activity)
    } catch(err) {
      console.log(err)
    }
    })()
  }, [searchData])

  return (
    <ul>
    {
      activity.map((act)=>(
        <li key={act._id}>
          <Fragment>

            <button 
              className="w-full hover:bg-blue-500 group hover:ring-blue-500 hover:shadow-md md:p-0 bg-white ring-1 ring-slate-200 shadow-sm" 
              onClick={() => setShowModal(true) }>
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

            <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
              <div className="py-6 px-3 text-star mx-auto">
                <div className="flex justify-between font-bold text-2xl w-[98%] py-10 px-6 rounded-full bg-red-500">Title of Activity
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                    </svg>
                  </button>
                </div>
                <p className='text-lg text-black text-left'>
                  Deskripsi mengenai aktivitas akan berada di sini nantinya.
                </p>
              </div>

              <div className="flex bg-white w-full py-4 border-none"> 
                <div className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="indigo" className="w-20 h-20">
                  <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                  <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="flex text-left px-6 text-xl font-medium">Execution Date</p>
                  <p className="px-6 text-sm font-normal">Tanggal mengenai waktu pelaksanaan aktivitas akan berada di sini.</p>
                </div>
              </div>

              <div className="flex bg-white w-full py-4 border-none"> 
                <div className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="teal" className="w-20 h-20">
                  <path fillRule="evenodd" d="M5.25 2.25a3 3 0 00-3 3v4.318a3 3 0 00.879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 005.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 00-2.122-.879H5.25zM6.375 7.5a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="flex text-left px-6 text-xl font-medium">Label</p>
                  <p className="px-6 text-sm font-normal">Label mengenai aktivitas akan berada di sini.</p>
                </div>
              </div>

              <div className="flex bg-white w-full py-4 border-none"> 
                <div>
                  <p className="flex px-6 text-xl font-medium">Activity's Status</p>
                  <div className="flex px-5">
                    <button>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="w-20 h-20">
                      <path fillRule="evenodd" d="M10.5 3A1.501 1.501 0 009 4.5h6A1.5 1.5 0 0013.5 3h-3zm-2.693.178A3 3 0 0110.5 1.5h3a3 3 0 012.694 1.678c.497.042.992.092 1.486.15 1.497.173 2.57 1.46 2.57 2.929V19.5a3 3 0 01-3 3H6.75a3 3 0 01-3-3V6.257c0-1.47 1.073-2.756 2.57-2.93.493-.057.989-.107 1.487-.15z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <button>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" className="w-20 h-20">
                      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </Modal>

        </Fragment>
        </li>
      ))
    }
    </ul>  
  )
}
