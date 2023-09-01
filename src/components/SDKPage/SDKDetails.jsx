import React from 'react'
import Props2 from '../AboutPage/Props2'
import Props1 from '../AboutPage/Props1'

const SDKDetails = () => {
  return (
    <>
        <div className='px-[1rem] mt-[40px]'>
            <Props2
                btn2= 'Wallet'
                heading = "SDK Integration for Wallet Apps"
                paragraph = "VoucherPay’s wallet SDK integration enables developers to build wallet apps that receive card and account transfer payments from your customers and clients in-app, making transactions secure, smoother and more efficient for your users."
                Image = "/Images/three.svg"
            />
        </div>
        <div className='px-[1rem] mt-[40px]'>
            <Props1
                btn1= 'NFC Card'
                heading = "SDK for NFC cards"
                paragraph = "Our SDKs allow developers to integrate NFC card usability into your app. It allows your app to accept NFC payments through NFC cards. This integration expands the possibilities of your business and makes it user-friendly for NFC card users."
                Image = "/Images/two.svg"
            />
        </div>
        <div className='px-[1rem] mt-[40px]'>
            <Props2
                btn2= 'ATM Card'
                heading = "SDK for ATM Debit Cards"
                paragraph = "With VoucherPay’s SDK integration, developers can integrate ATM debit card compatibility. Our SDKs enable your apps to work smoothly with ATM cards, it allows it securely process transactions, check balances and perform other payment banking tasks using ATM cards. This integration makes it convenient for your users to access and manage their bank accounts directly from your app."
                Image = "/Images/three.svg"
            />
        </div>
        <div className='px-[1rem] mt-[40px]'>
            <Props1
                btn1= 'POS Machine'
                heading = "SDK Integration for POS Machines"
                paragraph = "Voucherpay Point-of-sale machine SDK allows developers to integrate seamless payment solutions to your app using the point-of-sale machine. This integration allows your app to accept payments, print receipts, tickets and invoices. It also allows you to manage transactions directly through the POS machine, making it easier for businesses to handle customer payments smoothly and efficiently."
                Image = "/Images/four.svg"
            />
        </div>
        <div className='px-[1rem] mt-[40px]'>
            <Props2
                btn2= 'ATM Machine'
                heading = "SDK Integration for ATM Machine"
                paragraph = "With VoucherPay’s SDK integration developers can integrate automated teller machine compatibility with your app. Our integration allows your app to carry out tasks like cash withdrawals, and checking balances directly from the ATM. It enhances the convenience and flexibility of banking for your users."
                Image = "/Images/five.svg"
            />
        </div>
    </>
  )
}

export default SDKDetails