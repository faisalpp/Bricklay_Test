import React from 'react'

const AdviceCard = () => {
  return (
    <div className='lg:absolute lg:-top-14 lg:left-60 bg-white shadow-2xl lg:w-1/3 w-80 lg:h-28 h-fit'>
        <div className='flex lg:flex-row flex-col items-center px-5 py-5 space-x-5'>
         <div className='flex items-center justify-center lg:w-32 w-24 h-12 bg-t4 text-t2 text-xl font-bold'>01</div>
          <div className='flex flex-col items-center space-y-2'>
           <h3 className='font-bold'>GET PROFESSIONAL ADVICE</h3>
           <h3 className='text-t1 lg:w-[340px] w-72'>There are many variations of avialable but the majority have sufferd.</h3>
          </div>
         </div>
        </div> 
        
  )
}

export default AdviceCard