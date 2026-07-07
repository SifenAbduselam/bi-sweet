// src/pages/Home.jsx
import { Link } from "react-router-dom";
import { businessPresets } from "../data/businessPresets";

export default function Home() {
  const data = businessPresets.bakery;

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-[#FFF0E5] via-[#FFE8DC] to-[#FFD4C4]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            {/* Simple Heading */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-gray-900 leading-tight">
              {data.heroTitle}
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg text-gray-600 max-w-md leading-relaxed">
              {data.heroText}
            </p>

            {/* Simple CTA Button */}
            <Link 
              to="/booking"
              className="inline-block border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-3 text-sm font-medium transition-all uppercase tracking-wide"
            >
              Discover
            </Link>
          </div>

          {/* Right Side - Optional Image/Decoration */}
          <div className="hidden md:flex items-center justify-center">
            {/* You can add your dessert image here later */}
            <div className="text-9xl animate-float">🍰</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <span className="text-gray-400 text-2xl">↓</span>
      </div>
    </section>
  );
}