import React from 'react'

const DescriptionBox = () => {
  return (
    <div className='mx-40 my-44'>
      <div className='flex '>
        <div className='flex items-center justify-center text-xl w-44 h-20'>Description</div>
        <div className='bg-yellow-50'>Reviews (122)</div>
      </div>

      <div className='flex flex-col gap-6 bg-slate-50 pb-20'>
        <p>E-commerce (electronic commerce) is the buying and selling of goods and services, or the transmitting of funds or data, over an electronic network, primarily the internet. These e-commerce transactions typically fall within four types: business-to-business (B2B), business-to-consumer (B2C), consumer-to-consumer or consumer-to-business.</p>
        
        <p> E-commerce (electronic commerce) is the exchange of goods and services and the transmission of funds and data over the internet. E-commerce relies on technology and digital platforms, including websites, mobile apps and social media to make buying and selling possible. </p>
      </div>
    </div>
  )
}

export default DescriptionBox
