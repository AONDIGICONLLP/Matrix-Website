import Header from '../Components/Header'
import Breadcrumbs from '../Components/Breadcrumbs'
import Footer from '../Components/Footer'
import SocialSticky from '../Components/SocialIcon';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { PiPhoneCallDuotone }  from 'react-icons/pi';
import { FaEye, FaBullseye,FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import {  MdFemale } from 'react-icons/md';
import AboutBg from "/assets/banner-bg.jpg";


// Import Swiper styles


const AboutUs = () => {
  const features = [
    {
      id: 1,
      icon: "./assets/about/choose-01.svg",
      title: "Qualified Staff of Doctors",
      description: "Our platform exclusively partners with highly qualified doctors who bring expertise & commitment to delivering top-notch healthcare."
    },
    {
      id: 2,
      icon: "./assets/about/choose-02.svg",
      title: "24 Hours Service",
      description: "Experience the healthcare access with our 24/7 service. Whether it's day or night, you can find & book appointments."
    },
    {
      id: 3,
      icon: "./assets/about/choose-03.svg",
      title: "Quality Lab Services",
      description: "Partnering with accredited labs, your health is our priority, and our quality lab services reflect our dedication to excellence."
    },
    {
      id: 4,
      icon: "./assets/about/choose-04.svg",
      title: "Free Consultations",
      description: "Your well-being is important, and our commitment to providing accessible care begins with a free initial consultation."
    }
  ];

  const whyChooseContent = [
    {
      id: 1,
      title: "Comprehensive Care",
      description: "Complete medical, surgical, women’s, fertility, and eye care services under one roof.",
      icon: "./assets/icons/icon1.png",
      accent: "bg-blue-500"
    },
    {
      id: 2,
      title: "Expert Specialist Teams",
      description: "Dedicated teams of specialists delivering evidence-based and ethical medical care.",
      icon: "./assets/icons/icon2.png",
      accent: "bg-emerald-500"
    },
    {
      id: 3,
      title: "Advanced Technology",
      description: "Equipped with advanced diagnostics, laser systems, and minimally invasive facilities.",
      icon: "./assets/icons/icon3.png",
      accent: "bg-purple-500"
    },
    {
      id: 4,
      title: "Indo-German IVF",
      description: "State’s First Indo-German IVF Program, offering world-class fertility solutions.",
      icon: "./assets/icons/icon4.png",
      accent: "bg-pink-500"
    },
    {
      id: 5,
      title: "Vision Correction",
      description: "Advanced Eye Care & Laser Vision Correction using the latest ophthalmic tech.",
      icon: "./assets/icons/icon5.png",
      accent: "bg-cyan-500"
    },
    {
      id: 6,
      title: "Elderly Care OPD",
      description: "Specialized OPD with a consultation fee of just ₹50 for patients aged 60+.",
      icon: "./assets/icons/icon6.png",
      accent: "bg-orange-500"
    },
    {
      id: 7,
      title: "Compassionate Care",
      description: "Clear communication and personalized treatment planning at every step.",
      icon: "./assets/icons/icon7.png",
      accent: "bg-indigo-500"
    }
  ];

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    location: "Raipur",
    image: "assets/doctor/dr-avtar.webp",
    text: "SBH Hospital exceeded my expectations. The expertise of the doctors and the care provided by the staff made my experience exceptional. I highly recommend them for reliable healthcare."
  },
  {
    id: 2,
    name: "Amanda Warren",
    location: "Bhilai",
    image: "assets/doctor/dr-avtar.webp",
    text: "The infrastructure is world-class. Being the first Indo-German IVF program in the state, their attention to detail and patient comfort is unmatched. Truly a blessing for Central India."
  },
  {
    id: 3,
    name: "Veronica",
    location: "Durg",
    image: "assets/doctor/dr-avtar.webp",
    text: "The Eye care department is phenomenal. I had my laser correction here and the process was seamless. Professional staff and very clear communication at every step."
  }
];
  
  return (
    <>
    <SocialSticky />
    <Header/>
      <Breadcrumbs 
      items={[
        { label: "About Us", 
          bg: AboutBg
        }
      ]}
      />
      {/* SECTION 1: ABOUT OUR COMPANY */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center -mx-4">
            
            {/* Left Column: Image Grid */}
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <div className="relative">
                <div className="flex flex-wrap -mx-2">
                  {/* Inner Column 1 */}
                  <div className="w-1/2 px-2">
                    <div className="space-y-4">
                      <div className="rounded-[0.5rem] overflow-hidden shadow-lg">
                        <img 
                          src="./assets/about/about-img1.png" 
                          className="w-full h-auto object-cover" 
                          alt="Medical professional at work" 
                        />
                      </div>
                      <div className="rounded-[0.5rem] overflow-hidden shadow-lg">
                        <img 
                          src="./assets/about/about-img2.png" 
                          className="w-full h-auto object-cover" 
                          alt="Medical equipment" 
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Inner Column 2 */}
                  <div className="w-1/2 px-2 mt-8 lg:mt-12">
                    <div className="space-y-4">
                      {/* Experience Box */}
                      <div className="bg-blue-600 p-10 rounded-[0.5rem] text-white text-center shadow-lg">
                        <h4 className="text-xl md:text-2xl font-bold">Over 21 Years Experience</h4>
                      </div>
                      <div className="rounded-[0.5rem] overflow-hidden shadow-lg">
                        <img 
                          src="./assets/about/about-img3.png" 
                          className="w-full h-auto object-cover" 
                          alt="Doctor consulting patient" 
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="w-full lg:w-1/2 px-4">
              <div className="max-w-xl">
                <div className="mb-8">
                  <h6 className="inline-block text-white bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 rounded-full font-bold tracking-wider uppercase text-xs mb-4 shadow-lg shadow-blue-200">
                    About Our Hospital
                  </h6>
                  <h2 className="text-4xl md:text-4xl font-bold text-gray-900 leading-tight">
                    We Always Ensure the Best Medical Treatment for Your Health
                  </h2>
                </div>
                
                <div className="text-slate-600 space-y-4 mb-8">
                  <p className="leading-relaxed text-justify">
                    SBH Hospital is a comprehensive healthcare institution offering advanced, reliable, and patient-centric medical care under one roof. 
                    Recognized as Central India’s most trusted Women’s and Eye Hospital, SBH is known for its excellence in clinical outcomes and compassionate patient care.
                  </p>
                  <p className="leading-relaxed text-justify">
                    Designed to meet diverse healthcare needs, we deliver multi-disciplinary treatment with a strong focus on quality, medical ethics, and patient safety. 
                    Our team of experienced doctors, well-trained nursing staff, and skilled technicians work collaboratively to ensure accurate diagnosis and effective treatment.
                  </p>
                  <p className="leading-relaxed text-justify">The hospital is equipped with modern operating theatres, advanced diagnostic laboratories, state-of-the-art medical equipment, and round-the-clock emergency care facilities. 
                    At SBH, we emphasize transparent communication, preventive care, and personalized treatment plans, ensuring every patient receives care they can trust, close to home.</p>
                </div>

                {/* Emergency Contact */}
                <div className="flex items-center p-4 bg-slate-50 rounded-xl border border-slate-100 w-fit">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white mr-4 shrink-0">
                    <PiPhoneCallDuotone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Need Emergency?</p>
                    <h4 className="text-xl font-bold text-slate-900">+91 74407 77771 </h4>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. MISSION VISION */}
      <div className="max-w-7xl mx-auto px-4 pb-12 font-sans text-slate-800">
        
        {/* 1. Mission & Vision - Side by Side */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="p-8 border-l-4 border-blue-600 bg-blue-50">
            <div className="flex items-center gap-3 mb-4 text-blue-600">
              {/* <FaBullseye size={24} /> */}
              <img 
              src="./assets/icons/mission.svg" 
              alt="mission" 
              className="w-10 h-10 object-cover"
            />
              <h2 className="text-2xl font-bold">Mission</h2>
            </div>
            <p className="text-xl italic text-slate-700">
              “To contribute towards health and well-being of all.”
            </p>
          </div>

          <div className="p-8 border-l-4 border-slate-800 bg-slate-100">
            <div className="flex items-center gap-3 mb-4 text-slate-800">
              {/* <FaEye size={24} /> */}
              <img 
              src="./assets/icons/vision.svg" 
              alt="mission" 
              className="w-auto h-10 object-cover"
            />
              <h2 className="text-2xl font-bold">Vision</h2>
            </div>
            <p className="text-lg text-slate-700">
              “To provide quality care to the Healthcare Ecosystem, while giving the maximum impact on preventive & curative care.”
            </p>
          </div>
        </div>

        {/* 2. Eye Hospital - 2036 Goals */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-20">
          <div className="w-full md:w-1/2">
            <img 
              src="./assets/about/sbh-eye.jpg" 
              alt="Eye Care Equipment" 
              className="rounded-lg shadow-md w-full h-auto object-cover"
            />
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex items-center gap-2 text-green-600 font-bold uppercase tracking-wider text-sm mb-2">
              <FaBullseye /> Strategic Goal 2036
            </div>
            <h3 className="text-3xl font-bold mb-4">SBH EYE HOSPITAL PVT. LTD.</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              By 2036, SBH will be one of the top 5 eye hospitals of Central India with a Global fame. 
              We will be seeing 7 lacs patients and performing 70,000 surgeries annually.
            </p>
            <div className="flex gap-8">
              <div>
                <p className="text-2xl font-bold text-blue-600">7 Lacs</p>
                <p className="text-sm text-slate-500">Yearly Patients</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-600">70,000</p>
                <p className="text-sm text-slate-500">Annual Surgeries</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Women Hospital - 2035 Goals */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-10">
          <div className="w-full md:w-1/2">
            <img 
              src="./assets/about/sbh-women.jpg" 
              alt="Women Care" 
              className="rounded-lg shadow-md w-full h-auto object-cover"
            />
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex items-center gap-2 text-rose-600 font-bold uppercase tracking-wider text-sm mb-2">
              <MdFemale size={20}/> Strategic Goal 2035
            </div>
            <h3 className="text-3xl font-bold mb-4">SBH WOMEN'S HOSPITAL PVT. LTD.</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              By 2035, we will be in the top 5 women's hospitals of Central India, respected for excellence in patient care and established as the most trusted women's care hospital.
            </p>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-rose-500 rounded-full"></div>
                Excellence in patient care
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-rose-500 rounded-full"></div>
                Most trusted women care brand
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* SECTION 3: WHY CHOOSE US */}
      <section className="py-8 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative">
          {/* Decorative Background Element */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl" />
          
          {/* Header Section */}
          <div className="relative mb-16 max-w-3xl">
            <span className="inline-block text-white bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 rounded-full font-bold tracking-wider uppercase text-xs mb-4 shadow-lg shadow-blue-200">
              The SBH Advantage
            </span>
            <h2 className="text-4xl md:text-4xl font-bold text-gray-900 leading-tight">
              Why Choose <span className="text-blue-600">SBH</span> Hospital?
            </h2>
            <p className="mt-4 text-slate-600 text-lg">
              Setting new benchmarks in healthcare through technology, ethics, and compassion.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 relative z-10">
            {whyChooseContent.map((item) => (
              <div key={item.id} className="group relative">
                {/* Card Body */}
                <div className="h-full bg-white rounded-[0.5rem] p-8 shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-blue-200/50 border border-slate-100 flex flex-col items-start overflow-hidden">
                  
                  {/* Left Side Accent Bar */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${item.accent} transform origin-bottom scale-y-0 transition-transform duration-500 group-hover:scale-y-100`} />

                  {/* Flipping Icon Container */}
                  <div className="mb-6 w-16 h-16 [perspective:1000px]">
                    <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                      {/* Front side of icon */}
                      <div className="absolute inset-0 flex items-center justify-center rounded-full bg-slate-50 border border-slate-100 [backface-visibility:hidden]">
                        <img src={item.icon} alt={item.title} className="w-10 h-10 opacity-80" />
                      </div>
                      {/* Back side of icon */}
                      <div className={`absolute inset-0 flex items-center justify-center rounded-full text-white [transform:rotateY(180deg)] [backface-visibility:hidden] ${item.accent}`}>
                        <img src={item.icon} alt={item.title} className="w-10 h-10 brightness-0 invert" />
                      </div>
                    </div>
                  </div>

                  {/* Text Content */}
                  <h4 className="text-xl font-medium text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="mt-3 text-slate-500 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Special High-Light Card for Elderly OPD */}
            <div className="lg:col-span-1 xl:col-span-1 flex h-full">
              <div className="w-full bg-gradient-to-br from-blue-600 to-blue-800 rounded-[0.5rem] p-8 text-white shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-150" />
                <h4 className="text-2xl font-bold mb-4">Elderly Priority</h4>
                <p className="text-blue-100 mb-6">We honor our seniors with dedicated care and subsidized fees.</p>
                <div className="bg-white/20 backdrop-blur-md rounded-lg p-4 inline-block">
                  <span className="block text-xs uppercase opacity-80">Consultation Fee</span>
                  <span className="text-3xl font-black">₹50</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TESTIMONIALS */}

    <section className="py-16 relative overflow-hidden bg-slate-100 overflow-hidden bg-[url(./assets/img/doctor-shape-img1.png)] bg-no-repeat">
        {/* Background Shapes */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-20 pointer-events-none">
          <img src="assets/img/shape-04.png" alt="shape" />
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-20 pointer-events-none">
          <img src="assets/img/shape-05.png" alt="shape" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="mx-auto relative">
            
            {/* Custom Navigation Arrows */}
            <div className="hidden md:block">
              <button className="swiper-prev-btn absolute left-[-80px] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-all shadow-lg z-20">
                <FaChevronLeft size={12} />
              </button>
              <button className="swiper-next-btn absolute right-[-80px] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-all shadow-lg z-20">
                <FaChevronRight size={12} />
              </button>
            </div>

            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                nextEl: '.swiper-next-btn',
                prevEl: '.swiper-prev-btn',
              }}
              autoplay={{ delay: 5000 }}
              loop={true}
              className="align-middle"
            >
              {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="relative overflow-hidden align-middle">
                  
                  {/* Background Quote Icon */}
                  {/* <FaQuoteLeft className="absolute top-[-1.2rem] text-blue-100 text-7xl md:text-8xl -z-0 opacity-80" /> */}
                  <div className="flex flex-col md:flex-row items-center gap-10">
                      <div className="w-24 h-24 md:w-42 md:h-42 rounded-full p-1 ">
                        <img 
                          src={item.image} 
                          className="w-full h-full object-cover rounded-full" 
                          alt={item.name} 
                        />
                      </div>
                      <div className="w-full md:w-1/2">
                            <h6 className="inline-block text-white bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 rounded-full font-bold tracking-wider uppercase text-xs mb-4 shadow-lg shadow-blue-200">
                              Director's Message</h6>

                          <p className="text-md text-slate-700 italic leading-relaxed">
                            "{item.text}"
                          </p>
                          <div className="border-t border-slate-100 pt-6 w-full max-w-xs">
                            <h6 className="text-lg font-bold text-slate-900">{item.name}</h6>
                            <p className="text-blue-600 text-sm font-semibold uppercase tracking-wider">{item.location}</p>
                          </div>
                      </div>
                    </div>
                </div>
              </SwiperSlide>
            ))}
            </Swiper>
          </div>
        </div>
      </section>
      {/* CSS Override for Swiper Pagination Colors */}
      <style>{`
        .swiper-pagination-bullet-active {
          background: #2563eb !important;
        }
        .testimonial-swiper {
          padding-bottom: 40px;
        }
      `}</style>
      <Footer/>
    </>
  )
}

export default AboutUs