import React from 'react'
import { Navbar } from '../navigationBar/Navbar'

const DeviceHero = () => {
  return (
    <div className='bg-[url(/Images/deviceBg.svg)] bg-no-repeat bg-cover w-full'>
        <Navbar/>
        <div className='container flex flex-col gap-2 lg:gap-5 items-center py-[5vh] lg:py-[30vh]'>
            <h1 className='text text-white capitalize text-xl lg:text-5xl w-full lg:w-[55%] text-center'>already made device for your business</h1>
            <p className='text text-[gray] font-bold w-full lg:w-[30%] text-center'>Enjoy features and integrations that enhance efficiency and productivity</p>
        </div>
        <div className='px-[2rem] relative top-[4rem]'>
            <div className='text bg-white rounded-xl flex lg:flex-row w-full justify-around py-[2%]' >
                <h1 className='capitalize text-xl lg:text-4xl w-[40%]'>“ we deliver device for business, merchant, and more. ”</h1>
                <div className='flex gap-[40px]'>
                    <div className='flex flex-col items-center'>
                        <h1>20k+</h1>
                        <p>Device System</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <h1>70%</h1>
                        <p>Scalability</p>
                    </div>
                </div>
            </div>
        </div>      
    </div>
  )
}

export default DeviceHero