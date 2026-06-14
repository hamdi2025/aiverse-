import { MetadataRoute } from 'next';
import { TOOLS_DATA } from '@/lib/tools';
import { BLOG_POSTS } from '@/lib/blog';
import { TOP_ALTERNATIVES } from '@/lib/alternatives';
import { BEST_FOR } from '@/lib/bestFor';

const BASE_URL = 'https://getaiverse.online';
const LOCALES = ['en', 'fr', 'es', 'ar'];

const TOP_COMPARISONS = [
  'chatgpt-vs-claude','chatgpt-vs-gemini','midjourney-vs-dalle3',
  'midjourney-vs-stable-diffusion','jasper-vs-writesonic','jasper-vs-copy-ai',
  'claude-vs-gemini','grammarly-ai-vs-quillbot','runway-ml-vs-pika-labs',
  'notion-ai-vs-coda-ai','bolt-new-vs-v0-dev','cursor-vs-github-copilot',
  'elevenlabs-vs-murf-ai','opus-clip-vs-fliki-ai','reclaim-ai-vs-fireflies-ai',
  'gamma-app-vs-tome-ai','beautiful-ai-vs-pitch-deck-ai','surfer-seo-vs-semrush-ai',
  'ilovepdf-ai-vs-smallpdf','tinypng-ai-vs-squoosh-app',
  // AI agent comparisons
  'autogpt-vs-agentgpt','langchain-vs-crewai','crewai-vs-autogen',
  'n8n-ai-vs-flowise','dify-vs-flowise','langchain-vs-autogen',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const homepages = LOCALES.map(locale => ({
    url: `${BASE_URL}/${locale}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 1.0,
  }));

  const toolPages = TOOLS_DATA.flatMap(tool =>
    LOCALES.map(locale => ({
      url: `${BASE_URL}/${locale}/tools/${tool.id}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }))
  );

  const comparePages = TOP_COMPARISONS.flatMap(slug =>
    LOCALES.map(locale => ({
      url: `${BASE_URL}/${locale}/compare/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))
  );

  const alternativesIndexPages = LOCALES.map(locale => ({
    url: `${BASE_URL}/${locale}/alternatives`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const alternativesPages = TOP_ALTERNATIVES.flatMap(slug =>
    LOCALES.map(locale => ({
      url: `${BASE_URL}/${locale}/alternatives/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))
  );

  const blogIndexPages = LOCALES.map(locale => ({
    url: `${BASE_URL}/${locale}/blog`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const blogPostPages = BLOG_POSTS.flatMap(post =>
    LOCALES.map(locale => ({
      url: `${BASE_URL}/${locale}/blog/${post.slug}`,
      lastModified: new Date(post.publishedDate),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  );

  const bestPages = ['best', ...BEST_FOR.map((g) => `best/${g.slug}`)].flatMap(slug =>
    LOCALES.map(locale => ({
      url: `${BASE_URL}/${locale}/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))
  );

  const STATIC_PAGES = ['about', 'privacy', 'terms', 'disclosure', 'contact', 'submit', 'newsletter', 'stack', 'compare'];
  const staticPages = STATIC_PAGES.flatMap(slug =>
    LOCALES.map(locale => ({
      url: `${BASE_URL}/${locale}/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: slug === 'compare' ? 0.7 : 0.5,
    }))
  );

  return [...homepages, ...toolPages, ...comparePages, ...alternativesIndexPages, ...alternativesPages, ...blogIndexPages, ...blogPostPages, ...staticPages, ...bestPages];
}
