import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import Select from 'react-select'
import makeAnimated from 'react-select/animated';

import { SearchIcon, AddBtnIcon } from "../img"
import { axiosInstance, URI } from "../components/component-config";
import Activity from '../components/activity';

export default function Activities() {
  const [data, setData] = useState('')
  const [category, setCategory] = useState([])
  const [choice, setChoice] = useState('')
  const animatedComponents = makeAnimated();
  const URL = URI + "/activity"
  var options = []

  useEffect(() => {  
    (async () => {
    try {
      const res = await axiosInstance.get(URL)
      setCategory([...new Set(res.data.data.activity.map(act => act.actCategory))])
    } catch(err) {
    }
    })()
  }, [])

  for (const element of category) {
    options = [...options, { value:element.toString(), label:element }]
  }

  const handleChange = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setData(lowerCase)
  }

  const handleChoice = (e) => {
    var choi = ""
    for (const element of e) {
      choi = choi.concat(element.value.toString() + ',')
    }
    setChoice(choi)
  }

  console.log(choice)

  return (
    <div className='w-full flex-col items-top justify-center lg:w-full'>
      <div className='items-center overflow-hidden flex justify-between bg-white w-full p-4 border-2 border-gray-100 mx-auto'>
        <h1 className='justify-center py-4 px-5 items-center text-3xl font-bold'>Activity List</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 items-center'>
          
          <div className='md:order-first order-last mr-5 items-center'>
          <Select
            menuPortalTarget={document.body} 
            styles={{ menuPortal: base => ({ ...base, zIndex: 10 }) }}

            isMulti
            closeMenuOnSelect={false}
            components={animatedComponents}
            options={options}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={(e) => handleChoice(e)}
          />
          </div>
          
          <div className="flex items-center">
          <div className="flex items-center bg-blue-500 leading-6 h-10 rounded-full ring-1 ring-slate-200 shadow-sm active:scale-[0.98]">
            <div className="ml-3 w-5 h-5">
              <SearchIcon/>
            </div>
            <input 
              className="mx-2 appearance-none text-sm text-white outline-none bg-transparent placeholder-white focus:placeholder-blue-500"    
              type="text" 
              aria-label="Search projects" 
              placeholder="Search..."
              onChange={handleChange}
              >  
            </input>
          </div>

          <Link  
            className="flex items-center py-2 px-4 rounded active:scale-[0.98]"
            to='/form'
            >
            <AddBtnIcon/>
          </Link>
          </div>

        </div>
      </div>

      <div className="overflow-auto">
        <Activity 
          searchData={data}
          category={choice}
        />
      </div>  

    </div>
  )
}