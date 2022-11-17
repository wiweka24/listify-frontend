import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import ActivityList from '../components/activity-list'
import Activity from '../components/activity'
import Modal from '../components/modal'

export default function Activities() {
  return (
    <div className='flex w-full h-screen'>
      <div className='w-full flex-col items-center justify-center lg:w-auto'>
        <ActivityList/>
        <Activity/>
      </div>
    </div>
  )
}