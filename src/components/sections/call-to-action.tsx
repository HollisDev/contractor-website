'use client';

export function CallToAction() {
  return (
    <section id="contact" className="bg-white py-48 px-4 sm:px-6 lg:px-8">
      <div className="max-w-none mx-auto px-8 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            {/* Section Header */}
            <div>
              <h3 className="text-2xl font-medium text-black mb-6 tracking-wide">
                Get in Touch
              </h3>
              <h2 className="text-5xl lg:text-7xl text-burgundy leading-tight mb-12">
                Ready to Transform<br />Your Space?
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-12">
                Let's discuss your vision and create something extraordinary together. 
                Contact us today for your free consultation.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-burgundy rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-900">Call Us Today</p>
                  <a href="tel:2093124169" className="text-xl font-bold text-burgundy hover:text-red-800 transition-colors">
                    (209) 312-4169
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-burgundy rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-900">Service Area</p>
                  <p className="text-xl font-bold text-burgundy">Modesto, CA & Surrounding Areas</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-burgundy rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-900">Business Hours</p>
                  <p className="text-xl font-bold text-burgundy">Mon-Fri: 7AM-6PM</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-8">
              <a
                href="tel:2093124169"
                className="inline-flex items-center border-2 border-burgundy text-burgundy px-8 py-4 text-xl font-bold hover:bg-burgundy hover:text-white transition-colors shadow-lg rounded-lg"
              >
                Schedule Free Consultation
                <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column - Map */}
          <div className="relative">
            <div className="h-[600px] w-full rounded-2xl shadow-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50449.779176916046!2d-121.02799845!3d37.6390972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8090978f7b44c0b1%3A0x2b1a8560dd0c9a4a!2sModesto%2C%20CA%2095355!5e0!3m2!1sen!2sus!4v1625097600000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Modesto, CA 95355 Service Area"
              ></iframe>
            </div>
            
            {/* Map Overlay Info */}
            <div className="absolute bottom-6 left-6 bg-white bg-opacity-95 backdrop-blur-sm px-6 py-4 rounded-lg shadow-lg">
              <h4 className="text-lg font-bold text-burgundy mb-1">Our Service Area</h4>
              <p className="text-gray-700">Modesto, CA 95355 & Surrounding Communities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
