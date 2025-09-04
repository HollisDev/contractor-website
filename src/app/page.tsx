import { CallToAction } from '@/components/sections/call-to-action';
import { FeaturedProjects } from '@/components/sections/featured-projects';
import { Hero } from '@/components/sections/hero';
import { Services } from '@/components/sections/services';
import { Testimonials } from '@/components/sections/testimonials';
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
      
      {/* Services Overview */}
      <Services />
      
      {/* Featured Projects */}
      <FeaturedProjects />
      
      {/* Why Choose Us */}
      <WhyChooseUs />
      
      {/* Testimonials */}
      <Testimonials />
      
      {/* Call to Action */}
      <CallToAction />
    </div>
  );
}
