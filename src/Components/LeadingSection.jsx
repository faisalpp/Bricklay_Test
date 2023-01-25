import React, { useState } from 'react'
import {RiArrowDropRightFill } from 'react-icons/ri'
import {MdOutlinePhoneInTalk } from 'react-icons/md'
import ProgressBar from './ProgressBar';
import AdviceCard from './AdviceCard';

const LeadingSection = () => {
  const [progress,setProgress] = useState(30);
  return (
   <>
    <div className='flex lg:flex-row flex-col w-full lg:h-[600px] h-fit mb-20'>
      <div className='flex flex-col lg:w-1/2 w-full'>
       <div className='bg-t2 w-fit h-fit mt-20 ml-24'><RiArrowDropRightFill className='text-6xl text-white'/></div>
      </div>  
      <div className='flex flex-col lg:w-1/3 mt-20'>
       <div className='flex flex-col space-y-5 lg:ml-0 ml-3'>
        <h3 className='text-3xl font-bold'>WE'RE LEADING IN THE MARKET</h3>
        <h3 className='text-t1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et quidem vitae eaque explicabo deserunt, expedita ipsum a magni doloremque culpa recusandae deleniti! Cum pariatur esse officiis non inventore eaque facilis?</h3>
        <h3 className='text-t2'>We have 35+ years of experience. We offer marketing and consulting services</h3>
       </div>
       <ProgressBar progress="88" text="CONSULTING"/> 
       <ProgressBar progress="66" text="ADVICES"/>
       {/* Contact Card */}
       <div className='flex space-x-5 lg:ml-0 ml-5 mt-8'>
        {/* Icon */}
        <div className='bg-t4 w-fit px-2 py-2'>
         <MdOutlinePhoneInTalk className='text-4xl text-t2'/>
        </div>
         <div>
            <h3 className='text-t1'>Have any question? Give us a call</h3>
            <h3 className='font-bold'>+92 303 65 42828</h3>
         </div>
       </div> 
      </div>  
    </div>

      <div className='lg:relative flex flex-col w-full'>
       <div className='flex lg:flex-row flex-col lg:space-x-96 lg:space-y-0 space-y-5 justify-center items-center lg:mb-0 mb-5'>
        <AdviceCard/>
        <AdviceCard/>
       </div> 
      </div>
   </> 
  )
}

export default LeadingSection