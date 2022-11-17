import React from "react";

export default function Modal({isVisible, onClose, children}) {
    if( !isVisible ) return null;

    const handleClose = (e) => {
        if( e.target.id === 'wrapper') onClose();
    }

    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'
        id='wrapper' onClick={handleClose}>
            <div className='w-4/5 h-full flex flex-col'>
                <button className="text-white text-xl place-self-end" onClick={() => onClose()}>X</button>
                <div className='bg-white p-6 rounded-3xl'>
                    {children}
                </div>
            </div>
        </div> 
    )
}