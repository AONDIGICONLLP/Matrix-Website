import React, { useState } from 'react';
import { Star, ShieldCheck, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductCard {
  name: string;
  category: string;
  image: string;
  sku: string;
}

export const TopSellingProducts: React.FC = () => {
  const featuredProducts: ProductCard[] = [
    {
      name: "Matrix Advanced Automated Hematology Analyzer",
      category: "Hematology Analyzer & Reagents",
      image: "assets/img/products/hematology-analyzers.webp",
      sku: "MTX-HEM-500"
    },
    {
      name: "High-Throughput Clinical Biochemistry System",
      category: "Biochemistry Analyzer & Reagents",
      image: "assets/img/products/biochemestry-analyzer.webp",
      sku: "MTX-BIO-720"
    },
    {
      name: "Precision Automated Electrolyte Measurement Deck",
      category: "Electrolyte Analyzer",
      image: "assets/img/products/electrolyte.webp",
      sku: "MTX-ELY-300"
    },
    {
      name: "Automated Immunoassay Analyzer Framework",
      category: "Immunoassay Analyzer",
      image: "assets/img/products/immunoassay.webp",
      sku: "MTX-IMM-900"
    },
    {
      name: "Coagulation Analyzer System Deck",
      category: "Coagulation Analyzer",
      image: "assets/img/products/coagulation.webp",
      sku: "MTX-COA-400"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Maximum visible items layout configuration (Responsive breakpoint matching)
  const itemsPerPage = 3;
  const maxIndex = featuredProducts.length - itemsPerPage;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section className="py-16 bg-[#ebf0fe] overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Section Header Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10">
          <div>
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Premium Selection</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-1">Top Selling Products</h2>
          </div>
          
          <div className="flex items-center space-x-3 mt-4 sm:mt-0">
            <button 
              onClick={prevSlide} 
              className="p-3 bg-gray-50 border border-gray-200 text-gray-700 hover:bg-blue-600 hover:text-white rounded-xl shadow-sm transition-all"
              aria-label="Previous product slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button 
              onClick={nextSlide} 
              className="p-3 bg-gray-50 border border-gray-200 text-gray-700 hover:bg-blue-600 hover:text-white rounded-xl shadow-sm transition-all"
              aria-label="Next product slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel Window */}
        <div className="relative w-full">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
          >
            {featuredProducts.map((prod, index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 p-3">
                <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col h-full group">
                  
                  {/* Image Slot Container */}
                  <div className="aspect-[4/3] bg-gray-50 relative overflow-hidden border-b border-gray-50">
                    <img 
                      src={prod.image} 
                      alt={prod.name} 
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300" 
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1582718569369-67999450c74c?q=80&w=600&auto=format&fit=crop";
                      }}
                    />
                    <div className="absolute top-3 left-3 bg-emerald-500 text-white font-bold text-[10px] tracking-wider px-2.5 py-1 rounded-md uppercase flex items-center space-x-1 shadow-sm">
                      <ShieldCheck className="w-3 h-3" />
                      <span>Top Certified</span>
                    </div>
                  </div>

                  {/* Specification details content body */}
                  <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                    <div className="space-y-1">
                      <span className="text-[11px] font-bold text-blue-600 tracking-wide uppercase block">
                        {prod.category}
                      </span>
                      <h3 className="text-base font-bold text-gray-900 line-clamp-2 tracking-tight group-hover:text-blue-600 transition-colors">
                        {prod.name}
                      </h3>
                      <div className="flex items-center space-x-1 text-amber-500 pt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                        <span className="text-xs text-gray-400 ml-1.5 font-medium">(4.9)</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-50 flex items-center justify-between gap-4">
                      <div>
                        <p className="text-[10px] text-gray-400 uppercase tracking-widest">Model SKU</p>
                        <p className="text-xs font-bold text-gray-700">{prod.sku}</p>
                      </div>
                      
                      <button className="inline-flex items-center space-x-2 bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2.5 rounded-xl text-xs font-semibold transition-all">
                        <ShoppingCart className="w-3.5 h-3.5" />
                        <span>Add to cart</span>
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TopSellingProducts;