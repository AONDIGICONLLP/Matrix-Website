import React from 'react';
import { ArrowRight, Award, ShieldCheck, Activity } from 'lucide-react';

export const AboutPreview: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
              <Activity className="w-4 h-4" />
              <span>Decades of Medical Excellence</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
              About Matrix Lifesciences
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              Matrix Lifesciences Private Limited began its journey over decades ago as Laxmi Scientific Works, 
              a modest trading enterprise fueled by a vision to become a leading name in scientific excellence.
              From our earliest days supplying premium-grade scientific equipment and laboratory supplies, we have 
              grown through a steadfast commitment to organizational prowess, competence, and uncompromising quality.
            </p>

            <div className="pt-4">
              <a href='aboutus' className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-colors group">
                <span>READ MORE</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Graphical Info Cards Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-50 border border-gray-100 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 text-blue-600">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">Competence</h3>
              <p className="text-xs text-gray-500">Highly reliable and certified internal execution standards.</p>
            </div>

            <div className="p-6 bg-gray-50 border border-gray-100 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 text-emerald-600">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">Uncompromising Quality</h3>
              <p className="text-xs text-gray-500">Committed to precise diagnostics and validation checkpoints.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
export default AboutPreview;