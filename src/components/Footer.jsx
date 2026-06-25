import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaGraduationCap } from 'react-icons/fa';
import { FiPhone, FiMail, FiMapPin, FiChevronRight } from 'react-icons/fi';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Notices', href: '#notices' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { id: 1, icon: FaFacebookF, href: '#', label: 'Facebook' },
    { id: 2, icon: FaInstagram, href: '#', label: 'Instagram' },
    { id: 3, icon: FaYoutube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="bg-gradient-to-b from-[#0F172A] to-[#090D1A] text-white border-t border-white/5 relative overflow-hidden">
      {/* Decorative Top Accent Bar */}
      <div className="h-[4px] bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 w-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          
          {/* Column 1: School Logo Area */}
          <div className="lg:col-span-5 flex flex-col items-start gap-6">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="bg-yellow-500/10 p-2.5 rounded-xl border border-yellow-500/20">
                <FaGraduationCap className="text-3xl text-yellow-500" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-wide text-white">
                  Sri Sai <span className="text-yellow-500">Inter College</span>
                </span>
                <span className="text-[10px] text-blue-200 tracking-widest uppercase mt-0.5 font-medium">
                  Barabanki, Uttar Pradesh
                </span>
              </div>
            </div>
            <p className="text-blue-100/70 font-light text-sm leading-relaxed max-w-sm">
              Shaping Futures Since 2006. Dedicated to educational excellence, disciplinary core values, and comprehensive preparation for board and competitive tracking horizons.
            </p>
            {/* Social Icons Link Cluster */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-yellow-500 hover:text-blue-950 hover:border-yellow-500 transition-all duration-300 shadow-inner"
                >
                  <social.icon className="text-base" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links Directory */}
          <div className="lg:col-span-3 flex flex-col items-start">
            <h4 className="text-sm font-bold uppercase tracking-[0.15em] text-yellow-500 mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[2px] after:bg-yellow-500">
              Quick Links
            </h4>
            <ul className="space-y-3 w-full">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="flex items-center gap-1.5 text-blue-100/70 hover:text-yellow-400 text-sm font-light transition-colors duration-200 group"
                  >
                    <FiChevronRight className="text-yellow-500/40 group-hover:text-yellow-400 transition-colors duration-200" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info Blocks */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <h4 className="text-sm font-bold uppercase tracking-[0.15em] text-yellow-500 mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[2px] after:bg-yellow-500">
              Contact Info
            </h4>
            <ul className="space-y-4 w-full text-sm font-light text-blue-100/70">
              <li className="flex gap-4 items-start">
                <FiMapPin className="text-yellow-500 text-lg shrink-0 mt-0.5" />
                <span>Sri Sai Inter College, Barabanki, Uttar Pradesh</span>
              </li>
              <li className="flex gap-4 items-start">
                <FiPhone className="text-yellow-500 text-lg shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <span>+91 88746 67588</span>
                  <span>+91 99368 16482</span>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <FiMail className="text-yellow-500 text-lg shrink-0 mt-0.5" />
                <a href="mailto:ssic.nsd@gmail.com" className="hover:text-yellow-400 transition-colors">
                  ssic.nsd@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-blue-200/50">
          <p>© 2026 Sri Sai Inter College. All Rights Reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed with <span className="text-yellow-500">♥</span> for Excellence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;