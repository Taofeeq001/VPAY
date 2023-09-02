import DeviceHero from '@/components/DevicePage/DeviceHero'
import DeviceOther from '@/components/DevicePage/DeviceOther'
import { Navbar } from '@/components/navigationBar/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className='bg-[#FBFBFB] w-[100%]'>
        <DeviceHero/>
        <DeviceOther/>
    </div>
  )
}

export default page