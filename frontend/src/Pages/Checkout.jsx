import React, { useContext, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';

const Checkout = () => {
  const { getTotalCartAmount } = useContext(ShopContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show success and confetti
    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
      navigate('/');
    }, 6000);
  };

  // Delivery date: 3 days from today
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 3);
  const formattedDate = deliveryDate.toLocaleDateString('en-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="relative min-h-screen flex flex-col items-center mt-20 p-6 max-w-2xl mx-auto bg-white shadow-lg rounded-lg">
      {showSuccess && <Confetti />}

      <h1 className="text-3xl font-bold text-purple-700 mb-6">Checkout</h1>

      <form className="w-full" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-lg text-gray-700 mb-2">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg text-gray-700 mb-2">Address</label>
          <textarea
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter delivery address"
            rows="3"
          />
        </div>

        <div className="mb-6">
          <p className="text-lg font-medium text-gray-700">
            Total Amount: <span className="text-purple-700 font-bold">${getTotalCartAmount()}</span>
          </p>
          <p className="text-sm text-green-600 mt-1">Cash on Delivery</p>
          <p className="text-sm text-gray-500 mt-1">Estimated Delivery Date: <span className="font-semibold">{formattedDate}</span></p>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition-transform hover:scale-105"
        >
          Confirm Order
        </button>
      </form>

      {showSuccess && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white px-6 py-4 rounded-xl shadow-lg text-xl font-semibold z-50">
          🎉 Order placed successfully!
        </div>
      )}
    </div>
  );
};

export default Checkout;
