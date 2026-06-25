import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaGraduationCap } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Academics', href: '#' },
    { name: 'Facilities', href: '#' },
    { name: 'Gallery', href: '#' },
    { name: 'Notices', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-blue-950 text-white shadow-2xl border-b border-yellow-600/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Placeholder */}
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="bg-yellow-500/10 p-2 rounded-lg group-hover:bg-yellow-500/20 transition-colors duration-300">
              <FaGraduationCap className="text-4xl text-yellow-500" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl md:text-2xl tracking-wide text-white">
                Sri Sai <span className="text-yellow-500">Inter College</span>
              </span>
              <span className="text-xs text-blue-200 tracking-widest uppercase hidden sm:block font-medium mt-0.5">
                Excellence in Education
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1 lg:space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-3 py-2 text-sm lg:text-base font-medium transition-colors duration-300 hover:text-yellow-400 group"
              >
                {link.name}
                {/* Underline hover effect */}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-yellow-500 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 top-9 rounded-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-yellow-500 hover:text-white hover:bg-blue-900 focus:outline-none transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX className="text-3xl" /> : <FiMenu className="text-3xl" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu Dropdown */}
      <div
        className={`md:hidden absolute w-full bg-blue-950 border-t border-blue-900 transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 visible shadow-xl' : 'max-h-0 opacity-0 invisible'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-4 py-3 rounded-lg text-base font-medium text-blue-100 hover:text-yellow-500 hover:bg-blue-900/50 transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;