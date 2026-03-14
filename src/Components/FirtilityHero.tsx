import React from 'react';
import { Calendar, Search, ArrowRight } from 'lucide-react';

const FertilityHero: React.FC = () => {
  return (
    
    <section className="relative overflow-hidden">
      {/* Background Decor (Matching your banner-bg assets) */}
      {/* Hero Section */}
      <header className="bg-[url(/assets/fertility-bg.png)] bg-cover bg-no-repeat text-teal-700 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">SBH Hospital Maternity Care Services</h1>
          <p className="md:text-xl text-medium opacity-90 max-w-3xl mx-auto leading-relaxed">
            From adolescence to menopause, our Women’s Department focuses on safe, 
              evidence-based treatment with a team of experienced specialists.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <span className="bg-teal-900 px-4 py-2 rounded-full border border-teal-400 text-sm text-white">Fertility Care</span>
            <span className="bg-teal-900 px-4 py-2 rounded-full border border-teal-400 text-sm text-white">Indo-German IVF</span>
            <span className="bg-teal-900 px-4 py-2 rounded-full border border-teal-400 text-sm text-white">ICSI</span>
            <span className="bg-teal-900 px-4 py-2 rounded-full border border-teal-400 text-sm text-white">IUI</span>
            <span className="bg-teal-900 px-4 py-2 rounded-full border border-teal-400 text-sm text-white">Cryopreservation</span>
            <span className="bg-teal-900 px-4 py-2 rounded-full border border-teal-400 text-sm text-white">Infertility Treatment</span>
          </div>
        </div>
      </header>

      {/* Background Floating Shapes (banner-bg-01 to 06)  */ }
      <div className="absolute top-20 left-10 w-4 h-4 bg-teal-400 rounded-full opacity-40"></div>
      <div className="absolute bottom-20 left-1/4 w-8 h-8 bg-blue-300 rounded-full opacity-30"></div>
      <div className="absolute top-1/2 right-10 w-12 h-12 bg-emerald-200 rounded-full opacity-20 blur-sm"></div>
    </section>
  );
};

export default FertilityHero;