import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'


const Accordion = ({no}) => {
 
  const [show,setShow] = useState(false);

  return (
    <div className={`rounded-md px-5 py-5 ${show?'bg-white':'bg-t4'} border-2 border-t1/10 shadow-xl lg:w-full w-80`}>
    <div className='flex flex-col'>
      <div className='flex font-bold space-x-1 items-center'>
       <div className='flex items-center lg:space-x-32 space-x-2'><div className='flex items-center'><span className='text-t2'>{no}.</span><h3 className='text-xs lg:text-sm'>THINK AHEAD AND BOOST YOUR BUSINESS</h3></div>{show?<AiOutlineMinus onClick={()=>setShow(false)} className='text-t2 text-2xl'/>:<AiOutlinePlus onClick={()=>setShow(true)} className='text-t2 lg:text-sm text-xs'/>}</div>
      </div>
    </div>
      <p className={` ${show?'flex':'hidden'} text-t1 lg:w-full w-11/12 text-sm`}>There are manu variations of passages the majority have suffered alteration in some injected humor, or randomised words believable.</p>  
    </div>
  )
}

export default Accordion