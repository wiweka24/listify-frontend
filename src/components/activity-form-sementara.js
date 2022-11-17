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
    <div className='block w-full h-screen justify-center'>
      <div className='w-full px-10 py-10'>
        <h1 className='font-bold text-black m-0 text-5xl'>Add Activity</h1>
        <div className = "mt-2">
            <div className="text-3xl font-semibold text-black m-0">
                Activity's Name
                <input
                    className='font-normal py-1 px-1 w-full border-2 rounded-lg border-gray-500'
                    id="actName"
                    value={values.actName}
                    onChange={handleChange}
                    placeholder="Input Activity"
                />
            </div>
            <div className="text-3xl font-semibold text-black m-0">
                Category
                <input
                    className="font-normal py-1 px-1 w-full border-2 rounded-lg border-gray-500"
                    id='actCategory'
                    value={values.actCategory}
                    onChange={handleChange}
                    placeholder="Input Category"
                />        
            </div>
            <div className="text-3xl font-semibold text-black m-0 ">
                Execution Date
                <input
                    className="font-normal py-1 px-1 w-full border-2 rounded-lg border-gray-500"
                    id='actDate'
                    value={values.actDate}
                    onChange={handleChange}
                    placeholder="Input Execution date"
                    type="date"
                />
            </div>
            <div className="text-3xl font-semibold text-black m-0">
                Description
                <input
                    className="font-normal py-1 px-1 w-full border-2 rounded-lg border-gray-500"
                    id='actDescription'
                    value={values.actDescription}
                    onChange={handleChange}
                    placeholder="Input Description"
                />
            </div>
          </div>

        <button
            className="w-3/5 md:w-2/5 bg-green-500 text-white py-2 px-6 rounded hover:bg-indigo-400 duration-500"
            onClick={handleSubmit}
            > Add
        </button>
        <button 
            className='w-3/5 md:w-2/5 bg-red-500 text-white py-2 px-6 rounded hover:bg-indigo-400 duration-500'
            onClick={handleCancel}
            > Cancel
        </button>
      </div>
    </div>
    )
}