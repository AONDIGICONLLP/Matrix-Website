import { motion, type Variants } from "motion/react";
import { FaPlay, FaStar } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";

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

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-full lg:h-[78vh] pt-20 lg:p-32 pb-20 overflow-hidden flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <video  autoPlay loop muted>
          <source src="./assets/hero/website.mp4" type="video/mp4" />
        </video>
        {/* <img 
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000" 
          alt="Clinic Background"
          className="w-full h-full object-cover"
        /> */}
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-linear-to-r from-black/50 via-gray/90 to-white/20 " />
      </div>

    </section>
  );
};

export default HeroSection;