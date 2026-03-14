import Header from '../Components/Header'
import Breadcrumbs from '../Components/Breadcrumbs'
import Footer from '../Components/Footer'
import SocialSticky from '../Components/SocialIcon';
import AboutBg from "/assets/banner-bg.jpg";
import React, { useState } from 'react';
import { Check, Activity, ShieldCheck, Zap, X } from 'lucide-react';

const PricingSection: React.FC = () => {
  const [isYearly, setIsYearly] = useState<boolean>(false);
  
  // --- Form & Modal State ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string>("");
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: ''
  });

  const packages = [
    {
      name: "Basic Health",
      target: "Essential Screening",
      monthlyPrice: 1199,
      yearlyPrice: 990,
      icon: <Activity className="w-6 h-6" />,
      features: [
        "Haemogram: CBC",
        "Diabetes: Sugar (F/R), HbA1c",
        "Kidney/RFT: Urea, Creatinine, Electrolytes",
        "Liver/LFT: Bilirubin, SGPT, SGOT, ALP",
        "Heart/Lipid: Total Chol, Trig, HDL/LDL",
        "Bone: Uric Acid, Calcium",
        "Thyroid: TSH",
      ],
      popular: false,
    },
    {
      name: "Advance Health",
      target: "In-depth Analysis",
      monthlyPrice: 2399,
      yearlyPrice: 1990,
      icon: <Zap className="w-6 h-6" />,
      features: [
        "Everything in Basic Plan",
        "Bone & Joints: Vit B12 & Vitamin D",
        "Full Thyroid: T3, T4, TSH",
        "Anemia: Iron Profile",
        "Infection: CRP (Inflammation)",
      ],
      popular: true,
    },
    {
      name: "Comprehensive",
      target: "Full Body Diagnostic",
      monthlyPrice: 3399,
      yearlyPrice: 3990,
      icon: <ShieldCheck className="w-6 h-6" />,
      features: [
        "Everything in Advance Plan",
        "Haemogram: CBC + ESR",
        "Infection: Urine Routine",
        "Sonography (Ultrasound)",
        "ECG (Heart Rhythm)",
        "Physical Doctor Consultation",
      ],
      popular: false,
    },
  ];

  const handleBookNow = (packageName: string) => {
    setSelectedPackage(packageName);
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking Details:", { package: selectedPackage, ...formData });
    alert(`Thank you ${formData.name}! Your booking request for ${selectedPackage} has been received.`);
    setIsModalOpen(false);
    setFormData({ name: '', phone: '', email: '', date: '' });
  };

  return (
    <> 
      <SocialSticky />
      <Header/>
      <Breadcrumbs 
        items={[{ label: "Lab Test", bg: AboutBg }]}
      />

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Health Checkup</span> Packages
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Choose the right screening for your wellness journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div 
                key={index}
                className={`flex flex-col relative rounded-3xl p-8 transition-all duration-300 ${
                  pkg.popular 
                  ? 'bg-gradient-to-r from-blue-100 to-green-100 border-2 border-blue-500 shadow-2xl scale-105 z-10' 
                  : 'bg-white border border-slate-200 shadow-sm hover:shadow-md'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                    Recommended
                  </div>
                )}

                <div className="mb-8">
                  <div className={`inline-flex p-3 rounded-2xl mb-4 ${pkg.popular ? 'bg-blue-200 text-blue-600' : 'bg-gradient-to-r from-blue-100 to-green-100 text-green-600'}`}>
                    {pkg.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{pkg.name}</h3>
                  <p className="text-slate-500 text-sm mt-1">{pkg.target}</p>
                </div>

                <div className="mb-8">
                  <span className="text-5xl font-bold text-slate-900">
                    ₹{isYearly ? pkg.yearlyPrice : pkg.monthlyPrice}
                  </span>
                </div>

                <div className="flex-1">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Package Includes</p>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <Check className={`w-5 h-5 mr-3 flex-shrink-0 ${pkg.popular ? 'text-blue-500' : 'text-green-500'}`} />
                        <span className="text-slate-600 text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={() => handleBookNow(pkg.name)}
                  className={`mt-10 w-full py-4 px-6 rounded-2xl font-bold transition-all ${
                    pkg.popular 
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200' 
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                  }`}
                >
                  Book a Test
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Booking Modal --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-3xl w-full max-w-md p-8 relative shadow-2xl animate-in fade-in zoom-in duration-200">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="text-2xl font-bold text-slate-900 mb-2">Book Your Test</h3>
            <p className="text-slate-500 mb-6">
              You've selected: <span className="text-blue-600 font-bold">{selectedPackage}</span>
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Full Name</label>
                <input 
                  required
                  type="text" 
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Phone Number</label>
                <input 
                  required
                  type="tel" 
                  placeholder="Enter 10-digit mobile number"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Preferred Date</label>
                <input 
                  required
                  type="date" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                />
              </div>

              <button 
                type="submit"
                className="w-full py-4 mt-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
              >
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      )}

      <Footer/>
    </>
  );
};

export default PricingSection;