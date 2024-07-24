import React from 'react'
import { FaInstagram } from 'react-icons/fa';
import { FaPinterest } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-12'>
      <div className='flex items-center gap-2'>
        <p id='logo' className=' -ml-2 text-lg lg:text-5xl mr-2 font-medium'>VogueVibes</p>
      </div>
      
        <ul className='flex list-none gap-12 text-teal-500'>
            <li className='cursor-pointer'>Company</li>
            <li className='cursor-pointer'>Products</li>
            <li className='cursor-pointer'>Offices</li>
            <li className='cursor-pointer'>About</li>
            <li className='cursor-pointer'>Contact</li>
        </ul>
        <div className='flex gap-3'>
            <a href="https://www.instagram.com" target='_blank'><FaInstagram/></a>
            <a href="https://www.facebook.com" target='_blank'><FaFacebookF/></a>
            <a href="https://in.pinterest.com" target='_blank'><FaPinterest/></a>
        </div>
        <div className='flex flex-col items-center gap-7 w-full mb-7 text-xl'>
            <hr className='w-3/4 rounded-xl' />
            <p>Copyright @2024-All Rights reserved</p>
        </div>
    </div>
  )
}

export default Footer
