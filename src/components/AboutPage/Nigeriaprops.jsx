import React from 'react'
import Image from 'next/image'

const Nigeriaprops = (props) => {
  return (
    <div className='px-2 lg:px-[6rem] py-[50px] gap-5 flex lg:flex-row flex-col w-full justify-around bg-white items-center'>
        <div className='w-full lg:w-1/2 flex flex-col gap-3'>
            <div>
                <button className='btn'>{props.btn1}</button>
            </div>
            <div className='flex flex-col gap-3'>
                <h1 className='capitalize text text-xl lg:text-4xl'>{props.heading}</h1>
                <p className='w-full lg:w-[50%]'>{props.paragraph}</p>
            </div>
            <div>
                <button className='btn'>{props.btn2}</button>
            </div>
        </div>
        <Image width={500} height={500} className='' src={props.Image} />
    </div>
  )
}

export default Nigeriaprops