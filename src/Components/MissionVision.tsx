import React from 'react';
import { Target, Eye, Compass, Shield, Zap, Handshake } from 'lucide-react';

export const MissionVision: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Mission Card */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex gap-5">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <Target className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h2>[cite: 1]
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                To elevate global healthcare by delivering innovative, high-precision products and services 
                in medical laboratory diagnostics.[cite: 1] We are committed to empowering our team to drive 
                meaningful impact while building a thriving, trusted nationwide enterprise.[cite: 1]
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex gap-5">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <Eye className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h2>[cite: 1]
              <p className="text-gray-600 leading-relaxed italic text-sm md:text-base">
                "Empowering Health and Improving Lives Through Precision Diagnostics.[cite: 1] We are ready to unveil 
                tomorrow's answers today with Matrix."[cite: 1]
              </p>
            </div>
          </div>
        </div>

        {/* Core Values Subdivision */}
        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex items-center space-x-3 mb-8">
            <Compass className="w-6 h-6 text-indigo-600" />
            <h2 className="text-2xl font-bold text-gray-900">Our Core Values</h2>[cite: 1]
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="w-8 h-8 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center">
                <Shield className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-gray-800">Precision & Quality</h3>[cite: 1]
              <p className="text-sm text-gray-500 leading-relaxed">
                Committing to uncompromising accuracy and reliable compliance in every diagnostic solution we deliver.[cite: 1]
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-8 h-8 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-gray-800">Innovation</h3>[cite: 1]
              <p className="text-sm text-gray-500 leading-relaxed">
                Continuously evolving our technical prowess to provide cutting-edge solutions for modern laboratories.[cite: 1]
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-8 h-8 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center">
                <Handshake className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-gray-800">Integrity & Trust</h3>[cite: 1]
              <p className="text-sm text-gray-500 leading-relaxed">
                Building lasting relationships with healthcare professionals through transparency, excellence, and unwavering service.[cite: 1]
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MissionVision