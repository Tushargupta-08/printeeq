import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-white via-gray-100 to-gray-400 px-4">
      <div className="w-full max-w-md bg-white p-5 sm:p-8 rounded-xl shadow-md mt-8 sm:mt-0">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center text-gray-800">
          Sign Up
        </h2>

        <form className="flex flex-col gap-4">
          <input
            type="tel"
            placeholder="Mobile number"
            pattern="[0-9]{10}"
            maxLength={10}
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
          />

          <input
            type="text"
            placeholder="Enter Username"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
          />

          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-200 text-sm sm:text-base"
          >
            Create my account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
