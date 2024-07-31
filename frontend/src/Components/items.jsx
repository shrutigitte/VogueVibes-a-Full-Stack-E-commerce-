import React from 'react'
import { Link } from 'react-router-dom'

const items = (props) => {
  return (
    <div>
      <Link to={`/product/${props.id}`} ><img src={props.image} alt="" /></Link> 
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

export default items
