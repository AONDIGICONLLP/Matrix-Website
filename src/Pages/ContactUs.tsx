import Header from '../Components/Header'
import Breadcrumbs from '../Components/Breadcrumbs'
import Footer from '../Components/Footer'
import SocialSticky from '../Components/SocialIcon';
import React, { useState } from 'react'; // Added useState
import { MapPin, Phone, Mail, ArrowRight, X } from 'lucide-react'; // Added X
import AboutBg from "/assets/contact-bg.png";

const ContactUs: React.FC = () => {
  // State for Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '' });

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Captured Data:", formData);
    alert(`Thank you ${formData.name}! We will call you back at ${formData.phone}.`);
    setIsModalOpen(false); // Close modal after submit
  };

  return (
    <>
      <SocialSticky />
      <Header />
      <Breadcrumbs items={[{ label: "Contact Us", bg: AboutBg }]} />

      {/* Main Contact Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">

            {/* Left Side: Contact Information */}
            <div className="lg:w-5/12 space-y-8">
              <div className="mb-8">
                <h6 className="inline-block text-white bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 rounded-full font-bold tracking-wider uppercase text-xs mb-4 shadow-lg shadow-blue-200">
                  Get in touch
                </h6>
                <h2 className="text-4xl md:text-4xl font-bold text-gray-900 leading-tight">
                  Have Any Question?
                </h2>
              </div>

              <div className="space-y-6">
                {/* Address Card */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                  <div className="bg-blue-50 p-3 rounded-xl text-blue-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">Address</h4>
                    <p className="text-slate-500">Opposite Vijeta complex, New Rajendra Nagar, Raipur (CG), 492001</p>
                  </div>
                </div>

                {/* Address Card */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                  <div className="bg-blue-50 p-3 rounded-xl text-blue-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">Other Branches</h4>
                    <p className="text-slate-500">Near Fafadih Choti Line, Raipur, (C.G.), 492009<br/>A-32, Nandini Road, Near Uttam Talkies, Bhilai, (C.G.), 490011</p>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                  <div className="bg-blue-50 p-3 rounded-xl text-blue-600">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">Phone Number</h4>
                    <p className="text-slate-500">7440777771</p>
                  </div>
                </div>

                {/* Email Card */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                  <div className="bg-blue-50 p-3 rounded-xl text-blue-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">Email Address</h4>
                    <p className="text-slate-500">eye@sbhhospital.com, women@sbhhospital.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Contact Form */}
            <div className="lg:w-7/12 flex">
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100 w-full">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none bg-slate-50"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none bg-slate-50"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Phone Number</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none bg-slate-50"
                        placeholder="Enter phone number"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Services</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none bg-slate-50"
                        placeholder="Interested service"
                      />
                    </div>

                    <div className="md:col-span-2 space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Message</label>
                      <textarea
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none bg-slate-50"
                        placeholder="Write your message here..."
                      ></textarea>
                    </div>

                    <div className="md:col-span-2 pt-2">
                      <button
                        type="submit"
                        className="w-full md:w-max px-10 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold hover:from-blue-700 hover:to-blue-900 transition-all shadow-lg shadow-blue-200"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* --- Request A Call Section --- */}
      <section className="relative overflow-hidden bg-[#006EB7] py-16">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-white/20 shadow-2xl">
            
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Request a call
              </h2>
              <p className="text-blue-100 text-lg max-w-xl">
                Get to know the skilled professionals who bring experience, dedication, and compassionate care.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-8">
              <div className="flex items-center gap-4 group">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-blue-600 shadow-xl transition-transform duration-300 group-hover:scale-110">
                  <Phone size={24} fill="currentColor" />
                </div>
                <div className="flex flex-col">
                  <span className="text-blue-100 text-sm font-medium uppercase tracking-wider">Call us anytime</span>
                  <a href="tel:7440777771" className="text-2xl md:text-3xl font-black text-white hover:text-blue-200 transition-colors">7440777771</a>
                </div>
              </div>

              {/* Updated Button to open Modal */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="group relative flex items-center overflow-hidden rounded-full bg-white px-8 py-4 font-bold text-blue-700 transition-all hover:pr-14 hover:shadow-2xl active:scale-95"
              >
                <span className="relative z-10">Request a callback</span>
                <span className="absolute right-4 translate-x-10 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                  <ArrowRight size={20} />
                </span>
                <span className="ml-2 group-hover:opacity-0 transition-opacity">
                  <ArrowRight size={20} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- POPUP MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
            onClick={() => setIsModalOpen(false)}
          />
          
          {/* Modal Content */}
          <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 animate-in zoom-in duration-300">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X size={24} />
            </button>

            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-slate-900">Book Your Test</h3>
              <p className="text-slate-500 mt-2">Enter your details and our team will call you back shortly.</p>
            </div>

            <form onSubmit={handleBookingSubmit} className="space-y-5">
              <div className="space-y-1">
                <label className="text-sm font-semibold text-slate-700">Full Name</label>
                <input 
                  required
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none bg-slate-50"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-semibold text-slate-700">Phone Number</label>
                <input 
                  required
                  type="tel" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none bg-slate-50"
                  placeholder="Enter 10 digit number"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
              >
                Request Call Back
              </button>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default ContactUs;