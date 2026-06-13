import { MetadataRoute } from 'next';
import { TOOLS_DATA } from '@/lib/tools';
import { BLOG_POSTS } from '@/lib/blog';
import { TOP_ALTERNATIVES } from '@/lib/alternatives';

const BASE_URL = 'https://getaiverse.online';
const LOCALES = ['en', 'fr', 'es', 'ar'];
const CATEGORIES = ['writing','image','code','video','audio','marketing','productivity','agents','slides','excel','design3d','seo','pdf','compression','conversion','translation','chatbots','data','hr','finance','contract','projectmgmt','mindmap','elearning','legal','cybersecurity','socialmedia','travel'];

const TOP_COMPARISONS = [
  'chatgpt-vs-claude','chatgpt-vs-gemini','midjourney-vs-dalle3',
  'midjourney-vs-stable-diffusion','jasper-vs-writesonic','jasper-vs-copy-ai',
  'claude-vs-gemini','grammarly-ai-vs-quillbot','runway-ml-vs-pika-labs',
  'notion-ai-vs-coda-ai','bolt-new-vs-v0-dev','cursor-vs-github-copilot',
  'elevenlabs-vs-murf-ai','opus-clip-vs-fliki-ai','reclaim-ai-vs-fireflies-ai',
  'gamma-app-vs-tome-ai','beautiful-ai-vs-pitch-deck-ai','surfer-seo-vs-semrush-ai',
  'ilovepdf-ai-vs-smallpdf','tinypng-ai-vs-squoosh-app',
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

  const categoryPages = CATEGORIES.flatMap(cat =>
    LOCALES.map(locale => ({
      url: `${BASE_URL}/${locale}?category=${cat}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
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

  return [...homepages, ...toolPages, ...categoryPages, ...comparePages, ...alternativesIndexPages, ...alternativesPages, ...blogIndexPages, ...blogPostPages];
}
