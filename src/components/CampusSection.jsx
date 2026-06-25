import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

const CampusSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Column: Text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-5/12 flex flex-col items-start"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[#0f172a] font-bold tracking-widest uppercase text-xs">
                Our Campus
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0f172a] leading-tight mb-6">
              A Campus That <br />
              Inspires <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">Excellence</span>
            </h2>
            
            <div className="w-16 h-1 bg-yellow-500 mb-6 rounded-full"></div>
            
            <p className="text-gray-600 font-light leading-relaxed mb-8 text-lg">
              Our campus provides a safe, inclusive and motivating environment where students learn, explore and grow. Modern classrooms, laboratories, libraries and sports facilities help us nurture confident and capable individuals.
            </p>
            
            <button className="group flex items-center justify-center gap-2 bg-[#0f172a] text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:bg-blue-900 shadow-lg hover:shadow-xl hover:shadow-blue-900/20">
              Explore Campus
              <FiExternalLink className="transition-transform duration-300 group-hover:scale-110 group-hover:text-yellow-400" />
            </button>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-7/12"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 group">
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop" 
                alt="Wide Campus View" 
                className="w-full h-full object-cover aspect-[4/3] lg:aspect-[16/10] group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-[#0f172a]/5 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CampusSection;