import React from 'react'
import { clientlink } from '../content'
import { 
  Aircanada,
  Break,
  EQT,
  Carbon,
  Mesa,
  Nordic,
  Norrsken,
  Saab,
  United,
  Vinnova,
  Y
} from '../assets/index.js'

const Clients = () => {
  return (
    <div className='px-10 py-10 h-fit w-full'>
      <h3 className='text-xl font-bold'>Partners & Investors</h3>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
          {clientlink.map((item) => (
            <div className='flex items-center '>
              <img src={item.title} alt="" />
            </div>
          ))}
        </div> 
    </div>
  )
}

export default Clients