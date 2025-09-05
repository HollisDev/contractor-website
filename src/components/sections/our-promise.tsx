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
          className="text-3xl lg:text-4xl text-burgundy leading-tight mb-8"
          variants={itemVariants}
        >
          Here's the Thing
        </motion.h2>
        
        <motion.div 
          className="text-lg text-black leading-relaxed space-y-6 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          <p>
            We've been at this for twenty-three years now. Long enough to know that promises in this business 
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
          
          <p className="text-burgundy font-medium italic">
            That's it. That's the promise.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
