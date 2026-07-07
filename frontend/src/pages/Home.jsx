// src/pages/Home.jsx
import { Link } from "react-router-dom";
import { businessPresets } from "../data/businessPresets";
import heroBg from "../assets/hero-bg.jpg";

export default function Home() {
  const data = businessPresets.bakery;

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Minimal Overlay - Just enough for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/20 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Text Content */}
          <div className="space-y-8 text-left">
            
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-2 bg-[#F5E8E6]/50 backdrop-blur-md border border-[#E5D0CC] px-5 py-2 rounded-full animate-fade-in-down">
              <span className="w-2 h-2 bg-[#C9A9A6] rounded-full animate-pulse"></span>
              <span className="text-[#B79A9A] text-xs font-bold uppercase tracking-widest">
                {data.heroSubtitle}
              </span>
            </div>
            
            {/* Bold Animated Heading */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <span className="text-[#C9A9A6]">Bi-Sweet</span>
              <br />
              <span className="text-5xl md:text-6xl lg:text-7xl italic text-gray-700">Deserts</span>
            </h1>
            
            {/* Animated Description */}
            <p className="text-xl text-gray-700 max-w-lg leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
              {data.heroText}
            </p>

            {/* Animated Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <Link 
                to="/booking"
                className="inline-block bg-[#C9A9A6] text-white hover:bg-[#B79A9A] px-10 py-4 text-sm font-bold transition-all uppercase tracking-wider hover:scale-105 hover:shadow-xl text-center"
              >
                Order Now →
              </Link>
              <a 
                href="#products"
                className="inline-block bg-white border-2 border-[#E5D0CC] text-[#C9A9A6] hover:bg-[#F5E8E6] px-10 py-4 text-sm font-bold transition-all uppercase tracking-wider text-center"
              >
                View Products
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <span className="text-gray-400 text-sm uppercase tracking-widest block mb-2">Scroll</span>
        <div className="w-0.5 h-10 bg-gray-400 rounded-full mx-auto"></div>
      </div>
    </section>
  );
}