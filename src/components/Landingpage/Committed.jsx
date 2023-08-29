import React from 'react'
import Image from 'next/image'
import { committed } from './Data'

const Committed = () => {
  return (
    <div className='mt-[9rem] lg:mt-[5%] bg-white rounded-xl py-[20px] px-[35px] flex flex-col'>
        <div className='flex flex-col lg:flex-row w-full justify-between items-center'>
            <Image width={150} height={150} className='w-[43%]' src="/Images/Payment Image.svg"/>
            <div className='w-full text-center text lg:text-left lg:w-[40%]'>
                <button className='text-[15px] font-bold bg-[#00CCFF] text-white rounded-xl p-[15px]'>
                    <a href="">Why VoucherPay</a>
                </button>
                <h1 className='capitalize text-[25px] w-full lg:w-[77%] font-extrabold leading-[44px]'>Committed to ease, and accessible payment for the underserved</h1>
                <p className='capitalize text text-[gray] text-[20px] lg:w-[77%] '>Harness simplicity while sending or receiving funds from clients and customers. We secure your money and ensure that you enjoy seamless transactions across all borders.</p>
            </div>
        </div>
        <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full justify-between gap-5 py-[6rem]'>
            {
                committed.map(d=>{
                    return(
                        <div className='flex gap-3 items-center rounded-lg bg-white py-7 px-2 shadow-lg w-full text-left'>
                            <Image width={40} height={40} src={d.img}/>
                            <h4>{d.head}</h4>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Committed