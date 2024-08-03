import React from 'react'
import data_product from './Assets/Frontend_Assets/data'
import Items from './items'
const RelatedProducts = () => {
  return (
    <div className='flex flex-col items-center gap-2 h-screen '>
      <h1 className='font-semibold text-3xl'>Related Products</h1>
      <hr className='w-48 h-2' />
      <div className='mt-14 flex gap-7'>
        {data_product.map((item,i)=>{
            return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default RelatedProducts
