// src/components/Navbar.jsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  // Helper function to handle section navigation
  const handleSectionClick = (sectionId) => {
    setIsOpen(false); // Close mobile menu
    
    if (isHome) {
      // If already on home page, just scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If on another page, navigate to home first
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-3xl">🍰</span>
            <div>
              <span className="text-pink-500 font-bold text-xl">Bi-Sweet</span>
              <h2 className="text-pink-600 font-bold text-xl -mt-1">Deserts</h2>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => handleSectionClick("home")}
              className="text-gray-700 hover:text-pink-500 font-medium transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => handleSectionClick("products")}
              className="text-gray-700 hover:text-pink-500 font-medium transition-colors"
            >
              Products
            </button>
            <button 
              onClick={() => handleSectionClick("about")}
              className="text-gray-700 hover:text-pink-500 font-medium transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => handleSectionClick("contact")}
              className="text-gray-700 hover:text-pink-500 font-medium transition-colors"
            >
              Contact
            </button>
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
            <button 
              onClick={() => handleSectionClick("home")}
              className="block w-full text-left text-gray-700 hover:text-pink-500 font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => handleSectionClick("products")}
              className="block w-full text-left text-gray-700 hover:text-pink-500 font-medium"
            >
              Products
            </button>
            <button 
              onClick={() => handleSectionClick("about")}
              className="block w-full text-left text-gray-700 hover:text-pink-500 font-medium"
            >
              About
            </button>
            <button 
              onClick={() => handleSectionClick("contact")}
              className="block w-full text-left text-gray-700 hover:text-pink-500 font-medium"
            >
              Contact
            </button>
            <Link 
              to="/booking" 
              className="block bg-pink-500 text-white text-center px-6 py-2.5 rounded-full font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Order Now
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}