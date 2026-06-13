// SEO metadata helper for the homepage
export const getHomeMetadata = (locale: string) => {
  const titles: Record<string, string> = {
    en: "AIverse — Best AI Tools Directory 2026 | 1000+ AI Tools & 100+ Agents",
    fr: "AIverse — Meilleurs Outils IA 2026 | 1000+ Outils & 100+ Agents",
    es: "AIverse — Mejores Herramientas IA 2026 | 1000+ Herramientas & 100+ Agentes",
    ar: "AIverse — أفضل أدوات الذكاء الاصطناعي 2026 | 1000+ أداة و100+ وكيل",
  };
  const descs: Record<string, string> = {
    en: "Discover 1000+ AI tools and 100+ AI agents in 15 categories: writing, image, code, video, SEO, PDF, 3D design, slides, Excel, file conversion and more. Updated daily.",
    fr: "Découvrez 1000+ outils IA et 100+ agents IA en 15 catégories : rédaction, image, code, vidéo, SEO, PDF, design 3D, diapositives, Excel, conversion de fichiers et plus.",
    es: "Descubre 1000+ herramientas IA y 100+ agentes IA en 15 categorías: escritura, imagen, código, video, SEO, PDF, diseño 3D, diapositivas, Excel, conversión de archivos y más.",
    ar: "اكتشف أكثر من 555 أداة ذكاء اصطناعي و100 وكيل ذكي في 15 فئة: الكتابة والصور والبرمجة والفيديو والـ SEO وPDF والتصميم ثلاثي الأبعاد والعروض و Excel وتحويل الملفات.",
  };
  const keywords: Record<string, string> = {
    en: "AI tools, AI agents, best AI tools 2026, ChatGPT alternatives, AI image generator, AI video maker, AI SEO tools, AI presentation maker, PDF AI tools, 3D AI design, Excel AI, file converter, file compressor, AI writing tools",
    fr: "outils IA, agents IA, meilleurs outils IA 2026, alternatives ChatGPT, générateur images IA, éditeur vidéo IA, outils SEO IA, créateur présentations IA, outils PDF, design 3D IA, Excel IA",
    es: "herramientas IA, agentes IA, mejores herramientas IA 2026, alternativas ChatGPT, generador imágenes IA, editor video IA, herramientas SEO IA, creador presentaciones IA, herramientas PDF, diseño 3D IA",
    ar: "أدوات ذكاء اصطناعي، وكلاء ذكاء اصطناعي، أفضل أدوات ذكاء اصطناعي 2026، بدائل ChatGPT، مولد صور ذكي، محرر فيديو ذكي، أدوات SEO، منشئ عروض ذكي، أدوات PDF، تصميم ثلاثي الأبعاد",
  };
  return { title: titles[locale] || titles.en, description: descs[locale] || descs.en, keywords: keywords[locale] || keywords.en };
};
