import React from 'react'

export default function NotFound() {
  return (
    <div className="flex justify-center items-center w-full h-screen -mt-[80px]">
        <div>
            <h1 className="flex items-center justify-center text-9xl font-semibold p-3">404</h1>
            <p className="m-3 p-2 bg-gradient-to-r from-blue-600 to-blue-300 flex items-center justify-center text-lg font-medium">Sorry, page not found.</p>
        </div>
    </div>
  )
}