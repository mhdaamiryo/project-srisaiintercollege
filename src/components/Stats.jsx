import React from 'react';
import { motion } from 'framer-motion';
import { schoolData } from '../data/schoolData'; // Adjust path as needed

const Stats = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative py-24 bg-blue-950 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {schoolData.stats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center group hover:bg-white/10 transition-colors duration-300 shadow-xl"
            >
              <div className="w-16 h-16 rounded-full bg-blue-900/50 border border-yellow-500/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-yellow-500 transition-all duration-300 shadow-[0_0_15px_rgba(234,179,8,0.1)] group-hover:shadow-[0_0_25px_rgba(234,179,8,0.2)]">
                <stat.icon className="text-3xl text-yellow-500" />
              </div>
              <h3 className="text-3xl lg:text-4xl font-extrabold text-white mb-2 tracking-tight">
                {stat.value}
              </h3>
              <p className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600 mb-3">
                {stat.label}
              </p>
              <p className="text-sm text-blue-100/70 font-light leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;