// src/components/Footer.jsx
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#D4A3A3]/30 py-12">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Bi-Sweet Text */}
          <div className="text-center md:text-left">
            <Link to="/" className="inline-block">
              <h2 className="text-3xl font-serif font-bold text-black">
                Bi-Sweet
              </h2>
              <span className="text-xs uppercase tracking-widest text-[#8B4A5A] font-bold">
                Deserts
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex gap-8">
            <a href="#home" className="text-black hover:text-[#8B4A5A] transition-colors text-sm font-medium uppercase tracking-wide">
              Home
            </a>
            <a href="#products" className="text-black hover:text-[#8B4A5A] transition-colors text-sm font-medium uppercase tracking-wide">
              Products
            </a>
            <a href="#about" className="text-black hover:text-[#8B4A5A] transition-colors text-sm font-medium uppercase tracking-wide">
              About
            </a>
            <a href="#contact" className="text-black hover:text-[#8B4A5A] transition-colors text-sm font-medium uppercase tracking-wide">
              Contact
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a 
              href="https://www.tiktok.com/@__bi__sweet" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#F5E0E3] hover:bg-[#8B4A5A] rounded-full flex items-center justify-center transition-all hover:scale-110"
            >
              <svg className="w-5 h-5 text-[#8B4A5A] hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
              </svg>
            </a>
            <a 
              href="https://t.me/Yb087" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#F5E0E3] hover:bg-blue-600 rounded-full flex items-center justify-center transition-all hover:scale-110"
            >
              <svg className="w-5 h-5 text-[#8B4A5A] hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#F5E0E3] hover:bg-gradient-to-br hover:from-purple-600 hover:to-[#8B4A5A] rounded-full flex items-center justify-center transition-all hover:scale-110"
            >
              <svg className="w-5 h-5 text-[#8B4A5A] hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.