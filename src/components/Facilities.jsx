import React from 'react';
import { motion } from 'framer-motion';
import { schoolData } from '../data/schoolData'; // Adjust path as needed

const Facilities = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-24 bg-[#FAFAFC] relative overflow-hidden" id="facilities">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-yellow-100/50 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-yellow-500"></div>
            <span className="text-blue-950 font-semibold tracking-widest uppercase text-sm">
              Campus Infrastructure
            </span>
            <div className="w-12 h-[2px] bg-yellow-500"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-950 tracking-tight mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">Facilities</span>
          </h2>
          <p className="text-gray-600 text-lg font-light leading-relaxed">
            Providing a conducive environment for holistic development with modern infrastructure tailored for board and competitive preparation.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {schoolData.facilities.map((facility) => (
            <motion.div
              key={facility.id}
              variants={cardVariants}
              className="group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,30,100,0.08)] transition-all duration-300 hover:-translate-y-2 overflow-hidden z-10"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-50 to-transparent rounded-bl-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-[2] z-0 opacity-50"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-950 transition-colors duration-300">
                  <facility.icon className="text-3xl text-blue-600 group-hover:text-yellow-500 transition-colors duration-300" />
                </div>

                <h3 className="text-2xl font-bold text-blue-950 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                  {facility.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-light text-sm sm:text-base">
                  {facility.description}
                </p>

                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 transition-all duration-500 group-hover:w-full"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Facilities;