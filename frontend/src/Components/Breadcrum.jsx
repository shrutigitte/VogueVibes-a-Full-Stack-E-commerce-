import React from 'react'
import arrow_icon from '../Components/Assets/Frontend_Assets/breadcrum_arrow.png'
const Breadcrum = (props) => {
    const {product}=props
  return (
    <div className='flex gap-2 items-center m-4 font-medium text-lg text-emerald-700'>
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" />{product.name}
    </div>
  )
}

export default Breadcrum
