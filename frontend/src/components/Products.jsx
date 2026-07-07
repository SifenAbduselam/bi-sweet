// src/components/Products.jsx
import { businessPresets } from "../data/businessPresets";
import heroBg from "../assets/hero-bg.jpg";

export default function Products() {
  const { products } = businessPresets.bakery;

  return (
    <section 
      id="products" 
      className="relative py-20 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Light Pink Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-50/95 via-white/90 to-pink-50/95" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-down">
          <p className="text-pink-600 font-semibold uppercase tracking-widest mb-3 text-sm">
            Our Menu
          </p>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-4">
            Delicious Desserts
          </h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-700 mt-4 max-w-xl mx-auto text-lg">
            Handcrafted with love, made fresh to order
          </p>
        </div>

        {/* Products Grid - 4 columns on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className="group relative animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Floating Card with Glassmorphism */}
              <div className="relative bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-white/50">
                
                {/* Category Badge */}
                <div className="absolute -top-3 left-6">
                  <span className="inline-block bg-pink-500 text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md">
                    {product.category}
                  </span>
                </div>

                {/* Content */}
                <div className="pt-4">
                  {/* Product Name */}
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-2 leading-tight group-hover:text-pink-600 transition-colors">
                    {product.name}
                  </h3>

                  {/* Price - Prominent */}
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-3xl font-bold text-pink-600">
                      {product.price}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">
                    {product.description}
                  </p>

                  {/* Order Button */}
                  <button className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white py-3 rounded-full font-semibold text-sm transition-all hover:shadow-lg hover:scale-105 uppercase tracking-wide">
                    Add to Order
                  </button>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-pink-200/30 to-transparent rounded-tr-2xl rounded-bl-full pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up">
          <p className="text-gray-700 text-lg mb-6">
            Can't decide? Try our mixed dessert box!
          </p>
          <a 
            href="#contact"
            className="inline-block bg-white border-2 border-pink-500 text-pink-600 hover:bg-pink-500 hover:text-white px-10 py-4 rounded-full font-semibold transition-all hover:scale-105 hover:shadow-xl uppercase tracking-wide text-sm"
          >
            Contact Us for Custom Orders
          </a>
        </div>
      </div>
    </section>
  );
}