import React from 'react';
import Header from '../Components/MainHeader';
import Footer from '../Components/Footer';
import { Quote, Sparkles, Building2, Calendar, ShieldCheck, Mail, Phone, User } from 'lucide-react';

export const CEOMessagePage: React.FC = () => {
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
                  <li className="breadcrumb-item active text-slate-500" aria-current="page">CEO Message</li>
                </ol>
                <h2 className="breadcrumb-title text-2xl md:text-4xl font-black">
                  CEO Desk's
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
      
      {/* HEADER HERO STRIP */}
      {/* <section className="relative bg-[#15558d] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f406b] via-[#15558d] to-[#1d6cb3] opacity-100" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute -right-16 -top-16 w-72 h-72 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10 max-w-[1100px]">
          <span className="inline-flex items-center gap-1.5 bg-emerald-400 text-slate-950 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm mb-4">
            <Sparkles className="w-3 h-3" /> Executive Leadership
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight">
            From the CEO’s Desk
          </h1>
          <p className="text-blue-100 text-sm md:text-base mt-2 max-w-xl font-medium opacity-90">
            A message from our founder on corporate integrity, relentless innovation, and community healthcare needs.
          </p>
        </div>
      </section> */}

      {/* CORE MESSAGE BLOCK */}
      <section className="py-16 md:py-24 container mx-auto px-4 max-w-[1350px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT SIDEBAR: PORTRAIT IMAGE & PROFILE ANCHOR */}
          <div className="lg:col-span-4 lg:sticky lg:top-8 space-y-6">
            
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xl overflow-hidden relative group">
              <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-[#15558d] to-emerald-400 z-20" />
              
              {/* CEO PORTRAIT CONTAINER */}
              <div className="w-full aspect-[4/5] bg-slate-100 relative overflow-hidden flex items-center justify-center border-b border-slate-100">
                {/* 
                  Replace 'ceo-portrait.jpg' with the actual filename of the CEO's picture 
                  (e.g., 'Vikram_Gambhir.jpg' placed in your public assets folder)
                */}
                <img 
                  src="ceo-portrait.jpg" 
                  alt="Mr. Vikram Gambhir - CEO and Founder of Matrix Lifesciences" 
                  className="w-full h-full object-cover transform group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                  onError={(e) => {
                    // Fallback visual wrapper if image asset is missing locally
                    e.currentTarget.style.display = 'none';
                    const fallback = document.getElementById('ceo-fallback-icon');
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                
                {/* Modern Fallback Icon Blueprint */}
                <div 
                  id="ceo-fallback-icon" 
                  className="absolute inset-0 hidden flex-col items-center justify-center text-slate-300 bg-gradient-to-b from-slate-50 to-slate-100/80"
                >
                  <User className="w-20 h-20 stroke-[1]" />
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mt-2">Portrait Placeholder</span>
                </div>
              </div>

              {/* Profile Meta Info */}
              <div className="p-6">
                <h3 className="text-xl font-black text-slate-900 tracking-tight uppercase">
                  Mr. Vikram Gambhir
                </h3>
                <p className="text-xs text-[#15558d] font-bold uppercase tracking-widest mt-1">
                  CEO and Founder
                </p>
                <p className="text-xs text-slate-400 font-semibold mt-0.5">
                  Matrix Lifesciences Pvt. Ltd.
                </p>

                <div className="border-t border-slate-100 mt-5 pt-5 space-y-3.5 text-xs text-slate-600 font-medium">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>Founding Executive Representative</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Uncompromising Corporate Integrity</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Building2 className="w-4 h-4 text-[#15558d] shrink-0" />
                    <span>HQ: Matrix Heights, Raipur</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Quick Contact Micro-Card */}
            <div className="bg-slate-900 text-white rounded-xl p-5 border border-slate-800 space-y-3">
              <h5 className="text-xs font-bold uppercase tracking-widest text-[#09e5ab]">Corporate Enquiries</h5>
              <p className="text-xs text-slate-400 font-medium leading-relaxed">
                Connect directly with our corporate desk for institutional scale integration pipelines.
              </p>
              <div className="pt-1 space-y-1.5 text-xs font-semibold text-slate-300">
                <p className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-slate-400" /> info@matrixlpl.com</p>
                <p className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-slate-400" /> +91 7714920492</p>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT CONTAINER: VERBATIM MESSAGE */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200/70 p-8 md:p-12 shadow-sm relative">
            <div className="absolute top-6 right-8 text-slate-100 hidden md:block">
              <Quote className="w-24 h-24 stroke-[4px] pointer-events-none select-none" />
            </div>

            <div className="relative z-10 space-y-6 text-slate-600 text-base md:text-lg leading-relaxed font-medium">
              
              {/* Highlight Intro Statement */}
              <p className="text-xl md:text-2xl font-bold text-slate-900 leading-snug italic border-l-4 border-[#15558d] pl-4">
                &ldquo;For over three decades, my commitment to the advancement of life sciences has been driven by a singular, profound belief: that precision diagnostics has the transformative power to save and improve lives.&rdquo;
              </p>
              
              <p className="text-slate-600 space-y-4 text-base leading-relaxed font-medium">
                Since the inception of Matrix Lifesciences, our work ethic has been anchored in an uncompromising dedication to excellence and corporate integrity. We believe that true corporate leadership is not merely measured by market presence, but by upholding the highest moral principles, ethics, and professionalism in everything we do. Our contributions to the medical field are designed to be both groundbreaking and deeply responsible.
              </p>
              
              <p className="text-slate-600 space-y-4 text-base leading-relaxed font-medium">
                At Matrix Lifesciences, our mission is to sit at the absolute forefront of the diagnostic industry. We do not strive to simply participate in the market; we aim to lead it, setting new benchmarks through relentless technological innovation, cutting-edge research, and a profound understanding of community healthcare needs.
              </p>
              
              <p className="text-slate-600 space-y-4 text-base leading-relaxed font-medium">
                This grand vision is made possible every day by the backbone of our success: our exceptionally talented and dedicated team. Together, we work tirelessly to push the boundaries of what is possible in the medical diagnostics sector.
              </p>
              
              {/* Closing signoff */}
              <div className="pt-6 border-t border-slate-100 mt-8">
                <p className="text-sm text-slate-400 font-semibold uppercase tracking-wider mb-2">Warm regards,</p>
                <h4 className="text-xl font-black text-slate-900 tracking-wide uppercase">VIKRAM GAMBHIR</h4>
                <p className="text-xs text-[#15558d] font-bold uppercase tracking-widest mt-0.5">CEO and Founder, Matrix Lifesciences Pvt. Ltd.</p>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
    <Footer/>
    </>
  );
};

export default CEOMessagePage;