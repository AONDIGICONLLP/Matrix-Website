import Header from '../Components/Header'
import Team from '../Components/TeamEye'
import Department from '../Components/DeptEye'
import Breadcrumbs from '../Components/Breadcrumbs'
import Footer from '../Components/Footer'
import SocialSticky from '../Components/StickyIconEye';
import Bg from "/assets/banner-eye.png";
import React from 'react';
import { 
  Baby, 
  Eye, 
  Glasses, 
  Stethoscope, 
  LineChart, 
  ArrowRight,
  ShieldCheck,
  Zap
} from 'lucide-react';

const PediatricEyeCare: React.FC = () => {
  return (
    <>
    <SocialSticky />
    <Header/>
    <Breadcrumbs 
      items={[
        { label: "Pediatric Eye Care", 
          bg: Bg
        }
      ]}
      />
    <div className="min-h-screen bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative bg-gradient-to-r from-blue-100 to-green-100 py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
              <span className="inline-block text-white bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 rounded-full font-bold tracking-wider uppercase text-xs mb-4 shadow-lg shadow-blue-200">
                Pediatric Speciality
              </span>
              <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
                Caring for Your <span className="text-blue-600">Child's Vision</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                Early detection is the key to preventing long-term vision loss. Our pediatric 
                evaluation includes vision testing, refraction, and comprehensive assessment of 
                eye alignment and development.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-blue-200 flex items-center gap-2">
                  Schedule a Check-up <ArrowRight size={18} />
                </button>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="rounded-[0.5rem] overflow-hidden shadow-2xl border-8 border-white">
                <img src='assets/eyedept/peadiatric.jpg' />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MAIN CONTENT --- */}
      <main className="container mx-auto px-6 py-20">
        <div className="max-w-7xl mx-auto space-y-24">
          
          {/* Top Row: General & Cataracts */}
          <section className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-blue-600">
                <ShieldCheck size={32} />
                <h2 className="text-3xl font-bold text-slate-900">Childhood Cataracts</h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Cataracts in children can significantly affect visual development. Timely 
                surgical intervention and consistent follow-up are critical to help prevent 
                lazy eye and ensure permanent vision reduction does not occur.
              </p>
              
            </div>
            <div className="bg-white p-8 rounded-3xl border border-blue-100 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 text-blue-600">
                <Baby size={120} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                 <Stethoscope className="text-blue-500" /> Lazy Eye (Amblyopia)
              </h3>
              <p className="text-slate-500 mb-6 text-sm leading-relaxed">
                Amblyopia occurs when one eye does not develop normal vision. If caught early, 
                treatment is highly effective through various methods tailored to the child's needs.
              </p>
              <div className="space-y-3">
                {['Customized Glasses', 'Patching Therapy', 'Vision Therapy'].map((t, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm font-semibold text-blue-700 bg-blue-50 px-3 py-2 rounded-lg">
                    <Zap size={14} fill="currentColor" /> {t}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Condition Grid: Refractive, Squint, Myopia */}
          <section>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900">Vision Development & Alignment</h2>
              <p className="text-slate-600 mt-4 max-w-2xl mx-auto">We focus on supporting healthy eye development during the most critical learning years.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Refractive Errors */}
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-white text-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <Glasses size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Refractive Errors</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">
                  Correcting myopia, hyperopia, and astigmatism early supports learning, visual comfort, and healthy development.
                </p>
                
              </div>

              {/* Squint Surgery */}
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6">
                  <Eye size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Squint (Strabismus)</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Misalignment of the eyes can affect depth perception and appearance. Surgery is advised when glasses or therapy are insufficient.
                </p>
                
              </div>

              {/* Myopia Clinic */}
              <div className="bg-indigo-600 p-8 rounded-3xl text-white shadow-lg">
                <div className="w-12 h-12 bg-white/20 text-white rounded-2xl flex items-center justify-center mb-6">
                  <LineChart size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">Myopia Clinic</h3>
                <p className="text-sm text-blue-100 leading-relaxed mb-6">
                  Monitoring and controlling the progression of myopia to reduce the future risk of eye complications.
                </p>
                <ul className="text-xs space-y-2 text-blue-50">
                   <li className="flex items-center gap-2">• Progression Monitoring</li>
                   <li className="flex items-center gap-2">• Specialized Measures</li>
                   <li className="flex items-center gap-2">• Long-term Risk Reduction</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Expert Approach Section */}
          <section className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">A Child-Centered Approach</h2>
            <p className="text-slate-400 max-w-3xl mx-auto mb-8 text-lg">
              Our clinic is designed to be a friendly environment where children feel comfortable. 
              We combine specialized pediatric expertise with the latest diagnostic technology 
              to safeguard your child's visual future.
            </p>
            <div className="flex justify-center gap-8 text-sm font-bold text-blue-400">
               <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500"></div> Pediatric Refraction</span>
               <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500"></div> Alignment Assessment</span>
            </div>
          </section>

        </div>
      </main>
    </div>
    <Footer/>
    </>
  );
};

export default PediatricEyeCare;