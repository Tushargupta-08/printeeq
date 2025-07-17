"use client"

import { useEffect,useState } from "react"
import { Menu, Search, X } from "lucide-react"
import{Link} from "react-router-dom"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { useNavigate } from "react-router-dom";
export default function Navbar() {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false)
const navigate = useNavigate();
  const handleRedirect = () => {
    navigate('/Cart');
  };
  const handleRedirect2 = () => {
    navigate('/Login');
  };
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

        <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
  Home
</Link>
<Link to="/Shop" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
  Shop
</Link>
<Link to="/MenSection" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
  Men
</Link>
<Link to="/WomenSection" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
  Women
</Link>

           
           <div className="relative w-96 mr-3">
  <input
    type="text"
    placeholder="Search..."
    className="pl-10 pr-4 py-2 w-full bg-gray-100 border rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
</div>
<img 
onClick={handleRedirect} 
className =" h-8 w-10 object-contain ml-2 cursor-pointer"
src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" 
alt="" />
<img onClick={handleRedirect2}
 className="h-8 w-8 object-contain ml-2 cursor-pointer"
 src="https://deeptiop.github.io/web-app-clothes-printing-MERN-Stack/assets/user-Cz2xbWm6.png"/>
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
              <Link
              to="/"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              >
                Home
              </Link>
              <Link
              to="/Shop"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              >
                Shop
              </Link>
              <Link
              to="/MenSection"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              >
                Men
              </Link>
              <Link
              to="/WomenSection"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              >
              Women
              </Link>
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



