import React from 'react'

const LoginSignUp = () => {
  return (
    <div className='w-full pt-24 pb-24 bg-fuchsia-100 mb-6'>
      <div className='w-1/3 rounded-xl bg-teal-300 m-auto px-10 py-10'>
        <h1 className='mx-5 text-fuchsia-500 font-semibold text-3xl'>SIGN UP</h1>
        <div className='flex flex-col gap-7 mt-7'>
          <input className='h-7 text-xl rounded-lg pl-5 text-fuchsia-500 placeholder-fuchsia-500' type="text" placeholder='Your Name' />
          <input className='h-7 text-xl rounded-lg pl-5 text-fuchsia-500 placeholder-fuchsia-500' type="email" placeholder='Email Address' />
          <input className='h-7 text-xl rounded-lg pl-5 text-fuchsia-500 placeholder-fuchsia-500' type="password" placeholder='Password' />  
        </div>   
        <button className='w-1/2 my-5 cursor-pointer rounded-xl font-medium text-white ml-28 h-10 bg-teal-600' type="">Continue</button>
        <p className='text-white font-medium'>Already have an account? <span className=' text-fuchsia-500'>Login Here</span></p>
        <div className='flex items-center mt-6 gap-5 font-medium text-teal-700'>
          <input type="checkbox" name='' id='' />
          <p>By continuing, I agree to use the terms of our privacy Policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignUp
