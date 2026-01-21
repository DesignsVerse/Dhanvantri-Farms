import Script from 'next/script'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navigation />

        <main>{children}</main>

        <Footer />

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
  )
}
