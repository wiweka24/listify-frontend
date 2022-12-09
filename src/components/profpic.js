import { ProfileIcon, SearchIcon, EditIcon, ExecutionIcon, CategoryIcon, DeleteIcon } from "../img";

export default function ProfilePicture({isVisible, onClose, profpic}) {
    if( !isVisible ) return null;
  
    const handleClose = (e) => {
      if( e.target.id === 'wrapper') onClose()
    }
  
    const handleClick = (pic) => {
      profpic(pic);
      onClose()
    }
  
    return (
      <div 
        className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'
        id='wrapper' 
        onClick={handleClose}>
        <div className='w-3/5 h-full flex flex-col'>
  
          <button className="text-white text-xl place-self-end" onClick={() => onClose()}>X</button>
          <div className='bg-white p-6 rounded-3xl'>
              <div className="py-6 px-3 text-star mx-auto items-center justify-center">
                  <h1 className='text-2xl font-bold mb-2 text-black text-center' >Choose your profile picture</h1>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pb-6 px-7 justify-center"> 
                <button onClick={handleClick}
                    className='bg-slate-500'>
                    <ProfileIcon/>
                </button>
                <button onClick={handleClick}
                    className='bg-slate-500'>
                    <SearchIcon/>  
                </button>
                <button onClick={handleClick}
                    className='bg-slate-500'>
                    <EditIcon/>  
                </button>
                <button onClick={handleClick}
                    className='bg-slate-500'>
                    <ExecutionIcon/>  
                </button>
                <button onClick={handleClick}
                    className='bg-slate-500'>
                    <CategoryIcon/>  
                </button>
                <button onClick={handleClick}
                    className='bg-slate-500'>
                    <DeleteIcon/>  
                </button>
              </div>
          </div>
        </div>
      </div>
    )
  }