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
      {/* Minimal Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/20 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 bg-[#F5E0E3]/60 backdrop-blur-md border border-[#D4A3A3] px-5 py-2 rounded-full mb-8 animate-fade-in-down">
            <span className="w-2 h-2 bg-[#8B4A5A] rounded-full animate-pulse"></span>
            <span className="text-[#723C4B] text-xs font-bold uppercase tracking-widest">
              {data.heroSubtitle}
            </span>
          </div>
          
          {/* Welcome Text Instead of Logo */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-[#8B4A5A] leading-tight mb-6 animate-slide-up drop-shadow-lg" style={{ animationDelay: '0.2s' }}>
            Welcome to Bi-Sweet
          </h1>
          
          {/* Animated Description */}
         

          {/* Animated Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Link 
              to="/booking"
              className="inline-block bg-[#8B4A5A] text-white hover:bg-[#723C4B] px-10 py-4 text-sm font-bold transition-all uppercase tracking-wider hover:scale-105 hover:shadow-2xl text-center shadow-lg"
            >
              Order Now →
            </Link>
            <a 
              href="#products"
              className="inline-block bg-white border-2 border-[#8B4A5A] text-[#8B4A5A] hover:bg-[#8B4A5A] hover:text-white px-10 py-4 text-sm font-bold transition-all uppercase tracking-wider text-center shadow-md"
            >
              View Products
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <span className="text-gray-600 text-sm uppercase tracking-widest block mb-2 drop-shadow-sm">Scroll</span>
        <div className="w-0.5 h-10 bg-[#8B4A5A] rounded-full mx-auto"></div>
      </div>
    </section>
  );
}