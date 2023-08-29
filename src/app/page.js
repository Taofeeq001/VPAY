import Committed from '@/components/Landingpage/Committed'
import Hero from '@/components/Landingpage/Hero'
import { Navbar } from '@/components/navigationBar/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='bg-[#FBFBFB] py-10 px-10'>
      <Navbar />
      <Hero/>   
      <Committed/>   
    </main>
  )
}
