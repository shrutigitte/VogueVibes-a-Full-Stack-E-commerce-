import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import remove_icon from './Assets/Frontend_Assets/cart_cross_icon.png'
const CartItems = () => {
    const {getTotalCartAmount,all_product,cartItems,RemoveFromCart}=useContext(ShopContext);
  return (
    <div className=' mx-24 my-40'>
        <div className='grid grid-cols-6 items-center gap-20 px-5 text-2xl font-semibold' >
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr className='h-1 bg-slate-50' />
        {all_product.map((e)=>{
            if(cartItems[e.id]>0)
            {
                return <div className='' >
                <div className='text-lg grid grid-cols-6 items-center gap-20 px-5 font-medium'>
                    <img className='h-24 ' src={e.image} alt="" />
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className='bg-[#fff7]  w-16 h-12 '>{cartItems[e.id]}</button>
                    <p>${e.new_price*cartItems[e.id]}</p>
                    <img className='w-4 my-9' src={remove_icon} onClick={()=>{RemoveFromCart(e.id)}} alt="remove" />
                </div>
                <hr />
            </div>
            }
            return null;
        })}
        <div className='mx-24 my-5 outline-none'>
            <div className='flex-1 flex-col mr-48'>
                <h1>Cart Total:-</h1>
                <div>
                    <div className='flex font-bold items-center ml-32 px-56'>
                        <p>Subtotal</p>
                        <p className='font-semibold ml-96'>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className='flex font-bold items-center ml-32 px-56'>
                        <p>Shipping Fee</p>
                        <p className='font-semibold ml-96'>Free</p>
                    </div>
                    <hr />
                    <div className='flex font-bold items-center ml-32 px-56'>
                        <h3>Total:-</h3>
                        <h3 className='font-semibold ml-96 pl-2' >${getTotalCartAmount()}</h3>
                    </div>
                </div>
            <div className='my-10 flex-1 text-xl font-medium'>
                <p className='text-fuchsia-400'>If you have a <span className='font-semibold text-fuchsia-500'>PROMO CODE</span> ,Enter it here</p>
                <div className=' h-12 mt-4 pl-14'>
                    <input className='bg-green-50 px-4 py-1 rounded-l-2xl text-fuchsia-500 placeholder-fuchsia-500' type="text" placeholder='PROMO CODE' />
                    <button className='px-4 text-white py-1 bg-teal-500  rounded-r-2xl'>SUBMIT</button>
                </div>
            </div>
                <button className='w-56 h-12 my-6 cursor-pointer bg-teal-500 text-white font-semibold hover:scale-105'>Proceed TO Checkout</button>
            </div>
        </div>
        
      
    </div>
  )
}

export default CartItems
