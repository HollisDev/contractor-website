'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export function OurServices() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const services = [
    {
      title: "Outdoor Structure Installation",
      image: "/image-assets/our-services/services-complete-home-remodels.jpg"
    },
    {
      title: "Home Additions",
      image: "/image-assets/our-services/services-home-additions.jpg"
    },
    {
      title: "Kitchen Remodels", 
      image: "/image-assets/our-services/services-kitchen-remodels.jpg"
    },
    {
      title: "Primary Suites & Bathrooms",
      image: "/image-assets/our-services/services-primary-suites-and-bathrooms.jpg"
    },
    {
      title: "Attic & Basements",
      image: "/image-assets/our-services/services-attic-and-basements.jpg"
    },
    {
      title: "Fences & Gates",
      image: "/image-assets/our-services/services-outdoor-living.jpg"
    },
    {
      title: "Velux Skylights",
      image: "/image-assets/our-services/services-velux-skylights-low-e3-upgrades.webp"
    },
    {
      title: "Dry Rot Repair",
      image: "/image-assets/our-services/services-dry-rot-repair.jpg"
    },
    {
      title: "Lighting & Electrical",
      image: "/image-assets/our-services/services-lighting-and-electrical.jpg"
    },
    {
      title: "Stone Facades",
      image: "/image-assets/our-services/services-stone-facades.jpg"
    }
  ];

  // Auto-rotate images on mobile only (when not hovered and on mobile)
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered && window.innerWidth < 1024) { // Only on mobile screens
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % services.length);
      }
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [isHovered]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="our-services" className="relative bg-white py-32 px-4 sm:px-6 lg:px-8">
      {/* Background decorative elements - mirrored from about us */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-16 w-32 h-32 bg-black rounded-full"></div>
        <div className="absolute bottom-32 right-20 w-24 h-24 bg-black rounded-full"></div>
      </div>
      
      <div className="max-w-none mx-auto px-8 sm:px-12 lg:px-16 relative z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          
          {/* Left Column - Image Display - Desktop Only */}
          <motion.div className="relative order-2 lg:order-1 hidden lg:block" variants={itemVariants}>
            <div className="relative h-[1000px] w-full rounded-2xl shadow-2xl overflow-hidden">
              <Image
                src={services[currentImageIndex].image ?? "/image-assets/our-services/services-default.jpg"}
                alt={services[currentImageIndex].title}
                fill
                className="object-cover transition-opacity duration-500"
                priority
              />
            </div>
            
            {/* "Almost Anything You Need" beneath image - Desktop Only */}
            <motion.div 
              className="mt-8 text-center lg:text-left hidden lg:block"
              variants={itemVariants}
            >
              <div className="bg-gray-800/5 p-6 rounded-xl border-l-4 border-black">
                <motion.p 
                  className="text-xl md:text-2xl lg:text-2xl font-bold text-black mb-2 tracking-wide"
                >
                  Almost Anything You Need
                </motion.p>
                <p className="text-gray-700 text-lg">
                  From small repairs to full renovations
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div className="space-y-8 order-1 lg:order-2 text-center lg:text-left" variants={itemVariants}>
            {/* Section Header */}
            <div>
              <motion.h3 
                className="text-xl md:text-2xl lg:text-2xl font-semibold text-black mb-6 tracking-wide"
                variants={itemVariants}
              >
                Our Services
              </motion.h3>
              <motion.h2 
                className="text-4xl md:text-7xl lg:text-7xl font-extrabold text-black leading-tight mb-8"
                variants={itemVariants}
              >
                Elevating Your Living Space, Enhancing Your Quality of Life
              </motion.h2>
              <motion.p 
                className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-12"
                variants={itemVariants}
              >
                Fusing the disciplines of design and construction into one design-build company in Modesto assures that we achieve your vision, time, cost, and quality expectations.
              </motion.p>
              
              
            </div>

            {/* Desktop Layout - Services List Only */}
            <div className="hidden lg:block">
              <motion.div className="space-y-0" variants={itemVariants}>
                {/* Instruction Message */}
                <div className="mb-8">
                  <p className="text-gray-500 text-sm italic">
                    Hover over each service below to see examples of our work
                  </p>
                </div>
                
                {services.map((service, index) => (
                  <div key={index} className="group">
                    <div 
                      className="py-6 transition-colors duration-300 hover:bg-gray-50 rounded-lg px-4 cursor-pointer"
                      onMouseEnter={() => {
                        setCurrentImageIndex(index);
                        setIsHovered(true);
                      }}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      <h4 className="text-2xl font-semibold text-gray-700 group-hover:text-black transition-colors duration-300 mb-2">
                        {service.title}
                      </h4>
                      {index < services.length - 1 && (
                        <div className="w-full h-px bg-gray-300 mt-4"></div>
                      )}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

        {/* Mobile Layout - Carousel Style */}
        <div className="lg:hidden">
          <motion.div className="space-y-6" variants={itemVariants}>
            {/* Instruction Message */}
            <div className="text-center mb-8">
              <p className="text-gray-500 text-sm italic">
                Our services automatically rotate below
              </p>
            </div>
            
            {/* Mobile Carousel */}
            <div className="text-center">
              <motion.div
                className="relative h-[300px] rounded-lg overflow-hidden shadow-lg mb-6"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={services[currentImageIndex].image}
                      alt={services[currentImageIndex].title}
                      fill
                      className="object-cover"
                      sizes="100vw"
                      priority={currentImageIndex === 0}
                    />
                  </motion.div>
                </AnimatePresence>
              </motion.div>
              
              {/* Current Service Title */}
              <h4 className="text-xl font-semibold text-gray-700 mb-2">
                {services[currentImageIndex].title}
              </h4>
              
              {/* Dots Indicator */}
              <div className="flex justify-center space-x-2 mt-4">
                {services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      index === currentImageIndex ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
