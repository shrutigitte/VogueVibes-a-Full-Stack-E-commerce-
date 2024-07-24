import React from 'react'
import data_product from './Assets/Frontend_Assets/data'
import Item from './items'
const Popular = () => {
  return (
    <div className=' p-3 flex flex-col items-center gap-3 h-screen'>
      <h1 className='font-semibold text-teal-500 text-5xl'>Popular in Women</h1>
      <hr className='w-48 h-2 rounded-xl' />
      <div className='flex mt-14'>
        {data_product.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default Popular
