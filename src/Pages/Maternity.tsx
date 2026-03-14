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
  Sparkles,
  Baby
} from 'lucide-react';

const Maternity = () => {
  const equipment = [
    "Oxygen Cylinder (Small)", "CO₂ Cylinder", "N₂O Cylinder", 
    "Ventilator CO₂ Insufflator", "Emergency Trolley", "Defibrillator", 
    "Monitor with EtCO₂", "LAPRO Trolley", "Boiler Machine", 
    "Formaline Chamber", "CIDEX Chamber", "Vacuum Machine", 
    "Suction Machine (Double Jar)", "Instrument Case Trolley", 
    "Warmer Machine", "O₂ B Type", "Baby Suction Machine", 
    "Calposcopy Machine", "Medicine Trolley", "Fogger Machine", 
    "Fumigator Machine", "Air Cutter Machine", "Stretcher Trolley"
  ];

  // Organized the new content into logical groups
  const services = [
    { title: "Pregnancy & Birth", items: ["Obstetrics & Gynecology", "High-Risk Pregnancy", "Painless Delivery & Labor", "Vaginal Birth After Cesarean (VBAC)", "Fetal Medicine", "Pre-Pregnancy Health Checkup"] },
    { title: "Specialized Care", items: ["Breast Care Clinic", "Gynecological Endoscopic Surgeries", "Laparoscopic Surgeries", "Urogynecology", "Minimally Invasive Surgery", "Diabetes in Women"] },
    { title: "Wellness & Support", items: ["Well Women Check Up", "Breastfeeding Support", "Lactation", "Childbirth Preparation Classes", "Women's Nutrition", "Menopause & Perimenopause"] },
    { title: "Holistic Health", items: ["Women Physiotherapy", "Women Psychiatry", "General Medicine", "International Patients", "Fertility Care"] }
  ];

  return (
    <>
      <SocialSticky />
      <Header/>
      <HeroSection/>
    
    <div className="min-h-screen bg-slate-50 py-12 font-sans">
      {/* Introduction */}
      <section className="container mx-auto px-6">
        <div className="rounded-[0.5rem] p-8 md:p-16 -mt-12 relative z-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Department Services</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Our Women’s Department provides comprehensive care for women at every stage of life. 
                From adolescence to pregnancy, childbirth, and menopause, we focus on safe, 
                evidence-based, and compassionate treatment.
              </p>
              <div className="space-y-4">
                {['Safe & Compassionate', 'Experienced Specialists', 'Complete Care Under One Roof'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-800 font-medium">
                    <CheckCircle2 className="text-emerald-500" size={20} /> {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="assets/service/equipment.jpg" className="rounded-[0.5rem] object-cover shadow-lg" alt="Hospital equipment" />
              <img src="assets/service/maternitycare.jpg" className="rounded-[0.5rem] h-40 w-full object-cover mt-8 shadow-lg" alt="Medical care" />
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Comprehensive Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Specialized Women's Services</h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((group, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-emerald-700 mb-4 flex items-center gap-2">
                  <Activity size={18} /> {group.title}
                </h3>
                <ul className="space-y-3">
                  {group.items.map((service, i) => (
                    <li key={i} className="text-slate-600 text-sm flex items-start gap-2">
                      <ChevronRight size={14} className="mt-1 text-emerald-400 shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment & Facilities Section */}
      <section className="py-20 px-6 bg-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="md:w-1/2">
              <div className="flex items-center gap-3 text-teal-400 font-bold uppercase tracking-widest text-sm mb-4">
                <Settings size={20} className="animate-spin-slow" /> Advanced Infrastructure
              </div>
              <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">Advanced Care Technology</h2>
              <p className="text-slate-400">
                The Women Care department at SBH Hospital is supported by essential medical equipment 
                designed for effective monitoring and surgical precision.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-2xl flex items-center gap-4">
                <ShieldCheck className="text-teal-400" size={32} />
                <span className="text-sm text-white">Safety, precision, and <br/>timely intervention.</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {equipment.map((item, index) => (
              <div 
                key={index} 
                className="group flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 p-4 rounded-xl transition-all"
              >
                <div className="w-2 h-2 rounded-full bg-teal-500 group-hover:scale-125 transition-transform"></div>
                <span className="text-slate-300 group-hover:text-white transition-colors text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDO-GERMAN IVF SECTION */}
      <section className="py-24 px-6 bg-gradient-to-br from-blue-50 to-emerald-50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
              <img 
                src="assets/service/IVF.png" 
                alt="IVF Lab" 
                className="rounded-[1rem] shadow-2xl relative z-10 border-8 border-white"
              />
            </div>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="flex items-center gap-2 text-emerald-600 font-bold mb-4">
              <Microscope size={24} /> International Fertility Standards
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Indo-German IVF <br/><span className="text-blue-600">Precision Fertility Treatment</span>
            </h2>
            <p className="text-slate-600 mb-8 text-lg">
              Combining advanced German fertility protocols with experienced Indian clinical expertise 
              to deliver safe, ethical, and precise infertility treatment.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <IVFDetail text="Hormone Profiling" />
              <IVFDetail text="Lab Protocols" />
              <IVFDetail text="Embryo Culture" />
              <IVFDetail text="Guided Care" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="max-w-7xl mx-auto py-20 px-6 text-center">
        <div className="bg-slate-900 rounded-[2rem] p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-10">
              <Heart size={120} />
          </div>
          <h2 className="text-3xl font-bold mb-4 relative z-10">Need Personalized Care?</h2>
          <p className="mb-8 opacity-90 max-w-xl mx-auto text-medium text-slate-400 relative z-10">
            Our department is ready to support you with modern facilities and expert clinical supervision.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <button className="bg-emerald-600 text-white px-10 py-4 rounded-full font-bold hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-900/20">
              Schedule Appointment
            </button>
            <button className="border-2 border-white/20 text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-slate-900 transition-all">
              Contact Department
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
  <div className="flex items-center gap-3 group bg-white p-3 rounded-xl shadow-sm border border-slate-100">
    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
      <CheckCircle2 size={16} />
    </div>
    <span className="font-semibold text-slate-700 text-sm">{text}</span>
  </div>
);

export default Maternity;