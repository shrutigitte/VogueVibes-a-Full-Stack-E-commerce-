import React,{useContext} from 'react'
import {ShopContext} from '../Context/ShopContext'
const ShopCategory = () => {
  const {all_product}=useContext(ShopContext);
  return (
    <div>
      <img src={props.banner} alt="" />
    </div>
  )
}

export default ShopCategory
