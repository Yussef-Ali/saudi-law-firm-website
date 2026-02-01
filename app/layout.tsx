import React from "react"
import type { Metadata } from 'next'
import { IBM_Plex_Sans_Arabic } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['arabic'],
  variable: '--font-sans',
});

import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    // Core legal terms
    'محامي', 'محامي الرياض', 'محامي في الرياض', 'محامي معتمد', 'محامي ممارس',
    'قانون', 'قانوني', 'استشارات قانونية', 'استشارة قانونية',

    // Practice areas
    'محامي جنائي', 'قضايا جنائية', 'محامي قضايا جنائية',
    'محامي شركات', 'قانون الشركات', 'تأسيس شركات',
    'محامي عمالي', 'قضايا عمالية', 'نزاعات عمالية',
    'محامي تجاري', 'عقود تجارية', 'قانون تجاري',
    'محامي استثمار', 'قانون الاستثمار',
    'محامي عقاري', 'عقود عقارية', 'نزاعات عقارية',
    'محامي أحوال شخصية', 'قضايا أسرية',

    // Services
    'صياغة عقود', 'مراجعة عقود', 'تمثيل قانوني',
    'ترافع', 'محاكم', 'قضايا',
    'وزارة العدل', 'هيئة الخبراء',

    // Location-based
    'السعودية', 'المملكة العربية السعودية',
    'الرياض', 'محامي الرياض', 'محامون في الرياض',

    // Target audience
    'محامي للأفراد', 'محامي للشركات',
    'خدمات قانونية', 'مكتب محاماة', 'محاماة',
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: '/og-image.jpg', // We should make sure this exists or use a default
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: ['/og-image.jpg'],
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
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
}

import { JsonLd } from '@/components/json-ld'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${_ibmPlexSansArabic.className} font-sans antialiased`}>
        <JsonLd />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
