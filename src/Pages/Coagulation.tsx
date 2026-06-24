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
  type: 'Coagulation Analyzer';
  imageKey: string;
  documentKey: string;
  features: string[];
}

export const HematologyCategoryPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'Coagulation Analyzer'>('Coagulation Analyzer');

  // Hardcoded Product Registry derived from direct specification catalog data
  const products: Product[] = [
  {
    "id": 1,
    "name": "Mispa Clog",
    "brand": "Agappe",
    "type": "Coagulation Analyzer",
    "imageKey": "product-53.png",
    "documentKey": "Agappe/Mispa-Clog.pdf",
    "features": [
      "Turbodensitometric with automated start function.",
      "Automated calculation of result as per the parameter as seconds, INR, %, G/L, mg/dL, ratio.",
      "1 position for reagent incubation & 4 sample incubation positions.",
      "Single channel measuring with magnetic mixer motor.",
      "7 pre programmed test positions.",
      "Single reagent position with stirring function.",
      "9 point calibration.",
      "Minimum cuvette volume for one test is 150 uL."
    ]
  },
  {
    "id": 2,
    "name": "Erba ECL 105",
    "brand": "Transasia",
    "type": "Coagulation Analyzer",
    "imageKey": "product-54.png",
    "documentKey": "Transasia/Erba-ECL-105.pdf",
    "features": [
      "Semi automated coagulation analyzer with Single reagent position.",
      "Reliable and accurate results based on gold standard nephelometry optics principle.",
      "User friendly software large graphic alpha numeric color touch screen display.",
      "Elimination of transcription errors through LIS connectivity.",
      "Clotting tests such as PT, APTT, fibrinogen, thrombin time, factors, lupus anticoagulant performed using light scatter principle.",
      "Low reagent consumption.",
      "USB connectivity.",
      "CE mark."
    ]
  },
  {
    "id": 3,
    "name": "Erba ECL 412",
    "brand": "Transasia",
    "type": "Coagulation Analyzer",
    "imageKey": "product-55.png",
    "documentKey": "Transasia/Erba-ECL-412.pdf",
    "features": [
      "Semi automated coagulation analyzer with four testing position.",
      "Reliable and accurate results based on gold standard nephelometry optics principle.",
      "User friendly software large graphic alpha numeric color touch screen display.",
      "Elimination of transcription errors through LIS connectivity.",
      "12 levels of QC with Levy Jennings plot- identifies random and systematic errors.",
      "Low reagent consumption.",
      "Temperature stability at 37 degree C to perform the tests.",
      "USB Connectivity.",
      "CE mark."
    ]
  },
  {
    "id": 4,
    "name": "Thrombostat (Single Channel)",
    "brand": "Behnk",
    "type": "Coagulation Analyzer",
    "imageKey": "product-56.png",
    "documentKey": "Behnk/Thrombostat-Single-Channel.pdf",
    "features": [
      "Measuring Channels: 1.",
      "Incubation positions: 5.",
      "Reagent Positions: 1-5.",
      "Test Volume: 150-400 uL.",
      "Mechanical measuring system.",
      "Can determine all coagulation parameters.",
      "Maintenance free.",
      "Designed for both Laboratory & Mobile use."
    ]
  },
  {
    "id": 5,
    "name": "Thrombostat (Double Channel)",
    "brand": "Behnk",
    "type": "Coagulation Analyzer",
    "imageKey": "product-57.png",
    "documentKey": "Behnk/Thrombostat-Double-Channel.pdf",
    "features": [
      "Measuring Channels: 2.",
      "Incubation positions: 4.",
      "Reagent Positions: 1.",
      "Test Volume: 150-400 uL.",
      "Can determine all coagulation parameters.",
      "Maintenance free.",
      "Designed for both Laboratory & Mobile use."
    ]
  },
  {
    "id": 6,
    "name": "CA 104 (Four Channel)",
    "brand": "Sysmex",
    "type": "Coagulation Analyzer",
    "imageKey": "product-58.png",
    "documentKey": "Sysmex/CA-104-Four-Channel.pdf",
    "features": [
      "Coagulation testing is made easy with built in timer, temperature control and auto start and timing of measuring process.",
      "Easy to use with pre-programmed methods.",
      "Objective detection of clot formation.",
      "Increase throughput with short incubation time.",
      "A technology that requires only half the sample and reagent volume for testing as compared to manual method.",
      "Automatic light intensity adjustment according to the turbidity of the plasma, making it possible to measure icteric or lipemic plasma reliably."
    ]
  },
  {
    "id": 7,
    "name": "CA 101 (Single Channel)",
    "brand": "Sysmex",
    "type": "Coagulation Analyzer",
    "imageKey": "product-59.png",
    "documentKey": "Sysmex/CA-101-Single-Channel.pdf",
    "features": [
      "Coagulation testing is made easy with built in timer, temperature control and auto start and timing of measuring process.",
      "Easy to use with pre-programmed methods.",
      "Objective detection of clot formation.",
      "Increase throughput with short incubation time.",
      "A technology that requires only half the sample and reagent volume for testing as compared to manual method.",
      "Automatic light intensity adjustment according to the turbidity of the plasma, making it possible to measure icteric or lipemic plasma reliably.",
      "A compact design, combined with the use of Chip Card system for your convenience."
    ]
  },
  {
    "id": 8,
    "name": "Hemostar XF 1.0",
    "brand": "Tulip",
    "type": "Coagulation Analyzer",
    "imageKey": "product-60.png",
    "documentKey": "Tulip/Hemostar-XF-1.0.pdf",
    "features": [
      "Opto mechanical measuring system.",
      "Single channel.",
      "50 programmable sample ID.",
      "Large LCD backlight graphical display.",
      "Incubation: 2 reagent, 20 sample and single reading position.",
      "In built thermal printer.",
      "2 to 7 points with plot calibration."
    ]
  },
  {
    "id": 9,
    "name": "Hemostar XF 2.0",
    "brand": "Tulip",
    "type": "Coagulation Analyzer",
    "imageKey": "product-61.png",
    "documentKey": "Tulip/Hemostar-XF-2.0.pdf",
    "features": [
      "2 channels with independent optics.",
      "Simultaneous testing of two different parameters.",
      "50 programmable assay locations.",
      "3 level QC.",
      "Large LCD backlight graphical display.",
      "Incubation: 2 reagent, 16 sample and 2 reading positions.",
      "In built thermal printer.",
      "2 to 7 points with plot calibration."
    ]
  }
];

  const filteredProducts = products.filter(p => activeFilter === 'Coagulation Analyzer' || p.type === activeFilter);

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
                  Coagulation Analyzer
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
            {(['Coagulation Analyzer'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg text-xs font-black uppercase tracking-wider transition-all duration-200 ${
                  activeFilter === filter
                    ? 'bg-[#15558d] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-300/40'
                }`}
              >
                {filter === 'Coagulation Analyzer' ? 'View All Models' : `${filter} Range`}
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
                  product.type === 'Coagulation Analyzer' 
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