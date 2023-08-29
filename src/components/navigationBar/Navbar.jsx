"use client"
import React, { useState } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import Image from 'next/image'

export const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const handleToggle = ()=>{
    setToggle(!toggle)
  }

  return (
    <div className='container w-full py-4 flex justify-between items-center shadow-xxl bg-white sticky top-10 px-7 rounded-lg z-50'>
      <div>
        <Image height={150} width={150} src="/Images/msme logo.png" />
      </div>
      <div className='hidden lg:flex lg:justify-between lg:items-center w-[65%]'>
        <div className='flex gap-[5rem]'>
          <a href="">Products</a>
          <a href="">Company</a>
          <a href="">Developer</a>
        </div>
        <div className='flex gap-[3rem]'>
          <button className='border-[1px] border-blue-400 py-[10px] px-[18px] rounded-xl'><a className='text-[20px] text-[#0CF]' href="">Merchant Login</a></button>
          <button className='bg-[#0CF] py-[10px] px-[18px] rounded-xl'><a className='text-white' href="">Sign up</a></button>
        </div>
      </div>
      <div onClick={handleToggle} className='block cursor-pointer lg:hidden'>
          <GiHamburgerMenu />
      </div>
      <div className={toggle? "flex flex-col bg-green-200 gap-[1rem] items-center top-[5rem] overflow-hidden left-0 absolute w-full h-[30vh] justify-center ease-in duration-500":'flex flex-col ease-in duration-300 bg-green-200 gap-[1rem] absolute w-full h-0 overflow-hidden justify-center items-center left-0 top-[7rem] lg:hidden'}>
        <a href="">Products</a>
        <a href="">Company</a>
        <a href="">Developer</a>
        <button><a href="">Merchant Login</a></button>
        <button><a href="">Sign up</a></button>
      </div>
    </div>
  )
}
