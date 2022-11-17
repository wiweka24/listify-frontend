import React from "react";

export default function ActivityList(){
    return(
        <div className="flex-auto justify-between mx-auto">
            <div className='flex justify-between bg-white w-full py-3 border-2 border-gray-100'>
                <h1 className='justify-center py-4 px-5 item-center text-3xl font-bold'>Activity List</h1>
                
                <div className="flex relative items-center gap 2">                    
                    <input className="flex focus:ring-2 focus:bg-blue-700 focus:text-white focus:outline-none rounded-full bg-blue-500 appearance-none w-auto text-sm leading-6 h-10 placeholder-white pl-5 rounded-full ring-1 ring-slate-200 shadow-sm" type="text" aria-label="Search projects" placeholder="Search..."></input>
                    <div className="flex absolute inset-y-0 right-0 pr-24 items-center pl-3">
                        <svg className="w-5 h-30" fill="none" stroke="white" viewBox="0 0 20 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2/3" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>                    
                    <button className="flex items-center py-2 px-4 rounded items-center">
                        <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gray" strokeWidth={0.8} stroke="white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    </button>
                </div>
            </div>
        </div>
    )
}