import React from 'react'

const ProgressBar = ({progress,text}) => {
  return (
    <>
     {/* Progress Bar */}
     <div className='flex flex-col space-y-2 mt-5 lg:px-0 px-5'>
     {/* Bar Wrapper */}
     <div className='bg-gray-100 lg:h-4 h-2 rounded-full'>
      <div style={{'width': `${progress}%`}} className='bg-t2 text-t2 lg:h-4 h-2 rounded-full'></div>
     </div>
     <div className='flex lg:space-x-80 space-x-44'><h3 className='font-bold'>{text}</h3><h3 className='text-xs'>{progress}%</h3></div>
    </div>
    </>
  )
}

export default ProgressBar