import React from 'react'
import Image from 'next/image'
import { Boost, Device1, atm, nfc, transaction } from './DeviceData'

const DeviceOther = () => {
  return (
    <>
       <div className='px-[10px] lg:px-[30px]'>
            <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between mt-[2rem] lg:mt-[5%] bg-white rounded-xl py-[20px] px-[35px]'>
                <div className='w-full text-ellipsis text-center text lg:text-left lg:w-[40%] flex flex-col gap-5 '>
                    <div>
                        <button className='text-[15px] font-bold bg-[#00CCFF] text-white rounded-xl p-[15px]'>
                            <a href="">ATM CARDS</a>
                        </button>
                    </div>
                    <h1 className='capitalize text-[20px] lg:text-[35px] w-full lg:w-[79%] font-extrabold leading-[44px]'>Get custom-made ATM cards customized to your taste</h1>
                    <p className='lg:w-[75%]'>Get custom-made ATM cards customized to your taste for your business with VoucherPay. Voucherpay helps curate ATM cards with top-notch security and features that meet your requirement. ATM cards are mobile-friendly and easier payment access for your customers.</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {
                            Device1.map(d=>{
                                return(
                                    <div className='flex gap-3 items-center'>
                                        <Image width={20} height={20} src={d.icon}/>
                                        <h5>{d.name}</h5>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <Image width={150} height={150} className='w-[100%] lg:w-[40%]' src="/Images/Custom-ATM.svg" />
            </div>
        </div> 
       <div className='px-[10px] lg:px-[30px]'>
            <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between mt-[2rem] lg:mt-[5%] bg-white rounded-xl py-[20px] px-[35px]'>
                <Image width={150} height={150} className='w-[100%] lg:w-[40%]' src="/Images/boost.svg" />
                <div className='w-full text lg:text-left lg:w-[40%] flex flex-col gap-5 '>
                    <div>
                        <button className='text-[15px] font-bold bg-[#00CCFF] text-white rounded-xl p-[15px]'>
                            <a href="">POS SYSTEMS</a>
                        </button>
                    </div>
                    <h1 className='capitalize text-[20px] lg:text-[35px] w-full lg:w-[77%] font-extrabold leading-[44px]'>Boost Efficiency and save time with POS systems</h1>
                    <p className='lg:w-[75%]'>Experience ease and convenience using POS systems. With POS systems tailored to your specific requirements, your transactions are secure and also protect customers’ data. You can trust our system to prioritize the safety of your business and your valued customers.</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {
                            Boost.map(d=>{
                                return(
                                    <div className='flex gap-3 items-center'>
                                        <Image width={20} height={20} src={d.icon}/>
                                        <h5 className='w-full'>{d.name}</h5>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div> 
        <div className='px-[10px] lg:px-[30px]'>
            <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between mt-[2rem] lg:mt-[5%] bg-white rounded-xl py-[20px] px-[35px]'>
                <div className='w-full text-ellipsis text-center text lg:text-left lg:w-[40%] flex flex-col gap-5 '>
                    <div>
                        <button className='text-[15px] font-bold bg-[#00CCFF] text-white rounded-xl p-[15px]'>
                            <a href="">NFC CARDS</a>
                        </button>
                    </div>
                    <h1 className='capitalize text-[20px] lg:text-[35px] w-full lg:w-[79%] font-extrabold leading-[44px]'>Unlock the power of NFC cards for your business</h1>
                    <p className='lg:w-[75%]'>Delight your customers with the convenience of NFC technology. Every business has unique requirements, and we are delighted to meet them. Customized NFC Cards make transactions easier and faster for your customers or clients.</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>
                        {
                            nfc.map(d=>{
                                return(
                                    <div className='flex gap-3 items-center'>
                                        <Image width={20} height={20} src={d.icon}/>
                                        <h5>{d.name}</h5>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <Image width={150} height={150} className='w-[100%] lg:w-[40%]' src="/Images/NFC.svg" />
            </div>
        </div> 
        <div className='px-[10px] lg:px-[30px]'>
            <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between mt-[2rem] lg:mt-[5%] bg-white rounded-xl py-[20px] px-[35px]'>
                <Image width={150} height={150} className='w-[100%] lg:w-[40%]' src="/Images/simplify.svg" />
                <div className='w-full  text lg:text-left lg:w-[40%] flex flex-col gap-5 '>
                    <div>
                        <button className='text-[15px] font-bold bg-[#00CCFF] text-white rounded-xl p-[15px]'>
                            <a href="">ATM</a>
                        </button>
                    </div>
                    <h1 className='capitalize text-[20px] lg:text-[35px] w-full lg:w-[77%] font-extrabold leading-[44px]'>Simplify your banking experience with Customized ATMs</h1>
                    <p className='lg:w-[75%]'>Upgrade your business with our Customized ATMs. at VoucherPay, we customize user-friendly machines that are tailored to meet your unique needs making banking easier than ever for your customers, improving efficiency and customer service.</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {
                            atm.map(d=>{
                                return(
                                    <div className='flex gap-3 items-center'>
                                        <Image width={20} height={20} src={d.icon}/>
                                        <h5 className='w-full'>{d.name}</h5>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div> 
        <div className='px-[10px] lg:px-[30px]'>
            <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between mt-[2rem] lg:mt-[5%] bg-white rounded-xl py-[20px] px-[35px]'>
                <div className='w-full text-ellipsis text-center text lg:text-left lg:w-[40%] flex flex-col gap-5 '>
                    <div>
                        <button className='text-[15px] font-bold bg-[#00CCFF] text-white rounded-xl p-[15px]'>
                            <a href="">NFC MACHINES</a>
                        </button>
                    </div>
                    <h1 className='capitalize text-[20px] lg:text-[35px] w-full lg:w-[79%] font-extrabold leading-[44px]'>Simplify Transactions with a Tap</h1>
                    <p className='lg:w-[75%]'>Make payments easy and swift for customers with just a tap. Customize secured NFC Machines to align with your branding and specific features and make transactions a breeze. With just a tap on your NFC-enabled device, your customers are good to go.</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>
                        {
                            transaction.map(d=>{
                                return(
                                    <div className='flex gap-3 items-center'>
                                        <Image width={20} height={20} src={d.icon}/>
                                        <h5>{d.name}</h5>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <Image width={150} height={150} className='w-[100%] lg:w-[40%]' src="/Images/NFC.svg" />
            </div>
        </div>
    </>
  )
}

export default DeviceOther