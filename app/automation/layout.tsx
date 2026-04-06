import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Farm Automation - Dhanvantri Farms',
  description: 'Smart farm automation systems by Dhanvantri Farms. IoT-based irrigation, climate control and monitoring for maximum efficiency.',
  alternates: { canonical: '/automation' },
  robots: { index: true, follow: true },
};

export default function AutomationLayout({ children }: { children: React.ReactNode }) {
  return children;
}
