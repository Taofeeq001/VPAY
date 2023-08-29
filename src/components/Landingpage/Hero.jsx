'use client'
import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='container flex-col flex lg:flex-row w-full items-center justify-between'>
        <div className='w-full lg:w-[45%]'>
            <h1 className='capitalize text-[45px] font-extrabold'>Easy, near-zero-fee payments for businesses</h1>
            <p className='text text-2xl text-[gray]'>Reaching Africa remotest parts with digital financial services</p>
        </div>
        <div className='hero-img'>
            <Image className='relative w-[50%] top-[10%] right-[-40%]' height={150} width={150} src="/Images/guy 1.svg"/>
            <Image height={150} width={150} className='absolute top-[40%] right-[35%] w-[11%]' src="/Images/Frame 55.svg"/>
            <Image height={150} width={150} className='absolute top-[50%] right-[13%] w-[11%]' src="/Images/Frame 57.svg"/>
        </div>
    </div>
  )
}

export default Hero