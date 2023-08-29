import React from 'react'
import { services } from './Data'
import Image from 'next/image'

const Services = () => {
  return (
    <div className='flex flex-col items-center w-full bg-white lg:py-[2%] lg:mt-10'>
        <div className='w-full flex flex-col items-center gap-5'>
            <button className='text-[20px]  bg-[#00CCFF] text-white rounded-xl py-[12px] px-[30px]'>Services</button>
            <h1 className='capitalize text lg:text-4xl font-extrabold lg:w-[45%] text-center'>Foster growth with payment solutions through our Integrations</h1>
            <p className='capitalize text text-[grey] text-[20px] lg:w-[45%] text-center'>Build custom payment platforms by simply integrating our well-documented APIs and SDKs giving your clients and customers several payment options to choose from.</p>
        </div>
        <div>
            <div>
                {
                    services.map(d=>{
                        return(
                            <div>
                                <Image width={150} height={150} src={d.image} />
                                <h1>{d.heading}</h1>
                                <p>{d.body}</p>
                                <button>{d.btn} </button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Services