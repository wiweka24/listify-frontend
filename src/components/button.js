import React from 'react'

export default function Button(props) {
    return (
        <button className='active:scale-[0.98] bg-blue-500 text-white py-2 px-6 rounded md:ml-8 hover:bg-blue-400 duration-500'>
            {props.children}
        </button>
      ) 
}
