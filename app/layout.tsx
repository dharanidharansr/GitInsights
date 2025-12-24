import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { Instrument_Serif, Inter_Tight, Space_Mono } from 'next/font/google'
import './globals.css'

// Configure fonts using Next.js font optimization
const instrumentSerif = Instrument_Serif({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-instrument-serif',
})

const interTight = Inter_Tight({
  weight: ['300', '400', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter-tight',
})

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://gitinsights18.vercel.app'),
  title: 'GitInsights 2025 - Your Year in Code | GitHub Wrapped',
  description: 'Relive your coding journey with GitInsights 2025. Transform your GitHub contributions into a stunning cinematic experience with beautiful animations and personalized insights. Your GitHub Wrapped for 2025!',
  keywords: [
    // Primary keywords
    'GitInsights',
    'Git Story',
    'GitHub Wrapped',
    'GitHub Wrapped 2025',
    'Git Wrapped',
    'Git Wrapped 2025',
    // Feature keywords
    'GitHub Year in Review',
    'GitHub Stats',
    'GitHub Statistics',
    'GitHub Contributions',
    'GitHub Analytics',
    'GitHub Profile Stats',
    'GitHub Activity',
    'GitHub Summary',
    // Comparison/alternative keywords
    'Spotify Wrapped for GitHub',
    'GitHub Recap',
    'GitHub Rewind',
    'Developer Wrapped',
    'Coder Wrapped',
    'Code Wrapped',
    'Coding Year Review',
    // Action keywords
    'GitHub Visualization',
    'Code Visualization',
    'Contribution Graph',
    'Commit History',
    'Programming Stats',
    // Long-tail keywords
    'Year in Code 2025',
    'Developer Year Review',
    'GitHub Profile Wrapped',
    'GitHub Contribution Summary',
    'Open Source Stats',
    'Developer Statistics 2025',
    'Coding Journey 2025',
    'GitHub Cinematic Experience',
  ],
  authors: [{ name: 'GitInsights', url: 'https://gitinsights18.vercel.app' }],
  creator: 'GitInsights',
  publisher: 'GitInsights',
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
  openGraph: {
    type: 'website',
    url: 'https://gitinsights18.vercel.app',
    title: 'GitInsights 2025 - Your Year in Code | GitHub Wrapped',
    description: 'Relive your coding journey with GitInsights 2025. Transform your GitHub contributions into a stunning cinematic experience. Your GitHub Wrapped for 2025!',
    siteName: 'GitInsights',
    locale: 'en_US',
    images: [
      {
        url: 'https://gitinsights18.vercel.app/card.png',
        secureUrl: 'https://gitinsights18.vercel.app/card.png',
        width: 1200,
        height: 630,
        alt: 'GitInsights 2025 - GitHub Wrapped Preview',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GitInsights 2025 - Your Year in Code | GitHub Wrapped',
    description: 'Relive your coding journey with GitInsights 2025. Transform your GitHub contributions into a stunning cinematic experience. Your GitHub Wrapped for 2025!',
    images: ['https://gitinsights18.vercel.app/card.png'],
    creator: '@dharanidharansr',
    site: '@dharanidharansr',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'GitInsights',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/card.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://gitinsights18.vercel.app',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#0a0a0a',
}

// JSON-LD structured data for rich snippets
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'GitInsights 2025',
  description: 'Transform your GitHub contributions into a stunning cinematic experience. Your GitHub Wrapped for 2025!',
  url: 'https://gitinsights18.vercel.app',
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'INR',
  },
  author: {
    '@type': 'Person',
    name: 'Dharanidharan S R',
    url: 'https://dharanidharansr.tech',
  },
  screenshot: 'https://gitinsights18.vercel.app/card.png',
  image: 'https://gitinsights18.vercel.app/card.png',
  featureList: [
    'GitHub Year in Review',
    'Contribution Statistics',
    'Language Analytics',
    'Repository Insights',
    'Cinematic Animations',
    'Downloadable Poster',
  ],
  keywords: 'GitInsights, GitHub Wrapped, GitHub Wrapped 2025, Git Wrapped, Developer Stats, Code Visualization',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${interTight.variable} ${spaceMono.variable}`}>
      <head>
        {/* Manifest for PWA */}
        <link rel="manifest" href="/manifest.json" />
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Analytics />
        {children}
      </body>
    </html>
  )
}
