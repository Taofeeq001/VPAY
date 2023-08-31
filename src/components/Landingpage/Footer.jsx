import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='bg-[#212529] py-10'>
        <div className='flex flex-col text-[#F9FBFC]'>
            <div className='container flex w-full justify-between pb-10 border-b-2 border-b-[grey]'>
                <Image width={150} height={150} src="/Images/logo.svg"/>
                <div className='flex lg:flex-row gap-3'>
                    <Link href="www.twitter.com">
                        <Image className=' w-[25px] h-[25px] lg:w-[50px] lg:h-[50px]' width={150} height={150} src="/Images/Twitter.svg" />
                    </Link>
                    <Link href="">
                        <Image className='w-[25px] h-[25px] lg:w-[50px] lg:h-[50px]' width={150} height={150} src="/Images/Instagram.svg" />
                    </Link>
                    <Link href="">
                        <Image className='w-[25px] h-[25px] lg:w-[50px] lg:h-[50px]' width={150} height={150} src="/Images/Linkedin (1).svg" />
                    </Link>
                </div>
            </div>
            <div className='container flex items-center text-center lg:text-left gap-5 lg:gap-0 flex-col lg:flex-row w-full justify-between lg: mt-9'>
                <div className='flex flex-col lg:gap-5 w-1/2'>
                    <h3 className='text-xl lg:text-3xl'>Address</h3>
                    <p>Location: No 8, Stadium Road Ilorin, Kwara State.</p>
                    <p>Email:  Support@voucherpay.online</p>
                    <p>Phone:  + (234)8184432979</p>
                </div>
                <div className='flex w-1/2 flex-col gap-5 lg:gap-0 lg:flex-row justify-between'>
                    <div className='flex flex-col lg:gap-5'>
                        <h3 className='text-xl lg:text-3xl'>Product</h3>
                        <Link href="">API Integration</Link>
                        <Link href="">SDK Integration</Link>
                        <Link href="">Device</Link>
                        <Link href="">Software</Link>
                    </div>
                    <div className='flex flex-col lg:gap-5'>
                        <h3 className='text-xl lg:text-3xl'>Company</h3>
                        <Link href="">About Us</Link>
                        <Link href="">Pricing</Link>
                        <Link href="">FAQ</Link>
                        <Link href="">Contact</Link>
                        <Link href="">Career</Link>
                        <Link href="">Blog</Link>
                    </div>
                    <div className='flex flex-col lg:gap-5'>
                        <h3 className='text-xl lg:text-3xl'>Developer</h3>
                        <Link href="">Documentation</Link>
                    </div>
                </div>
            </div>
            <div className='container w-full items-center flex-col lg:justify-between flex lg:flex-row lg:mt-7 mt-4'>
                <div>
                    <a href="">Privacy & Policy</a>
                    <a href="">Terms of Services</a>
                </div>
                <div>
                    <p>&copy; 2023 copyright by voucherPay. All right reserved. </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer