import DeviceContact from '@/components/DevicePage/DeviceContact'
import DeviceHero from '@/components/DevicePage/DeviceHero'
import DeviceOther from '@/components/DevicePage/DeviceOther'
import Footer from '@/components/Landingpage/Footer'
import Footer1 from '@/components/Landingpage/Footer1'
import React from 'react'

const page = () => {
  return (
    <div className='bg-[#FBFBFB] w-[100%]'>
        <DeviceHero/>
        <DeviceOther/>
        <DeviceContact/>
        <Footer1/>
        <Footer/>
    </div>
  )
}

export default page