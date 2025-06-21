
// import React, { useContext, useState } from 'react';
// import { Link } from 'react-router-dom';
// import cart_icon from '../Components/Assets/Frontend_Assets/cart_icon.png';
// import { ShopContext } from '../Context/ShopContext';

// const NavBar = () => {
//   const [menu, setMenu] = useState("shop");
//   const { getTotalCartItems } = useContext(ShopContext);

//   return (
//     <div className='flex justify-between items-center p-5 px-8 shadow-md'>
//       {/* Logo */}
//       <div>
//         <p id='logo' className='text-2xl lg:text-5xl font-medium font-serif'>
//           <Link to='/'>VogueVibes</Link>
//         </p>
//       </div>

//       {/* Navigation Menu */}
//       <ul className='lg:flex hidden gap-6 text-sm lg:text-lg font-medium'>
//         <li onClick={() => setMenu("shop")}>
//           <Link to='/'>Shop</Link>
//           {menu === "shop" ? <hr className='border-b-2 border-purple-500' /> : null}
//         </li>
//         <li onClick={() => setMenu("men")}>
//           <Link to='/men'>Men</Link>
//           {menu === "men" ? <hr className='border-b-2 border-purple-500' /> : null}
//         </li>
//         <li onClick={() => setMenu("women")}>
//           <Link to='/women'>Women</Link>
//           {menu === "women" ? <hr className='border-b-2 border-purple-500' /> : null}
//         </li>
//         <li onClick={() => setMenu("kid")}>
//           <Link to='/kid'>Kids</Link>
//           {menu === "kid" ? <hr className='border-b-2 border-purple-500' /> : null}
//         </li>
//       </ul>

//       {/* Login and Cart */}
//       <div className="flex items-center gap-4">
//         <Link to="/loginsignup">
//           <button className="h-10 w-20 border border-teal-500 rounded-full px-3 bg-teal-600 hover:bg-teal-500 active:bg-teal-400 text-white font-medium">
//             Login
//           </button>
//         </Link>

//         <div className="relative">
//           <Link to="/cart">
//             <img className="h-8 w-10" alt="cart" src={cart_icon} />
//           </Link>
//           <div className="absolute -top-2 -right-2 w-5 h-5 text-xs flex items-center justify-center bg-red-500 text-white rounded-full">
//             {getTotalCartItems()}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NavBar;
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import cart_icon from '../Components/Assets/Frontend_Assets/cart_icon.png';
import { ShopContext } from '../Context/ShopContext';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';

const NavBar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='w-full fixed top-0 z-50 bg-white shadow-md'>
      <div className='flex justify-between items-center p-5 px-6 md:px-8'>
        {/* Logo */}
        <p id='logo' className='text-2xl md:text-4xl font-medium font-serif'>
          <Link to='/'>VogueVibes</Link>
        </p>

        {/* Hamburger Icon */}
        <div className="md:hidden text-3xl text-purple-600 cursor-pointer" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
        </div>

        {/* Desktop Navigation Menu */}
        <ul className='hidden md:flex gap-6 text-sm md:text-lg font-medium'>
          {['shop', 'men', 'women', 'kid'].map((item) => (
            <li key={item} onClick={() => setMenu(item)}>
              <Link to={item === 'shop' ? '/' : `/${item}`}>{item.charAt(0).toUpperCase() + item.slice(1)}</Link>
              {menu === item && <hr className='border-b-2 border-purple-500' />}
            </li>
          ))}
        </ul>

        {/* Login + Cart */}
        <div className="flex items-center gap-3 md:gap-4">
          <Link to="/loginsignup">
            <button className="h-9 md:h-10 w-20 border border-teal-500 rounded-full px-3 bg-teal-600 hover:bg-teal-500 text-white font-medium text-sm">
              Login
            </button>
          </Link>

          <div className="relative">
            <Link to="/cart">
              <img className="h-7 md:h-8 w-8 md:w-10" alt="cart" src={cart_icon} />
            </Link>
            <div className="absolute -top-2 -right-2 w-5 h-5 text-xs flex items-center justify-center bg-red-500 text-white rounded-full">
              {getTotalCartItems()}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white px-6 py-4 space-y-4 text-center border-t">
          {['shop', 'men', 'women', 'kid'].map((item) => (
            <div key={item} onClick={() => { setMenu(item); setMobileMenuOpen(false); }}>
              <Link to={item === 'shop' ? '/' : `/${item}`} className="block text-lg text-purple-600 font-semibold">
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavBar;
