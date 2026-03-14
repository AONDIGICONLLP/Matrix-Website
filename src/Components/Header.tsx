import TopHeader from '../Components/TopHeader';
import Request from '../Components/Requestacall';
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { FaBars, FaChevronDown, FaStethoscope, FaEye, FaBaby, FaStar, FaSyringe } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { NavLink, Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About us', path: '/aboutus' },
  { 
    name: 'Departments', 
    path: '/departments',
    submenu: [
      { 
        name: 'Eye Care', 
        path: '/eyecare', 
        desc: 'Advanced ophthalmology services.',
        icon: <FaEye className="text-blue-500" /> 
      },
      { 
        name: 'Maternity Care', 
        path: '/maternity', 
        desc: 'Womens maternity care.',
        icon: <FaStethoscope className="text-rose-500" /> 
      },
      { 
        name: 'Paediatric', 
        path: '/paediatric', 
        desc: 'Specialized care for infants & kids.',
        icon: <FaBaby className="text-amber-500" /> 
      },
      { 
        name: 'Cosmetic Gynae', 
        path: '/cosmetic-gynae', 
        desc: 'Inner body reformation.',
        icon: <FaStar className="text-purple-500" /> 
      },
      { 
        name: 'IVF', 
        path: '/ivf', 
        desc: 'Aesthetic & functional treatments.',
        icon: <FaSyringe className="text-pink-500" /> 
      }
    ]
  },
  { name: 'Specialities', path: '/our-specialities' },
  { name: 'Doctors', path: '/doctors' },
  { name: 'Career', path: '/career' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Blogs', path: '/blogs' },
  { name: 'Contact us', path: '/contactus' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <Request/>
    <TopHeader/>
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`sticky w-full top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-xl py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="shrink-0">
              <img src="assets/saibaba_logo.png" className="w-48 lg:w-64" alt="Logo" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                const hasSubmenu = !!link.submenu;

                return (
                  <div 
                    key={link.name} 
                    className="relative group py-2"
                    onMouseEnter={() => hasSubmenu && setActiveSubmenu(link.name)}
                    onMouseLeave={() => hasSubmenu && setActiveSubmenu(null)}
                  >
                    <NavLink
                      to={link.path}
                      className={`px-4 py-2 text-sm font-semibold transition-colors flex items-center gap-1.5 ${
                        isActive || activeSubmenu === link.name ? "text-green-600" : "text-gray-700 hover:text-greem-600"
                      }`}
                    >
                      {link.name}
                      {hasSubmenu && (
                        <FaChevronDown 
                          size={10} 
                          className={`transition-transform duration-300 ${activeSubmenu === link.name ? 'rotate-180' : ''}`} 
                        />
                      )}
                    </NavLink>

                    {/* Desktop Mega Submenu Dropdown */}
                    <AnimatePresence>
                      {hasSubmenu && activeSubmenu === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 15, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 15, scale: 0.95 }}
                          // Changed: grid-cols-1 and width to w-80 (or auto) for a single column
                          className="absolute top-full left-0 w-80 bg-white shadow-2xl border border-gray-100 p-2 mt-2 grid grid-cols-1 gap-1 overflow-hidden rounded-lg"
                        >
                          {link.submenu?.map((sub) => (
                            <Link
                              key={sub.name}
                              to={sub.path}
                              className="flex items-center gap-4 p-3 rounded-md hover:bg-blue-50 transition-all group/item"
                            >
                              <div className="shrink-0 w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-lg group-hover/item:bg-white group-hover/item:shadow-sm transition-all">
                                {sub.icon}
                              </div>
                              <div>
                                <div className="text-sm font-bold text-gray-900 group-hover/item:text-blue-600">
                                  {sub.name}
                                </div>
                                <div className="text-[11px] text-gray-500 leading-tight mt-0.5">
                                  {sub.desc}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>

            <div className="hidden md:flex items-center">
              <Link to="/book-appointment" className="px-4 py-2.5 text-white text-[12px] bg-green-600 rounded-full font-medium hover:bg-slate-900 transition-all shadow-lg shadow-blue-100">
                Book an Appointment
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700 p-2">
              {isOpen ? <FaXmark size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsOpen(false)} />
              <motion.aside className="fixed top-4 left-4 bottom-4 w-80 bg-white z-50 md:hidden shadow-2xl flex flex-col overflow-hidden" initial={{ x: "-110%" }} animate={{ x: 0 }} exit={{ x: "-110%" }}>
                <div className="flex items-center justify-between px-8 py-6 border-b">
                  <img src="assets/saibaba_logo.png" className="w-32" alt="Logo" />
                  <button onClick={() => setIsOpen(false)} className="p-2 bg-gray-100 rounded-full"> <FaXmark size={18} /> </button>
                </div>

                <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
                  {navLinks.map((link) => (
                    <div key={link.name} className="space-y-1">
                      <div className="flex items-center justify-between">
                        <NavLink
                          to={link.path}
                          onClick={() => !link.submenu && setIsOpen(false)}
                          className={({ isActive }) => `flex-1 px-4 py-3 md:font-bold font-semibold transition-all ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-700'}`}
                        >
                          {link.name}
                        </NavLink>
                        {link.submenu && (
                          <button onClick={() => setActiveSubmenu(activeSubmenu === link.name ? null : link.name)} className="p-3 text-gray-400">
                            <FaChevronDown className={`transition-transform duration-300 ${activeSubmenu === link.name ? 'rotate-180' : ''}`} />
                          </button>
                        )}
                      </div>
                      
                      {link.submenu && activeSubmenu === link.name && (
                        <div className="bg-slate-50  p-2 mx-2 space-y-1">
                          {link.submenu.map((sub) => (
                            <Link key={sub.name} to={sub.path} onClick={() => setIsOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white transition-all">
                              <span className="text-base">{sub.icon}</span>
                              <span className="text-sm font-semibold text-gray-600">{sub.name}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>

                <div className="p-6 border-t">
                  <Link to="/appointment" onClick={() => setIsOpen(false)} className="block text-center w-full py-4 bg-blue-600 text-white font-semibold rounded-2xl">
                    Book an Appointment
                  </Link>
                </div>
              </motion.aside>
            </>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Header;