import React from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Script from 'next/script';
import { ADSENSE_CONFIG } from '@/config/adsense';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { getHomeMetadata } from './page-metadata';

const BASE_URL = 'https://getaiverse.online';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { title, description, keywords } = getHomeMetadata(params.locale);
  return {
    metadataBase: new URL(BASE_URL),
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${params.locale}`,
      siteName: 'AIverse',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'fr' },
    { locale: 'es' },
    { locale: 'ar' }
  ];
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: LocaleLayoutProps) {
  const locales = ['en', 'fr', 'es', 'ar'];
  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();
  const direction = locale === 'ar' ? 'rtl' : 'ltr';
  return (
    <html lang={locale} dir={direction}>
      <head>
        <meta name="google-site-verification" content="Gc5SbwLPT2C2zV7jHnFJj2pX2EvkjI3QIOsbQUVd6_8" />
        <meta name="impact-site-verification" content="6aac91e5-f7f3-4393-bf45-173c3ca98a42" />
        <meta name="google-adsense-account" content="ca-pub-5384145624117299" />
        <Script
          id="org-website-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  '@id': 'https://getaiverse.online/#organization',
                  name: 'AIverse',
                  url: 'https://getaiverse.online',
                  logo: 'https://getaiverse.online/favicon.ico',
                  description: 'AIverse is a directory of 580+ AI tools and 60+ AI agents across 28 categories, with comparisons, alternatives, and AI buying guides, available in English, French, Spanish, and Arabic.',
                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://getaiverse.online/#website',
                  name: 'AIverse',
                  url: 'https://getaiverse.online',
                  publisher: { '@id': 'https://getaiverse.online/#organization' },
                  inLanguage: ['en', 'fr', 'es', 'ar'],
                  potentialAction: {
                    '@type': 'SearchAction',
                    target: 'https://getaiverse.online/en?search={search_term_string}',
                    'query-input': 'required name=search_term_string',
                  },
                },
              ],
            }),
          }}
        />
        {ADSENSE_CONFIG.enabled && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CONFIG.publisherId}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
      </head>
      <body className={`${inter.className} bg-white text-gray-900 min-h-screen flex flex-col selection:bg-[#7C3AED] selection:text-white antialiased overflow-x-hidden`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
