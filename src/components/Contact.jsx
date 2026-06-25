import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiUser, FiLayers, FiMessageSquare, FiSend } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    phone: '',
    targetClass: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Enquiry Submitted:', formData);
  };

  const contactDetails = [
    {
      id: 1,
      icon: FiMapPin,
      title: 'Our Location',
      lines: ['Sri Sai Inter College', 'Barabanki, Uttar Pradesh']
    },
    {
      id: 2,
      icon: FiPhone,
      title: 'Call Us',
      lines: ['+91 88746 67588', '+91 99368 16482']
    },
    {
      id: 3,
      icon: FiMail,
      title: 'Email Address',
      lines: ['ssic.nsd@gmail.com']
    }
  ];

  // Framer Motion Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <section className="py-24 bg-[#FAFAFC] relative overflow-hidden" id="contact">
      {/* Decorative Background Blurred Blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-50/40 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
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
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">Us</span>
          </h2>
          <p className="text-gray-600 text-lg font-light leading-relaxed">
            Get in touch with Sri Sai Inter College for queries, admissions, or campus visits.
          </p>
        </motion.div>

        {/* Responsive Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Premium Information Cards */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {contactDetails.map((detail) => (
              <motion.div
                key={detail.id}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgb(0,30,100,0.05)] transition-all duration-300 flex gap-6 items-start group"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center text-2xl group-hover:bg-blue-950 group-hover:text-yellow-400 transition-colors duration-300 shrink-0 shadow-sm">
                  <detail.icon />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-blue-950 tracking-wide mb-2">
                    {detail.title}
                  </h3>
                  {detail.lines.map((line, idx) => (
                    <p key={idx} className="text-gray-600 font-light leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column: Admission Enquiry Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            {/* Modern Glassmorphism Card */}
            <div className="bg-white/70 backdrop-blur-md border border-white p-8 sm:p-10 rounded-3xl shadow-[0_10px_40px_rgba(15,23,42,0.04)] relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
              
              <h3 className="text-2xl font-bold text-blue-950 mb-2 tracking-wide">
                Admission Enquiry Form
              </h3>
              <p className="text-gray-500 font-light text-sm mb-8">
                Please fill out the form below, and our admissions team will contact you shortly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Student Name */}
                  <div className="relative">
                    <label className="block text-xs font-semibold text-blue-950 uppercase tracking-wider mb-2">Student Name</label>
                    <div className="relative">
                      <FiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        name="studentName"
                        value={formData.studentName}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter full name"
                        className="w-full bg-white border border-gray-200 rounded-xl py-3.5 pl-11 pr-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-950 focus:ring-1 focus:ring-blue-950 transition-all text-sm"
                      />
                    </div>
                  </div>

                  {/* Parent Name */}
                  <div className="relative">
                    <label className="block text-xs font-semibold text-blue-950 uppercase tracking-wider mb-2">Parent Name</label>
                    <div className="relative">
                      <FiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter parent or guardian name"
                        className="w-full bg-white border border-gray-200 rounded-xl py-3.5 pl-11 pr-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-950 focus:ring-1 focus:ring-blue-950 transition-all text-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone Number */}
                  <div className="relative">
                    <label className="block text-xs font-semibold text-blue-950 uppercase tracking-wider mb-2">Phone Number</label>
                    <div className="relative">
                      <FiPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="10-digit mobile number"
                        className="w-full bg-white border border-gray-200 rounded-xl py-3.5 pl-11 pr-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-950 focus:ring-1 focus:ring-blue-950 transition-all text-sm"
                      />
                    </div>
                  </div>

                  {/* Class Selection */}
                  <div className="relative">
                    <label className="block text-xs font-semibold text-blue-950 uppercase tracking-wider mb-2">Seeking Class Admission</label>
                    <div className="relative">
                      <FiLayers className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <select
                        name="targetClass"
                        value={formData.targetClass}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-white border border-gray-200 rounded-xl py-3.5 pl-11 pr-4 text-gray-700 focus:outline-none focus:border-blue-950 focus:ring-1 focus:ring-blue-950 transition-all text-sm appearance-none"
                      >
                        <option value="" disabled>Select target class</option>
                        {['Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10', 'Class 11 (Science)', 'Class 11 (Commerce)', 'Class 12 (Science)', 'Class 12 (Commerce)'].map((cls) => (
                          <option key={cls} value={cls}>{cls}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Message Field */}
                <div className="relative">
                  <label className="block text-xs font-semibold text-blue-950 uppercase tracking-wider mb-2">Message / Remarks</label>
                  <div className="relative">
                    <FiMessageSquare className="absolute left-4 top-4 text-gray-400" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      placeholder="Type your message here..."
                      className="w-full bg-white border border-gray-200 rounded-xl py-3.5 pl-11 pr-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-950 focus:ring-1 focus:ring-blue-950 transition-all text-sm resize-none"
                    ></textarea>
                  </div>
                </div>

                {/* Submit Trigger */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-blue-950 text-white py-4 px-6 rounded-xl font-medium tracking-wide shadow-lg shadow-blue-950/10 hover:bg-blue-900 transition-colors duration-300"
                >
                  Submit Enquiry
                  <FiSend className="text-sm text-yellow-400" />
                </motion.button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;