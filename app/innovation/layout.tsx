import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Innovation in Agriculture - Dhanvantri Farms',
  description: 'Discover Dhanvantri Farms innovations in smart agriculture technology, sustainable farming and agri-tech solutions.',
  alternates: { canonical: '/innovation' },
  robots: { index: true, follow: true },
};

export default function InnovationLayout({ children }: { children: React.ReactNode }) {
  return children;
}
