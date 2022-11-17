//import ActivityList from '../components/activity-list'
import Activity from '../components/activity'
import { SearchIcon, AddBtnIcon } from "../img"
import { useState } from 'react';

export default function Activities() {
  const [data, setData] = useState('');

  const handleChange = (e) => {
    //convert input text to lower cas
    var lowerCase = e.target.value.toLowerCase();
    setData(lowerCase)
  }

  return (
    <div className='flex w-full'>
      <div className='w-full flex-col item-center items-top justify-center lg:w-full'>
        <div className="flex-auto justify-between mx-auto">
          <div className='flex justify-between bg-white w-full p-4 border-2 border-gray-100'>
            <h1 className='justify-center py-4 px-5 item-center text-3xl font-bold'>Activity List</h1>
            <div className="flex items-center">
              <div className="flex items-center focus:ring-2 focus:ring-blue-500 focus:outline-none bg-blue-500 leading-6 h-10 rounded-full ring-1 ring-slate-200 shadow-sm">
                <div className="ml-3 w-5 h-5">
                  <SearchIcon/>
                </div>
                <input 
                  className="mx-2 appearance-none text-sm outline-none bg-transparent text-white placeholder-white focus:ring-blue-500 "    
                  type="text" 
                  aria-label="Search projects" 
                  placeholder="Search..."
                  onChange={handleChange}
                >  
                </input>
              </div>
              <button className="flex items-center py-2 px-4 rounded ">
                <AddBtnIcon/>
              </button>
            </div>
          </div>
        </div>
        <Activity searchData={data}/>
      </div>
    </div>
  )
}