// src/components/About.jsx
import { businessPresets } from "../data/businessPresets";
import dessertImage from "../assets/about-dessert.png"; // Make sure this image exists in your assets folder

export default function About() {
  const { about } = businessPresets.bakery;

  return (
    // Cream background matching the site theme and navbar
    <section id="about" className="w-full my-16 md:my-24 px-0 bg-[#FFFBF7]">
      <div className="w-full py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-10 h-px bg-[#8B4A5A]/40" />
              <p className="text-[#8B4A5A] text-xs font-medium uppercase tracking-[0.3em]">About Us</p>
              <span className="w-10 h-px bg-[#8B4A5A]/40" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-3">
              {about.title}
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Side - Image */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-white">
                <img 
                  src={dessertImage} 
                  alt="Artisan dessert preparation" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Subtle decorative accent */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#8B4A5A]/10 rounded-full -z-10 blur-2xl" />
            </div>

            {/* Right Side - Content */}
            <div className="text-gray-700">
              <p className="text-lg leading-relaxed font-light mb-8">
                {about.text}
              </p>
              
              {/* Elegant Quote Block */}
              <blockquote className="bg-white border-l-4 border-[#8B4A5A] pl-6 py-4 my-8 rounded-r-lg shadow-sm">
                <p className="text-xl italic text-gray-800 font-serif leading-relaxed">
                  "Every dessert tells a story of passion, tradition, and the joy of sharing sweetness with those we love."
                </p>
                <footer className="text-[#8B4A5A] text-sm mt-4 font-medium uppercase tracking-wider">
                  — Bi-Sweet Deserts
                </footer>
              </blockquote>
              
              <p className="leading-relaxed font-light">
                We believe in using only the finest ingredients, sourced locally whenever possible. Each creation is a labor of love, designed to bring moments of pure delight to your table.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}