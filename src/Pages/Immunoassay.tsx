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
  type: 'Immunoassay Analyzer';
  imageKey: string;
  documentKey: string;
  features: string[];
}

export const HematologyCategoryPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'Immunoassay Analyzer'>('Immunoassay Analyzer');

  // Hardcoded Product Registry derived from direct specification catalog data
  const products: Product[] = [
  {
    "id": 1,
    "name": "Maglumi M 2000",
    "brand": "Snibe",
    "type": "Immunoassay Analyzer",
    "imageKey": "product-43.png",
    "documentKey": "Snibe/Maglumi-M-2000.pdf",
    "features": [
      "Flash chemiluminescence label-ABEI, with high sensitivity and long stability.",
      "Throughput up to 180 tests per hour.",
      "Capable of performing more than 166 parameters providing convenience.",
      "Sample position – 144, Reagent position – 15.",
      "24 hours ready to use.",
      "Continuous loading, STAT available.",
      "Barcode reader recognition or analyzer automatic numbered.",
      "Convenience of 50 and 100 tests pack size.",
      "FDA approved – ensuring better quality."
    ]
  },
  {
    "id": 2,
    "name": "Maglumi X3",
    "brand": "Snibe",
    "type": "Immunoassay Analyzer",
    "imageKey": "product-44.png",
    "documentKey": "Snibe/Maglumi-X3.pdf",
    "features": [
      "One of the highest space efficiency CLIA analyzers combines one of the broadest automated CLIA test menus.",
      "Throughput up to 200 tests per hour.",
      "72 sample positions and 20 Reagent positions.",
      "Reagent area with 24 hours refrigeration.",
      "Intelligent UI interface, user friendly, easy and convenient operation.",
      "Intuitive indicator light makes users no need to check reagents and consumables frequently.",
      "No pause loading/unloading of reagents/samples without waiting or interrupting tests.",
      "Single needle coated with Teflon to avoid carry over."
    ]
  },
  {
    "id": 3,
    "name": "Mispa i200",
    "brand": "Agappe",
    "type": "Immunoassay Analyzer",
    "imageKey": "product-45.png",
    "documentKey": "Agappe/Mispa-i200.pdf",
    "features": [
      "Acridinium Ester (AE) direct chemiluminiscence immunoassay technology.",
      "Throughput up to 200 tests per hour for one module.",
      "Sample loading capacity 50 loading with sample racks.",
      "Automatic retest, STAT samples could be placed randomly and tested preferentially.",
      "20 reagent positions with auto RFID Management and Online reagent loading.",
      "50 sample positions with automatic barcode scanning and identification.",
      "Advance Photo Multiplier Tube (PMT) module with an extensive sensing area and fast response time.",
      "First Indian IVD manufacturer to commission in house CLIA Reagent production line."
    ]
  },
  {
    "id": 4,
    "name": "Cobas E411",
    "brand": "Roche",
    "type": "Immunoassay Analyzer",
    "imageKey": "product-46.png",
    "documentKey": "Roche/Cobas-E411.pdf",
    "features": [
      "Fully automated, random access system for immunoassay analysis.",
      "Sample Throughput: up to 88 samples per hour.",
      "Test Throughput: up to 88 tests per hour.",
      "18 channels/reagent slots for up to 18 different assays.",
      "Any unoccupied position on the sample disk, dedicated STAT port on rack feeder.",
      "Sample volume 10-15 uL per test, depending on assay protocol.",
      "Maximum 60 assay definable via 2D barcode (Programming by loading)."
    ]
  },
  {
    "id": 5,
    "name": "CLIA 181",
    "brand": "J-Mitra",
    "type": "Immunoassay Analyzer",
    "imageKey": "product-47.png",
    "documentKey": "J-Mitra/CLIA-181.pdf",
    "features": [
      "Innovative space saving design to handle samples & reagents in one unit.",
      "Throughput up to 120 tests per hour.",
      "Sample positions 30 Nos. and Reagent Positions 10 Nos.",
      "Incubation, washing and light measurement in one unit to ensure reaction consistency.",
      "Patented single steel S/R probe (Needle) for sample & reagent addition contributing in high reliability & more accuracy in test results.",
      "Single assay cup for reagent and sample processing leading to lower cost in consumables.",
      "HIS and LIS compatible with application support.",
      "Large data storage capacity for storing around 500000 patient data."
    ]
  },
  {
    "id": 6,
    "name": "CL 900i",
    "brand": "Mindray",
    "type": "Immunoassay Analyzer",
    "imageKey": "product-48.png",
    "documentKey": "Mindray/CL-900i.pdf",
    "features": [
      "One of the world’s smallest, fully automated CLIA Analyzer.",
      "Throughput up to 180 tests per hour.",
      "Sample positions: 50 Nos. and Reagent Positions: 15 Nos.",
      "Aspiration volume 200 uL.",
      "Ready to use Wash Buffers.",
      "Minimizes carry over, less than 0.3 ppm.",
      "Enhanced washing for sensitive assay."
    ]
  },
  {
    "id": 7,
    "name": "Vidas Kube",
    "brand": "Biomerieux",
    "type": "Immunoassay Analyzer",
    "imageKey": "product-49.png",
    "documentKey": "Biomerieux/Vidas-Kube.pdf",
    "features": [
      "A truly flexible, cost effective automated platform that provides rapid results in complete confidence.",
      "Ready to use reagents with long shelf life.",
      "Optimized productivity with remote maintenance via VILINK connectivity.",
      "Storage memory 27000 tests results approx. 5 years of data.",
      "Accessible volume flexibility – 36 tests per hour per module.",
      "Stackable benchtop design up to 6 modules.",
      "Minimum training and installation required.",
      "Integrated PC for up to 2 modules."
    ]
  },
  {
    "id": 8,
    "name": "AIA 360",
    "brand": "Tosoh",
    "type": "Immunoassay Analyzer",
    "imageKey": "product-50.png",
    "documentKey": "Tosoh/AIA-360.pdf",
    "features": [
      "Fluorescence Enzyme Immunoassay.",
      "Throughput: up to 36 tests per hour.",
      "Compact benchtop unit.",
      "Easy to load, simple to run.",
      "Bar-coded Identification.",
      "Minimal Mechanism Movements.",
      "90 Days Calibration Stability.",
      "Freeze dried chemistry format.",
      "UDTC Technology.",
      "Continuous loading random access system.",
      "Bar coded primary tube sampling."
    ]
  }
];

  const filteredProducts = products.filter(p => activeFilter === 'Immunoassay Analyzer' || p.type === activeFilter);

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
                  Immunoassay Analyzer
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
            {(['Immunoassay Analyzer'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg text-xs font-black uppercase tracking-wider transition-all duration-200 ${
                  activeFilter === filter
                    ? 'bg-[#15558d] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-300/40'
                }`}
              >
                {filter === 'Immunoassay Analyzer' ? 'View All Models' : `${filter} Range`}
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
                  product.type === 'Immunoassay Analyzer' 
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