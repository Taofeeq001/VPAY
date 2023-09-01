import React from 'react'
import Image from 'next/image'

const Props2 = (props) => {
  return (
    <div className='bg-white px-4 lg:px-[9rem] py-[50px]'>
      <div className='container flex lg:flex-row flex-col w-full justify-between lg:gap-[20rem] items-center'>
        <div className='w-full lg:w-[50%] flex flex-col gap-3'>
          <div className='flex flex-col gap-3'>
              <h3 className='capitalize text text-xl lg:text-4xl w-full lg:w-[100%]'>{props.heading}</h3>
              <p className='w-full lg:w-[100%]'>{props.paragraph}</p>
          </div>
          <div>
            <button className='btn'>{props.btn2}</button>
          </div>
        </div>
        <Image width={500} height={500} className='w-full lg:w-[40%]' src={props.Image} />
      </div>
    </div>
  )
}

export default Props2;