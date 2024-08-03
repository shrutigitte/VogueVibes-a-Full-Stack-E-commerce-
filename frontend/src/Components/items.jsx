import React from 'react'
import { Link } from 'react-router-dom'

const Items = (props) => {
  return (
    <div className='hover:scale-105 mx-2'>
      <Link to={`/product/${props.id}`} ><img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link> 
      <p>{props.name}</p>
      <div className='flex'>
        <div className='font-semibold text-xl'>
        ₹{props.new_price}
        </div>
        <div className='font-medium text-lg text-red-500 line-through'>
        ₹{props.old_price}
        </div>
      </div>
    </div>
  )
}

export default Items
