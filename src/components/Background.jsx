import React from 'react'
import { Backvid } from '../assets'

const Background = () => {
  return (
    <section className='w-full h-min'>
        <video autoPlay loop muted className="object-contain h-full w-full">
                <source src={Backvid} type="video/mp4" />
            </video>
    </section>
  )
}

export default Background