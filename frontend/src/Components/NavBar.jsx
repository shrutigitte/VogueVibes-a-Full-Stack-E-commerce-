
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import cart_icon from '../Components/Assets/Frontend_Assets/cart_icon.png';
import { ShopContext } from '../Context/ShopContext';

const NavBar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className='flex justify-between items-center p-5 px-8 shadow-md'>
      {/* Logo */}
      <div>
        <p id='logo' className='text-2xl lg:text-5xl font-medium font-serif'>
          <Link to='/'>VogueVibes</Link>
        </p>
      </div>

      {/* Navigation Menu */}
      <ul className='lg:flex hidden gap-6 text-sm lg:text-lg font-medium'>
        <li onClick={() => setMenu("shop")}>
          <Link to='/'>Shop</Link>
          {menu === "shop" ? <hr className='border-b-2 border-purple-500' /> : null}
        </li>
        <li onClick={() => setMenu("men")}>
          <Link to='/men'>Men</Link>
          {menu === "men" ? <hr className='border-b-2 border-purple-500' /> : null}
        </li>
        <li onClick={() => setMenu("women")}>
          <Link to='/women'>Women</Link>
          {menu === "women" ? <hr className='border-b-2 border-purple-500' /> : null}
        </li>
        <li onClick={() => setMenu("kid")}>
          <Link to='/kid'>Kids</Link>
          {menu === "kid" ? <hr className='border-b-2 border-purple-500' /> : null}
        </li>
      </ul>

      {/* Login and Cart */}
      <div className="flex items-center gap-4">
        <Link to="/loginsignup">
          <button className="h-10 w-20 border border-teal-500 rounded-full px-3 bg-teal-600 hover:bg-teal-500 active:bg-teal-400 text-white font-medium">
            Login
          </button>
        </Link>

        <div className="relative">
          <Link to="/cart">
            <img className="h-8 w-10" alt="cart" src={cart_icon} />
          </Link>
          <div className="absolute -top-2 -right-2 w-5 h-5 text-xs flex items-center justify-center bg-red-500 text-white rounded-full">
            {getTotalCartItems()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
