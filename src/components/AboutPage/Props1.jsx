import React from 'react'
import Image from 'next/image'

const Props1 = (props) => {
  return (
    <div className='bg-white px-5 lg:px-[5rem] py-[50px]'>
      <div className='container flex lg:flex-row flex-col w-full justify-between lg:gap-[24rem] items-center'>
        <Image width={500} height={500} className='w-full md:w-[70%] lg:w-[50%]' src={props.Image} />
        <div className='w-full lg:w-[50%] flex flex-col gap-3'>
          <div className='flex flex-col gap-3'>
              <h3 className='capitalize text text-xl lg:text-4xl w-full lg:w-[90%]'>{props.heading}</h3>
              <p className='w-full lg:w-[90%]'>{props.paragraph}</p>
          </div>
          <div>
            <button className='btn'>{props.btn1}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Props1;