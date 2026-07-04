import React, { useState } from 'react';
import Header from '../Components/MainHeader';
import Footer from '../Components/Footer';
import { 
  Layers, 
  Cpu, 
  Activity, 
  Zap, 
  ShieldCheck, 
  Filter,
  CheckCircle2,
  FileText
} from 'lucide-react';

// TypeScript schema for structural safety
interface Product {
  id: number;
  name: string;
  brand: string;
  type: 'Electrolyte' | 'Blood Gas' | 'Immunoassay' | 'HB Variant';
  imageKey: string;
  documentKey: string;
  features: string[];
}

export const HematologyCategoryPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Electrolyte' | 'Blood Gas' | 'Immunoassay' | 'HB Variant'>('All');

  // Hardcoded Product Registry derived from direct specification catalog data
  const products: Product[] = [
  {
    "id": 1,
    "name": "Spotchem EL SE – 1520",
    "brand": "Arkray",
    "type": "Electrolyte",
    "imageKey": "product-80.png",
    "documentKey": "Arkray/Spotchem-EL-SE-1520.pdf",
    "features": [
      "Spotchem EL is an electrolyte analysis system with capacity for total electrolyte analysis requirements in all fields.",
      "Easy calibration can be completed with magnetic card.",
      "NA, K, Cl are measured at the same time on the same E – Plate.",
      "Memory up to 50 measurements.",
      "Warmup time – 10 seconds.",
      "Sample volume – 20 uL."
    ]
  },
  {
    "id": 2,
    "name": "Gazelle",
    "brand": "Hemex Health",
    "type": "HB Variant",
    "imageKey": "product-81.png",
    "documentKey": "Hemex_Health/Gazelle.pdf",
    "features": [
      "Accurate, Rugged, Easy and Affordable.",
      "The only miniaturized, automated electrophoresis – a WHO essential diagnostic.",
      "The only Point Of Care test to quantify hemoglobin.",
      "Results onscreen in 8 minutes.",
      "Covid – 19 test available."
    ]
  },
  {
    "id": 3,
    "name": "iSTAT",
    "brand": "Abbott",
    "type": "Blood Gas",
    "imageKey": "product-82.png",
    "documentKey": "Abbott/iSTAT.pdf",
    "features": [
      "Provides an easy to use 4 steps testing process that works with you.",
      "Accelerates patient care decision making.",
      "Offers the most comprehensive bedside testing platform available.",
      "Leverages the power of a single, integrated bedside testing solution.",
      "Single use i-Stat test cartridges offer a broad menu of tests on a single, portable platform.",
      "Each cartridge test has a unique combination of biosensors to suit a wide range of clinical needs."
    ]
  },
  {
    "id": 4,
    "name": "I15",
    "brand": "Edan",
    "type": "Blood Gas",
    "imageKey": "product-83.png",
    "documentKey": "Edan/I15.pdf",
    "features": [
      "Portable, lightweight, easy, quick and convenient.",
      "Capable to run 50 samples with fully charged battery.",
      "Minimize hands on time and training requirement.",
      "Throughput: Results in 1 minute after sample aspiration.",
      "Up to 10000 patient data storage.",
      "Sample volume: 140 uL.",
      "Display: 7 inch color LCD display.",
      "Touch screen and Barcode scanner.",
      "4 USB ports and LAN/WiFi for data management."
    ]
  },
  {
    "id": 5,
    "name": "iChroma II",
    "brand": "Kin Diagnostics",
    "type": "Immunoassay",
    "imageKey": "product-84.png",
    "documentKey": "Kin_Diagnostics/iChroma-II.pdf",
    "features": [
      "Reliable diagnosis of patient on the spot.",
      "Throughput: up to 30 tests per hour.",
      "Interface: 7 inch touch screen.",
      "Built in thermal printer.",
      "Memory: 1000 patient results, 1000 QC results, 100 user IDs.",
      "LIS/HIS compatible."
    ]
  },
  {
    "id": 6,
    "name": "Afias-1",
    "brand": "Boditech",
    "type": "Immunoassay",
    "imageKey": "product-85.png",
    "documentKey": "Boditech/Afias-1.pdf",
    "features": [
      "Automated Desktop Analyzer.",
      "Throughput: up to 10 tests per hour.",
      "1 channel, All in One cartridge.",
      "Memory: 5000 patient results, 5000 QC results, 500 ID chips & 100 user IDs."
    ]
  },
  {
    "id": 7,
    "name": "Afias-6",
    "brand": "Boditech",
    "type": "Immunoassay",
    "imageKey": "product-86.png",
    "documentKey": "Boditech/Afias-6.pdf",
    "features": [
      "6 different tests on 6 different channels.",
      "Throughput: up to 36 tests per hour.",
      "Bay random access (2 bays).",
      "Memory: 5000 patient results, 5000 QC results, 500 ID chips & 100 user IDs."
    ]
  },
  {
    "id": 8,
    "name": "FIA Meter II Plus SE (FS-114)",
    "brand": "Wondfo",
    "type": "Immunoassay",
    "imageKey": "product-87.png",
    "documentKey": "Wondfo/FIA-Meter-II-Plus-SE-FS-114.pdf",
    "features": [
      "Fluorescence Immunoassay Analyzer.",
      "Get results in 3-15 minutes.",
      "Portable, 7800 mAh built in battery.",
      "Specially designed sampler for small volume of specimen.",
      "Built in thermal printer.",
      "Automatically reading of batch number and calibration information in the ID chip.",
      "Suitable for whole blood, serum, plasma and urine.",
      "Room temperature storage.",
      "21 hours stand by time."
    ]
  },
  {
    "id": 9,
    "name": "FIA Meter III Plus SE (FS-205)",
    "brand": "Wondfo",
    "type": "Immunoassay",
    "imageKey": "product-88.png",
    "documentKey": "Wondfo/FIA-Meter-III-Plus-SE-FS-205.pdf",
    "features": [
      "Fluorescence Immunoassay Analyzer.",
      "Get results in 3-15 minutes.",
      "High speed of detection, enable 200 tests per hour.",
      "Specially designed sampler for small volume of specimen.",
      "In built thermal printer.",
      "Cartridge will be automatically ejected into the tray when test is finished.",
      "Room temperature storage.",
      "Direct connection to LIS/HIS."
    ]
  }
];

  const filteredProducts = products.filter(p => activeFilter === 'All' || p.type === activeFilter);

  return (

    <>
        <Header />
    
    <div className="w-full bg-slate-50 text-slate-800 font-sans antialiased selection:bg-[#15558d] selection:text-white">
      
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
                  POCT
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

      {/* 2. LIVE DESK FILTER AND SUB-HEADER INFORMATION */}
      <section className="pt-16 pb-6 container mx-auto px-4 max-w-[1350px]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-slate-200/60 pb-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-black uppercase tracking-widest text-[#15558d] bg-blue-50 px-2.5 py-1 rounded-md inline-block">
              Diagnostics Solutions
            </span>
            <h3 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tight mt-1">
              Premium Differential Cell Counters
            </h3>
          </div>
          
          {/* Segment Filter Controls */}
          <div className="flex items-center gap-2 bg-slate-200/60 p-1 rounded-xl border border-slate-200">
            {(['All' , 'Electrolyte' , 'Blood Gas' , 'Immunoassay' , 'HB Variant'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg text-xs font-black uppercase tracking-wider transition-all duration-200 ${
                  activeFilter === filter
                    ? 'bg-[#15558d] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-300/40'
                }`}
              >
                {filter === 'All' ? 'View All Models' : `${filter} Range`}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORE PRODUCT GRID ENGINE */}
      <section className="pb-24 pt-4 container mx-auto px-4 max-w-[1350px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-3xl border border-slate-200/60 shadow-md hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col overflow-hidden group relative"
            >
              {/* Product Badge Indicators */}
              <div className="absolute top-4 left-4 z-10 flex flex-col gap-1.5 items-start pointer-events-none">
                <span className="bg-slate-900/80 backdrop-blur-md text-white font-black text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-md shadow-sm border border-white/10">
                  {product.brand}
                </span>
                <span className={`font-black text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-md shadow-sm border ${
                  product.type === 'Blood Gas' 
                    ? 'bg-emerald-500 text-white border-emerald-400' 
                    : 'bg-blue-600 text-white border-blue-500'
                }`}>
                  {product.type}
                </span>
              </div>

              {/* IMAGE HOUSING RENDERER CONTAINER */}
              <div className="aspect-[4/3] bg-gradient-to-b from-slate-100 to-white relative flex items-center justify-center p-6 overflow-hidden border-b border-slate-100">
                <img 
                  src={`assets/img/products/${product.imageKey}`} 
                  alt={`${product.brand} ${product.name} Diagnostic Equipment`}
                  className="max-h-[200px] w-auto object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                  onError={(e) => {
                    // Fallback element vector block if static asset file is missing
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      const fallback = parent.querySelector('.img-fallback-prop');
                      if (fallback) fallback.classList.remove('hidden');
                    }
                  }}
                />
                
                {/* Fallback Asset UI Layer */}
                <div className="img-fallback-prop hidden flex flex-col items-center justify-center text-slate-300 group-hover:text-blue-400 transition-colors duration-300">
                  <Activity className="w-16 h-16 stroke-[1.5] animate-pulse" />
                  <span className="text-[10px] uppercase font-black tracking-widest text-slate-400 mt-2">Visual Mapping Pending</span>
                </div>
              </div>

              {/* CONTENT CORE CONTAINER */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-2">
                  <div className="text-slate-400 text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5">
                    <Cpu className="w-3 h-3 text-[#15558d]" /> Clinical Hematology Hardware
                  </div>
                  <h4 className="text-lg font-black text-slate-900 group-hover:text-[#15558d] transition-colors uppercase tracking-tight leading-tight">
                    {product.name}
                  </h4>
                  <div className="w-8 h-0.5 bg-[#15558d] group-hover:w-16 transition-all duration-300 rounded-full" />
                </div>

                {/* FEATURE BULLET PARSER LOOP */}
                <div className="flex-1 bg-slate-50/70 border border-slate-100 rounded-xl p-4 space-y-2.5">
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 flex items-center gap-1">
                    <Layers className="w-3 h-3" /> Technical Architecture
                  </span>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 font-medium leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5 stroke-[2.5]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* INQUIRY PIPELINE CTA FOR CLINICS */}
                <div className="pt-2">
                  <a 
                    href={`assets/Brochures/${product.documentKey}`}
                    className="w-full bg-slate-100 hover:bg-[#15558d] hover:text-white text-slate-700 font-bold text-xs uppercase tracking-wider py-3 rounded-xl transition-all duration-200 inline-flex items-center justify-center gap-2 group-hover:shadow-md border border-slate-200/60"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Brochures</span>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>
    </div>
          <Footer />
    </>
  );
};

export default HematologyCategoryPage;