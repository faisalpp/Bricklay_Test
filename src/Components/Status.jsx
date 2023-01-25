import React from 'react'
import StatusCard from './StatusCard'

const Status = () => {
  return ( 
    <div className='flex lg:flex-row flex-col space-y-10 lg:space-x-16 justify-center items-center bg-t7 lg:h-96 h-fit lg:py-0 py-20 last:[&>div]:border-none'>
    <StatusCard/> 
    <StatusCard/> 
    <StatusCard/> 
    <StatusCard/> 
    </div>
    
  )
}

export default Status