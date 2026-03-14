import React from 'react';

const services = [
  "Multi Speciality Treatments & Doctors",
  "Lab Testing Services",
  "Medecines & Supplies",
  "Hospitals & Clinics",
  "Health Care Services",
  "Talk to Doctors",
  "Home Care Services",
];

const ScrollingServices: React.FC = () => {
  // We double the array to create the seamless infinite loop effect
  const infiniteServices = [...services, ...services];

  return (
    <section className="services-section py-10 overflow-hidden bg-white">
      <div className="relative flex bg-gradient-to-r from-blue-600 to-indigo-700">
        {/* Animated Track */}
        <div className="flex gap-4 animate-infinite-scroll whitespace-nowrap">
          {infiniteServices.map((service, index) => (
            <div
              key={index}
              className="group relative flex items-center justify-center px-8 py-4 transition-all duration-300"
            >
              <h6 className="m-0">
                <a 
                  href="#" 
                  className="text-white font-medium text-sm md:text-base no-underline tracking-wide"
                >
                  {service}
                </a>
              </h6>
              
              {/* Optional: Glossy Overlay Effect */}
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollingServices;