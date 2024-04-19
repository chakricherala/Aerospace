import React from 'react'
import { Backvid } from '../assets'

const Background = () => {
  return (
    <section className='w-full h-fit'>
        <video autoPlay loop muted className="object-cover h-[100vh] w-[100vw]">
                <source src={Backvid} type="video/mp4" />
            </video>
    </section>
  )
}

export default Background