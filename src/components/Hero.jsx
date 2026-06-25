import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaAward, FaMicroscope } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import { schoolData } from '../data/schoolData'; // Adjust path as needed

const Hero = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const floatingAnimation = (delay) => ({
    y: [-8, 8, -8],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay
    }
  });

  return (
    <section className="relative w-full min-h-[90vh] flex items-center bg-[#FAFAFC] overflow-hidden pt-20 lg:pt-0">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-yellow-50 rounded-full blur-3xl opacity-50 translate-y-1/3 -translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start max-w-2xl"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-yellow-500"></div>
              <span className="text-blue-950 font-semibold tracking-wide uppercase text-sm">
                {schoolData.name} • {schoolData.hero.badge}
              </span>
            </motion.div>

            <motion.h1 
              variants={fadeUp}
              className="text-5xl sm:text-6xl lg:text-[4.5rem] font-bold text-blue-950 leading-[1.1] tracking-tight mb-8"
            >
              {schoolData.hero.headingMain} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">
                {schoolData.hero.headingSub}
              </span>
            </motion.h1>

            <motion.p 
              variants={fadeUp}
              className="text-lg sm:text-xl text-gray-600 font-light leading-relaxed mb-10 max-w-lg"
            >
              {schoolData.hero.description}
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="group flex items-center justify-center gap-2 bg-blue-950 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-blue-900 hover:shadow-lg hover:shadow-blue-900/20">
                Explore Campus
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button className="flex items-center justify-center bg-white text-blue-950 border border-gray-200 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:border-yellow-500 hover:bg-yellow-50 hover:text-yellow-700">
                Admissions
              </button>
            </motion.div>
          </motion.div>

          <div className="relative w-full h-[500px] lg:h-[700px] mt-10 lg:mt-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl shadow-blue-900/10"
            >
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop" 
                alt="Campus View" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/20 to-transparent"></div>
            </motion.div>

            {/* Floating Card 1 */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute top-8 -right-4 lg:-right-8 z-20 hidden sm:block"
            >
              <motion.div animate={floatingAnimation(0)} className="bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/20 flex items-center gap-4 pr-6">
                <div className="w-12 h-12 rounded-full bg-yellow-50 text-yellow-600 flex items-center justify-center text-xl"><FaAward /></div>
                <div>
                  <p className="text-blue-950 font-bold text-lg">{schoolData.hero.highlights[0].title}</p>
                  <p className="text-gray-500 text-sm font-medium">{schoolData.hero.highlights[0].subtitle}</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute bottom-24 -left-4 lg:-left-12 z-20"
            >
              <motion.div animate={floatingAnimation(1)} className="bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/20 flex items-center gap-4 pr-6">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xl"><FaGraduationCap /></div>
                <div>
                  <p className="text-blue-950 font-bold text-lg">{schoolData.hero.highlights[1].title}</p>
                  <p className="text-gray-500 text-sm font-medium">{schoolData.hero.highlights[1].subtitle}</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="absolute -bottom-6 right-8 z-20 hidden sm:block"
            >
              <motion.div animate={floatingAnimation(2)} className="bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/20 flex items-center gap-4 pr-6">
                <div className="w-12 h-12 rounded-full bg-yellow-50 text-yellow-600 flex items-center justify-center text-xl"><FaMicroscope /></div>
                <div>
                  <p className="text-blue-950 font-bold text-lg">{schoolData.hero.highlights[2].title}</p>
                  <p className="text-gray-500 text-sm font-medium">{schoolData.hero.highlights[2].subtitle}</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;