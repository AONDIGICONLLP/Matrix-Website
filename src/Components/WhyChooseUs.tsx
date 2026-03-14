import React from 'react';
import { motion, type Variants } from 'framer-motion';
// Using Hi2 (Heroicons) for a clean, thick-stroke modern look
import { HiOutlineUserGroup, HiOutlineShieldCheck, HiOutlineClock } from 'react-icons/hi2';

// Animation Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const reasons = [
  {
    title: 'Follow-Up Care',
    description: 'We ensure continuity of care through regular follow-ups and communication, helping you stay on track with health goals.',
    icon: <HiOutlineShieldCheck className="w-8 h-8 text-orange-600" />,
    bgColor: 'bg-orange-100/50',
    delay: 0.1
  },
  {
    title: 'Patient-Centered',
    description: 'We prioritize your comfort and preferences, tailoring our services to meet your individual needs and Care from Our Experts.',
    icon: <HiOutlineUserGroup className="w-8 h-8 text-blue-600" />,
    bgColor: 'bg-blue-100/50',
    delay: 0.2
  },
  {
    title: 'Convenient Access',
    description: 'Easily book appointments online or through our dedicated customer service team, with flexible hours to fit your schedule.',
    icon: <HiOutlineClock className="w-8 h-8 text-cyan-600" />,
    bgColor: 'bg-cyan-100/50',
    delay: 0.3
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="relative py-18 bg-white overflow-hidden">
      {/* Visual background replacements for missing assets */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100/40 rounded-full blur-[100px]" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-orange-100/30 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="inline-block text-white bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 rounded-full font-bold tracking-wider uppercase text-xs mb-4 shadow-lg shadow-blue-200"
            >
                 Why Book With Us
            </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-5xl font-bold text-gray-900 leading-tight"
          >
            Compelling <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Reasons</span><br/> to Choose
          </motion.h2>
        </div>

        {/* Reason Cards */}
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            >

          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -12 }}
              className="group relative p-10 bg-white rounded-lg border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-2xl hover:border-slate-400 transition-all duration-500"
            >

              {/* Animated Glow on Hover */}
              <div className="absolute inset-0 rounded-[3rem] bg-linear-to-br from-transparent to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 text-center">
                <div className={`w-20 h-20 ${reason.bgColor} rounded-full flex items-center justify-center mx-auto mb-8 rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-sm`}>
                  {reason.icon}
                </div>
                
                <h3 className="text-2xl font-bold font-black text-slate-900 mb-4 tracking-tight">
                  {reason.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed font-medium font-normal">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;