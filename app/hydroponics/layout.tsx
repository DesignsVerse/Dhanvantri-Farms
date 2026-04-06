import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hydroponics Farming - Dhanvantri Farms',
  description: 'Advanced hydroponics farming systems by Dhanvantri Farms. Soil-free, water-efficient crop production for modern agriculture.',
  alternates: { canonical: '/hydroponics' },
  robots: { index: true, follow: true },
};

export default function HydroponicsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
