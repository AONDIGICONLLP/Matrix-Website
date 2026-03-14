import Header from '../Components/Header'
import Breadcrumbs from '../Components/Breadcrumbs'
import Footer from '../Components/Footer'
import SocialSticky from '../Components/SocialIcon';
import AboutBg from "/assets/banner-bg.jpg";
import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa6';

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: string;
  url: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Cataract Surgery",
    description: "Cataract is the clouding of the natural lens of the eye, causing blurred vision, glare, and difficulty seeing clearly.",
    image: "assets/eyedept/cataract.jpg",
    icon: "assets/icons/services-icon-5.svg",
    url: "./cataract"
  },
  {
    id: 2,
    title: "Refractive Surgery",
    description: "Refractive surgery corrects vision problems such as myopia, hyperopia, and astigmatism by reshaping the cornea.",
    image: "assets/eyedept/refractive.jpg",
    icon: "assets/icons/services-icon-6.svg",
    url: "./refractive"
  },
  {
    id: 3,
    title: "Retina Care",
    description: "The retina is the light-sensitive layer at the back of the eye. Retinal diseases can silently reduce vision and may require urgent care.",
    image: "assets/eyedept/retina.jpg",
    icon: "assets/icons/services-icon-7.svg",
    url: "./retina"
  },
  {
    id: 4,
    title: "Paediatric Eye Care",
    description: " Our paediatric evaluation includes vision testing, refraction, and comprehensive assessment of eye alignment and development.",
    image: "assets/eyedept/peadiatric.jpg",
    icon: "assets/icons/services-icon-6.svg",
    url: "./paediaeyecare"
  },
  {
    id: 5,
    title: "Cornea Services",
    description: "Our specialists provide expert care for corneal diseases that cause blur, pain, redness, and light sensitivity.",
    image: "assets/eyedept/cornea.jpg",
    icon: "assets/icons/services-icon-7.svg",
    url: "./cornea"
  },
  {
    id: 6,
    title: "Glaucoma Care",
    description: "Glaucoma is a group of diseases that damage the optic nerve, often related to raised eye pressure. ",
    image: "assets/eyedept/glaucoma.jpg",
    icon: "assets/icons/services-icon-5.svg",
    url: "./glaucoma"
  }
];

const stats = [
  { label: "Years Experience", value: "12+", color: "text-blue-600" },
  { label: "Patients Treated", value: "25K+", color: "text-green-600" },
  { label: "Success Rate", value: "30K", color: "text-green-600" },
  { label: "Cardiology Services", value: "98%", color: "text-green-600" },
];

const Services: React.FC = () => {
  return (
    <> 
        <SocialSticky />
        <Header/>
      <Breadcrumbs 
      items={[
        { label: "Our Specialities", 
          bg: AboutBg
        }
      ]}
      />
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-5xl font-bold text-gray-900 leading-tight"
          >
            Advanced Vision <br />
            <span className="inline-flex items-center gap-3">
              <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                Care Solutions
              </span>
            </span>
          </motion.h2>
        </div>

        <div className="relative group">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                {/* Image Overlay Section */}
                <div className="relative h-64 overflow-hidden group/img">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-110" 
                  />
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <div className="bg-green-600 p-3 rounded-full shadow-lg">
                      <img src={service.icon} alt="icon" className="w-8 h-8" />
                    </div>
                    {/* <a href="#" className="w-12 h-12 bg-white text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                      <FaArrowRight />
                    </a> */}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl md:text-2xl font-medium text-[#006EB7] mb-2">
                    <a href={service.url} className="hover:text-green-600 transition-colors">{service.title}</a>
                  </h3>
                  <p className="text-gray-500 text-medium">{service.description}</p>
                   {/* <a href={service.url} className="text-[#006EB7] transition-colors">Learn More</a> */}
                </div>
                <div className="p-6">
                    <a href={service.url} className="flex text-[#006EB7] font-bold transition-colors">
                     Learn More <FaArrowRight className='mt-1 ml-2'  />
                    </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default Services;