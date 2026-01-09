import { useState, useEffect } from 'react';
import type { CMSContent, HeroSlide, Service, FAQ, Testimonial, Achievement, AboutContent } from '@/lib/data/types';

export function useCMSContent<T extends keyof CMSContent>(section: T): {
  data: CMSContent[T] | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
} {
  const [data, setData] = useState<CMSContent[T] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`/api/cms?section=${section}`);
      const result = await response.json();
      if (result.success) {
        setData(result.data);
      } else {
        setError('Failed to fetch data');
      }
    } catch (err) {
      setError('Failed to fetch data');
      console.error('Error fetching CMS content:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [section]);

  return { data, loading, error, refetch: fetchData };
}

// Specific hooks for each content type
export function useHeroSlides() {
  return useCMSContent('hero') as { data: HeroSlide[] | null; loading: boolean; error: string | null; refetch: () => void };
}

export function useServices() {
  return useCMSContent('services') as { data: Service[] | null; loading: boolean; error: string | null; refetch: () => void };
}

export function useFAQs() {
  return useCMSContent('faqs') as { data: FAQ[] | null; loading: boolean; error: string | null; refetch: () => void };
}

export function useTestimonials() {
  return useCMSContent('testimonials') as { data: Testimonial[] | null; loading: boolean; error: string | null; refetch: () => void };
}

export function useAchievements() {
  return useCMSContent('achievements') as { data: Achievement[] | null; loading: boolean; error: string | null; refetch: () => void };
}

export function useAbout() {
  return useCMSContent('about') as { data: AboutContent | null; loading: boolean; error: string | null; refetch: () => void };
}


