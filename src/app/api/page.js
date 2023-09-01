import ApiDetails from '@/components/ApiPage/ApiDetails'
import ApiHero from '@/components/ApiPage/ApiHero'
import Footer from '@/components/Landingpage/Footer'
import Footer1 from '@/components/Landingpage/Footer1'
import Solution from '@/components/Landingpage/Solution'
import { Navbar } from '@/components/navigationBar/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className='bg-[#FBFBFB] pt-10 w-[100%]'>
        <Navbar/>
        <ApiHero/>
        <ApiDetails/>
        <Solution/>
        <Footer1/>
        <Footer/>
    </div>
  )
}

export default page