import { EditIcon, ExecutionIcon, CategoryIcon, DeleteIcon } from '../img'

export default function Confirm({isVisible, onClose, actToShow, text, loc}) {
  let params = text.params
  let param = loc.param
  if( !isVisible ) return null;

  const handleClose = (e) => {
    if( e.target.id === 'wrapper') onClose();
  }

  return (
    <div 
      className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'
      id='wrapper' 
      onClick={handleClose}>
      <div className='w-3/5 h-full flex flex-col'>

        <button className="text-white text-xl place-self-end" onClick={() => onClose()}>X</button>
        <div className='overflow-auto bg-white p-6 rounded-3xl'>
            <div className="py-6 px-3 text-star mx-auto items-center justify-center">
                <h1 className='text-2xl font-bold mb-5 text-black text-center' >Confirm {text}</h1>
                <p className='text-lg text-black text-center'>Are you sure want to {text}?</p>
            </div>
            <div className="flex text-center pb-6 px-7 justify-center"> 
                <button text="py-6" className="py-1.5 px-10 mx-3 rounded-full bg-red-500 text-base text-white hover:bg-red-300 duration-500"
                        onClick={loc}>Yes</button>
                <button text="py-6" className="py-1.5 px-10 mx-3 rounded-full bg-black text-base text-white hover:bg-gray-500 duration-500"
                        onClick={() => onClose()}>Cancel</button>
            </div>
        </div>
      </div>
    </div>
  )
}