// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

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
          
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={() => window.scrollTo(0, 0)}>
            <img 
              src={logo} 
              alt="Bi-Sweet Logo" 
              className="h-14 md:h-16 lg:h-20 w-auto object-contain" 
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => handleSectionClick("home")}
              className={`text-sm font-medium transition-colors uppercase tracking-wide ${
                scrolled 
                  ? 'text-gray-700 hover:text-[#8B4A5A]' 
                  : 'text-[#723C4B] hover:text-[#8B4A5A]'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => handleSectionClick("products")}
              className={`text-sm font-medium transition-colors uppercase tracking-wide ${
                scrolled 
                  ? 'text-gray-700 hover:text-[#8B4A5A]' 
                  : 'text-[#723C4B] hover:text-[#8B4A5A]'
              }`}
            >
              Products
            </button>
            <button 
              onClick={() => handleSectionClick("about")}
              className={`text-sm font-medium transition-colors uppercase tracking-wide ${
                scrolled 
                  ? 'text-gray-700 hover:text-[#8B4A5A]' 
                  : 'text-[#723C4B] hover:text-[#8B4A5A]'
              }`}
            >
              About
            </button>
            <button 
              onClick={() => handleSectionClick("contact")}
              className={`text-sm font-medium transition-colors uppercase tracking-wide ${
                scrolled 
                  ? 'text-gray-700 hover:text-[#8B4A5A]' 
                  : 'text-[#723C4B] hover:text-[#8B4A5A]'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Order Button */}
          <Link 
            to="/booking" 
            onClick={() => window.scrollTo(0, 0)}
            className={`hidden md:inline-block border-2 px-6 py-2.5 text-sm font-medium transition-all uppercase tracking-wide ${
              scrolled 
                ? 'border-[#8B4A5A] text-[#8B4A5A] hover:bg-[#8B4A5A] hover:text-white'
                : 'border-[#8B4A5A] text-[#8B4A5A] hover:bg-[#8B4A5A] hover:text-white'
            }`}
          >
            Order
          </Link>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden text-2xl transition-colors ${
              scrolled ? 'text-gray-700' : 'text-[#8B4A5A]'
            }`}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 bg-white/95 backdrop-blur-md rounded-xl p-6 shadow-lg">
            <button 
              onClick={() => handleSectionClick("home")}
              className="block w-full text-left text-[#723C4B] hover:text-[#8B4A5A] font-medium uppercase text-sm"
            >
              Home
            </button>
            <button 
              onClick={() => handleSectionClick("products")}
              className="block w-full text-left text-[#723C4B] hover:text-[#8B4A5A] font-medium uppercase text-sm"
            >
              Products
            </button>
            <button 
              onClick={() => handleSectionClick("about")}
              className="block w-full text-left text-[#723C4B] hover:text-[#8B4A5A] font-medium uppercase text-sm"
            >
              About
            </button>
            <button 
              onClick={() => handleSectionClick("contact")}
              className="block w-full text-left text-[#723C4B] hover:text-[#8B4A5A] font-medium uppercase text-sm"
            >
              Contact
            </button>
            <Link 
              to="/booking" 
              onClick={() => {
                window.scrollTo(0, 0);
                setIsOpen(false);
              }}
              className="block border-2 border-[#8B4A5A] text-[#8B4A5A] text-center px-6 py-2.5 font-medium uppercase text-sm"
            >
              Order
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}