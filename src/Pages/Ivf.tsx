import Header from '../Components/Header'
import Footer from '../Components/Footer'
import HeroSection from '../Components/FirtilityHero'
import SocialSticky from '../Components/StickyIconWomen';
import Team from '../Components/TeamWomen'
import React from 'react';
import { 
  Heart, 
  Stethoscope, 
  ShieldCheck, 
  CheckCircle2, 
  ChevronRight, 
  Settings,
  Microscope,
  Activity,
  Zap,
  Dna,
  ThermometerSnowflake
} from 'lucide-react';

const IVF = () => {
  const keyFacilities = [
    { name: "Indo-German IVF Program", desc: "First in Chhattisgarh", icon: <Activity size={18} /> },
    { name: "Advanced IVF & Embryology Lab", desc: "Precision Environment", icon: <Microscope size={18} /> },
    { name: "ICSI, IMSI & FET Treatments", desc: "Advanced Micromanipulation", icon: <Zap size={18} /> },
    { name: "Ovulation Induction & IUI", desc: "Assisted Reproduction", icon: <Heart size={18} /> },
    { name: "Donor Programs", desc: "Egg, Sperm & Embryo", icon: <Dna size={18} /> },
    { name: "Cryopreservation", desc: "Eggs, Sperm & Embryos", icon: <ThermometerSnowflake size={18} /> },
    { name: "Laser Assisted Hatching", desc: "Improved Implantation", icon: <Settings size={18} /> },
    { name: "Genetic Screening", desc: "PGT-A & PGT-M", icon: <ShieldCheck size={18} /> }
  ];

  return (
    <>
      <SocialSticky />
      <Header/>
      {/* <HeroSection/> */}
      {/* Custom Hero Section */}
      <section className="relative overflow-hidden">
        <header className="bg-[url('/assets/ivf-bg.png')] bg-cover bg-no-repeat text-teal-700 py-24 px-4 bg-slate-100">
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              SBH Hospital Advanced Fertility Services
            </h1>
            <p className="md:text-xl text-medium opacity-90 max-w-3xl mx-auto leading-relaxed text-slate-700">
              Bringing world-class reproductive technology to Chhattisgarh. Our Indo-German IVF program focuses on safe, 
              evidence-based treatment with a team of globally experienced fertility specialists.
            </p>
            <div className="mt-10 flex justify-center gap-3 flex-wrap">
              {[
                "Fertility Care", "Indo-German IVF", "ICSI", 
                "IUI", "Cryopreservation", "Infertility Treatment"
              ].map((tag) => (
                <span key={tag} className="bg-teal-900 px-4 py-2 rounded-full border border-teal-400 text-sm text-white">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </header>
        
        {/* Floating Decorative Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-teal-400 rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-8 h-8 bg-blue-300 rounded-full opacity-30"></div>
        <div className="absolute top-1/2 right-10 w-12 h-12 bg-emerald-200 rounded-full opacity-20 blur-sm"></div>
      </section>
    
    <div className="min-h-screen bg-slate-50 py-12 font-sans">
      {/* Introduction - Hope Begins Here */}
      <section className="container mx-auto px-6">
        <div className="bg-white shadow-xl rounded-3xl p-8 md:p-16 -mt-20 relative z-20 border border-slate-100">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 font-bold text-xs uppercase tracking-widest mb-4">
                Advanced Fertility Care
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Hope Begins Here with IVF</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                SBH Multispecialty Hospital offers advanced fertility solutions with a patient-focused approach. 
                Our IVF program is designed to deliver safe, ethical, and personalized treatment for couples facing infertility challenges.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {['Patient-Focused Approach', 'Safe & Ethical Treatments', 'Personalized Success Plans'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-800 font-semibold">
                    <div className="bg-emerald-100 p-1 rounded-full">
                        <CheckCircle2 className="text-emerald-600" size={18} />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="./assets/service/embryo.jpg" 
                className="rounded-2xl shadow-2xl object-cover w-full h-[400px]" 
                alt="IVF Specialist Care" 
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-lg border-l-4 border-blue-600 hidden lg:block">
                 <p className="text-sm font-bold text-slate-800 italic">"Turning dreams into reality <br/> through science & care."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Indo-German IVF Section - The Differentiator */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
            <img 
              src="./assets/service/IVF.png" 
              alt="Advanced IVF Lab" 
              className="rounded-3xl shadow-2xl relative z-10 border-8 border-white"
            />
          </div>
          <div className="lg:w-1/2">
            <div className="flex items-center gap-2 text-blue-600 font-bold mb-4 uppercase tracking-tighter">
              <Microscope size={24} /> First Time in Chhattisgarh!
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Indo-German IVF: <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                International Precision Protocols
              </span>
            </h2>
            <p className="text-slate-600 mb-8 text-lg">
              SBH Women Hospital introduces the state’s first Indo-German IVF, combining advanced German technology with expert clinical care. 
              Our international protocols and individualized treatment planning work together to significantly improve success rates.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <IVFDetail text="Advanced German Tech" />
              <IVFDetail text="Precision Lab Standards" />
              <IVFDetail text="Individualized Planning" />
              <IVFDetail text="Expert Clinical Care" />
            </div>
          </div>
        </div>
      </section>

      {/* Key Facilities Grid */}
      <section className="py-20 px-6 bg-slate-900 text-white rounded-[3rem] mx-4 md:mx-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">State-of-the-Art Facilities</h2>
            <p className="text-slate-400 max-w-2xl mx-auto italic">
              Our department is supported by world-class infrastructure designed for safety, precision, and high success rates.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFacilities.map((item, index) => (
              <div 
                key={index} 
                className="group p-8 rounded-3xl bg-slate-800/50 border border-slate-700 hover:border-emerald-500 transition-all duration-300 hover:translate-y-[-5px]"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{item.name}</h3>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="max-w-7xl mx-auto py-24 px-6 text-center">
        <div className="bg-gradient-to-br from-blue-600 to-emerald-600 rounded-[2rem] p-12 text-white shadow-2xl relative overflow-hidden">
          {/* Decorative Circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32"></div>
          
          <h2 className="text-4xl font-bold mb-4 relative z-10">Start Your Journey Today</h2>
          <p className="mb-10 opacity-90 max-w-xl mx-auto text-lg relative z-10">
            Consult with Chhattisgarh's leading fertility experts and discover the best path for your parenthood dreams.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
            <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold hover:shadow-xl transition-all hover:scale-105">
              Book a Fertility Consultation
            </button>
            <button className="bg-transparent border-2 border-white/50 text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
              View Success Stories
            </button>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
};

const IVFDetail = ({ text }: { text: string }) => (
  <div className="flex items-center gap-4 group">
    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center">
      <CheckCircle2 size={14} />
    </div>
    <span className="font-semibold text-slate-700">{text}</span>
  </div>
);

export default IVF;