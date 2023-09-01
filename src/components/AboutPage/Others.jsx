import React from 'react'
import Nigeriaprops from './Nigeriaprops'
import Props1 from './Props1'
import Props2 from './Props2'

const Others = () => {
  return (
    <>
      <div className='px-[1rem] mt-[40px]'>
        <Nigeriaprops
            btn1 = 'Case Study'
            heading = "the nigeria case study"
            paragraph = "Commercial banks, Investment banks, Merchant Banks and Fintechs characterize the Nigerian financial industry today. These institutions are formal According to the CBN report, the average Banking density in the urban area is one financial outlet to 32,700 inhabitants."
            btn2 = 'Read More'
            Image = "/Images/Nigeria.svg"
        />
      </div>
      <div className='px-[1rem] mt-[40px]'>
        <Props1
            btn1= 'Our Services'
            heading = "Simplify payment processing, improve cash flow."
            paragraph = "We offer customized payment solutions that can be tailored to the specific needs of your Cooperative and business. Our payment processing experts will work with you to develop a solution that is optimized for your business, whether you need to process large volumes of transactions or require complex payment integrations."
            Image = "/Images/SimpPayment.svg"
        />
      </div>
      <div className='px-[1rem] mt-[40px]'>
        <Props2
            btn2= 'Our Vision'
            heading = "Digital payment solutions for businesses and cooperatives"
            paragraph = "We are providing digital payment solutions for businesses and cooperatives, minimizing payment hurdles and bridging the gap between the underserved and technology. Achieving swift and seamless payment processing is the goal for us at VoucherPay, by building an excellent API solution that can be integrated to suit your preferences and easy-to-navigate payment platforms."
            Image = "/Images/DigPayment.svg"
        />
      </div>

    </>
  )
}

export default Others