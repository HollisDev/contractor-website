'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export function WhyChooseUs() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      title: 'Expert Craftsmanship',
      description: 'Over 20 years of experience transforming homes with precision and artistry.',
      icon: '🔨'
    },
    {
      title: 'Design-Build Approach',
      description: 'Streamlined process from concept to completion under one trusted roof.',
      icon: '📐'
    },
    {
      title: 'Premium Materials',
      description: 'Only the finest materials and fixtures for lasting beauty and durability.',
      icon: '💎'
    },
    {
      title: 'Local Expertise',
      description: 'Modesto-based team with deep understanding of local styles and needs.',
      icon: '🏠'
    },
    {
      title: 'Transparent Process',
      description: 'Clear communication and honest pricing throughout your project journey.',
      icon: '💬'
    },
    {
      title: 'Guaranteed Satisfaction',
      description: 'We stand behind our work with comprehensive warranties and ongoing support.',
      icon: '✨'
    }
  ];

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
    <section id="why-choose-us" className="relative bg-gray-50 pt-48 pb-56 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-32 left-16 w-24 h-24 bg-gray-800 rounded-full"></div>
        <div className="absolute bottom-64 right-24 w-32 h-32 bg-gray-800 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-gray-800 rounded-full"></div>
      </div>

      <div className="max-w-none mx-auto px-8 sm:px-12 lg:px-16 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          <motion.h3 
            className="text-2xl font-medium text-black mb-6 tracking-wide"
            variants={itemVariants}
          >
            Why Choose Us
          </motion.h3>
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl text-black leading-tight mb-8 max-w-4xl mx-auto"
            variants={itemVariants}
          >
            Excellence in Every Detail
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto"
            variants={itemVariants}
          >
            When you choose Reputation Builders, you're choosing a team 
            that's committed to transforming your vision into reality with unmatched expertise.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`group relative p-8 rounded-2xl border-l-4 border-black transition-all duration-500 cursor-pointer ${
                hoveredFeature === index 
                  ? 'text-white shadow-2xl scale-105' 
                  : 'bg-white hover:bg-gray-50 shadow-lg'
              }`}
              style={{
                backgroundColor: hoveredFeature === index ? 'rgba(0, 0, 0, 0.15)' : undefined
              }}
              variants={itemVariants}
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
              whileHover={{ y: -8 }}
            >
              {/* Icon */}
              <div className="text-4xl mb-6">
                {feature.icon}
              </div>

              {/* Content */}
              <h4 className={`text-xl font-bold mb-4 transition-colors duration-500 ${
                hoveredFeature === index ? 'text-black' : 'text-black'
              }`}>
                {feature.title}
              </h4>
              
              <p className={`text-lg leading-relaxed transition-colors duration-500 ${
                hoveredFeature === index ? 'text-gray-800' : 'text-gray-700'
              }`}>
                {feature.description}
              </p>

              {/* Decorative corner */}
              <div className={`absolute top-4 right-4 w-8 h-8 transition-all duration-500 ${
                hoveredFeature === index ? 'bg-gray-800 opacity-20' : 'bg-gray-800 opacity-5'
              } rounded-full`}></div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Grey Bar - Full width across entire screen */}
      <div
        className="absolute left-0 right-0 w-screen text-white py-6 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: '#58595b', bottom: '24px' }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left space-y-3 md:space-y-0 md:space-x-8">
            <div className="text-2xl text-white leading-tight">
              Reputation Builders
            </div>
            <span className="hidden md:inline text-gray-200 text-4xl">|</span>
            <span className="text-white text-xl">Schedule a Consultation</span>
            <span className="hidden md:inline text-gray-200 text-4xl">|</span>
            <a 
              href="tel:2093124169" 
              className="text-white hover:text-gray-200 transition-colors font-semibold text-xl"
            >
              Call Us: (209) 312-4169
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
