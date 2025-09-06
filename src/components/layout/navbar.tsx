'use client';

import { cn } from '@/lib/utils';
import { ArrowUp, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const leftNavigation = [
  { name: 'About Us', href: '#about-us' },
  { name: 'Services', href: '#our-services' },
  { name: 'Before & After', href: '#before-after' },
  { name: 'Our Process', href: '#process-timeline' },
];

const rightNavigation = [
  { name: 'Gallery', href: '#project-gallery' },
  { name: 'Why Choose Us', href: '#why-choose-us' },
  { name: 'Our Promise', href: '#our-promise' },
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
      <nav className="fixed top-0 z-50 w-full backdrop-blur-lg border-b bg-white border-white/10 shadow-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
        <div className="w-full px-8 sm:px-12 lg:px-16">
          <div className="flex justify-between items-center h-32 w-full relative">
            {/* Left Navigation - Push to far left */}
            <div className="hidden nav:flex items-center space-x-6 xl:space-x-8">
              {leftNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'text-lg xl:text-xl font-medium transition-all duration-200 hover:bg-gray-100 px-3 py-2 rounded-md whitespace-nowrap',
                    pathname === item.href
                      ? 'text-black border-b-2 border-black pb-1'
                      : 'text-black'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Center Logo - Centered with maximum space */}
            <Link href="/" className="absolute left-1/2 transform -translate-x-1/2 text-center">
              <div className="flex flex-col items-center ">
                <Image
                  src="/image-assets/nav-bar/measuring-tape.png"
                  alt="Measuring Tape"
                  width={330}
                  height={85}
                  className="mb-1 -mt-1 -ml-3" 
                  priority
                />
                <div className="text-base sm:text-lg md:text-xl lg:text-3xl text-black leading-tight font-bold -mt-4 mb-1  whitespace-nowrap">
                  Reputation Builders
                </div>
              </div>
            </Link>

            {/* Right Navigation - Push to far right */}
            <div className="hidden nav:flex items-center space-x-6 xl:space-x-8">
              {rightNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'text-lg xl:text-xl font-medium transition-all duration-200 hover:bg-gray-100 px-3 py-2 rounded-md whitespace-nowrap',
                    pathname === item.href
                      ? 'text-black border-b-2 border-black pb-1'
                      : 'text-black'
                  )}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Contact Us Button */}
              <Link
                href="#contact"
                className={cn(
                  'border-2 border-black text-black px-6 py-2 text-xl font-medium hover:bg-black hover:text-white transition-colors shadow-lg rounded-md',
                  pathname === '#contact' && 'bg-black text-white'
                )}
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="nav:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-black hover:text-black hover:bg-gray-100"
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
                      ? 'bg-gray-100 text-black'
                      : 'text-black hover:bg-gray-100 hover:text-black'
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <Link
                href="/contact"
                className={cn(
                  'block border-2 border-black text-black px-3 py-2 rounded-xl text-lg font-medium hover:bg-black hover:text-white transition-colors mt-4',
                  pathname === '/contact' && 'bg-black text-white'
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
          <ArrowUp className="h-6 w-6 text-black group-hover:text-gray-800" />
        </button>
      )}
    </>
  );
}


