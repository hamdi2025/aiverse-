import { MetadataRoute } from 'next';
import { TOOLS_DATA } from '@/lib/tools';

const BASE_URL = 'https://aiverse-lemon.vercel.app';
const LOCALES = ['en', 'fr', 'es', 'ar'];

export default function sitemap(): MetadataRoute.Sitemap {
  const homepages = LOCALES.map((locale) => ({
    url: `${BASE_URL}/${locale}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 1.0,
  }));

  const toolPages = TOOLS_DATA.flatMap((tool) =>
    LOCALES.map((locale) => ({
      url: `${BASE_URL}/${locale}/tools/${tool.id}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }))
  );

  return [...homepages, ...toolPages];
}
