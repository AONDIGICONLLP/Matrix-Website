import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade, Navigation } from 'swiper/modules';
import Counter from '../Components/Counter';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const TestimonialsSection: React.FC = () => {
const testimonials = [
    { 
      name: 'Deepak Sonekar', 
      location: 'Raipur, India', 
      text: 'Special thanks to Dr. Phebe Masih. The campus is well-maintained and clean. The staff treated us like family members; they didn’t let us feel like we were in a hospital, but at home.', 
      role: 'Patient Relative' 
    },
    { 
      name: 'Mrs. Nisha Pruthi', 
      location: 'Chhattisgarh', 
      text: 'Dr. Swati Mahobia is a very humble doctor. She explains each and every thing properly and makes the patient feel very comfortable during the consultation.', 
      role: 'Patient' 
    },
    { 
      name: 'Jaya Chauhan', 
      location: 'Raipur, India', 
      text: 'The service from the attending doctors and staff is very helpful and caring. Special thanks to Dr. Swati Mahobia for her expertise and kindness during my treatment.', 
      role: 'Patient' 
    },
    { 
      name: 'Sujeet Kumar Thawait', 
      location: 'Raipur, India', 
      text: 'Best eye hospital in Raipur. Dr. Ashish Mahobia and his entire dedicated team are committed to providing world-class treatment to all their patients.', 
      role: 'Patient' 
    },
    { 
      name: 'Vibha', 
      location: 'Raipur, India', 
      text: 'Excellent treatment and a very clean, hygienic environment. All the facilities are top-notch and the nursing team is very attentive.', 
      role: 'Patient' 
    },
    { 
      name: 'Yogendra', 
      location: 'Raipur, India', 
      text: 'Treating patients as family. Good behavior, hospitality, and kindness. Thanks to Dr. Swati for your blessings and successful treatment.', 
      role: 'Patient' 
    },
    { 
      name: 'Vijaylaxmi', 
      location: 'Raipur, India', 
      text: 'Best nursing home in Raipur with superb facilities and renowned specialist doctors. The behavior of the entire staff is awesome.', 
      role: 'Patient' 
    },
    { 
      name: 'Chhatrapati Taram', 
      location: 'Raipur, India', 
      text: 'All the facilities are very good, and every staff member is very co-operative. Thanks a lot to the entire team of Sai Baba Nursing Home.', 
      role: 'Patient Relative' 
    },
    { 
      name: 'Vikas Kumar', 
      location: 'Raipur, India', 
      text: 'One of the best hospitals I have visited. Everything from the doctors to the nursing staff and cleanliness is excellent.', 
      role: 'Patient' 
    },
    { 
      name: 'Khemraj Sinha', 
      location: 'Raipur, India', 
      text: 'Very good in service. The hospital staff behavior is very professional and the medical care provided is highly reliable.', 
      role: 'Patient' 
    },
    { 
      name: 'Sony Sharma', 
      location: 'Raipur, India', 
      text: 'Excellent eye hospital. The treatment was successful and the hygiene standards maintained here are very high compared to others.', 
      role: 'Patient' 
    },
    { 
      name: 'Archana Tiwari', 
      location: 'Raipur, India', 
      text: 'Very helpful staff. They assisted us through every step of the billing and admission process without any hassle.', 
      role: 'Patient Relative' 
    },
    { 
      name: 'Rajesh Panwar', 
      location: 'Chhattisgarh', 
      text: 'Very good facility and treatment with advanced technology. We saw great results for my father’s eye surgery here.', 
      role: 'Patient Relative' 
    },
    { 
      name: 'Khogopati', 
      location: 'Raipur, India', 
      text: 'It is a very good hospital for women’s healthcare. The doctors are highly experienced and the environment is safe.', 
      role: 'Patient' 
    },
    { 
      name: 'Dushyant Thakur', 
      location: 'Raipur, India', 
      text: 'Overall a very good experience. The hospital is well-equipped and the response from the doctors is very prompt.', 
      role: 'Patient' 
    }
];

  return (
    <section className="py-18 bg-[url(./assets/testimonial-bg.jpg)] bg-cover bg-no-repeat overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block text-white bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 rounded-full font-bold tracking-wider uppercase text-xs mb-4 shadow-lg shadow-blue-200"
          >
            Testimonials
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-5xl font-bold text-gray-900 leading-tight"
          >
            15k Users <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Trust SBH</span>
          </motion.h2>
        </div>

        {/* Slider Section */}
        <div className="relative pb-12">
            {/* Custom Navigation */}
            <div className="absolute -top-20 right-0 md:flex gap-3 z-10 md:visible hidden">
                <button className="testimonial-prev w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-md hover:bg-blue-600 hover:text-white transition-all">
                <FaArrowLeft />
                </button>
                <button className="testimonial-next w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-md hover:bg-blue-600 hover:text-white transition-all">
                <FaArrowRight />
                </button>
            </div>
            
          <Swiper
                modules={[Pagination, Autoplay, Navigation]}
                navigation={{
                prevEl: '.testimonial-prev',
                nextEl: '.testimonial-next',
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
            {testimonials.map((item, index) => (
              <SwiperSlide key={index} className="h-full">
                <div className="bg-white border border-gray-100 p-8 rounded-[0.5rem] shadow-xl shadow-blue-900/5 flex flex-col h-full hover:border-blue-200 transition-colors duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 text-sm" />
                      ))}
                    </div>
                    <FaQuoteLeft className="text-blue-100 text-3xl" />
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed italic mb-8 grow">
                    "{item.text}"
                  </p>

                  <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-50">
                    <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-blue-400 to-indigo-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-200">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg leading-tight">{item.name}</h4>
                      <p className="text-sm text-blue-600 font-medium">{item.location}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <Counter />
      </div>
    </section>
  );
};

export default TestimonialsSection;