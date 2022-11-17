import { Fragment, useState, useEffect} from 'react'
import axios from 'axios'
import Modal from "../components/modal"
import { EditIcon, ExecutionIcon, CategoryIcon, DeleteIcon } from '../img'

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
                      {act.actDescription}
                    </p>
                  </div>
                </div>
              </article>  
            </button>
            
            <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
              <div className="py-6 px-3 text-star mx-auto items-center justify-center">
                <div className="flex justify-between font-bold text-2xl text-white w-[98%] py-8 px-6 rounded-xl bg-blue-500">
                    <div>
                        {act.actName}
                    </div>
                    <div className='relative'>
                        <button>
                            <div className="ml-2 w-8 h-8">
                                <EditIcon/>
                            </div>
                        </button>
                        <button>
                            <div className="ml-2 w-8 h-8">
                                <DeleteIcon/>
                            </div>
                        </button> 
                    </div>
                </div>
                <p className='text-lg text-black text-left'>
                    {act.actDescription}
                </p>
              </div>

              <div className="flex bg-white w-full py-4 border-none"> 
                <div className="flex">
                    <div className="text-blue-500 ml-2 w-12 h-12">
                        <ExecutionIcon/>
                    </div>
                </div>
                <div>
                  <p className="flex text-left px-6 text-xl font-medium">Execution Date</p>
                  <p className="px-6 text-sm font-normal">
                    {act.actDate}
                  </p>
                </div>
              </div>

              <div className="flex bg-white w-full py-4 border-none"> 
                <div className="flex">
                    <div className="text-blue-500 ml-2 w-12 h-12">
                        <CategoryIcon/>
                    </div>
                </div>
                <div>
                  <p className="flex text-left px-6 text-xl font-medium">Category</p>
                  <p className="px-6 text-sm font-normal">
                    {act.actCategory}
                  </p>
                </div>
              </div>

              <div className="flex bg-white w-full py-4 border-none"> 
                <div>
                  <p className="flex px-6 text-xl font-medium">Activity's Status</p>
                  <div className="mt-2 flex px-5">
                    <button className='mr-2 active:scale-[0.98] py-1.5 px-3 rounded-lg bg-red-500 text-base text-black hover:bg-red-400 duration-500 font-semibold'>
                      To Do
                    </button>
                    <button className='mr-2 active:scale-[0.98] py-1.5 px-3 rounded-lg bg-yellow-500 text-base text-black hover:bg-yellow-400 duration-500 font-semibold'>
                      On Going
                    </button>
                    <button className='mr-2 active:scale-[0.98] py-1.5 px-3 rounded-lg bg-green-500 text-base text-black hover:bg-green-400 duration-500 font-semibold'>
                      Done
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