'use client';

import { motion } from 'framer-motion';

export function OurPromise() {
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
    <section id="our-promise" className="bg-gray-50 px-4 sm:px-6 lg:px-8" style={{ paddingTop: '136px', paddingBottom: '64px' }}>
      <motion.div 
        className="max-w-3xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <motion.h3 
          className="text-xl font-medium text-black mb-4 tracking-wide uppercase"
          variants={itemVariants}
        >
          Our Promise
        </motion.h3>
        <motion.h2 
          className="text-3xl lg:text-4xl text-black leading-tight mb-8"
          variants={itemVariants}
        >
          Here's the Thing
        </motion.h2>
        
        <motion.div 
          className="text-lg text-black leading-relaxed space-y-6 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          <p>
            We've been at this for thirty-five-plus years now. Long enough to know that promises in this business 
            are like campaign speeches—everybody makes them, not everybody keeps them.
          </p>
          
          <p>
            So here's ours, plain and simple: We show up when we say we will. We do what we say we'll do. 
            We clean up our mess. And if something goes sideways—because sometimes it does—we make it right.
          </p>
          
          <p>
            No fancy guarantees. No corporate double-talk. Just the kind of work your grandfather would 
            have nodded at and said, "That'll do."
          </p>
          
          <p className="text-black font-medium italic">
            That's it. That's the promise.
          </p>
        </motion.div>

        {/* American Flag */}
        <motion.div 
          className="mt-16 flex justify-center"
          variants={itemVariants}
        >
          <svg width="96" height="64" viewBox="0 0 96 64" className="shadow-lg">
            {/* White stripes */}
            <rect width="96" height="64" fill="white"/>
            
            {/* Red stripes */}
            <rect y="0" width="96" height="5" fill="#B22234"/>
            <rect y="10" width="96" height="5" fill="#B22234"/>
            <rect y="20" width="96" height="5" fill="#B22234"/>
            <rect y="30" width="96" height="5" fill="#B22234"/>
            <rect y="40" width="96" height="5" fill="#B22234"/>
            <rect y="50" width="96" height="5" fill="#B22234"/>
            <rect y="60" width="96" height="4" fill="#B22234"/>
            
            {/* Blue canton */}
            <rect width="38" height="35" fill="#3C3B6E"/>
            
            {/* Stars (simplified as white dots) */}
            <circle cx="4" cy="3" r="1" fill="white"/>
            <circle cx="10" cy="3" r="1" fill="white"/>
            <circle cx="16" cy="3" r="1" fill="white"/>
            <circle cx="22" cy="3" r="1" fill="white"/>
            <circle cx="28" cy="3" r="1" fill="white"/>
            <circle cx="34" cy="3" r="1" fill="white"/>
            
            <circle cx="7" cy="8" r="1" fill="white"/>
            <circle cx="13" cy="8" r="1" fill="white"/>
            <circle cx="19" cy="8" r="1" fill="white"/>
            <circle cx="25" cy="8" r="1" fill="white"/>
            <circle cx="31" cy="8" r="1" fill="white"/>
            
            <circle cx="4" cy="13" r="1" fill="white"/>
            <circle cx="10" cy="13" r="1" fill="white"/>
            <circle cx="16" cy="13" r="1" fill="white"/>
            <circle cx="22" cy="13" r="1" fill="white"/>
            <circle cx="28" cy="13" r="1" fill="white"/>
            <circle cx="34" cy="13" r="1" fill="white"/>
            
            <circle cx="7" cy="18" r="1" fill="white"/>
            <circle cx="13" cy="18" r="1" fill="white"/>
            <circle cx="19" cy="18" r="1" fill="white"/>
            <circle cx="25" cy="18" r="1" fill="white"/>
            <circle cx="31" cy="18" r="1" fill="white"/>
            
            <circle cx="4" cy="23" r="1" fill="white"/>
            <circle cx="10" cy="23" r="1" fill="white"/>
            <circle cx="16" cy="23" r="1" fill="white"/>
            <circle cx="22" cy="23" r="1" fill="white"/>
            <circle cx="28" cy="23" r="1" fill="white"/>
            <circle cx="34" cy="23" r="1" fill="white"/>
            
            <circle cx="7" cy="28" r="1" fill="white"/>
            <circle cx="13" cy="28" r="1" fill="white"/>
            <circle cx="19" cy="28" r="1" fill="white"/>
            <circle cx="25" cy="28" r="1" fill="white"/>
            <circle cx="31" cy="28" r="1" fill="white"/>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
