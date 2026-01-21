import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'Dhanvantri Farms - Smart Farming Solutions',
  description: 'Global leader in smart farming solutions delivering premium infrastructure and technology in Polyhouse, Net House, Hydroponics, and Automation.',
  verification: {
    google: 'bQMG5pbXUPw1M_Gr4AAloHh-BhS9UeJiy3LD2wucqh4',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <body className={`${inter.className} ${poppins.variable}`}>
        <Analytics />
      <body className={`${inter.className} ${poppins.variable}`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
