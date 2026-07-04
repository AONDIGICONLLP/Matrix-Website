import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Binary } from 'lucide-react';

interface ProductItem {
  title: string;
  image: string;
  link: string;
}

export const ProductSlider: React.FC = () => {
  const products: ProductItem[] = [
    { title: "Hematology Analyzer & Reagents", image: "assets/img/categories/category-01.webp" , link:"hematology"},
    { title: "Biochemistry Analyzer & Reagents", image: "assets/img/categories/category-02.webp" , link:"biochemistry"},
    { title: "Electrolyte Analyzer", image: "assets/img/categories/category-03.webp", link:"electrolyte" },
    { title: "Immunoassay Analyzer", image: "assets/img/categories/category-04.webp", link:"immunoassay" },
    { title: "Coagulation Analyzer", image: "assets/img/categories/category-05.webp", link:"coagulation" },
    { title: "Urine Analyzer & Strips", image: "assets/img/categories/category-06.webp", link:"urine-analyzer" },
    { title: "Elisa Reader & Washer", image: "assets/img/categories/category-07.webp", link:"elisa" },
    { title: "Electrophoresis", image: "assets/img/categories/category-08.webp", link:"electrophoresis" },
    { title: "Turbidometers", image: "assets/img/categories/category-09.webp", link:"turbidometers" },
    { title: "HPLC Systems", image: "assets/img/categories/category-10.webp", link:"hplc" },
    { title: "Blood Gas Analyzer", image: "assets/img/categories/category-11.webp", link:"blood-gas" },
    { title: "HB Meters", image: "assets/img/categories/category-12.webp", link:"hb-meters" },
    { title: "POCT", image: "assets/img/categories/category-13.webp", link:"poct" },
    { title: "Microscopes", image: "assets/img/categories/category-14.webp", link:"microscopes" },
    { title: "Centrifuges", image: "assets/img/categories/category-15.webp", link:"centrifuges" }
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Layout calculations: Displays 4 items on desktop (lg), 3 on tablet (md), 2 on mobile (sm)
  const itemsPerPage = 4;
  const maxIndex = products.length - itemsPerPage;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };
  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Slider Title and Navigation Header Controls */}
        <div className="flex flex-col sm:flex-row md:items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Product Categories</h2>
            <p className="text-gray-500 text-sm mt-1">Advanced multi-tier in-vitro diagnostic mechanisms</p>
          </div>
          
          <div className="flex space-x-2 mt-4 sm:mt-0">
            <button 
              onClick={prevSlide} 
              className="p-3 bg-white border border-gray-200 text-gray-700 hover:bg-blue-600 hover:text-white rounded-xl shadow-sm transition-all" 
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={nextSlide} 
              className="p-3 bg-white border border-gray-200 text-gray-700 hover:bg-blue-600 hover:text-white rounded-xl shadow-sm transition-all" 
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Window */}
        <div className="relative w-full">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
          >
            {products.map((product, idx) => (
              <div key={idx} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 p-3">
                <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group cursor-pointer flex flex-col h-full bg-white">
                  
                  {/* Square Image Box (Strictly optimized for 300x300 structural context) */}
                  <div className="w-full aspect-square bg-gray-50 overflow-hidden relative border-b border-gray-100">
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      width={300}
                      height={300}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                      onError={(e) => {
                        // High quality technical lab placeholder if individual images are absent
                        (e.target as HTMLImageElement).src = product.image;
                      }}
                    />
                    
                    {/* Floating Diagnostic Tag */}
                    <div className="absolute bottom-3 left-3 w-8 h-8 bg-slate-900/80 text-white rounded-lg flex items-center justify-center backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Binary className="w-4 h-4 text-blue-400" />
                    </div>
                  </div>

                  {/* Text Title Container Box */}
                  <div className="p-5 flex flex-col flex-1 justify-between min-h-[5.5rem]">
                    <a className="font-bold text-gray-800 text-sm tracking-tight leading-snug group-hover:text-blue-600 transition-colors line-clamp-2" href={product.link}>
                      {product.title}
                    </a>
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

export default ProductSlider;