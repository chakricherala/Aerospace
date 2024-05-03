import React, { useState, useEffect } from 'react';
import { navlinks } from '../content/index';
import { close, menu } from '../assets/index'

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
  const [toggle, seToggle] = useState(false)

  return (
    <div>
      <nav className={`flex text-[1.2vw] flex-row justify-between px-10 py-10 items-center font-[d] fixed top-0 left-0 right-0 text-black`}>
        <div className='flex flex-col items-start leading-none font-semibold'>
          <span>Heart</span>
          <span>Aerospace</span>
        </div>
        <div className='md:flex hidden gap-8 font-medium'>
          {navlinks.map((item) => (
            <a href="#" key={item.id}>
              {item.title}
            </a>
          ))}
        </div>
        <div className='md:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28] object-contain' onClick={() => seToggle((prev) => !prev)} />
          <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-white absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar `}>
            <ul className='list-none flex flex-col justify-end items-center flex-1'>
              {/* {navlinks.map((item, index) => (
                <li key={item.id} className={`font-poppins font-normal text-black cursor-pointer text-[16px] ${index === navlinks.length - 1 ? 'mr-0' : 'mb-10'}`}>
                  <a href={`#${item.id}`}>
                    {item.title}
                  </a>
                </li>
              ))} */}
              {navlinks.map((item) => (
                <a href="#" key={item.id} className='font-normal text-black cursor-pointer'>
                  {item.title}
                </a>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
