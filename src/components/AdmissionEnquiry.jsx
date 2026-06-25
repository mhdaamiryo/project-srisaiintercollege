import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiFileText, 
  FiUsers, 
  FiCheckCircle, 
  FiAward, 
  FiUser, 
  FiPhone, 
  FiLayers, 
  FiGitBranch, 
  FiMessageSquare, 
  FiSend, 
  FiLoader 
} from 'react-icons/fi';

// EmailJS Config Slots - Replace these values with your actual EmailJS credentials
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_ezzf1ja',
  TEMPLATE_ID: 'template_6yie9ky',
  PUBLIC_KEY: 'GLKxLbWz9qtM1TaUJ'
};

const AdmissionEnquiry = () => {
  // Form States
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    mobileNumber: '',
    branch: '',
    classApplying: '',
    message: ''
  });

  const [activeFocus, setActiveFocus] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [classOptions, setClassOptions] = useState([]);

  // Dynamic dropdown handler based on branch selection
  useEffect(() => {
    if (formData.branch === 'UP Board Wing') {
      setClassOptions(['Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12']);
    } else if (formData.branch === 'IIT-JEE / NEET Wing') {
      setClassOptions(['Class 11 (Foundation Batch)', 'Class 12 (Target Batch)', 'Dropper / Repeater Batch']);
    } else {
      setClassOptions([]);
    }
    // Reset selected class if branch changes
    setFormData(prev => ({ ...prev, classApplying: '' }));
  }, [formData.branch]);

  // Handle input values
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Mobile number filter: accept only numbers
    if (name === 'mobileNumber' && value !== '' && !/^\d+$/.test(value)) {
      return;
    }

    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error immediately when user begins correcting fields
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Validate fields before submission
  const validateForm = () => {
    let currentErrors = {};
    if (!formData.studentName.trim()) currentErrors.studentName = 'Student name is required';
    if (!formData.parentName.trim()) currentErrors.parentName = 'Parent name is required';
    
    if (!formData.mobileNumber) {
      currentErrors.mobileNumber = 'Mobile number is required';
    } else if (formData.mobileNumber.length < 10 || formData.mobileNumber.length > 12) {
      currentErrors.mobileNumber = 'Enter a valid mobile number (10-12 digits)';
    }

    if (!formData.branch) currentErrors.branch = 'Please select an academic branch';
    if (!formData.classApplying) currentErrors.classApplying = 'Please select a target class';

    setErrors(currentErrors);
    return Object.keys(currentErrors).length === 0;
  };

  // Submission handler via EmailJS
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Dynamically import emailjs-com browser package to prevent bundle loading issues
      // To install run: npm install @emailjs/browser
      const emailjs = await import('@emailjs/browser');
      
      const templateParams = {
        student_name: formData.studentName,
        parent_name: formData.parentName,
        mobile_number: formData.mobileNumber,
        branch: formData.branch,
        class_applying: formData.classApplying,
        message: formData.message || 'No additional remarks provided.'
      };

      // EmailJS Call execution logic
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      if (response.status === 200) {
        setSubmitStatus('success');
        // Clear inputs upon successful tracking
        setFormData({
          studentName: '',
          parentName: '',
          mobileNumber: '',
          branch: '',
          classApplying: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('EmailJS Submission Error: ', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Interactive configurations for workflow view list
  const admissionSteps = [
    {
      step: '01',
      icon: FiFileText,
      title: 'Fill the Enquiry Form',
      desc: 'Complete our online application request details accurately to initiate registration.'
    },
    {
      step: '02',
      icon: FiUsers,
      title: 'Counselling Session',
      desc: 'Interact with our senior academic mentors to align goals and map educational trajectories.'
    },
    {
      step: '03',
      icon: FiAward,
      title: 'Entrance / Placement Test',
      desc: 'Undergo a fundamental diagnostic assessment tracking foundational competency levels.'
    },
    {
      step: '04',
      icon: FiCheckCircle,
      title: 'Confirm Admission',
      desc: 'Finalize document verification cycles and secure institutional seat layout metrics.'
    }
  ];

  return (
    <section className="py-24 bg-[#FAFAFC] relative overflow-hidden" id="admission-enquiry">
      {/* Structural Blur Overlays */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-50/40 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Left Column: Flow Journey Trackers */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-[2px] bg-yellow-500" />
              <span className="text-blue-950 font-semibold tracking-widest uppercase text-xs sm:text-sm">
                Admissions 2026 - 2027
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-950 tracking-tight leading-tight mb-6">
              Begin Your Journey <br />
              with <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700">SSIC</span>
            </h2>
            
            <p className="text-gray-600 font-light leading-relaxed mb-12 text-base sm:text-lg max-w-md">
              Join an elite ecosystem crafted to deliver academic excellence, structured state board success, and high-performance engineering or medical entrance foundations.
            </p>

            {/* Steps Workflow List */}
            <div className="relative space-y-8 before:absolute before:left-7 before:top-4 before:bottom-4 before:w-[2px] before:bg-gray-200/60">
              {admissionSteps.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex items-start gap-6 relative group"
                >
                  <div className="w-14 h-14 rounded-full bg-white border border-gray-100 flex items-center justify-center font-bold text-blue-950 text-base shadow-sm group-hover:border-yellow-500 group-hover:shadow-md transition-all duration-300 relative z-10 shrink-0">
                    <item.icon className="text-xl text-gray-400 group-hover:text-yellow-600 transition-colors duration-300" />
                    <span className="absolute -top-1.5 -right-1.5 bg-blue-950 text-white font-bold text-[10px] w-5 h-5 rounded-full flex items-center justify-center border border-white">
                      {item.step}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-blue-950 tracking-wide mb-1 group-hover:text-blue-900 transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 font-light text-sm sm:text-base leading-relaxed max-w-sm">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Premium Intelligent Glassmorphism Form */}
          <div className="lg:col-span-7 w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white/80 backdrop-blur-xl border border-white p-8 sm:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(15,23,42,0.04)] relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600" />
              
              <h3 className="text-2xl sm:text-3xl font-extrabold text-blue-950 tracking-tight mb-2">
                Admission Enquiry
              </h3>
              <p className="text-gray-500 font-light text-sm sm:text-base mb-10">
                Submit details below to check path vacancies and initiate registration.
              </p>

              <form onSubmit={handleSubmit} className="space-y-7" noValidate>
                
                {/* Row 1: Names */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                  {/* Student Name */}
                  <div className="relative">
                    <label htmlFor="studentName" className="sr-only">Student Name</label>
                    <div className="relative">
                      <FiUser className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors duration-200 ${activeFocus.studentName ? 'text-blue-950' : 'text-gray-400'}`} />
                      <input
                        type="text"
                        id="studentName"
                        name="studentName"
                        value={formData.studentName}
                        onChange={handleChange}
                        onFocus={() => setActiveFocus(p => ({ ...p, studentName: true }))}
                        onBlur={() => setActiveFocus(p => ({ ...p, studentName: false }))}
                        className={`w-full bg-white/60 border rounded-2xl py-4 pl-12 pr-4 text-gray-800 placeholder-transparent focus:outline-none focus:bg-white transition-all text-sm ${errors.studentName ? 'border-red-400 focus:border-red-400 focus:ring-1 focus:ring-red-400' : 'border-gray-200 focus:border-blue-950 focus:ring-1 focus:ring-blue-950'}`}
                        placeholder="Student Name"
                      />
                      <span className={`absolute left-12 top-1/2 transform -translate-y-1/2 text-sm transition-all duration-200 pointer-events-none tracking-wide ${formData.studentName || activeFocus.studentName ? '-translate-y-[2.3rem] left-4 text-xs font-bold text-blue-950 bg-white px-1.5 rounded' : 'text-gray-400'}`}>
                        Student Name <span className="text-red-500">*</span>
                      </span>
                    </div>
                    {errors.studentName && <p className="text-xs text-red-500 mt-1.5 pl-2">{errors.studentName}</p>}
                  </div>

                  {/* Parent Name */}
                  <div className="relative">
                    <label htmlFor="parentName" className="sr-only">Parent's Name</label>
                    <div className="relative">
                      <FiUser className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors duration-200 ${activeFocus.parentName ? 'text-blue-950' : 'text-gray-400'}`} />
                      <input
                        type="text"
                        id="parentName"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleChange}
                        onFocus={() => setActiveFocus(p => ({ ...p, parentName: true }))}
                        onBlur={() => setActiveFocus(p => ({ ...p, parentName: false }))}
                        className={`w-full bg-white/60 border rounded-2xl py-4 pl-12 pr-4 text-gray-800 placeholder-transparent focus:outline-none focus:bg-white transition-all text-sm ${errors.parentName ? 'border-red-400 focus:border-red-400 focus:ring-1 focus:ring-red-400' : 'border-gray-200 focus:border-blue-950 focus:ring-1 focus:ring-blue-950'}`}
                        placeholder="Parent's Name"
                      />
                      <span className={`absolute left-12 top-1/2 transform -translate-y-1/2 text-sm transition-all duration-200 pointer-events-none tracking-wide ${formData.parentName || activeFocus.parentName ? '-translate-y-[2.3rem] left-4 text-xs font-bold text-blue-950 bg-white px-1.5 rounded' : 'text-gray-400'}`}>
                        Parent's Name <span className="text-red-500">*</span>
                      </span>
                    </div>
                    {errors.parentName && <p className="text-xs text-red-500 mt-1.5 pl-2">{errors.parentName}</p>}
                  </div>
                </div>

                {/* Row 2: Contact Number & Branch selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                  {/* Mobile Number */}
                  <div className="relative">
                    <label htmlFor="mobileNumber" className="sr-only">Mobile Number</label>
                    <div className="relative">
                      <FiPhone className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors duration-200 ${activeFocus.mobileNumber ? 'text-blue-950' : 'text-gray-400'}`} />
                      <input
                        type="text"
                        id="mobileNumber"
                        name="mobileNumber"
                        maxLength="12"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        onFocus={() => setActiveFocus(p => ({ ...p, mobileNumber: true }))}
                        onBlur={() => setActiveFocus(p => ({ ...p, mobileNumber: false }))}
                        className={`w-full bg-white/60 border rounded-2xl py-4 pl-12 pr-4 text-gray-800 placeholder-transparent focus:outline-none focus:bg-white transition-all text-sm ${errors.mobileNumber ? 'border-red-400 focus:border-red-400 focus:ring-1 focus:ring-red-400' : 'border-gray-200 focus:border-blue-950 focus:ring-1 focus:ring-blue-950'}`}
                        placeholder="Mobile Number"
                      />
                      <span className={`absolute left-12 top-1/2 transform -translate-y-1/2 text-sm transition-all duration-200 pointer-events-none tracking-wide ${formData.mobileNumber || activeFocus.mobileNumber ? '-translate-y-[2.3rem] left-4 text-xs font-bold text-blue-950 bg-white px-1.5 rounded' : 'text-gray-400'}`}>
                        Mobile Number *
                      </span>
                    </div>
                    {errors.mobileNumber && <p className="text-xs text-red-500 mt-1.5 pl-2">{errors.mobileNumber}</p>}
                  </div>

                  {/* Branch Selection Dropdown */}
                  <div className="relative">
                    <label htmlFor="branch" className="sr-only">Select Branch / Wing</label>
                    <div className="relative">
                      <FiGitBranch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <select
                        id="branch"
                        name="branch"
                        value={formData.branch}
                        onChange={handleChange}
                        className={`w-full bg-white/60 border rounded-2xl py-4 pl-12 pr-4 text-gray-800 focus:outline-none focus:bg-white transition-all text-sm appearance-none cursor-pointer ${errors.branch ? 'border-red-400' : 'border-gray-200 focus:border-blue-950'}`}
                      >
                        <option value="" disabled hidden></option>
                        <option value="UP Board Wing">UP Board Wing</option>
                        <option value="IIT-JEE / NEET Wing">IIT-JEE / NEET Wing</option>
                      </select>
                      <span className={`absolute left-12 top-1/2 transform -translate-y-1/2 text-sm transition-all duration-200 pointer-events-none tracking-wide ${formData.branch ? '-translate-y-[2.3rem] left-4 text-xs font-bold text-blue-950 bg-white px-1.5 rounded' : 'text-gray-400'}`}>
                        Select Wing <span className="text-red-500">*</span>
                      </span>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                      </div>
                    </div>
                    {errors.branch && <p className="text-xs text-red-500 mt-1.5 pl-2">{errors.branch}</p>}
                  </div>
                </div>

                {/* Row 3: Class applying for selection conditional layout */}
                <div className="relative">
                  <label htmlFor="classApplying" className="sr-only">Class Applying For</label>
                  <div className="relative">
                    <FiLayers className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <select
                      id="classApplying"
                      name="classApplying"
                      value={formData.classApplying}
                      onChange={handleChange}
                      disabled={!formData.branch}
                      className={`w-full bg-white/60 border rounded-2xl py-4 pl-12 pr-4 text-gray-800 focus:outline-none focus:bg-white transition-all text-sm appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${errors.classApplying ? 'border-red-400' : 'border-gray-200 focus:border-blue-950'}`}
                    >
                      <option value="" disabled hidden></option>
                      {classOptions.map((opt, i) => (
                        <option key={i} value={opt}>{opt}</option>
                      ))}
                    </select>
                    <span className={`absolute left-12 top-1/2 transform -translate-y-1/2 text-sm transition-all duration-200 pointer-events-none tracking-wide ${formData.classApplying ? '-translate-y-[2.3rem] left-4 text-xs font-bold text-blue-950 bg-white px-1.5 rounded' : 'text-gray-400'}`}>
                      {!formData.branch ? 'Select a Wing First' : 'Class Applying For *'}
                    </span>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                  {errors.classApplying && <p className="text-xs text-red-500 mt-1.5 pl-2">{errors.classApplying}</p>}
                </div>

                {/* Message Field Area */}
                <div className="relative">
                  <label htmlFor="message" className="sr-only">Message or Remarks</label>
                  <div className="relative">
                    <FiMessageSquare className={`absolute left-4 top-4 transition-colors duration-200 ${activeFocus.message ? 'text-blue-950' : 'text-gray-400'}`} />
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setActiveFocus(p => ({ ...p, message: true }))}
                      onBlur={() => setActiveFocus(p => ({ ...p, message: false }))}
                      className="w-full bg-white/60 border border-gray-200 rounded-2xl py-4 pl-12 pr-4 text-gray-800 placeholder-transparent focus:outline-none focus:bg-white focus:border-blue-950 focus:ring-1 focus:ring-blue-950 transition-all text-sm resize-none"
                      placeholder="Message / Remarks"
                    />
                    <span className={`absolute left-12 top-4 text-sm transition-all duration-200 pointer-events-none tracking-wide ${formData.message || activeFocus.message ? '-translate-y-[2.3rem] left-4 text-xs font-bold text-blue-950 bg-white px-1.5 rounded' : 'text-gray-400'}`}>
                      Message / Remarks (Optional)
                    </span>
                  </div>
                </div>

                {/* Dynamic Submission Feedback Alerts */}
                <AnimatePresence mode="wait">
                  {submitStatus === 'success' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl text-sm font-light leading-relaxed flex items-start gap-3"
                    >
                      <span className="font-bold text-base mt-0.5">✓</span>
                      <p>Thank you! Your enquiry has been submitted successfully. Our admissions team will contact you soon.</p>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 bg-rose-50 border border-rose-200 text-rose-800 rounded-2xl text-sm font-light leading-relaxed flex items-start gap-3"
                    >
                      <span className="font-bold text-base mt-0.5">⚠</span>
                      <p>Something went wrong. Please try again.</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit Configuration Button Trigger */}
                <motion.button
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-3 bg-blue-950 text-white py-4.5 px-6 rounded-2xl font-semibold tracking-wide shadow-xl shadow-blue-950/10 hover:bg-blue-900 disabled:bg-blue-950/70 disabled:cursor-not-allowed transition-all duration-300 group"
                >
                  {isSubmitting ? (
                    <>
                      <FiLoader className="animate-spin text-lg text-yellow-400" />
                      <span>Sending Parameters...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Enquiry</span>
                      <FiSend className="text-sm text-yellow-400 transition-transform duration-300 group-hover:translate-x-1" />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AdmissionEnquiry;