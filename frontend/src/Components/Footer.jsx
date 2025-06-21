
import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookF } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-8 bg-purple-200 px-4 py-10'>
      {/* Logo */}
      <p id='logo' className='text-3xl lg:text-5xl font-medium font-cursive text-purple-900'>
        VogueVibes
      </p>

      {/* Navigation Links */}
      <ul className='flex flex-col sm:flex-row gap-4 sm:gap-8 text-teal-500 text-lg sm:text-xl text-center'>
        <li className='cursor-pointer hover:underline'>Company</li>
        <li className='cursor-pointer hover:underline'>Products</li>
        <li className='cursor-pointer hover:underline'>Offices</li>
        <li className='cursor-pointer hover:underline'>About</li>
        <li className='cursor-pointer hover:underline'>Contact</li>
      </ul>

      {/* Social Icons */}
      <div className='flex gap-5 text-3xl text-purple-800'>
        <a
          className='p-2 rounded-lg hover:bg-purple-800 hover:text-white transition-all'
          href="https://www.instagram.com"
          target='_blank'
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          className='p-2 rounded-lg hover:bg-purple-800 hover:text-white transition-all'
          href="https://www.facebook.com"
          target='_blank'
          rel="noreferrer"
        >
          <FaFacebookF />
        </a>
        <a
          className='p-2 rounded-lg hover:bg-purple-800 hover:text-white transition-all'
          href="https://twitter.com"
          target='_blank'
          rel="noreferrer"
        >
          <FaSquareXTwitter />
        </a>
      </div>

      {/* Copyright */}
      <div className='w-full flex flex-col items-center gap-4 mt-4 text-center text-sm sm:text-base'>
        <hr className='w-3/4 border-t border-gray-300' />
        <p className='text-black'>Copyright © 2024 - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
