import { Avatar1, Avatar2, Avatar3, Avatar4, Avatar5, Avatar6 } from "../img";

export default function ProfilePicture({isVisible, onClose, modalpic}) {
    if( !isVisible ) return null;
  
    const handleClose = (e) => {
      if( e.target.id === 'wrapper') onClose()
    }
  
    const handleClick = (pic) => {
      modalpic(pic);
      onClose()
    }
  
    return (
      <div 
        className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-30'
        id='wrapper' 
        onClick={handleClose}>
        <div className='w-2/5 h-full flex flex-col'>
  
          <button className="text-white text-xl place-self-end" onClick={() => onClose()}>X</button>
          <div className='bg-white p-6 rounded-3xl'>
              <div className="py-6 px-3 text-star mx-auto items-center justify-center">
                  <h1 className='text-2xl font-bold mb-2 text-black text-center' >Choose your profile picture</h1>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pb-6 px-7 justify-center"> 
                <button onClick={() => handleClick(Avatar1)}
                    className='hover:scale-[98%]'>
                    <img src={Avatar1} alt='Avatar1'/>
                </button>
                <button onClick={() => handleClick(Avatar2)}
                    className='hover:scale-[98%]'>
                    <img src={Avatar2} alt='Avatar2'/>
                </button>
                <button onClick={() => handleClick(Avatar3)}
                    className='hover:scale-[98%]'>
                    <img src={Avatar3} alt='Avatar3'/>
                </button>
                <button onClick={() => handleClick(Avatar4)}
                    className='hover:scale-[98%]'>
                    <img src={Avatar4} alt='Avatar4'/> 
                </button>
                <button onClick={() => handleClick(Avatar5)}
                    className='hover:scale-[98%]'>
                    <img src={Avatar5} alt='Avatar5'/>
                </button>
                <button onClick={() => handleClick(Avatar6)}
                    className='hover:scale-[98%]'>
                    <img src={Avatar6} alt='Avatar6'/>
                </button>
              </div>
          </div>
        </div>
      </div>
    )
  }