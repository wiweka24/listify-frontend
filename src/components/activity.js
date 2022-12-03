import { Fragment, useState, useEffect} from 'react'
import { axiosInstance, URI, notLogin, dict} from "./component-config";
import Modal from "../components/modal"

export default function Activity({searchData}) {
  const [activity, setActivity] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [actToShow, setActToShow] = useState({act:{
    _id: "",
    actStatus: ""
  }})
  const URL = URI + "/activity"

  useEffect(() => {  
    (async () => {
    try {
      const res = await axiosInstance.get(URL + '?search='
        + searchData)
      setActivity(res.data.data.activity)
    } catch(err) {
      notLogin()
    }
    })()
  }, [searchData, showModal])

  const handleClick = (act) => {
    setActToShow(act)
    setShowModal(true)
  }

  return (
    <ul>
    {
      activity.map((act)=>(
        <li key={act._id}>
          <Fragment>

            <button 
              className="w-full hover:bg-blue-500 group hover:ring-blue-500 hover:shadow-md md:p-0 bg-white ring-1 ring-slate-200 shadow-sm"
              id={act.actName.toString()} 
              onClick={() => handleClick({act})}>
              <article className="w-auto flex space-x-6 my-7 mx-8">
                <div className={"w-[0.5%] py-10 px-1 rounded-full " + dict[act.actStatus]}></div>
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
            
            <Modal 
              isVisible={showModal} 
              onClose={() => setShowModal(false)}
              actToShow={actToShow}>
            </Modal>
          </Fragment>
        </li>
      ))
    }
    </ul>  
  )
}