import React from 'react';
import Header from '../Components/MainHeader';
import Footer from '../Components/Footer';
interface Product {
  id: number;
  name: string;
  brand: string;
  type: string;
  imageKey: string;
  documentKey: string;
  features: string[];
}

const centrifugeData: Product[] = [
  { "id": 1, "name": "Medico Centrifuge C - 852 (4 Tubes)", "brand": "Remi", "type": "Centrifuge", "imageKey": "product-98.png", "documentKey": "Remi/Medico-Centrifuge-C-852-4-Tubes.pdf", "features": [] },
  { "id": 2, "name": "Clinical Centrifuge C - 854/4 (4 Tubes)", "brand": "Remi", "type": "Centrifuge", "imageKey": "product-99.png", "documentKey": "Remi/Clinical-Centrifuge-C-854-4-4-Tubes.pdf", "features": [] },
  { "id": 3, "name": "Clinical Centrifuge C - 854/6 (6 Tubes)", "brand": "Remi", "type": "Centrifuge", "imageKey": "product-100.png", "documentKey": "Remi/Clinical-Centrifuge-C-854-6-6-Tubes.pdf", "features": [] },
  { "id": 4, "name": "Clinical Centrifuge C - 854/8 (8 Tubes)", "brand": "Remi", "type": "Centrifuge", "imageKey": "product-101.png", "documentKey": "Remi/Clinical-Centrifuge-C-854-8-8-Tubes.pdf", "features": [] },
  { "id": 5, "name": "Doctor Centrifuge R - 303 (8 Tubes)", "brand": "Remi", "type": "Centrifuge", "imageKey": "product-102.png", "documentKey": "Remi/Doctor-Centrifuge-R-303-8-Tubes.pdf", "features": [] },
  { "id": 6, "name": "Doctor Centrifuge R - 304 (24 Tubes)", "brand": "Remi", "type": "Centrifuge", "imageKey": "product-103.png", "documentKey": "Remi/Doctor-Centrifuge-R-304-24-Tubes.pdf", "features": [] },
  { "id": 7, "name": "Laboratory Centrifuge R - 4C + R - 41", "brand": "Remi", "type": "Centrifuge", "imageKey": "product-104.png", "documentKey": "Remi/Laboratory-Centrifuge-R-4C-R-41.pdf", "features": [] },
  { "id": 8, "name": "Laboratory Centrifuge R - 8C + S 16 - 15", "brand": "Remi", "type": "Centrifuge", "imageKey": "product-105.png", "documentKey": "Remi/Laboratory-Centrifuge-R-8C-S-16-15.pdf", "features": [] },
  { "id": 9, "name": "Laboratory Centrifuge R - 8C + R - 81", "brand": "Remi", "type": "Centrifuge", "imageKey": "product-106.png", "documentKey": "Remi/Laboratory-Centrifuge-R-8C-R-81.pdf", "features": [] }
];

export default function SimpleCentrifugeList() {
  return (
    <>
            <Header />
              
              {/* 1. INTEGRATED BREADCRUMB BAR */}
              <div className="breadcrumb-bar relative text-slate-900 py-16 overflow-hidden">
                <div className="container mx-auto px-4 max-w-[1150px]">
                  <div className="row align-items-center inner-banner">
                    <div className="col-md-12 col-12 text-center relative z-10">
                      <nav aria-label="breadcrumb" className="page-breadcrumb flex flex-col items-center">
                        <ol className="breadcrumb flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-wider mb-3 text-blue-500">
                          <li className="breadcrumb-item">
                            <a href="index.html" aria-label="home" className="hover:text-emerald-400 transition-colors">
                              <i className="isax isax-home-15 text-sm"></i> Home
                            </a>
                          </li>
                          <li className="text-blue-300/40 select-none">/</li>
                          <li className="breadcrumb-item active text-slate-500" aria-current="page">Products</li>
                        </ol>
                        <h2 className="breadcrumb-title text-2xl md:text-4xl font-black">
                          Centrifuges
                        </h2>
                      </nav>
                    </div>
                  </div>
                </div>
                {/* Decorative Background Assets */}
            <div className="breadcrumb-bg pointer-events-none select-none">
              <img src="assets/img/breadcrumb-bg-01.png" alt="img" className="breadcrumb-bg-01 absolute top-0 left-0  h-50" />
              <img src="assets/img/breadcrumb-bg-02.png" alt="img" className="breadcrumb-bg-02 absolute bottom-0 right-0 h-50" />
              <img src="assets/img/breadcrumb-icon.png" alt="img" className="breadcrumb-bg-03 absolute top-6 right-1/4 w-8 animate-pulse" />
              <img src="assets/img/breadcrumb-icon.png" alt="img" className="breadcrumb-bg-04 absolute bottom-6 left-1/4 w-6 animate-bounce duration-[8000ms]" />
            </div>
          </div>
    <div className="bg-white min-h-screen py-8 px-4 max-w-4xl mx-auto font-sans text-slate-800">
      {/* Simple Header */}
      <div className="border-b border-slate-100 pb-4 mb-6">
        <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          {/* Centrifuge Icon */}
          <svg className="w-6 h-6 text-indigo-600 animate-spin-slow" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 11.518.408l-.023.046m-2.284 3.946l.041-.02a.75.75 0 11.517.408l-.023.046m-2.284 3.946l.041-.02a.75.75 0 11.517.408l-.023.046M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            <circle cx="12" cy="12" r="3" strokeWidth="2"/>
          </svg>
          Centrifuge Directory
        </h1>
        <p className="text-sm text-slate-500 mt-1">Available clinical and laboratory rotation models</p>
      </div>

      {/* Simplified List View */}
      <div className="divide-y divide-slate-100">
        {centrifugeData.map((item) => (
          <div key={item.id} className="py-4 flex items-center justify-between hover:bg-slate-50 px-2 rounded-md transition-colors">
            
            {/* Info details */}
            <div className="flex flex-col pr-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-slate-900">{item.name}</span>
                {item.name.includes('Tubes') && (
                  <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 text-xxs font-medium px-1.5 py-0.5 rounded border border-blue-200">
                    Capacity Variant
                  </span>
                )}
              </div>
              <div className="text-xs text-slate-500 mt-0.5 flex items-center gap-3">
                <span>Make: <strong className="font-medium text-slate-700">{item.brand}</strong></span>
                <span className="text-slate-300">|</span>
                <span>Type: {item.type}</span>
              </div>
            </div>

            {/* Action Button */}
            <div className="flex-shrink-0">
              <a
                href={`/docs/${item.documentKey}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded transition-colors"
              >
                {/* Document Icon */}
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Brochure
              </a>
            </div>

          </div>
        ))}
      </div>
    </div>

    <Footer />
       </>
  );
}