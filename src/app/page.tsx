import { AboutUs } from '@/components/sections/about-us';
import { BeforeAfter } from '@/components/sections/before-after';
import { CallToAction } from '@/components/sections/call-to-action';
import { Hero } from '@/components/sections/hero';
import { OurPromise } from '@/components/sections/our-promise';
import { OurServices } from '@/components/sections/our-services';
import { WhyChooseUs } from '@/components/sections/why-choose-us';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Elite Home Remodeling | Transform Your Space with Expert Craftsmanship',
  description: 'Premium kitchen and bathroom remodeling services. Transform your home with our expert craftsmanship, innovative design solutions, and unmatched attention to detail.',
  openGraph: {
    title: 'Elite Home Remodeling | Transform Your Space',
    description: 'Premium kitchen and bathroom remodeling services with expert craftsmanship.',
    images: ['/og-homepage.jpg'],
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Full screen with parallax */}
      <Hero />
      
      {/* About Us Section */}
      <AboutUs />
      
      {/* Before & After Transformations */}
      <BeforeAfter />
      
      {/* Our Services with Image Scroller */}
      <OurServices />
      
      {/* Why Choose Us */}
      <WhyChooseUs />
      
      {/* Our Promise */}
      <OurPromise />
      
      {/* Call to Action */}
      <CallToAction />
    </div>
  );
}
