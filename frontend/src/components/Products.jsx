// src/components/Products.jsx
import { businessPresets } from "../data/businessPresets";
import heroBg from "../assets/hero-bg.jpg";
import whiteCoconut from "../assets/white-coconut.jpg";
import blackStrawberry from "../assets/black-strawberry.jpg";
import kinder from "../assets/kinder.jpg"; // Imported as 'kinder'
import oreo from "../assets/oreo.jpg";
import whiteStrawberry from "../assets/white-strawberry.jpg";
import lotusBiscoff from "../assets/lotus-biscoff.jpg";

const productImages = {
  "White Coconut": whiteCoconut,
  "Black Strawberry": blackStrawberry,
  "Kinder Biscoff": kinder, // 👈 FIXED: Use the imported variable 'kinder' here
  "Oreo": oreo,
  "White Strawberry": whiteStrawberry,
  "Lotus Biscoff": lotusBiscoff,
};

export default function Products() {
  const { products } = businessPresets.bakery;

  return (
    // Cream background matching the site theme
    <section id="products" className="w-full my-16 md:my-24 px-0 bg-[#FFFBF7]">
      <div className="w-full py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-10 h-px bg-[#8B4A5A]/40" />
              <p className="text-[#8B4A5A] text-xs font-medium uppercase tracking-[0.3em]">Our Menu</p>
              <span className="w-10 h-px bg-[#8B4A5A]/40" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-3">Exquisite Desserts</h2>
            <p className="text-gray-600 max-w-xl mx-auto font-light">Handcrafted with love, made fresh to order</p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => {
              // This will now correctly find "Kinder Biscoff" and use the 'kinder' image
              const productImage = productImages[product.name] || heroBg;
              
              return (
                // Clean white card with subtle shadow
                <div key={product.id} className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                  <div className="relative h-56 overflow-hidden">
                    <img src={productImage} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-serif text-gray-900 leading-tight mb-2 group-hover:text-[#8B4A5A] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
                      {product.description}
                    </p>
                    
                    <div className="w-full h-px bg-gray-200 mb-5" />
                    
                    {/* Sizes */}
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500 text-xs uppercase tracking-wider font-medium">
                          {product.sizes.small.label}
                        </span>
                        <span className="text-lg font-serif font-semibold text-[#8B4A5A]">
                          {product.sizes.small.price}
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="text-gray-500 text-xs uppercase tracking-wider font-medium">
                            {product.sizes.large.label}
                          </span>
                          <span className="text-[10px] bg-[#8B4A5A]/10 text-[#8B4A5A] px-2 py-0.5 rounded-full uppercase tracking-wider font-semibold">
                            Popular
                          </span>
                        </div>
                        <span className="text-xl font-serif font-bold text-gray-900">
                          {product.sizes.large.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Custom Orders CTA */}
          <div className="text-center mt-16">
            <div className="inline-block bg-white rounded-2xl p-8 md:p-10 border border-gray-100 shadow-lg">
              <p className="text-gray-900 text-xl md:text-2xl font-serif italic mb-6">
                Looking for something special?
              </p>
              <p className="text-gray-600 text-sm mb-8 max-w-md mx-auto">
                We create custom desserts for birthdays, weddings, and special occasions. Let's bring your vision to life!
              </p>
              <a 
                href="#contact"
                className="inline-block bg-[#8B4A5A] text-white hover:bg-[#723C4B] px-12 py-4 text-sm font-bold uppercase tracking-wider transition-all hover:shadow-xl hover:scale-105 rounded-full"
              >
                Request Custom Order
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}