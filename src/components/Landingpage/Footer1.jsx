import React from 'react'
import Image from 'next/image'

const Footer1 = () => {
  return (
    <div className='bg-[#00CCFF] overflow-hidden'>
        <div className='flex flex-col gap-5 items-center text py-[10%] relative'>
            <h1 className='capitalize text-white text-2xl lg:text-4xl lg:w-[30%] text-center'>start accepting payment from anywhere!</h1>
            <div className='flex gap-2 w-[20%]'>
                <input  className='py-3 px-2 bg-white rounded-2xl w-[72%]' placeholder='Enter your Email' type="text" />
                <button className='py-3 px-2 bg-[#212529] rounded-2xl text-white'>Get Started</button>
            </div>
            <Image className='absolute w-full' width={150} height={150} src="/Images/Herocircle.svg" />
        </div>
    </div>
  )
}

export default Footer1