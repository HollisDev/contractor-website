'use client';

import { motion } from 'framer-motion';
import {
    Award,
    Clock,
    DollarSign,
    Heart,
    Shield,
    Star,
    Users,
    Zap
} from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Award-Winning Excellence',
    description: 'Recognized for outstanding craftsmanship and design innovation by industry leaders.',
    stats: '15+ Awards'
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'We respect your time and consistently deliver projects on schedule without compromising quality.',
    stats: '98% On-Time'
  },
  {
    icon: Shield,
    title: 'Fully Licensed & Insured',
    description: 'Complete protection and peace of mind with comprehensive licensing and insurance coverage.',
    stats: '$2M Insurance'
  },
  {
    icon: Star,
    title: '5-Star Customer Service',
    description: 'Exceptional communication and support throughout every phase of your project.',
    stats: '5.0 Rating'
  },
  {
    icon: Users,
    title: 'Expert Craftsmen',
    description: 'Our skilled team brings decades of combined experience to every project.',
    stats: '15+ Years Experience'
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description: 'No hidden fees or surprise costs. Clear, upfront pricing you can trust.',
    stats: 'No Hidden Fees'
  }
];

const guarantees = [
  {
    icon: Heart,
    title: 'Satisfaction Guarantee',
    description: "We're not happy until you're completely satisfied with the results."
  },
  {
    icon: Shield,
    title: 'Warranty Protection',
    description: 'Comprehensive warranty coverage on all materials and workmanship.'
  },
  {
    icon: Zap,
    title: 'Quality Materials',
    description: 'We use only premium, industry-leading materials and components.'
  }
];

export function WhyChooseUs() {
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
            Why Choose{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
              Elite Remodeling
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just contractors – we're partners in bringing your vision to life with 
            unmatched expertise, integrity, and dedication to excellence.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Icon with Gradient Background */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  {/* Stats Badge */}
                  <div className="absolute -top-2 -right-2 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {feature.stats}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-200 rounded-2xl transition-colors duration-300" />
              </motion.div>
            );
          })}
        </div>

        {/* Guarantees Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-3xl p-8 md:p-12 text-white">
            <div className="text-center mb-12">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                Our Promise to You
              </h3>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Your satisfaction and peace of mind are our top priorities. That's why we back 
                every project with these ironclad guarantees.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {guarantees.map((guarantee, index) => {
                const Icon = guarantee.icon;
                return (
                  <motion.div
                    key={guarantee.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">{guarantee.title}</h4>
                    <p className="text-white/90 leading-relaxed">{guarantee.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Numbers Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '500+', label: 'Projects Completed' },
            { number: '15+', label: 'Years Experience' },
            { number: '100%', label: 'Satisfaction Rate' },
            { number: '24/7', label: 'Support Available' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600 mb-8">
            Ready to experience the Elite Remodeling difference?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-emerald-700 transition-all duration-300 shadow-lg"
          >
            Start Your Project Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
