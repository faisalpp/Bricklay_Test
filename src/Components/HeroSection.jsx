import React from 'react'
import {RiArrowDownSLine} from 'react-icons/ri';

const HeroSection = () => {
  const scrollDown = () =>{
   document.getElementById('p1').scrollIntoView();
  }
  return (
    <div style={{'height':'calc(100vh - 80px)'}} className='flex flex-col bg-t1 w-full'>
     <div className='flex flex-col space-y-10 lg:mt-28 mt-20 lg:ml-24 ml-12'>
      <h3 className='text-white'>WELCOME TO CODESHAPER</h3>
      <h3 className='text-white lg:text-7xl text-3xl font-bold lg:w-96 w-52'>CONSULTING FOR EVERY BUSINESS</h3>
      <button className='bg-t2 lg:px-10 lg:py-3 px-5 py-2 rounded-md w-fit h-fit text-white lg:text-lg text-xs'>DESOVER MORE</button>
     </div>
     <div className='lg:flex hidden w-full justify-center mt-20'>
      <div onClick={()=>scrollDown()} className='cursor-pointer bg-t3 rounded-full animate-bounce'><RiArrowDownSLine className='text-4xl text-white'/></div>
     </div>
    </div>
  )
}

export default HeroSection