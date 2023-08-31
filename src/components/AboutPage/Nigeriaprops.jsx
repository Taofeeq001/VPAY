import React from 'react'
import Image from 'next/image'

const Nigeriaprops = (props) => {
  return (
    <div className='px-[1rem] py-[50px] flex w-full justify-around bg-white items-center'>
        <div className='w-1/2 flex flex-col gap-3'>
            <div>
                <button className='btn'>{props.btn1}</button>
            </div>
            <div className='flex flex-col gap-3'>
                <h1 className='capitalize text text-xl lg:text-4xl'>{props.heading}</h1>
                <p className='w-[50%]'>{props.paragraph}</p>
            </div>
            <div>
                <button className='btn'>{props.btn2}</button>
            </div>
        </div>
        <Image width={150} height={150} className='w-[20%]' src={props.Image} />
    </div>
  )
}

export default Nigeriaprops