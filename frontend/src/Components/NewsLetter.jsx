// import React from 'react'

// const NewsLetter = () => {
//   return (
//     <div className='mt-32 p-4 flex bg-gradient-to-b from-fuchsia-100 to-teal-100 gap-7 m-auto items-center justify-center flex-col mb-32'>
//       <h1 className='text-4xl font-semibold text-teal-500'>Get Exclusive Offers on your Email</h1>
//       <p className='text-lg text-fuchsia-500'>Subscribe and stay Updated</p>
//       <div className='flex items-center justify-center rounded-3xl border-solid border-teal-300'>
//         <input className='h-16 w-full p-2 rounded-xl ml-7' type="email" placeholder='Your email id' />
//         <button className='w-44 p-2 h-16 rounded-2xl bg-teal-500 text-white cursor-pointer text-3xl'>Subscribe</button>
//       </div>
//     </div>
//   ) 
// }

// export default NewsLetter
import React from 'react';

const NewsLetter = () => {
  return (
    <div className="mt-32 p-6 flex bg-gradient-to-b from-purple-100 via-purple-200 to-purple-300 gap-6 m-auto items-center justify-center flex-col mb-32 rounded-xl shadow-md">
      <h1 className="text-4xl font-bold text-purple-700 text-center">
        Get Exclusive Offers on your Email
      </h1>
      <p className="text-lg text-purple-500 text-center font-medium">
        Subscribe and stay Updated
      </p>
      <div className="flex items-center justify-center overflow-hidden rounded-full shadow-sm">
        <input
          className="h-14 w-72 px-5 text-purple-700 placeholder-purple-400 bg-white border-none focus:outline-none rounded-l-full text-lg"
          type="email"
          placeholder="Your email id"
        />
        <button className="h-14 px-6 text-lg font-semibold bg-purple-600 text-white hover:bg-purple-700 transition-all rounded-r-full">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
