// src/components/Products.jsx
import { businessPresets } from "../data/businessPresets";

export default function Products() {
  const { products } = businessPresets.bakery;

  return (
    <section id="products" className="py-20 bg-pink-50">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-pink-500 font-semibold uppercase tracking-wider mb-2">Our Menu</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Delicious Desserts
          </h2>
          <div className="w-20 h-1 bg-pink-500 mx-auto rounded-full" />
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Handcrafted with love, made fresh to order
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-2 group"
            >
              {/* Product Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <span className="text-xs font-semibold text-pink-500 uppercase tracking-wider">
                      {product.category}
                    </span>
                    <h3 className="text-xl font-bold text-gray-800 mt-1">{product.name}</h3>
                  </div>
                  <span className="text-pink-500 font-bold text-lg whitespace-nowrap ml-2">
                    {product.price}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {product.description}
                </p>
                <button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2.5 rounded-full font-semibold transition-colors">
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}