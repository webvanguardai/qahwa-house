import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Qahwa House | Specialty Coffee Roastery & Café Dubai',
  description: 'Dubai\'s finest specialty coffee roastery in the heart of d3. Single-origin beans, expert baristas, and a warm space to connect. Visit us at Dubai Design District.',
  keywords: [
    'specialty coffee Dubai',
    'coffee roastery Dubai',
    'best coffee Dubai Design District',
    'third wave coffee Dubai',
    'qahwa cafe Dubai',
    'artisan coffee Dubai',
    'single origin coffee Dubai',
    'coffee shop d3 Dubai',
    'pour over coffee Dubai',
    'espresso bar Dubai',
  ],
  authors: [{ name: 'Qahwa House' }],
  creator: 'Qahwa House',
  metadataBase: new URL('https://qahwa-house.vercel.app'),
  alternates: {
    canonical: 'https://qahwa-house.vercel.app',
  },
  openGraph: {
    type: 'website',
    url: 'https://qahwa-house.vercel.app',
    title: 'Qahwa House | Specialty Coffee Roastery & Café Dubai',
    description: 'Dubai\'s finest specialty coffee roastery. Single-origin beans, expert baristas, and a warm space to connect in Dubai Design District.',
    siteName: 'Qahwa House',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Qahwa House Specialty Coffee Dubai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Qahwa House | Specialty Coffee Dubai',
    description: 'Dubai\'s finest specialty coffee roastery in Dubai Design District.',
    images: ['https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Inter:wght@300;400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        {/* GA4 */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-PLACEHOLDER" strategy="afterInteractive" />
        <Script id="ga4" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-PLACEHOLDER');
        `}</Script>
        {children}
      </body>
    </html>
  )
}
