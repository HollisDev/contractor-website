'use client';

import { cn } from '@/lib/utils';
import { ArrowUp, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const leftNavigation = [
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Testimonials', href: '/testimonials' },
];

const rightNavigation = [
  { name: 'Process', href: '/process' },
  { name: 'Portfolio', href: '/portfolio' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const pathname = usePathname();

  // Show scroll to top button after scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav className="fixed top-0 z-50 w-full backdrop-blur-lg border-b bg-white border-white/10 shadow-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
        <div className="w-full px-8 sm:px-12 lg:px-16">
          <div className="flex justify-between items-center h-28 w-full relative">
            {/* Left Navigation - Push to far left */}
            <div className="hidden nav:flex items-center space-x-8">
              {leftNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'text-xl font-medium transition-colors hover:text-burgundy',
                    pathname === item.href
                      ? 'text-burgundy border-b-2 border-burgundy pb-1'
                      : 'text-black'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Center Logo - Centered with maximum space */}
            <Link href="/" className="absolute left-1/2 transform -translate-x-1/2 text-center">
              <div className="text-2xl lg:text-3xl  text-burgundy leading-tight">
                <div className="border-b-2 border-burgundy pb-1">Reputation Builders <span className="text-white">&</span></div>
                <div className="text-xl lg:text-2xl pt-1">Handyman Services</div>
              </div>
            </Link>

            {/* Right Navigation - Push to far right */}
            <div className="hidden nav:flex items-center space-x-8">
              {rightNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'text-xl font-medium transition-colors hover:text-burgundy',
                    pathname === item.href
                      ? 'text-burgundy border-b-2 border-burgundy pb-1'
                      : 'text-black'
                  )}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Contact Us Button */}
              <Link
                href="/contact"
                className={cn(
                  'border-2 border-burgundy text-burgundy px-6 py-2 text-xl font-medium hover:bg-burgundy hover:text-white transition-colors shadow-lg',
                  pathname === '/contact' && 'bg-burgundy text-white'
                )}
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="nav:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-black hover:text-burgundy hover:bg-gray-100"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="nav:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
            <div className="px-4 pt-2 pb-3 space-y-1">
              {[...leftNavigation, ...rightNavigation].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'block px-3 py-2 rounded-md text-lg font-medium transition-colors',
                    pathname === item.href
                      ? 'bg-red-100 text-burgundy'
                      : 'text-black hover:bg-gray-100 hover:text-burgundy'
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <Link
                href="/contact"
                className={cn(
                  'block border-2 border-burgundy text-burgundy px-3 py-2 rounded-md text-lg font-medium hover:bg-burgundy hover:text-white transition-colors mt-4',
                  pathname === '/contact' && 'bg-burgundy text-white'
                )}
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:shadow-xl transition-all duration-300 group"
        >
          <ArrowUp className="h-6 w-6 text-burgundy group-hover:text-red-800" />
        </button>
      )}
    </>
  );
}


