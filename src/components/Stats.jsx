import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaChalkboardTeacher, FaTrophy, FaMedal } from 'react-icons/fa';

const Stats = () => {
  const statsData = [
    { id: 1, icon: FaUsers, value: '6,000+', label: 'Students Enrolled' },
    { id: 2, icon: FaChalkboardTeacher, value: '200+', label: 'Expert Faculty' },
    { id: 3, icon: FaTrophy, value: '90+', label: 'Board Toppers' },
    { id: 4, icon: FaMedal, value: '99+%', label: 'Pass Rate' },
  ];

  return (
    <section className="py-16 bg-[#0f172a] relative z-20 shadow-xl border-t border-yellow-500/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center divide-x-0 md:divide-x md:divide-blue-800/50">
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center px-4 group"
            >
              <stat.icon className="text-4xl text-blue-300 mb-4 group-hover:text-white transition-colors duration-300" />
              <h3 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500 mb-2">
                {stat.value}
              </h3>
              <p className="text-blue-100/80 text-sm md:text-base font-light tracking-wide uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;