import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(()=>{
    if(isMenuOpen){
        document.body.style.overflow = 'hidden'
    }else{
        document.body.style.overflow = 'auto'
    }
    return(()=>{
         document.body.style.overflow = 'auto'
    })

  },[isMenuOpen])

  return (
    <div className='absolute top-0 left-0 w-full z-10'>
        <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg-px-32 bg-transparent'>
            <img src={assets.logo} alt='' style={{ width: '150px', height: '100px' }} />
            <ul className='hidden md:flex gap-11 text-white '>
                <a href='#Header' className='cursor-pointer hover:text-gray-400'>Home</a>
                <a href='#About' className='cursor-pointer hover:text-gray-400'>About</a>
                <a href='#Projects' className='cursor-pointer hover:text-gray-400'>Projects</a>
                <a href='#Mortgage Calculator' className='cursor-pointer hover:text-gray-400'>Mortgage Calculator</a>
            </ul>
            <img  
              src={assets.menu_icon} 
              className='md:hidden w-7' 
              alt='' 
              onClick={() => setIsMenuOpen(true)} 
            />
        </div>
        {/* /* mobile menu */}
        <div 
          className={`md:hidden fixed w-full right-0 top-0 bottom-0 overflow-hidden bg-white transition-all ${isMenuOpen ? 'block' : 'hidden'}`}
        >
            <div 
              className='flex justify-end p-6 cursor-pointer'
              onClick={() => setIsMenuOpen(false)}
            >
              <img src={assets.cross_icon} className='w-5' alt=''/>
            </div>
            <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
            <a onClick={() => setIsMenuOpen(false)} href='#Header' className='px-4 py-2 rounded-full inline-block'>Home</a>
            <a onClick={() => setIsMenuOpen(false)} href='#About' className='px-4 py-2 rounded-full inline-block' >About</a>
            <a onClick={() => setIsMenuOpen(false)} href='#Projects'  className='px-4 py-2 rounded-full inline-block'>Projects</a>
            <a onClick={() => setIsMenuOpen(false)} href='#Mortgage Calculator'  className='px-4 py-2 rounded-full inline-block'>Mortgage Calculator</a>

            </ul>

        </div>
    </div>
  )
}

export default Navbar