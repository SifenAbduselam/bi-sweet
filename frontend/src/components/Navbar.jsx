// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  // Detect scroll to add background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSectionClick = (sectionId) => {
    setIsOpen(false);
    if (isHome) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/90 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo - Simple & Elegant */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-serif font-bold text-gray-800">
              Bi-Sweet
            </span>
          </Link>

          {/* Desktop Nav - Centered & Simple */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => handleSectionClick("home")}
              className="text-gray-700 hover:text-pink-600 text-sm font-medium transition-colors uppercase tracking-wide"
            >
              Home
            </button>
            <button 
              onClick={() => handleSectionClick("products")}
              className="text-gray-700 hover:text-pink-600 text-sm font-medium transition-colors uppercase tracking-wide"
            >
              Products
            </button>
            <button 
              onClick={() => handleSectionClick("about")}
              className="text-gray-700 hover:text-pink-600 text-sm font-medium transition-colors uppercase tracking-wide"
            >
              About
            </button>
            <button 
              onClick={() => handleSectionClick("contact")}
              className="text-gray-700 hover:text-pink-600 text-sm font-medium transition-colors uppercase tracking-wide"
            >
              Contact
            </button>
          </nav>

          {/* Order Button - Minimal */}
          <Link 
            to="/booking" 
            className="hidden md:inline-block border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-6 py-2 text-sm font-medium transition-all uppercase tracking-wide"
          >
            Order
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
          <div className="md:hidden mt-4 pb-4 space-y-3 bg-white/95 backdrop-blur-md rounded-xl p-6 shadow-lg">
            <button 
              onClick={() => handleSectionClick("home")}
              className="block w-full text-left text-gray-700 hover:text-pink-600 font-medium uppercase text-sm"
            >
              Home
            </button>
            <button 
              onClick={() => handleSectionClick("products")}
              className="block w-full text-left text-gray-700 hover:text-pink-600 font-medium uppercase text-sm"
            >
              Products
            </button>
            <button 
              onClick={() => handleSectionClick("about")}
              className="block w-full text-left text-gray-700 hover:text-pink-600 font-medium uppercase text-sm"
            >
              About
            </button>
            <button 
              onClick={() => handleSectionClick("contact")}
              className="block w-full text-left text-gray-700 hover:text-pink-600 font-medium uppercase text-sm"
            >
              Contact
            </button>
            <Link 
              to="/booking" 
              className="block border-2 border-gray-800 text-gray-800 text-center px-6 py-2 font-medium uppercase text-sm"
              onClick={() => setIsOpen(false)}
            >
              Order
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}