import { useState, useEffect } from 'react';
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import { axiosInstance, URI } from "./component-config";

export default function Dropdown() {
  const [category, setCategory] = useState([])
  const [choice, setChoice] = useState([])
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

  console.log(choice)

  return(
    <Select
      menuPortalTarget={document.body} 
      styles={{ menuPortal: base => ({ ...base, zIndex: 10 }) }}

      isMulti
      closeMenuOnSelect={false}
      components={animatedComponents}
      options={options}
      className="basic-multi-select"
      classNamePrefix="select"
      onChange={(choice) => setChoice(choice)}
    />
  )
};
    
