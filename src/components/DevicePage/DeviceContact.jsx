import React from 'react';
import Image from 'next/image';

const DeviceContact = () => {
  return (
    <div className='px-[10px] my-[25px] lg:px-[30px]'>
        <div className='rounded-lg bg-white relative py-[10%]'>
            <Image className='absolute left-0 top-0' width={400} height={400} src="/Images/left.svg" />
            <div className='flex flex-col items-center text gap-4 w-full'>
                <h1 className='w-[20%] text-center text-[#00CCFF]'>Want to Order for Your Device?</h1>
                <button className='btn'>Contact Us</button>
            </div>
            <Image  className='absolute right-0 top-0' width={400} height={400} src="/Images/right.svg"/>
        </div>
    </div>
  )
}

export default DeviceContact