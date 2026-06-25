import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiArrowRight, FiBell } from 'react-icons/fi';

const Notices = () => {
  const noticesData = [
    {
      id: 1,
      date: 'June 15, 2026',
      tag: 'Admissions',
      title: 'Admission Open for Academic Session 2026-27',
      description: 'Registrations are now open for Classes 6 to 12. Secure your child\'s future with our integrated academic program and modern infrastructure.',
      isNew: true,
    },
    {
      id: 2,
      date: 'June 10, 2026',
      tag: 'Academics',
      title: 'IIT-JEE & NEET Foundation Batch Registration',
      description: 'Enrollments have commenced for the specialised competitive coaching program targeting premier engineering and medical entrance exams.',
      isNew: true,
    },
    {
      id: 3,
      date: 'May 28, 2026',
      tag: 'Events',
      title: 'Parent Teacher Meeting Schedule',
      description: 'The upcoming bi-monthly performance review conference is scheduled for all classes to discuss semester progress and holistic assessment.',
      isNew: false,
    },
    {
      id: 4,
      date: 'May 15, 2026',
      tag: 'Sports',
      title: 'Annual Sports Day Announcement',
      description: 'Detailed guidelines, field event registrations, and schedule distribution for the upcoming inter-house athletic championships.',
      isNew: false,
    },
  ];

  // Framer Motion Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
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
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="py-24 bg-[#FAFAFC] relative overflow-hidden" id="notices">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-50/40 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={headerVariants}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-yellow-500"></div>
            <span className="text-blue-950 font-semibold tracking-widest uppercase text-sm">
              Notice Board
            </span>
            <div className="w-12 h-[2px] bg-yellow-500"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-950 tracking-tight mb-4">
            Latest Notices & <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">Announcements</span>
          </h2>
          <p className="text-gray-600 text-lg font-light leading-relaxed">
            Stay updated with the crucial administrative briefs, calendar schedules, and academic bulletins.
          </p>
        </motion.div>

        {/* Notices Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {noticesData.map((notice) => (
            <motion.div
              key={notice.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_4px_25px_rgb(0,0,0,0.02)] hover:shadow-[0_12px_35px_rgb(0,30,100,0.06)] transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
            >
              {/* Premium Gold Side-Indicator Flag */}
              <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-b from-yellow-400 to-yellow-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
              
              <div>
                {/* Meta Row: Date, Category and Alert Flag */}
                <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
                  <div className="flex items-center gap-2 text-gray-450 text-sm">
                    <FiCalendar className="text-yellow-600" />
                    <span className="font-light">{notice.date}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-blue-50 text-blue-950 text-xs font-bold uppercase tracking-wider rounded-md border border-blue-100/60">
                      {notice.tag}
                    </span>
                    {notice.isNew && (
                      <span className="flex items-center gap-1 px-2 py-1 bg-red-50 text-red-600 text-[10px] font-bold uppercase tracking-wider rounded-md animate-pulse">
                        <FiBell /> New
                      </span>
                    )}
                  </div>
                </div>

                {/* Notice Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-blue-950 tracking-wide mb-3 leading-snug group-hover:text-blue-900 transition-colors duration-300">
                  {notice.title}
                </h3>

                {/* Description */}
                <p className="text-gray-650 font-light leading-relaxed text-sm sm:text-base mb-6 line-clamp-3">
                  {notice.description}
                </p>
              </div>

              {/* Action Trigger Line */}
              <div className="pt-4 border-t border-gray-50 flex items-center">
                <button className="flex items-center gap-2 text-blue-950 font-semibold text-sm tracking-wide group-hover:text-yellow-600 transition-colors duration-300 focus:outline-none">
                  Read Full Notice
                  <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Notices;