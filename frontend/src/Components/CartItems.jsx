import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import remove_icon from './Assets/Frontend_Assets/cart_cross_icon.png'
const CartItems = () => {
    const {all_product,cartItems,RemoveFromCart}=useContext(ShopContext);
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
        <div>
            <div>
                <h1>Cart Total:-</h1>
                <div>
                    <div className='flex font-bold items-center ml-32 gap-96'>
                        <p>Subtotal</p>
                        <p className='font-semibold ml-96'>${0}</p>
                    </div>
                    <hr />
                    <div>
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div>
                        <h3>Total:-</h3>
                        <h3>${0}</h3>
                    </div>
                </div>
                <button>Proceed TO CheckOut</button>
            </div>
        </div>
        
      
    </div>
  )
}

export default CartItems
