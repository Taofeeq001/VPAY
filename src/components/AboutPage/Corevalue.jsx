import React from 'react'
import { Core } from './AboutData'
import Image from 'next/image'

const Corevalue = () => {
  return (
    <div className='bg-[#212529]  py-[5rem] '>
        <div className='container flex flex-col gap-[3rem]'>
            <div className='text flex flex-col items-center gap-1 text-white'>
                <button className='btn'>Core Value</button>
                <h1>Our Core Values and principle</h1>
                <p>These are what define us as a team</p>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 items-center w-full'>
                {
                    Core.map(d=>{
                        return(
                            <div className='flex flex-col gap-2 bg-[#000000] text-white rounded-lg px-6 h-[240px] w-[100%] justify-center '>
                                <Image width={40} height={40} src={d.icon}/>
                                <h4>{d.heading}</h4>
                                <p>{d.para}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Corevalue