import Hero from '@/components/Landingpage/Hero'
import { Navbar } from '@/components/navigationBar/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero/>      
    </main>
  )
}
