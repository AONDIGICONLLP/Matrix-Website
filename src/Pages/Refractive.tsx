import Header from '../Components/Header'
import Team from '../Components/TeamEye'
import Department from '../Components/DeptEye'
import Breadcrumbs from '../Components/Breadcrumbs'
import Footer from '../Components/Footer'
import SocialSticky from '../Components/StickyIconEye';
import Bg from "/assets/banner-eye.png";
import React from 'react';
import { 
  Zap, 
  Target, 
  ShieldCheck,
  CheckCheck,
  Scan, 
  ArrowRight, 
  Microscope,
  Info
} from 'lucide-react';

const Refractive: React.FC = () => {
  return (
    <>
    <SocialSticky />
    <Header/>
    <Breadcrumbs 
      items={[
        { label: "Refractive Surgery", 
          bg: Bg
        }
      ]}
      />
    <div className="min-h-screen bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative bg-gradient-to-r from-blue-100 to-green-100 py-50 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6">
              <span className="inline-block text-white bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 rounded-full font-bold tracking-wider uppercase text-xs mb-4 shadow-lg shadow-blue-200">
                Precision Vision Correction
              </span>
              <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
                Advanced <span className="text-blue-600">Refractive Surgery</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                Reduce your dependence on glasses or contact lenses. We correct myopia, 
                hyperopia, and astigmatism by precisely reshaping the cornea using 
                world-class laser technology.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-blue-200 flex items-center gap-2">
                  Check Eligibility <ArrowRight size={18} />
                </button>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="rounded-[0.5rem] overflow-hidden shadow-2xl border-8 border-white">
                <img src='assets/eyedept/refractive.jpg' />
              </div>
              {/* Floating Tech Badge */}
              <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-3">
                <div className="bg-blue-600 p-2 rounded-lg text-white">
                  <Scan size={20} />
                </div>
                <p className="text-xs font-bold text-slate-800 uppercase tracking-tighter">Topography Guided</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MAIN CONTENT --- */}
      <main className="container mx-auto px-6 py-20">
        <div className="max-w-7xl mx-auto space-y-24">
          
          {/* LASIK & Robotic Technology (Dark Section) */}
          <section className="bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative">
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row gap-10 items-start">
                <div className="md:w-1/2 space-y-6">
                  <h2 className="text-3xl font-bold">LASIK Treatment</h2>
                  <p className="text-slate-300 leading-relaxed">
                    LASIK is a laser procedure that reshapes the cornea to correct refractive power. 
                    It is designed for fast recovery and improved unaided vision in suitable patients.
                  </p>
                  <div className="p-6 bg-blue-600/20 border border-blue-500/30 rounded-2xl">
                    <h3 className="text-xl font-bold text-blue-400 mb-2 flex items-center gap-2">
                      <Zap size={20} /> Touchless Robotic LASIK
                    </h3>
                    <p className="text-sm text-blue-100/80">
                      SBH Hospital brings touchless, robotic laser vision correction to your city. 
                      This advanced approach is designed for greater precision, safety, and comfort.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 space-y-4 text-sm text-slate-400">
                  <div className="flex gap-4 p-4 border border-slate-800 rounded-xl bg-slate-800/50">
                    <ShieldCheck className="text-blue-500 shrink-0" />
                    <p>Careful pre-operative screening for surgical safety.</p>
                  </div>
                  <div className="flex gap-4 p-4 border border-slate-800 rounded-xl bg-slate-800/50">
                    <Microscope className="text-blue-500 shrink-0" />
                    <p>Latest-generation technology for high-definition visual quality.</p>
                  </div>
                  <div className="flex gap-4 p-4 border border-slate-800 rounded-xl bg-slate-800/50">
                    <ShieldCheck className="text-blue-500 shrink-0" />
                    <p>Guided post-operative care for stable long-term outcomes.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Specialized Laser Procedures */}
          <section>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Advanced Laser Variants</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Procedure selection depends on corneal thickness, topography, prescription, and overall eye health.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard 
                title="Contoura Vision" 
                desc="A topography-guided treatment that maps the cornea in detail, providing customized correction to improve sharpness and visual quality."
              />
              <ServiceCard 
                title="SMILE / SMILE PRO" 
                desc="Minimally invasive procedure using a small incision. SMILE PRO uses upgraded laser technology for a smoother, faster experience."
              />
              <ServiceCard 
                title="SILK" 
                desc="A modern, minimally invasive technique designed to reduce tissue disruption while ensuring stable outcomes."
              />
              <ServiceCard 
                title="PRK" 
                desc="A surface laser procedure used when LASIK may not be suitable, such as for patients with thinner corneas."
              />
              <ServiceCard 
                title="PDEK" 
                desc="Specialized corneal layer surgery used for conditions affecting the inner corneal lining (endothelium)."
              />
              <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-blue-700 font-bold mb-2">
                   <Info size={20} />
                   <h4>Expert Advice</h4>
                </div>
                <p className="text-xs text-blue-600 leading-relaxed">
                  Our specialists help you choose the ideal procedure based on your detailed eye mapping and lifestyle requirements.
                </p>
              </div>
            </div>
          </section>

          {/* Anatomical Reference */}
          {/* <section className="bg-slate-50 rounded-3xl p-10 flex flex-col items-center">
            <h3 className="text-xl font-bold text-slate-800 mb-8">Corneal Reshaping Process</h3>
            <div className="max-w-4xl w-full">
              
            </div>
          </section> */}

        </div>
      </main>
    </div>
    <Footer/>
    </>
  );
};

// --- Reusable Component for Variants ---
const ServiceCard = ({ title, desc }: { title: string, desc: string }) => (
  <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all group">
    <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
      <CheckCheck size={24} />
    </div>
    <h4 className="text-lg font-bold text-slate-900 mb-3">{title}</h4>
    <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
  </div>
);

export default Refractive;