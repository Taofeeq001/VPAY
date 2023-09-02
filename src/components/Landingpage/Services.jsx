import React from 'react'
import { services } from './Data'
import Image from 'next/image'
import {BsArrowRight} from 'react-icons/bs'

const Services = () => {
  return (
    <div className='flex flex-col gap-[40px] items-center w-full bg-white lg:py-[3%] lg:mt-10'>
        <div className='w-full flex flex-col items-center gap-5'>
            <button className='text-[20px]  bg-[#00CCFF] text-white rounded-xl py-[12px] px-[30px]'>Services</button>
            <h1 className='capitalize text text-2xl lg:text-4xl font-extrabold lg:w-[45%] text-center'>Foster growth with payment solutions through our Integrations</h1>
            <p className='capitalize text text-[grey] text-[15px] lg:text-[20px] lg:w-[45%] text-center'>Build custom payment platforms by simply integrating our well-documented APIs and SDKs giving your clients and customers several payment options to choose from.</p>
        </div>
        <div className='container justify-between w-[90%] lg:w-[60%] flex flex-col lg:flex-row gap-16 '>
            {
                services.map(d=>{
                    return(
                        <div className='w-[100%] lg:w-[45%] items-left rounded-3xl flex flex-col text-left shadow-lg p-10 gap-4'>
                            <Image width={150} height={150} className='w-[100%]' src={d.image} />
                            <h3>{d.heading}</h3>
                            <p className='w-[100%] text-justify'>{d.body}</p>
                            <div>
                                <button className='border-[#00CCFF] border-2 py-4 px-6 rounded-lg hover:opacity-3 hover:bg-[#00CCFF] hover:text-white flex items-center gap-5 text-[#00CCFF]'>{d.btn} <BsArrowRight/> </button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Services