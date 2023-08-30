import React from 'react'

const PaymentSol = () => {
  return (
    <div className='container my-[3%]'>
        <div className='bg-[url(/Images/hero-circle.svg)] bg-center bg-no-repeat bg-cover flex flex-col items-center gap-[25px]'>
            <div>
                <button className='px-[20px] py-[15px] rounded-xxl bg-[#00CCFF] text-white'>Payment</button>
            </div>
            <div className='text-center flex flex-col items-center gap-[25px]'>
                <h1 className='w-full lg:w-[50%] text text-4xl'>Secured Payment Solutions for Different Entities</h1>
                <p className='w-full lg:w-[55%] text text-[gray] text-xl'>Voucherpay offers industry-specific, yet customizable, digital payment solutions that are designed to be easy, fast, and secure, catering to your specific needs and preferences.</p>
            </div>
        </div>
    </div>
  )
}

export default PaymentSol;