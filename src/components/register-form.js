import React from "react";

export default function RegisterForm(){
    return(
        <div className='bg-white px-10 py-10 rounded-3xl border-2 border-gray-100'>
            <h1 className='flex justify-center item-center text-4xl font-semibold'>Register</h1>
            <div className='mt-3 flex justify-center item-center'>
                <div>
                    <p className='text-lg font-medium'>Sudah punya akun? &nbsp;</p>
                </div>
                <button className='text-lg font-medium text-blue-500'>Log In</button>
            </div>
            <div className='mt-8'>
                <div className='mt-3'>
                    <label className='text-lg font-medium'>First Name</label>
                    <input
                        className='w-full rounded-xl border-2 border-gray-100 p-2 mt-1 bg-transparent'
                        placeholder=''
                    />
                </div>
                <div className='mt-3'>
                    <label className='text-lg font-medium'>Last Name</label>
                    <input
                        className='w-full rounded-xl border-2 border-gray-100 p-2 mt-1 bg-transparent'
                        placeholder=''
                    />
                </div>
                <div className='mt-3'>
                    <label className='text-lg font-medium'>Email</label>
                    <input
                        className='w-full rounded-xl border-2 border-gray-100 p-2 mt-1 bg-transparent'
                        placeholder=''
                    />
                </div>
                <div className='mt-3'>
                    <label className='text-lg font-medium'>Password</label>
                    <input
                        className='w-full rounded-xl border-2 border-gray-100 p-2 mt-1 bg-transparent'
                        placeholder=''
                        type='password'
                    />
                </div>
                <div className='mt-5 flex justify-between item-center'>
                    <div>
                        <input 
                            type='checkbox'
                            id='remember'
                        />
                        <label className='ml-2 font-medium text-base' for='remember'>Remember me</label>
                    </div>
                </div>
            </div>
            <div className='mt-8 flex flex-col'>
                <button className='active:scale-[0.98] py-1.5 rounded-xl bg-blue-500 text-white text-lg font-semibold'>Register</button>
            </div>
        </div>
    )
}