import Footer from '@/components/Landingpage/Footer'
import Footer1 from '@/components/Landingpage/Footer1'
import SDKDetails from '@/components/SDKPage/SDKDetails'
import SdkHero from '@/components/SDKPage/SdkHero'
import { Navbar } from '@/components/navigationBar/Navbar'
import React from 'react'

const page = () => {
  return (
    <div  className='bg-[#FBFBFB] pt-10 w-[100%]'>
        <Navbar/>
        <SdkHero/>
        <SDKDetails/>
        <Footer1/>
        <Footer/>
    </div>
  )
}

export default page