import React from 'react'
import { RiArrowLeftLine, RiArrowRightLine } from 'react-icons/ri'
import CrouselCard from './CrouselCard'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Crousel = () => {
  return (
    <div className='flex flex-col space-y-14 py-10 items-center bg-t3 text-white lg:h-[600px] h-fit'>
     <div className='flex flex-col items-center'>
      <h3 className='lg:text-5xl text-xl font-bold'>REAL-WORLD EXPERIENCE</h3> 
      <h3 className='text-[10px] lg:text-lg'>The best business consulting firm you can count on!</h3> 
     </div>
     
     <div className='lg:flex hidden px-10 w-full justify-centers'>
     <CarouselProvider naturalSlideWidth={300} naturalSlideHeight={230} totalSlides={8} visibleSlides={3} className="w-full" >
     <Slider>
      <Slide index={0}><CrouselCard/></Slide>
      <Slide index={1}><CrouselCard/></Slide>
      <Slide index={2}><CrouselCard/></Slide>
      <Slide index={3}><CrouselCard/></Slide>
      <Slide index={4}><CrouselCard/></Slide>
      <Slide index={5}><CrouselCard/></Slide>
      <Slide index={6}><CrouselCard/></Slide>
      <Slide index={7}><CrouselCard/></Slide>
     </Slider>
     <div className='flex items-center justify-center space-x-2'>
      <div className='w-96 border-b-2'></div><h3>MEET THE PARTNERS</h3><div className='w-96 border-b-2'></div>
     </div>
     <div className='flex justify-center space-x-96'>
       <ButtonBack className='self-start bg-t2 rounded-md'><RiArrowLeftLine className="text-2xl"/></ButtonBack>
       <ButtonNext className='self-end bg-t2 rounded-md'><RiArrowRightLine className="text-2xl"/></ButtonNext>
     </div>
     </CarouselProvider>
     </div>
     
     <div className='lg:hidden flex px-10 w-full justify-centers'>
     <CarouselProvider naturalSlideWidth={300} naturalSlideHeight={230} totalSlides={8} visibleSlides={1} className="w-full" >
     <Slider>
      <Slide index={0}><CrouselCard/></Slide>
      <Slide index={1}><CrouselCard/></Slide>
      <Slide index={2}><CrouselCard/></Slide>
      <Slide index={3}><CrouselCard/></Slide>
      <Slide index={4}><CrouselCard/></Slide>
      <Slide index={5}><CrouselCard/></Slide>
      <Slide index={6}><CrouselCard/></Slide>
      <Slide index={7}><CrouselCard/></Slide>
     </Slider>
     <div className='flex items-center justify-center space-x-2'>
      <h3>MEET THE PARTNERS</h3>
     </div>
     </CarouselProvider>
     </div>
    </div>
  )
}

export default Crousel