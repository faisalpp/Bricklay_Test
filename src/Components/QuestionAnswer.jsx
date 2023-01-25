import React from 'react'
import Accordion from './Accordion'
import {TiTick} from 'react-icons/ti'

const QuestionAnswer = () => {
  return (
    <div className='flex flex-col w-full py-10'>
     <div className='flex flex-col w-full items-center'>
      <h3 className='lg:text-5xl text-2xl font-bold'>QUESTION ANSWERS</h3>
      <h3>We help our clients renew their business</h3>
     </div>
     
     <div className='flex lg:flex-row flex-col w-full mt-10 lg:space-y-0 space-y-5'>
       <div className='flex flex-col space-y-8 items-center lg:w-1/2 lg:ml-20 lg:mr-20'>
        <Accordion no="1"/>
        <Accordion no="2"/>
        <Accordion no="3"/>
       </div> 
       <div className='flex flex-col items-center lg:justify-end lg:w-1/2 w-full lg:mr-20'>
       <div className='flex lg:flex-row flex-col lg:space-x-10 lg:space-y-0 items-center space-y-5'>
        <div className='flex flex-col space-y-5'>
         <h3 className='flex items-center'><TiTick className='text-green-500 text-xl'/>Nsectetur cing elit</h3>
         <h3 className='flex items-center'><TiTick className='text-green-500 text-xl'/>Suspe ndisse suscipit sagittis leo.</h3>
         <h3 className='flex items-center'><TiTick className='text-green-500 text-xl'/>Entum estibulum dignissim posuere.</h3>
         <h3 className='flex items-center'><TiTick className='text-green-500 text-xl'/>If you are going to use a passage</h3>
         <h3 className='flex items-center'><TiTick className='text-green-500 text-xl'/>If you are going to use a passage test data.</h3>
        </div>
        <div className='flex flex-col bg-t2 px-5 lg:h-50 h-40 w-fit justify-center text-white items-center'>
          <h3 className='lg:text-7xl text-5xl font-bold'>30</h3>
          <h3>Years of Experience</h3> 
        </div>
       </div> 
       </div> 
     </div>


    </div>
  )
}

export default QuestionAnswer