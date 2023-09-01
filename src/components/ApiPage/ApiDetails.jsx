import React from 'react'
import Props2 from '../AboutPage/Props2'
import Props1 from '../AboutPage/Props1'

const ApiDetails = () => {
  return (
    <>
        <div className='px-[1rem] mt-[40px]'>
            <Props2
                btn2= 'Wallet'
                heading = "API Integration for Wallet Apps"
                paragraph = "Our APIs allow developers easily build custom payment wallet apps that allow you to send and receive payments through other payment gateways such as transfers, banks etc. VoucherPay wallet APIs are specially designed to suit the payment needs of businesses that wish to leverage in-app digital payments to expand their customer outreach."
                Image = "/Images/one.svg"
            />
        </div>
        <div className='px-[1rem] mt-[40px]'>
            <Props1
                btn1= 'NFC Card'
                heading = "API Integration for NFC Cards"
                paragraph = "VoucherPay enables developers to build NFC Cards with our NFC Cards APIs. This integration enables you to send and receive payments through payment terminals simply by tapping your card on a reader, giving your customers or clients a quick, convenient and safer payment option."
                Image = "/Images/two.svg"
            />
        </div>
        <div className='px-[1rem] mt-[40px]'>
            <Props2
                btn2= 'ATM Card'
                heading = "API Integration for Debit Cards"
                paragraph = "With our APIs, developers can build custom-made debit cards for your business. This integration enables your debit cards to work with different banks’ ATMs for transfers, withdrawal of cash, checking your account balance and performing other banking transactions easily and conveniently."
                Image = "/Images/three.svg"
            />
        </div>
        <div className='px-[1rem] mt-[40px]'>
            <Props1
                btn1= 'POS Machine'
                heading = "API Integration for POS Machines"
                paragraph = "Our well-documented APIs allow developers to develop point-of-sale machines. With custom-made point-of-sale machines, businesses can accept various payment methods, like debit cards or mobile wallets and automatically update the inventory when items are sold. With your POS machine, you can also issue an invoice, tickets or receipts to customers."
                Image = "/Images/four.svg"
            />
        </div>
        <div className='px-[1rem] mt-[40px]'>
            <Props2
                btn2= 'ATM Machine'
                heading = "API Integration for ATMs"
                paragraph = "Voucherpay provides APIs for developers to quickly build and develop secure automated teller machines (ATM). This integration allows ATMs to securely access your account information and perform banking transactions. With the ATM you can withdraw cash, check your account balance, perform transfers between accounts and do other payment activities conveniently."
                Image = "/Images/five.svg"
            />
        </div>
    </>
  )
}

export default ApiDetails