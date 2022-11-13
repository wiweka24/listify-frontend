import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ActivityList from '../components/activity-list'

export default function Activity() {
  return (
    <div className='flex w-full h-screen'>
      <div className='w-full flex item-center fixed items-top justify-center lg:w-full'>
        <ActivityList/>
      </div>
    </div>
  )
}