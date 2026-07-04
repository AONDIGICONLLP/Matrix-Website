import React from 'react';
import { MapPin, Mail, Clock, Phone, ChevronRight, Send, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white text-slate-600 font-sans border-t border-slate-100">
      
      {/* UPPER FOOTER LAYER */}
      <div className="pt-16 pb-12 border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-12">
            
            {/* LEFT 8-COLUMNS COMPARTMENT (Nested Multi-Column Grid Architecture) */}
            <div className="xl:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                
                {/* COL 1: IDENTITY & SOCIAL ASSETS */}
                <div className="flex flex-col space-y-5">
                  <h6 className="text-slate-900 font-bold text-sm uppercase tracking-wider">
                    Company
                  </h6>
                  <div className="max-w-[160px] pt-1">
                    <img 
                      src="assets/img/matrix-tm.png" 
                      alt="Matrix Logo" 
                      className="w-full h-auto" 
                      loading="lazy"
                    />
                  </div>
                  <p>Driven by a mission to advance healthcare, Matrix delivers cutting-edge in-vitro diagnostic equipment designed for precision, speed, and unwavering accuracy.</p>
                </div>

                {/* COL 2: CORE PLATFORM SYNC LINKS */}
                <div>
                  <h6 className="text-slate-900 font-bold text-sm uppercase tracking-wider mb-5">
                    Quick Links
                  </h6>
                  <ul className="space-y-3 text-sm font-medium">
                    {[
                      { name: 'Products', href: 'products' },
                      { name: 'About us', href: 'aboutus' },
                      { name: 'Services', href: 'services' },
                      { name: 'Careers', href: '#' },
                      { name: 'Contact', href: 'contactus' }
                    ].map((link) => (
                      <li key={link.name}>
                        <a 
                          href={link.href} 
                          className="text-slate-500 hover:text-blue-600 transition-colors inline-flex items-center gap-1 group"
                        >
                          <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-500 transition-colors" />
                          <span>{link.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* COL 3: PHYSICAL SITE & OPERATIONAL CHANNELS */}
                <div className="sm:col-span-2 md:col-span-1">
                  <h6 className="text-slate-900 font-bold text-sm uppercase tracking-wider mb-5">
                    Contact Details
                  </h6>
                  <ul className="space-y-4 text-xs lg:text-sm font-medium text-slate-500">
                    <li className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">Matrix Heights, Plot No. C-149/1 Tagore Nagar, Near Pachpedi Naka, Raipur, 492001, CG.</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Mail className="w-4 h-4 text-blue-500 shrink-0" />
                      <a href="mailto:info@matrixlpl.com" className="hover:text-blue-600 transition-colors">info@matrixlpl.com</a>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Clock className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                      <span>Mon - Sat:<br />10:00am to 7.30pm</span>
                    </li>
                  </ul>
                </div>

              </div>
            </div>

            {/* RIGHT 4-COLUMNS COMPARTMENT (Newsletter Form & Interactive Actions) */}
            <div className="xl:col-span-4 border-t xl:border-t-0 border-slate-100 pt-8 xl:pt-0">
              <div className="max-w-md flex flex-col space-y-6">
                
                <div>
                  <h6 className="text-slate-900 font-bold text-sm uppercase tracking-wider mb-2">
                    Get in Touch
                  </h6>
                </div>

                {/* Primary Communications Call-Card Component */}
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="p-2.5 bg-blue-50 text-blue-600 rounded-lg shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Direct Line</p>
                    <a href="tel:+919567143332" className="text-slate-800 font-bold text-sm hover:text-blue-600 transition-colors">
                      +91 7714920492
                    </a>
                  </div>
                </div>

                {/* Social Networks Integration Strip */}
                <div>
                  <h6 className="text-slate-900 font-bold text-xs uppercase tracking-wider mb-3">
                    Connect With Us
                  </h6>
                  <div className="flex items-center gap-2">
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 hover:bg-blue-600 hover:border-blue-600 text-slate-400 hover:text-white flex items-center justify-center transition-all transform hover:-translate-y-0.5" aria-label="facebook">
                      <Facebook className="w-4 h-4" />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 hover:bg-pink-600 hover:border-pink-600 text-slate-400 hover:text-white flex items-center justify-center transition-all transform hover:-translate-y-0.5" aria-label="instagram">
                      <Instagram className="w-4 h-4" />
                    </a>
                    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 hover:bg-red-600 hover:border-red-600 text-slate-400 hover:text-white flex items-center justify-center transition-all transform hover:-translate-y-0.5" aria-label="youtube">
                      <Youtube className="w-4 h-4" />
                    </a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 hover:bg-sky-700 hover:border-sky-700 text-slate-400 hover:text-white flex items-center justify-center transition-all transform hover:-translate-y-0.5" aria-label="linkedin">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* LOWER FOOTER LAYER */}
      <div className="py-6 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Copyright & Meta Credits Section */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left text-xs font-medium text-slate-400">
              <p>
                Copyright © 2026. <span className="text-slate-600 font-semibold">Matrix Lifesciences Pvt. Ltd. </span> All Rights Reserved.
              </p>
            </div>

            {/* Compliance / Policy Anchor Array */}
            <div className="flex items-center gap-4 text-xs font-medium text-slate-400">
              <a href="#" className="hover:text-blue-600 transition-colors">Sitemap</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
              <a href="term-condition" className="hover:text-blue-600 transition-colors">Terms & Condition</a>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;