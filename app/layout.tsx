import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'Dhanvantri Farms - Smart Farming Solutions',
  description: 'Global leader in smart farming solutions delivering premium infrastructure and technology in Polyhouse, Net House, Hydroponics, and Automation.',
};

// Ensure correct mobile scaling so Tailwind breakpoints behave as expected on real devices.
export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${poppins.variable}`}>
        <Navigation />

        <main className="min-h-screen">{children}</main>

        <Footer />

        {/* WhatsApp Floating Button */}
        <WhatsAppButton />

        {/* GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9KZME0F68Q"
          strategy="afterInteractive"
        />
        <Script id="ga-setup" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9KZME0F68Q');
          `}
        </Script>
      </body>
    </html>
  );
}
