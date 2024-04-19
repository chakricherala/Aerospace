import React from 'react'
import { clientlink } from '../content'

const Clients = () => {
  return (
    <div>
        <div className='grid grid-rows-5'>
          {clientlink.map((item) => (
            <div key={item.id}>
              {item.title}
            </div>
          ))}
        </div>
    </div>
  )
}

export default Clients