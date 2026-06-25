import React from 'react';
import { motion } from 'framer-motion';
import { FaBullseye, FaRegLightbulb } from 'react-icons/fa';
import { schoolData } from '../data/schoolData'; // Adjust path as needed

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden" id="about">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={imageVariants}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-yellow-400 rounded-3xl z-0 hidden sm:block"></div>
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/15 group">
              <img
                src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=2069&auto=format&fit=crop"
                alt="Sri Sai Inter College Campus"
                className="w-full h-full object-cover aspect-[4/5] lg:aspect-square transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-blue-950/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>

            <div className="absolute -bottom-8 -right-8 bg-blue-950 p-6 rounded-2xl shadow-xl z-20 hidden md:block border-b-4 border-yellow-500">
              <div className="text-center">
                <span className="block text-4xl font-extrabold text-white mb-1">UP</span>
                <span className="block text-sm font-medium text-yellow-400 uppercase tracking-wider">
                  Board Affiliated
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col justify-center"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-4">
              <div className="w-10 h-0.5 bg-yellow-500"></div>
              <span className="text-blue-950 font-bold uppercase tracking-widest text-sm">
                Discover Our School
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl sm:text-5xl font-extrabold text-blue-950 leading-tight mb-6"
            >
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">{schoolData.name}</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 leading-relaxed mb-10 font-light"
            >
              {schoolData.about.description}
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div
                variants={itemVariants}
                className="bg-gray-50 border border-gray-100 p-8 rounded-2xl hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-950 transition-colors duration-300">
                  <FaBullseye className="text-2xl text-blue-600 group-hover:text-yellow-400 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-blue-950 mb-3">Our Mission</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {schoolData.about.mission}
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-gray-50 border border-gray-100 p-8 rounded-2xl hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-full bg-yellow-50 flex items-center justify-center mb-6 group-hover:bg-yellow-500 transition-colors duration-300">
                  <FaRegLightbulb className="text-2xl text-yellow-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-blue-950 mb-3">Our Vision</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {schoolData.about.vision}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;