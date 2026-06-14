import type { Metadata } from 'next';
import HomePageClient from '@/components/home/HomePageClient';
import { getHomeMetadata } from './page-metadata';

const BASE = 'https://getaiverse.online';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale;
  const { title, description, keywords } = getHomeMetadata(locale);
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `${BASE}/${locale}`,
      languages: {
        en: `${BASE}/en`, fr: `${BASE}/fr`,
        es: `${BASE}/es`, ar: `${BASE}/ar`,
      },
    },
    openGraph: {
      title, description,
      url: `${BASE}/${locale}`, siteName: 'AIverse', type: 'website',
    },
  };
}

export default function HomePage() {
  return <HomePageClient />;
}
