//import ActivityList from '../components/activity-list'
import Activity from '../components/activity'
import { SearchIcon, AddBtnIcon } from "../img"
import { useState } from 'react';

export default function Activities() {
  const [data, setData] = useState('test');

  const handleChange = (e) => {
    // setData({ e.value });
  };

  return (
    <div className='w-full flex-col items-top justify-center lg:w-full'>
    
      <div className='overflow-hidden flex justify-between bg-white w-full p-4 border-2 border-gray-100 mx-auto'>
            
        <h1 className='justify-center py-4 px-5 items-center text-3xl font-bold'>Activity List</h1>
            
        <div className="flex items-center">
          <div className="flex items-center bg-blue-500 leading-6 h-10 rounded-full ring-1 ring-slate-200 shadow-sm">
            <div className="ml-3 w-5 h-5">
              <SearchIcon/>
            </div>
            <input 
              className="mx-2 appearance-none text-sm outline-none bg-transparent placeholder-white focus:placeholder-blue-500"    
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

      <div className="overflow-auto">
        <Activity searchData={data}/>
      </div>  

    </div>
  )
}