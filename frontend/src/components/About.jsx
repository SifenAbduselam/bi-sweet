// src/components/About.jsx
import { businessPresets } from "../data/businessPreset";

export default function About() {
  const { about } = businessPresets.bakery;

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-pink-500 font-semibold uppercase tracking-wider mb-2">About Us</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {about.title}
          </h2>
          <div className="w-20 h-1 bg-pink-500 mx-auto rounded-full" />
        </div>

        {/* Content */}
        <div className="text-center">
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            {about.text}
          </p>
          
          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-pink-50 rounded-xl">
              <span className="text-4xl mb-3 block">🏠</span>
              <h3 className="font-bold text-gray-800 mb-2">Homemade</h3>
              <p className="text-gray-600 text-sm">Made fresh in our kitchen</p>
            </div>
            <div className="text-center p-6 bg-pink-50 rounded-xl">
              <span className="text-4xl mb-3 block">🌟</span>
              <h3 className="font-bold text-gray-800 mb-2">Premium</h3>
              <p className="text-gray-600 text-sm">Finest ingredients only</p>
            </div>
            <div className="text-center p-6 bg-pink-50 rounded-xl">
              <span className="text-4xl mb-3 block">💝</span>
              <h3 className="font-bold text-gray-800 mb-2">Made with Love</h3>
              <p className="text-gray-600 text-sm">Every dessert is special</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}