'use client';

import Image from 'next/image';
import { useState } from 'react';

export function OurServices() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const services = [
    {
      title: "Complete Home Remodels",
      image: "/image-assets/our-services/services-complete-home-remodels.jpg"
    },
    {
      title: "Home Additions",
      image: "/image-assets/our-services/services-home-additions.jpg"
    },
    {
      title: "Kitchen Remodels", 
      image: "/image-assets/our-services/services-kitchen-remodels.jpg"
    },
    {
      title: "Primary Suites & Bathrooms",
      image: "/image-assets/our-services/services-primary-suites-and-bathrooms.jpg"
    },
    {
      title: "Attic & Basements",
      image: "/image-assets/our-services/services-attic-and-basements.jpg"
    },
    {
      title: "Outdoor Living",
      image: "/image-assets/our-services/services-outdoor-living.jpg"
    }
  ];

  return (
    <section id="our-services" className="bg-white py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-none mx-auto px-8 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left Column - Image Display */}
          <div className="relative">
            <div className="relative h-[1000px] w-full rounded-2xl shadow-2xl overflow-hidden">
              <Image
                src={services[currentImageIndex].image}
                alt={services[currentImageIndex].title}
                fill
                className="object-cover transition-opacity duration-500"
                priority
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            {/* Section Header */}
            <div>
              <h3 className="text-2xl font-medium text-black mb-6 tracking-wide">
                Our Services
              </h3>
              <h2 className="text-4xl lg:text-6xl text-burgundy leading-tight mb-8">
                Elevating Your Living Space, Enhancing Your Quality of Life
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                Fusing the disciplines of design and construction into one design-build company in Modesto assures that we achieve your vision, time, cost, and quality expectations.
              </p>
            </div>

            {/* Services List */}
            <div className="space-y-0">
              {/* Instruction Message */}
              <div className="mb-8">
                <p className="text-gray-500 text-sm italic">
                  Hover over each service below to see examples of our work
                </p>
              </div>
              
              {services.map((service, index) => (
                <div key={index} className="group">
                  <div 
                    className="py-6 transition-colors duration-300"
                    onMouseEnter={() => setCurrentImageIndex(index)}
                  >
                    <h4 className="text-xl font-semibold text-black group-hover:text-burgundy transition-colors duration-300 mb-2">
                      {service.title}
                    </h4>
                    {index < services.length - 1 && (
                      <div className="w-full h-px bg-gray-300 mt-4"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
