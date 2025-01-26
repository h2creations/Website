import React from 'react'
import { MessageSquare, Menu} from 'lucide-react';
import { useState } from 'react'

const Navbar = () => {
  const [navToggle ,setNavToggle] = useState(false);
  
  return (
    <div id='Home' className='bg-gray-900 flex justify-between items-center p-4 '>
      <div className='Name'>
       <h1 className='font-bold text-4xl md:text-3xl text-[#cccc90db]'>H2Creations <span className='hidden md:inline font-normal text-2xl font-montserrat'> - Lead with Glow</span> </h1>
      </div>
      <div className='hidden md:flex space-x-6 text-md text-[#cccc90db] font-roboto items-center'>
            <a href='#Home' className='navbar-animation hover:cursor-pointer'>HOME</a>
            <a href='#Services' className='navbar-animation hover:cursor-pointer'>SERVICES</a>
            <a href='#Plans&Pricing' className='navbar-animation hover:cursor-pointer'>PLANS & PRICING</a>
            <a href='#ContactUs'className='flex items-center text-lg border border-[#a9a9b7] bg-transparent shadow-violet-500 shadow-md rounded hover:scale-105 transition-transform ease-in-out delay-100 text-[#f6f6f6] p-2'>REACH US
            <div className='ml-2'><MessageSquare /></div>    
            </a>            
      </div>
      
    {navToggle && <div className='mobile-nav flex flex-col md:hidden bg-[#292d43] bg-opacity-90 rounded-sm w-[150px] '>
            <a href='' onClick={()=>setNavToggle(false)} className=' m-2'>Home</a>
            <a href='#Services' onClick={()=>setNavToggle(false)} className=' m-2'>Services</a>
            <a href='#Plans&Pricing' onClick={()=>setNavToggle(false)} className='m-2'>Plans & Pricing</a>
            <a href='#ContactUs' onClick={()=>setNavToggle(false)} className='m-2'>Reach Us</a>       
      </div>
    }
      <button onClick={()=>setNavToggle(!navToggle)} className='block md:hidden text-white'><Menu/></button>
    </div>
  )
}

export default Navbar
