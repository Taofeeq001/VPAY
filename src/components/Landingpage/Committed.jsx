import React from 'react'
import Image from 'next/image'

const Committed = () => {
  return (
    <div className='mt-[5%] bg-white rounded-xl'>
        <div className='flex flex-col lg:flex-row w-full justify-between items-center py-[20px] px-[25px]'>
            <Image width={150} height={150} className='w-[45%]' src="/Images/Payment Image.svg"/>
            <div className='w-[40%]'>
                <button className='text-[15px] font-bold bg-[#00CCFF] rounded-xl p-[15px]'>
                    <a href="">Why VoucherPay</a>
                </button>
                <h1 className='capitalize text lg:w-[77%] font-extrabold leading-[44px]'>Committed to ease, and accessible payment for the underserved</h1>
                <p className='capitalize '>Harness simplicity while sending or receiving funds from clients and customers. We secure your money and ensure that you enjoy seamless transactions across all borders.</p>
            </div>
        </div>
    </div>
  )
}

export default Committed