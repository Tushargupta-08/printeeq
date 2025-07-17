

import { useState } from "react";
import { Menu, Search, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleRedirect = () => navigate("/Cart");
  const handleRedirect2 = () => navigate("/Login");
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white shadow-md w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
      
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">PrinTeeQ</h1>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/Shop" className="nav-link">Shop</Link>
            <Link to="/MenSection" className="nav-link">Men</Link>
            <Link to="/WomenSection" className="nav-link">Women</Link>

         
            <div className="relative w-64">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 w-full bg-gray-100 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>

          
            <img
              onClick={handleRedirect}
              className="h-6 w-6 object-contain cursor-pointer"
              src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
              alt="cart"
            />
            <img
              onClick={handleRedirect2}
              className="h-6 w-6 object-contain cursor-pointer"
              src="https://deeptiop.github.io/web-app-clothes-printing-MERN-Stack/assets/user-Cz2xbWm6.png"
              alt="user"
            />
          </div>

         
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 p-2">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

      
        {isMenuOpen && (
          <div className="md:hidden mt-2 bg-gray-50 rounded-lg px-4 py-3 space-y-2 shadow-inner">
  <Link to="/" className="block text-gray-700 font-medium hover:text-black">Home</Link>
  <Link to="/Shop" className="block text-gray-700 font-medium hover:text-black">Shop</Link>
  <Link to="/MenSection" className="block text-gray-700 font-medium hover:text-black">Men</Link>
  <Link to="/WomenSection" className="block text-gray-700 font-medium hover:text-black">Women</Link>

  <div className="flex items-center gap-4 border-t border-gray-300 pt-3">
    <img
      onClick={handleRedirect}
      className="h-6 w-6 cursor-pointer transition-transform hover:scale-110"
      src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
      alt="cart"
      title="Cart"
    />
    <img
      onClick={handleRedirect2}
      className="h-6 w-6 cursor-pointer rounded-full transition-transform hover:scale-110"
      src="https://deeptiop.github.io/web-app-clothes-printing-MERN-Stack/assets/user-Cz2xbWm6.png"
      alt="user"
      title="Account"
    />
  </div>
</div>
        )}
      </div>
    </nav>
  );
}
