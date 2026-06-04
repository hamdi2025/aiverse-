import { MetadataRoute } from 'next';
import { TOOLS_DATA } from '@/lib/tools';

const BASE_URL = 'https://aiverse-lemon.vercel.app';
const LOCALES = ['en', 'fr', 'es', 'ar'];

const TOP_COMPARISONS = [
  'chatgpt-vs-claude',
  'chatgpt-vs-gemini',
  'midjourney-vs-dalle3',
  'midjourney-vs-stable-diffusion',
  'jasper-vs-writesonic',
  'jasper-vs-copy-ai',
  'claude-vs-gemini',
  'grammarly-ai-vs-quillbot',
  'runway-ml-vs-pika-labs',
  'notion-ai-vs-coda-ai',
  'bolt-new-vs-v0-dev',
  'cursor-vs-github-copilot',
  'elevenlabs-vs-murf-ai',
  'opus-clip-vs-fliki-ai',
  'reclaim-ai-vs-fireflies-ai',
];

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

  const comparePages = TOP_COMPARISONS.flatMap((slug) =>
    LOCALES.map((locale) => ({
      url: `${BASE_URL}/${locale}/compare/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    }))
  );

  return [...homepages, ...comparePages, ...toolPages];
}
