'use client';

import { ImagesSlider } from "@/components/ui/images-slider";
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Hero images for the carousel
  const heroImages = [
    "/image-assets/hero-living-room-image.jpg",
    "/image-assets/hero-kitchen-image.jpg", 
    "/image-assets/hero-bathroom-image.jpg",
    "/image-assets/hero-backyard-image.jpg",
    "/image-assets/hero-backyard-pool-image.jpg"
  ];

  // Animation variants for the wave effect - all lines wave simultaneously
  const letterVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (position: { x: number, y: number }) => ({
      y: 0,
      opacity: 1,
      transition: {
        // Faster wave for subtitle line, normal speed for title
        delay: position.y === 0 
          ? (position.x * 0.05) + 0.2    // Title: normal speed
          : (position.x * 0.02) + 0.2,   // Subtitle: faster wave, same start time
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  // Create wave animation that flows across all lines simultaneously
  const renderWaveText = (text: string, lineIndex: number, isHighlight = false) => {
    return text.split('').map((char, charIndex) => (
      <motion.span
        key={`${lineIndex}-${charIndex}-${isHighlight ? 'highlight' : 'normal'}`}
        custom={{ x: isHighlight ? charIndex : charIndex, y: lineIndex }}
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
    <div className="relative">
      {/* Hero Section with Image Carousel */}
      <ImagesSlider
        className="h-[110vh]"
        images={heroImages}
        overlay={false}
        autoplay={true}
        direction="up"
      >
        {/* Semi-transparent overlay to make text pop */}
        <div className="absolute inset-0 bg-black/40 z-40" />
        
        <div className="relative z-50 flex h-full items-center justify-center pt-18">
          {/* Content - Centered */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center justify-center text-center">
            <div className="max-w-5xl">
              {/* Main Headline with Wave Animation */}
              <div className="mb-8">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 drop-shadow-lg">
                  <span className="block text-white">
                    {renderWaveText('Transform your ', 0)}
                    <span className="text-burgundy drop-shadow-md">
                      {renderWaveText('Dream Space', 0, true)}
                    </span>
                  </span>
                </h1>
                
                {/* Subtitle with Wave Animation */}
                <p className="text-xl sm:text-2xl text-white leading-relaxed drop-shadow-md max-w-4xl mx-auto">
                  <span className="block">
                    {renderWaveText('Premium kitchen, bathroom, and general house remodeling with', 1)}
                  </span>
                  <span className="block">
                    {renderWaveText('expert craftsmanship, innovative design, and unmatched attention to detail.', 1)}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Grey Bar - Positioned at bottom of slider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-0 left-0 right-0 z-50 text-white py-6 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: '#58595b' }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left space-y-3 md:space-y-0 md:space-x-8">
              <div className="text-2xl text-white leading-tight">
                <div className="border-b-2 border-white pb-1">Reputation Builders &</div>
                <div className="text-xl pt-1">Handyman Services</div>
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
        </motion.div>
      </ImagesSlider>
    </div>
  );
}
