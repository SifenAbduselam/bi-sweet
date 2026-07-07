// src/pages/Home.jsx
import { Link } from "react-router-dom";
import { businessPresets } from "../data/businessPresets";
import heroBg from "../assets/hero-bg.jpg";

export default function Home() {
  const data = businessPresets.bakery;

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/60" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full mb-8 animate-fade-in-down">
            <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
            <span className="text-white/90 text-xs font-bold uppercase tracking-widest">
              {data.heroSubtitle}
            </span>
          </div>
          
          {/* Bold Animated Heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {data.heroTitle}
          </h1>
          
          {/* Animated Description */}
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light mb-10 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            {data.heroText}
          </p>

          {/* Animated Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Link 
              to="/booking"
              className="inline-block bg-white text-gray-900 hover:bg-gray-100 px-10 py-4 text-sm font-bold transition-all uppercase tracking-wider hover:scale-105 hover:shadow-2xl"
            >
              Order Now →
            </Link>
            <a 
              href="#products"
              className="inline-block bg-white/10 backdrop-blur-md border-2 border-white/40 text-white hover:bg-white/20 px-10 py-4 text-sm font-bold transition-all uppercase tracking-wider"
            >
              View Products
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <span className="text-white/60 text-sm uppercase tracking-widest block mb-2">Scroll</span>
        <div className="w-0.5 h-10 bg-white/40 rounded-full mx-auto"></div>
      </div>
    </section>
  );
}