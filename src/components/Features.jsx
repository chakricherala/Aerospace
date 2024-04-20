import React from 'react'
import { Front, Back, Side } from '../assets'

const Features = () => {
    return (
        <section className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-10 h-fit w-full px-10 py-20'>
            <div className='px-2 py-2 grid grid-rows-3  justify-center'>
                <div>
                <img src={Side} alt=""  className='object-cover'/>
                </div>
                <div>
                <img src={Front} alt="" className='object-cover'/>
                </div>
                <div>
                <img src={Back} alt=""  className='object-cover'/>
                </div>
            </div>
            <div className='col-span-2 gap-10'>
                <div className='grid md:grid-cols-2 sm:grid-cols-full'>
                <div className='px-2 py-4 grid gap-10 grid-rows-2'>
                    <div>
                        <h3 className='text-5xl font-bold'>Green</h3>
                        <p className='text-lg mt-4'>Zero emissions of CO2, NOX and ultrafine particulates.</p>
                    </div>
                    <div>
                        <h3 className='text-5xl font-bold'>Cost-Effective</h3>
                        <p className='text-lg mt-4'>Comparable unit economics to larger turboprop aircraft.</p>
                    </div>
                </div>
                <div className='px-2 py-4'>
                    <h3 className='text-5xl font-bold'>Accessible</h3>
                    <p className='text-lg mt-4'>Short field performance, low-noise operations and minimal ground service infrastructure.</p>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Features