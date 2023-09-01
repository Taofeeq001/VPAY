import Corevalue from '@/components/AboutPage/Corevalue'
import Others from '@/components/AboutPage/Others'
import Voucherteam from '@/components/AboutPage/Voucherteam'
import AboutHero from '@/components/AboutPage/aboutHero'
import Footer from '@/components/Landingpage/Footer'
import Footer1 from '@/components/Landingpage/Footer1'
import Solution from '@/components/Landingpage/Solution'
import React from 'react'


const page = () => {
  return (
    <div className='bg-[#FBFBFB] pt-10 w-[100%]'>
      <AboutHero/>
      <Others/>
      <Corevalue/>
      <Voucherteam/>
      <Solution/>
      <Footer1/>
      <Footer/>
    </div>
  )
}

export default page