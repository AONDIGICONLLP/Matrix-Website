import React from 'react';
import Header from '../Components/MainHeader';
import Timeline from '../Components/AboutTimeline';
import MissionVision from '../Components/MissionVision';
import Footer from '../Components/Footer';
import { 
  Award, ShieldCheck, Milestone, Lightbulb, Users, Target, 
  Eye, HeartPulse, HardHat, BadgeCheck, Phone, Mail, MapPin, 
  Clock, ArrowRight, Quote, Sparkles, Building2
} from 'lucide-react';

export const AboutUsPage: React.FC = () => {
  return (
    <>
    <Header />
    <div className="w-full bg-slate-50/50 text-slate-800 font-sans antialiased selection:bg-blue-500 selection:text-white">
      
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
                  <li className="breadcrumb-item active text-slate-500" aria-current="page">About Us</li>
                </ol>
                <h2 className="breadcrumb-title text-2xl md:text-4xl font-black">
                  About Us
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
      {/* ==========================================
          1. PREMIUM HERO HEADER SECTION
          ========================================== */}
      {/* <section className="relative bg-[#15558d] text-white py-24 lg:py-32 overflow-hidden">
       
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f406b] via-[#15558d] to-[#227ecf] opacity-100" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-400/10 rounded-full blur-3xl pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl pointer-events-none transform -translate-x-1/3 translate-y-1/3" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:30px_30px]" />

        <div className="container mx-auto px-4 relative z-10 max-w-[1200px]">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg shadow-emerald-950/20 mb-6">
              <Sparkles className="w-3.5 h-3.5" /> Establishing Scientific Excellence
            </span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-none mb-6">
              Everything in <span className="text-[#09e5ab] bg-gradient-to-r from-[#09e5ab] to-teal-300 bg-clip-text text-transparent">Diagnostics</span>
            </h1>
            <p className="text-blue-100 text-base md:text-xl leading-relaxed max-w-2xl font-medium opacity-90">
              Matrix Lifesciences Private Limited delivers cutting-edge in-vitro diagnostic equipment designed for precision, speed, and unwavering accuracy.
            </p>
          </div>
        </div>
      </section> */}

      {/* ==========================================
          2. CORPORATE BRIEF & HERO BUILDING CONTAINER
          ========================================== */}
      <section className="py-20 max-w-[1350px] mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: THE BUILDING PHOTO CONTAINER */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#09e5ab] to-[#15558d] rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition duration-500" />
            <div className="relative bg-white p-3 rounded-2xl shadow-2xl border border-slate-200/60 overflow-hidden">
              <div className="rounded-xl overflow-hidden relative">
                <img 
                  src="assets/img/matrix-building.jpeg" 
                  alt="Matrix Heights Corporate Headquarters Building in Raipur" 
                  className="w-full h-auto object-cover transform group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-90" />
                <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <Building2 className="w-4 h-4 text-[#09e5ab]" />
                    <span className="text-xs font-bold uppercase tracking-widest text-[#09e5ab]">Corporate Headquarters</span>
                  </div>
                  <h4 className="font-extrabold text-lg">Matrix Heights</h4>
                  <p className="text-xs text-slate-300 font-medium mt-0.5">Tagore Nagar, Near Pachpedi Naka, Raipur, CG</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: DETAILED IDENTIFICATION BLOCK */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-blue-700 font-bold text-xs uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-md border border-blue-100">
              <Award className="w-3.5 h-3.5 text-[#15558d]" /> Over Decades of Legacy
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Our Foundations & Core Operations
            </h2>
            <div className="text-slate-600 space-y-4 text-base leading-relaxed font-medium">
              <p>
                <span className="text-slate-900 font-bold">Matrix Lifesciences Private Limited</span> began its journey over decades ago as <span className="text-[#15558d] font-semibold">Laxmi Scientific Works</span>, a modest trading enterprise fueled by a vision to become a leading name in scientific excellence.
              </p>
              <p>
                From our earliest days supplying premium-grade scientific equipment and laboratory supplies, we have grown through a steadfast commitment to organizational prowess, competence, and uncompromising quality. Driven by a mission to advance healthcare, Matrix delivers cutting-edge in-vitro diagnostic equipment designed for precision, speed, and unwavering accuracy.
              </p>
            </div>

            {/* QUICK PILLARS DISPLAY */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3.5 p-4 bg-white border border-slate-200/60 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">Uncompromising Quality</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Ensuring strict reliability in critical laboratory outputs.</p>
                </div>
              </div>
              <div className="flex items-start gap-3.5 p-4 bg-white border border-slate-200/60 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="p-2 bg-blue-50 rounded-lg text-blue-600 shrink-0">
                  <Users className="w-5 h-5 text-[#15558d]" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">Competence & Prowess</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Managed by field experts with strategic operational insights.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>    

      {/* ==========================================
          3. STRATEGIC MISSION, VISION & CORE VALUES
          ========================================== */}
      <section className="bg-slate-900 text-white py-20 border-y border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(21,85,141,0.15),transparent_40%)]" />
        <div className="max-w-[1350px] mx-auto px-4 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#09e5ab] font-bold text-xs uppercase tracking-widest block mb-2">
              Corporate Directives
            </span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">
              Mission, Vision & Core Values
            </h2>
            <div className="w-12 h-1 bg-[#09e5ab] mx-auto mt-4 rounded-full" />
          </div>

          {/* MISSION & VISION DUAL BOX GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-8xl mx-auto mb-16">
            
            {/* MISSION BOX */}
            <div className="bg-slate-800/40 border border-slate-800 rounded-2xl p-8 relative group hover:border-slate-700/80 transition duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-bl-full pointer-events-none" />
              <div className="w-12 h-12 rounded-xl bg-[#15558d]/30 text-[#09e5ab] flex items-center justify-center mb-6 border border-[#15558d]/50">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed font-medium">
                To elevate global healthcare by delivering innovative, high-precision products and services in medical laboratory diagnostics. We are committed to empowering our team to drive meaningful impact while building a thriving, trusted nationwide enterprise.
              </p>
            </div>

            {/* VISION BOX */}
            <div className="bg-slate-800/40 border border-slate-800 rounded-2xl p-8 relative group hover:border-slate-700/80 transition duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-bl-full pointer-events-none" />
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-6 border border-emerald-500/20">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed font-medium italic">
                &ldquo;Empowering Health and Improving Lives Through Precision Diagnostics. We are ready to unveil tomorrow&rsquo;s answers today with Matrix.&rdquo;
              </p>
            </div>

          </div>

          {/* CORE VALUES TRIPLE BLOCK */}
          <div className="border-t border-slate-800/80 pt-16">
            <h4 className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-10">
              Our Core Philosophical Values
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              
              {/* VALUE 1 */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-[#09e5ab] flex items-center justify-center shrink-0 border border-blue-500/20">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bold text-base text-white">Precision & Quality</h5>
                  <p className="text-xs text-slate-400 leading-relaxed mt-2 font-medium">
                    Committing to uncompromising accuracy and reliable compliance in every diagnostic solution we deliver.
                  </p>
                </div>
              </div>

              {/* VALUE 2 */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-[#09e5ab] flex items-center justify-center shrink-0 border border-emerald-500/20">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bold text-base text-white">Innovation</h5>
                  <p className="text-xs text-slate-400 leading-relaxed mt-2 font-medium">
                    Continuously evolving our technical prowess to provide cutting-edge solutions for modern laboratories.
                  </p>
                </div>
              </div>

              {/* VALUE 3 */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-teal-500/10 text-[#09e5ab] flex items-center justify-center shrink-0 border border-teal-500/20">
                  <BadgeCheck className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bold text-base text-white">Integrity & Trust</h5>
                  <p className="text-xs text-slate-400 leading-relaxed mt-2 font-medium">
                    Building lasting relationships with healthcare professionals through transparency, excellence, and unwavering service.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
    <Timeline/>
    <Footer/>
    </>
  );
};

export default AboutUsPage;