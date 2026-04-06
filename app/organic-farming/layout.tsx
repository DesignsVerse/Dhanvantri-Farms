import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Organic Farming Solutions - Dhanvantri Farms',
  description: 'Sustainable organic farming solutions by Dhanvantri Farms. Natural cultivation methods for healthier produce and better returns.',
  alternates: { canonical: '/organic-farming' },
  robots: { index: true, follow: true },
};

export default function OrganicFarmingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
