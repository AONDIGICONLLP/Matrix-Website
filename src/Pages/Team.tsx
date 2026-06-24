import React from 'react';
import Header from '../Components/MainHeader';
import Footer from '../Components/Footer';
import { Users, ShieldCheck, Phone, Mail, Clock, Award, Briefcase, Zap, Sparkles, UserCheck } from 'lucide-react';

export const OurTeamPage: React.FC = () => {
  return (
    <>
    <Header />
    
    <div className="w-full  bg-[#ebf0fe] text-slate-800 font-sans antialiased selection:bg-blue-600 selection:text-white">
      
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
                  <li className="breadcrumb-item active text-slate-500" aria-current="page">Team</li>
                </ol>
                <h2 className="breadcrumb-title text-2xl md:text-4xl font-black">
                  Our Team of Experts
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

      {/* TOP HERO HEADSECTION */}
      <section className="relative bg-[#ebf0fe] py-5 overflow-hidden">
        <div className="absolute inset-0  bg-[#ebf0fe] opacity-100" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-400/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 max-w-[1200px] text-center">
          <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Corporate Human Capital
          </span>
          <p className="text-slate-600 text-sm md:text-base mt-3 max-w-xl mx-auto font-medium opacity-90">
            Passionate professionals deeply accomplished in their respective fields, bringing a wealth of diverse experiences to your operations.
          </p>
        </div>
      </section>

      {/* REINFORCING VALUE STRIP */}
      {/* <section className="bg-white border-b border-slate-200/60 py-6 text-center">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <p className="text-slate-500 text-xs md:text-sm font-semibold tracking-wide">
            With a broad range of expertise, our team is equipped to provide comprehensive solutions tailored to your needs.
          </p>
        </div>
      </section> */}

      {/* TEAM EXPERT GRID SYSTEM */}
      <section className="py-16 md:py-24 container mx-auto px-4 max-w-[1100px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* EXPERT PROFILE 1: MR. CHETAN WADHER */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-300/70 transition duration-300 overflow-hidden flex flex-col justify-between group">
            <div>
              {/* IMAGE HEADER CONTAINER */}
              <div className="w-full aspect-[16/10] bg-slate-100 relative overflow-hidden flex items-center justify-center border-b border-slate-100">
                <img 
                  src="team-chetan-wadher.jpg" 
                  alt="Mr. Chetan Wadher - General Manager Institutional Business" 
                  className="w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fb = document.getElementById('fb-chetan');
                    if (fb) fb.style.display = 'flex';
                  }}
                />
                <div id="fb-chetan" className="absolute inset-0 hidden flex-col items-center justify-center text-slate-300 bg-gradient-to-b from-slate-50 to-slate-100">
                  <UserCheck className="w-14 h-14 stroke-[1] text-slate-400" />
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mt-2">Institutional Division Placeholder</span>
                </div>
                <div className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-white/90 backdrop-blur-sm text-[#15558d] flex items-center justify-center shadow-sm">
                  <Briefcase className="w-4 h-4" />
                </div>
              </div>

              <div className="p-6 md:p-8 pt-5">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#15558d] bg-blue-50 px-2 py-0.5 rounded">
                  Institutional Division
                </span>
                <h3 className="text-xl font-black text-slate-900 tracking-tight mt-2.5">
                  Mr. Chetan Wadher
                </h3>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-0.5">
                  General Manager (Institutional Business)
                </p>

                {/* Internal Metadata */}
                <div className="mt-5 space-y-2.5 border-t border-slate-100 pt-4 text-xs text-slate-600 font-semibold">
                  <p className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>Associated with Matrix since 2002</span>
                  </p>
                  <p className="flex items-center gap-2.5">
                    <Award className="w-4 h-4 text-[#15558d] shrink-0" />
                    <span>Industry Experience: 27 Years</span>
                  </p>
                </div>
              </div>
            </div>

            {/* COMMUNICATIONS DRAWER */}
            <div className="bg-slate-50 border-t border-slate-100 px-6 py-4 md:px-8 flex flex-wrap gap-x-6 gap-y-2 text-xs font-bold text-slate-700">
              <a href="tel:9826124489" className="flex items-center gap-1.5 hover:text-[#15558d] transition-colors">
                <Phone className="w-3.5 h-3.5 text-slate-400" /> 9826124489
              </a>
              <a href="mailto:chetan.wadher@matrixlpl.com" className="flex items-center gap-1.5 hover:text-[#15558d] transition-colors">
                <Mail className="w-3.5 h-3.5 text-slate-400" /> chetan.wadher@matrixlpl.com
              </a>
            </div>
          </div>

          {/* EXPERT PROFILE 2: MR. SUBHAJEET SENGUPTA */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-300/70 transition duration-300 overflow-hidden flex flex-col justify-between group">
            <div>
              {/* IMAGE HEADER CONTAINER */}
              <div className="w-full aspect-[16/10] bg-slate-100 relative overflow-hidden flex items-center justify-center border-b border-slate-100">
                <img 
                  src="team-subhajeet-sengupta.jpg" 
                  alt="Mr. Subhajeet Sengupta - General Manager Trade Business" 
                  className="w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fb = document.getElementById('fb-subhajeet');
                    if (fb) fb.style.display = 'flex';
                  }}
                />
                <div id="fb-subhajeet" className="absolute inset-0 hidden flex-col items-center justify-center text-slate-300 bg-gradient-to-b from-slate-50 to-slate-100">
                  <UserCheck className="w-14 h-14 stroke-[1] text-slate-400" />
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mt-2">Trade Commerce Placeholder</span>
                </div>
                <div className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-white/90 backdrop-blur-sm text-[#15558d] flex items-center justify-center shadow-sm">
                  <Briefcase className="w-4 h-4" />
                </div>
              </div>

              <div className="p-6 md:p-8 pt-5">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#15558d] bg-blue-50 px-2 py-0.5 rounded">
                  Trade Commerce
                </span>
                <h3 className="text-xl font-black text-slate-900 tracking-tight mt-2.5">
                  Mr. Subhajeet Sengupta
                </h3>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-0.5">
                  General Manager (Trade Business)
                </p>

                {/* Internal Metadata */}
                <div className="mt-5 space-y-2.5 border-t border-slate-100 pt-4 text-xs text-slate-600 font-semibold">
                  <p className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>Associated with Matrix since 2002</span>
                  </p>
                  <p className="flex items-center gap-2.5">
                    <Award className="w-4 h-4 text-[#15558d] shrink-0" />
                    <span>Industry Experience: 28 Years</span>
                  </p>
                </div>
              </div>
            </div>

            {/* COMMUNICATIONS DRAWER */}
            <div className="bg-slate-50 border-t border-slate-100 px-6 py-4 md:px-8 flex flex-wrap gap-x-6 gap-y-2 text-xs font-bold text-slate-700">
              <a href="tel:9826144656" className="flex items-center gap-1.5 hover:text-[#15558d] transition-colors">
                <Phone className="w-3.5 h-3.5 text-slate-400" /> 9826144656
              </a>
              <a href="mailto:subhajeet.sengupta@matrixlpl.com" className="flex items-center gap-1.5 hover:text-[#15558d] transition-colors">
                <Mail className="w-3.5 h-3.5 text-slate-400" /> subhajeet.sengupta@matrixlpl.com
              </a>
            </div>
          </div>

          {/* EXPERT PROFILE 3: MR. N. R. SAHU */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-300/70 transition duration-300 overflow-hidden flex flex-col justify-between group">
            <div>
              {/* IMAGE HEADER CONTAINER */}
              <div className="w-full aspect-[16/10] bg-slate-100 relative overflow-hidden flex items-center justify-center border-b border-slate-100">
                <img 
                  src="team-netram-sahu.jpg" 
                  alt="Mr. N. R. Sahu - Senior Sales & Marketing Manager Trade Business" 
                  className="w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fb = document.getElementById('fb-sahu');
                    if (fb) fb.style.display = 'flex';
                  }}
                />
                <div id="fb-sahu" className="absolute inset-0 hidden flex-col items-center justify-center text-slate-300 bg-gradient-to-b from-slate-50 to-slate-100">
                  <UserCheck className="w-14 h-14 stroke-[1] text-slate-400" />
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mt-2">Senior Operations Placeholder</span>
                </div>
                <div className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-white/90 backdrop-blur-sm text-[#15558d] flex items-center justify-center shadow-sm">
                  <Zap className="w-4 h-4" />
                </div>
              </div>

              <div className="p-6 md:p-8 pt-5">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#15558d] bg-blue-50 px-2 py-0.5 rounded">
                  Trade Operations Senior
                </span>
                <h3 className="text-xl font-black text-slate-900 tracking-tight mt-2.5">
                  Mr. N. R. Sahu
                </h3>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-0.5">
                  Senior Sales & Marketing Manager (Trade Business)
                </p>

                {/* Internal Metadata */}
                <div className="mt-5 space-y-2.5 border-t border-slate-100 pt-4 text-xs text-slate-600 font-semibold">
                  <p className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>Associated with Matrix since 1990</span>
                  </p>
                  <p className="flex items-center gap-2.5">
                    <Award className="w-4 h-4 text-[#15558d] shrink-0" />
                    <span>Industry Experience: 35 Years</span>
                  </p>
                </div>
              </div>
            </div>

            {/* COMMUNICATIONS DRAWER */}
            <div className="bg-slate-50 border-t border-slate-100 px-6 py-4 md:px-8 flex flex-wrap gap-x-6 gap-y-2 text-xs font-bold text-slate-700">
              <a href="tel:9522202853" className="flex items-center gap-1.5 hover:text-[#15558d] transition-colors">
                <Phone className="w-3.5 h-3.5 text-slate-400" /> 9522202853
              </a>
              <a href="mailto:netram.sahu@matrixlpl.com" className="flex items-center gap-1.5 hover:text-[#15558d] transition-colors">
                <Mail className="w-3.5 h-3.5 text-slate-400" /> netram.sahu@matrixlpl.com
              </a>
            </div>
          </div>

          {/* EXPERT PROFILE 4: MR. SHRINIVAS SOLANKI */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-300/70 transition duration-300 overflow-hidden flex flex-col justify-between group">
            <div>
              {/* IMAGE HEADER CONTAINER */}
              <div className="w-full aspect-[16/10] bg-slate-100 relative overflow-hidden flex items-center justify-center border-b border-slate-100">
                <img 
                  src="team-shrinivas-solanki.jpg" 
                  alt="Mr. Shrinivas Solanki - Senior Sales & Marketing Manager Trade Business" 
                  className="w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fb = document.getElementById('fb-solanki');
                    if (fb) fb.style.display = 'flex';
                  }}
                />
                <div id="fb-solanki" className="absolute inset-0 hidden flex-col items-center justify-center text-slate-300 bg-gradient-to-b from-slate-50 to-slate-100">
                  <UserCheck className="w-14 h-14 stroke-[1] text-slate-400" />
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mt-2">Trade Distribution Placeholder</span>
                </div>
                <div className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-white/90 backdrop-blur-sm text-[#15558d] flex items-center justify-center shadow-sm">
                  <Zap className="w-4 h-4" />
                </div>
              </div>

              <div className="p-6 md:p-8 pt-5">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#15558d] bg-blue-50 px-2 py-0.5 rounded">
                  Trade Distribution
                </span>
                <h3 className="text-xl font-black text-slate-900 tracking-tight mt-2.5">
                  Mr. Shrinivas Solanki
                </h3>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-0.5">
                  Senior Sales & Marketing Manager (Trade Business)
                </p>

                {/* Internal Metadata */}
                <div className="mt-5 space-y-2.5 border-t border-slate-100 pt-4 text-xs text-slate-600 font-semibold">
                  <p className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>Associated with Matrix since 2014</span>
                  </p>
                  <p className="flex items-center gap-2.5">
                    <Award className="w-4 h-4 text-[#15558d] shrink-0" />
                    <span>Industry Experience: 18 Years</span>
                  </p>
                </div>
              </div>
            </div>

            {/* COMMUNICATIONS DRAWER */}
            <div className="bg-slate-50 border-t border-slate-100 px-6 py-4 md:px-8 flex flex-wrap gap-x-6 gap-y-2 text-xs font-bold text-slate-700">
              <a href="tel:9522202851" className="flex items-center gap-1.5 hover:text-[#15558d] transition-colors">
                <Phone className="w-3.5 h-3.5 text-slate-400" /> 9522202851
              </a>
              <a href="mailto:shrinivas.solanki@matrixlpl.com" className="flex items-center gap-1.5 hover:text-[#15558d] transition-colors">
                <Mail className="w-3.5 h-3.5 text-slate-400" /> shrinivas.solanki@matrixlpl.com
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>

    <Footer />
    </>
  );
};

export default OurTeamPage;