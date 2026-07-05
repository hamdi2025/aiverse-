// SEO metadata helper for the homepage
export const getHomeMetadata = (locale: string) => {
  const titles: Record<string, string> = {
    en: "AIverse — Best AI Tools Directory 2026 | 580+ AI Tools & 60+ Agents",
    fr: "AIverse — L'annuaire des outils & agents IA en français et en arabe 2026",
    es: "AIverse — Mejores Herramientas IA 2026 | 580+ Herramientas & 60+ Agentes",
    ar: "AIverse — الدليل العربي لأدوات ووكلاء الذكاء الاصطناعي 2026",
  };
  const descs: Record<string, string> = {
    en: "Discover 580+ AI tools and 60+ AI agents across 28 categories: writing, image, code, video, audio, SEO, PDF, 3D design, slides, Excel and more. Compare tools, find alternatives, and read buying guides. Updated regularly.",
    fr: "L'annuaire multilingue de référence : comparez 580+ outils IA et 60+ agents, trouvez des alternatives et lisez des guides pratiques pour choisir le bon outil — en français et en arabe, gratuitement.",
    es: "Descubre 580+ herramientas IA y 60+ agentes IA en 28 categorías: escritura, imagen, código, video, audio, SEO, PDF, diseño 3D, diapositivas, Excel y más. Compara herramientas y encuentra alternativas.",
    ar: "أكبر دليل عربي لأدوات الذكاء الاصطناعي: قارن أكثر من 580 أداة و60 وكيلاً، واعثر على البدائل، واقرأ أدلة عملية لاختيار الأداة المناسبة لك — بالعربية ومجاناً.",
  };
  const keywords: Record<string, string> = {
    en: "AI tools, AI agents, best AI tools 2026, ChatGPT alternatives, AI image generator, AI video maker, AI SEO tools, AI presentation maker, PDF AI tools, 3D AI design, Excel AI, file converter, file compressor, AI writing tools",
    fr: "outils IA en français, annuaire IA francophone, meilleurs outils IA gratuits, agents IA, alternatives ChatGPT, comparateur outils IA, outils intelligence artificielle, guide outils IA",
    es: "herramientas IA, agentes IA, mejores herramientas IA 2026, alternativas ChatGPT, generador imágenes IA, editor video IA, herramientas SEO IA, creador presentaciones IA, herramientas PDF, diseño 3D IA",
    ar: "أدوات الذكاء الاصطناعي بالعربية، دليل أدوات الذكاء الاصطناعي، أفضل أدوات ذكاء اصطناعي مجانية، وكلاء الذكاء الاصطناعي، بدائل ChatGPT، مقارنة أدوات الذكاء الاصطناعي، أدوات ai عربية",
  };
  return { title: titles[locale] || titles.en, description: descs[locale] || descs.en, keywords: keywords[locale] || keywords.en };
};
