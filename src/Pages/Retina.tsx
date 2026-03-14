import Header from '../Components/Header'
import Team from '../Components/TeamEye'
import Department from '../Components/DeptEye'
import Breadcrumbs from '../Components/Breadcrumbs'
import Footer from '../Components/Footer'
import SocialSticky from '../Components/StickyIconEye';
import Bg from "/assets/banner-eye.png";
import React from 'react';
import { 
  Activity, 
  ShieldAlert, 
  Baby, 
  Target, 
  Zap, 
  Eye, 
  ArrowRight,
  Clock,
  Stethoscope
} from 'lucide-react';

const Retina: React.FC = () => {
  return (
    <>
    <SocialSticky />
    <Header/>
    <Breadcrumbs 
      items={[
        { label: "Retina Care", 
          bg: Bg
        }
      ]}
      />

    <div className="min-h-screen bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative bg-gradient-to-r from-blue-100 to-green-100 py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6">
              <span className="inline-block text-white bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 rounded-full font-bold tracking-wider uppercase text-xs mb-4 shadow-lg shadow-blue-200">
                Advanced Posterior Segment Care
              </span>
              <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
                Specialized <span className="text-blue-500">Retina & Vitreous</span> Services
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                The retina is the light-sensitive layer at the back of the eye. Retinal diseases 
                can silently reduce vision and may require urgent care. We provide 
                comprehensive solutions including injections, laser procedures, and surgery.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold transition-all flex items-center gap-2">
                  Consult a Specialist <ArrowRight size={18} />
                </button>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="rounded-[0.5rem] overflow-hidden shadow-2xl border-8 border-white">
                <img src='assets/eyedept/retina.jpg' />
              </div>
            </div>
          </div>
        </div>
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 to-transparent pointer-events-none"></div>
      </section>

      {/* --- MAIN CONTENT --- */}
      <main className="container mx-auto px-6 py-20">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Emergency Section - Retinal Detachment */}
          <section className="bg-red-50 border border-red-100 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="bg-red-600 p-5 rounded-2xl text-white shadow-lg shadow-red-200">
              <Eye size={48} />
            </div>
            <div className="flex-1 space-y-4 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                <h2 className="text-3xl font-bold text-red-700">Retinal Detachment</h2>
                <span className="bg-red-600 text-white text-xs font-black px-3 py-1 rounded-full uppercase flex items-center gap-1 mx-auto md:mx-0 w-max">
                  <Clock size={14} /> Medical Emergency
                </span>
              </div>
              <p className="text-red-900/80 leading-relaxed font-medium">
                Retinal detachment is an emergency where the retina separates from the back of the eye. 
                Urgent treatment is required to restore attachment and preserve vision.
              </p>
            </div>
            <div className="w-full md:w-1/3">
              <img src='assets/service/retinal-treat.jpg' />
            </div>
          </section>

          {/* Condition Grid */}
          <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Diabetic Retinopathy */}
            <div className="group bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Activity size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Diabetic Retinopathy</h3>
              <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                Retinal damage caused by diabetes. Regular screening and timely treatment help prevent irreversible vision loss.
              </p>
              
            </div>

            {/* Macular Health */}
            <div className="group bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Macular Conditions</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-bold text-indigo-600 underline decoration-indigo-200 underline-offset-4 mb-1">Macular Hole</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">A small break in the central retina affecting detailed vision. Surgical treatment stops progression.</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-indigo-600 underline decoration-indigo-200 underline-offset-4 mb-1">Macular Edema</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">Swelling causing blurred central vision. Treated with injections or laser therapy.</p>
                </div>
              </div>
            </div>

            {/* ROP */}
            <div className="group bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <Baby size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Retinopathy of Prematurity (ROP)</h3>
              <p className="text-sm text-slate-500 mb-4 leading-relaxed">
                Affects premature babies. Early screening and timely treatment are critical for preventing blindness.
              </p>
              <div className="flex items-center gap-2 text-purple-700 font-bold text-xs uppercase">
                <Stethoscope size={14} /> Critical Screening Area
              </div>
            </div>

          </section>

          {/* Treatment Modalities */}
          <section className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 space-y-6">
                <h2 className="text-3xl font-bold flex items-center gap-3">
                  <Zap className="text-blue-400" /> Advanced Treatment
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Our facility is equipped for high-precision retinal interventions. Treatment 
                  plans are personalized based on a thorough diagnostic evaluation.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-blue-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Intravitreal Injections
                  </li>
                  <li className="flex items-center gap-3 text-blue-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Retinal Laser Photocoagulation
                  </li>
                  <li className="flex items-center gap-3 text-blue-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Vitreo-Retinal Surgery
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 bg-slate-800 rounded-2xl border border-slate-700 text-center">
                    <p className="text-2xl font-bold text-white">Safe</p>
                    <p className="text-xs text-slate-400 uppercase">Procedures</p>
                  </div>
                  <div className="p-6 bg-slate-800 rounded-2xl border border-slate-700 text-center">
                    <p className="text-2xl font-bold text-white">Timely</p>
                    <p className="text-xs text-slate-400 uppercase">Screening</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
    <Footer/>
    </>
  );
};

export default Retina;