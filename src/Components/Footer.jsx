import React, { useState,useEffect } from 'react'
import { AiFillFacebook, AiFillLinkedin, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { FaMapMarkerAlt, FaPhoneSquare } from 'react-icons/fa'
import { MdMail } from 'react-icons/md'

const Footer = () => {

  const [email,setEmail] = useState('');
  
  const handleSubmit = (e) => {
   e.preventDefault();
   localStorage.setItem('email',email);
  }

  return (
    <>
    <div className='flex flex-col justify-center items-center bg-t3 lg:h-[500px] h-fit lg:px-10 px-5'>
     
     <div className='lg:grid lg:grid-cols-12 flex flex-col space-y-10 w-full py-10'>
       {/* first */}
       <div className='lg:col-start-1 lg:col-end-4 flex flex-col space-y-5 items-center'>
         <img src="https://www.dropbox.com/s/rn2u3ile3pbczzj/logo1.png?raw=1" className='w-32 h-16'/>
        <p className='text-t8 text-[16px]'>Welcome to our consultancy agency. Lorem ipsum simply text amet cing elit simply text amet cing alit.</p>
        <div className='flex flex-col space-y-5 text-[16px] text-t8 mt-5'>
          <h3 className='flex items-center'><FaPhoneSquare className='text-t2 lg:text-2xl text-xl mr-1'/> +92 303 6542828</h3>  
          <h3 className='flex items-center'><MdMail className='text-t2 lg:text-2xl text-xl mr-1'/> hasif02@brickclay.com</h3>  
          <h3 className='flex items-center'><FaMapMarkerAlt className='text-t2 lg:text-2xl text-xl mr-1'/> 66 Broklyn Street New York, USA</h3>  
        </div>
        </div>
       {/* second */}
        <div className='lg:col-start-5 lg:col-end-8 flex flex-col'>
         <h3 className='font-bold text-white text-lg text-center'>EXPLORE</h3>
         <div className='flex space-x-10 mt-3 justify-center items-center'>
          <div className='flex flex-col space-y-5 text-t8 text-[16px]'>
           <h3>About</h3>
           <h3>Meet our Team</h3>
           <h3>Case studies</h3>
           <h3>Latest studies</h3>
           <h3>Latest News</h3>
           <h3>Contact</h3>
          </div>
          <div className='flex flex-col text-t8 space-y-5'>
           <h3>Support</h3>
           <h3>Terms of use</h3>
           <h3>Privacy & Policy</h3>
           <h3>Help</h3>
          </div> 
         </div>
        </div>
        {/* third */}
        <div className='lg:col-start-8 lg:col-end-12 flex flex-col space-y-5'>
          <h3 className='text-white font-bold text-lg'>NEWSLETTER</h3>
          <div className='flex flex-col w-fit h-fit lg:px-20 px-5 space-y-5 lg:py-10 py-5 bg-black'>
           <h3 className='text-t8 w-max lg:text-lg text-sm'>Subscribe for latest articles and resources</h3>
           <form onSubmit={handleSubmit} className='flex w-fit bg-white'>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Email' className='px-2 lg:h-10 h-8 border-none focus:ring-0 w-52'/> <button type="submit" className='bg-t2 px-3 lg:py-0 py-2 h-full text-white text-xs'>REGISTER</button>
           </form>
          </div>  
        </div>
     </div>
     <div className='flex flex-col justfy-center w-full border-t-2 mt-10 lg:mb-0 mb-5'>
     <div className='flex items-center mt-5'>
      <h3 className='text-t8 w-80 text-[10px]'>&copy; Copyright 2022 by Brickclay</h3>
      <div className='flex items-center text-white space-x-5 justify-end w-full'>
        <AiOutlineInstagram className='lg:text-3xl text-xl'/>
        <AiFillLinkedin className='lg:text-3xl text-xl'/>
        <AiOutlineTwitter className='lg:text-3xl text-xl'/>
        <AiFillFacebook className='lg:text-3xl text-xl'/>
       </div>
     </div> 
     
     </div>
    </div>
    </>
  )
}

export default Footer