import React, { useState } from 'react'
import {AiOutlineInstagram,AiFillFacebook,AiFillLinkedin,AiOutlineTwitter} from 'react-icons/ai'
import {RiArrowDropDownLine, RiArrowDropUpLine, RiCloseLine, RiMenuFill, RiSearch2Line} from 'react-icons/ri'
const NavBar = () => {
 const [menu,setMenu] = useState(false);
 const [mobMenu,setMobMenu] = useState(false);

  return (
    <>
    <div className="lg:grid hidden grid-cols-14 bg-t1 text-white w-full border-b-2 border-white">
        {/* Logo */}
      <div className='col-start-1 col-end-2 flex border-r-2 h-20 items-center px-5 text-lg'>
       <img src="https://www.dropbox.com/s/rn2u3ile3pbczzj/logo1.png?raw=1" className='w-14'/>
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
        <img src="https://www.dropbox.com/s/rn2u3ile3pbczzj/logo1.png?raw=1" className='w-12 h-10'/>
       </div>
       <div className=" col-start-11 flex items-center w-full">
      
       <div className='relative'>
        {mobMenu ? <RiCloseLine onClick={()=>setMobMenu(false)} className='text-white text-xl'/>:<RiMenuFill onClick={()=>setMobMenu(true)} className='text-white text-xl'/>}
        <div style={{'height':"calc(100vh - 80px)"}} className={` ${mobMenu?'absolute':'hidden'} bg-white -right-10 top-10 w-52`}>
        <div className='flex flex-col text-2xl font-bold justify-center items-center space-y-10 py-10 text-t2'>
         <a>Home</a>
         <a>Pages</a>
         <a>Services</a>
         <a>Case Shop</a>
         <a>Blog</a>
         <a>Content</a>
        </div> 
        </div>
       </div> 
       
       </div>
      </div>
    </>
  )
}

export default NavBar