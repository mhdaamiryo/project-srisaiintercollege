import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiMaximize2 } from 'react-icons/fi';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: 'Academic Excellence',
      category: 'Classroom',
      image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070&auto=format&fit=crop',
      description: 'Students engaged in interactive learning sessions inside our modern smart classrooms.'
    },
    {
      id: 2,
      title: 'Scientific Exploration',
      category: 'Laboratory',
      image: 'https://images.unsplash.com/photo-1517817748493-49ec54a32465?q=80&w=2070&auto=format&fit=crop',
      description: 'Hands-on practical experiments conducted under expert supervision in the science lab.'
    },
    {
      id: 3,
      title: 'Resource Center',
      category: 'Library',
      image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop',
      description: 'Our extensive library providing a peaceful environment for deep study and research.'
    },
    {
      id: 4,
      title: 'Annual Sports Meet',
      category: 'Sports',
      image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop',
      description: 'Fostering teamwork, discipline, and athletic talent during our competitive sports events.'
    },
    {
      id: 5,
      title: 'Cultural Celebrations',
      category: 'Events',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2070&auto=format&fit=crop',
      description: 'Showcasing student creativity, performing arts, and rich cultural traditions at the annual fest.'
    },
    {
      id: 6,
      title: 'Campus Infrastructure',
      category: 'Campus',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop',
      description: 'A view of our premium, safe, and state-of-the-art academic institution campus.'
    }
  ];

  // Framer Motion Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="gallery">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-50/60 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-50/60 rounded-full blur-3xl translate-y-1/2 translate-x-1/4 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-yellow-500"></div>
            <span className="text-blue-950 font-semibold tracking-widest uppercase text-sm">
              Visual Journey
            </span>
            <div className="w-12 h-[2px] bg-yellow-500"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-950 tracking-tight mb-4">
            Campus <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">Gallery</span>
          </h2>
          <p className="text-gray-600 text-lg font-light leading-relaxed">
            Explore life at Sri Sai Inter College, showcasing our vibrant academic environment and campus activities.
          </p>
        </div>

        {/* Responsive Grid Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              onClick={() => setSelectedImage(item)}
              className="group relative h-80 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl shadow-blue-950/5 hover:shadow-blue-950/15 cursor-pointer transition-all duration-300 border border-gray-100"
            >
              {/* Image Element */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300"></div>

              {/* Hover Zoom Icon Button */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-75">
                <FiMaximize2 className="text-lg text-yellow-400" />
              </div>

              {/* Content Text Overlay */}
              <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end text-white transform transition-transform duration-300">
                <span className="text-xs font-bold uppercase tracking-widest text-yellow-400 mb-1.5 opacity-90">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold tracking-wide mb-1 text-white group-hover:text-yellow-350 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-blue-100/80 font-light line-clamp-2 max-h-0 opacity-0 group-hover:max-h-16 group-hover:opacity-100 transition-all duration-500 ease-in-out mt-1">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal / Pop-up view */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-blue-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10"
          >
            {/* Modal Box Container */}
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl flex flex-col border border-white/10"
            >
              {/* Close Button Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-blue-950/80 hover:bg-yellow-500 text-white hover:text-blue-950 transition-all duration-300 group focus:outline-none backdrop-blur-sm"
                aria-label="Close modal"
              >
                <FiX className="text-2xl transform group-hover:rotate-90 transition-transform duration-300" />
              </button>

              {/* Main Image in Modal */}
              <div className="w-full max-h-[60vh] overflow-hidden bg-blue-950">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain mx-auto"
                />
              </div>

              {/* Text Description Box */}
              <div className="p-6 sm:p-8 bg-white border-t border-gray-50">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-blue-50 text-blue-900 text-xs font-bold uppercase tracking-widest rounded-full border border-blue-100">
                    {selectedImage.category}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-blue-950 mb-3 tracking-tight">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-650 leading-relaxed font-light text-sm sm:text-base">
                  {selectedImage.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;