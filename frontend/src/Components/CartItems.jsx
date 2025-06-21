// import React, { useContext } from 'react'
// import { ShopContext } from '../Context/ShopContext'
// import remove_icon from './Assets/Frontend_Assets/cart_cross_icon.png'
// import { Link } from 'react-router-dom'

// const CartItems = () => {
//   const { getTotalCartAmount, all_product, cartItems, RemoveFromCart } = useContext(ShopContext);

//   const cartIsEmpty = Object.values(cartItems).every(count => count === 0);

//   if (cartIsEmpty) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-[60vh] text-center py-20">
//         <h2 className="text-3xl font-semibold text-purple-700 mb-6">Your Cart is Empty</h2>
//         <Link to="/" className="bg-purple-100 text-purple-700 px-6 py-2 rounded-md hover:bg-purple-200 transition-all">
//           Continue Shopping
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="mx-4 lg:mx-24 my-20">
//       <div className="grid grid-cols-6 items-center gap-4 px-2 lg:px-5 text-base lg:text-lg font-semibold border-b pb-2">
//         <p>Products</p>
//         <p>Title</p>
//         <p>Price</p>
//         <p>Quantity</p>
//         <p>Total</p>
//         <p>Remove</p>
//       </div>

//       {all_product.map((e) => {
//         if (cartItems[e.id] > 0) {
//           return (
//             <div key={e.id} className="grid grid-cols-6 items-center gap-4 px-2 lg:px-5 py-4 border-b text-sm lg:text-base">
//               <img className="h-20 object-contain" src={e.image} alt={e.name} />
//               <p>{e.name}</p>
//               <p>${e.new_price}</p>
//               <div className="bg-gray-100 w-12 text-center rounded">{cartItems[e.id]}</div>
//               <p>${e.new_price * cartItems[e.id]}</p>
//               <img className="w-4 cursor-pointer" src={remove_icon} onClick={() => RemoveFromCart(e.id)} alt="remove" />
//             </div>
//           );
//         }
//         return null;
//       })}

//       <div className="mt-12 lg:mx-24">
//         <h2 className="text-xl font-semibold mb-4 text-purple-700">Cart Total</h2>
//         <div className="text-gray-800 space-y-2 border rounded-lg p-6">
//           <div className="flex justify-between font-medium">
//             <p>Subtotal</p>
//             <p>${getTotalCartAmount()}</p>
//           </div>
//           <div className="flex justify-between font-medium">
//             <p>Shipping Fee</p>
//             <p>Free</p>
//           </div>
//           <div className="flex justify-between font-semibold text-purple-700 border-t pt-2">
//             <h3>Total</h3>
//             <h3>${getTotalCartAmount()}</h3>
//           </div>
//         </div>

//         <div className="mt-8">
//           <p className="text-fuchsia-500 font-medium">
//             If you have a <span className="font-semibold">PROMO CODE</span>, enter it here:
//           </p>
//           <div className="flex mt-2 max-w-md">
//             <input
//               className="bg-purple-50 border border-purple-300 px-4 py-2 text-purple-700 placeholder-purple-400 rounded-l-md w-full"
//               type="text"
//               placeholder="PROMO CODE"
//             />
//             <button className="bg-purple-500 text-white px-4 py-2 rounded-r-md hover:scale-105 transition">
//               SUBMIT
//             </button>
//           </div>
//         </div>

//         <button className="mt-8 bg-purple-500 text-white px-6 py-3 rounded-md hover:scale-105 transition">
//           Proceed To Checkout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CartItems;

import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import remove_icon from './Assets/Frontend_Assets/cart_cross_icon.png';
import { Link, useNavigate } from 'react-router-dom';

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, RemoveFromCart } = useContext(ShopContext);
  const navigate = useNavigate();
  const cartIsEmpty = Object.values(cartItems).every(count => count === 0);

  if (cartIsEmpty) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center py-20">
        <h2 className="text-3xl font-semibold text-purple-700 mb-6">Your Cart is Empty</h2>
        <Link to="/" className="bg-purple-100 text-purple-700 px-6 py-2 rounded-md hover:bg-purple-200 transition-all">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-4 lg:mx-24 my-20">
      {/* Headers */}
      <div className="grid grid-cols-6 items-center gap-4 px-2 lg:px-5 text-base lg:text-lg font-semibold border-b pb-2">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      {/* Items in cart */}
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id} className="grid grid-cols-6 items-center gap-4 px-2 lg:px-5 py-4 border-b text-sm lg:text-base">
              <img className="h-20 object-contain" src={e.image} alt={e.name} />
              <p>{e.name}</p>
              <p>${e.new_price}</p>
              <div className="bg-gray-100 w-12 text-center rounded">{cartItems[e.id]}</div>
              <p>${e.new_price * cartItems[e.id]}</p>
              <img
                className="w-4 cursor-pointer"
                src={remove_icon}
                onClick={() => RemoveFromCart(e.id)}
                alt="remove"
              />
            </div>
          );
        }
        return null;
      })}

      {/* Cart Summary */}
      <div className="mt-12 lg:mx-24">
        <h2 className="text-xl font-semibold mb-4 text-purple-700">Cart Total</h2>
        <div className="text-gray-800 space-y-2 border rounded-lg p-6 bg-purple-50">
          <div className="flex justify-between font-medium">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <div className="flex justify-between font-medium">
            <p>Shipping Fee</p>
            <p>Free</p>
          </div>
          <div className="flex justify-between font-semibold text-purple-700 border-t pt-2">
            <h3>Total</h3>
            <h3>${getTotalCartAmount()}</h3>
          </div>
        </div>

        {/* Promo Code */}
        <div className="mt-8">
          <p className="text-fuchsia-500 font-medium">
            If you have a <span className="font-semibold">PROMO CODE</span>, enter it here:
          </p>
          <div className="flex mt-2 max-w-md">
            <input
              className="bg-purple-50 border border-purple-300 px-4 py-2 text-purple-700 placeholder-purple-400 rounded-l-md w-full"
              type="text"
              placeholder="PROMO CODE"
            />
            <button className="bg-purple-500 text-white px-4 py-2 rounded-r-md hover:scale-105 transition">
              SUBMIT
            </button>
          </div>
        </div>

        {/* Checkout Button */}
        <button
          onClick={() => navigate('/checkout')}
          className="mt-8 bg-purple-500 text-white px-6 py-3 rounded-md hover:scale-105 transition"
        >
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

export default CartItems;
