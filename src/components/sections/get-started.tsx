'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export function GetStarted() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="get-started" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              It Starts With a
              <span className="text-black"> Conversation</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed text-center lg:text-left">
              Every great project begins with understanding your vision. Let's talk about what you want to build.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto"
        >
          {/* Circle with Handshake Icon - Left Side */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-80 h-80 border-4 border-black rounded-full bg-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <Image
                src="/image-assets/get-started/business-handshake.png"
                alt="Business Handshake"
                width={340}
                height={340}
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* Content - Right Side */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold text-black mb-6">Initial Consultation</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We meet to discuss your vision, assess your space, and understand your budget and timeline requirements. 
                After 35+ years in the trade, we know the right questions to ask and how to turn your ideas into actionable plans.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                This conversation sets the foundation for everything that follows. We listen carefully, offer honest guidance, 
                and ensure we're the right fit for your project before moving forward.
              </p>
              <div className="flex justify-center lg:justify-start">
                <motion.button
                  className="inline-flex items-center border-2 border-black text-black px-8 py-4 text-lg font-bold hover:bg-gray-200 hover:text-black transition-colors shadow-lg rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule Free Consultation
                  <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
