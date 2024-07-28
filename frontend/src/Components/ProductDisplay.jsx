import React from 'react'
import star_icon from './Assets/Frontend_Assets/star_icon.png'
import stardull_icon from './Assets/Frontend_Assets/star_dull_icon.png'

const ProductDisplay = (props) => {
    const {product}=props;
  return (
    <div className='flex my-44'>
      <div className='flex gap-4'>
        <div className='flex flex-col gap-4'>
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div>
            <img className='w-screen' src={product.image} alt="" />
        </div>
      </div>
      <div>
        <h1>{product.name}</h1>
        <div>
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={stardull_icon} alt="" />
            <p>122</p>
        </div>
        <div>
          <div>${product.old_price}</div>
          <div>${product.new_price}</div>
        </div>
        <div>
          A lightweight ,usually knitted pullover shirt , close fitting and a round neckline and shortsleeves gives a chic look to one wearing it
        </div>
        <div>
          <h1>Size</h1>
          <div>
            <div>Small</div>
            <div>Medium</div>
            <div>Large</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button>Add TO Cart</button>
        <p><span>Category:</span>Women,Tshirt,Crop Top</p>
        <p><span>Tags:</span>Modern,Latest</p>
      </div>
    </div>
  )
}

export default ProductDisplay
