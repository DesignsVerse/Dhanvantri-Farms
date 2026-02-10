// Type definitions for CMS content

export interface HeroSlide {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  order: number;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
  order: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  order: number;
}

export interface Testimonial {
  id: string;
  quote: string;
  author?: string;
  location?: string;
  order: number;
}

export interface Achievement {
  id: string;
  label: string;
  value: number;
  suffix: string;
  order: number;
}

export interface AboutContent {
  title: string;
  description: string;
  image: string;
  tagline: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  dropdown?: Array<{
    id: string;
    label: string;
    href: string;
  }>;
  order: number;
}

export interface FooterContent {
  company: Array<{ label: string; href: string }>;
  support: Array<{ label: string; href: string }>;
  services: Array<{ label: string; href: string }>;
  phone: string;
  email: string;
  address: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  image?: string;
  category?: string;
  tags?: string[];
  featured?: boolean;
  order: number;
}

export interface CMSContent {
  hero: HeroSlide[];
  services: Service[];
  faqs: FAQ[];
  testimonials: Testimonial[];
  achievements: Achievement[];
  about: AboutContent;
  navigation: NavigationItem[];
  footer: FooterContent;
  blogs: BlogPost[];
}


