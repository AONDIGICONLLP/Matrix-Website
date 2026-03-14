import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa6';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

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
    title: "High-Risk Pregnancy",
    description: "A high-risk pregnancy involves potential, increased health threats to the mother and frequent prenatal care from obstetric specialists.",
    image: "assets/service/hrp.jpg",
    icon: "assets/icons/services-icon-3.png",
    url: "./maternity"
  },
  {
    id: 5,
    title: "Fertility Care",
    description: "Fertility Care at SBH Hospital focuses on identifying and treating the causes of infertility in both women and men.",
    image: "assets/service/firtility.jpg",
    icon: "assets/icons/services-icon-1.png",
    url: "./ivf"
  },
  {
    id: 6,
    title: "Indo-German IVF",
    description: "In Vitro Fertilization (IVF) is a fertility treatment in which eggs and sperm are fertilized outside the body in a laboratory.",
    image: "assets/service/ivf.jpg",
    icon: "assets/icons/services-icon-2.png",
    url: "./ivf"
  },
  {
    id: 7,
    title: "Pregnancy & Delivery",
    description: "Comprehensive care is provided throughout the post-delivery. Regular monitoring ensures the well-being of both mother and baby.",
    image: "assets/service/pragnancy.jpg",
    icon: "assets/icons/services-icon-4.png",
    url: "./maternity"
  },
  {
    id: 8,
    title: "Rhinoplasty Surgery",
    description: "Rhinoplasty reshapes the nose to improve correct breathing issues. The procedure is planned to maintain facial balance and function.",
    image: "assets/service/rhinoplasty.jpg",
    icon: "assets/icons/services-icon-8.png",
    url: "./cosmetic-gynae"
  },
  {
    id: 9,
    title: "Liposuction Surgery",
    description: "Liposuction removes excess fat deposits from specific body areas, it is used for body contouring.",
    image: "assets/service/liposuction.jpg",
    icon: "assets/icons/services-icon-9.png",
    url: "./cosmetic-gynae"
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
            Highlighting the <br />
            <span className="inline-flex items-center gap-3">
              <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                Care & Support
              </span>
            </span>
          </motion.h2>
        </div>

        {/* Services Grid/Slider Container */}
        <div className="relative group">
            <Swiper
                modules={[Pagination, Autoplay, Navigation]}
                navigation={{
                prevEl: '.service-prev',
                nextEl: '.service-next',
                }}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true, dynamicBullets: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                }}
                className="pb-16"
            >
            {services.map((service, index) => (
              <SwiperSlide key={index} className="h-full">
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
              </SwiperSlide>
            ))}
            </Swiper>
          {/* Slider Controls (Optional Visuals) */}
          <div className="flex justify-center gap-4 mt-10">
            <button className="service-prev p-4 rounded-full border border-gray-200 hover:bg-blue-600 hover:text-white transition-all">
              <FaArrowLeft />
            </button>
            <button className="service-next p-4 rounded-full border border-gray-200 hover:bg-blue-600 hover:text-white transition-all shadow-lg">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;