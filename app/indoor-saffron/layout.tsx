import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Indoor Saffron Farming - Dhanvantri Farms',
  description: 'Indoor saffron cultivation technology by Dhanvantri Farms. Grow premium saffron year-round with controlled environment systems.',
  alternates: { canonical: '/indoor-saffron' },
  robots: { index: true, follow: true },
};

export default function IndoorSaffronLayout({ children }: { children: React.ReactNode }) {
  return children;
}
