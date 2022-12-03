import { Fragment, useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { EditIcon, ExecutionIcon, CategoryIcon, DeleteIcon } from '../img'
import FormEdit from '../pages/EditAct';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { URI, axiosInstance } from './component-config';
import Confirm from './confirmation';

export default function Modal({isVisible, onClose, actToShow}) {
  const [showConfirm, setShowConfirm] = useState(false)
  const navigate = useNavigate();
  const URL = URI + "/activity/"  + actToShow.act._id

  if( !isVisible ) return null;

//   const navigate = useNavigate();
const Delete = async (e) => {
  e.preventDefault()
  try{
    const res = await axiosInstance.Delete(URL)
    console.log(res.data)
    navigate("/activities")

  } catch (err) {
    console.error(err.response.data);
    toast.error(err.response.data.error, toastifyConfig)
  }
};

  const handleClose = (e) => {
    if( e.target.id === 'wrapper') onClose();
  }

  const handleDelete = async (e) => {
    e.preventDefault()
    try{
      const res = await axiosInstance.delete(URL)
      console.log(res.data)
      onClose()
  
    } catch (err) {
      console.error(err.response.data);
      alert(err.response.data.error.toString())
    }
  };

  return (
    <Fragment>
    <div 
      className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'
      id='wrapper' 
      onClick={handleClose}>
      <div className='w-3/5 h-full flex flex-col'>

        <button className="text-white text-xl place-self-end" onClick={() => onClose()}>X</button>
        <div className='overflow-auto bg-white p-6 rounded-3xl'>

          <div className="py-6 px-3 text-star mx-auto items-center justify-center">
            <div className="flex justify-between font-bold text-2xl text-white w-[98%] py-8 px-6 rounded-xl bg-blue-500">
              <div>
                {actToShow.act.actName}
              </div>
              <div className='relative flex'>
                {/* <button onClick={handleClick}>
                    <div className="ml-2 w-8 h-8 active:scale-[0.98]">
                        <EditIcon/>
                    </div>
                </button> */}
                <Link to='/form-edit' state={{ actToShow }}>
                    <div className="ml-2 w-8 h-8 active:scale-[0.98]">
                        <EditIcon/>
                    </div>
                </Link>
                <button>
                  <div className="ml-2 w-8 h-8 active:scale-[0.98]"
                       onClick={() => setShowConfirm(true) }>
                    <DeleteIcon/>
                  </div>
                </button> 
              </div>
            </div>
              <p className='text-lg text-black text-left mt-3'>
                {actToShow.act.actDescription}
              </p>
            </div>

            <div className="flex bg-white w-full pb-4 pt-2 border-none"> 
              <div className="flex">
                <div className="text-blue-500 ml-2 w-12 h-12">
                  <ExecutionIcon/>
                </div>
              </div>
              <div>
                <p className="flex text-left px-6 text-xl font-medium">Execution Date</p>
                <p className="px-6 text-sm font-normal">
                  {actToShow.act.actDate}
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
                  {actToShow.act.actCategory}
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

        </div>
      </div>
    </div>

    <Confirm 
      isVisible={showConfirm} 
      onClose={() => setShowConfirm(false)}
      actToShow={actToShow}
      text = "Delete Activity"
      loc = {handleDelete}>      
    </Confirm>

    </Fragment>
  )
}