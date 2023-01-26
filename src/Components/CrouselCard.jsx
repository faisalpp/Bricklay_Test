import React from 'react'
import {FaBitbucket} from 'react-icons/fa'

const CrouselCard = () => {
  return (
    <div className='flex lg:space-x-36 space-x-24 items-center bg-black text-white lg:w-[390px] w-[270px] lg:h-[280px] h-[200px] lg:px-16 px-5'>
     <div className='flex flex-col lg:space-y-10 space-y-5'>
      <h3 className='text-2xl w-12'>Wealth Managment</h3> 
      <a className='text-xs hover:underline cursor-pointer w-max'>Read More</a>
     </div>
     <div>
      <FaBitbucket className='text-t2 lg:text-8xl text-6xl'/>
     </div>
    
    </div>
  )
}

export default CrouselCard