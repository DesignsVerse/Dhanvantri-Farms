import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Polyhouse Farming Solutions - Dhanvantri Farms',
  description: 'Premium polyhouse construction and farming solutions by Dhanvantri Farms. Increase yield with controlled environment agriculture.',
  alternates: { canonical: '/polyhouse' },
  robots: { index: true, follow: true },
};

export default function PolyhouseLayout({ children }: { children: React.ReactNode }) {
  return children;
}
