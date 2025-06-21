
import React, { useContext, useState } from 'react';
import star_icon from './Assets/Frontend_Assets/star_icon.png';
import stardull_icon from './Assets/Frontend_Assets/star_dull_icon.png';
import { ShopContext } from '../Context/ShopContext';

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("Medium");
  const [showLimitMsg, setShowLimitMsg] = useState(false);

  const increaseQty = () => {
    setQuantity((prev) => {
      const next = Math.min(prev + 1, 5);
      setShowLimitMsg(next === 5);
      return next;
    });
  };

  const decreaseQty = () => {
    setQuantity((prev) => {
      const next = Math.max(prev - 1, 1);
      setShowLimitMsg(false);
      return next;
    });
  };

  return (
    <div className='flex flex-wrap gap-12 my-20 mx-10'>
      {/* Image Section */}
      <div className='flex justify-center w-full md:w-auto'>
        <img className='w-[650px] h-auto' src={product.image} alt={product.name} />
      </div>

      {/* Product Info Section */}
      <div className='flex flex-col max-w-xl'>
        <h1 className='text-4xl font-medium'>{product.name}</h1>

        <div className='flex items-center gap-1 mt-3'>
          {[...Array(4)].map((_, i) => (
            <img key={i} src={star_icon} alt='star' />
          ))}
          <img src={stardull_icon} alt='dull star' />
          <p>122</p>
        </div>

        <div className='flex gap-7 font-bold text-xl my-4'>
          <div className='line-through text-slate-400'>${product.old_price}</div>
          <div className='text-2xl text-red-600'>${product.new_price}</div>
        </div>

        <p className='my-4'>
          A lightweight, knitted pullover shirt with a round neckline and short sleeves gives a chic look.
        </p>

        {/* Size Selection */}
        <h1 className='mt-6 font-semibold text-xl text-green-800'>Select Size</h1>
        <div className='flex m-4 gap-5'>
          {["S", "M", "L", "XL", "XXL"].map((size) => (
            <div
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`rounded-xl cursor-pointer px-4 py-2 border ${
                selectedSize === size
                  ? 'bg-green-300 border-green-700'
                  : 'bg-green-50 border-emerald-900'
              }`}
            >
              {size}
            </div>
          ))}
        </div>

        {/* Quantity Selector */}
        <div className='flex items-center gap-4 mb-2'>
          <button onClick={decreaseQty} className='px-4 py-2 bg-gray-200 rounded-full'>-</button>
          <span className='text-lg'>{quantity}</span>
          <button onClick={increaseQty} className='px-4 py-2 bg-gray-200 rounded-full'>+</button>
        </div>

        {/* Limit Warning */}
        {showLimitMsg && (
          <p className="text-red-600 font-medium mt-1">
            Sorry, due to limited supply you cannot purchase more than 5
          </p>
        )}

        {/* Add to Cart */}
        <button
          onClick={() => addToCart(product.id, quantity)}
          className='px-5 py-4 font-medium w-1/2 text-2xl rounded-3xl text-white bg-red-500 my-4'
        >
          Add To Cart
        </button>

        <p className='mt-2'><span className='font-semibold'>Category:</span> Women, T-shirt, Crop Top</p>
        <p><span className='font-semibold'>Tags:</span> Modern, Latest</p>
      </div>
    </div>
  );
};

export default ProductDisplay;
