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
    <section id="products" className="w-full my-16 md:my-24 px-0">

      <div className="w-full bg-[#8B4A5A] shadow-2xl py-16 md:py-20">

        <div className="max-w-7xl mx-auto px-6 md:px-12">


          {/* Header */}
          <div className="text-center mb-16">

            <div className="inline-flex items-center gap-2 mb-4">

              <span className="w-10 h-px bg-white/40" />

              <p className="text-white/80 text-xs font-medium uppercase tracking-[0.3em]">
                Our Menu
              </p>

              <span className="w-10 h-px bg-white/40" />

            </div>


            <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-3">
              Exquisite Desserts
            </h2>


            <p className="text-white/80 max-w-xl mx-auto font-light">
              Handcrafted with love, made fresh to order
            </p>

          </div>



          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">


            {products.map((product) => {


              const productImage =
                productImages[product.name] || heroBg;



              return (

                <div
                  key={product.id}
                  className="group bg-[#723C4B] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/10"
                >


                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">

                    <img
                      src={productImage}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                  </div>



                  {/* Content */}
                  <div className="p-6">


                    <h3 className="text-2xl font-serif text-white leading-tight mb-2 group-hover:text-[#F5E0E3] transition-colors">
                      {product.name}
                    </h3>



                    <p className="text-white/70 text-sm leading-relaxed font-light mb-5">
                      {product.description}
                    </p>



                    <div className="w-full h-px bg-white/20 mb-5" />



                    {/* Sizes */}
                    <div className="space-y-3">


                      {/* Small */}
                      <div className="flex justify-between items-center">

                        <span className="text-white/60 text-xs uppercase tracking-wider font-medium">
                          {product.sizes.small.label}
                        </span>


                        <span className="text-lg font-serif font-semibold text-[#F5E0E3]">
                          {product.sizes.small.price} Br
                        </span>


                      </div>




                      {/* Large */}
                      <div className="flex justify-between items-center">


                        <div className="flex items-center gap-2">

                          <span className="text-white/60 text-xs uppercase tracking-wider font-medium">
                            {product.sizes.large.label}
                          </span>


                          <span className="text-[10px] bg-white/10 text-white/80 px-2 py-0.5 rounded-full uppercase tracking-wider">
                            Popular
                          </span>


                        </div>



                        <span className="text-xl font-serif font-bold text-white">
                          {product.sizes.large.price} Br
                        </span>


                      </div>


                    </div>



                  </div>


                </div>

              );

            })}


          </div>


        </div>


      </div>


    </section>
  );
}