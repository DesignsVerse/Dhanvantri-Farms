import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mushroom Farming - Dhanvantri Farms',
  description: 'Complete mushroom cultivation setup and training by Dhanvantri Farms. High-yield mushroom farming solutions for entrepreneurs.',
  alternates: { canonical: '/mushroom' },
  robots: { index: true, follow: true },
};

export default function MushroomLayout({ children }: { children: React.ReactNode }) {
  return children;
}
