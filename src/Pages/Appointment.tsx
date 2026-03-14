import Header from '../Components/Header'
import Breadcrumbs from '../Components/Breadcrumbs'
import Footer from '../Components/Footer'
import SocialSticky from '../Components/SocialIcon';
import React, { useState, type ChangeEvent, type FormEvent } from 'react';
import { Calendar, Clock, User, Phone, CheckCircle, ShieldCheck, Star } from 'lucide-react';
import AboutBg from "/assets/banner-bg.jpg";

interface BookingFormData {
  fullName: string;
  phone: string;
  date: string;
  timeSlot: string; // Changed from time to timeSlot
  department: string;
  reason: string;
}

const initialState: BookingFormData = {
  fullName: '',
  phone: '',
  date: '',
  timeSlot: '09:00 AM - 10:00 AM',
  department: 'General Consultation',
  reason: '',
};

const AttractiveBookingPage: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormData>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    setFormData(initialState);
    setSubmitted(false);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // Time slot options
  const timeSlots = [
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "12:00 PM - 01:00 PM",
    "02:00 PM - 03:00 PM",
    "03:00 PM - 04:00 PM",
    "04:00 PM - 05:00 PM",
    "05:00 PM - 06:00 PM",
    "06:00 PM - 07:00 PM"
  ];

  return (
    <>
      <SocialSticky />
      <Header />
      <Breadcrumbs
        items={[
          {
            label: "Book an Appointment",
            bg: AboutBg
          }
        ]}
      />
      <div className="bg-[#f0f7ff] flex items-center justify-center p-4 md:p-8 font-sans">
        <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-white/50">

          {/* Left Sidebar */}
          <div className="lg:col-span-4 bg-gradient-to-r from-blue-100 to-green-100 p-8 text-slate-900 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-8">
                <div className="bg-blue/20 p-2 rounded-lg backdrop-blur-md">
                  <ShieldCheck className="text-slate" size={24} />
                </div>
                <span className="font-bold text-xl tracking-tight">SBH Group of Hospital</span>
              </div>

              <h1 className="text-4xl font-extrabold leading-tight mb-4">
                Premium Care <br />
                <span className="text-green-600 text-3xl">Just a Click Away.</span>
              </h1>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Join over 10,000+ patients who trust our specialists for their daily health needs.
              </p>

              <div className="space-y-4">
                {[
                  { icon: <Star size={16} />, text: "Top Rated Specialists" },
                  { icon: <Clock size={16} />, text: "Minimal Wait Times" },
                  { icon: <CheckCircle size={16} />, text: "Instant Confirmation" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-blue-200/60 p-3 rounded-xl backdrop-blur-sm border border-white/10">
                    <span className="text-blue-600">{item.icon}</span>
                    <span className="text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/20 text-sm text-gray-700 italic">
              "Your health is our priority, every single day."
            </div>
          </div>

          {/* Right Section: Form Content */}
          <div className="lg:col-span-8 p-8 md:p-12 relative bg-white">
            {!submitted ? (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Book Your Appointment</h2>
                <p className="text-gray-500 mb-8">Fill in the details below to schedule your consultation.</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                      <div className="group relative">
                        <User className="absolute left-3 top-3 text-gray-400 group-focus-within:text-blue-500 transition-colors" size={18} />
                        <input
                          required
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
                          placeholder="e.g. Alex Johnson"
                        />
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 ml-1">Phone Number</label>
                      <div className="group relative">
                        <Phone className="absolute left-3 top-3 text-gray-400 group-focus-within:text-blue-500 transition-colors" size={18} />
                        <input
                          required
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Specialty */}
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 ml-1">Specialty</label>
                      <select
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none cursor-pointer"
                      >
                        <option>General Consultation</option>
                        <option>Eye Care</option>
                        <option>Women Care</option>
                        <option>Pediatric Care</option>
                        <option>IVF Care</option>
                        <option>Cosmetic Gynae</option>
                      </select>
                    </div>

                    {/* Preferred Date */}
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 ml-1">Preferred Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3 text-gray-400" size={18} />
                        <input
                          required
                          type="date"
                          name="date"
                          min={new Date().toISOString().split('T')[0]}
                          value={formData.date}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Time Slot Selection */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Available Time Slot</label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-3 text-gray-400" size={18} />
                      <select
                        name="timeSlot"
                        value={formData.timeSlot}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none cursor-pointer"
                      >
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>{slot}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Reason for Consultation</label>
                    <textarea
                      name="reason"
                      rows={3}
                      value={formData.reason}
                      onChange={handleChange}
                      className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                      placeholder="Describe your symptoms briefly..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 mt-4"
                  >
                    Schedule Consultation
                  </button>
                </form>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center animate-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 ring-8 ring-green-50">
                  <CheckCircle size={40} strokeWidth={2.5} />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">You're all set!</h2>
                <p className="text-gray-500 max-w-xs mb-8">
                  We've received your request for <span className="font-semibold text-gray-700">{formData.date}</span> at <span className="font-semibold text-gray-700">{formData.timeSlot}</span>.
                </p>
                <button
                  onClick={handleReset}
                  className="flex items-center gap-2 px-8 py-3 bg-gray-800 text-white rounded-xl hover:bg-gray-900 transition-colors"
                >
                  Book Another Appointment
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AttractiveBookingPage;