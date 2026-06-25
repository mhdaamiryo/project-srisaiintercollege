import React from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';

const Contact = () => {
  const contactDetails = [
    {
      id: 1,
      icon: FiMapPin,
      title: 'Our Location',
      lines: ['Sri Sai Inter College', 'Barabanki, Uttar Pradesh'],
      actionLabel: 'View on Map',
      actionLink: '#'
    },
    {
      id: 2,
      icon: FiPhone,
      title: 'Call Us',
      lines: ['+91 88746 67588', '+91 99368 16482'],
      actionLabel: 'Call Now',
      actionLink: 'tel:+918874667588'
    },
    {
      id: 3,
      icon: FiMail,
      title: 'Email Address',
      lines: ['ssic.nsd@gmail.com'],
      actionLabel: 'Send Email',
      actionLink: 'mailto:ssic.nsd@gmail.com'
    }
  ];

  // FIXED: Variable names matching properly
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <section className="py-24 bg-[#FAFAFC] relative overflow-hidden" id="contact">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-50/30 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-yellow-500"></div>
            <span className="text-blue-950 font-semibold tracking-widest uppercase text-sm">
              Connect With Us
            </span>
            <div className="w-12 h-[2px] bg-yellow-500"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-950 tracking-tight mb-4">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">Details</span>
          </h2>
          <p className="text-gray-600 text-lg font-light leading-relaxed">
            Reach out through any of our official channels. Our administrative office is ready to assist you.
          </p>
        </motion.div>

        {/* Centered Information Grid */}
        <motion.div 
          variants={containerVariants} // FIXED THIS LINE
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
        >
          {contactDetails.map((detail) => (
            <motion.div
              key={detail.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_4px_25px_rgb(0,0,0,0.02)] hover:shadow-[0_15px_35px_rgb(0,30,100,0.06)] transition-all duration-300 flex flex-col justify-between items-center text-center group relative overflow-hidden"
            >
              {/* Top Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="flex flex-col items-center">
                {/* Icon Circle */}
                <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-900 flex items-center justify-center text-2xl group-hover:bg-[#0f172a] group-hover:text-yellow-400 transition-all duration-300 mb-6 shadow-sm">
                  <detail.icon />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-blue-950 tracking-wide mb-3">
                  {detail.title}
                </h3>
                
                <div className="space-y-1">
                  {detail.lines.map((line, idx) => (
                    <p key={idx} className="text-gray-600 font-light leading-relaxed text-base">
                      {line}
                    </p>
                  ))}
                </div>
              </div>

              {/* Action Trigger Link */}
              <div className="mt-8 pt-4 border-t border-gray-50 w-full text-center">
                <a 
                  href={detail.actionLink}
                  className="inline-block text-sm font-semibold text-blue-950 hover:text-yellow-600 transition-colors duration-200"
                >
                  {detail.actionLabel}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Office Hours Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 flex items-center justify-center gap-3 text-sm text-gray-500 font-light bg-white border border-gray-100 px-6 py-4 rounded-2xl max-w-md mx-auto shadow-sm"
        >
          <FiClock className="text-yellow-600 shrink-0 text-base" />
          <span>Office Hours: Monday – Saturday (8:00 AM – 2:00 PM)</span>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;