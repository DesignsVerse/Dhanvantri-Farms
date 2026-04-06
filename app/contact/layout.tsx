import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Dhanvantri Farms',
  description: 'Get in touch with Dhanvantri Farms experts for smart farming solutions including Polyhouse, Hydroponics, Net House and Automation.',
  alternates: { canonical: '/contact' },
  robots: { index: true, follow: true },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
