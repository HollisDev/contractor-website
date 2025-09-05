'use client';

import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: 'About Us', href: '#about-us' },
    { name: 'Services', href: '#our-services' },
    { name: 'Before & After', href: '#before-after' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Our Promise', href: '#our-promise' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <footer style={{ backgroundColor: '#58595b' }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <div className="text-3xl lg:text-4xl text-white leading-tight">
                <div className="border-b-2 border-white pb-1">Reputation Builders &</div>
                <div className="text-2xl lg:text-3xl pt-1">Handyman Services</div>
              </div>
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed max-w-2xl text-lg mx-auto md:mx-0">
              For over two decades, we've been transforming homes throughout Modesto with 
              expert craftsmanship and unmatched attention to detail. Your vision, our expertise.
            </p>
            <div className="text-gray-300">
              <p className="text-xl font-medium">Call us today: <span className="text-white">(209) 312-4169</span></p>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {navigationLinks.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-gray-300 hover:text-white transition-colors text-lg"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-400 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div className="text-gray-400 text-lg mb-4 md:mb-0">
              <p>&copy; {currentYear} Reputation Builders & Handyman Services. All rights reserved.</p>
            </div>
            <div className="text-gray-300 text-lg">
              <p>Licensed • Bonded • Insured</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
