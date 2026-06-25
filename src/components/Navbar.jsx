import React, { useState } from 'react';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { FaGraduationCap } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);

  // Updated Navigation Links with Dropdown Menus
  const navLinks = [
    { name: 'Home', href: '#' },
    { 
      name: 'About', 
      dropdown: [
        { name: 'Overview', href: '#about' },
        { name: 'Vision & Mission', href: '#' },
        { name: 'Principal\'s Message', href: '#' }
      ]
    },
    { 
      name: 'Academics', 
      dropdown: [
        { name: 'UP Board Curriculum', href: '#' },
        { name: 'IIT-JEE / NEET Wing', href: '#' },
        { name: 'Expert Faculty', href: '#' }
      ]
    },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Notices', href: '#notices' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleMobileDropdown = (name) => {
    setActiveMobileDropdown(activeMobileDropdown === name ? null : name);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#0f172a] text-white shadow-2xl border-b border-yellow-500/20">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 lg:h-24">
          
          {/* Logo Section */}
          <div className="flex items-center gap-3 cursor-pointer group z-50">
            <div className="bg-yellow-500/10 p-2 sm:p-2.5 rounded-xl border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-colors duration-300">
              <FaGraduationCap className="text-3xl sm:text-4xl text-yellow-500" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl md:text-2xl tracking-wide text-white">
                Sri Sai <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Inter College</span>
              </span>
              <span className="text-[10px] sm:text-xs text-blue-200 tracking-widest uppercase hidden sm:block font-medium mt-0.5">
                Excellence in Education
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-2 xl:space-x-6 items-center">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                
                {/* Main Link / Dropdown Trigger */}
                <a
                  href={link.href || '#'}
                  className="flex items-center gap-1.5 relative px-3 py-6 text-sm xl:text-base font-medium transition-colors duration-300 hover:text-yellow-400 cursor-pointer"
                >
                  {link.name}
                  {link.dropdown && (
                    <FiChevronDown className="text-blue-200 transition-transform duration-300 group-hover:rotate-180 group-hover:text-yellow-400" />
                  )}
                  {/* Underline hover effect */}
                  <span className="absolute inset-x-0 bottom-4 h-0.5 bg-yellow-500 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 rounded-full mx-3"></span>
                </a>

                {/* Desktop Dropdown Slide Menu */}
                {link.dropdown && (
                  <div className="absolute left-0 top-[80px] w-56 opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50 pt-2">
                    <div className="bg-white rounded-xl shadow-2xl border border-gray-100 py-3 overflow-hidden relative before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-gradient-to-r before:from-yellow-400 before:to-yellow-600">
                      {link.dropdown.map((dropItem) => (
                        <a
                          key={dropItem.name}
                          href={dropItem.href}
                          className="block px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-[#0f172a] transition-colors"
                        >
                          {dropItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Desktop Quick Action Button */}
            <div className="pl-4">
              <a href="#admission-enquiry" className="bg-yellow-500 hover:bg-yellow-400 text-[#0f172a] px-6 py-2.5 rounded-lg font-bold text-sm tracking-wide transition-colors duration-300 shadow-lg shadow-yellow-500/20">
                Apply Now
              </a>
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl text-yellow-500 hover:text-white hover:bg-blue-900/50 focus:outline-none transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX className="text-3xl" /> : <FiMenu className="text-3xl" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden absolute top-20 left-0 w-full bg-[#0f172a] border-t border-white/5 overflow-y-auto"
          >
            <div className="px-6 pt-4 pb-24 space-y-2">
              {navLinks.map((link) => (
                <div key={link.name} className="border-b border-white/5 last:border-none">
                  {link.dropdown ? (
                    // Mobile Dropdown Trigger
                    <div className="flex flex-col">
                      <button
                        onClick={() => handleMobileDropdown(link.name)}
                        className="flex items-center justify-between w-full py-4 text-base font-medium text-blue-100 hover:text-yellow-400 transition-colors"
                      >
                        {link.name}
                        <FiChevronDown 
                          className={`transition-transform duration-300 ${activeMobileDropdown === link.name ? 'rotate-180 text-yellow-400' : ''}`} 
                        />
                      </button>
                      
                      {/* Mobile Dropdown Items */}
                      <AnimatePresence>
                        {activeMobileDropdown === link.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden bg-blue-950/50 rounded-lg mb-2"
                          >
                            <div className="py-2 flex flex-col">
                              {link.dropdown.map((dropItem) => (
                                <a
                                  key={dropItem.name}
                                  href={dropItem.href}
                                  onClick={() => setIsOpen(false)}
                                  className="pl-8 pr-4 py-3 text-sm text-blue-200/80 hover:text-yellow-400 hover:bg-white/5 transition-colors"
                                >
                                  {dropItem.name}
                                </a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    // Standard Mobile Link
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-4 text-base font-medium text-blue-100 hover:text-yellow-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  )}
                </div>
              ))}
              
              {/* Mobile Quick Action Button */}
              <div className="pt-6">
                <a 
                  href="#admission-enquiry" 
                  onClick={() => setIsOpen(false)}
                  className="flex justify-center w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-[#0f172a] px-6 py-4 rounded-xl font-bold tracking-wide transition-all duration-300 shadow-lg shadow-yellow-500/20"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;