import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Dhanvantri Farms',
  description: 'Learn about Dhanvantri Farms, our mission, vision and commitment to transforming agriculture with smart farming technology.',
  alternates: { canonical: '/about' },
  robots: { index: true, follow: true },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
