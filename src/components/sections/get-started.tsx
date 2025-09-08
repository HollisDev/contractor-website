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
  <section id="get-started" className="py-20 bg-gray-50" style={{ scrollMarginTop: '128px' }}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl ml-auto -mr-12"
      >
        {/* Handshake Circle */}
        <motion.div variants={itemVariants} className="flex-shrink-0">
          <div className="w-56 h-56 lg:w-72 lg:h-72 rounded-full bg-white shadow-xl flex items-center justify-center border-4 border-black mx-auto lg:mx-0 overflow-hidden">
            <Image
              src="/image-assets/get-started/business-handshake.png"
              alt="Business Handshake"
              width={500}
              height={500}
              className="object-contain scale-[1.85]"
              priority
            />
          </div>
        </motion.div>

        {/* Text & CTA */}
        <motion.div variants={itemVariants} className="flex-1 text-center lg:text-left">
          <h2 className="text-4xl md:text-7xl lg:text-7xl font-extrabold text-black mb-4 tracking-tight">
            It Starts With a Conversation
          </h2>
          <h3 className="text-xl md:text-2xl lg:text-2xl text-gray-800 font-semibold mb-6">
            Let’s build your vision together.
          </h3>
          <p className="text-lg lg:text-xl text-gray-700 max-w-2xl mb-8 mx-auto lg:mx-0 leading-relaxed">
            Every great project begins with understanding your goals. We listen, advise, and help you take the first step toward a space you’ll love.
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center border-2 border-black bg-white text-black px-8 py-4 text-xl font-bold hover:bg-gray-800 hover:text-white transition-colors shadow-lg rounded-lg cursor-default"
          >
            Schedule Free Consultation
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  </section>
  );
}
