import React from 'react'

const StatusCard = () => {
  return (
    <div className='flex flex-col items-center px-10 space-y-2 lg:border-r-2'>
     <div className='flex items-center justify-center w-[110px] h-[110px] bg-black'>
      <img src="https://www.dropbox.com/s/e7auyc92yilha9f/brainstorming.svg?raw=1" className='w-fit h-fit'/>
     </div>
      <h3 className='text-white font-bold text-3xl'>420</h3> 
      <h3 className='text-white'>CONSULTING SOLUTIONS</h3> 
     </div>  
  )
}

export default StatusCard