import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from "./axiosInstance";

export default function ActivityForm(){
  const URL = "http://localhost:5000/activity"
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
      alert(err.response.data.error.toString())
    }
  };

  const handleCancel = () => {
    navigate("/activities")
  }

  return(
    <div className='flex w-full justify-center'>
      <div className='w-full md:w-5/6 lg:w-1/2 px-10 py-10'>
        <h1 className='flex text-5xl font-extrabold justify-center'>Add Activity</h1>
        <div className='flex justify-center h-[18vw] lg:h-[10vw]'>
        </div>
        <div className='md:flex -mt-28 ml-18'>
            <div className='md:w-[100%] md:mr-[2%]'>
              <h3 className='text-3xl font-bold'>Activity's Name</h3>
              <input 
                className='py-1 px-2 w-full h-12 border-2 rounded-lg border-gray-500'
                id="actName"
                value={values.actName}
                onChange={handleChange}
                placeholder="Input Activity"
              />
            </div>
            <div className="md:w-[100%] md:mr-[2%] ml-32 font-bold text-3xl">
                Execution Date
              <input
                className="font-normal py-1 px-1 h-12 w-full border-2 rounded-lg border-gray-500"
                id='actDate'
                value={values.actDate}
                onChange={handleChange}                
                placeholder="Input Execution date"
                type="date"
              />
            </div>
            </div>
            <div className='md:flex mt-20 ml-18'>
              <div className='md:w-[100%] md:mr-[2%] ml-18'>
                <h3 className='text-3xl font-bold'>Description</h3>
                <input 
                  className='py-1 px-2 w-full h-40 border-2 rounded-lg border-gray-500'
                  id='actDescription'
                  value={values.actDescription}
                  onChange={handleChange}
                  placeholder="Input Description"
                />
              </div>
        <div
            className="md:w-[100%] md:mr-[2%] ml-32 font-bold text-3xl">
                Category
            <input
                className="font-normal py-1 px-1 w-full border-2 rounded-lg border-gray-500"
                id='actCategory'
                value={values.actCategory}
                onChange={handleChange}
                placeholder="Input Category"
            />
        </div>
        </div>
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
<div className='mt-28 flex justify-center'>
          <button className='text-2xl font-bold w-4/5 md:w-3/5 bg-green-500 text-white py-2 px-6 rounded-xl hover:bg-indigo-400 duration-500'>Add</button>
        </div>
        <div className='mt-5 flex justify-center'>
          <button 
            className='text-2xl font-bold w-4/5 md:w-3/5 bg-red-500 text-white py-2 px-6 rounded-xl hover:bg-indigo-400 duration-500'
            //onClick={handleClick}
            >Cancel
          </button>
        </div>
    </div>
    </div>
    )
}