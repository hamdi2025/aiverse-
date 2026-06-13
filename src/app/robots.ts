import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      // AI assistants / answer engines — explicitly allowed for citation (GEO)
      { userAgent: ['GPTBot', 'ChatGPT-User', 'OAI-SearchBot'], allow: '/' }, // OpenAI / ChatGPT
      { userAgent: ['ClaudeBot', 'anthropic-ai', 'Claude-Web'], allow: '/' }, // Anthropic / Claude
      { userAgent: 'PerplexityBot', allow: '/' }, // Perplexity
      { userAgent: 'Google-Extended', allow: '/' }, // Gemini / AI Overviews
      { userAgent: ['CCBot', 'Bytespider'], allow: '/' }, // Common Crawl (used by many LLMs incl. DeepSeek/Qwen/GLM/MiniMax training)
    ],
    sitemap: 'https://getaiverse.online/sitemap.xml',
  };
}
