import React from 'react';
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <div className="bg-white">
      <section className="flex flex-col md:flex-row justify-evenly items-start py-8 px-4 gap-8 md:gap-0">
        <div className="flex flex-col gap-3">
          <h3 className="text-xl md:text-2xl font-medium">PrinTeeQ</h3>
          <p className="text-sm text-gray-600 font-medium">printeeq@support.com</p>
          <p className="text-sm text-gray-600 font-medium">7992662726</p>
          <p className="text-sm text-gray-600 font-medium">BENGALURU, KARNATAKA</p>
        </div>

      
        <div className="flex flex-col gap-3">
          <h3 className="text-xl md:text-2xl font-medium">Information</h3>
          <p className="text-sm text-gray-600 font-medium">About us</p>
          <p className="text-sm text-gray-600 font-medium">Our Blog</p>
          <p className="text-sm text-gray-600 font-medium">Start a Return</p>
          <p className="text-sm text-gray-600 font-medium">Contact Us</p>
          <p className="text-sm text-gray-600 font-medium">Shipping FAQ</p>
        </div>

     
        <div className="flex flex-col gap-3">
          <h3 className="text-xl md:text-2xl font-medium">Useful Links</h3>
          <p className="text-sm text-gray-600 font-medium">My Account</p>
          <p className="text-sm text-gray-600 font-medium">Custom Products</p>
          <p className="text-sm text-gray-600 font-medium">Make your own shirt</p>
        </div>


          <div className="flex gap-4 mt-4">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="text-gray-600 hover:text-purple-600 cursor-pointer" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="text-gray-600 hover:text-blue-600 cursor-pointer" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="text-gray-600 hover:text-blue-800 cursor-pointer" />
            </a>
          </div>


      </section>
</div> 
  );
}
