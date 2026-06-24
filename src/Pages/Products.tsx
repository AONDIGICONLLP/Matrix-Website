import React, { useState, useMemo } from 'react';
import Header from '../Components/MainHeader';
import Footer from '../Components/Footer';
import { 
  Grid, List, Sliders, Search, Eye, ChevronRight, 
  Layers, CheckCircle, Package, ArrowRight, X, Info, FileDown,
  Download
} from 'lucide-react';

// ==========================================
// TYPE DEFINITIONS & REAL PRODUCT DATA MATRIX
// ==========================================
interface Product {
  id: string;
  name: string;
  category: string;
  brand: string;
  subType: string;
  image: string;
  features: string[];
  specs?: string;
  brochureUrl?: string;
}

const MATRIX_PRODUCTS: Product[] = [
  // --- HEMATOLOGY ANALYZER & REAGENTS ---
  {
    id: "prod-001",
    name: "Micros 60 OT",
    category: "Hematology Analyzer & Reagents",
    brand: "Horiba",
    subType: "3 Part Blood Cell Counter",
    image: "assets/img/products/product-01.png?auto=format&fit=crop&q=80&w=600",
    features: [
      "CBC + 3-Diff, 16 Parameters",
      "Throughput: up to 60 samples per hour (OT Version)",
      "Micro sampling 10 uL of whole blood per cycle",
      "Storage of 78 results with graphics on rewritable memory card",
      "Liquid valves (without pinching) – Reliability and increased precision",
      "No compressor (stepper motor) – Reliability, less maintenance and noise"
    ],
    specs: "Ideal for small to mid-sized labs requiring low noise operation and highly accurate micro-sampling workflows.",
    brochureUrl: "assets/Brochures/micros-60-ot.pdf"
  },
  {
    id: "prod-002",
    name: "Micros ES 60",
    category: "Hematology Analyzer & Reagents",
    brand: "Horiba",
    subType: "3 Part Blood Cell Counter",
    image: "assets/img/products/product-02.png?auto=format&fit=crop&q=80&w=600",
    features: [
      "CBC + 3-Diff, 19 Parameters",
      "Throughput: up to 60 samples per hour",
      "Comprehensive quality control program",
      "Large storage capacity of 1,000 results",
      "Integrated Bar code reader & ticket printer",
      "User friendly interface with rapid access to all menus"
    ],
    specs: "Features modern data interfaces for easy calibration transfers and electronic health record system linking.",
    brochureUrl: "assets/Brochures/micros-es-60.pdf"
  },
  {
    id: "prod-003",
    name: "XQ 320",
    category: "Hematology Analyzer & Reagents",
    brand: "Sysmex",
    subType: "3 Part Blood Cell Counter",
    image: "assets/img/products/product-03.png?auto=format&fit=crop&q=80&w=600",
    features: [
      "20 parameters including a dedicated neutrophil count",
      "Only 16 uL aspiration volume",
      "Optional manual discrimination within histograms for challenging samples",
      "Flagging system with 20 messages for more insight into the sample",
      "Very little maintenance – only one weekly shutdown"
    ],
    specs: "Delivers exceptional precision with advanced algorithmic morphology flagging.",
    brochureUrl: "assets/Brochures/sysmex-xq320.pdf"
  },
  {
    id: "prod-004",
    name: "Mispa Count X Plus",
    category: "Hematology Analyzer & Reagents",
    brand: "Agappe",
    subType: "3 Part Blood Cell Counter",
    image: "assets/img/products/product-04.png?auto=format&fit=crop&q=80&w=600",
    features: [
      "CBC + 3-Diff, 21 Parameters + 3 Histograms (RBC, WBC & PLT)",
      "2 Research Parameters (NLR*, PLR**)",
      "Only 2 operational reagents & probe cleaner needed",
      "Large storage capacity up to 200,000 samples",
      "Sample volume is only 9uL which is ideal for pediatrics",
      "10.4 inch TFT Touch Screen"
    ],
    specs: "Extremely cost-effective system designed with a smart tracking inventory setup.",
    brochureUrl: "assets/Brochures/Mispa_Count_X_Plus_1.pdf"
  },

  // --- BIOCHEMISTRY ANALYZER & REAGENTS ---
  {
    id: "prod-005",
    name: "Mispa CXL Pro",
    category: "Biochemistry Analyzer & Reagents",
    brand: "Agappe",
    subType: "Fully Automated Biochemistry Analyzer",
    image: "assets/img/products/product-05.png?auto=format&fit=crop&q=80&w=600",
    features: [
      "Holographic Concave Flat Field Grating (HCFG) rear spectrophotometry system",
      "Throughput: up to 240 tests per hour",
      "Multi-Function sample & reagent carousel",
      "Triple speed mixing mechanism with efficient laundry system",
      "Semi permanent reaction cuvette"
    ],
    specs: "Maximum optical efficiency that guarantees high consistency across clinical biochemistry assays.",
    brochureUrl: "assets/Brochures/Agappe/Mispa_CXL_Pro.pdf"
  },
  {
    id: "prod-006",
    name: "EM 200",
    category: "Biochemistry Analyzer & Reagents",
    brand: "Transasia",
    subType: "Fully Automated Biochemistry Analyzer",
    image: "assets/img/products/product-06.png?auto=format&fit=crop&q=80&w=600",
    features: [
      "Throughput: 200 tests per hour photometric",
      "Up to 400 tests per hour with optional ISE",
      "50 positions for reagents with on-board cooling",
      "45 permanent glass cuvettes reducing cost per reportable test (CPRT)",
      "Intelligent Remote Service support using IoT for error reporting"
    ],
    specs: "Built-in barcodes for both samples and reagents with bidirectional LIS alignment capabilities.",
    brochureUrl: "assets/Brochures/Transasia/EM-200.pdf"
  },

  // --- ELECTROLYTE ANALYZER ---
  {
    id: "prod-007",
    name: "Mispa Ace",
    category: "Electrolyte Analyzer",
    brand: "Agappe",
    subType: "Automated Electrolyte Analyzer",
    image: "assets/img/products/product-07.png?auto=format&fit=crop&q=80&w=600",
    features: [
      "Advanced Ion Selective Electrode (ISE) technology",
      "Measures Na+, K+, Cl-, iCa++, and pH parameters",
      "Throughput of 60 samples per hour with low maintenance overhead",
      "Intelligent liquid level detection flagging mechanism",
      "Sleep mode option for minimal reagent consumption during down-times"
    ],
    specs: "Extremely cost-effective electrolyte tracking system suited for 24/7 critical emergency laboratory deployments.",
    brochureUrl: "assets/Brochures/Agappe/Mispa_Ace.pdf"
  },

  // --- IMMUNOASSAY ANALYZER ---
  {
    id: "prod-008",
    name: "Mispa i3",
    category: "Immunoassay Analyzer",
    brand: "Agappe",
    subType: "Cartridge Based Specific Protein & Immunoassay Analyzer",
    image: "assets/img/products/product-08.png?auto=format&fit=crop&q=80&w=600",
    features: [
      "Dual Channel Testing Platform (Nephelometry & Fluorescence)",
      "Smart card calibration system with zero validation waste",
      "Inject-and-read pre-filled single cartridge profiles",
      "Wide test panel including HbA1c, CRP, D-Dimer, and Ferritin",
      "Throughput parameters: results obtained in under 3 to 5 minutes"
    ],
    specs: "Compact benchtop system delivering elite reference laboratory precision for routine and specialized critical immunoassay panels.",
    brochureUrl: "assets/Brochures/Agappe/Mispa_i3.pdf"
  },

  // --- COAGULATION ANALYZER ---
  {
    id: "prod-009",
    name: "Ecl 105",
    category: "Coagulation Analyzer",
    brand: "Transasia",
    subType: "Single Channel Coagulation Analyzer",
    image: "assets/img/products/product-09.png?auto=format&fit=crop&q=80&w=600",
    features: [
      "Clotting, Chromogenic, and Immunological measurement principle",
      "1 optical testing path with 5 pre-heating positions",
      "Automatic optical block normalization adjustments",
      "Interactive data storage accommodating up to 1,000 internal records",
      "Highly sensitive detection system preventing lipemic or icteric sample errors"
    ],
    specs: "Designed for standard profiles including PT, APTT, Fibrinogen, and Thrombin Time.",
    brochureUrl: "assets/Brochures/Transasia/Ecl_105.pdf"
  },

  // --- URINE ANALYZER ---
  {
    id: "prod-010",
    name: "Laura Smart",
    category: "Urine Analyzer",
    brand: "Transasia",
    subType: "Semi-Automated Urine Test Strip Reader",
    image: "assets/img/products/product-10.png?auto=format&fit=crop&q=80&w=600",
    features: [
      "Throughput capacity up to 240 strips per hour in fast mode",
      "Advanced reflectance photometer processing configuration",
      "Automatic strip type detection mechanism upon insertion",
      "Direct screening parameters including Microalbumin and Creatinine",
      "Built-in thermal printing module for instant telemetry prints"
    ],
    specs: "Elimines manual color parsing variance to ensure highly standardized results for clinical urinalysis screening.",
    brochureUrl: "assets/Brochures/Transasia/Laura_Smart.pdf"
  },

  // --- PROTEIN ANALYZER ---
  {
    id: "prod-011",
    name: "Mispa i2",
    category: "Protien Analyzer",
    brand: "Agappe",
    subType: "Digital Specific Protein Analyzer",
    image: "assets/img/products/product-11.png?auto=format&fit=crop&q=80&w=600",
    features: [
      "Nephelometric analysis tracking matrix with laser source illumination",
      "Unique pre-programmed smart card parameter settings",
      "Optimal dual-mix sample probe sequence architecture",
      "Highly precise assessment metrics for micro-albumin and ASO panels",
      "Minimal maintenance cycle layout requirement"
    ],
    specs: "Dedicated specific protein workstation offering elite resolution thresholds tailored for targeted pathology channels.",
    brochureUrl: "assets/Brochures/Agappe/Mispa_i2.pdf"
  },

  // --- ELISA READER ---
  {
    id: "prod-012",
    name: "ElQuant",
    category: "Elisa Reader",
    brand: "Transasia",
    subType: "Microplate Elisa Reader",
    image: "assets/img/products/product-12.png?auto=format&fit=crop&q=80&w=600",
    features: [
      "Fully configuration-ready 8-channel optical spectrophotometer setup",
      "Extensive measurement parameters spanning 0.0 to 4.0 OD spectrums",
      "Monochromatic and Bichromatic wavelength tracking matrices",
      "Onboard storage support handling up to 100 assay definitions",
      "Large interactive digital output frame with processing diagnostics"
    ],
    specs: "Robust open-reagent system framework ideal for reading multi-well immunoassay matrices with precise multi-wavelength validation.",
    brochureUrl: "assets/Brochures/Transasia/ElQuant.pdf"
  },

  // --- POCT (POINT OF CARE TESTING) ---
  {
    id: "prod-013",
    name: "Mispa CCXL",
    category: "POCT",
    brand: "Agappe",
    subType: "Point-of-Care Clinical Chemistry Analyzer",
    image: "assets/img/products/product-13.png?auto=format&fit=crop&q=80&w=600",
    features: [
      "Fully integrated point-of-care quantitative clinical screening system",
      "Ultra-compact architecture designed for clinical emergency departments",
      "Consumes only a micro-liter tier drop of whole blood samples",
      "Provides results within 8-12 minutes for rapid triaging",
      "Pre-loaded multi-panel testing parameters (Liver, Kidney, Lipid)"
    ],
    specs: "Decentralized analytical testing platform combining reference lab accuracy with ultimate near-patient portability.",
    brochureUrl: "assets/Brochures/Agappe/Mispa_CCXL.pdf"
  },

  // --- HPLC SYSTEM ---
  {
    id: "prod-014",
    name: "Mispa Hb20",
    category: "HPLC System",
    brand: "Agappe",
    subType: "High-Performance Liquid Chromatography System",
    image: "assets/img/products/product-14.png?auto=format&fit=crop&q=80&w=600",
    features: [
      "Gold standard Ion-Exchange HPLC analytical methodology",
      "Direct, quantitative measurement of HbA1c with variant detection",
      "Sampling system with a high-capacity automated sample tray loader",
      "Fast processing runtime generating precise peaks within 2.5 minutes",
      "High resolution chromatogram processing interface metrics"
    ],
    specs: "Designed for high-throughput screening labs demanding precision and automated glycemic tracking control.",
    brochureUrl: "assets/Brochures/Agappe/Mispa_Hb20.pdf"
  }
];

const CATEGORIES = [
  "All Categories",
  "Hematology Analyzer & Reagents",
  "Biochemistry Analyzer & Reagents",
  "Electrolyte Analyzer",
  "Immunoassay Analyzer",
  "Coagulation Analyzer",
  "Urine Analyzer",
  "Protien Analyzer",
  "Bio Gas Analyzer",
  "Elisa Reader",
  "HPLC System",
  "HB Meters",
  "POCT",
];

const BRANDS = ["All Brands", "Horiba", "Sysmex", "Agappe", "Transasia"];

export const MatrixProductsPage: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedBrand, setSelectedBrand] = useState('All Brands');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [selectedModalProduct, setSelectedModalProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    return MATRIX_PRODUCTS.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.subType.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All Categories' || product.category === selectedCategory;
      const matchesBrand = selectedBrand === 'All Brands' || product.brand === selectedBrand;
      
      return matchesSearch && matchesCategory && matchesBrand;
    }).sort((a, b) => {
      return sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
    });
  }, [searchQuery, selectedCategory, selectedBrand, sortOrder]);

  return (
    <>
    <Header />
    
    <div className="w-full bg-[#f8f9fa] text-[#272b41] font-sans antialiased min-h-screen">

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
                  <li className="breadcrumb-item active text-slate-500" aria-current="page">Product</li>
                </ol>
                <h2 className="breadcrumb-title text-2xl md:text-4xl font-black">
                  Diagnostic Instruments
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

      {/* CORE PLATFORM LAYOUT CONTAINER */}
      <div className="max-w-[1320px] mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* SIDEBAR FILTERS */}
          <aside className="lg:col-span-3 bg-white border border-[#f0f0f0] rounded-xl shadow-sm sticky top-6">
            <div className="p-5 border-b border-[#f0f0f0] bg-slate-50/50 rounded-t-xl flex items-center justify-between">
              <h5 className="font-bold text-[#272b41] text-base flex items-center gap-2">
                <Sliders className="w-4 h-4 text-[#15558d]" /> Filter Selection
              </h5>
              <button 
                onClick={() => { setSelectedCategory('All Categories'); setSelectedBrand('All Brands'); setSearchQuery(''); }}
                className="text-xs font-semibold text-rose-500 hover:underline"
              >
                Clear All
              </button>
            </div>

            {/* SEARCH CONTROLLER */}
            <div className="p-5 border-b border-[#f0f0f0]">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Search Catalog</label>
              <div className="relative">
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="e.g. Hematology, Analyzer..."
                  className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 text-sm rounded-lg focus:outline-none focus:border-[#15558d] focus:bg-white transition-colors"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
              </div>
            </div>

            {/* CATEGORY ACCORDION TREE */}
            <div className="p-5 border-b border-[#f0f0f0]">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">Instrument Classes</label>
              <div className="space-y-1 max-h-[350px] overflow-y-auto pr-1">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full flex items-center justify-between px-3 py-2 text-xs font-semibold rounded-md text-left transition-all ${
                      selectedCategory === cat 
                        ? 'bg-[#15558d] text-white shadow-sm' 
                        : 'text-[#4f5665] hover:bg-slate-50 hover:text-[#15558d]'
                    }`}
                  >
                    <span className="truncate">{cat}</span>
                    <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${selectedCategory === cat ? 'text-white' : 'text-slate-300'}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* MANUFACTURER BRAND FILTER */}
            <div className="p-5">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">OEM Brand</label>
              <div className="space-y-2">
                {BRANDS.map((brand) => (
                  <label key={brand} className="flex items-center gap-2.5 text-xs font-semibold text-[#4f5665] cursor-pointer group">
                    <input 
                      type="radio" 
                      name="brand_filter"
                      checked={selectedBrand === brand}
                      onChange={() => setSelectedBrand(brand)}
                      className="w-4 h-4 text-[#15558d] border-slate-300 focus:ring-[#15558d]"
                    />
                    <span className="group-hover:text-[#15558d] transition-colors">{brand}</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* DYNAMIC RECORD INTERACTION LAYER */}
          <main className="lg:col-span-9">
            
            {/* SUB-HEADER SORTER COMPONENT BAR */}
            <div className="bg-white p-4 border border-[#f0f0f0] rounded-xl shadow-sm mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[#757575] font-medium text-center sm:text-left">
                Showing <span className="text-[#15558d] font-bold">{filteredProducts.length}</span> of <span className="font-semibold">{MATRIX_PRODUCTS.length}</span> items across the inventory
              </div>
              
              <div className="flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-end">
                <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-lg p-1">
                  <button 
                    onClick={() => setViewMode('grid')}
                    className={`p-1.5 rounded ${viewMode === 'grid' ? 'bg-white shadow-sm text-[#15558d]' : 'text-slate-400 hover:text-slate-600'}`}
                    aria-label="Grid view layout mode"
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => setViewMode('list')}
                    className={`p-1.5 rounded ${viewMode === 'list' ? 'bg-white shadow-sm text-[#15558d]' : 'text-slate-400 hover:text-slate-600'}`}
                    aria-label="List view layout mode"
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
                
                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
                  className="bg-slate-50 border border-slate-200 text-xs font-semibold px-3 py-2 rounded-lg focus:outline-none focus:border-[#15558d]"
                >
                  <option value="asc">Sort A-Z</option>
                  <option value="desc">Sort Z-A</option>
                </select>
              </div>
            </div>

            {/* EMPTY RENDER GRAPHICS */}
            {filteredProducts.length === 0 && (
              <div className="bg-white border border-[#f0f0f0] rounded-xl p-16 text-center shadow-sm">
                <Package className="w-12 h-12 text-slate-300 mx-auto mb-4 animate-pulse" />
                <h4 className="text-lg font-bold text-[#272b41]">No Instruments Match Your Criteria</h4>
                <p className="text-slate-400 text-sm mt-1 max-w-sm mx-auto">
                  Try clearing some filter tags or search queries to look for other certified systems.
                </p>
              </div>
            )}

            {/* DYNAMIC LAYOUT SWITCH ARCHITECTURE */}
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div 
                    key={product.id} 
                    className="bg-white rounded-xl border border-[#f0f0f0] shadow-sm hover:shadow-md transition-all flex flex-col group overflow-hidden"
                  >
                    <div className="relative bg-slate-50 aspect-[4/3] w-full overflow-hidden border-b border-[#f0f0f0] flex items-center justify-center p-2">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500 mix-blend-multiply" 
                      />
                      <span className="absolute top-3 left-3 bg-[#15558d] text-white font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded shadow-sm">
                        {product.brand}
                      </span>
                    </div>

                    <div className="p-4 flex-1 flex flex-col">
                      <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider mb-1 line-clamp-1">
                        {product.subType}
                      </div>
                      <h4 className="text-base font-bold text-[#272b41] tracking-tight group-hover:text-[#15558d] transition-colors mb-3">
                        {product.name}
                      </h4>
                      
                      <ul className="space-y-1.5 mb-5 flex-1">
                        {product.features.slice(0, 3).map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-1.5 text-xs text-[#555a6d] font-medium leading-tight">
                            <CheckCircle className="w-3.5 h-3.5 text-[#09e5ab] shrink-0 mt-0.5" />
                            <span className="truncate">{feat}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-100">
                        <button
                          onClick={() => setSelectedModalProduct(product)}
                          className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-slate-50 hover:bg-slate-100 text-[#757575] text-xs font-bold rounded-lg border border-slate-200 transition-colors"
                        >
                          <Eye className="w-3.5 h-3.5" /> Specs
                        </button>
                        <a
                          href={product.brochureUrl || "#"}
                          className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-[#09e5ab] hover:bg-[#08d29d] text-[#15558d] text-xs font-bold rounded-lg shadow-sm transition-colors"
                        >
                          <Download className="w-3.5 h-3.5" /> Download
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredProducts.map((product) => (
                  <div 
                    key={product.id} 
                    className="bg-white rounded-xl border border-[#f0f0f0] shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row group overflow-hidden"
                  >
                    <div className="relative bg-slate-50 w-full md:w-64 shrink-0 aspect-[4/3] md:aspect-auto overflow-hidden border-b md:border-b-0 md:border-r border-[#f0f0f0] flex items-center justify-center p-4">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="max-w-full max-h-full object-contain group-hover:scale-101 transition-transform duration-300 mix-blend-multiply" 
                      />
                      <span className="absolute top-3 left-3 bg-[#15558d] text-white font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded shadow-sm">
                        {product.brand}
                      </span>
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                          <div>
                            <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">
                              {product.subType}
                            </div>
                            <h4 className="text-lg font-bold text-[#272b41] tracking-tight group-hover:text-[#15558d] transition-colors">
                              {product.name}
                            </h4>
                          </div>
                          <span className="inline-block bg-blue-50 text-[#15558d] border border-blue-100 text-[10px] font-bold px-2.5 py-0.5 rounded-full max-w-max self-start sm:self-auto">
                            {product.category}
                          </span>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 mt-3 mb-4">
                          {product.features.map((feat, idx) => (
                            <div key={idx} className="flex items-start gap-1.5 text-xs text-[#555a6d] font-medium leading-normal">
                              <CheckCircle className="w-3.5 h-3.5 text-[#09e5ab] shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
                        <button
                          onClick={() => setSelectedModalProduct(product)}
                          className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-50 hover:bg-slate-100 text-[#757575] text-xs font-bold rounded-lg border border-slate-200 transition-colors"
                        >
                          <Info className="w-3.5 h-3.5" /> Structural Specs
                        </button>
                        <a
                          href={product.brochureUrl || "#"}
                          className="inline-flex items-center gap-1.5 px-5 py-2 bg-[#09e5ab] hover:bg-[#08d29d] text-[#15558d] text-xs font-bold rounded-lg shadow-sm transition-colors decoration-0"
                        >
                          <span>Download Brochure</span> <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </main>

        </div>
      </div>

      {/* DETAILED SPECIFICATIONS MODAL DRAWER */}
      {selectedModalProduct && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-3xl shadow-xl border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
            
            <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50 rounded-t-2xl">
              <div>
                <span className="text-[10px] font-bold tracking-wider text-blue-600 uppercase bg-blue-50 border border-blue-100 px-2 py-0.5 rounded">
                  {selectedModalProduct.brand} Certified Model
                </span>
                <h3 className="text-lg font-bold text-[#272b41] mt-1">
                  {selectedModalProduct.name} Details
                </h3>
              </div>
              <button 
                onClick={() => setSelectedModalProduct(null)}
                className="p-1.5 bg-white border border-slate-200 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-50 transition-colors shadow-sm"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 max-h-[70vh] overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                
                <div className="md:col-span-5 flex flex-col items-center justify-start">
                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-2 w-full overflow-hidden aspect-[4/3] md:aspect-square flex items-center justify-center shadow-sm">
                    <img 
                      src={selectedModalProduct.image} 
                      alt={selectedModalProduct.name} 
                      className="max-w-full max-h-full object-contain rounded-lg mix-blend-multiply"
                    />
                  </div>
                  <span className="text-[11px] text-slate-400 font-bold tracking-wide uppercase mt-2.5 text-center block">
                    {selectedModalProduct.subType}
                  </span>
                </div>

                <div className="md:col-span-7 space-y-5">
                  <div>
                    <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Technical Description Overview</h5>
                    <p className="text-sm text-[#555a6d] leading-relaxed font-medium">
                      {selectedModalProduct.specs || "High-precision laboratory environment diagnostics apparatus engineered for rapid execution, error control protocols, and comprehensive validation monitoring data metrics."}
                    </p>
                  </div>

                  <div>
                    <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">Documented Core Features</h5>
                    <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 space-y-2.5">
                      {selectedModalProduct.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-[#272b41] font-semibold leading-normal">
                          <Layers className="w-4 h-4 text-[#15558d] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="p-4 border-t border-slate-100 bg-slate-50/50 rounded-b-2xl flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedModalProduct(null)}
                className="px-4 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-500 font-bold text-xs rounded-lg transition-colors"
              >
                Close View
              </button>
              
              <a
                href={selectedModalProduct.brochureUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setSelectedModalProduct(null)}
                className="inline-flex items-center gap-1.5 px-5 py-2 bg-[#15558d] hover:bg-[#1a68aa] text-white font-bold text-xs rounded-lg shadow-sm transition-colors decoration-0"
              >
                <FileDown className="w-3.5 h-3.5" /> Download Product Brochure
              </a>
            </div>

          </div>
        </div>
      )}

    </div>
    <Footer />
    </>
  );
};

export default MatrixProductsPage;