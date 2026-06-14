// SEO metadata helper for the homepage
export const getHomeMetadata = (locale: string) => {
  const titles: Record<string, string> = {
    en: "AIverse — Best AI Tools Directory 2026 | 580+ AI Tools & 60+ Agents",
    fr: "AIverse — Meilleurs Outils IA 2026 | 580+ Outils & 60+ Agents",
    es: "AIverse — Mejores Herramientas IA 2026 | 580+ Herramientas & 60+ Agentes",
    ar: "AIverse — أفضل أدوات الذكاء الاصطناعي 2026 | 580+ أداة و60+ وكيل",
  };
  const descs: Record<string, string> = {
    en: "Discover 580+ AI tools and 60+ AI agents across 28 categories: writing, image, code, video, audio, SEO, PDF, 3D design, slides, Excel and more. Compare tools, find alternatives, and read buying guides. Updated regularly.",
    fr: "Découvrez 580+ outils IA et 60+ agents IA dans 28 catégories : rédaction, image, code, vidéo, audio, SEO, PDF, design 3D, diapositives, Excel et plus. Comparez les outils et trouvez des alternatives.",
    es: "Descubre 580+ herramientas IA y 60+ agentes IA en 28 categorías: escritura, imagen, código, video, audio, SEO, PDF, diseño 3D, diapositivas, Excel y más. Compara herramientas y encuentra alternativas.",
    ar: "اكتشف أكثر من 580 أداة ذكاء اصطناعي و60+ وكيلاً في 28 فئة: الكتابة والصور والبرمجة والفيديو والصوت والـ SEO وPDF والتصميم ثلاثي الأبعاد والعروض و Excel والمزيد. قارن الأدوات وابحث عن البدائل.",
  };
  const keywords: Record<string, string> = {
    en: "AI tools, AI agents, best AI tools 2026, ChatGPT alternatives, AI image generator, AI video maker, AI SEO tools, AI presentation maker, PDF AI tools, 3D AI design, Excel AI, file converter, file compressor, AI writing tools",
    fr: "outils IA, agents IA, meilleurs outils IA 2026, alternatives ChatGPT, générateur images IA, éditeur vidéo IA, outils SEO IA, créateur présentations IA, outils PDF, design 3D IA, Excel IA",
    es: "herramientas IA, agentes IA, mejores herramientas IA 2026, alternativas ChatGPT, generador imágenes IA, editor video IA, herramientas SEO IA, creador presentaciones IA, herramientas PDF, diseño 3D IA",
    ar: "أدوات ذكاء اصطناعي، وكلاء ذكاء اصطناعي، أفضل أدوات ذكاء اصطناعي 2026، بدائل ChatGPT، مولد صور ذكي، محرر فيديو ذكي، أدوات SEO، منشئ عروض ذكي، أدوات PDF، تصميم ثلاثي الأبعاد",
  };
  return { title: titles[locale] || titles.en, description: descs[locale] || descs.en, keywords: keywords[locale] || keywords.en };
};
