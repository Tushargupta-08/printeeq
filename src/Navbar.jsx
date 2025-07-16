"use client"

import { useState } from "react"
import { Menu, Search, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-800">PrinTeeQ</h1>
            </div>
          </div>

     
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative hidden md:block mr-10">
  
</div>

            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
           Shop
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
              Men
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
      Women
            </a>
           
           <div className="relative w-96 mr-3">
  <input
    type="text"
    placeholder="Search..."
    className="pl-10 pr-4 py-2 w-full bg-gray-100 border rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
</div>
<img  className =" h-8 w-10 object-contain ml-2 cursor-pointer"src="https://media.istockphoto.com/id/1251362621/photo/shopping-cart-vector-art-closeup-view.webp?a=1&b=1&s=612x612&w=0&k=20&c=apy4HMAIDlkV9xf9c_2A-jGKZ5js9rSaqxJ7VDYoxfA=" alt="" />
<img  className="h-8 w-8 object-contain ml-2 cursor-pointer"src="https://deeptiop.github.io/web-app-clothes-printing-MERN-Stack/assets/user-Cz2xbWm6.png"/>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mt-2">
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              >
                Services
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              >
                Contact
              </a>
              <button className="w-full text-left bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 mt-2">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}



