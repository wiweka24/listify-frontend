import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { axiosInstance ,URI, toastifyConfig } from "../components/component-config";
import { ToastContainer, toast } from 'react-toastify';

export default function Form(){
  const URL = URI + "/activity"
  const navigate = useNavigate();
  const [values, setValues] = useState({
    actName: "",
    actDate: null,
    actCategory: "",
    actDescription:"",
    actStatus: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.id]: e.target.value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      const res = await axiosInstance.post(URL,  
        {
          actName: values.actName,
          actDate: values.actDate,
          actCategory: values.actCategory,
          actDescription: values.actDescription,
        })
      console.log(res.data)
      navigate("/activities")
  
    } catch (err) {
      console.error(err.response.data);
      toast.error(err.response.data.error, toastifyConfig)
    }
  };

  const handleCancel = () => {
    navigate("/activities")
  }

  return(
    <form onSubmit={handleSubmit}>
      <ToastContainer/>
    <div className='flex w-full justify-center'>
      <div className='w-full md:w-5/6 lg:w-1/2 px-10 py-10'>
        <h1 className='flex text-3xl font-bold mb-10 justify-center'>
          Add Activity
        </h1>

        <div className='md:flex w-full'>
          <div className='w-full md:w-[46%] md:mr-[8%] py-2'>
            <h3 className='text-xl pb-1 font-medium'>Activity's Name</h3>
            <input 
              className='w-full py-1 px-2 border-2 rounded-lg border-gray-200'
              id="actName"
              value={values.actName}
              onChange={handleChange}
              placeholder="Input Activity"
              type='text'
              />
          </div>
          <div className="w-full md:w-[46%] py-2">
            <h3 className='text-xl pb-1 font-medium'>Execution Date</h3>
            <input
              className="w-full py-1 px-1 border-2 rounded-lg border-gray-200"
              id='actDate'
              value={values.actDate}
              onChange={handleChange}                
              placeholder="Input Execution date"
              type="date"
              />
          </div>
        </div>

        <div className='md:flex md:mt-7 items-start justify-center'>
          <div className='w-full md:w-[46%] md:mr-[8%] py-2'>
            <h3 className='text-xl font-medium pb-1'>Description</h3>
            <input 
              className='w-full py-1 px-2 placeholder:text-start h-40 border-2 rounded-lg border-gray-200'
              id='actDescription'
              value={values.actDescription}
              onChange={handleChange}
              placeholder="Input Description"
              type='text'
              />
          </div>
          <div className="w-full md:w-[46%] py-2">
            <h3 className='text-xl font-medium pb-2'>Category</h3>
            <input
              className="w-full py-1 px-1 border-2 rounded-lg border-gray-200"
              id='actCategory'
              value={values.actCategory}
              onChange={handleChange}
              placeholder="Input Category"
              type='text'
            />
          </div>
        </div>
      
        <div className='mt-10 flex justify-center'>
          <button
              className="w-3/5 md:w-2/5 bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-400 duration-500"
              type='submit'
              > Add
          </button>
        </div>
        <div className='mt-5 flex justify-center'>
          <button 
              className='w-3/5 md:w-2/5 bg-red-500 text-white py-2 px-6 rounded hover:bg-red-400 duration-500'
              onClick={handleCancel}
              > Cancel
          </button>
        </div>

      </div>
    </div>
    </form>
    )
}














{/* <div
            className="absolute md:w-[25%] md:mr-[2%] text-3xl font-semibold text-black inline m-0 left-[1222px] top-[404px] leading-[normal]">
                Label
            <input
                className="font-normal py-1 px-1 w-full border-2 rounded-lg border-gray-500"
                // id={values.label}
                // onChange={handleChange('label')}
                placeholder="Input Label"
            />
        </div>
        <h3 class="flex absolute mb-4 text-3xl font-semibold text-gray-900 dark:text-white left-[1222px] top-[544px] leading-[normal]">Status</h3>
<ul class="flex absolute items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
    <li class="flex absolute w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex absolute items-center pl-3 left-[1172px] top-[524px] leading-[normal]">
            <input id="vue-checkbox-list" type="checkbox" value="" class="w-16 h-16 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label for="vue-checkbox-list" class="py-3 ml-2 w-full text-2xl font-medium text-gray-900 dark:text-gray-300">Will be done</label>
        </div>
    </li>
    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex absolute items-center pl-3 left-[1382px] top-[524px] leading-[normal]">
            <input id="react-checkbox-list" type="checkbox" value="" class="w-16 h-16 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label for="react-checkbox-list" class="py-3 ml-2 w-full text-2xl font-medium text-gray-900 dark:text-gray-300">Ongoing</label>
        </div>
    </li>
    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex absolute items-center pl-3 left-[1547px] top-[524px] leading-[normal]">
            <input id="angular-checkbox-list" type="checkbox" value="" class="w-16 h-16 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label for="angular-checkbox-list" class="text-2xl py-3 ml-2 w-full font-medium text-gray-900 dark:text-gray-300">Done</label>
        </div>
    </li>
</ul>
</div> */}