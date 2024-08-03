import React, { useContext } from 'react'
import star_icon from './Assets/Frontend_Assets/star_icon.png'
import stardull_icon from './Assets/Frontend_Assets/star_dull_icon.png'
import { ShopContext } from '../Context/ShopContext';

const ProductDisplay = (props) => {
    const {product}=props;
    const {addToCart}=useContext(ShopContext)
  return (
    <div className='flex my-44 mx-11'>
      <div className='flex gap-4'>
        <div className='flex flex-col gap-4'>
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div>
            <img className='w-screen' src={product.image} alt="" />
        </div>
      </div>
      <div className=' flex flex-col m-4'>
        <h1 className='text-4xl font-medium '>{product.name}</h1>
        <div className='flex items-center gap-1 mt-3'>
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={stardull_icon} alt="" />
            <p>122</p>
        </div>
        <div className='flex mx-10 gap-7 font-bold text-xl'>
          <div className='line-through text-slate-400'> ${product.old_price}</div>
          <div className='text-2xl text-red-600'>${product.new_price}</div>
        </div>
        <div>
          A lightweight ,usually knitted pullover shirt , close fitting and a round neckline and shortsleeves gives a chic look to one wearing it
        </div>
        <div className=''>
          <h1 className='mt-12 font-semibold text-xl text-green-800'>Size</h1>
          <div className='flex m-7 gap-5'>
            <div className='rounded-xl cursor-pointer px-4 py-3 bg-green-50 border-emerald-900'>Small</div>
            <div className='rounded-xl cursor-pointer px-4 py-3 bg-green-50 border-emerald-900'>Medium</div>
            <div className='rounded-xl cursor-pointer px-4 py-3 bg-green-50 border-emerald-900'>Large</div>
            <div className='rounded-xl cursor-pointer px-4 py-3 bg-green-50 border-emerald-900'>XL</div>
            <div className='rounded-xl cursor-pointer px-4 py-3 bg-green-50 border-emerald-900'>XXL</div>
          </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}} className='px-5 py-4 font-medium m-4 w-1/2 text-2xl rounded-3xl cursor-pointer text-white bg-red-500'>Add To Cart</button>
        <p className='mt-2 cursor-pointer'><span className='font-semibold'>Category:</span>Women,Tshirt,Crop Top</p>
        <p><span>Tags:</span>Modern,Latest</p>
      </div>
    </div>
  )
}

export default ProductDisplay
