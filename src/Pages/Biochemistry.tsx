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
  type: 'Fully Automated' | 'Semi Automated';
  imageKey: string;
  documentKey: string;
  features: string[];
}

export const HematologyCategoryPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Fully Automated' | 'Semi Automated'>('All');

  // Hardcoded Product Registry derived from direct specification catalog data
  const products: Product[] = [
  {
    "id": 1,
    "name": "Mispa CXL Pro",
    "brand": "Agappe",
    "type": "Fully Automated",
    "imageKey": "product-21.png",
    "documentKey": "Agappe/Mispa-CXL-Pro.pdf",
    "features": [
      "Mispa CXL Pro Plus has Holographic Concave Flat Field Grafting (HCFG) rear spectrophotometry system designed for best reliability and maximum accuracy.",
      "Throughput: up to 240 tests per hour.",
      "Sample/Reagent pipetting Mechanism.",
      "Multi-Function sample & reagent carousel.",
      "Triple speed mixing mechanism.",
      "Efficient Laundry System.",
      "Semi permanent reaction cuvette.",
      "Calobration & QC Program."
    ]
  },
  {
    "id": 2,
    "name": "Mispa Nano Plus",
    "brand": "Agappe",
    "type": "Fully Automated",
    "imageKey": "product-22.png",
    "documentKey": "Agappe/Mispa-Nano-Plus.pdf",
    "features": [
      "Absorbance photometry, turbidimetry measuring principles.",
      "Throughput: up to 360 tests per hour.",
      "100 sample & reagent positions in 24 hours refrigerated compartment.",
      "Washing station with pre-warmed detergent and de-ionized water.",
      "Capable to communicate with LIS in bi-directional mode.",
      "Proven grating photometer, for accurate test results.",
      "On board refrigeration for better reagent stability.",
      "50 reagent positions and 50 sample positions."
    ]
  },
  {
    "id": 3,
    "name": "EM – 200",
    "brand": "Transasia",
    "type": "Fully Automated",
    "imageKey": "product-23.png",
    "documentKey": "Transasia/EM-200.pdf",
    "features": [
      "Throughput: 200 tests per hour photometric and 400 tests per hour with ISE (*Optional ISE with Na+, K+, Cl-, Li+).",
      "50 positions for reagents with on-board cooling & 39 positions for samples , blank, controls, calibrators, STAT sample at any position.",
      "45 permanent glass cuvettes helps to reduce CPRT.",
      "Intelligent Remote Service support using loT for reporting errors for quick service.",
      "Inbuilt Barcode for reagent and samples, Bi-Directional LIS.",
      "Flexibility for introducing STAT samples at any point of time.",
      "Real time monitoring of reaction curves."
    ]
  },
  {
    "id": 4,
    "name": "EM – 360",
    "brand": "Transasia",
    "type": "Fully Automated",
    "imageKey": "product-24.png",
    "documentKey": "Transasia/EM-360.pdf",
    "features": [
      "Throughput: 360 tests per hour photometric and 600 tests per hour with ISE (*Optional ISE with Na+, K+, Cl-, Li+).",
      "Automated, Discrete, Patient prioritized, Floor model.",
      "50 positions for reagents with on-board cooling & 82 positions for samples , blank, controls, calibrators, STAT sample at any position.",
      "60 permanent glass cuvettes helps to reduce CPRT.",
      "Intelligent Remote Service support using loT for reporting errors for quick service.",
      "Inbuilt Barcode for reagent and samples, Bi-Directional LIS.",
      "On board cooling for reagents to enhance the reagent stability."
    ]
  },
  {
    "id": 5,
    "name": "BS – 240",
    "brand": "Mindray",
    "type": "Fully Automated",
    "imageKey": "product-25.png",
    "documentKey": "Mindray/BS-240.pdf",
    "features": [
      "Absorbance photometry, Turbidimetry, Ion selective electrode technology.",
      "Throughput: up to 200 tests per hour, up to 400 tests per hour with ISE.",
      "Automatic washing for interior and exterior carry over <0.05%.",
      "80 positions for reagents and 40 potions for samples in 24 hour refrigerated compartment (2~12.C).",
      "Independent mixing bar & washing station with pre-warmed detergent and water.",
      "Refrigerated reagent compartment.",
      "Flow cell, Reusable cuvette, Disposable cuvette."
    ]
  },
  {
    "id": 6,
    "name": "Cobas c311",
    "brand": "Roche",
    "type": "Fully Automated",
    "imageKey": "product-26.png",
    "documentKey": "Roche/Cobas-c311.pdf",
    "features": [
      "Stand alone analyzer for clinical chemistry.",
      "Throughput: up to 300 tests per hour for photometry tests, up to 480 tests per hour with ISE.",
      "Number of channels: 42 cassette slots, 3 channels on ISE mode.",
      "Real STAT interrupt is available.",
      "108 sample positions with continuous random access and flexible STAT priority settings.",
      "Automatic determination of sample integrity.",
      "No preparation or mixing required.",
      "Economic usage with high stabilities and convenient kit sizes.",
      "Automated maintenance functions."
    ]
  },
  {
    "id": 7,
    "name": "BS – 230",
    "brand": "Mindray",
    "type": "Fully Automated",
    "imageKey": "product-27.png",
    "documentKey": "Mindray/BS-230.pdf",
    "features": [
      "Absorbance photometry, Turbidimetry, Ion selective electrode technology.",
      "Throughput: up to 200 tests per hour, up to 400 tests per hour with ISE.",
      "Automatic washing for interior and exterior carry over <0.05%.",
      "80 positions for reagents and 40 potions for samples in 24 hour refrigerated compartment (2~12.C).",
      "Independent mixing bar.",
      "Disposable cuvettes to avoid contamination.",
      "Probe carryover less than 0.05%."
    ]
  },
  {
    "id": 8,
    "name": "BS – 240 E",
    "brand": "Mindray",
    "type": "Fully Automated",
    "imageKey": "product-28.png",
    "documentKey": "Mindray/BS-240-E.pdf",
    "features": [
      "Absorbance photometry, Turbidimetry, Ion selective electrode technology.",
      "Throughput: up to 240 photometric tests per hour, up to 400 tests per hour with ISE.",
      "Automatic washing for interior and exterior carry over <0.05%.",
      "50-100 positions for reagents and 50-100 potions for samples in 24 hour refrigerated compartment (2~12.C).",
      "Independent mixing bar.",
      "Intelligent probe with optional clog detection and optimized washing station."
    ]
  },
  {
    "id": 9,
    "name": "BS – 430",
    "brand": "Mindray",
    "type": "Fully Automated",
    "imageKey": "product-29.png",
    "documentKey": "Mindray/BS-430.pdf",
    "features": [
      "Automatic, discrete, random access, STAT sample priority.",
      "Throughput up to 420 photometric tests per hour, up to 626 tests per hour with ISE.",
      "92 positions for reagents and 102 potions for samples in 24 hour refrigerated compartment (2~8.C).",
      "Up to 2000 hours tungsten halogen lamp.",
      "93 reusable cuvettes with 8 step auto washing.",
      "Dry bath, no need regular maintenance.",
      "2 Independent mixers with speed detection."
    ]
  },
  {
    "id": 10,
    "name": "BS – 600 M",
    "brand": "Mindray",
    "type": "Fully Automated",
    "imageKey": "product-30.png",
    "documentKey": "Mindray/BS-600-M.pdf",
    "features": [
      "Throughput up to 600 photometric tests per hour, up to 800 tests per hour with ISE.",
      "120 samples by 12 racks, sample continuous loading, STAT in priority, 80 reagents positions with cooling system (2~8.C)",
      "124 reusable cuvettes with 8 step auto wash.",
      "Easy operation and maintenance.",
      "Intelligent abnormal reaction detection, alarming and auto return to minimizes erroneous results.",
      "NGSP Certified and IFCC traceable, On board hemolysis without sample preparation.",
      "Lower detection limit of Hb, less rerun rate."
    ]
  },
  {
    "id": 11,
    "name": "Mispa VIVA",
    "brand": "Agappe",
    "type": "Semi Automated",
    "imageKey": "product-31.png",
    "documentKey": "Agappe/Mispa-VIVA.pdf",
    "features": [
      "Embedded system with 5.7 inch TFT LCD color display with popup keypad.",
      "Ensures clear light passage for accurate and reproducible results.",
      "Significant power saving, low maintenance expense.",
      "Offers enhanced accuracy and rules out the carry over.",
      "5,000 test results memory.",
      "18,000 QC results memory.",
      "Aspiration air gap and Auto empty function – No more worries on carry over.",
      "ERA Flow cell with copper flow cell holder – Auto temperature maintenance."
    ]
  },
  {
    "id": 12,
    "name": "Mispa Plus",
    "brand": "Agappe",
    "type": "Semi Automated",
    "imageKey": "product-32.png",
    "documentKey": "Agappe/Mispa-Plus.pdf",
    "features": [
      "Enhanced resistive aluminium flow cell, Flow cell should be 30 uL or less in size.",
      "Penta lens photometry system.",
      "7 inch capacitive touch screen.",
      "EMF Filter (Energy Matched Filter).",
      "Up to 10 calibration points, up to 3 replicates per points.",
      "Storage capacity up to 5000 test results.",
      "Result accuracy & precision.",
      "Carry over elimination facility."
    ]
  },
  {
    "id": 13,
    "name": "Erba Chem – 5x",
    "brand": "Transasia",
    "type": "Semi Automated",
    "imageKey": "product-33.png",
    "documentKey": "Transasia/Erba-Chem-5x.pdf",
    "features": [
      "222 open user defined tests programs and 5000 results memory.",
      "Multipoint calibration up to 6 standards with graphical display.",
      "Aspiration volume from 100 uL to 2997 uL.",
      "Monochromatic & bichromatic measurement.",
      "Built in self diagnosis with help key facility.",
      "Sturdy hardware requires less servicing.",
      "Large graphical display with 25 function key board.",
      "Connectivity to external incubator.",
      "Dual cuvette system and inbuilt thermal printer."
    ]
  },
  {
    "id": 14,
    "name": "Erba Chem – 7",
    "brand": "Transasia",
    "type": "Semi Automated",
    "imageKey": "product-34.png",
    "documentKey": "Transasia/Erba-Chem-7.pdf",
    "features": [
      "222 open user defined tests programs and 5000 results memory.",
      "Multipoint calibration up to 10 standards with graphical display.",
      "56 direct access keys.",
      "3 levels of quality control with Levy Jennings Plot.",
      "Aspiration volume from 100 uL to 2997 uL.",
      "Sturdy hardware requires less servicing.",
      "Large graphical display with 56 direct access key board.",
      "Connectivity to external incubator."
    ]
  },
  {
    "id": 15,
    "name": "Microlab – 300",
    "brand": "Elitech",
    "type": "Semi Automated",
    "imageKey": "product-35.png",
    "documentKey": "Elitech/Microlab-300.pdf",
    "features": [
      "Simplicity of operating.",
      "60 programmable tests, broad test menu.",
      "Bi-directional host connection.",
      "Up to 12 programmable wavelengths.",
      "Full size screen and QWERTY keyboard.",
      "Superior optical design.",
      "On board quality control.",
      "No warmup time."
    ]
  },
  {
    "id": 16,
    "name": "Yumizen CA 40",
    "brand": "Horiba",
    "type": "Semi Automated",
    "imageKey": "product-36.png",
    "documentKey": "Horiba/Yumizen-CA-40.pdf",
    "features": [
      "Endpoint, fixed time, kinetics, absorbance & coagulation.",
      "Aspiration volume from 200 uL to 1000 uL.",
      "Storage capacity: 245 programs, 5000 tests records with reaction curve.",
      "8 inch graphics color LCD with resistive touch screen.",
      "Tri level Quality Control with Levy Jennings chart.",
      "6 filters with additional 2 open positions.",
      "8 incubation positions for chemistry tests and 5 positions for coagulation tests."
    ]
  },
  {
    "id": 17,
    "name": "Accuchem 100",
    "brand": "Labcare Diagnostics",
    "type": "Semi Automated",
    "imageKey": "product-37.png",
    "documentKey": "Labcare_Diagnostics/Accuchem-100.pdf",
    "features": [
      "Compact design, intelligent & humanized software & convenient operation through touch screen.",
      "Perfect balance of efficiency and flexibility.",
      "6 interfaces, more suitable for 5 USB interfaces + Ethernet port.",
      "Powerful inner core, huge storage a7 windows embedded compact 7 smart operation system."
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
                  Biohemistry Analyzer
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
            {(['All', 'Fully Automated', 'Semi Automated'] as const).map((filter) => (
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
                  product.type === 'Semi Automated' 
                    ? 'bg-emerald-500 text-white border-emerald-400' 
                    : 'bg-blue-600 text-white border-blue-500'
                }`}>
                  {product.type} Analyzer
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