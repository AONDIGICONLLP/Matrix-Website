import Header from '../Components/Header'
import Footer from '../Components/Footer'
import SocialSticky from '../Components/SocialIcon';
import React from 'react';
import { 
  Sparkles, 
  User, 
  Layers, 
  Activity, 
  ShieldCheck, 
  ArrowRight, 
  Scissors, 
  Scale, 
  CheckCircle2,
  Droplets
} from 'lucide-react';

const CosmeticSurgeryPage: React.FC = () => {
  return (
    <>
    <SocialSticky />
      <Header/>
    <div className="min-h-screen bg-white">
      {/* --- HERO SECTION --- */}
      <header className="bg-[url(/assets/gyane-bg.png)] bg-cover bg-no-repeat text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">SBH Hospital Cosmetic Gynaecology</h1>
          <p className="md:text-xl text-medium opacity-90 max-w-3xl mx-auto leading-relaxed">
            At SBH Hospital, cosmetic and reconstructive procedures focus on enhancing appearance while maintaining safety and natural results.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <span className="bg-white/80 px-4 py-2 rounded-full border border-white text-sm text-pink-600">Gynecomastia</span>
            <span className="bg-white/80 px-4 py-2 rounded-full border border-white text-sm text-pink-600">Liposuction</span>
            <span className="bg-white/80 px-4 py-2 rounded-full border border-white text-sm text-pink-600">Rhinoplasty</span>
            <span className="bg-white/80 px-4 py-2 rounded-full border border-white text-sm text-pink-600">Breast Implant</span>
            <span className="bg-white/80 px-4 py-2 rounded-full border border-white text-sm text-pink-600">Breast Reduction</span>
            <span className="bg-white/80 px-4 py-2 rounded-full border border-white text-sm text-pink-600">Minor Surgeries</span>
          </div>
        </div>
      </header>
      <section className="relative bg-gradient-to-r from-blue-100 to-green-100 py-16 md:py-24 overflow-hidden border-b border-stone-100">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6">
              <span className="inline-block text-white bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 rounded-full font-bold tracking-wider uppercase text-xs mb-4 shadow-lg shadow-blue-200">
                Aesthetics & Reconstruction
              </span>
              <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
                Cosmetic Surgery <br />
                <span className="text-blue-600">& Body Contouring</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                At SBH Hospital, we focus on enhancing appearance while maintaining safety and 
                natural results. Our approach prioritizes patient comfort, aesthetics, 
                and long-term outcomes using standard surgical protocols.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-slate-900 hover:bg-black text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-xl flex items-center gap-2">
                  Request a Consultation <ArrowRight size={18} />
                </button>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                <img src='assets/service/cosmic.jpg' />
              </div>
              {/* Floating Quality Tag */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-stone-100 flex items-center gap-4">
                <div className="bg-amber-50 p-3 rounded-full text-amber-600">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase">Standard</p>
                  <p className="text-sm font-bold text-slate-900">Surgical Protocols</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MAIN CONTENT --- */}
      <main className="container mx-auto px-6 py-20">
        <div className="max-w-7xl mx-auto space-y-24">
          
          {/* Featured Procedures Grid */}
          <section>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900">Our Clinical Specialities</h2>
              <div className="w-20 h-1 bg-blue-400 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProcedureCard 
                icon={<User />} 
                title="Gynecomastia" 
                desc="Corrects excess breast tissue in men to improve chest contour and restore confidence."
              />
              <ProcedureCard 
                icon={<Layers />} 
                title="Liposuction" 
                desc="Removes excess fat deposits for body contouring. Not a substitute for weight loss."
              />
              <ProcedureCard 
                icon={<Sparkles />} 
                title="Rhinoplasty" 
                desc="Reshapes the nose to improve appearance or breathing while maintaining facial balance."
              />
              <ProcedureCard 
                icon={<Activity />} 
                title="Breast Implant" 
                desc="Enhances size and shape using medical-grade implants selected for your body structure."
              />
              <ProcedureCard 
                icon={<Scale />} 
                title="Breast Reduction" 
                desc="Reduces size to relieve back pain and posture issues while improving body proportion."
              />
              <ProcedureCard 
                icon={<Scissors />} 
                title="Minor Surgeries" 
                desc="Mole removal, Sebaceous Cyst, and Lipoma removal for comfort or cosmetic reasons."
              />
            </div>
          </section>

          {/* Special Focus: Bariatric & Wellness */}
          <section className="bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-12 items-center relative z-10">
              <div className="lg:w-1/2 space-y-6">
                <h2 className="text-3xl font-bold">Bariatric & Weight Management</h2>
                <p className="text-slate-400 leading-relaxed text-lg">
                  Bariatric procedures help manage obesity and related health conditions. 
                  They support long-term weight control when combined with lifestyle changes 
                  and dedicated medical follow-up.
                </p>
                <ul className="grid grid-cols-2 gap-4">
                  {['Obesity Management', 'Long-term Control', 'Lifestyle Support', 'Medical Follow-up'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-blue-400">
                      <CheckCircle2 size={16} /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-slate-800 p-4 rounded-3xl border border-slate-700">
                <img src='assets/service/weight.jpg' />
                </div>
              </div>
            </div>
          </section>

          {/* Details Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-stone-50 p-10 rounded-[2.5rem] space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                <Droplets className="text-blue-600" /> Skin & Cyst Removal
              </h3>
              <p className="text-slate-600">
                Our minor surgical unit handles <strong>Sebaceous Cysts</strong> and <strong>Moles</strong> with 
                precision. Complete removal prevents recurrence, and methods are chosen 
                based on the size and location for minimal scarring.
              </p>
              
            </div>
            
            <div className="bg-stone-50 p-10 rounded-[2.5rem] space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="text-blue-600" /> Aesthetic Gynecology
              </h3>
              <p className="text-slate-600">
                Cosmetic gynecology focuses on both functional and aesthetic enhancement. 
                Each treatment is planned after detailed evaluation to ensure safety and 
                natural-looking results.
              </p>
              
            </div>
          </section>

        </div>
      </main>
    </div>
    <Footer/>
    </>
  );
};

// --- Reusable Component ---
const ProcedureCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="group bg-white p-8 rounded-3xl border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
      {/* {React.cloneElement(icon as React.ReactElement, { size: 24 })} */}
    </div>
    <h4 className="text-xl font-bold text-slate-900 mb-3">{title}</h4>
    <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
  </div>
);

export default CosmeticSurgeryPage;