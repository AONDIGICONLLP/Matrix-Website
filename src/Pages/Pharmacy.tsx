import React, { useState, type ChangeEvent } from 'react';
import { Upload, Pill, Truck, ShieldCheck, CheckCircle2 } from 'lucide-react';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import SocialSticky from '../Components/SocialIcon';
import Breadcrumbs from '../Components/Breadcrumbs'
import AboutBg from "/assets/banner-bg.jpg";

const PharmacyPage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isUploaded, setIsUploaded] = useState(false);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      // Simulate upload success
      setTimeout(() => setIsUploaded(true), 1000);
    }
  };

  return (
    <>
      <SocialSticky />
      <Header />
      <Breadcrumbs 
      items={[
        { label: "SBH Pharmacy", 
          bg: AboutBg
        }
      ]}
      />
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">

      {/* Hero Section */}
      <main className="max-w-4xl mx-auto px-6 py-12 md:py-20 text-center">
        <h1 className="text-2xl md:text-5xl font-bold text-gray-900 leading-tight">
          Medicines Delivered to Your <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Doorstep.</span>
        </h1>
        <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
          Skip the queue. Upload your prescription and get your medications delivered for free within 24 hours.
        </p>

        {/* Upload Card */}
        <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 max-w-xl mx-auto">
          {!isUploaded ? (
            <label className="group cursor-pointer flex flex-col items-center justify-center border-2 border-dashed border-slate-200 rounded-2xl py-12 px-6 hover:border-blue-400 hover:bg-blue-50 transition-all">
              <div className="bg-blue-100 p-4 rounded-full text-blue-600 group-hover:scale-110 transition-transform">
                <Upload size={32} />
              </div>
              <p className="mt-4 font-semibold text-lg">Upload Prescription</p>
              <p className="text-sm text-slate-400 mt-1">PDF, JPG, or PNG up to 10MB</p>
              <input 
                type="file" 
                className="hidden" 
                onChange={handleFileChange}
                accept="image/*,.pdf" 
              />
            </label>
          ) : (
            <div className="py-8 flex flex-col items-center animate-in fade-in zoom-in duration-300">
              <div className="bg-green-100 p-4 rounded-full text-green-600 mb-4">
                <CheckCircle2 size={40} />
              </div>
              <h3 className="text-xl font-bold italic">{file?.name}</h3>
              <p className="text-slate-500 mb-6">Prescription uploaded successfully!</p>
              <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-200 transition">
                Confirm Order
              </button>
            </div>
          )}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="flex flex-col items-center">
            <div className="text-blue-500 mb-3"><Truck size={32} /></div>
            <h4 className="font-bold">Free Delivery</h4>
            <p className="text-sm text-slate-500 mt-1">No hidden shipping costs.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-blue-500 mb-3"><ShieldCheck size={32} /></div>
            <h4 className="font-bold">Verified Pharma</h4>
            <p className="text-sm text-slate-500 mt-1">100% genuine medications.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-blue-500 mb-3"><Pill size={32} /></div>
            <h4 className="font-bold">Automated Refills</h4>
            <p className="text-sm text-slate-500 mt-1">Never miss a dose again.</p>
          </div>
        </div>
      </main>

    </div>
     <Footer />
    </>
  );
};

export default PharmacyPage;