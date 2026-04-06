import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Warehouse Solutions - Dhanvantri Farms',
  description: 'Agricultural warehouse construction and management by Dhanvantri Farms. Efficient storage solutions for farm produce.',
  alternates: { canonical: '/warehouse' },
  robots: { index: true, follow: true },
};

export default function WarehouseLayout({ children }: { children: React.ReactNode }) {
  return children;
}
