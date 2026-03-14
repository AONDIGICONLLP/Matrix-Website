import React, { useState } from 'react';
import { FaFacebook, FaYoutube, FaInstagram, FaTwitter, FaEnvelopeOpen, FaPhone } from "react-icons/fa6";

const TopHeader = () => {
  return (
    <>
      {/* --- TOPBAR (Not Sticky) --- */}
      <div className="bg-white text-gray-300 py-2 hidden border-b border-gray/50 lg:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <FaEnvelopeOpen size={15} className='text-gray-900'/> 
              <span>eye@sbhhospital.com,  women@sbhhospital.com</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhone size={15} className='text-gray-900'/> 
              <span>+91 74407 77771</span>
            </div>
          </div>
          <div className="flex items-center gap-4 text-gray-600">
            <div className="flex gap-3 ">
              <a href="#" className="hover:text-blue-800 rounded-full border border-gray-200 w-8 h-8 flex items-center justify-center"><FaFacebook size={18}/> </a>
              <a href="#" className="hover:text-red-500 rounded-full border border-gray-200 w-8 h-8 flex items-center justify-center"><FaYoutube size={18}/></a>
              <a href="#" className="hover:text-purple-500 rounded-full border border-gray-200 w-8 h-8 flex items-center justify-center"><FaInstagram size={18}/></a>
              <a href="#" className="hover:text-blue-400 rounded-full border border-gray-200 w-8 h-8 flex items-center justify-center"><FaTwitter size={18}/></a>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default TopHeader;