// src/pages/Home.jsx
import { Link } from "react-router-dom";
import { businessPresets } from "../data/businessPreset";
import heroBg from "../assets/hero-bg.jpg";

export default function Home() {
  const data = businessPresets.bakery;

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-900/40 to-pink-950/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto pt-20">
        <p className="text-pink-200 text-lg md:text-xl font-light mb-4 tracking-wider uppercase">
          {data.heroSubtitle}
        </p>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          {data.heroTitle}
        </h1>
        
        <p className="text-lg md:text-xl text-gray-100 mb-10 max-w-xl mx-auto leading-relaxed">
          {data.heroText}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/booking"
            className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 shadow-lg"
          >
            Order Now 🍰
          </Link>
          <a 
            href="#products"
            className="bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all"
          >
            View Products
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <span className="text-white text-2xl">↓</span>
      </div>
    </section>
  );
}