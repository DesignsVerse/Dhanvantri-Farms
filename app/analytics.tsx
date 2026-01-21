'use client';

import Script from 'next/script';

export default function Analytics() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-9KZME0F68Q"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-9KZME0F68Q');
        `}
      </Script>
    </>
  );
}
