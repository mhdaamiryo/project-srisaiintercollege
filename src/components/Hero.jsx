import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiEdit, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const heroSlides = [
  {
    id: 1,
    badge: "Welcome to Sri Sai Inter College",
    title: "Shaping Futures.",
    highlight: "Since 2006.",
    description: "A premier educational institution in Barabanki providing quality education from Classes 6 to 12, along with dedicated IIT-JEE and NEET preparation.",
    image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=2069&auto=format&fit=crop",
    primaryCta: "Discover More",
    secondaryCta: "Admission Enquiry"
  },
  {
    id: 2,
    badge: "Premium Infrastructure",
    title: "A Campus That",
    highlight: "Inspires Excellence.",
    description: "Experience state-of-the-art smart classrooms, advanced science laboratories, and a safe, inclusive environment designed for holistic student growth.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop",
    primaryCta: "Explore Campus",
    secondaryCta: "View Facilities"
  },
  {
    id: 3,
    badge: "Competitive Edge",
    title: "Target. Prepare.",
    highlight: "Succeed.",
    description: "Join our integrated foundation batches. Get trained by expert faculty to crack the toughest engineering and medical entrance exams with top ranks.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop",
    primaryCta: "IIT-JEE / NEET Wing",
    secondaryCta: "Apply Now"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-Play Logic
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const nextSlide = () => setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));

  const textVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, y: -30, transition: { duration: 0.5, ease: "easeIn" } }
  };

  const imageVariants = {
    initial: { opacity: 0, scale: 1.05 },
    animate: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: "easeOut" } },
    exit: { opacity: 0, transition: { duration: 0.8 } }
  };

  return (
    <section 
      className="relative w-full min-h-[85vh] lg:h-[88vh] bg-[#FAFAFC] overflow-hidden flex flex-col lg:flex-row"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Left Column: Text Content */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 sm:px-12 xl:px-24 py-16 lg:py-0 relative z-20">
        <div className="w-full max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              variants={textVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex flex-col"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="w-8 h-[2px] bg-yellow-500"></div>
                <span className="text-[#0f172a] font-bold tracking-widest uppercase text-xs sm:text-sm">
                  {heroSlides[currentSlide].badge}
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-extrabold text-[#0f172a] leading-[1.1] tracking-tight mb-6">
                {heroSlides[currentSlide].title}<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">
                  {heroSlides[currentSlide].highlight}
                </span>
              </h1>

              <p className="text-gray-600 font-light leading-relaxed mb-10 text-lg sm:text-xl max-w-lg h-auto sm:h-[84px]">
                {heroSlides[currentSlide].description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <button className="group flex items-center justify-center gap-2 bg-[#0f172a] text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:bg-blue-900 shadow-lg hover:shadow-xl hover:shadow-blue-900/20 text-base">
                  {heroSlides[currentSlide].primaryCta}
                  <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <a href="#admission-enquiry" className="group flex items-center justify-center gap-2 bg-white text-[#0f172a] border-2 border-gray-200 px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:border-yellow-500 hover:bg-yellow-50 text-base">
                  {heroSlides[currentSlide].secondaryCta}
                  <FiEdit className="transition-transform duration-300 group-hover:scale-105" />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slider Progress Indicators */}
          <div className="mt-16 flex items-center gap-4">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className="relative h-2 rounded-full overflow-hidden transition-all duration-500 ease-out flex-shrink-0"
                style={{ width: currentSlide === index ? '48px' : '16px' }}
                aria-label={`Go to slide ${index + 1}`}
              >
                <div className="absolute inset-0 bg-gray-300"></div>
                {currentSlide === index && (
                  <motion.div 
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 6, ease: "linear" }}
                    className="absolute inset-0 bg-yellow-500 rounded-full"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column: Dynamic Image Slideshow */}
      <div className="w-full lg:w-1/2 h-[450px] lg:h-full relative z-10 group">
        {/* The wrapper that handles the curved edge and fixes the blank space issue */}
        <div className="absolute inset-0 lg:rounded-l-[120px] overflow-hidden bg-gray-200 shadow-2xl">
          <AnimatePresence mode="popLayout">
            <motion.img
              key={currentSlide}
              variants={imageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              src={heroSlides[currentSlide].image}
              alt={heroSlides[currentSlide].badge}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* Premium Dark Overlay */}
          <div className="absolute inset-0 bg-[#0f172a]/15 mix-blend-multiply pointer-events-none z-10"></div>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute bottom-8 right-8 z-20 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden lg:flex">
          <button 
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white hover:bg-yellow-500 hover:text-[#0f172a] hover:border-yellow-500 transition-all duration-300"
          >
            <FiChevronLeft className="text-2xl" />
          </button>
          <button 
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white hover:bg-yellow-500 hover:text-[#0f172a] hover:border-yellow-500 transition-all duration-300"
          >
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;