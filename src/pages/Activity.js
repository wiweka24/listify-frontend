import ActivityList from '../components/activity-list'
import Activity from '../components/activity'

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