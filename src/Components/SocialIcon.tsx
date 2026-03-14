import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaPhoneAlt, FaWhatsapp, FaYoutube, FaInstagram } from 'react-icons/fa';
import Modal from '../Components/Modal';



interface SubLink {
  label: string;
  url: string;
}

interface SocialLink {
  name: string;
  icon: React.ReactElement;
  color: string;
  text: string;
  subLinks?: SubLink[]; // Optional: only for platforms with multiple accounts
  link?: string;        // Optional: for single-link platforms
}

const socialLinks: SocialLink[] = [
  { name: 'Facebook', icon: <FaFacebookF />, color: 'bg-[#3b5998]', text: 'Like Us on', subLinks: [
      { label: 'SBH Eye Hospital', url: 'https://www.facebook.com/SaiBabaEyeHospital'},
      { label: 'SBH Women Hospital', url: 'https://www.facebook.com/saibabawomenshospital'}
    ] },
  { name: 'Instagram', icon: <FaInstagram />, color: 'bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]', text: 'Follow Us on', subLinks: [
      { label: 'SBH Eye Hospital', url: 'https://www.instagram.com/sbh_eye_hospital?igsh=eHFsdm1keHBtdTFi'},
      { label: 'SBH Women Hospital', url: 'https://www.instagram.com/sbh_womens_hospital'}
    ] },
  { name: 'YouTube', icon: <FaYoutube />, color: 'bg-[#ff0000]', text: 'Subscribe on', subLinks: [
      { label: 'SBH Eye Hospital', url: 'https://www.youtube.com/@SaiBabaEyeHospitalRaipur'},
      { label: 'SBH Women Hospital', url: 'https://www.youtube.com/@saibabawomenshospital7871'}
    ] },
  { name: 'Whatsapp', icon: <FaWhatsapp />, color: 'bg-[#25d366]', text: 'Chat on', link: 'https://wa.me/917440777771' },
  { name: 'Call us', icon: <FaPhoneAlt />, color: 'bg-[#1da1f2]', text: 'Request a callback', link: 'tel:917440777771'},
  
];

const SocialSticky: React.FC = () => {
  // 1. Change state to hold the specific social object or null
const [selectedSocial, setSelectedSocial] = useState<SocialLink | null>(null);
  return (
    <div className="fixed top-1/2 -translate-y-1/2 right-0 z-[999] flex flex-col items-end">
      <ul className="space-y-1">
        {socialLinks.map((social, index) => (
          <motion.li
            key={index}
            initial={{ x: 120 }}
            whileHover={{ x: 0 }}
            onClick={() => setSelectedSocial(social)}
            className={`flex items-center cursor-pointer group rounded-l-lg shadow-lg ${social.color} overflow-hidden`}
          >
            <div className="w-12 h-12 flex items-center justify-center text-white bg-black/10 text-xl shrink-0">
              {social.icon}
            </div>
            <div className="px-4 py-2 text-white leading-tight min-w-[120px]">
              <span className="text-[10px] block opacity-80 uppercase tracking-tighter">{social.text}</span>
              <span className="font-bold text-sm leading-none">{social.name}</span>
            </div>
          </motion.li>
        ))}
      </ul>

      <Modal 
        isOpen={!!selectedSocial} 
        onClose={() => setSelectedSocial(null)} 
        title={`${selectedSocial?.name} Accounts`}
      >

        <div className="space-y-4">
          <p className="text-gray-600 text-center mb-4">
            Select which <strong>{selectedSocial?.name}</strong> account you would like to visit:
          </p>

          {/* Logic: Multiple Links vs Single Link */}
          {selectedSocial?.subLinks ? (
            // Render multiple buttons if subLinks exists
            selectedSocial.subLinks.map((sub, i) => (
              <a
                key={i}
                href={sub.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setSelectedSocial(null)}
                className={`flex items-center justify-between w-full px-6 py-4 rounded-xl text-white font-bold transition-all hover:scale-[1.02] shadow-md ${selectedSocial.color}`}
              >
                {selectedSocial?.icon}
                <span>{sub.label}</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            ))
          ) : (
            // Fallback for platforms with only one link
            <a
              href={selectedSocial?.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setSelectedSocial(null)}
              className={`block w-full text-center py-4 rounded-xl text-white font-bold shadow-md ${selectedSocial?.color}`}
            >
               Go to {selectedSocial?.name}
            </a>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default SocialSticky;