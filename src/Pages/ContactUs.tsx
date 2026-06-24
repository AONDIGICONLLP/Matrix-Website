import React, { useState } from 'react';
import Header from '../Components/MainHeader';
import Footer from '../Components/Footer';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  MessageSquare, 
  Sparkles, 
  ChevronRight,
  ShieldCheck,
  Building2,
  BookmarkCheck,
  FileSpreadsheet,
  Wrench,
  ShoppingBag
} from 'lucide-react';

export const ContactUsPage: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Enquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <>
    <Header/>
    <div className="w-full bg-slate-50 text-slate-800 font-sans antialiased selection:bg-[#15558d] selection:text-white overflow-hidden">
      
      {/* 1. INTEGRATED BREADCRUMB BAR */}
      <div className="breadcrumb-bar relative text-slate-900 py-16 overflow-hidden">
        <div className="container mx-auto px-4 max-w-[1150px]">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center relative z-10">
              <nav aria-label="breadcrumb" className="page-breadcrumb flex flex-col items-center">
                <ol className="breadcrumb flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-wider mb-3 text-blue-500">
                  <li className="breadcrumb-item">
                    <a href="index.html" aria-label="home" className="hover:text-emerald-400 transition-colors">
                      <i className="isax isax-home-15 text-sm"></i> Home
                    </a>
                  </li>
                  <li className="text-blue-300/40 select-none">/</li>
                  <li className="breadcrumb-item active text-slate-500" aria-current="page">Contact Us</li>
                </ol>
                <h2 className="breadcrumb-title text-2xl md:text-4xl font-black">
                  Get in Touch
                </h2>
              </nav>
            </div>
          </div>
        </div>
        
        {/* Decorative Background Assets */}
        <div className="breadcrumb-bg pointer-events-none select-none">
          <img src="assets/img/breadcrumb-bg-01.png" alt="img" className="breadcrumb-bg-01 absolute top-0 left-0  h-50" />
          <img src="assets/img/breadcrumb-bg-02.png" alt="img" className="breadcrumb-bg-02 absolute bottom-0 right-0 h-50" />
          <img src="assets/img/breadcrumb-icon.png" alt="img" className="breadcrumb-bg-03 absolute top-6 right-1/4 w-8 animate-pulse" />
          <img src="assets/img/breadcrumb-icon.png" alt="img" className="breadcrumb-bg-04 absolute bottom-6 left-1/4 w-6 animate-bounce duration-[8000ms]" />
        </div>
      </div>

      {/* 2. SPECIFIC DEPARTMENTAL CHANNELS DIRECTORY */}
      <section className="pt-16 pb-6 container mx-auto px-4 max-w-[1150px]">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-black uppercase tracking-widest text-[#15558d] bg-blue-50 px-2.5 py-1 rounded-md">
            Direct Routing
          </span>
          <h3 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tight mt-2">
            Dealership, Order & Service Desk
          </h3>
          <p className="text-slate-500 text-xs md:text-sm font-medium mt-1">
            Reach out directly to our dedicated operational cells for optimized turnaround times.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* CHANNEL 1: DEALERSHIP */}
          <div className="bg-white rounded-2xl border border-slate-200/70 p-6 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 inset-x-0 h-1 bg-blue-500" />
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <FileSpreadsheet className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight">Dealership & Others</h4>
                <p className="text-[11px] text-slate-400 font-bold uppercase">Business Relations</p>
              </div>
            </div>
            <div className="space-y-2 border-t border-slate-100 pt-3 text-xs">
              <div className="flex items-start gap-2">
                <span className="font-bold text-slate-400 min-w-[55px]">Phone:</span>
                <div className="font-bold text-slate-800 space-y-0.5">
                  <p className="hover:text-[#15558d]"><a href="tel:9575502233">9575502233</a></p>
                  <p className="hover:text-[#15558d]"><a href="tel:9522202855">9522202855</a></p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-400 min-w-[55px]">Email:</span>
                <a href="mailto:info@matrixlpl.com" className="font-bold text-[#15558d] hover:underline">info@matrixlpl.com</a>
              </div>
            </div>
          </div>

          {/* CHANNEL 2: SERVICE */}
          <div className="bg-white rounded-2xl border border-slate-200/70 p-6 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 inset-x-0 h-1 bg-amber-500" />
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <Wrench className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight">Technical Service</h4>
                <p className="text-[11px] text-amber-500 font-bold uppercase">Diagnostics & Repair</p>
              </div>
            </div>
            <div className="space-y-2 border-t border-slate-100 pt-3 text-xs">
              <div className="flex items-start gap-2">
                <span className="font-bold text-slate-400 min-w-[55px]">Phone:</span>
                <a href="tel:9522202859" className="font-bold text-slate-800 hover:text-[#15558d]">9522202859</a>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-400 min-w-[55px]">Email:</span>
                <a href="mailto:service@matrixlpl.com" className="font-bold text-[#15558d] hover:underline">service@matrixlpl.com</a>
              </div>
            </div>
          </div>

          {/* CHANNEL 3: ORDER */}
          <div className="bg-white rounded-2xl border border-slate-200/70 p-6 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 inset-x-0 h-1 bg-emerald-500" />
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight">Order Desk</h4>
                <p className="text-[11px] text-emerald-500 font-bold uppercase">Logistics & Supply</p>
              </div>
            </div>
            <div className="space-y-2 border-t border-slate-100 pt-3 text-xs">
              <div className="flex items-start gap-2">
                <span className="font-bold text-slate-400 min-w-[55px]">Phone:</span>
                <a href="tel:9522202835" className="font-bold text-slate-800 hover:text-[#15558d]">9522202835</a>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-400 min-w-[55px]">Email:</span>
                <a href="mailto:orders@matrixlpl.com" className="font-bold text-[#15558d] hover:underline">orders@matrixlpl.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE INFORMATION AND FORM WRAPPER */}
      <section className="pb-20 md:pb-24 pt-6 container mx-auto px-4 max-w-[1150px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: CORPORATE INFRASTRUCTURE ADDRESS CARDS */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-8">
            <div className="space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-[#15558d] bg-blue-50 px-2.5 py-1 rounded-md">
                Headquarters
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight">
                Our Registered Office
              </h2>
              <div className="w-12 h-1 bg-gradient-to-r from-[#15558d] to-emerald-400 rounded-full mt-2" />
            </div>

            {/* CARD: LOCATION */}
            <div className="bg-white rounded-2xl border border-slate-200/60 p-6 shadow-md hover:shadow-xl hover:border-blue-300/40 transition-all duration-300 group flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#15558d] flex items-center justify-center shrink-0 group-hover:bg-[#15558d] group-hover:text-white transition-all duration-300 shadow-sm">
                <MapPin className="w-5 h-5 stroke-[2]" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">Our Address</h4>
                <p className="text-slate-800 text-sm font-bold leading-relaxed">
                  Matrix Heights, Plot No. C-149/1<br />
                  Tagore Nagar, Near Pachpedi Naka,<br />
                  Raipur, 492001, Chhattisgarh, India
                </p>
              </div>
            </div>

            {/* CARD: LANDLINE / RECEPTION */}
            <div className="bg-white rounded-2xl border border-slate-200/60 p-6 shadow-md hover:shadow-xl hover:border-emerald-300/40 transition-all duration-300 group flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm">
                <Phone className="w-5 h-5 stroke-[2]" />
              </div>
              <div className="space-y-1 w-full">
                <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">Reception Support</h4>
                <div className="text-slate-800 text-sm font-bold space-y-0.5">
                  <p className="hover:text-[#15558d] transition-colors"><a href="tel:+917714920492">+91 7714920492</a></p>
                  <p className="hover:text-[#15558d] transition-colors"><a href="tel:+917714920592">+91 7714920592</a></p>
                </div>
                <div className="pt-2 flex items-center gap-2 text-[11px] font-bold text-slate-500 border-t border-slate-100 mt-2">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>Mon – Sat | 10:00 AM to 7:30 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: ENTERPRISE CONTACT FORM */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/60 p-8 md:p-10 shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#15558d] via-blue-500 to-emerald-400" />
            
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tight flex items-center gap-2">
                Send A Message
              </h3>
              <p className="text-xs md:text-sm text-slate-500 font-medium mt-1">
                Drop us a line & get a swift reply from our specialized coordination team!
              </p>
            </div>

            {formSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-950 p-6 rounded-2xl text-center space-y-3 my-12">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-sm">
                  <BookmarkCheck className="w-6 h-6 stroke-[2]" />
                </div>
                <h4 className="text-base font-black uppercase tracking-tight">Transmission Successful</h4>
                <p className="text-xs font-semibold text-emerald-800/90 max-w-md mx-auto leading-relaxed">
                  Your enterprise communication ticket has been parsed successfully into our management routing pipeline. A representative will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-black uppercase tracking-wider text-slate-400 block">Full Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g., Dr. Amit Kumar"
                      className="w-full text-sm bg-slate-50 border border-slate-200/80 rounded-xl px-4 py-3.5 font-medium outline-none focus:bg-white focus:border-[#15558d] focus:ring-4 focus:ring-blue-100 transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-black uppercase tracking-wider text-slate-400 block">Email Address</label>
                    <input 
                      type="email" 
                      required
                      placeholder="name@institution.com"
                      className="w-full text-sm bg-slate-50 border border-slate-200/80 rounded-xl px-4 py-3.5 font-medium outline-none focus:bg-white focus:border-[#15558d] focus:ring-4 focus:ring-blue-100 transition-all"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-black uppercase tracking-wider text-slate-400 block">Contact Number</label>
                    <input 
                      type="tel" 
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full text-sm bg-slate-50 border border-slate-200/80 rounded-xl px-4 py-3.5 font-medium outline-none focus:bg-white focus:border-[#15558d] focus:ring-4 focus:ring-blue-100 transition-all"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-black uppercase tracking-wider text-slate-400 block">Enquiry Type / Subject</label>
                    <select 
                      className="w-full text-sm bg-slate-50 border border-slate-200/80 rounded-xl px-4 py-3.5 font-bold text-slate-700 outline-none focus:bg-white focus:border-[#15558d] focus:ring-4 focus:ring-blue-100 transition-all appearance-none"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    >
                      <option value="General Enquiry">General Corporate Enquiry</option>
                      <option value="Dealership">Dealership / Procurement</option>
                      <option value="Technical Support">Technical Diagnostics Support</option>
                      <option value="Order Operations">Order & Logistics Operations</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-black uppercase tracking-wider text-slate-400 block">Message Body</label>
                  <textarea 
                    rows={4}
                    required
                    placeholder="Describe your corporate integration needs or equipment service requirements..."
                    className="w-full text-sm bg-slate-50 border border-slate-200/80 rounded-xl px-4 py-3.5 font-medium outline-none focus:bg-white focus:border-[#15558d] focus:ring-4 focus:ring-blue-100 transition-all resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <div className="pt-2">
                  <button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#15558d] to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold text-xs uppercase tracking-wider py-4 rounded-xl shadow-lg shadow-blue-900/10 transition-all duration-300 transform active:scale-[0.99] inline-flex items-center justify-center gap-2"
                  >
                    <span>Transmit Message Ticket</span>
                    <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>
      </section>

      {/* 4. GEOLOCATION CONTAINER WRAPPER */}
      <section className="bg-slate-100 border-t border-slate-200/60 relative w-full aspect-[21/5] min-h-[350px] overflow-hidden group">
        <iframe 
          title="Matrix Heights Corporate Headquarters Location Map"
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d119023.61317936289!2d81.6784184!3d21.212492400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3a28dd787783e8bf%3A0xe5118fa677709104!2sMatrix%20Lifesciences%20Private%20Limited%2C%20Plot%20No.C-149%2F1%2C%20Matrix%20Heights%2C%20Tagore%20Nagar%20Main%20Rd%2C%20near%20Pachpedi%20Naka%2C%20Raipur%2C%20Chhattisgarh%20492001!3m2!1d21.2219832!2d81.6507561!5e0!3m2!1sen!2sin!4v1781856199084!5m2!1sen!2sin" 
          className="w-full h-full border-0 filter contrast-125 opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out absolute inset-0 z-0"
          allowFullScreen={true} 
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />

        {/* Glassmorphic Indicator Overlay */}
        <div className="absolute bottom-6 left-6 z-10 max-w-sm bg-white/90 backdrop-blur-md border border-white/40 p-5 rounded-2xl shadow-xl space-y-3 pointer-events-auto transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex items-center gap-2 text-[#15558d]">
            <Building2 className="w-4 h-4 stroke-[2]" />
            <span className="text-[11px] font-black uppercase tracking-widest">Corporate HQ Landmark</span>
          </div>
          <p className="text-xs font-bold text-slate-700 leading-relaxed">
            Located inside <span className="text-slate-950 font-black">Matrix Heights</span>, Tagore Nagar near Pachpedi Naka. Strategic logistical junction points optimized for clinical distribution vectors.
          </p>
          <a 
            href="https://surl.li/bxffks" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-[11px] font-black text-[#15558d] uppercase tracking-wider hover:text-blue-700 transition-colors"
          >
            <span>Open in Navigation Apps</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>
    </div>
    <Footer/>

    </>
  );
};

export default ContactUsPage;