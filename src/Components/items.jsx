import React from 'react'

const items = (props) => {
  return (
    <div>
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className='flex'>
        <div className='font-semibold text-xl'>
        ₹{props.new_price}
        </div>
        <div className='font-medium text-lg'>
        ₹{props.old_price}
        </div>
      </div>
    </div>
  )
}

export default items
