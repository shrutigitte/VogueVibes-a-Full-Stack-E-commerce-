import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'

const AddToCartPopup = () => {
  const { showPopup, setShowPopup } = useContext(ShopContext);
  const navigate = useNavigate();

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-purple-500 rounded-lg p-6 w-[90%] max-w-md text-center shadow-lg text-white">
        <h2 className="text-xl font-semibold mb-4">Item Added to Cart!</h2>
        <div className="flex justify-around mt-6 gap-4">
          <button
            className="bg-white text-purple-700 font-medium px-4 py-2 rounded-md hover:bg-purple-200 transition"
            onClick={() => setShowPopup(false)}
          >
            Continue Shopping
          </button>
          <button
            className="bg-white text-purple-700 font-medium px-4 py-2 rounded-md hover:bg-purple-200 transition"
            onClick={() => {
              setShowPopup(false);
              navigate('/cart');
            }}
          >
            Visit Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddToCartPopup;
