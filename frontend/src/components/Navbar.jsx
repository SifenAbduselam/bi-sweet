// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1">
            <span className="text-3xl">🧁</span>
            <div>
              <span className="text-pink-500 font-bold text-xl">Sweet's</span>
              <h2 className="text-pink-600 font-bold text-xl -mt-1">Cupcake</h2>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-700 hover:text-pink-500 font-medium transition-colors">
              Home
            </a>
            <a href="#menu" className="text-gray-700 hover:text-pink-500 font-medium transition-colors">
              Menu
            </a>
            <a href="#gallery" className="text-gray-700 hover:text-pink-500 font-medium transition-colors">
              Gallery
            </a>
            <a href="#about" className="text-gray-700 hover:text-pink-500 font-medium transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-pink-500 font-medium transition-colors">
              Contact
            </a>
          </nav>

          {/* Order Button */}
          <Link 
            to="/booking" 
            className="hidden md:inline-block bg-pink-500 hover:bg-pink-600 text-white px-6 py-2.5 rounded-full font-semibold transition-all hover:scale-105 shadow-md"
          >
            Order Now
          </Link>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 text-2xl"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <a href="#home" className="block text-gray-700 hover:text-pink-500 font-medium">Home</a>
            <a href="#menu" className="block text-gray-700 hover:text-pink-500 font-medium">Menu</a>
            <a href="#gallery" className="block text-gray-700 hover:text-pink-500 font-medium">Gallery</a>
            <a href="#about" className="block text-gray-700 hover:text-pink-500 font-medium">About</a>
            <a href="#contact" className="block text-gray-700 hover:text-pink-500 font-medium">Contact</a>
            <Link to="/booking" className="block bg-pink-500 text-white text-center px-6 py-2.5 rounded-full font-semibold">
              Order Now
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}