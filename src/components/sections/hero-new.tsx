'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -500]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Animation variants for the wave effect - all letters start and end together
  const letterVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.02, // Small delay for wave effect
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  const renderAnimatedText = (text: string) => {
    return text.split('').map((char, index) => (
      <motion.span
        key={index}
        custom={index}
        variants={letterVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        className={char === ' ' ? 'inline-block w-2' : 'inline-block'}
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    ));
  };

  return (
    <>
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div 
          style={{ y }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/image-assets/hero-bathroom-image.jpg"
            alt="Premium bathroom renovation"
            fill
            className="object-cover"
            priority
          />
          {/* Semi-transparent overlay to make text pop */}
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        {/* Content - Left Aligned */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            {/* Main Headline with Wave Animation */}
            <div className="mb-8">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                <span className="block text-white">
                  {renderAnimatedText('Transform your ')}
                  <span className="text-burgundy">
                    {renderAnimatedText('Dream Space')}
                  </span>
                </span>
              </h1>
              
              {/* Subtitle with Wave Animation */}
              <p className="text-xl sm:text-2xl text-white leading-relaxed">
                {renderAnimatedText('Premium kitchen and bathroom remodeling with expert craftsmanship, innovative design, and unmatched attention to detail.')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Grey Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="bg-gray-600 text-white py-4 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left space-y-2 md:space-y-0 md:space-x-6">
            <span className="font-bold text-lg">Reputation Builders & Handyman Services</span>
            <span className="hidden md:inline text-gray-300">|</span>
            <span className="text-gray-200">Schedule a Consultation</span>
            <span className="hidden md:inline text-gray-300">|</span>
            <a 
              href="tel:2093124169" 
              className="text-red-300 hover:text-white transition-colors font-medium"
            >
              Call Us: (209) 312-4169
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
}
