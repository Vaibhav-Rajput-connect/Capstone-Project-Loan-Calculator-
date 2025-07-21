import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom';

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
    <div className='absolute bg-gray-900 top-0 left-0 w-full z-10'>
        <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg-px-32 bg-transparent'>
        <img src={assets.logo} alt='' style={{ width: '150px', height: '100px' }} />
        <ul className='hidden md:flex gap-7 text-white '>
        <li><Link to="/" className="cursor-pointer">Home</Link></li>
                <li><Link to="/about" className="cursor-pointer">About</Link></li>
                <li><Link to="/projects" className="cursor-pointer">Projects</Link></li>
                <li><Link to="/mortgage" className="cursor-pointer">Mortgage Calculator</Link></li>
            </ul>
            <Link to="/signup" className='hidden md:block bg-white px-8 py-2 rounded-full'>SignUp</Link>
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
            <li><Link onClick={() => setIsMenuOpen(false)} to="/" className='px-4 py-2 rounded-full inline-block'>Home</Link></li>
            <li><Link onClick={() => setIsMenuOpen(false)} to="/about" className='px-4 py-2 rounded-full inline-block' >About</Link></li>
            <li><Link onClick={() => setIsMenuOpen(false)} to="/projects"  className='px-4 py-2 rounded-full inline-block'>Projects</Link></li>
            <li><Link onClick={() => setIsMenuOpen(false)} to="/mortgage"  className='px-4 py-2 rounded-full inline-block'>Mortgage Calculator</Link></li>
            </ul>

        </div>
    </div>
  )
}

export default Navbar;
