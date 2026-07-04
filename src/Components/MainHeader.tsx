import React, { useState } from 'react';
import { Menu, X, ChevronDown, Facebook, Twitter, Instagram, Linkedin, Lock, UserCheck, Mail, Phone } from 'lucide-react';

export const MainHeader: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  
  const toggleDropdown = (menuName: string) => {
    setActiveDropdown(activeDropdown === menuName ? null : menuName);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
       <div className="container mx-auto px-4 lg:px-8">
            <nav className="flex items-center justify-between h-20">
            
            {/* Logo & Mobile Trigger Button */}
            <div className="flex items-center space-x-4">
                <button 
                onClick={toggleMobileMenu}
                className="lg:hidden p-2 text-gray-700 hover:text-blue-600 focus:outline-none"
                aria-label="Toggle menu"
                >
                <Menu className="w-6 h-6" />
                </button>
                <a href="/" className="block">
                <img src="assets/img/matrix-tm.png" className="h-16 w-auto" alt="Logo" />
                </a>
            </div>

            {/* Desktop Navigation Link Infrastructure */}
            <div className="hidden lg:flex items-center space-x-1">
                <ul className="flex items-center space-x-2 font-medium text-[15px] text-gray-700">
                
                {/* Home Megamenu */}
                <li className="relative group py-7">
                    <a href="/" className="block py-1 hover:text-blue-600 transition-colors">Home</a>
                </li>

                {/* About Link */}
                <li className="relative group py-2">
                    <button className="flex items-center space-x-1 px-3 hover:text-blue-600 transition-colors">
                    <span>About us</span>
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                    </button>
                    <ul className="absolute left-0 top-full w-48 bg-white border border-gray-100 rounded-b-xl shadow-lg p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 space-y-1 z-50 text-sm">
                    <li><a href="aboutus" className="block px-3 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-all">About us</a></li>
                    <li><a href="ceo-message" className="block px-3 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-all">CEO Message</a></li>
                    </ul>
                </li>

                {/* Pharmacy Dropdown (Active state configured) */}
                <li className="relative group py-2">
                {/* TOP LEVEL LINK FOR PRODUCTS */}
                <a href="products" className="flex items-center space-x-1 px-3 font-semibold hover:text-blue-600 transition-colors">
                    <span>Products</span>
                    <ChevronDown className="w-4 h-4 group-hover:text-blue-600" />
                </a>
                
                {/* MEGAMENU DROPDOWN CONTAINER */}
                <div className="absolute left-0 top-full w-[560px] bg-white border border-gray-100 rounded-b-xl shadow-xl p-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="grid grid-cols-2 gap-4 items-center">
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li><a href="hematology" className="block py-1 hover:text-blue-600 transition-colors">Hematology Analyzer & Reagents</a></li>
                        <li><a href="biochemistry" className="block py-1 hover:text-blue-600 transition-colors">Biochemistry Analyzer & Reagents</a></li>
                        <li><a href="electrolyte" className="block py-1 hover:text-blue-600 transition-colors">Electrolyte Analyzer</a></li>
                        <li><a href="immunoassay" className="block py-1 hover:text-blue-600 transition-colors">Immunoassay Analyzer</a></li>
                        <li><a href="coagulation" className="block py-1 hover:text-blue-600 transition-colors">Coagulation Analyzer</a></li>
                        <li><a href="urine-analyzer" className="block py-1 hover:text-blue-600 transition-colors">Urine Analyzer & Strips</a></li>
                        <li><a href="elisa" className="block py-1 hover:text-blue-600 transition-colors">Elisa Reader & Washer</a></li>
                        <li><a href="protien" className="block py-1 hover:text-blue-600 transition-colors">Protine Analyzer</a></li>
                        <li><a href="electrophoresis" className="block py-1 hover:text-blue-600 transition-colors">Electrophoresis</a></li>
                        <li><a href="turbidometers" className="block py-1 hover:text-blue-600 transition-colors">Turbidometers</a></li>
                        <li><a href="hplc" className="block py-1 hover:text-blue-600 transition-colors">HPLC Systems</a></li>
                        <li><a href="blood-gas" className="block py-1 hover:text-blue-600 transition-colors">Blood Gas Analyzer</a></li>
                        <li><a href="hb-meters" className="block py-1 hover:text-blue-600 transition-colors">HB Meters</a></li>
                        <li><a href="poct" className="block py-1 hover:text-blue-600 transition-colors">POCT</a></li>
                        <li><a href="microscopes" className="block py-1 hover:text-blue-600 transition-colors">Microscopes</a></li>
                        <li><a href="centrifuges" className="block py-1 hover:text-blue-600 transition-colors">Centrifuges</a></li>
                    </ul>
                    <div className="rounded-lg overflow-hidden h-full aspect-[4/3]">
                        <img src="assets/img/categories/category-14.webp" alt="Pharmacy preview" className="w-65 h-80 object-cover" />
                    </div>
                    </div>
                </div>
                </li>

                {/* Service Link */}
                <li className="relative group py-7">
                    <a href="services" className="block py-1 px-3 hover:text-blue-600 transition-colors">Services</a>
                </li>

                {/* Team Link */}
                <li className="relative group py-7">
                    <a href="our-team" className="block py-1 px-3 hover:text-blue-600 transition-colors">Our Team</a>
                </li>

                {/* Gallery Link */}
                <li className="relative group py-7">
                    <a href="gallery" className="block py-1 px-3 hover:text-blue-600 transition-colors">Gallery</a>
                </li>

                {/* Contact Link */}
                <li className="relative group py-7">
                    <a href="contactus" className="block py-1 px-3 hover:text-blue-600 transition-colors">Contact us</a>
                </li>
                </ul>
            </div>

            {/* Desktop Right Panel Action Call To Actions */}
            <div className="hidden lg:flex items-center space-x-3">
                <a href="login.html" className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium text-sm px-5 py-2.5 rounded-xl shadow-sm transition-all">
                <Lock className="w-4 h-4" />
                <span>Sign In</span>
                </a>
                <a href="register.html" className="inline-flex items-center space-x-2 bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm px-5 py-2.5 rounded-xl transition-all">
                <UserCheck className="w-4 h-4" />
                <span>Register</span>
                </a>
            </div>

            </nav>
      </div>

      {/* Mobile Drawer Navigation Backdrop Layout Overlay */}
      <div className={`fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 lg:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className={`fixed left-0 top-0 bottom-0 w-80 bg-white max-w-[85vw] flex flex-col h-full shadow-2xl transition-transform duration-300 ease-out z-50 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          
          {/* Mobile Shell Header Area */}
          <div className="flex items-center justify-between px-5 h-20 border-b border-gray-100 flex-shrink-0">
            <img src="assets/img/matrix-tm.png" className="h-9 w-auto" alt="Logo" />
            <button onClick={toggleMobileMenu} className="p-2 text-gray-400 hover:text-gray-600 rounded-lg">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Updated Main Links Body Menu */}
          <div className="flex-1 overflow-y-auto p-5 space-y-6">
            <ul className="space-y-2 font-semibold text-gray-800+">
              
              {/* Home Link */}
              <li className="border-b border-gray-50 pb-2">
                <a href="/" className="block py-2 hover:text-blue-600 transition-colors">Home</a>
              </li>

              {/* About US Expandable Dropdown Menu */}
              <li className="border-b border-gray-50 pb-2">
                <button 
                  onClick={() => toggleDropdown('about')} 
                  className="flex items-center justify-between w-full py-2 text-left hover:text-blue-600 transition-colors"
                >
                  <span>About us</span>
                  <ChevronDown className={`w-4 h-4 transform transition-transform text-gray-400 ${activeDropdown === 'about' ? 'rotate-180 text-blue-600' : ''}`} />
                </button>
                <ul className={`pl-4 space-y-1 text-sm font-medium text-gray-500 overflow-hidden transition-all duration-300 ${activeDropdown === 'about' ? 'max-h-24 py-1 mt-1' : 'max-h-0'}`}>
                  <li><a href="aboutus" className="block py-1.5 hover:text-blue-600">About us</a></li>
                  <li><a href="ceo-message" className="block py-1.5 hover:text-blue-600">CEO Message</a></li>
                </ul>
              </li>

              {/* Products Compressible List Accordion Menu */}
              <li className="border-b border-gray-50 pb-2">
                <a href="products" className="flex items-center justify-between w-full py-2 text-left hover:text-blue-700 transition-colors">
                    <span>Products</span>
                    <ChevronDown className="w-4 h-4 text-blue-600 group-hover:text-blue-700" />
                </a>
                <ul className={`pl-4 space-y-1 text-sm font-medium text-gray-500 overflow-y-auto transition-all duration-300 ${activeDropdown === 'products' ? 'max-h-60 py-1 mt-1 border-l-2 border-blue-50 pl-3' : 'max-h-0'}`}>
                  <li><a href="hematology" className="block py-1.5 hover:text-blue-600">Hematology Analyzer & Reagents</a></li>
                  <li><a href="biochemistry" className="block py-1.5 hover:text-blue-600">Biochemistry Analyzer & Reagents</a></li>
                  <li><a href="electrolyte" className="block py-1.5 hover:text-blue-600">Electrolyte Analyzer</a></li>
                  <li><a href="immunoassay" className="block py-1.5 hover:text-blue-600">Immunoassay Analyzer</a></li>
                  <li><a href="coagulation" className="block py-1.5 hover:text-blue-600">Coagulation Analyzer</a></li>
                  <li><a href="urine-analyzer" className="block py-1.5 hover:text-blue-600">Urine Analyzer & Strips</a></li>
                  <li><a href="elisa" className="block py-1.5 hover:text-blue-600">Elisa Reader & Washer</a></li>
                  <li><a href="protien" className="block py-1.5 hover:text-blue-600">Protine Analyzer</a></li>
                  <li><a href="electrophoresis" className="block py-1.5 hover:text-blue-600">Electrophoresis</a></li>
                  <li><a href="turbidometers" className="block py-1.5 hover:text-blue-600">Turbidometers</a></li>
                  <li><a href="hplc" className="block py-1.5 hover:text-blue-600">HPLC Systems</a></li>
                  <li><a href="blood-gas" className="block py-1.5 hover:text-blue-600">Blood Gas Analyzer</a></li>
                  <li><a href="hb-meters" className="block py-1.5 hover:text-blue-600">HB Meters</a></li>
                  <li><a href="poct" className="block py-1.5 hover:text-blue-600">POCT</a></li>
                  <li><a href="microscopes" className="block py-1.5 hover:text-blue-600">Microscopes</a></li>
                  <li><a href="centrifuges" className="block py-1.5 hover:text-blue-600">Centrifuges</a></li>
                </ul>
              </li>

              {/* Services Link */}
              <li className="border-b border-gray-50 pb-2">
                <a href="services" className="block py-2 hover:text-blue-600 transition-colors">Services</a>
              </li>

              {/* Our Team Link */}
              <li className="border-b border-gray-50 pb-2">
                <a href="our-team" className="block py-2 hover:text-blue-600 transition-colors">Our Team</a>
              </li>

              {/* Gallery Link */}
              <li className="border-b border-gray-50 pb-2">
                <a href="gallery" className="block py-2 hover:text-blue-600 transition-colors">Gallery</a>
              </li>

              {/* Contact us Link */}
              <li className="border-b border-gray-50 pb-2">
                <a href="contactus" className="block py-2 hover:text-blue-600 transition-colors">Contact us</a>
              </li>
            </ul>

            {/* Mobile Bottom Contact Info Cards */}
            <div className="pt-6 border-t border-gray-100 space-y-5">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Contact Information</h4>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-400 leading-tight">General Inquiries</p>
                    <p className="font-semibold text-gray-800">info@matrixlpl.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-400 leading-tight">Emergency Support</p>
                    <p className="font-semibold text-gray-800">+91 7714920492</p>
                  </div>
                </div>
              </div>

              {/* Social Link Handles */}
              <div className="flex items-center space-x-3 pt-2">
                {[
                  { icon: <Facebook className="w-4 h-4" />, label: 'facebook' },
                  { icon: <Twitter className="w-4 h-4" />, label: 'twitter' },
                  { icon: <Instagram className="w-4 h-4" />, label: 'instagram' },
                  { icon: <Linkedin className="w-4 h-4" />, label: 'linkedin' }
                ].map((soc, sIdx) => (
                  <a href="#" key={sIdx} aria-label={soc.label} className="w-8 h-8 bg-gray-50 border border-gray-200 hover:bg-blue-600 hover:text-white text-gray-500 rounded-lg flex items-center justify-center transition-all">
                    {soc.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Footer Sign Actions */}
          <div className="p-5 border-t border-gray-100 grid grid-cols-2 gap-3 flex-shrink-0">
            <a href="login.html" className="flex items-center justify-center space-x-2 bg-gray-50 border border-gray-200 text-gray-700 font-semibold text-xs py-3 rounded-xl hover:bg-gray-100 transition-colors">
              <Lock className="w-3.5 h-3.5" />
              <span>Sign In</span>
            </a>
            <a href="register.html" className="flex items-center justify-center space-x-2 bg-blue-600 text-white font-semibold text-xs py-3 rounded-xl hover:bg-blue-700 shadow-sm transition-colors">
              <UserCheck className="w-3.5 h-3.5" />
              <span>Sign Up</span>
            </a>
          </div>

        </div>
      </div>
    </header>
  );
};

export default MainHeader;