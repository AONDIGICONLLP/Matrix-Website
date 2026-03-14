import Header from '../Components/Header'
import Team from '../Components/TeamEye'
import Department from '../Components/DeptEye'
import Breadcrumbs from '../Components/Breadcrumbs'
import Footer from '../Components/Footer'
import SocialSticky from '../Components/StickyIconEye';
import Bg from "/assets/banner-eye.png";
import React from 'react';
import { 
  Activity, 
  ShieldCheck, 
  Search, 
  Droplets, 
  Zap, 
  Stethoscope, 
  ArrowRight,
  AlertCircle
} from 'lucide-react';

const Glaucoma: React.FC = () => {
  return (
    <>
    <SocialSticky />
    <Header/>
    <Breadcrumbs 
      items={[
        { label: "Glaucoma Care", 
          bg: Bg
        }
      ]}
      />
    <div className="min-h-screen bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative bg-gradient-to-r from-blue-100 to-green-100 py-16 md:py-24 overflow-hidden border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6">
              <span className="inline-block text-white bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 rounded-full font-bold tracking-wider uppercase text-xs mb-4 shadow-lg shadow-blue-200">
                Preventative Eye Care
              </span>
              <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
                Protect Your Vision from <span className="text-emerald-600">Glaucoma</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                Glaucoma is a group of diseases that damage the optic nerve, often 
                related to raised eye pressure. Because it often shows no early symptoms, 
                regular screening is the only way to prevent irreversible vision loss.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-emerald-200 flex items-center gap-2">
                  Book a Pressure Check <ArrowRight size={18} />
                </button>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img src='assets/eyedept/glaucoma.jpg' />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MAIN CONTENT --- */}
      <main className="container mx-auto px-6 py-20">
        <div className="max-w-7xl mx-auto space-y-20">
          
          {/* Understanding the Disease */}
          <section className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img src='assets/service/glaucoma.jpg' />
              <p className="mt-4 text-xs text-slate-400 text-center italic">
                Glaucoma typically affects peripheral vision first, often going unnoticed without clinical testing.
              </p>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="flex items-center gap-3 text-emerald-600">
                <AlertCircle size={32} />
                <h2 className="text-3xl font-bold text-slate-900">The "Silent" Condition</h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Most types of glaucoma provide no warning signs. The effect is so gradual 
                that you may not notice a change in vision until the condition is in its 
                advanced stages. This makes regular eye examinations, including eye 
                pressure (IOP) measurement, vital.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-2xl">
                <h4 className="font-bold text-amber-800 flex items-center gap-2 mb-2">
                  <Search size={18} /> Why Screening Matters
                </h4>
                <p className="text-sm text-amber-700">
                  Damage caused by glaucoma cannot be reversed. However, treatment and 
                  regular checkups can help slow or prevent vision loss, especially if caught early.
                </p>
              </div>
            </div>
          </section>

          {/* Treatment Options Grid */}
          <section>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900">Treatment & Management</h2>
              <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
                Our approach focuses on lowering eye pressure to a "target level" that is safe for your optic nerve.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Medical Therapy */}
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                  <Droplets size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Eye Drops</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  The most common first step. Medicated eye drops help either by improving 
                  how fluid drains from your eye or by decreasing the amount of fluid your eye makes.
                </p>
              </div>

              {/* Laser Procedures */}
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <Zap size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Laser Procedures</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Techniques like Selective Laser Trabeculoplasty (SLT) can be used to 
                  help fluid drain out of the eye, often reducing the need for daily drops.
                </p>
              </div>

              {/* Surgical Intervention */}
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center mb-6">
                  <Stethoscope size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Surgical Care</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  In advanced cases, surgery may be necessary to create a new drainage 
                  pathway for the eye fluid to lower the pressure effectively.
                </p>
              </div>
            </div>
          </section>

          {/* Clinical Commitment */}
          <section className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6">State-of-the-Art Diagnostics</h2>
              <p className="text-slate-400 max-w-3xl mx-auto mb-10 text-lg leading-relaxed">
                We use advanced imaging like <strong>OCT (Optical Coherence Tomography)</strong> 
                to map the optic nerve in microns, allowing us to detect changes much 
                earlier than standard vision tests.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold">
                <span className="flex items-center gap-2 text-emerald-400">
                  <ShieldCheck size={18} /> Regular Tonometry
                </span>
                <span className="flex items-center gap-2 text-emerald-400">
                  <ShieldCheck size={18} /> Visual Field Analysis
                </span>
                <span className="flex items-center gap-2 text-emerald-400">
                  <ShieldCheck size={18} /> Optic Disc Imaging
                </span>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
    <Footer/>
    </>
  );
};

export default Glaucoma;