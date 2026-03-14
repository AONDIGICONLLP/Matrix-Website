import Header from '../Components/Header'
import Team from '../Components/TeamEye'
import Department from '../Components/DeptEye'
import Footer from '../Components/Footer'
import SocialSticky from '../Components/StickyIconEye';
import React from 'react';
import { 
  Activity, 
  Eye, 
  Target, 
  Baby, 
  Sparkles, 
  Microscope, 
  Stethoscope, 
  ShieldAlert,
  Zap,MousePointer2 
} from 'lucide-react';

interface CardProps {
  title: string;
  desc: string;
}

const Eyecare = () => {
  return (
    <>
    <SocialSticky />
    <Header/>
      {/* Hero Section */}
      <header className="bg-[url(/assets/banner-eye.png)] bg-cover bg-no-repeat text-blue-900 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">SBH Hospital Eye Care Services</h1>
          <p className="md:text-xl text-medium opacity-90 max-w-3xl mx-auto leading-relaxed">
            At SBH Hospital, we provide comprehensive eye care: from routine vision correction to advanced retinal and corneal treatments.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <span className="bg-blue-900 px-4 py-2 rounded-full border border-blue-400 text-sm text-white">Cataract</span>
            <span className="bg-blue-900 px-4 py-2 rounded-full border border-blue-400 text-sm text-white">Refractive</span>
            <span className="bg-blue-900 px-4 py-2 rounded-full border border-blue-400 text-sm text-white">Retina</span>
            <span className="bg-blue-900 px-4 py-2 rounded-full border border-blue-400 text-sm text-white">Paediatric</span>
            <span className="bg-blue-900 px-4 py-2 rounded-full border border-blue-400 text-sm text-white">Cornea</span>
            <span className="bg-blue-900 px-4 py-2 rounded-full border border-blue-400 text-sm text-white">Glaucoma</span>
          </div>
        </div>
      </header>
      <Department/>

        {/* 1. Advanced Eye Diagnostics & Equipment */}
        <section className="px-4 py-12 space-y-24 bg-gray-100">
          <div className='max-w-7xl mx-auto'>
              <div className="flex items-center gap-3 mb-8">
            <Activity className="text-blue-600 w-8 h-8" />
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Advanced Eye Diagnostics & Equipment</h2>
          </div>
          <p className="text-slate-600 mb-8">Accurate diagnosis is the foundation of effective eye treatment. SBH Hospital is equipped with modern testing and imaging systems that support early detection, precise planning, and better surgical outcomes.</p>
          
          <div className="overflow-hidden border border-slate-200 rounded-xl shadow-sm">
            <table className="w-full text-left bg-white">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4 text-sm font-bold text-slate-700 uppercase">Equipment List</th>
                  <th className="px-6 py-4 text-sm font-bold text-slate-700 uppercase">Make/Model</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  ["Perimetry", "Zeiss"], ["IOL Master", "Zeiss"], ["FFA (Fundus Fluorescein Angiography)", "Zeiss"],
                  ["OCT (Optical Coherence Tomography)", "Caregroup"], ["Corneal Topography", "Caregroup"],
                  ["B-Scan", "Appasamy"], ["A-Scan", "Biomedix"], ["VEP (Visual Evoked Potential)", "RMS"],
                  ["Retinal Laser", "Biomedix"], ["YAG Laser", "Appasamy"]
                ].map(([item, brand], idx) => (
                  <tr key={idx} className="hover:bg-blue-50/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-slate-800">{item}</td>
                    <td className="px-6 py-4 text-blue-600 font-semibold">{brand}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          </div>
        </section>

        {/* 6. Oculoplasty & Aesthetic Eye Surgery */}
        <section className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* --- MAIN HERO CARD --- */}
        <div className="bg-white rounded-[0.5rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white/60 relative overflow-hidden mb-12">
          {/* Subtle Background Blurs */}
          <div className="absolute top-[-10%] left-[-5%] w-64 h-64 bg-blue-200/30 rounded-full blur-3xl -z-0"></div>
          
          <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
            {/* Left Content */}
            <div className="lg:w-1/2 space-y-6">
              <div className="flex items-center gap-2 text-blue-600 font-bold text-sm tracking-widest uppercase">
                <Sparkles size={20} className="animate-pulse" />
                <span>Oculoplasty & Aesthetic</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
                Refining Vision, <br />
                <span className="text-blue-600">Restoring Confidence</span>
              </h2>
              <p className="text-slate-600 leading-relaxed max-w-xl">
                Oculoplasty deals with eyelid, tear duct, and orbital problems, along with cosmetic eye-area procedures. 
                Our treatments are planned to restore function and comfort while maintaining your natural appearance.
              </p>
            </div>

            {/* Right Image Layout (Before/After Style) */}
            <div className="lg:w-1/2">
              <div className="bg-slate-50 p-2 rounded-[0.5rem] border border-slate-100 flex gap-4">
                <div className="rounded-[0.5rem] overflow-hidden shadow-sm">
                   <img src='assets/service/oculoplasty.jpg' />
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    </section>
        
        <Team/>
    <Footer/>
    </>
  );
  
};

// Reusable Components
const FeatureBox: React.FC<CardProps> = ({ title, desc }) => (
  <div className="p-5 bg-slate-800 rounded-xl border border-slate-700">
    <h5 className="font-bold text-blue-400 mb-2">{title}</h5>
    <p className="text-slate-400 leading-snug">{desc}</p>
  </div>
);

const InfoCard: React.FC<CardProps> = ({ title, desc }) => (
  <div className="p-6 border border-slate-200 rounded-2xl hover:shadow-md transition-shadow">
    <h4 className="font-bold text-slate-900 mb-2">{title}</h4>
    <p className="text-sm text-slate-600">{desc}</p>
  </div>
);

const WhiteCard: React.FC<CardProps> = ({ title, desc }) => (
  <div className="p-5 bg-white rounded-xl shadow-sm border border-blue-100">
    <h4 className="font-bold text-blue-900 mb-2">{title}</h4>
    <p className="text-sm text-slate-600">{desc}</p>
  </div>
);

const Card: React.FC<CardProps> = ({ title, desc }) => (
  <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
    <h4 className="font-bold text-slate-900 mb-2">{title}</h4>
    <p className="text-sm text-slate-600">{desc}</p>
  </div>
);


export default Eyecare;