import Others from '@/components/AboutPage/Others'
import AboutHero from '@/components/AboutPage/aboutHero'
import React from 'react'


const page = () => {
  return (
    <div className='bg-[#FBFBFB] pt-10 w-[100%]'>
      <AboutHero/>
      <Others/>
    </div>
  )
}

export default page