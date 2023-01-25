import React from 'react'

const ServicesCard = () => {
  return (
    <div className='absolute -top-14 bg-white shadow-2xl w-1/3 h-fit'>
        <div className='flex items-center px-5 py-5 space-x-5'>
         <div className='flex items-center justify-center w-32 h-12 bg-t4 text-t2'>01</div>
          <div className='flex flex-col'>
           <h3 className='font-bold'>GET PROFESSIONAL ADVICE</h3>
           <h3 className='text-t1 w-[340px]'>There are many variations of avialable but the majority have sufferd.</h3>
          </div>
         </div>
        </div>
  )
}

export default ServicesCard