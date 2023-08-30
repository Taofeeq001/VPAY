"use client";
import React, { useState } from 'react'
import {FiArrowRight, FiArrowLeft} from 'react-icons/fi'
import Image from 'next/image'
import { testimonial } from './Data';

const Testimony = () => {
    const [currentState, setCurrentState] = useState(0);

    const handleBackward = () => {
        if (currentState <0 && currentState <=2){
            setCurrentState(currentState - 1)
        }
        else{
            setCurrentState(0)
        }
    }

    const handleNext = () => {
        if (currentState >= 0 && currentState <2) {
            setCurrentState(currentState + 1)
        }
        else{
            setCurrentState(0)
        }
    }

  return (
    <div className='container lg:mt-[3%] flex flex-col gap-[2rem]'>
        <div className='flex flex-col items-center'>
            <div>
                <button className='px-[20px] py-[15px] rounded-xl bg-[#00CCFF] text-white '>Payment</button>
            </div>
            <div className='text-center flex flex-col items-center gap-[20px] lg:gap-[25px]'>
                <h1 className='w-full lg:w-[50%] text text-4xl'>What our customers are saying</h1>
                <p className='w-full lg:w-[55%] text text-[gray] text-xl'>Voucherpay offers industry-specific, yet customizable, digital payment solutions that are designed to be easy, fast, and secure, catering to your specific needs and preferences.</p>
            </div>
        </div>
        <div className='bg-white items-start flex p-[30px]'>
        <div className='flex lg:flex-row flex-col items-center text gap-10' >
                <Image width={150} height={150} className='w-[60%] lg:w-[20%]' src={testimonial[currentState].image}/>
                <div className='flex flex-col gap-7 w-[90%] lg:w-[30%] text'>
                    <div className='flex gap-3'>
                        <Image className='w-[30px] h-[30px]' width={50} height={50} src={testimonial[currentState].icon} />
                        <h4>{testimonial[currentState].company}</h4>
                    </div>
                    <p className='text-[grey]'>{testimonial[currentState].para}</p>
                    <div>
                        <h3>{testimonial[currentState].name}</h3>
                        <p className='text-[gray]'>{testimonial[currentState].Position}</p>
                    </div>
                </div>
            </div>
            <div className='flex gap-3'>
                <button  onClick={handleBackward} className='w-[30px] h-[30px] rounded-full bg-[grey] flex items-center justify-center'><FiArrowLeft/></button>
                <button onClick={handleNext} className='w-[30px] h-[30px] rounded-full bg-[grey] flex items-center justify-center'><FiArrowRight/></button>
            </div>
        </div>
    </div>
  )
}

export default Testimony