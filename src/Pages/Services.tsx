import React from 'react';
import Header from '../Components/MainHeader';
import Footer from '../Components/Footer';
import { 
  Activity, 
  Layers, 
  ShieldCheck, 
  Workflow, 
  Microscope, 
  ChevronRight, 
  Sparkles,
  Building2,
  FileCheck2,
  PieChart,
  HeartPulse
} from 'lucide-react';

export const ServicesPage: React.FC = () => {
  return (
    <>
    <Header/>
    <div className="w-full bg-slate-50/50 text-slate-800 font-sans antialiased selection:bg-blue-600 selection:text-white">
      
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
                  <li className="breadcrumb-item active text-slate-500" aria-current="page">Services</li>
                </ol>
                <h2 className="breadcrumb-title text-2xl md:text-4xl font-black">
                  Our Core Services
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

      {/* STRATEGIC SPLIT INFRASTRUCTURE SECTION */}
      <section className="py-16 md:py-24 container mx-auto px-4 max-w-[1150px]">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight uppercase">
            Tailored Operational Divisions
          </h2>
          <div className="w-16 h-1 bg-[#15558d] mx-auto mt-3 rounded-full" />
          <p className="text-slate-500 text-sm font-semibold max-w-xl mx-auto mt-3">
            With a broad range of expertise, our operational frameworks are built to provide comprehensive solutions tailored directly to your specific market layout.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* DIVISION 1: INSTITUTIONAL BUSINESS */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-md hover:shadow-xl hover:border-blue-300/70 transition-all duration-300 overflow-hidden flex flex-col justify-between group">
            <div>
              {/* Image Container */}
              <div className="w-full aspect-[16/9] bg-slate-100 relative overflow-hidden flex items-center justify-center border-b border-slate-100">
                <img 
                  src="assets/img/services/handshake.webp" 
                  alt="Institutional Business - Corporate Healthcare Integration" 
                  className="w-full h-full object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fb = document.getElementById('fb-service-inst');
                    if (fb) fb.style.display = 'flex';
                  }}
                />
                <div id="fb-service-inst" className="absolute inset-0 hidden flex-col items-center justify-center text-slate-300 bg-gradient-to-br from-slate-50 to-slate-100">
                  <Building2 className="w-16 h-16 stroke-[1] text-[#15558d]/20" />
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mt-2">B2B Integration Layer</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Division Content */}
              <div className="p-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#15558d] flex items-center justify-center group-hover:bg-[#15558d] group-hover:text-white transition-colors duration-300">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block">Segment Alpha</span>
                    <h3 className="text-xl font-black text-slate-900 tracking-tight">Institutional Business</h3>
                  </div>
                </div>

                <p className="mt-4 text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                  We engineer end-to-end medical logistics and deployment solutions structured for major hospital chains, diagnostic groups, and governing healthcare facilities. This tier guarantees consistent, high-volume accuracy with robust technical integration pipeline workflows.
                </p>

                {/* Bullet Specifications */}
                <ul className="mt-6 space-y-2.5 text-xs font-semibold text-slate-700">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Comprehensive institutional network connectivity</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Managed pipelines under expert supervisory directives</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Custom industrial scale diagnostics delivery matrix</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-50 border-t border-slate-100 px-8 py-4 flex items-center justify-between text-xs font-bold text-slate-500">
              <span>Managed by Mr. Chetan Wadher</span>
              <span className="text-[#15558d] group-hover:underline flex items-center gap-1">27 Years Experience</span>
            </div>
          </div>

          {/* DIVISION 2: TRADE BUSINESS */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-md hover:shadow-xl hover:border-blue-300/70 transition-all duration-300 overflow-hidden flex flex-col justify-between group">
            <div>
              {/* Image Container */}
              <div className="w-full aspect-[16/9] bg-slate-100 relative overflow-hidden flex items-center justify-center border-b border-slate-100">
                <img 
                  src="assets/img/services/trade-business.webp" 
                  alt="Trade Business - Wide Scale Distribution and Commerce" 
                  className="w-full h-full object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fb = document.getElementById('fb-service-trade');
                    if (fb) fb.style.display = 'flex';
                  }}
                />
                <div id="fb-service-trade" className="absolute inset-0 hidden flex-col items-center justify-center text-slate-300 bg-gradient-to-br from-slate-50 to-slate-100">
                  <Workflow className="w-16 h-16 stroke-[1] text-[#15558d]/20" />
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mt-2">Commercial Distribution Matrix</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Division Content */}
              <div className="p-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#15558d] flex items-center justify-center group-hover:bg-[#15558d] group-hover:text-white transition-colors duration-300">
                    <Workflow className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block">Segment Beta</span>
                    <h3 className="text-xl font-black text-slate-900 tracking-tight">Trade Business</h3>
                  </div>
                </div>

                <p className="mt-4 text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                  We deploy extensive commercial trade and rapid product availability networks focused on clinical diagnostics, localized lab components, and dynamic point-of-care distribution pipelines. This vertical connects commercial networks to the cutting edge of biological medicine.
                </p>

                {/* Bullet Specifications */}
                <ul className="mt-6 space-y-2.5 text-xs font-semibold text-slate-700">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Widespread regional distribution networks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Expedited logistical fulfillment methodologies</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Senior-led market penetration strategy frameworks</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-50 border-t border-slate-100 px-8 py-4 flex items-center justify-between text-xs font-bold text-slate-500">
              <span>Managed by Mr. Subhajeet Sengupta</span>
              <span className="text-[#15558d] group-hover:underline flex items-center gap-1">28 Years Experience</span>
            </div>
          </div>

        </div>
      </section>

      {/* CORE CAPABILITIES & METHODOLOGY CARDS */}
      <section className="bg-white border-y border-slate-200/70 py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-[1150px]">
          
          <div className="text-center mb-16">
            <span className="text-xs text-[#15558d] font-black tracking-widest uppercase bg-blue-50 px-3 py-1 rounded">Our Foundations</span>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight uppercase mt-2">
              Our Operational Standards
            </h2>
            <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest mt-1">Matrix Lifesciences Pvt. Ltd.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* CARD 1: EXCELLENCE */}
            <div className="p-6 rounded-xl bg-slate-50/50 border border-slate-200/60 hover:bg-white hover:shadow-md transition-all duration-300 group">
              <div className="w-10 h-10 rounded-lg bg-[#15558d]/5 text-[#15558d] flex items-center justify-center mb-4 group-hover:bg-[#15558d] group-hover:text-white transition-colors">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-black text-slate-900 uppercase tracking-tight">Corporate Integrity</h4>
              <p className="text-xs text-slate-600 font-medium leading-relaxed mt-2">
                We believe that true corporate leadership is not merely measured by market presence, but by upholding the highest moral principles, ethics, and professionalism in everything we do.
              </p>
            </div>

            {/* CARD 2: INNOVATION */}
            <div className="p-6 rounded-xl bg-slate-50/50 border border-slate-200/60 hover:bg-white hover:shadow-md transition-all duration-300 group">
              <div className="w-10 h-10 rounded-lg bg-[#15558d]/5 text-[#15558d] flex items-center justify-center mb-4 group-hover:bg-[#15558d] group-hover:text-white transition-colors">
                <Microscope className="w-5 h-5" />
              </div>
              <h4 className="text-base font-black text-slate-900 uppercase tracking-tight">Relentless Research</h4>
              <p className="text-xs text-slate-600 font-medium leading-relaxed mt-2">
                We aim to lead the market, setting new benchmarks through relentless technological innovation, cutting-edge research, and an advanced operational blueprint.
              </p>
            </div>

            {/* CARD 3: ACCESSIBILITY */}
            <div className="p-6 rounded-xl bg-slate-50/50 border border-slate-200/60 hover:bg-white hover:shadow-md transition-all duration-300 group">
              <div className="w-10 h-10 rounded-lg bg-[#15558d]/5 text-[#15558d] flex items-center justify-center mb-4 group-hover:bg-[#15558d] group-hover:text-white transition-colors">
                <HeartPulse className="w-5 h-5" />
              </div>
              <h4 className="text-base font-black text-slate-900 uppercase tracking-tight">Community Healthcare</h4>
              <p className="text-xs text-slate-600 font-medium leading-relaxed mt-2">
                Our operations and systemic diagnostic layouts are driven by a profound understanding of foundational, widespread community healthcare needs.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CLOSING BANNER ANCHOR */}
      <section className="py-16 text-center container mx-auto px-4 max-w-[800px]">
        <h3 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tight">
          Ready to integrate with our network?
        </h3>
        <p className="text-slate-500 text-xs md:text-sm font-semibold max-w-lg mx-auto mt-2">
          Connect directly with our corporate general management teams to design a scalable commercial system tailored to your requirements.
        </p>
        <div className="mt-6 flex flex-wrap gap-4 justify-center text-xs font-bold uppercase tracking-wider">
          <span className="bg-slate-900 text-white px-5 py-2.5 rounded-lg border border-slate-800 shadow-sm">
            Corporate Support: info@matrixlpl.com
          </span>
          <span className="bg-white text-slate-800 px-5 py-2.5 rounded-lg border border-slate-200 shadow-sm">
            HQ Phone: +91 7714920492
          </span>
        </div>
      </section>

    </div>
    <Footer/>
    </>
  );
};

export default ServicesPage;