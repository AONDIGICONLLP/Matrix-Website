import Header from '../Components/Header'
import Footer from '../Components/Footer'
import SocialSticky from '../Components/SocialIcon';
import Breadcrumbs from '../Components/Breadcrumbs'
import AboutBg from "/assets/banner-bg.jpg";
import React from 'react';
import { 
  ShieldPlus, 
  Stethoscope, 
  UserRound, 
  ClipboardCheck, 
  HeartPulse, 
  Microscope, 
  Headphones, 
  ChevronRight,
  ArrowRight
} from 'lucide-react';

const HealthCare = () => {
  const assessmentItems = [
    "Full Body Checkups", "Cardiac Risk Assessment", "Diabetic Screening", 
    "Radiology & Imaging", "Pulmonary Function Tests", "Cancer Screenings"
  ];

  const pillars = [
    {
      icon: <ShieldPlus className="text-emerald-500" size={32} />,
      title: "Preventive Health Care",
      desc: "Focusing on wellness before illness through routine screenings and lifestyle counseling."
    },
    {
      icon: <UserRound className="text-blue-500" size={32} />,
      title: "Patient Care Services",
      desc: "Comprehensive inpatient and outpatient support tailored to individual recovery needs."
    },
    {
      icon: <HeartPulse className="text-rose-500" size={32} />,
      title: "Disease Management",
      desc: "Specialized care for chronic conditions like Hypertension, Diabetes, and Heart Disease."
    }
  ];

  return (
    <>
      <SocialSticky />
      <Header />
      <Breadcrumbs 
      items={[
        { label: "Health Care", 
          bg: AboutBg
        }
      ]}
      />

      <div className="bg-slate-50 font-sans">
        
        {/* Core Pillars Section */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Patient-Centric <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Healthcare</span></h1>
            <p className="text-lg text-slate-600 mb-8">
                Our Health Care section is designed to support patients with preventive care, 
            early diagnosis, and guided treatment through expert medical services and modern technology.
            </p>
            </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:translate-y-[-5px] transition-all duration-300">
                <div className="mb-4">{pillar.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{pillar.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Assessments & Technology */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 text-emerald-600 font-bold mb-4 uppercase tracking-wider text-sm">
                <ClipboardCheck size={20} /> Advanced Diagnosis
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Key Health Assessments & Technology</h2>
              <p className="text-slate-600 mb-8">
                Utilizing state-of-the-art laboratory and imaging facilities to provide accurate diagnosis and 
                data-driven treatment plans.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {assessmentItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-slate-700 font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 flex items-center gap-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
                <Microscope className="text-blue-600" size={40} />
                <p className="text-sm text-blue-800">
                  <strong>Modern Facilities:</strong> Our labs are equipped with the latest diagnostic technology for rapid and precise results.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img src="./assets/service/tech-facility.jpg" className="rounded-3xl shadow-2xl" alt="Technology and Facilities" />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="bg-emerald-100 p-3 rounded-full"><Stethoscope className="text-emerald-600" /></div>
                  <div>
                    <p className="text-xs text-slate-500">Expert Guidance</p>
                    <p className="font-bold text-slate-900">100% Guided Care</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Patient Support Section */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="bg-emerald-600 rounded-[2rem] p-8 md:p-16 text-white overflow-hidden relative">
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <h2 className="text-3xl font-bold mb-6">Patient Support & Guidance</h2>
                <p className="text-emerald-50 mb-8 text-lg">
                  Navigating healthcare can be complex. Our dedicated support team provides 
                  financial counseling, insurance assistance, and post-treatment follow-up 
                  to ensure a smooth recovery journey.
                </p>
                <ul className="space-y-4">
                  {["24/7 Helpline Support", "Insurance & TPA Assistance", "Discharge Counseling"].map((list, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="bg-white/20 p-1 rounded-full"><ChevronRight size={16} /></div>
                      {list}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center">
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 text-center">
                  <Headphones size={48} className="mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Need Assistance?</h3>
                  <p className="text-sm text-emerald-100 mb-6">Our patient care coordinators are here to help.</p>
                  <button className="bg-white text-emerald-600 px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition-colors">
                    Talk to an Expert
                  </button>
                </div>
              </div>
            </div>
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Start Your Journey to Better Health</h2>
          <p className="text-slate-600 mb-10 max-w-xl mx-auto">
            Book a preventive health checkup today or consult with our disease management specialists.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href='./book-appointment' className="bg-slate-900 text-white px-10 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all">
              Book Appointment <ArrowRight size={20} />
            </a>
            <a href='/our-specialities' className="border-2 border-slate-200 text-slate-700 px-10 py-4 rounded-full font-bold hover:bg-slate-50 transition-all">
              View All Services
            </a>
          </div>
        </section>

      </div>
      
      <Footer />
    </>
  );
};

export default HealthCare;