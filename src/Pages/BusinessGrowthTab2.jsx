import React from 'react'
import { AiOutlineMinus } from 'react-icons/ai'
import {IoMdCheckmarkCircleOutline} from 'react-icons/io'

const BusinessGrowthTab2 = () => {
  return (
    <div className='flex lg:flex-row flex-col lg:items-center lg:px-2 px-5 lg:space-x-10 justify-center h-[500px] bg-white'>
     <div className='flex flex-col space-y-5'>
        
      <div className='flex space-x-2'>
       <div className='bg-t4 w-fit h-fit px-2 py-2'><IoMdCheckmarkCircleOutline className='text-t2 text-2xl'/></div>
       <div>
        <h3 className='font-bold lg:text-lg text-sm'>HIGHEST SUCCES RATES2</h3>
        <p className='lg:w-80 w-60 lg:text-[16px] text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla culpa, necessitatibus cum rem a atque error!</p>
       </div>
      </div>
      <div className='flex space-x-2'>
       <div className='bg-t4 w-fit h-fit px-2 py-2'><IoMdCheckmarkCircleOutline className='text-t2 text-2xl'/></div>
       <div>
        <h3 className='font-bold lg:text-lg text-sm'>HIGHEST SUCCES RATES2</h3>
        <p className='lg:w-80 w-60 lg:text-[16px] text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla culpa, necessitatibus cum rem a atque error!</p>
       </div>
      </div>
     </div>
     
     <div className='flex flex-col lg:border-l-2 lg:px-10 space-y-10 lg:mt-0 mt-10 mb-10'>
        <p className='lg:w-96 w-72 lg:text-[16px] text-xs'>There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form injected humour or randomised words which don't look believable.</p>
        <div>
         <h3 className='flex items-center lg:text-[16px] text-sm'><AiOutlineMinus className='text-t2 mr-2'/> If you are going to use a passage</h3>
         <h3 className='flex items-center lg:text-[16px] text-sm'><AiOutlineMinus className='text-t2 mr-2'/> Lorem Ipsum you need to be sure</h3>
         <h3 className='flex items-center lg:text-[16px] text-sm'><AiOutlineMinus className='text-t2 mr-2'/> There isn't anything embarrassing</h3>
         <h3 className='flex items-center lg:text-[16px] text-sm'><AiOutlineMinus className='text-t2 mr-2'/> Hidden in the middle of text</h3>
        </div>
     </div>


    </div>
  )
}

export default BusinessGrowthTab2