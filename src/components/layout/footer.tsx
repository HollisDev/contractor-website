'use client';

import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Elite Remodeling</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transform your home with our expert craftsmanship and innovative design solutions. 
              We specialize in luxury kitchen and bathroom renovations that exceed expectations.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <span>(123) 456-7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <span>info@eliteremodeling.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span>123 Main Street, Your City, ST 12345</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/our-work" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Our Work
                </Link>
              </li>
              <li>
                <Link 
                  href="/services" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/blog" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/services/kitchen-remodeling" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Kitchen Remodeling
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/bathroom-renovation" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Bathroom Renovation
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/whole-home" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Whole Home Remodel
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/custom-cabinets" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Custom Cabinets
                </Link>
              </li>
              <li>
                <Link 
                  href="/cost-estimator" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Cost Estimator
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Social Media */}
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              <p>&copy; {currentYear} Elite Remodeling. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
