import { AboutUs } from '@/components/sections/about-us';
import { BeforeAfter } from '@/components/sections/before-after';
import { CallToAction } from '@/components/sections/call-to-action';
import { Hero } from '@/components/sections/hero';
import { OurPromise } from '@/components/sections/our-promise';
import { OurServices } from '@/components/sections/our-services';
import { ProcessTimeline } from '@/components/sections/process-timeline';
import { ProjectGallery } from '@/components/sections/project-gallery';
import { WhyChooseUs } from '@/components/sections/why-choose-us';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reputation Builders | Transform Your Dream Space',
  description: 'Premier home remodeling service in Modesto, CA. Transform your home with our expert craftsmanship and innovative solutions.',
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
      
      {/* Our Services with Image Scroller + Lighting Showcase */}
      <OurServices />
      
      {/* Process Timeline */}
      <ProcessTimeline />
      
      {/* Project Gallery */}
      <ProjectGallery />
      
      {/* Why Choose Us */}
      <WhyChooseUs />
      
      {/* Our Promise */}
      <OurPromise />
      
      {/* Call to Action */}
      <CallToAction />
    </div>
  );
}
