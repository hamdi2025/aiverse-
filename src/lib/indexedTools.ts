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
  'chatgpt', 'claude', 'gemini', 'perplexity', 'notebooklm', 'grok', 'deepseek', 'mistral',
  // Trending 2026 agents & open models (enriched: article + expert tips)
  'codex', 'devin', 'opencode', 'cline', 'aider', 'trae',
  'minimax', 'kimi', 'qwen', 'glm', 'hermes', 'llama',
  'claude-cowork', 'manus', 'openclaw', 'goose', 'gemini-cli', 'openai-operator',
  // New trending 2026 AI agents (autonomous workspaces & enterprise)
  'genspark', 'relay-app', 'glean', 'kimi-claw',
  // Top open-source AI projects (GitHub, thousands of stars) across domains
  'ollama', 'open-webui', 'browser-use', 'vllm', 'continue-dev',
  'comfyui', 'unsloth', 'llamaindex', 'anythingllm', 'jan-ai', 'langflow', 'whisper',
  // Open-source voice/audio, RAG/search, coding & image (GitHub)
  'coqui-tts', 'rvc', 'gpt-sovits', 'chattts', 'piper',
  'quivr', 'onyx', 'privategpt', 'haystack', 'metagpt', 'tabby', 'fooocus',
  // Open-source video, music, automation, memory, docs & search (GitHub)
  'hunyuanvideo', 'mochi-1', 'cogvideox', 'open-sora', 'audiocraft', 'stable-audio-open',
  'activepieces', 'mem0', 'letta', 'marker', 'perplexica', 'iopaint',
  // Open-source 3D, data/SQL, translation, scraping, frameworks & web agents
  'triposr', 'hunyuan3d', 'pandasai', 'vanna', 'libretranslate', 'argos-translate',
  'firecrawl', 'crawl4ai', 'dspy', 'pydantic-ai', 'skyvern', 'docling',
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
