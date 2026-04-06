import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services - Dhanvantri Farms',
  description: 'Explore Dhanvantri Farms services including Polyhouse, Net House, Hydroponics, Automation, Cold Storage and more.',
  alternates: { canonical: '/services' },
  robots: { index: true, follow: true },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
