import React, { useEffect, useState } from 'react'
import { Instagram, Mail, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';


const Home = () => {

  const [visibility_scroll, setVisibility_scroll] = useState(true);
  useEffect(() => {
    let timer;

    const handleScroll = () => {
      if (timer) clearTimeout(timer);

      timer = setTimeout(() => {
        setVisibility_scroll(window.scrollY < 100);
      }, 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='bg-gradient-to-bl from-[#554d4d] to-gray-900 inset-0  md:h-[530px] flex flex-col md:flex-row px-2 py-14 justify-around '>
      <div className='flex items-center justify-center flex-col md:w-1/2'>
        <h1 className=' text-3xl md:text-5xl md:font-bold italic text-wrap text-[#fefae0] font-montserrat leading-relaxed '>Your Journey to a Better Digital Future Starts Here</h1>
        <div className=' mr-auto flex items-center '>
          <img className='w-44' src='./h2c_logo-bg.png' alt="h2creation Logo" />
          <div className='flex  space-x-1 md:space-x-6'>
            <span className='p-1 text-blue-700 hover:text-blue-500 hover:scale-125 transition duration-200'>
              <a href='https://www.facebook.com/profile.php?id=61572679104968' target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page">
                <Facebook />
              </a>
            </span>
            <span className='p-1 text-red-700 hover:text-red-500 hover:scale-125 transition duration-200'>
              <a href='mailto:admin@h2creations.in' aria-label="Send us an email">
                <Mail />
              </a>
            </span>
            <span className='p-1 text-[#E1306C] hover:text-pink-500 hover:scale-125 transition duration-200 '>
              <a href='https://www.instagram.com/h2creations.in/' target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram profile">
                <Instagram />
              </a>
            </span>

          </div>
        </div>
      </div>
      <motion.img
        className='mx-auto w-1/2 md:mx-0 rounded-lg md:w-1/3'
        src='./web1.webp'
        alt="Digital journey representation"
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        loading="lazy"
        transition={{ duration: 2.5, ease: "easeIn", delay: 0.5 }}
      />
      {visibility_scroll && <div
        className="hidden fixed bottom-8 left-1/2 transform -translate-x-1/2 md:flex flex-col items-center space-y-2" aria-label="Scroll down indicator" >
        <div className="w-8 h-8 border-2 border-gray-500 rounded-full flex justify-center items-center animate-bounce">
          <span className="block w-2 h-2 bg-gray-500 rounded-sm"></span>
        </div>
        <p className="text-gray-500 text-xs">Scroll Down</p>
      </div>
      }
    </div>



  )
}

export default Home
