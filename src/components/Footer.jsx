import React from 'react'
import { footerLinks } from '../content'

const Footer = () => {
  return (
    <div className='bg-black h-fit w-full px-10 py-10 text-white'>
      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] ">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className='grid grid-cols-2'>
        <div className='flex flex-col items-start leading-none font-semibold text-xl'>
          <span>Heart</span>
          <span>Aerospace</span>
        </div>
        <div>
          <h4>© 2024 Heart Aerospace</h4>
        </div>
      </div>
    </div >
  )
}

export default Footer