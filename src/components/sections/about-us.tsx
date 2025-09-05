'use client';

import { motion } from 'framer-motion';

export function AboutUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="about-us" className="relative bg-white py-48 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 right-16 w-32 h-32 bg-burgundy rounded-full"></div>
        <div className="absolute bottom-32 left-20 w-24 h-24 bg-burgundy rounded-full"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-burgundy rounded-full"></div>
      </div>

      <div className="max-w-none mx-auto px-8 sm:px-12 lg:px-16 relative z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Left Column */}
          <motion.div variants={itemVariants}>
            <motion.p 
              className="text-gray-800 text-2xl mb-8"
              variants={itemVariants}
            >
              A Trusted Design & Build Company in Modesto
            </motion.p>
            <motion.h2 
              className="text-burgundy text-5xl lg:text-5xl leading-tight mb-8"
              variants={itemVariants}
            >
              Where Craftsmanship & Design Meet Innovation
            </motion.h2>
            
            {/* Decorative accent line */}
            <motion.div 
              className="w-24 h-1 bg-burgundy mb-8"
              variants={itemVariants}
            ></motion.div>
          </motion.div>
          
          {/* Right Column */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <motion.div 
              className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <p className="text-gray-800 text-lg leading-relaxed font-medium">
                With over 20 years of experience, Reputation Builders & Handyman Services transforms Central Valley-area homes into deeply personal, beautifully livable spaces. Our full-service team guides you seamlessly from first sketch to final reveal, so you can enjoy the process as much as the outcome.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <p className="text-gray-800 text-lg leading-relaxed">
                Whether you're reimagining your kitchen, restoring a home, or investing in a whole home transformation, we bring creative vision, quiet luxury, and uncompromising craftsmanship to every detail.
              </p>
            </motion.div>

            <motion.div 
              className="bg-burgundy bg-opacity-5 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border-l-4 border-burgundy"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <p className="text-gray-800 text-lg leading-relaxed font-medium italic">
                This is remodeling, elevated. Designed to reflect your lifestyle, your values, and your future.
              </p>
              
              {/* Small decorative icon */}
              <div className="mt-4 text-2xl text-burgundy">🏗️</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
