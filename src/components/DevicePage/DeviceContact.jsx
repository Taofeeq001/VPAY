import React from 'react';
import Image from 'next/image';

const DeviceContact = () => {
  return (
    <div className='px-[10px] mt-[25px] lg:px-[30px]'>
        <div className='rounded-lg bg-white relative py-[10%]'>
            <Image className='absolute left-0 top-0' width={400} height={400} src="/Images/left.svg" />
            <div className='flex flex-col items-center'>
                <h1>Want to Order for Your Device?</h1>
                <button className='btn'>Contact Us</button>
            </div>
            <Image  className='absolute right-0' width={100} height={100} src="/Images/right.svg"/>
        </div>
    </div>
  )
}

export default DeviceContact