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
  type: '3-Part' | '5-Part';
  imageKey: string;
  documentKey: string;
  features: string[];
}

export const HematologyCategoryPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | '3-Part' | '5-Part'>('All');

  // Hardcoded Product Registry derived from direct specification catalog data
  const products: Product[] = [
    {
      id: 1,
      name: "Micros 60 OT",
      brand: "Horiba",
      type: "3-Part",
      imageKey: "product-01.png",
      documentKey: "Horiba/MICROS-60-OT.pdf",
      features: [
        "CBC + 3-Diff, 16 Parameters.",
        "Throughput: up to 60 samples per hour (OT Version).",
        "Micro sampling 10 uL of whole blood per cycle.",
        "Storage of 78 results with graphics on rewritable memory smart card.",
        "Compact & lightweight.",
        "Liquid valves (without pinching) – Reliability and increased precision.",
        "No compressor (stepper motor) – Reliability, less maintenance and noise."
      ]
    },
    {
      id: 2,
      name: "Micros ES 60",
      brand: "Horiba",
      type: "3-Part",
      imageKey: "product-02.png",
      documentKey: "Horiba/MICROS-60-ES.pdf",
      features: [
        "CBC + 3-Diff, 19 Parameters.",
        "Throughput: up to 60 samples per hour (OT Version).",
        "Comprehensive quality control program.",
        "Large storage capacity of 1,000 results.",
        "Integrated Bar code reader & ticket printer.",
        "User friendly interface with rapid access to all menus and virtual keyboard.",
        "Flexible data exchange for patient results and quality control."
      ]
    },
    {
      id: 3,
      name: "XQ 320",
      brand: "Sysmex",
      type: "3-Part",
      imageKey: "product-03.png",
      documentKey: "Sysmex/XQ-320.pdf",
      features: [
        "20 parameters including a dedicated neutrophil count.",
        "Only 16 uL aspiration volume.",
        "Optional manual discrimination within histograms for challenging samples.",
        "Flagging system with 20 messages for more insight into the sample.",
        "Very little maintenance – only one weekly shutdown."
      ]
    },
    {
      id: 4,
      name: "Mispa Count X Plus",
      brand: "Agappe",
      type: "3-Part",
      imageKey: "product-04.png",
      documentKey: "Agappe/Mispa_Count_X_Plus_1.pdf",
      features: [
        "CBC + 3-Diff, 21 Parameters + 3 Histograms (RBC, WBC & PLT) 2 Research Parameter (NLR*, PLR**)",
        "Throughput: up to 60 samples per hour.",
        "Only 2 operational reagents & probe cleaner needed.",
        "Large storage capacity up to 200000 samples.",
        "Sample volume is only 9uL which is ideal for pediatrics.",
        "10.4 inch TFT Touch Screen.",
        "Smart and unique maintenance system."
      ]
    },
    {
      id: 5,
      name: "H 360",
      brand: "Transasia",
      type: "3-Part",
      imageKey: "product-05.png",
      documentKey: "Transasia/H360-brochure.pdf",
      features: [
        "Easy, Efficient & Reliable.",
        "Throughput: up to 60 tests per hour.",
        "Full traceability via RFID inventory management system.",
        "Data storage capacity up to 50000 results with graphs.",
        "Prevent build up with anti clog technology.",
        "Low aspiration volume 9 uL.",
        "Automatic floating discriminations."
      ]
    },
    {
      id: 6,
      name: "BC – 20s",
      brand: "Mindray",
      type: "3-Part",
      imageKey: "product-06.png",
      documentKey: "Mindray/BC-20s(2P).pdf",
      features: [
        "Provides information useful for diagnosis including WBC flag, RBC flag & PLT flag.",
        "Throughput: up to 40 tests per hour.",
        "8.4 inch TFT Touch Screen.",
        "Data Storage Capacity up to 200000 results including numeric & graphical information.",
        "Sample volume is only 9.0uL which is ideal for pediatrics.",
        "Original QC, calibrators and reagents."
      ]
    },
    {
      id: 7,
      name: "Accuhem – 100",
      brand: "Labcare Diagnostics",
      type: "3-Part",
      imageKey: "product-07.png",
      documentKey: "Labcare/Accuchem100.pdf",
      features: [
        "Direct impedance method for WBC, RBC and PLT counting cyanide free Lyse reagent for hemoglobin test.",
        "Throughput: up to 60 tests per hour.",
        "10.4 inch TFT color Touch Screen.",
        "Data Storage Capacity up to 100000 results including results and histograms.",
        "Reagents can be stored & transported.",
        "Simplifying the working process with an intuitive operation system.",
        "Giving absolute neutrophil count."
      ]
    },
    {
      id: 8,
      name: "Yumizen H500",
      brand: "Horiba",
      type: "5-Part",
      imageKey: "product-08.png",
      documentKey: "Horiba/YUMIZEN-H500.pdf",
      features: [
        "Artificial Intelligence System.",
        "Throughput up to 50 tests per hour.",
        "Color LCD Touch Screen 12.1 Inch.",
        "Data Storage Capacity up to 10000 results with graphs.",
        "Double hydrodynamic sequential system.",
        "Complete platelet indices."
      ]
    },
    {
      id: 9,
      name: "Yumizen H550 (Autoloader)",
      brand: "Horiba",
      type: "5-Part",
      imageKey: "product-09.png",
      documentKey: "Horiba/YUMIZEN-H550.pdf",
      features: [
        "Auto Loading sample system, 40 tubes Autonomy with continuous loading.",
        "Throughput of 43 tests per hour.",
        "STAT Mode for urgent samples.",
        "Whole blood micro-sampling of 20 uL.",
        "Data Storage Capacity of 10000 with histogram.",
        "27 parameters with full WBC 6 Differential.",
        "Flag and alarms expert system.",
        "Proven technologies of impedance and optical detection."
      ]
    },
    {
      id: 10,
      name: "H 560",
      brand: "Transasia",
      type: "5-Part",
      imageKey: "product-10.png",
      documentKey: "Transasia/H560.pdf",
      features: [
        "Ensure high accuracy with Triangle laser flowcytometry.",
        "Throughput up to 60 samples per hour.",
        "36 parameters including NLR, NRBC, CWBC, Mentzer index & RDW I.",
        "10.4 inch large colored LCD touch screen with graphic icons.",
        "Assured quality with NABL compliance.",
        "RBC/Platelet electrical impedance.",
        "QR code scanner facilitates direct inputs of QC values.",
        "Bidirectional Interfacing."
      ]
    },
    {
      id: 11,
      name: "Elite 580 (Autoloader)",
      brand: "Transasia",
      type: "5-Part",
      imageKey: "product-11.png",
      documentKey: "Transasia/ELite580.pdf",
      features: [
        "Ensure high accuracy with Triangle laser flowcytometry.",
        "Throughput up to 80 samples per hour.",
        "33 parameters including NLR, NRBC, CWBC, Mentzer index & RDW I.",
        "Only 20uL sample volume.",
        "22 inch large colored LCD touch screen with graphic icons.",
        "Assured quality with NABL compliance.",
        "RBC/Platelet electrical impedance.",
        "Large storage capacity of 100000 samples."
      ]
    },
    {
      id: 12,
      name: "XN - 330",
      brand: "Sysmex",
      type: "5-Part",
      imageKey: "product-12.png",
      documentKey: "Sysmex/XN-330.pdf",
      features: [
        "Throughput up to 60 tests per hour.",
        "Data storage capacity of 10000 samples & 20 control files.",
        "Single sample analysis in open mode.",
        "Fully integrated IPU including LCD color touch screen.",
        "Only 25 uL aspiration volume in whole blood mode.",
        "Best in class diagnostics tailored to small & midsized laboratories.",
        "Proven XN fluorescence flow cytometry technology."
      ]
    },
    {
      id: 13,
      name: "XN - 350",
      brand: "Sysmex",
      type: "5-Part",
      imageKey: "product-13.png",
      documentKey: "Sysmex/XN-350.pdf",
      features: [
        "Throughput up to 70 tests per hour.",
        "Single sample analysis in open mode.",
        "Fully integrated IPU including LCD color touch screen.",
        "Only 25 uL aspiration volume in whole blood mode.",
        "Best in class diagnostics tailored to small & midsized laboratories.",
        "More than just CHB + Diff – added clinical values available.",
        "Scalable system, optional values and service available."
      ]
    },
    {
      id: 14,
      name: "BC – 5130",
      brand: "Mindray",
      type: "5-Part",
      imageKey: "product-14.png",
      documentKey: "Mindray/bc-5130.pdf",
      features: [
        "5 Part differentiation, 25 reportable parameters + 10 research parameters, 4 scatter grams and 3 histograms.",
        "Triangle Laser scatter + chemical dye + flow cytometry technology.",
        "Throughput of 60 samples per hour.",
        "Capacity to flag 25 abnormal blood cell morphology.",
        "Large storage capacity up to 150000 samples.",
        "Support Uni or Bi-directional LIS communication.",
        "Dedicated optical counting channel for Basophil measurement.",
        "Sample volume is only 15uL which is ideal for pediatrics."
      ]
    },
    {
      id: 15,
      name: "BC – 5380",
      brand: "Mindray",
      type: "5-Part",
      imageKey: "product-15.png",
      documentKey: "Mindray/bc-5380.pdf",
      features: [
        "Semiconductor laser scatter combined with chemical dye method and advance flow cytometry.",
        "27 parameters for complete 5 part differentiation (CBC+Diff) on white blood cells including immature cells.",
        "30 tubes autoloader with random access.",
        "Capability to flag abnormal samples.",
        "Throughput up to 60 samples per hour.",
        "Windows software with at least 40000 storage for patient results and 60 files for QC data.",
        "Customization on reference range, auto cleaning schedule and report format."
      ]
    },
    {
      id: 16,
      name: "BS – 600",
      brand: "Mindray",
      type: "5-Part",
      imageKey: "product-16.png",
      documentKey: "Mindray/BS-600M.pdf",
      features: [
        "Throughput up to 110 samples per hour (CBC+Diff), up to 40 samples per hour (Body fluid).",
        "Up to 100000 results including numeric and graphical information.",
        "Loading capacity up to 50 sample tubes.",
        "Sample volume: Whole blood – 80 uL, Capillary Blood – 35 uL, Predilute – 20 uL, Body fluid – 85 uL.",
        "Constant 600 photometric tests per hour, up to 240 tests per hour for ISE.",
        "24 hours refrigeration for reagent tray.",
        "Reusable cuvettes with auto-washing station."
      ]
    },
    {
      id: 17,
      name: "BC – 620",
      brand: "Mindray",
      type: "5-Part",
      imageKey: "product-17.png",
      documentKey: "Mindray/BC-20s(6P).pdf",
      features: [
        "Throughput up to 110 samples per hour (CBC+Diff), up to 65 samples per hour (RET) & up to 40 samples per hour (Body fluid).",
        "Up to 100000 results including numeric and graphical information.",
        "Loading capacity up to 50 sample tubes.",
        "Sample volume: Whole blood – 80 uL, Capillary Blood – 35 uL, Predilute – 20 uL, Body fluid – 85 uL."
      ]
    },
    {
      id: 18,
      name: "BC – 700",
      brand: "Mindray",
      type: "5-Part",
      imageKey: "product-18.png",
      documentKey: "Mindray/bc-700.pdf",
      features: [
        "Focusing Flow – DC impedance method.",
        "Throughput up to 80 samples per hour (CBC+Diff), up to 45 samples per hour (CDR) & up to 40 samples per hour (CD+ESR).",
        "Erythrocyte aggregation speed & degree.",
        "Elimination of temperature interference by constant temperature module.",
        "Up to 150000 results including numeric and graphical information.",
        "Sample volume: Whole blood – 23 uL, CD+ESR – 160 uL, Predilute – 20 uL."
      ]
    },
    {
      id: 19,
      name: "BC – 720",
      brand: "Mindray",
      type: "5-Part",
      imageKey: "product-19.png",
      documentKey: "Mindray/bc-700.pdf",
      features: [
        "Focusing Flow – DC impedance method.",
        "Throughput up to 80 samples per hour (CBC+Diff), up to 45 samples per hour (CDR) & up to 40 samples per hour (CD+ESR).",
        "Up to 150000 results including numeric and graphical information.",
        "Light scattering, Flow cytometry & Electrical impedance.",
        "Sample volume: Whole blood – 23 uL, CD+ESR – 160 uL, Predilute – 20 uL."
      ]
    },
    {
      id: 20,
      name: "Mispa HX – 50",
      brand: "Agappe",
      type: "5-Part",
      imageKey: "product-20.png",
      documentKey: "Agappe/MispaHX50.pdf",
      features: [
        "Handheld barcode reader for patient & reagent data entry.",
        "Powerful Flagging capability of abnormal samples.",
        "Helps in diagnosing anemia, neutropenia.",
        "Enhanced abnormal cell detection capacity.",
        "Throughput up to 60 samples per hour.",
        "Specific position for fluorescent dye.",
        "Nucleic Acid Fluorescence staining + Triangle laser scattering technology."
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
                  Hematology Analyzer
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
            {(['All', '3-Part', '5-Part'] as const).map((filter) => (
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
                  product.type === '5-Part' 
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