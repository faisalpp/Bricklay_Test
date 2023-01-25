import React from 'react'
import { RiCarFill } from 'react-icons/ri'

const CaseCard = () => {
  return (
    <>
     {/* Card Wrapper */}
     <div className='flex flex-col bg-t1 lg:w-80 w-60 lg:h-80 h-60'> 
     <div className='flex flex-col justify-center bg-t2 h-full lg:w-60 w-40 px-10 text-white font-bold'>
       <RiCarFill className='text-5xl'/>
       <h3 className='text-[10px] mt-5'>THOUGHT LEADERSHIP</h3>
       <h3 className='text-2xl w-12'>BUSINESS GROWTH</h3>
     </div>
    </div>
    </>
  )
}

export default CaseCard