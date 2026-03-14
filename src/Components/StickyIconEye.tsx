import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaPhoneAlt, FaWhatsapp, FaYoutube, FaInstagram } from 'react-icons/fa';


const socialLinks = [
{
    name: 'Facebook', 
    icon: <FaFacebookF />, 
    color: 'bg-[#3b5998]', 
    text: 'Like Us on', 
    link: 'https://www.facebook.com/SaiBabaEyeHospital' 
},
{ 
    name: 'Instagram', 
    icon: <FaInstagram />, 
    color: 'bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]', 
    text: 'Follow Us on', 
    link: 'https://www.instagram.com/sbh_eye_hospital?igsh=eHFsdm1keHBtdTFi' 
},
{ 
    name: 'YouTube', 
    icon: <FaYoutube />, 
    color: 'bg-[#ff0000]', 
    text: 'Subscribe on', 
    link: 'https://www.youtube.com/@SaiBabaEyeHospitalRaipur' 
},
{ 
    name: 'Whatsapp', 
    icon: <FaWhatsapp />, 
    color: 'bg-[#25d366]', 
    text: 'Chat on', 
    link: 'https://wa.me/917440777771'
},
{ 
    name: 'Call us', 
    icon: <FaPhoneAlt />, 
    color: 'bg-[#1da1f2]', 
    text: 'Request a call', 
    link: 'tel:917440777771' 
},
];

const SocialStickyEye: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
return (
<div className="fixed top-1/2 -translate-y-1/2 right-0 z-[999] flex flex-col items-end">
<ul className="space-y-1">
 {socialLinks.map((social, index) => (
 <motion.li
 key={index}
 initial={{ x: 100 }}
 whileHover={{ x: 0 }}
 transition={{ type: 'spring', stiffness: 300, damping: 20 }}
 className={`flex items-center cursor-pointer group rounded-l-lg shadow-lg ${social.color} overflow-hidden`}
>
{/* The Visible Icon Box */}
 <div className="w-12 h-12 flex items-center justify-center text-white bg-black/10 text-xl shrink-0">
 {social.icon}
 </div>
 {/* The Hidden Text - Slide out on Hover */}
 <div className="px-4 py-2 text-white leading-tight">
 <a href={social.link} target="_blank" rel="noopener noreferrer" className="block">
 <span className="text-[10px] block opacity-80 uppercase tracking-tighter">
 {social.text}
 </span>
 <span className="font-bold text-sm leading-none">{social.name}</span>
 </a>
 </div>


 </motion.li>
 ))}
 </ul>
 </div>
 
 );
};

export default SocialStickyEye;