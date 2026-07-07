// src/components/About.jsx
import { businessPresets } from "../data/businessPresets";
import heroBg from "../assets/hero-bg.jpg";

export default function About() {
  const { about } = businessPresets.bakery;

  return (
    <section 
      id="about" 
      className="relative py-24 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Transparent Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/20 to-transparent" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in-down">
          <p className="text-pink-600 font-semibold uppercase tracking-widest mb-3 text-sm">
            About Us
          </p>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-4">
            {about.title}
          </h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto rounded-full" />
        </div>

        {/* Content - Elegant Text */}
        <div className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-gray-700 text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
            {about.text}
          </p>
          
          {/* Decorative Quote */}
          <div className="mt-12 p-8 bg-white/60 backdrop-blur-md rounded-3xl border border-white/50 shadow-lg max-w-2xl mx-auto">
            <p className="text-2xl font-serif italic text-gray-800 mb-4">
              "Every dessert tells a story of passion, tradition, and the joy of sharing sweetness with those we love."
            </p>
            <p className="text-pink-600 font-semibold uppercase tracking-wider text-sm">
              — Bi-Sweet Deserts
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}