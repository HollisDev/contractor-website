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
    "/image-assets/hero-kitchen-imageb.jpg",
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
        style={{ textAlign: 'inherit' }}
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    ));
  };

  return (
    <div className="relative -mt-[1px]">
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
        
        <div className="relative z-50 flex h-full items-center justify-center">
          {/* Content - Centered */}
          <div className="w-full text-center px-4 sm:px-6 lg:px-8">
            <div className="mx-auto">
              {/* Main Headline with Wave Animation */}
              <div className="mb-8">
                <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 drop-shadow-lg">
                  <span className="block text-white text-center">
                    {renderWaveText('Transform Your ', 0)}
                  </span>
                  <span className="block text-white drop-shadow-md text-center">
                    {renderWaveText('Dream Space', 0, true)}
                  </span>
                </h1>
                
                {/* Subtitle with Wave Animation */}
                <div className="w-full flex justify-center">
                  <div className="text-base sm:text-lg md:text-2xl text-white leading-relaxed drop-shadow-md text-center max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl">
                    <div className="w-full flex justify-center mb-2">
                      <span className="text-center">
                        {renderWaveText('Premium kitchen, bathroom, and general house remodeling with', 1)}
                      </span>
                    </div>
                    <div className="w-full flex justify-center">
                      <span className="text-center">
                        {renderWaveText('expert craftsmanship, innovative design, and unmatched attention to detail.', 1)}
                      </span>
                    </div>
                  </div>
                </div>
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
              <div className="text-lg sm:text-xl md:text-2xl text-white leading-tight">
                Reputation Builders
              </div>
              <span className="hidden md:inline text-gray-200 text-4xl">|</span>
              <span className="text-white text-lg sm:text-xl">Schedule a Consultation</span>
              <span className="hidden md:inline text-gray-200 text-4xl">|</span>
              <a 
                href="tel:2093124169" 
                className="text-white hover:text-gray-200 transition-colors font-semibold text-lg sm:text-xl"
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
