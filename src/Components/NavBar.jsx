import React, { useState } from 'react'
import { AiOutlineInstagram,AiFillFacebook,AiFillLinkedin,AiOutlineTwitter } from 'react-icons/ai'
import {RiArrowDropDownLine, RiArrowDropUpLine, RiMenuFill, RiSearch2Line} from 'react-icons/ri'
const NavBar = () => {
 const [menu,setMenu] = useState(false);

  return (
    <>
    <div className="lg:grid hidden grid-cols-14 bg-t1 text-white w-full border-b-2 border-white">
        {/* Logo */}
      <div className='col-start-1 col-end-2 flex border-r-2 h-20 items-center px-5 text-lg'>
       <img src="/public/logo1.png" className='w-14'/>
      </div>  
      {/* Navbar Links */}
        <div className='col-start-3 flex space-x-16 px-2 items-center text-md'>
         <h3>HOME</h3>
         <div className='relative'>
         {menu ? <h3 className='flex items-center cursor-pointer'>SERVICES <RiArrowDropUpLine onClick={()=>setMenu(false)} className='text-2xl'/></h3> :<h3 className='flex items-center cursor-pointer'>SERVICES <RiArrowDropDownLine onClick={()=>setMenu(true)} className='text-2xl'/></h3>}
         <div className={`${menu?'absolute':'hidden'} bg-white text-t2 top-8 rounded-b-md`}>
          <div className='flex flex-col space-y-3 py-5'>
           <h3 className='hover:bg-t2 hover:text-white text-t2 bg-white px-5 cursor-pointer w-24'>Advice</h3>
           <h3 className='hover:bg-t2 hover:text-white text-t2 bg-white px-5 cursor-pointer w-24'>Advice</h3>
           <h3 className='hover:bg-t2 hover:text-white text-t2 bg-white px-5 cursor-pointer w-24'>Advice</h3>
           <h3 className='hover:bg-t2 hover:text-white text-t2 bg-white px-5 cursor-pointer w-24'>Advice</h3>
          </div>
         </div>
         </div>
         
         <h3>PAGES</h3>
         <h3 className='w-max'>CASE SHOP</h3>
         <h3>BLOG</h3>
         <h3>CONTENT</h3>
        </div> 
        <div className='col-start-8 flex items-center text-xl space-x-5'>
         <AiOutlineInstagram className='w-[38px]'/>
         <AiFillLinkedin className='w-[38px]'/>
         <AiOutlineTwitter className='w-[38px]'/>
         <AiFillFacebook className='w-[38px]'/>
        </div>
        <div className='col-start-10 border-l-2 border-r-2 px-5 flex items-center justify-center text-xl space-x-5'>
         <RiSearch2Line/>
        </div>
       <div className=' col-start-12 flex flex-col justify-center text-lg mr-5'>
        <h3>Need Help?</h3>
        <h3 className='w-max'>+92 3036542828</h3>
       </div>
      </div>

      <div className='lg:hidden grid grid-cols-12 bg-t1 py-2 border-b-2'>
       <div className="col-start-1 col-end-3 ml-2">
        <img src="/public/logo1.png" className='w-12 h-10'/>
       </div>
       <div className=" col-start-11 flex items-center w-full">
        <RiMenuFill className='text-white text-xl'/>
       </div>
      </div>
    </>
  )
}

export default NavBar