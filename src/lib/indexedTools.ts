// ─────────────────────────────────────────────────────────────
// INDEXATION STRATEGY — "Quality concentrated"
// ─────────────────────────────────────────────────────────────
// AdSense flagged the site for "low value / scaled content" and Google
// only indexes a tiny fraction of the ~2,800 generated pages. Fighting that
// with thin pages doesn't work. Instead we concentrate quality: only a
// curated core of strong, well-known, richly-documented tools stays
// indexable. Every other tool page is set to noindex (still fully
// browsable for users, just not judged by Google as thin content).
//
// These are the ~45 tools that are either (a) the most-searched mainstream
// products or (b) the trending 2026 tools we enriched with a unique
// editorial article + hand-written expert tips.
export const TOP_TOOLS: string[] = [
  // Mainstream flagship assistants & LLMs
  'chatgpt', 'claude', 'gemini', 'perplexity', 'notebooklm',
  // Trending 2026 agents & open models (enriched: article + expert tips)
  'codex', 'devin', 'opencode', 'cline', 'aider', 'trae',
  'minimax', 'kimi', 'qwen', 'glm', 'hermes', 'llama',
  'claude-cowork', 'manus', 'openclaw', 'goose', 'gemini-cli', 'openai-operator',
  // Coding
  'cursor', 'github-copilot',
  // Image
  'midjourney', 'dall-e-3', 'flux', 'stable-diffusion',
  // Writing & productivity
  'jasper', 'copy-ai', 'writesonic', 'grammarly-ai', 'quillbot', 'notion-ai', 'deepl',
  // Voice, video & audio
  'elevenlabs', 'suno', 'murf-ai', 'runway-ml', 'pika-labs', 'synthesia', 'heygen', 'descript',
  // Design, slides & SEO
  'canva-ai', 'gamma-app', 'tome-ai', 'surfer-seo', 'semrush-ai',
];

export function isIndexedTool(id: string): boolean {
  return TOP_TOOLS.includes(id);
}
