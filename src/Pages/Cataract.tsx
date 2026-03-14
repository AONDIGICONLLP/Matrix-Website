import Header from '../Components/Header'
import Team from '../Components/TeamEye'
import Department from '../Components/DeptEye'
import Breadcrumbs from '../Components/Breadcrumbs'
import Footer from '../Components/Footer'
import SocialSticky from '../Components/StickyIconEye';
import { CheckCircle2, Microscope, Activity, HeartPulse, ArrowRight } from 'lucide-react';
import Bg from "/assets/banner-eye.png";
import React from 'react';


const Cataract = () => {
  return (
    <>
    <SocialSticky />
    <Header/>
      <Breadcrumbs 
      items={[
        { label: "Cataract Surgery", 
          bg: Bg
        }
      ]}
      />
        {/* Cataract Surgery */}
        <div className="min-h-screen bg-white">
              {/* --- HERO SECTION --- */}
              <section className="relative bg-gradient-to-r from-blue-100 to-green-100 py-16 md:py-24 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                  <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2 space-y-6">
                      <span className="inline-block text-white bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 rounded-full font-bold tracking-wider uppercase text-xs mb-4 shadow-lg shadow-blue-200">
                        Specialized Procedure
                      </span>
                      <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
                        Advanced <span className="text-blue-600">Cataract Surgery</span> Solutions
                      </h1>
                      <p className="text-lg text-slate-600 leading-relaxed">
                        Restore your vision and improve your quality of life. At SBH Hospital, we use 
                        precision technology to replace cloudy lenses with advanced intraocular lenses (IOL).
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-blue-200 flex items-center gap-2">
                          Book Appointment <ArrowRight size={18} />
                        </button>
                      </div>
                    </div>
                    
                    <div className="lg:w-1/2 relative">
                      <div className="rounded-[0.5rem] overflow-hidden shadow-2xl border-8 border-white">
                        <img src='assets/eyedept/cataract.jpg' />
                      </div>
                      {/* Floating Stat Card */}
                      <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
                        <div className="flex items-center gap-4">
                          <div className="bg-green-100 p-3 rounded-full text-green-600">
                            <HeartPulse size={24} />
                          </div>
                          <div>
                            <p className="text-sm text-slate-500 font-medium">Visual Recovery</p>
                            <p className="text-xl font-bold text-slate-900">Rapid & Safe</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
        
              {/* --- CONTENT SECTION --- */}
              <main className=" mx-auto px-6 py-20">
                <div className="max-w-7xl mx-auto space-y-20">
                  
                  {/* Understanding Cataract */}
                  <section className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <h2 className="text-3xl font-bold text-slate-900 mb-6">What is a Cataract?</h2>
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        A cataract is the clouding of the natural lens of the eye. Think of it like a 
                        foggy window; it causes blurred vision, glare, and difficulty seeing clearly, 
                        especially at night or while reading.
                      </p>
                        
                      <div className="bg-blue-900 text-white p-8 rounded-3xl shadow-xl">
                      <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <Activity className="text-blue-400" /> Common Symptoms
                      </h3>
                      <ul className="space-y-4">
                        {[
                          "Blurred or foggy vision",
                          "Sensitivity to light and glare",
                          "Difficulty with night vision",
                          "Fading or yellowing of colors",
                          "Double vision in a single eye"
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-3 opacity-90">
                            <CheckCircle2 size={20} className="text-blue-400 mt-1 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    </div>
                    <div> <img src='assets/service/service1.png' /></div>
                    
                  </section>
        
                  {/* The Procedure */}
                  <section className="text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">The Surgical Procedure</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto mb-12">
                      Modern cataract surgery is a safe, outpatient procedure. We remove the cloudy 
                      natural lens and replace it with a clear artificial intraocular lens (IOL).
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                      <StepCard 
                        icon={<Microscope size={32} />} 
                        title="Detailed Measurement" 
                        desc="Precise eye measurements are taken to plan the surgery and select the best lens."
                      />
                      <StepCard 
                        icon={<Activity size={32} />} 
                        title="Lens Selection" 
                        desc="IOL selection is customized based on your unique eye measurements and lifestyle needs."
                      />
                      <StepCard 
                        icon={<CheckCircle2 size={32} />} 
                        title="Vision Restoration" 
                        desc="The procedure is designed for quick recovery and significant visual clarity improvement."
                      />
                    </div>
                  </section>
        
                  {/* Technology Highlight */}
                  {/* <section className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white text-center">
                    <h2 className="text-3xl font-bold mb-6">Cutting-Edge Technology</h2>
                    <p className="text-blue-100 max-w-3xl mx-auto mb-10 text-lg">
                      At SBH Hospital, we use world-class equipment like the <strong>Zeiss IOL Master</strong> 
                      to ensure your lens power calculation is perfectly accurate for the best surgical outcome.
                    </p>
                    <div className="flex justify-center">
                       <div className="px-6 py-2 bg-blue-600 rounded-full font-bold uppercase tracking-widest text-sm">
                         Safe • Precise • Reliable
                       </div>
                    </div>
                  </section> */}
        
                </div>
              </main>
            </div> 
        <Footer/>
    </>
  );
  
};
// --- Reusable Component for Steps ---
const StepCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
    <div className="text-blue-600 mb-4 flex justify-center">{icon}</div>
    <h4 className="text-lg font-bold text-slate-900 mb-3">{title}</h4>
    <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
  </div>
);

export default Cataract;