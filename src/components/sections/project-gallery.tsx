'use client';

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/core/dialog';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export function ProjectGallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  const filterVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3
      }
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const categories = ['All', 'Kitchen', 'Bathroom', 'Living Spaces', 'Outdoor', 'Lighting'];

  const projects = [
    {
      id: 1,
      title: "Modern Kitchen Transformation",
      category: "Kitchen",
      image: "/image-assets/our-work-images/modern-kitchen-transformation.avif",
      description: "Complete kitchen remodel with custom cabinetry and quartz countertops"
    },
    {
      id: 2,
      title: "Spa-Like Master Bathroom",
      category: "Bathroom",
      image: "/image-assets/our-work-images/spa-like-master-bathroom.avif",
      description: "Luxurious bathroom renovation with walk-in shower and soaking tub"
    },
    {
      id: 3,
      title: "Open Concept Living",
      category: "Living Spaces",
      image: "/image-assets/our-work-images/open-concept-living.avif",
      description: "Wall removal and space redesign for modern family living"
    },
    {
      id: 4,
      title: "Outdoor Entertainment Deck",
      category: "Outdoor",
      image: "/image-assets/our-work-images/outdoor-entertainment-deck.jpg",
      description: "Custom deck with plenty of room for seating for entertaining"
    },
    {
      id: 5,
      title: "Under-Cabinet LED Lighting",
      category: "Lighting",
      image: "/image-assets/our-work-images/under-cabinet-led-lighting.jpg",
      description: "Professional LED installation for task and ambient lighting"
    },
    {
      id: 6,
      title: "Farmhouse Kitchen Revival",
      category: "Kitchen",
      image: "/image-assets/our-work-images/farmhouse-kitchen-revival.avif",
      description: "Rustic charm meets modern functionality in this kitchen makeover"
    },
    {
      id: 7,
      title: "Contemporary Powder Room",
      category: "Bathroom",
      image: "/image-assets/our-work-images/contemporary-powder-room.jpg",
      description: "Compact bathroom with maximum impact and style"
    },
    {
      id: 8,
      title: "Family Room Makeover",
      category: "Living Spaces",
      image: "/image-assets/our-work-images/family-room-makeover.jpg",
      description: "Cozy family space with built-in entertainment center"
    },
    {
      id: 9,
      title: "Backyard Oasis",
      category: "Outdoor",
      image: "/image-assets/our-work-images/backyard-oasis.jpg",
      description: "Complete outdoor living space with pergola and fire feature"
    },
    {
      id: 10,
      title: "Chandelier & Pendant Installation",
      category: "Lighting",
      image: "/image-assets/our-work-images/chandelier-and-pendant-installation.webp",
      description: "Elegant lighting solutions for dining and living areas"
    },
    {
      id: 11,
      title: "Master Suite Addition",
      category: "Living Spaces",
      image: "/image-assets/our-work-images/master-suite-addition.webp",
      description: "Home addition creating the perfect master bedroom retreat"
    },
    {
      id: 12,
      title: "Patio Cover & Outdoor Kitchen",
      category: "Outdoor",
      image: "/image-assets/our-work-images/patio-cover-and-outdoor-kitchen.jpg",
      description: "Year-round outdoor entertaining with covered cooking space"
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="project-gallery" className="bg-white py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Cross-Hatched Grid Background */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(128, 0, 32, 0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(128, 0, 32, 0.12) 1px, transparent 1px),
            linear-gradient(45deg, rgba(128, 0, 32, 0.06) 1px, transparent 1px),
            linear-gradient(-45deg, rgba(128, 0, 32, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px, 50px 50px, 25px 25px, 25px 25px',
          opacity: 0.3
        }}
      ></div>
      
      {/* Subtle gradient overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 20%, rgba(128, 0, 32, 0.02) 0%, transparent 50%)'
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
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
            Our Work
          </motion.h3>
          <motion.h2 
            className="text-4xl lg:text-6xl text-black leading-tight mb-8"
            variants={itemVariants}
          >
            Project Gallery
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Explore our portfolio of completed projects and see how we transform spaces 
            throughout Modesto and the surrounding areas.
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-gray-800 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              variants={filterVariants}
              layout
              whileHover={{ y: -10 }}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gray-800 bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center">
                  <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <motion.button 
                      className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedProject(project)}
                    >
                      View Details
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block bg-gray-800/10 text-black px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-black mb-3 group-hover:text-black transition-colors">
                  {project.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        <motion.div 
          className="text-center mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          <motion.button
            className="inline-flex items-center border-2 border-black text-black px-10 py-4 text-xl font-bold hover:bg-gray-800 hover:text-white transition-colors rounded-lg shadow-lg cursor-default"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View More Projects
            <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.button>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20 pt-20 border-t border-black"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          <motion.div className="text-center" variants={itemVariants}>
            <div className="text-4xl lg:text-5xl font-bold text-black mb-2">150+</div>
            <div className="text-gray-600 font-medium">Projects Completed</div>
          </motion.div>
          <motion.div className="text-center" variants={itemVariants}>
            <div className="text-4xl lg:text-5xl font-bold text-black mb-2">98%</div>
            <div className="text-gray-600 font-medium">Client Satisfaction</div>
          </motion.div>
          <motion.div className="text-center" variants={itemVariants}>
            <div className="text-4xl lg:text-5xl font-bold text-black mb-2">20+</div>
            <div className="text-gray-600 font-medium">Years Experience</div>
          </motion.div>
          <motion.div className="text-center" variants={itemVariants}>
            <div className="text-4xl lg:text-5xl font-bold text-black mb-2">5★</div>
            <div className="text-gray-600 font-medium">Average Rating</div>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        {selectedProject && (
          <DialogContent className="w-full max-w-4xl bg-white p-0 overflow-hidden">
            <div className="relative">
              {/* Large Project Image */}
              <div className="relative h-96 md:h-[500px] overflow-hidden">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-lg font-medium">{selectedProject.title}</p>
                  <p className="text-sm opacity-90 mt-1">High-resolution project image</p>
                </div>
              </div>
              
              {/* Project Details */}
              <div className="p-8">
                <DialogHeader>
                  <div className="flex items-center justify-between mb-4">
                    <DialogTitle className="text-3xl font-bold text-black">
                      {selectedProject.title}
                    </DialogTitle>
                    <span className="inline-block bg-gray-800/10 text-black px-4 py-2 rounded-full text-sm font-medium">
                      {selectedProject.category}
                    </span>
                  </div>
                  <DialogDescription className="text-lg text-gray-700 leading-relaxed">
                    {selectedProject.description}
                  </DialogDescription>
                </DialogHeader>
                
                {/* Project Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-200">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-800/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">Timeline</h4>
                    <p className="text-gray-600">2-4 weeks</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-800/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">Warranty</h4>
                    <p className="text-gray-600">5 years</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-800/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">Rating</h4>
                    <p className="text-gray-600">5.0 stars</p>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="text-center mt-8">
                  <motion.button
                    className="inline-flex items-center border-2 border-black text-black px-8 py-4 text-lg font-bold rounded-lg hover:bg-gray-800 hover:text-white transition-colors shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Start Similar Project
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
