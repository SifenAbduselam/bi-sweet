// src/components/About.jsx
import { businessPresets } from "../data/businessPresets";
import dessertImage from "../assets/about-dessert.png";
export default function About() {
  const { about } = businessPresets.bakery;

  return (
    // my-16 creates the top/bottom gap to show the background image!
    <section id="about" className="w-full my-16 md:my-24 px-0">
      
      {/* SOLID BURGUNDY CARD */}
      <div className="w-full bg-[#8B4A5A] shadow-2xl py-16 md:py-20">
        
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-10 h-px bg-white/40" />
              <p className="text-white/80 text-xs font-medium uppercase tracking-[0.3em]">About Us</p>
              <span className="w-10 h-px bg-white/40" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-3">{about.title}</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Side - Image Placeholder */}
           {/* Left Side - Image */}
<div className="relative">
  <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-white/10">
    <img 
      src={dessertImage} 
      alt="Artisan dessert preparation" 
      className="w-full h-full object-cover"
    />
  </div>
</div>

            {/* Right Side - Content */}
            <div className="text-white">
              <p className="text-lg leading-relaxed font-light text-white/90 mb-8">{about.text}</p>
              <blockquote className="bg-[#723C4B] border-l-4 border-white/40 pl-6 py-4 my-8 rounded-r-lg">
                <p className="text-xl italic text-white font-serif leading-relaxed">"Every dessert tells a story of passion, tradition, and the joy of sharing sweetness with those we love."</p>
                <footer className="text-white/80 text-sm mt-4 font-medium uppercase tracking-wider">— Bi-Sweet Deserts</footer>
              </blockquote>
              <p className="text-white/90 leading-relaxed font-light">We believe in using only the finest ingredients, sourced locally whenever possible. Each creation is a labor of love, designed to bring moments of pure delight to your table.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}