import React from 'react'
import exclusive_img from './Assets/Frontend_Assets/exclusive_image.png'
const DiscountOffers = () => {
  return (
    <div className='lg:mt-32 pt-10 p-5 flex lg:m-auto bg-gradient-to-b from-fuchsia-100 via-white to-fuchsia-50'>
      <div className='flex flex-1 flex-col justify-center'>
        <h1 className='text-4xl font-semibold'>Exclusive </h1>
        <h1 className='text-4xl font-semibold'>Offers for YOU</h1>
        <p className='font-semibold'>ONLY ON BEST SELLERS PRODUCTS</p>
        <button className='bg-indigo-500 text-white rounded-3xl mt-8 w-1/3 h-16 font-medium cursor-pointer'>Check Now</button>
      </div>
      <div className='flex flex-1 items-center justify-end pt-12'>
        <img src={exclusive_img} alt="" />
      </div>
    </div>
  )
}

export default DiscountOffers
