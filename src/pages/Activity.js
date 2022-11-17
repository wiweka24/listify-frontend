import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ActivityList from '../components/activity-list'
import Activity from '../components/activity'

export default function Activities() {
  return (
    <div className='flex w-full h-screen'>
      <div className='w-full flex-col item-center items-top justify-center lg:w-full'>
        
        <div className="flex-auto justify-between mx-auto">
          <div className='fixed flex justify-between bg-white w-full py-3 border-2 border-gray-100'>
            <h1 className='justify-center py-4 px-5 item-center text-3xl font-bold'>Activity List</h1>
                  
            <div className="flex relative items-center">
              <input className="text-white flex focus:ring-2 focus:ring-blue-500 focus:outline-none rounded-full bg-blue-500 appearance-none w-3/4 text-sm leading-6 h-10 placeholder-white pl-10 rounded-full ring-1 ring-slate-200 shadow-sm" type="text" aria-label="Search projects" placeholder="Search..."></input>
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <span className='text-xl text-white mr-1 pt-2'>
                  <ion-icon name="search-outline" ></ion-icon>
                </span>
              </div>
                <button className="flex items-center py-2 px-4 rounded items-center">
                  <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gray" strokeWidth={0.8} stroke="white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </button>
            </div>
          </div>
        </div>
        
      </div>
      <div className='w-full flex-col justify-center lg:w-full'>
        <Activity/>
        <Activity/>
        <Activity/>
        <Activity/>
      </div>
      
    </div>
  )
}