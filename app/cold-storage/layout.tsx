import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cold Storage Solutions - Dhanvantri Farms',
  description: 'Modern cold storage infrastructure by Dhanvantri Farms. Preserve produce quality and reduce post-harvest losses.',
  alternates: { canonical: '/cold-storage' },
  robots: { index: true, follow: true },
};

export default function ColdStorageLayout({ children }: { children: React.ReactNode }) {
  return children;
}
