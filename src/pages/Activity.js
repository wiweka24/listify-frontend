import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ActivityList from '../components/activity-list'
import Activity from '../components/activity'

export default function Activities() {
  return (
    <div className='flex w-full h-screen'>
      <div className='w-full flex-col item-center fixed items-top justify-center lg:w-full'>
        <ActivityList/>
        <Activity/>
      </div>
    </div>
  )
}