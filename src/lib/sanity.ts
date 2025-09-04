import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Sanity client configuration
export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2025-09-03',
  useCdn: true, // Use CDN for faster, cached results
});

// Image URL builder
const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}

// GROQ Queries
export const queries = {
  // Homepage queries
  hero: `*[_type == "globalSettings"][0]{
    heroTitle,
    heroSubtitle,
    heroImage{asset->{url}, alt},
    ctaText
  }`,
  
  services: `*[_type == "service"] | order(_createdAt asc){
    _id,
    title,
    description,
    icon,
    image{asset->{url}, alt}
  }`,
  
  featuredProjects: `*[_type == "project" && featured == true][0...6] | order(_createdAt desc){
    _id,
    title,
    slug,
    mainImage{asset->{url}, alt},
    projectType->{title},
    description[0...2]
  }`,
  
  testimonials: `*[_type == "testimonial"] | order(_createdAt desc){
    _id,
    clientName,
    quote,
    rating,
    clientImage{asset->{url}, alt},
    videoUrl
  }`,
  
  // Portfolio queries
  allProjects: `*[_type == "project"] | order(_createdAt desc){
    _id,
    title,
    slug,
    mainImage{asset->{url}, alt},
    projectType->{title},
    description[0...2]
  }`,
  
  projectsByType: `*[_type == "project" && projectType._ref == $typeId] | order(_createdAt desc){
    _id,
    title,
    slug,
    mainImage{asset->{url}, alt},
    projectType->{title},
    description[0...2]
  }`,
  
  projectTypes: `*[_type == "projectType"] | order(title asc){
    _id,
    title,
    slug
  }`,
  
  // Single project query
  singleProject: `*[_type == "project" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    mainImage{asset->{url}, alt},
    projectType->{title},
    description,
    imageGallery[]{asset->{url}, alt},
    beforeAfterImages[]{
      before{asset->{url}, alt},
      after{asset->{url}, alt}
    },
    virtualTourUrl,
    details{
      location,
      year,
      materials,
      timeline,
      budget
    }
  }`,
  
  // Blog queries
  allPosts: `*[_type == "blogPost"] | order(publishDate desc){
    _id,
    title,
    slug,
    excerpt,
    featuredImage{asset->{url}, alt},
    publishDate,
    categories,
    author->{name, image{asset->{url}}}
  }`,
  
  singlePost: `*[_type == "blogPost" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    content,
    featuredImage{asset->{url}, alt},
    publishDate,
    categories,
    author->{name, bio, image{asset->{url}}}
  }`,
  
  // Global settings
  globalSettings: `*[_type == "globalSettings"][0]{
    companyName,
    contactEmail,
    phoneNumber,
    address,
    socialMedia{
      facebook,
      instagram,
      twitter,
      linkedin
    },
    calendlyUrl,
    accentColor,
    sustainabilityStatement
  }`,
};
