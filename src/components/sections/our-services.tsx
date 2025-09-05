'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export function OurServices() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
      title: "Velux Skylights — Low E3 Upgrades",
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
          
          {/* Left Column - Image Display */}
          <motion.div className="relative order-2 lg:order-1" variants={itemVariants}>
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[1000px] w-full rounded-2xl shadow-2xl overflow-hidden">
              <Image
                src={services[currentImageIndex].image ?? "/image-assets/our-services/services-default.jpg"}
                alt={services[currentImageIndex].title}
                fill
                className="object-cover transition-opacity duration-500"
                priority
              />
            </div>
            
            {/* "Almost Anything You Need" beneath image */}
            <motion.div 
              className="mt-8 text-center lg:text-left"
              variants={itemVariants}
            >
              <div className="bg-gray-800/5 p-6 rounded-xl border-l-4 border-black">
                <motion.p 
                  className="text-2xl lg:text-3xl text-black mb-2 tracking-wide"
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
                className="text-2xl font-medium text-black mb-6 tracking-wide"
                variants={itemVariants}
              >
                Our Services
              </motion.h3>
              <motion.h2 
                className="text-4xl lg:text-6xl text-black leading-tight mb-8"
                variants={itemVariants}
              >
                Elevating Your Living Space, Enhancing Your Quality of Life
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-700 leading-relaxed mb-12"
                variants={itemVariants}
              >
                Fusing the disciplines of design and construction into one design-build company in Modesto assures that we achieve your vision, time, cost, and quality expectations.
              </motion.p>
              
              {/* Copper Creek Specialization Callout */}
              <motion.div 
                className="relative mb-12"
                variants={itemVariants}
              >
                <div className="relative bg-gradient-to-r from-gray-800/5 to-gray-800/10 p-8 rounded-2xl border-l-4 border-black">
                  <div className="absolute top-4 right-4 w-12 h-12 bg-gray-800/10 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-gray-800 rounded-full"></div>
                  </div>
                  <motion.p 
                    className="text-2xl lg:text-3xl text-black mb-3 tracking-wide"
                    style={{
                      background: 'linear-gradient(135deg, #000000 0%, #333333 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'linear'
                    }}
                  >
                    ✦ SPECIALIZING IN ✦
                  </motion.p>
                  <motion.h3 
                    className="text-3xl lg:text-4xl text-black mb-2 tracking-wider"
                    style={{
                      textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    COPPER CREEK HOMES
                  </motion.h3>
                  <p className="text-gray-600 text-lg italic">
                    Expert craftsmanship tailored for Copper Creek's distinctive architectural style
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Services List */}
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
                    className="py-6 transition-colors duration-300 hover:bg-gray-50 rounded-lg px-4"
                    onMouseEnter={() => setCurrentImageIndex(index)}
                  >
                    <h4 className="text-xl font-semibold text-gray-700 group-hover:text-black transition-colors duration-300 mb-2">
                      {service.title}
                    </h4>
                    {index < services.length - 1 && (
                      <div className="w-full h-px bg-gray-300 mt-4"></div>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
