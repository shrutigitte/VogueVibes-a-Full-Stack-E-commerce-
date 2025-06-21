
// import React from 'react';
// import { Link } from 'react-router-dom';
// import hero_img from '../Components/Assets/Frontend_Assets/hero_image.png';

// const Hero = () => {
//   return (
//     <div className='w-full bg-gradient-to-b from-fuchsia-100 via-white to-fuchsia-50 py-12 px-6'>
//       <div className='flex flex-col-reverse lg:flex-row items-center justify-between gap-8 max-w-7xl mx-auto'>

//         {/* Left Content */}
//         <div className='flex flex-col items-start gap-6 lg:pl-16'>
//           <h2 className='font-bold text-4xl md:text-5xl text-fuchsia-500 mt-10'>
//             New Arrivals
//           </h2>

//           <p className='text-xl md:text-2xl font-medium text-indigo-500'>
//             New Collections <br /> For Everyone
//           </p>

//           <Link to="/women">
//             <button className='bg-indigo-500 px-6 py-3 rounded-md text-white text-lg hover:scale-110 transition'>
//               Latest Collection
//             </button>
//           </Link>
//         </div>

//         {/* Right Image */}
//         <div className='flex justify-center lg:justify-end'>
//           <img
//             className='max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg'
//             src={hero_img}
//             alt="Hero"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React from 'react';
import { Link } from 'react-router-dom';
import hero_img from '../Components/Assets/Frontend_Assets/hero_image.png'; // or updated file path

const Hero = () => {
  return (
    <div
      className="w-full h-[90vh] bg-cover bg-center flex items-center justify-start"
      style={{
        backgroundImage: `url(${hero_img})`,
      }}
    >
      <div className="bg-white bg-opacity-80 p-8 ml-6 rounded-lg shadow-md max-w-md">
        <h2 className="font-bold text-4xl sm:text-5xl text-purple-700 mb-6">
          New Arrivals
        </h2>

        <Link to="/women">
          <button className="bg-white text-purple-700 font-semibold border border-purple-700 px-6 py-3 rounded-full shadow hover:scale-110 transition duration-300">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
