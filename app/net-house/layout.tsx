import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Net House Solutions - Dhanvantri Farms',
  description: 'High-quality net house construction for protected cultivation. Shield your crops from pests and harsh weather with Dhanvantri Farms.',
  alternates: { canonical: '/net-house' },
  robots: { index: true, follow: true },
};

export default function NetHouseLayout({ children }: { children: React.ReactNode }) {
  return children;
}
