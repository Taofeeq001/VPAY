import React from 'react'
import Image from 'next/image'

const Voucherteam = () => {
  return (
    <div className='container py-[3rem] flex flex-col gap-7'>
      <div className='flex flex-col items-center'>
        <div>
          <button className='btn'>Team</button>
        </div>
        <h1>Voucherpay Team</h1>
        <p>Meet our Voucher pay team</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:px-0 px-8'>
        <Image width={500} height={500} src='/Images/kris.svg' />
        <Image width={500} height={500} src='/Images/jery.svg' />
        <Image width={500} height={500} src='/Images/Robin.svg' />
        <Image width={500} height={500} src='/Images/Sarah.svg' />
        <Image width={500} height={500} src='/Images/sahil.svg' />
        <Image width={500} height={500} src='/Images/karima.svg' />
        <Image width={500} height={500} src='/Images/Adeola.svg' />
        <Image width={500} height={500} src='/Images/kingsley.svg' />
      </div>
    </div>
  )
}

export default Voucherteam