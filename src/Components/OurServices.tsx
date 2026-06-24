import React from 'react';
import { Truck, Cpu, GraduationCap, Wrench, ShieldAlert, ArrowRight } from 'lucide-react';

interface ServiceBlock {
  title: string;
  icon: React.ReactNode;
}

export const MedicalServices: React.FC = () => {
  const servicesData: ServiceBlock[] = [
    { title: "Delivery", icon: <Truck className="w-6 h-6" /> },
    { title: "Installation", icon: <Cpu className="w-6 h-6" /> },
    { title: "Training and Demonstration", icon: <GraduationCap className="w-6 h-6" /> },
    { title: "Maintenance", icon: <Wrench className="w-6 h-6" /> },
    { title: "Strategic Consultation", icon: <Cpu className="w-6 h-6" /> },
    { title: "Quality Assurance & Feedback", icon: <ShieldAlert className="w-6 h-6" /> }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
          <p className="text-gray-500 mt-2 text-sm">Comprehensive lifecycle diagnostics support architecture</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {servicesData.map((service, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow flex items-center justify-between group">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0">
                  {service.icon}
                </div>
                <h3 className="text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">{service.title}</h3>
              </div>
              
              <button 
                className="p-2 text-gray-400 hover:text-blue-600 bg-transparent hover:bg-blue-50 rounded-lg transition-colors flex items-center justify-center group/btn"
                aria-label={`Read more about ${service.title}`}
              >
                <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-0.5 transition-transform" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MedicalServices