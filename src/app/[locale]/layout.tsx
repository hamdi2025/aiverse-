import React from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Script from 'next/script';
import { ADSENSE_CONFIG } from '@/config/adsense';
import { Inter } from 'next/font/google';

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
  // Validate that the incoming locale is supported
  const locales = ['en', 'fr', 'es', 'ar'];
  if (!locales.includes(locale)) {
    notFound();
  }

  // Receive messages for next-intl
  const messages = await getMessages();
  const direction = locale === 'ar' ? 'rtl' : 'ltr';

  const isAdSensePlaceholder = ADSENSE_CONFIG.publisherId.includes('ca-pub-1234567890123456');

  return (
    <html lang={locale} dir={direction} className="dark">
      <head>
        <meta name="google-site-verification" content="Gc5SbwLPT2C2zV7jHnFJj2pX2EvkjI3QIOsbQUVd6_8" />
        <meta name='impact-site-verification' content='65970350-7c75-4c0b-8992-b3e678105736' />
        {/* Google AdSense Script Integration */}
        {ADSENSE_CONFIG.enabled && !isAdSensePlaceholder && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CONFIG.publisherId}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
      </head>
      <body className={`${inter.className} bg-[#0A0A0F] text-[#F3F4F6] min-h-screen flex flex-col selection:bg-[#7C3AED] selection:text-white antialiased overflow-x-hidden`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Header />
          <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
            {children}
   