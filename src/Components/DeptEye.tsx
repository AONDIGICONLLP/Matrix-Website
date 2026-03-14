import React from 'react';
import { 
  Eye, 
  Activity, 
  Target, 
  Baby, 
  Layers, 
  Microscope 
} from 'lucide-react';

interface ServiceItem {
  id: number;
  title: string;
  icon: string;
  colorClass: string; // Tailwind color for the background and icon
  link: string;
}

const services: ServiceItem[] = [
  {
    id: 1,
    title: "Cataract Surgery",
    icon: "assets/icons/cataract.png",
    colorClass: "bg-blue-500/10 text-blue-600",
    link: "cataract"
  },
  {
    id: 2,
    title: "Refractive Surgery",
    icon: "assets/icons/refraction.png",
    colorClass: "bg-pink-500/10 text-pink-600",
    link: "refractive"
  },
  {
    id: 3,
    title: "Retina Care",
    icon: "assets/icons/retina.png",
    colorClass: "bg-emerald-500/10 text-emerald-600",
    link: "retina"
  },
  {
    id: 4,
    title: "Paediatric Eye Care",
    icon: "assets/icons/eye-care.png",
    colorClass: "bg-purple-500/10 text-purple-600",
    link: "paediaeyecare"
  },
  {
    id: 5,
    title: "Cornea Services",
    icon: "assets/icons/cornea.png",
    colorClass: "bg-indigo-500/10 text-indigo-600",
    link: "cornea"
  },
  {
    id: 6,
    title: "Glaucoma Care",
    icon: "assets/icons/glaucoma.png",
    colorClass: "bg-orange-500/10 text-orange-600",
    link: "glaucoma"
  }
];

const EyeCareServices: React.FC = () => {
  return (

    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header (Optional) */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Eye Care Specialities</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group flex flex-col h-full"
            >
              <a 
                href={service.link}
                className={`
                  flex flex-col items-center justify-center p-8 rounded-2xl 
                  transition-all duration-300 h-full text-center
                  border border-transparent hover:border-gray-200 hover:shadow-lg
                  ${service.colorClass}
                `}
              >
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={service.icon} 
                    alt={service.icon} 
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                </div>
                <h3 className="text-sm md:text-base font-bold text-gray-900 leading-tight">
                  {service.title}
                </h3>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EyeCareServices;