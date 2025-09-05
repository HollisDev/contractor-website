'use client';

import { motion } from 'framer-motion';

export function ProcessTimeline() {
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

  const lineVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut"
      }
    }
  };

  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "We meet to discuss your vision, assess your space, and understand your budget and timeline requirements.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      number: "02",
      title: "Design & Planning",
      description: "Our team creates detailed plans, 3D renderings, and material selections tailored to your specific needs.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      number: "03",
      title: "Permits & Approval",
      description: "We handle all necessary permits and ensure your project meets local building codes and regulations.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      number: "04",
      title: "Construction Phase",
      description: "Expert craftsmen bring your vision to life with daily progress updates and quality checkpoints.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      number: "05",
      title: "Final Walkthrough",
      description: "We conduct a thorough inspection together, ensuring every detail meets our high standards and your expectations.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    }
  ];

  return (
    <section id="process-timeline" className="bg-gray-50 py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
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
            Our Process
          </motion.h3>
          <motion.h2 
            className="text-4xl lg:text-6xl text-black leading-tight mb-8"
            variants={itemVariants}
          >
            From Vision to Reality
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Our proven five-step process ensures your project is delivered on time, 
            within budget, and exceeds your expectations at every stage.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full hidden lg:block">
            <motion.div 
              className="w-full bg-gray-800 origin-top"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={{
                hidden: { scaleY: 0 },
                visible: { scaleY: 1, transition: { duration: 2, ease: "easeInOut" } }
              }}
            />
          </div>

          {/* Steps */}
          <motion.div 
            className="space-y-16 lg:space-y-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className={`flex items-center justify-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                variants={itemVariants}
              >
                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${
                  index % 2 === 0 ? 'lg:text-right lg:pr-16' : 'lg:text-left lg:pl-16'
                }`}>
                  <motion.div 
                    className="bg-white rounded-2xl p-8 shadow-xl border-l-4 border-black hover:shadow-2xl transition-shadow duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <div className={`flex items-center gap-4 mb-6 ${
                      index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'
                    } justify-center`}>
                      <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center text-white">
                        {step.icon}
                      </div>
                      <div className="text-6xl font-bold text-black/20">
                        {step.number}
                      </div>
                    </div>
                    <h4 className="text-2xl font-bold text-black mb-4">{step.title}</h4>
                    <p className="text-gray-700 leading-relaxed text-lg">{step.description}</p>
                  </motion.div>
                </div>

                {/* Timeline Node (Desktop) */}
                <motion.div 
                  className="hidden lg:flex w-2/12 justify-center"
                  variants={itemVariants}
                >
                  <div className="w-6 h-6 bg-gray-800 rounded-full border-4 border-white shadow-lg z-10"></div>
                </motion.div>

                {/* Spacer (Desktop) */}
                <div className="hidden lg:block w-5/12"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          <motion.div 
            className="bg-white rounded-2xl p-12 shadow-xl max-w-4xl mx-auto"
            variants={itemVariants}
          >
            <h3 className="text-3xl text-black mb-6">Ready to Get Started?</h3>
            <p className="text-xl text-gray-700 mb-8">
              Schedule your free consultation today and let's begin transforming your space.
            </p>
            <motion.button
              className="inline-flex items-center border-2 border-black text-black px-10 py-4 text-xl font-bold hover:bg-gray-800 hover:text-white transition-colors rounded-lg shadow-lg cursor-default"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
              <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
