// src/pages/Home.jsx
import { Link } from "react-router-dom";
import { businessPresets } from "../data/businessPresets";
import heroBg from "../assets/hero-bg.jpg"; // Make sure you saved your image here!

export default function Home() {
  const data = businessPresets.bakery;

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Text Content with Animations */}
          <div className="space-y-8">
            
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full animate-fade-in-down">
              <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
              <span className="text-white/90 text-xs font-bold uppercase tracking-widest">
                {data.heroSubtitle}
              </span>
            </div>
            
            {/* Bold Animated Heading */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight animate-slide-up" style={{ animationDelay: '0.2s' }}>
              {data.heroTitle.split(' ').map((word, i) => (
                <span key={i} className="block">
                  {word}
                </span>
              ))}
            </h1>
            
            {/* Animated Description */}
            <p className="text-xl text-white/90 max-w-lg leading-relaxed font-light animate-slide-up" style={{ animationDelay: '0.4s' }}>
              {data.heroText}
            </p>

            {/* Animated Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <Link 
                to="/booking"
                className="inline-block bg-white text-gray-900 hover:bg-gray-100 px-10 py-4 text-sm font-bold transition-all uppercase tracking-wider hover:scale-105 hover:shadow-2xl text-center"
              >
                Order Now →
              </Link>
              <a 
                href="#products"
                className="inline-block bg-white/10 backdrop-blur-md border-2 border-white/40 text-white hover:bg-white/20 px-10 py-4 text-sm font-bold transition-all uppercase tracking-wider text-center"
              >
                View Products
              </a>
            </div>
          </div>

          {/* Right Side - Optional decorative element */}
          <div className="hidden lg:flex items-center justify-center animate-float">
            <div className="text-9xl opacity-80">🍰</div>
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