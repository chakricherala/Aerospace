import React from 'react'
import { Intro } from '../assets'

const Main = () => {
    return (
        <div className='min-h-[100vh] w-full relative font-[Gro]'>
            <video autoPlay loop muted className="object-cover absolute -z-10 h-[100vh] w-[100vw]">
                <source src={Intro} type="video/mp4" />
            </video>
            <div className='absolute text-white px-10 items-center font-bold bottom-2 whitespace-nowrap text-[10vw] text-wrap leading-none'>
                <h1>Electrifying regional air travel</h1>
            </div>
        </div>
    )
}

export default Main