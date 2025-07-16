import React from 'react'
import { Facebook, Instagram, Linkedin } from "lucide-react";


export default function Footer() {
  return (
    <div>
      <section className="flex justify-evenly py-5 mx-5">
        <div className="flex flex-col gap-4 px-3">
          <h3 className="text-2xl font-medium">PrinTeeQ</h3>
          <p className="text-md text-gray-600 font-medium">
            printeeq@support.com
          </p>
          <p className="text-md text-gray-600 font-medium">7992662726</p>
          <p className="text-md text-gray-600 font-medium">
            BENGALURU,KARNATAKA
          </p>
        </div>
        <div className="flex flex-col gap-4 px-3">
          <h3 className="text-2xl font-medium">Information</h3>
          <p className="text-md text-gray-600 font-medium">About us</p>
          <p className="text-md text-gray-600 font-medium">Our Blog</p>
          <p className="text-md text-gray-600 font-medium">Start a Return</p>
          <p className="text-md text-gray-600 font-medium">Contact Us</p>
          <p className="text-md text-gray-600 font-medium">Shipping FAQ</p>
        </div>
        <div className="flex flex-col gap-4 px-3">
          <h3 className="text-2xl font-medium">Useful links</h3>
          <p className="text-md text-gray-600 font-medium">My Account</p>
          <p className="text-md text-gray-600 font-medium">Custom Products</p>
          <p className="text-md text-gray-600 font-medium">
            Make your own shirt
          </p>
        </div>
        <div className="flex flex-col gap-4 min-w-[250px]">
  <h3 className="text-2xl font-medium">Newsletter</h3>
  <p className="text-md text-gray-600 font-medium">
    Get the latest news, events and more delivered to your inbox.
  </p>
  <input
    className="h-10 px-5 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
    type="text"
    placeholder="Your e-mail address"
  />
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
</div>

      </section>
    </div>
  )
}
