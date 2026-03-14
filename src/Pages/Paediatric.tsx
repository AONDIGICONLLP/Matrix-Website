import Header from '../Components/Header'
import Footer from '../Components/Footer'
import SocialSticky from '../Components/SocialIcon';
import React from 'react';
import { 
  Baby, 
  Stethoscope, 
  ShieldCheck, 
  Activity, 
  Microscope, 
  PlusSquare, 
  Heart, 
  Sparkles,
  Layers,
  Zap,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

const Pediatrics: React.FC = () => {
  return (
      <>
      <SocialSticky />
      <Header/>

    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-green-100">
      {/* Hero Section */}
      <header className="bg-[url(/assets/paedia-banner.png)] bg-cover bg-no-repeat text-blue-900 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">SBH Hospital Paediatric Services</h1>
          <p className="md:text-xl text-medium opacity-90 max-w-3xl mx-auto leading-relaxed">
            The SBH Pediatric Department provides advanced, round-the-clock care for premature and critically ill newborns.
          </p>
        </div>
      </header>
      {/* 1. PEDIATRICS & NICU SECTION */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          <div className="lg:w-1/2">
            <div className="inline-block text-white bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-2 rounded-full font-bold tracking-wider uppercase text-xs mb-4 shadow-lg shadow-blue-200">
              Pediatric Excellence
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
              Compassionate Care <br/><span className="text-emerald-600">for Your Little Ones</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              The SBH Paediatric Department provides comprehensive medical care for newborns and growing children, 
              focusing on safe, timely, and compassionate treatment from birth through early childhood.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FeatureItem text="Newborn Health Assessment" />
              <FeatureItem text="Ongoing Medical Care" />
              <FeatureItem text="Early Illness Detection" />
              <FeatureItem text="Maternity Coordination" />
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <img 
              src="assets/service/paediatric-service.png" 
              alt="Pediatric Care" 
              className="rounded-[0.5rem] shadow-2xl z-10 relative"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 flex items-center gap-4 border border-slate-100">
               <div className="bg-emerald-100 p-3 rounded-xl text-emerald-600"><Heart /></div>
               <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Expertise</p>
                  <p className="text-lg font-bold text-slate-800">Newborn Specialists</p>
               </div>
            </div>
          </div>
        </div>

        {/* NICU Highlight Card */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-[3rem] p-10 md:p-16 text-white overflow-hidden relative">
          <div className="relative z-10">
            <div className="flex items-center gap-3 text-emerald-400 mb-6 font-bold tracking-widest uppercase text-sm">
              <Zap size={20} /> Advanced Life Support
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">NICU – Neonatal Intensive Care Unit</h3>
            <p className="text-slate-400 max-w-2xl mb-10 text-lg">
              Advanced, round-the-clock care for premature and critically ill newborns, ensuring 
              immediate medical support during the most critical early stages of life.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <NICUCard icon={<Activity />} title="24/7 Monitoring" />
              <NICUCard icon={<Layers />} title="Temperature Control" />
              <NICUCard icon={<ShieldCheck />} title="Infection Control" />
              <NICUCard icon={<Stethoscope />} title="Respiratory Support" />
            </div>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] -mr-20 -mt-20"></div>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
};

// --- Sub-components ---

const FeatureItem = ({ text }: { text: string }) => (
  <div className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm border border-slate-100">
    <CheckCircle2 className="text-emerald-500" size={18} />
    <span className="text-sm font-semibold text-slate-700">{text}</span>
  </div>
);

const NICUCard = ({ icon, title }: { icon: React.ReactNode, title: string }) => (
  <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-white/20 transition-all cursor-default">
    <div className="text-emerald-400 mb-3">{icon}</div>
    <p className="font-bold text-lg">{title}</p>
  </div>
);

const DentalService = ({ icon, title, items }: { icon: React.ReactNode, title: string, items: string[] }) => (
  <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all group">
    <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="text-slate-500 text-sm flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div> {item}
        </li>
      ))}
    </ul>
  </div>
);



export default Pediatrics;