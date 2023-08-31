import React from 'react'
import Image from 'next/image'
import { growth } from './Data'

const Growth = () => {
  return (
    <div className='px-[10px] lg:px-[30px]'>
        <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between mt-[2rem] lg:mt-[5%] bg-white rounded-xl py-[20px] px-[35px]'>
            <div className='w-full text-center items-center text lg:text-left lg:w-[40%] flex flex-col gap-5 '>
                <div>
                    <button className='text-[15px] font-bold bg-[#00CCFF] text-white rounded-xl p-[15px]'>
                        <a href="">Why VoucherPay</a>
                    </button>
                </div>
                <h1 className='capitalize text-[20px] lg:text-[35px] w-full lg:w-[77%] font-extrabold leading-[44px]'>Scale growth through seamless transactions</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>
                    {
                        growth.map(d=>{
                            return(
                                <div className='flex gap-3 items-center'>
                                    <Image width={50} height={50} src={d.icon}/>
                                    <h5>{d.name}</h5>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <Image width={150} height={150} className='w-[100%] lg:w-[43%]' src="/Images/Increase Image.svg" />
        </div>
    </div>
  )
}

export default Growth