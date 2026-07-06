// src/components/Footer.jsx
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-pink-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <span className="text-2xl">🍰</span>
              <div>
                <span className="text-pink-300 font-bold text-lg">Bi-Sweet</span>
                <h2 className="text-white font-bold text-lg -mt-1">Deserts</h2>
              </div>
            </div>
            <p className="text-pink-200 text-sm">
              Homemade desserts made with love
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex gap-6 text-sm">
            <a href="#home" className="text-pink-200 hover:text-white transition-colors">Home</a>
            <a href="#products" className="text-pink-200 hover:text-white transition-colors">Products</a>
            <a href="#about" className="text-pink-200 hover:text-white transition-colors">About</a>
            <a href="#contact" className="text-pink-200 hover:text-white transition-colors">Contact</a>
          </div>

          {/* Social */}
          <div className="flex gap-3">
            <a href="#" className="w-9 h-9 bg-pink-800 hover:bg-pink-700 rounded-full flex items-center justify-center transition-colors text-sm">
              IG
            </a>
            <a href="#" className="w-9 h-9 bg-pink-800 hover:bg-pink-700 rounded-full flex items-center justify-center transition-colors text-sm">
              FB
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-pink-800 mt-8 pt-6 text-center text-pink-200 text-sm">
          <p>© 2026 Bi-Sweet Deserts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}