import React from 'react'
import Image from 'next/image'

const Props1 = (props) => {
  return (
    <div className='px-[1rem] py-[50px] flex lg:flex-row flex-col w-full justify-around bg-white items-center'>
        <Image width={150} height={150} className='w-[70%] lg:w-[20%]' src={props.Image} />
        <div className='w-full lg:w-1/2 flex flex-col gap-3'>
          <div className='flex flex-col gap-3'>
              <h3 className='capitalize text text-xl lg:text-4xl w-full lg:w-[60%]'>{props.heading}</h3>
              <p className='w-full lg:w-[50%]'>{props.paragraph}</p>
          </div>
          <div>
            <button className='btn'>{props.btn1}</button>
          </div>
        </div>
    </div>
  )
}

export default Props1;