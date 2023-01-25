import React from 'react'
import CaseCard from './CaseCard'

const CaseStudies = () => {
  return (
    <div className='flex flex-col lg:h-[600px] h-fit bg-t5 mb-10'>
      <h3 className='text-center font-bold lg:text-5xl text-3xl mt-20'>NEW CASE STUDIES</h3>
      <h3 className='text-t1 text-center'>We help our clients renew their business</h3>
      
      <div className='flex lg:flex-row flex-col justify-center space-y-5 items-center lg:space-x-20 mt-10'>
       <CaseCard/>
       <CaseCard/>
       <CaseCard/>
      </div>

    </div>
  )
}

export default CaseStudies