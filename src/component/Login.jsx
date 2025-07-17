import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleRedirect3 = () => {
    navigate('/SignUp');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-white via-gray-100 to-gray-300 px-4">
      <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center text-gray-800">Login</h2>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
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
            Login
          </button>

          <div className="text-center text-gray-600 text-sm">or</div>

          <p className="text-center text-blue-700 font-medium text-sm sm:text-base cursor-pointer hover:underline">
            Forgot Password?
          </p>

          <div className="text-center text-sm sm:text-base text-gray-700">
            Don't have an account?{' '}
            <span
              onClick={handleRedirect3}
              className="text-blue-800 font-semibold cursor-pointer hover:underline"
            >
              Sign Up
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
