"use client"
import React, { useState } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import Image from 'next/image'
import { dropdown1, dropdown2 } from '../Landingpage/Data'

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [openProduct, setOpenProduct] = useState(false)
  const [openCompany, setOpenCompany] = useState(false)
  const handleToggle = ()=>{
    setToggle(!toggle)
  }
  const productClick = () =>{
    setOpenProduct(!openProduct)
  }
  const companyClick = () =>{
    setOpenCompany(!openCompany)
  }

  return (
    <div className='container w-full py-4 flex justify-between items-center shadow-xxl bg-white sticky top-10 px-7 rounded-lg z-50'>
      <div>
        <Image height={150} width={150} src="/Images/msme logo.png" />
      </div>
      <div className='hidden lg:flex lg:justify-between lg:items-center w-[65%]'>
        <div className='flex gap-[5rem]'>
          <div className='relative'>
            <p onClick={productClick} className='flex gap-2 cursor-pointer'>
              Products
              <Image width={10} height={10} src='/Images/Vector.svg'/>
            </p>
            <div className={openProduct? "block":'hidden'}>
              <div className='bg-[white] p-[40px] rounded-lg absolute left-[1%] top-16 w-[600px] grid grid-cols-2 gap-3'>
                {
                  dropdown1.map(d=>{
                    return(
                      <div className='flex gap-5 w-full items-center'>
                        <Image width={30} height={30} src={d.icon} />
                        <h6>{d.text}</h6>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
          <div className='relative'>
            <p onClick={companyClick} className='flex gap-2 cursor-pointer'>
              Company
              <Image width={10} height={10} src='/Images/Vector.svg'/>
            </p>
            <div className={openCompany? "block":'hidden'}>
              <div className='bg-[white] p-[40px] rounded-lg absolute left-[1%] top-16 w-[600px] grid grid-cols-2 gap-3'>
                {
                  dropdown2.map(d=>{
                    return(
                      <div className='flex gap-5 w-full items-center'>
                        <Image width={30} height={30} src={d.icon} />
                        <h6>{d.text}</h6>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
          <div>
            <p className='flex gap-2'>
              Company
              <Image width={10} height={10} src='/Images/Vector.svg'/>
            </p>
          </div>
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
