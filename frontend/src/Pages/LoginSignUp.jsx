
import React from 'react';

const LoginSignUp = () => {
  return (
    <div className="w-full pt-24 pb-24 bg-purple-100 min-h-screen">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg mx-auto px-10 py-10">
        <h1 className="text-3xl font-bold text-purple-600 text-center mb-6">SIGN UP</h1>

        <div className="flex flex-col gap-6">
          <input
            className="h-10 text-base rounded-lg px-4 border border-purple-300 text-purple-700 placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            type="text"
            placeholder="Your Name"
          />
          <input
            className="h-10 text-base rounded-lg px-4 border border-purple-300 text-purple-700 placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            type="email"
            placeholder="Email Address"
          />
          <input
            className="h-10 text-base rounded-lg px-4 border border-purple-300 text-purple-700 placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            type="password"
            placeholder="Password"
          />
        </div>

        <button
          className="w-full mt-6 bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 rounded-lg transition-all"
          type="submit"
        >
          Continue
        </button>

        <p className="text-sm text-center mt-4 text-gray-600">
          Already have an account?{' '}
          <span className="text-purple-500 font-medium cursor-pointer hover:underline">Login Here</span>
        </p>

        <div className="flex items-start gap-3 mt-6 text-sm text-gray-700">
          <input type="checkbox" name="terms" id="terms" />
          <label htmlFor="terms">
            By continuing, I agree to the terms of our <span className="text-purple-500 font-medium">privacy policy</span>.
          </label>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
