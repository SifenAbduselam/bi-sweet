// src/components/Products.jsx
import { businessPresets } from "../data/businessPresets";
import heroBg from "../assets/hero-bg.jpg";
import whiteCoconut from "../assets/white-coconut.jpg";
import blackStrawberry from "../assets/black-strawberry.jpg";
import kinderBiscoff from "../assets/kinder-biscoff.jpg";
import oreo from "../assets/oreo.jpg";
import whiteStrawberry from "../assets/white-strawberry.jpg";
import lotusBiscoff from "../assets/lotus-biscoff.jpg";

const productImages = {
  "White Coconut": whiteCoconut,
  "Black Strawberry": blackStrawberry,
  "Kinder Biscoff": kinderBiscoff,
  "Oreo": oreo,
  "White Strawberry": whiteStrawberry,
  "Lotus Biscoff": lotusBiscoff,
};

export default function Products() {
  const { products } = businessPresets.bakery;

  return (
    <section 
      id="products" 
      className="relative py-24 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Almost Transparent Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/20 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in-down">
          <p className="text-[#C9A9A6] font-semibold uppercase tracking-widest mb-3 text-sm">
            Our Menu
          </p>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-4">
            Delicious Desserts
          </h2>
          <div className="w-24 h-1 bg-[#C9A9A6] mx-auto rounded-full mb-4" />
          <p className="text-gray-700 mt-4 max-w-xl mx-auto text-lg">
            Handcrafted with love, made fresh to order
          </p>
        </div>

        {/* Products Grid - 2 columns, 3 rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {products.slice(0, 6).map((product, index) => {
            const productImage = productImages[product.name] || heroBg;
            
            return (
              <div 
                key={product.id}
                className="group relative animate-slide-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Elegant Floating Card */}
                <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-4 border border-white/60">
                  
                  {/* Product Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={productImage} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient Overlay on Image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-block bg-white/95 backdrop-blur-sm text-[#C9A9A6] text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full shadow-lg">
                        {product.category}
                      </span>
                    </div>
                    
                    {/* Price Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="inline-block bg-[#C9A9A6] text-white text-lg font-bold px-4 py-2 rounded-full shadow-lg">
                        {product.price}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    {/* Product Name */}
                    <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3 group-hover:text-[#C9A9A6] transition-colors">
                      {product.name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {product.description}
                    </p>

                    {/* Order Button */}
                    <button className="w-full bg-gradient-to-r from-[#D4B5B2] to-[#C9A9A6] hover:from-[#C9A9A6] hover:to-[#B79A9A] text-white py-4 rounded-full font-semibold text-sm transition-all hover:shadow-xl hover:scale-[1.02] uppercase tracking-wider">
                      Add to Order →
                    </button>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#E5D0CC]/40 to-transparent rounded-tr-3xl rounded-bl-full pointer-events-none"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 animate-fade-in-up">
          <p className="text-gray-700 text-lg mb-6">
            Want something special? We create custom desserts!
          </p>
          <a 
            href="#contact"
            className="inline-block bg-white border-2 border-[#C9A9A6] text-[#C9A9A6] hover:bg-[#C9A9A6] hover:text-white px-10 py-4 rounded-full font-semibold transition-all hover:scale-105 hover:shadow-xl uppercase tracking-wide text-sm"
          >
            Contact Us for Custom Orders
          </a>
        </div>
      </div>
    </section>
  );
}