import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function ActivityForm(){
//   const axiosInstance = axios.create({
//     withCredentials: true
//   })
//   const URL = "http://localhost:5000/activity"
  
//   const navigate = useNavigate();
//   const [values, setValues] = useState({
//     ActivityName: "",
//     Description: "",
//     Category: "",
//     Label:"",
//     ExecutionDate:"",
//     Status:"",
//   });

//   const handleChange = (e) => {
//     setValues({ ...values, [e.target.id]: e.target.value });
//   };
  
//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     console.log(values.email)
//     console.log(values.password)
//     try{
//       const res = await axiosInstance.post(URL,  
//         {
//           username: values.username,
//           email: values.email,
//           password: values.password
//         })
//       console.log(res.data)

//       navigate("/")
  
//     } catch (err) {
//       console.error(err.response.data);
//       alert(err.response.data.error.toString())
//     }
//   };

  return(
    <div className='flex w-full h-screen justify-center'>
      <div className='w-full md:w-5/6 lg:w-1/2 px-10 py-10'>
        <h1 className='absolute font-extrabold text-black inline m-0 left-[325px] top-[100px] text-[40px] leading-[normal] flex text-5xl font-bold justify-center'>Add Activity</h1>
        <div className = "md:flex mt-2">
            <div className="absolute md:w-[25%] md:mr-[2%] text-3xl font-semibold text-black inline m-0 left-[459px] top-[259px] leading-[normal]">
            Activity's Name
            <input
                className='font-normal py-1 px-1 w-full border-2 rounded-lg border-gray-500'
                // id={values.ActivityName}
                // onChange={handleChange("ActivityName")}
                placeholder="Input Activity"
            />
        </div>
        <div
            className="absolute md:w-[25%] md:mr-[2%] text-3xl font-semibold text-black inline m-0 left-[459px] top-[401px] leading-[normal]">
                Description
            <input
                className="font-normal py-1 px-1 w-full border-2 rounded-lg border-gray-500"
                // id={values.Description}
                // onChange={handleChange('Description')}
                placeholder="Input Description"
            />
        </div>
        <div
            className="absolute md:w-[25%] md:mr-[2%] text-3xl font-semibold text-black inline m-0 left-[459px] top-[544px] leading-[normal]">
                Category
            <input
                className="font-normal py-1 px-1 w-full border-2 rounded-lg border-gray-500"
                // id={values.category}
                // onChange={handleChange('category')}
                placeholder="Input Category"
            />
        </div>
        </div>
        <div className = "md:flex mt-2">
            <div className="absolute md:w-[25%] md:mr-[2%] text-3xl font-semibold text-black inline m-0 left-[1221px] top-[259px] leading-[normal]">
                Execution Date
            <input
                className="font-normal py-1 px-1 w-full border-2 rounded-lg border-gray-500"
                // id={values.date}
                // onChange={handleChange('date')}
                placeholder="Input Execution date"
                type="date"
            />
        </div>
        <div
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
        <div class="flex absolute items-center pl-3 left-[600px] top-[519px] leading-[normal]">
            <input id="vue-checkbox-list" type="checkbox" value="" class="w-16 h-16 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label for="vue-checkbox-list" class="py-3 ml-2 w-full text-2xl font-medium text-gray-900 dark:text-gray-300">Will be done</label>
        </div>
    </li>
    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex absolute items-center pl-3 left-[800px] top-[519px] leading-[normal]">
            <input id="react-checkbox-list" type="checkbox" value="" class="w-16 h-16 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label for="react-checkbox-list" class="py-3 ml-2 w-full text-2xl font-medium text-gray-900 dark:text-gray-300">Ongoing</label>
        </div>
    </li>
    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex absolute items-center pl-3 left-[960px] top-[519px] leading-[normal]">
            <input id="angular-checkbox-list" type="checkbox" value="" class="w-16 h-16 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label for="angular-checkbox-list" class="text-2xl py-3 ml-2 w-full font-medium text-gray-900 dark:text-gray-300">Done</label>
        </div>
    </li>
</ul>
</div>
        <button
            // onClick={this.continue}
            className="w-3/5 md:w-2/5 bg-green-500 text-white py-2 px-6 rounded hover:bg-indigo-400 duration-500 absolute items-center inline m-0 left-[645px] top-[791px] text-[33px] leading-[normal] outline">
            Add
        </button>
        </div>
        <button 
            className='w-3/5 md:w-2/5 bg-red-500 text-white py-2 px-6 rounded hover:bg-indigo-400 duration-500 absolute items-center left-[645px] top-[873px] text-[33px] leading-[normal] outline">'
            //onClick={handleClick}
            >Cancel
          </button>
    </div>
    )
}