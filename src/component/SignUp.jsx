import React from 'react';
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div className="flex justify-center  bg-gradient-to-br from-55% to-gray-500">
      <div className=" p-8 rounded-xl shadow-md w-full max-w-md mt-5">
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>

        <form className="flex flex-col gap-4">
          <input
  type="tel"
  placeholder="Mobile number"
  pattern="[0-9]{10}"
  maxLength={10}
  className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
/>

          <input
            type="text"
            placeholder=" Enter Username "
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
        
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
                 
            placeholder=" Confirm Password"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-200"
          >
           Create my account
          </button>
          
        </form>
      </div>
    </div>
  );
};

export default Login;
