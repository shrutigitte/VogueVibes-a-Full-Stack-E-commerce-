import React,{useContext} from 'react'
import {ShopContext} from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/Frontend_Assets/dropdown_icon.png'
import Items from '../Components/items'
const ShopCategory = (props) => {
  const {all_product}=useContext(ShopContext);
  return (
    <div>
      <img className='block m-7 m-auto w-4/5' src={props.banner} alt="" />
      <div className='flex my-44 mx-12 justify-between items-center'>
        <p>
          <span className='font-semibold'>Showing 1-12 </span> out of 36 products
        </p>
        <div className='p-3 rounded-3xl '>
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className='lg:mx-5 ml-6 lg:my-40 lg:px-10 grid grid-cols-4 gap-10'> 
        {all_product.map((item,i)=>{
          if(props.category===item.category){
            return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else{
            return null;
          }
        })}
      </div>
      <div className='flex text-center justify-center items-center lg:ml-96 my-24 font-medium rounded-3xl  ml-32 lg:-w-1/6 lg:text-xl w-1/3 h-16 bg-teal-500 text-white'>
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory
