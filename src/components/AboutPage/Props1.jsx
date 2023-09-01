import React from 'react'
import Image from 'next/image'

const Props1 = (props) => {
  return (
    <div className='bg-white px-5 lg:px-[9rem] py-[50px]'>
      <div className='container flex lg:flex-row flex-col w-full justify-between lg:gap-[20rem] items-center'>
        <Image width={400} height={400} className='w-full md:w-[70%] lg:w-[40%]' src={props.Image} />
        <div className='w-full lg:w-[50%] flex flex-col gap-3'>
          <div>
            <button className='btn'>{props.btn1}</button>
          </div>
          <div className='flex flex-col gap-3'>
              <h3 className='capitalize text text-xl lg:text-4xl w-full lg:w-[70%]'>{props.heading}</h3>
              <p className='w-full lg:w-[90%]'>{props.paragraph}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Props1;