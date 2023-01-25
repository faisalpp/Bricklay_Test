import React from 'react'
import { RiArrowLeftLine,RiArrowRightLine } from 'react-icons/ri'
import CraouselCard2 from './CraouselCard2'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


const Testimonials = () => {
  return (
    <>
    <div className='lg:flex hidden bg-t5 py-14 lg:h-[500px] h-fit'>
      <CarouselProvider naturalSlideWidth={500} naturalSlideHeight={230} totalSlides={6} visibleSlides={2} className="w-full flex">
      <div className='flex flex-col w-6/12 space-y-5 justify-center px-16'>
       <h3 className='text-5xl font-bold'>WHAT THEY ARE TALKING ABOUT?</h3>
       <h3>Trusted by more than 4,200 customers</h3>       
       {/* Carousel Buttons */}
       <div className='flex mt-10 ml-14 space-x-20'>
        <ButtonBack><RiArrowLeftLine className='text-2xl'/></ButtonBack>
        <ButtonNext><RiArrowRightLine className='text-2xl'/></ButtonNext>
       </div>
      </div>
      
       <Slider className='w-full'>
      <div className='flex w-full items-center justify-center'>
       <Slide index={0}><CraouselCard2/></Slide>
       <Slide index={1}><CraouselCard2/></Slide>
       <Slide index={2}><CraouselCard2/></Slide>
       <Slide index={3}><CraouselCard2/></Slide>
       <Slide index={4}><CraouselCard2/></Slide>
       <Slide index={5}><CraouselCard2/></Slide>
       </div>
       </Slider>
      </CarouselProvider>
      </div>  
    {/* Moile Carousel */}
    <div className='lg:hidden flex flex-col bg-t5 py-20 h-fit'>
      <CarouselProvider naturalSlideWidth={400} naturalSlideHeight={470} totalSlides={6} visibleSlides={1} className="w-full flex flex-col">
      <div className='flex flex-col w-full space-y-5 items-center justify-center'>
       <h3 className='text-4xl font-bold text-center'>WHAT THEY ARE TALKING ABOUT?</h3>
       <h3>Trusted by more than 4,200 customers</h3>       
      </div>
       <div className='flex items-center mt-5 justify-center w-80'><h3 className='text-center'>Swipe To Scroll</h3><RiArrowRightLine/></div>
      <Slider className='w-full mt-5'>
      <div className='flex w-full items-center justify-center ml-5'>
       <Slide index={0}><CraouselCard2/></Slide>
       <Slide index={1}><CraouselCard2/></Slide>
       <Slide index={2}><CraouselCard2/></Slide>
       <Slide index={3}><CraouselCard2/></Slide>
       <Slide index={4}><CraouselCard2/></Slide>
       <Slide index={5}><CraouselCard2/></Slide>
       </div>
       </Slider>
      </CarouselProvider>
      </div>  


    </>

  )
}

export default Testimonials