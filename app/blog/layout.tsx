import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Dhanvantri Farms',
  description: 'Read the latest articles on smart farming, polyhouse technology, hydroponics and sustainable agriculture from Dhanvantri Farms.',
  alternates: { canonical: '/blog' },
  robots: { index: true, follow: true },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
