import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import { CalendarDays, MapPin, Circle, ChevronLeft, ChevronRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Doctor {
  id: number;
  name: string;
  specialty: string;
//   location: string;
  image: string;
  available: boolean;
}

const doctors: Doctor[] = [
  { id: 1, name: "Dr. Swati Mahobia", specialty: "M.B.B.S, MD Obst & Gynec. (KEM & WADIA Hospital Mumbai)", image: "assets/doctor/dr-two.png", available: true },
  { id: 2, name: "Dr. Hemali Tekani Ruprela", specialty: "MBBS, DGO, DNB, MNAMS, FMAS",  image: "assets/doctor/dr-seven.png", available: true },
  { id: 3, name: "Dr. Neha Nupur Gupta", specialty: "MBBS, MS, DNB, FMAS, CIMP", image: "assets/doctor/dr-eight.png", available: true },
  { id: 4, name: "Dr. Minakshi Mandhare", specialty: "MBBS, DGO",  image: "assets/doctor/dr-nine.png", available: true },
  { id: 5, name: "Dr. Richa Choubey", specialty: "MBBS, MD Obs & Gynae. DMAS", image: "assets/doctor/dr-ten.png", available: true },
  { id: 6, name: "Dr. Jyoti Mishra", specialty: "MBBS DDV (Cosmetologist)", image: "assets/doctor/dr-eleven.png", available: true },
];

const OurTeam: React.FC = () => {
  return (
    <section className="relative py-20 bg-gradient-to-r from-blue-100 to-green-100 overflow-hidden">
      {/* Background Elements */}
      <img src="assets/img/work-bg.webp" alt="bg" className="absolute top-0 right-0 opacity-40 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="text-left">
            <div className="inline-block text-white bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 rounded-full font-bold tracking-wider uppercase text-xs mb-4 shadow-lg shadow-blue-200">
              {/* <img src="/assets/img/icons/section-icon.svg" alt="icon" className="w-5 h-5" /> */}
              Our Team
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
              Top Specialists <br /> 
              <span className="text-blue-600">Dedicated to Your Care</span>
            </h2>
          </div>

          {/* Custom Navigation Buttons */}
          <div className="flex gap-3">
            <button className="swiper-prev-btn w-12 h-12 rounded-full border border-blue-200 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all">
              <ChevronLeft size={24} />
            </button>
            <button className="swiper-next-btn w-12 h-12 rounded-full border border-blue-200 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={{
            prevEl: '.swiper-prev-btn',
            nextEl: '.swiper-next-btn',
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="pb-12"
        >
          {doctors.map((doctor) => (
            <SwiperSlide key={doctor.id}>
              <div className="group bg-white rounded-2xl border border-gray-100 p-4 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                
                {/* Image Wrapper */}
                <div className="relative overflow-hidden rounded-xl mb-5">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name} 
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                  <div className="absolute top-3 right-3">
                    <span className="bg-white/90 backdrop-blur-sm text-green-600 text-[10px] font-bold px-3 py-1 rounded-full flex items-center shadow-sm">
                      <Circle className="w-2 h-2 fill-current mr-1.5" />
                      AVAILABLE
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {doctor.name}
                  </h3>
                  <p className="text-blue-900 font-medium text-sm mb-4">{doctor.specialty}</p>
                  
                  {/* <div className="flex items-center text-gray-500 text-sm mb-6">
                    <MapPin className="w-4 h-4 mr-1.5 text-gray-400" />
                    {doctor.location}
                  </div> */}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default OurTeam;