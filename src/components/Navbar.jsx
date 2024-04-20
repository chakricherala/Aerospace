import React, { useState, useEffect } from 'react';
import { navlinks } from '../content/index';

const Navbar = () => {
  // const [isBlackText, setIsBlackText] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const thirdSectionOffset = document.getElementById('airtop').offsetTop;
  //     const currentScroll = window.scrollY;

  //     setIsBlackText(currentScroll >= thirdSectionOffset);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  return (
    <div>
      <nav className={`flex flex-row justify-between px-10 py-10 items-center font-[d] fixed top-0 left-0 right-0 text-black`}>
        <div className='flex flex-col items-start leading-none font-semibold'>
          <span>Heart</span> 
          <span>Aerospace</span> 
        </div>
        <div className='flex gap-8 font-medium'>
          {navlinks.map((item) => (
            <a href="#" key={item.id}>
              {item.title}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
