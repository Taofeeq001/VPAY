import Committed from '@/components/Landingpage/Committed'
import Growth from '@/components/Landingpage/Growth'
import Hero from '@/components/Landingpage/Hero'
import PaymentSol from '@/components/Landingpage/PaymentSol'
import Services from '@/components/Landingpage/Services'
import { Navbar } from '@/components/navigationBar/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='bg-[#FBFBFB] py-10'>
      <Navbar />
      <Hero/>   
      <Committed/>   
      <Growth/>
      <Services/>
      <PaymentSol/>
    </main>
  )
}
