import React from "react";

export default function LoginForm(){
    return(
        <div className='bg-white px-10 py-10 rounded-3xl border-2 border-gray-100'>
            <h1 className='flex justify-center item-center text-3xl font-semibold'>Log In</h1>
            <div className='mt-4 flex justify-center item-center'>
                <div>
                    <p className='text-base font-medium'>Don't have an account yet? &nbsp;</p>
                </div>
                <button className='text-base font-medium text-blue-500'>Register</button>
            </div>
            <div className='mt-8'>
                <div>
                    <label className='text-base font-medium'>Email</label>
                    <input
                        className='w-full rounded-xl border-2 border-gray-100 p-2 mt-1 bg-transparent'
                        placeholder=''
                    />
                </div>
                <div className='mt-3'>
                    <label className='text-base font-medium'>Password</label>
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
                    <button className='text-base font-medium text-blue-500'>Forget password</button>
                </div>
            </div>
            <div className='mt-8 flex flex-col'>
                <button className='active:scale-[0.98] py-1.5 bg-blue-500 text-white rounded md:ml-8 hover:bg-blue-400 duration-500'>Log In</button>
            </div>
        </div>
    )     
}