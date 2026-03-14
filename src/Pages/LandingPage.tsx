import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, type Variants} from "motion/react"
import { FaHeart, FaStar, FaRegClock, FaCircle, FaCalendarCheck, FaLocationDot } from 'react-icons/fa6';
import Header from '../Components/Header';
import HeroSection from '../Components/HeroSection';
import QuickLinks from '../Components/QuickLinks';
import SpecialtiesSection from '../Components/SpecialtiesSection';
import Request from '../Components/Requestacall';
import Services from '../Components/Services';
import TestimonialsSection from '../Components/Testimonials';
import WorkSectionSection from '../Components/WorkSection';
import Footer from '../Components/Footer';
import Blogs from '../Components/Blogs';
import Whyus from '../Components/Whyus';


import SocialSticky from '../Components/SocialIcon';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Animation Variants
const fadeInUp : Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer : Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Doctors Section
const DoctorsSection: React.FC = () => {
  interface Department {
    id: number;
    name: string;
    image: string;
    rating: string;
    avgWaitTime: string;
    baseConsultation: string;
    themeColor: string;
    url: string;
    specialistsAvailable: number;
  }

  const departments: Department[] = [
    {
      id: 1,
      name: "Eye Care",
      image: "./assets/service/eyecare-01.png",
      rating: "4.9",
      avgWaitTime: "15 Min",
      baseConsultation: "₹500",
      themeColor: "text-emerald-600 bg-cyan-100/50",
      url: "./eyecare",
      specialistsAvailable: 6
    },
    {
      id: 2,
      name: "Women's Care",
      image: "./assets/service/maternity-care-01.png",
      rating: "4.8",
      avgWaitTime: "20 Min",
      baseConsultation: "₹800",
      themeColor: "text-emerald-600 bg-emerald-50",
      url: "./maternity",
      specialistsAvailable: 6
    },
    {
      id: 3,
      name: "Paediatric Care",
      image: "./assets/service/paediatric-care-01.png",
      rating: "5.0",
      avgWaitTime: "10 Min",
      baseConsultation: "₹600",
      themeColor: "text-emerald-600 bg-emerald-50",
      url: "./paediatric",
      specialistsAvailable: 5
    },
    {
      id: 4,
      name: "Cosmetic Gynae",
      image: "./assets/service/cosmeticgynae.png",
      rating: "4.7",
      avgWaitTime: "30 Min",
      baseConsultation: "₹1200",
      themeColor: "text-emerald-600 bg-emerald-50",
      url: "./cosmetic-gynae",
      specialistsAvailable: 2
    },
    {
      id: 5,
      name: "IVF",
      image: "./assets/service/ivf-care.png",
      rating: "4.6",
      avgWaitTime: "15 Min",
      baseConsultation: "₹1200",
      themeColor: "text-emerald-600 bg-emerald-50",
      url: "./ivf",
      specialistsAvailable: 2
    }
  ]; 

  const [first, setfirst] = useState([]);

  const fun1 = async () =>{
    const res = await fetch("");
  };
  
  useEffect(() => {
    fun1();
  }, [])
  

  return (
    <section className="py-18 bg-gray-100 -mt-18">
      <div className="max-w-7xl mx-auto pt-10 px-4 sm:px-6 lg:px-8">
        
        {/* Header - Matching your Specialties style */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-8"
        >
          <span className="inline-block text-white bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 rounded-full font-bold tracking-wider uppercase text-xs mb-4 shadow-lg shadow-blue-200">
            Our Departments
          </span>
          <h2 className="text-2xl md:text-5xl font-bold text-gray-900 leading-tight">
            Medical Support For <br/><span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Every Need</span>
          </h2>
        </motion.div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 4000 }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          className="pb-16"
        >
          {departments.map((dept) => (
            <SwiperSlide key={dept.id}>
              <div className="group bg-white rounded-[0.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500 overflow-hidden">
                
                {/* Visual Area */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={dept.image} 
                    alt={dept.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <p className="text-white text-xs font-medium">Top-rated facility with advanced medical tech.</p>
                  </div>
                  
                  {/* Rating Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="flex items-center gap-1 bg-white/90 backdrop-blur text-slate-900 px-3 py-1.5 rounded-full text-xs font-black shadow-sm">
                      <FaStar className="text-orange-400" /> {dept.rating}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6">
                  {/* Category & Status */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-2.5 py-2 rounded-xl text-[11px] font-black uppercase tracking-wider ${dept.themeColor}`}>
                      {dept.specialistsAvailable} Specialists Active
                    </span>
                    <span className="flex items-center gap-1.5 text-green-500 text-[10px] font-black uppercase tracking-widest">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                      Open Now
                    </span>
                  </div>

                  {/* Title - Large and Bold */}
                  <a href={dept.url}><h3 className="text-2xl md:text-2xl font-medium text-[#006EB7] mb-2 hover:text-green-600 transition-colors">
                    {dept.name}
                  </h3> </a>

                  <div className="flex items-center gap-4 text-slate-400 text-xs font-medium mb-6">
                    <div className="flex items-center gap-1.5">
                      <FaLocationDot className="text-blue-500" />
                      <span>In-Clinic</span>
                    </div>
                    <span className="text-slate-200">|</span>
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-slate-600">Avg Wait:</span> {dept.avgWaitTime}
                    </div>
                  </div>

                  {/* Price & Book Now */}
                  <div className="flex items-center justify-between pt-5 border-t border-slate-50">
                    {/* <div>
                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Starts From</p>
                      <p className="text-2xl font-black text-slate-900 leading-none">{dept.baseConsultation}</p>
                    </div> */}
                    <a  href="./book-appointment" className="flex items-center justify-center w-14 h-14 bg-blue-600 text-white rounded-2xl hover:bg-slate-900 hover:w-full transition-all duration-500 group/btn relative overflow-hidden shadow-lg shadow-blue-100">
                      <span className="absolute right-5 group-hover/btn:right-5 transition-all">
                        <FaCalendarCheck size={20} />
                      </span>
                      <span className="opacity-0 group-hover/btn:opacity-100 pr-6 font-bold text-sm whitespace-nowrap transition-all">
                        Book Appointment
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};


// Scroll Progress Bar
const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-linear-to-r from-blue-600 to-purple-600 origin-left z-50"
      style={{ scaleX }}
    />
  );
};

// Main LandingPage Component
const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      
      <SocialSticky />
      <ScrollProgress />
      <Header />
      <HeroSection />
      <QuickLinks />
      <DoctorsSection />
      <Services />
      {/* <Marquee/> */}
      <WorkSectionSection/>
      {/* <WhyChooseUs/> */}
      <Whyus />
      <TestimonialsSection />
      <Blogs/>
      <Footer />
    </div>
  );
};

export default LandingPage;