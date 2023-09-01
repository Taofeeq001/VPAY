import React from 'react'
import Image from 'next/image'
const Solution = () => {
  return (
    <div className='flex flex-col gap-[40px] items-center w-full bg-white lg:py-[3%] lg:mt-10'>
        <div className='container flex flex-col gap-10 lg:gap-0 lg:flex-row justify-between p-[5rem] items-center rounded-xl bg-[#F9FBFC]'>
            <div className= 'w-full lg:w-[50%] flex flex-col gap-6'>
                <h1 className='text capitalize font-bold w-full text-xl lg:text-3xl lg:w-[50%]'>solution for over 10K+ businesses</h1>
                <p className='text text-xl text-[grey] w-full lg:w-[50%]'>Let’s give you the best solution for your business</p>
                <div>
                    <button className='btn text-white'>Get Started</button>
                </div>
            </div>
            <Image width={150} height={150} className='w-[100%] lg:w-[40%]' src="/Images/Solution.svg"/>
        </div>
    </div>
  )
}

export default Solution