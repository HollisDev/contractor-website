'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah & Michael Johnson',
    location: 'Beverly Hills, CA',
    project: 'Kitchen Remodeling',
    rating: 5,
    image: '/testimonials/sarah-michael.jpg',
    quote: "Elite Remodeling transformed our outdated kitchen into a stunning modern space that exceeded our wildest dreams. The attention to detail and craftsmanship is absolutely incredible.",
    details: "The team was professional, punctual, and incredibly talented. They listened to our vision and brought it to life while staying within our budget. We couldn't be happier with the results!"
  },
  {
    id: 2,
    name: 'David Chen',
    location: 'Manhattan Beach, CA',
    project: 'Bathroom Renovation',
    rating: 5,
    image: '/testimonials/david-chen.jpg',
    quote: "Working with Elite Remodeling was an absolute pleasure. They turned our cramped bathroom into a luxurious spa-like retreat. The quality of work is exceptional.",
    details: "From the initial consultation to the final walkthrough, everything was handled with utmost professionalism. The project was completed on time and the results are breathtaking."
  },
  {
    id: 3,
    name: 'Jennifer Martinez',
    location: 'Santa Monica, CA',
    project: 'Home Addition',
    rating: 5,
    image: '/testimonials/jennifer-martinez.jpg',
    quote: "Elite Remodeling helped us create the perfect family space with our home addition. Their expertise and creativity made our vision a reality.",
    details: "The structural work was flawless and the design integration seamless. Our new living space feels like it was always part of our home. Highly recommend!"
  },
  {
    id: 4,
    name: 'Robert & Lisa Thompson',
    location: 'Westwood, CA',
    project: 'Whole Home Remodel',
    rating: 5,
    image: '/testimonials/robert-lisa.jpg',
    quote: "We trusted Elite Remodeling with our entire home renovation, and they delivered beyond our expectations. Every room is now perfect.",
    details: "The project management was outstanding. They coordinated everything seamlessly and kept us informed every step of the way. The transformation is remarkable."
  },
  {
    id: 5,
    name: 'Amanda Rodriguez',
    location: 'Malibu, CA',
    project: 'Master Suite',
    rating: 5,
    image: '/testimonials/amanda-rodriguez.jpg',
    quote: "The master suite renovation by Elite Remodeling is absolutely stunning. It's like staying in a luxury resort every night.",
    details: "Their design team understood our style perfectly and created a space that's both beautiful and functional. The craftsmanship is top-notch."
  },
  {
    id: 6,
    name: 'Mark & Catherine Wilson',
    location: 'Pacific Palisades, CA',
    project: 'Kitchen & Dining',
    rating: 5,
    image: '/testimonials/mark-catherine.jpg',
    quote: "Elite Remodeling created the perfect space for entertaining. Our new kitchen and dining area are the heart of our home.",
    details: "The open concept design they created is exactly what we wanted. The quality of materials and workmanship is evident in every detail."
  }
];

export function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

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
            What Our Clients{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
              Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from our satisfied clients who have 
            experienced the Elite Remodeling difference firsthand.
          </p>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          key={activeTestimonial}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-blue-50 to-emerald-50 rounded-3xl p-8 md:p-12 mb-16"
        >
          {/* Quote Icon */}
          <div className="absolute top-8 left-8 w-16 h-16 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl flex items-center justify-center">
            <Quote className="h-8 w-8 text-white" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Testimonial Content */}
            <div className="pt-8">
              <div className="flex space-x-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <blockquote className="text-2xl lg:text-3xl font-medium text-gray-900 mb-6 leading-relaxed">
                "{testimonials[activeTestimonial].quote}"
              </blockquote>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {testimonials[activeTestimonial].details}
              </p>

              <div className="border-l-4 border-blue-600 pl-6">
                <div className="font-bold text-xl text-gray-900">
                  {testimonials[activeTestimonial].name}
                </div>
                <div className="text-gray-600 mb-2">
                  {testimonials[activeTestimonial].location}
                </div>
                <div className="text-sm font-medium text-blue-600 bg-blue-100 inline-block px-3 py-1 rounded-full">
                  {testimonials[activeTestimonial].project}
                </div>
              </div>
            </div>

            {/* Client Photo */}
            <div className="relative">
              <div className="relative w-80 h-80 mx-auto rounded-2xl overflow-hidden">
                <Image
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].name}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl opacity-20" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-xl opacity-20" />
            </div>
          </div>
        </motion.div>

        {/* Testimonial Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.button
              key={testimonial.id}
              onClick={() => setActiveTestimonial(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-4 rounded-xl transition-all duration-300 ${
                index === activeTestimonial
                  ? 'bg-gradient-to-r from-blue-600 to-emerald-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <div className="font-semibold text-sm">{testimonial.name.split(' ')[0]}</div>
              <div className="text-xs opacity-80">{testimonial.project}</div>
            </motion.button>
          ))}
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 bg-gray-50 rounded-2xl p-8"
        >
          {[
            { number: '5.0', label: 'Average Rating', suffix: '/5' },
            { number: '200+', label: 'Happy Clients', suffix: '' },
            { number: '98%', label: 'Satisfaction Rate', suffix: '' },
            { number: '50+', label: 'Google Reviews', suffix: '' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                {stat.number}
                <span className="text-blue-600">{stat.suffix}</span>
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600 mb-8">
            Ready to become our next success story?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-emerald-700 transition-all duration-300"
            >
              Start Your Project
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Read More Reviews
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
