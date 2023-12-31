import React from 'react'
import { payment } from './Data';
import Image from 'next/image';

const PaymentSol = () => {
  return (
    <div className='container mt-[3%]'>
        <div className='bg-[url(/Images/Herocircle.svg)] bg-center bg-no-repeat  flex flex-col items-center gap-[45px] p-[4%]'>
            <div>
                <button className='px-[20px] py-[15px] rounded-xl bg-[#00CCFF] text-white'>Payment</button>
            </div>
            <div className='text-center flex flex-col items-center gap-[20px] lg:gap-[25px]'>
                <h1 className='w-full lg:w-[50%] text text-4xl'>Secured Payment Solutions for Different Entities</h1>
                <p className='w-full lg:w-[55%] text text-[gray] text-xl'>Voucherpay offers industry-specific, yet customizable, digital payment solutions that are designed to be easy, fast, and secure, catering to your specific needs and preferences.</p>
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-7 lg:gap-9 lg: mb-[2%] '>
                {
                    payment.map(d=>{
                        return(
                            <div className='w-full lg:w-[77%] bg-white p-[30px] text rounded-xl'>
                                <Image width={50} height={50} src={d.icon} />
                                <h2 className='capitalize'>{d.heading}</h2>
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

export default PaymentSol;