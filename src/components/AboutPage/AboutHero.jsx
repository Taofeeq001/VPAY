import React from 'react'
import { Navbar } from '../navigationBar/Navbar'

const AboutHero = () => {
  return (
    <div className='bg-[url(/Images/Herocircle.svg)] bg-no-repeat bg-center mb-[1rem]'>
        <Navbar/>
        <div className='container flex flex-col gap-2 lg:gap-5 items-center justify-around h-[50vh] lg:h-[60vh]'>
            <h1 className='text capitalize text-xl lg:text-5xl w-full lg:w-[55%] leading-[50px] text-center'>We are taking financial services to those at the remotest part of Africa.</h1>
            <p className='text text-[gray] font-bold w-full lg:w-[50%] text-center'>The World Bank reports that roughly 1.7 billion humans are unbanked, with 66% of adult population in Africa</p>
        </div>
        <div className='px-[1rem]'>
            <div className='relative bg-white py-[3rem] w-[100%] rounded-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-around'>
                <div className='flex flex-col gap-5 items-center'>
                    <h1 className='text font-extrabold font-6xl'>20K</h1>
                    <p className='text text-xl text-[grey] font-bold'>Customer Based</p>
                </div>
                <div className='flex flex-col gap-5 items-center'>
                    <h1 className='text font-extrabold font-6xl'>2020</h1>
                    <p className='text text-xl text-[grey] font-bold'>Founding Year</p>
                </div>
                <div className='flex flex-col gap-5 items-center'>
                    <h1 className='text font-extrabold font-6xl'>10K</h1>
                    <p className='text text-xl text-[grey] font-bold'>Brand Partnership</p>
                </div>
            </div>            
        </div>
    </div>
  )
}

export default AboutHero