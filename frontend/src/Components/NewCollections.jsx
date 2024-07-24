import React from 'react'
import new_collection from './Assets/Frontend_Assets/new_collections'
import Item from './items'
const NewCollections = () => {
  return (
    <div className='flex flex-col items-center gap-3'>
      <h1 className='text-4xl text-teal-500 font-semibold pt-10'>New Collections</h1> 
      <hr className='w-48 h-2 rounded-xl ' />
      <div className='grid grid-cols-4 gap-7 mt-32 px-2'>
        {new_collection.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default NewCollections
