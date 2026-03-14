import Header from '../Components/Header'
import Team from '../Components/TeamEye'
import Department from '../Components/DeptEye'
import Breadcrumbs from '../Components/Breadcrumbs'
import Footer from '../Components/Footer'
import SocialSticky from '../Components/StickyIconEye';
import Bg from "/assets/banner-eye.png";
import React from 'react';
import { 
  Eye, 
  Droplets, 
  ShieldAlert, 
  Activity, 
  Stethoscope, 
  ArrowRight,
  ClipboardCheck,
  Zap
} from 'lucide-react';

const Cornea: React.FC = () => {
  return (
    <>
    <SocialSticky />
    <Header/>
    <Breadcrumbs 
      items={[
        { label: "Cornea Services", 
          bg: Bg
        }
      ]}
      />
    <div className="min-h-screen bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative bg-gradient-to-r from-blue-100 to-green-100 py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6">
              <span className="inline-block text-white bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 rounded-full font-bold tracking-wider uppercase text-xs mb-4 shadow-lg shadow-blue-200">
                Advanced Ocular Surface Care
              </span>
              <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
                Comprehensive <span className="text-indigo-600">Cornea Services</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                The cornea is the clear front layer of the eye that plays a major role in 
                focusing vision. Our specialists provide expert care for corneal diseases 
                that cause blur, pain, redness, and light sensitivity.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-indigo-200 flex items-center gap-2">
                  Request Consultation <ArrowRight size={18} />
                </button>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="rounded-[0.5rem] overflow-hidden shadow-xl border-4 border-white">
                    <img src='assets/eyedept/cornea.jpg' />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MAIN CONTENT --- */}
      <main className="container mx-auto px-6 py-20">
        <div className="max-w-7xl mx-auto space-y-24">
          
          {/* Cornea Transplantation - Highlight Section */}
          <section className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <img src='assets/service/Corneal-transplantation.jpg' />
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2 space-y-6">
              <div className="flex items-center gap-3 text-indigo-600">
                <Zap size={28} />
                <h2 className="text-3xl font-bold text-slate-900">Cornea Transplantation</h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                This procedure replaces damaged corneal tissue with healthy donor tissue to restore 
                clarity and vision. It is a highly specialized surgery where the type of transplant 
                (PKP, DALK, or DSEK/DMEK) is decided based on which specific corneal layers are affected.
              </p>
              <div className="bg-indigo-50 p-6 rounded-2xl border-l-4 border-indigo-600">
                <p className="text-sm text-indigo-900 font-medium italic">
                  "Targeted replacement of specific layers leads to faster recovery and better visual outcomes."
                </p>
              </div>
            </div>
          </section>

          {/* Condition Grid */}
          <section>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Corneal Conditions & Management</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                From specialized contact lenses to medical therapy, we offer tailored solutions 
                for every corneal challenge.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Keratoconus */}
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-6">
                  <Activity size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Keratoconus</h3>
                <p className="text-sm text-slate-500 mb-4 leading-relaxed">
                  A condition where the cornea becomes thin and cone-shaped, leading to distorted vision.
                </p>
                
                <div className="mt-4 pt-4 border-t border-slate-50 text-xs text-slate-400">
                  <span className="font-bold text-slate-600 block mb-1">Management:</span>
                  Glasses, specialized contact lenses, and stabilization procedures.
                </div>
              </div>

              {/* Microbial Keratitis */}
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center mb-6">
                  <ShieldAlert size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Microbial Keratitis</h3>
                <p className="text-sm text-slate-500 mb-4 leading-relaxed">
                  A rapid corneal infection that threatens vision. Prompt diagnosis is essential 
                  to prevent scarring and complications.
                </p>
                <div className="flex items-center gap-2 text-red-700 bg-red-50 px-3 py-2 rounded-lg text-xs font-bold uppercase tracking-tight">
                  <ClipboardCheck size={14} /> Emergency Evaluation Advised
                </div>
              </div>

              {/* Dry Eyes */}
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <Droplets size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Dry Eyes</h3>
                <p className="text-sm text-slate-500 mb-4 leading-relaxed">
                  Occurs when tears are insufficient or evaporate too quickly, causing burning 
                  and fluctuating vision.
                </p>
                <div className="mt-4 pt-4 border-t border-slate-50 text-xs text-slate-400">
                  <span className="font-bold text-slate-600 block mb-1">Treatment:</span>
                  Lifestyle measures, lubricants, and medical therapy based on severity.
                </div>
              </div>
            </div>
          </section>

          {/* Clinical Approach */}
          <section className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6 flex items-center justify-center gap-3">
                <Stethoscope className="text-indigo-400" /> Diagnosis & Treatment
              </h2>
              <p className="text-indigo-100 max-w-3xl mx-auto mb-10 text-lg leading-relaxed">
                Treatment is personalized and may include advanced medicines, contact lens-based support, 
                or surgical intervention depending on the clinical severity and patient needs.
              </p>
              <div className="inline-flex items-center gap-6 text-sm font-semibold">
                <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-indigo-500"></div> Precision Medicine</span>
                <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-indigo-500"></div> Evidence Based</span>
                <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-indigo-500"></div> Patient Centric</span>
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

export default Cornea;