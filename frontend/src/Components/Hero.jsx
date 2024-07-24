import React from 'react'
import hero_img from '../Components/Assets/Frontend_Assets/hero_image.png'
const Hero = () => {
  return (
    <div className='items-center justify-center'>
  
      <div id='hero-content' className=' flex  bg-gradient-to-b from-fuchsia-100  via-white to-fuchsia-50'>
       <div className='lg:flex-1 justify-center gap-5 leading-tight pl-4 lg:pl-44'>
       <a href="#"><h2 className='font-semibold text-5xl mt-36 text-fuchsia-500'>New Arrivals <br /> </h2></a>
        <p className='text-2xl font-medium mt-16 text-indigo-500'> <br />New Collections <br />For Everyone </p>
        
        
        <p className='bg-indigo-500 lg:w-1/4 pl-4 p-2 rounded-md text-white mt-40 text-xl'>Latest Collection </p>
       </div>
       <div className='items-center lg:flex-1'>
        <img className='mt-32 lg:mt-0' src={hero_img} alt="" />
       </div>
      </div>
        
      
      
      {/* <img src={hero_img} alt="" /> */}
    </div>
    
  )
};

export default Hero
