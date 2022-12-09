import React from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

const options = []

export default function Dropdown() {
    return(
      <Select
        isMulti
        closeMenuOnSelect={false}
        components={animatedComponents}
        options={options}
        className="basic-multi-select"
        classNamePrefix="select"
      />
    )
};
    
