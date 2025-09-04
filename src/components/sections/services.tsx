'use client';

import { motion } from 'framer-motion';
import {
  ChefHat,
  Droplet,
  Hammer,
  Lightbulb,
  Palette,
  Shield,
  Sparkles,
  Wrench
} from 'lucide-react';
import Image from 'next/image';

const services = [
  {
    icon: ChefHat,
    title: 'Kitchen Remodeling',
    description: 'Complete kitchen transformations with custom cabinetry, premium countertops, and modern appliances.',
    features: ['Custom Design', 'Premium Materials', 'Smart Storage', 'Energy Efficient'],
    image: '/images/services/kitchen.jpg'
  },
  {
    icon: Droplet,
    title: 'Bathroom Renovation',
    description: 'Luxurious bathroom makeovers featuring spa-like amenities and innovative design solutions.',
    features: ['Luxury Fixtures', 'Custom Tile Work', 'Smart Technology', 'Accessibility Options'],
    image: '/images/services/bathroom.jpg'
  },
  {
    icon: Hammer,
    title: 'Home Additions',
    description: 'Expand your living space with seamless additions that blend perfectly with your existing home.',
    features: ['Structural Design', 'Permit Handling', 'Seamless Integration', 'Quality Construction'],
    image: '/images/services/addition.jpg'
  },
  {
    icon: Palette,
    title: 'Interior Design',
    description: 'Complete interior design services to create cohesive, beautiful spaces throughout your home.',
    features: ['3D Visualization', 'Color Consultation', 'Furniture Selection', 'Styling Services'],
    image: '/images/services/interior.jpg'
  },
  {
    icon: Lightbulb,
    title: 'Smart Home Integration',
    description: 'Modern technology integration for lighting, security, and automation systems.',
    features: ['Home Automation', 'Smart Lighting', 'Security Systems', 'Energy Management'],
    image: '/images/services/smart-home.jpg'
  },
  {
    icon: Wrench,
    title: 'Custom Carpentry',
    description: 'Handcrafted woodwork and custom built-ins tailored to your specific needs and style.',
    features: ['Built-in Storage', 'Custom Millwork', 'Trim & Molding', 'Furniture Building'],
    image: '/images/services/carpentry.jpg'
  }
];

export function Services() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
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
            Our Expert{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to completion, we deliver exceptional craftsmanship and innovative solutions 
            for every aspect of your home transformation project.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* Icon */}
                  <div className="absolute top-4 left-4 p-3 bg-white/90 backdrop-blur-sm rounded-xl">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                        <Sparkles className="h-4 w-4 text-emerald-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-6 w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-emerald-700 transition-all duration-300"
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-3xl p-8 md:p-12 text-white">
            <Shield className="h-12 w-12 mx-auto mb-6 text-white/90" />
            <h3 className="text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get a free consultation and detailed estimate for your dream renovation project.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-colors"
            >
              Schedule Free Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
