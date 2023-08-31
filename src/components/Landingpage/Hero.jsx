'use client'
import React from 'react'
import Image from 'next/image'
import { trusted } from './Data'

const Hero = () => {
  return (
    <div className='flex lg:flex-col'>
      <div className='container flex-col bg-[#FBFBFB] flex lg:flex-row w-full gap-5 items-center justify-between'>
        <div className='w-full lg:w-[45%]'>
          <h1 className='capitalize mt-7 lg:mt-0  text-xl text-center lg:text-4xl lg:text-left font-extrabold'>Easy, near-zero-fee payments for businesses</h1>
          <p className='text text-xl text-[gray] text-center lg:text-left'>Reaching Africa remotest parts with digital financial services</p>
        </div>
        <div className='hero-img'>
          <Image className='relative w-[100%] lg:w-[65%] lg:top-[8%] md:right-[-5%] lg:right-[-29%]' height={150} width={150} src="/Images/Hero Image.svg"/>
        </div>
      </div>
      <div className='container absolute  top-[80%] lg:top-[85%] left-[0] lg:left-[10%] flex flex-col items-center justify-center gap-11 py-[20px] px-[10px] bg-white rounded-xl'>
        <h3 className='capitalize text-[20px] lg:text-2xl'>trusted by brands around the world</h3>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-[10px] items-center w-full lg:w-[70%]'>
          {
            trusted.map(d=>{
              return(
                <div className='flex gap-2 justify-center items-center'>
                  <Image width={35} height={35} src={d.img}/>
                  <h5>{d.title}</h5>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Hero