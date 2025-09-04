'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Calendar, MapPin, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: 'Modern Luxury Kitchen',
    location: 'Beverly Hills, CA',
    category: 'Kitchen Remodeling',
    duration: '8 weeks',
    budget: '$85,000',
    rating: 5.0,
    description: 'Complete kitchen transformation with custom cabinetry, quartz countertops, and high-end appliances.',
    images: [
      '/projects/kitchen-1-main.jpg',
      '/projects/kitchen-1-before.jpg',
      '/projects/kitchen-1-detail.jpg'
    ],
    features: [
      'Custom white oak cabinetry',
      'Caesarstone quartz countertops',
      'Wolf appliance package',
      'LED under-cabinet lighting',
      'Hardwood flooring'
    ],
    testimonial: "The team exceeded our expectations in every way. Our kitchen is now the heart of our home!"
  },
  {
    id: 2,
    title: 'Spa-Inspired Master Bath',
    location: 'Manhattan Beach, CA',
    category: 'Bathroom Renovation',
    duration: '6 weeks',
    budget: '$65,000',
    rating: 5.0,
    description: 'Luxurious master bathroom renovation featuring a freestanding tub and walk-in shower.',
    images: [
      '/projects/bathroom-1-main.jpg',
      '/projects/bathroom-1-before.jpg',
      '/projects/bathroom-1-detail.jpg'
    ],
    features: [
      'Freestanding soaking tub',
      'Frameless glass shower',
      'Heated marble floors',
      'Custom vanity with dual sinks',
      'Smart mirror technology'
    ],
    testimonial: "It feels like having a luxury spa in our own home. The attention to detail is incredible."
  },
  {
    id: 3,
    title: 'Open Concept Living',
    location: 'Santa Monica, CA',
    category: 'Home Addition',
    duration: '12 weeks',
    budget: '$125,000',
    rating: 5.0,
    description: 'Complete home addition creating an open-concept living space with vaulted ceilings.',
    images: [
      '/projects/addition-1-main.jpg',
      '/projects/addition-1-before.jpg',
      '/projects/addition-1-detail.jpg'
    ],
    features: [
      'Vaulted ceilings',
      'Floor-to-ceiling windows',
      'Structural beam work',
      'Integrated lighting design',
      'Seamless indoor-outdoor flow'
    ],
    testimonial: "They transformed our cramped house into a stunning open-concept home. Amazing work!"
  }
];

export function FeaturedProjects() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Featured{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our recent transformations and see how we bring our clients' visions to life 
            with exceptional craftsmanship and innovative design solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Images */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="grid grid-cols-2 gap-4">
                  {/* Main Image */}
                  <div className="col-span-2 relative h-80 rounded-2xl overflow-hidden group">
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    
                    {/* Project Category Badge */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-sm font-semibold text-gray-900">{project.category}</span>
                    </div>

                    {/* Rating */}
                    <div className="absolute top-4 right-4 flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-semibold text-gray-900">{project.rating}</span>
                    </div>
                  </div>

                  {/* Secondary Images */}
                  <div className="relative h-40 rounded-xl overflow-hidden">
                    <Image
                      src={project.images[1]}
                      alt={`${project.title} - Before`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium">
                      Before
                    </div>
                  </div>
                  <div className="relative h-40 rounded-xl overflow-hidden">
                    <Image
                      src={project.images[2]}
                      alt={`${project.title} - Detail`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium">
                      Detail
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Project Info */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    <span>{project.duration}</span>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Testimonial */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <p className="text-gray-700 italic mb-3">"{project.testimonial}"</p>
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Budget */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-gray-500">Project Investment</span>
                    <div className="text-2xl font-bold text-gray-900">{project.budget}</div>
                  </div>
                  
                  <Link
                    href={`/projects/${project.id}`}
                    className="group inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-emerald-700 transition-all duration-300"
                  >
                    <span>View Details</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link
            href="/projects"
            className="inline-flex items-center space-x-2 bg-white border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            <span>View All Projects</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
