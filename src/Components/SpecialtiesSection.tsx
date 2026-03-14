import { type Variants,motion } from 'framer-motion';
import { Swiper, SwiperSlide } from "swiper/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface Speciality {
  id: string;
  name: string;
  doctorCount: number;
  image: string;
  icon: string;
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const specialities: Speciality[] = [
  { id: '01', name: 'Ophthalmic Care', doctorCount: 5, image: 'eyecare.png', icon: 'speciality-icon-01.png' },
  { id: '02', name: 'Maternity Care', doctorCount: 6, image: 'maternitycare.jpg', icon: 'speciality-icon-02.png' },
  { id: '03', name: 'Paediatric Care', doctorCount: 4, image: 'pediatriccare.jpg', icon: 'speciality-icon-03.png' },
  { id: '04', name: 'Diagnostic Service', doctorCount: 2, image: 'diagnosticservice.jpg', icon: 'speciality-icon-04.png' },
  { id: '05', name: 'Critical Care', doctorCount: 3, image: 'criticalcare.jpg', icon: 'speciality-icon-05.png' },
  { id: '06', name: 'Surgical Excellence', doctorCount: 5, image: 'surgicalexcellence.jpg', icon: 'speciality-icon-06.png' },
  { id: '07', name: 'General Medicine', doctorCount: 1, image: 'generalmedicine.jpg', icon: 'speciality-icon-07.png' },
];
const SpecialtiesSection = () => {
  return (
    <div className="speciality-slider-info py-10 px-4">
      <div className="relative max-w-7xl mx-auto">

        {/* Fixed & Centered Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-8"
        >
          <span className="inline-block text-white bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 rounded-full font-bold tracking-wider uppercase text-xs mb-4 shadow-lg shadow-blue-200">
            Top Specialties
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight font-hanken">
            Highlighting the  <span className="text-blue-600">Care & Support</span>
          </h2>
        </motion.div>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          navigation={{
            nextEl: '.spciality-next',
            prevEl: '.spciality-prev',
          }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
            1200: { slidesPerView: 6 },
          }}
        >
          {specialities.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="spaciality-item group text-center"
              >
                {/* Image Container acting as background */}
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <div className="spaciality-img overflow-hidden rounded-lg h-40 w-full">
                    <img 
                      src={`./assets/service/${item.image}`} 
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  
                  {/* Icon Overlay */}
                  <span className="spaciality-icon absolute bottom-[-12px] left-1/2 -translate-x-1/2 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md border-4 border-white">
                    <img 
                      src={`assets/icons/${item.icon}`} 
                      alt="icon" 
                      className="w-8 h-8"
                    />
                  </span>
                </div>

                {/* Content */}
                <div className="mt-6">
                  <h3 className="custom-title text-lg font-semibold text-slate-800 hover:text-blue-600 transition-colors">
                    <a href="#">{item.name}</a>
                  </h3>
                  <p className="mb-0 text-sm text-gray-500">{item.doctorCount} Doctors</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="slide-btn flex justify-center gap-3 mt-8">
          <button type="button" className="spciality-prev w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all text-gray-600">
            <i className="isax isax-arrow-left"></i><FaChevronLeft size={12} />
          </button>
          <button type="button" className="spciality-next w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all text-gray-600">
            <i className="isax isax-arrow-right-1"></i><FaChevronRight size={12} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpecialtiesSection;