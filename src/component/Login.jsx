import React from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const Login = () => 
  
  {const navigate = useNavigate();
  const handleRedirect3 = () => {
    navigate('/SignUp');
  };
  return (
    <div className="flex justify-center  bg-gradient-to-br from-55% to-gray-500 shadow-2xl">
      <div className=" p-8 rounded-xl shadow-md w-full max-w-md mt-5">
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
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
            Login
          </button>
          <h1>___________or__________</h1>
        <h1 className='font-semibold '>Forget Password ?</h1>
        <h1>Don't have an account?</h1>
     <p onClick={handleRedirect3 }
     className='text-blue-800 cursor-pointer'>sign up</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
