import React from 'react';
import { Quote } from 'lucide-react';

export const CeoMessage: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 to-blue-950 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Executive Image Frame Column */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative group max-w-[320px] w-full">
              <div className="absolute inset-0 bg-blue-600 rounded-2xl transform rotate-3 scale-102 group-hover:rotate-1 transition-transform duration-300"></div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 shadow-2xl">
                <img 
                  src="assets/img/team/vikram-gambhir.jpg" 
                  alt="Mr. Vikram Gambhir" 
                  className="w-full h-full object-cover object-top filter grayscale hover:grayscale-0 transition-all duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop";
                  }}
                />
              </div>
            </div>
          </div>

          {/* Narrative Content Column */}
          <div className="lg:col-span-8 space-y-6 relative">
            <div className="absolute right-0 top-0 opacity-5 pointer-events-none hidden md:block">
              <Quote className="w-48 h-48" />
            </div>

            <div className="flex items-center space-x-3 text-blue-400 font-semibold tracking-wider uppercase text-sm">
              <span className="w-8 h-[2px] bg-blue-400"></span>
              <span>From the CEO’s Desk</span>
            </div>

            <blockquote className="space-y-4 text-gray-300 text-sm md:text-base leading-relaxed font-light">
              <p>
                "For over three decades, my commitment to the advancement of life sciences has been driven by a singular, 
                profound belief: that precision diagnostics has the transformative power to save and improve lives.
              </p>
              <p>
                Since the inception of Matrix Lifesciences, our work ethic has been anchored in an uncompromising dedication 
                to excellence and corporate integrity. We believe that true corporate leadership is not merely measured by 
                market presence, but by upholding the highest moral principles, ethics, and professionalism in everything we do. 
                Our contributions to the medical field are designed to be both groundbreaking and deeply responsible."
              </p>
              <p>
                "At Matrix Lifesciences, our mission is to sit at the absolute forefront of the diagnostic industry. 
                We do not strive to simply participate in the market; we aim to lead it, setting new benchmarks through relentless 
                technological innovation, cutting-edge research, and a profound understanding of community healthcare needs."
              </p>
            </blockquote>

            <div className="pt-4 border-t border-slate-800">
              <h4 className="text-xl font-bold tracking-wide text-white">VIKRAM GAMBHIR</h4>
              <p className="text-sm text-blue-400">CEO and Founder, Matrix Lifesciences Pvt. Ltd. </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
export default CeoMessage