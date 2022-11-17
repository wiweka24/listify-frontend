import { SearchIcon, AddBtnIcon } from "../img"

export default function ActivityList(){
  return(
    <div className="flex-auto justify-between mx-auto">
      <div className='flex justify-between bg-white w-full p-4 border-2 border-gray-100'>
        <h1 className='justify-center py-4 px-5 item-center text-3xl font-bold'>Activity List</h1>
        <div className="flex relative items-center">
          <div className="flex items-center focus:ring-2 focus:ring-blue-500 focus:outline-none bg-blue-500 leading-6 h-10 rounded-full ring-1 ring-slate-200 shadow-sm">
            <div className="ml-3 w-5 h-5">
              <SearchIcon/>
            </div>
            <input 
              className="mx-2 appearance-none text-sm outline-none bg-transparent text-white placeholder-white"    
              type="text" 
              aria-label="Search projects" 
              placeholder="Search...">  
            </input>
          </div>
          <button className="flex items-center py-2 px-4 rounded ">
            <AddBtnIcon/>
          </button>
        </div>
      </div>
    </div>
  )
}