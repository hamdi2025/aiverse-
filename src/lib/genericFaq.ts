import type { AITool } from './tools';
import type { Locale, FAQItem } from './faq';

// Category label per locale, used to build natural sentences like
// "X is an AI <label> tool" / "X est un outil IA de <label>".
const CATEGORY_LABEL: Record<string, Record<Locale, string>> = {
  agents: { en: 'AI agent', fr: 'agents IA', es: 'agentes IA', ar: 'الوكلاء الذكيين' },
  writing: { en: 'writing', fr: 'rédaction', es: 'redacción', ar: 'الكتابة' },
  image: { en: 'image generation', fr: 'génération d\'images', es: 'generación de imágenes', ar: 'توليد الصور' },
  code: { en: 'coding', fr: 'codage', es: 'programación', ar: 'البرمجة' },
  video: { en: 'video', fr: 'vidéo', es: 'vídeo', ar: 'الفيديو' },
  audio: { en: 'audio', fr: 'audio', es: 'audio', ar: 'الصوت' },
  marketing: { en: 'marketing', fr: 'marketing', es: 'marketing', ar: 'التسويق' },
  productivity: { en: 'productivity', fr: 'productivité', es: 'productividad', ar: 'الإنتاجية' },
  seo: { en: 'SEO', fr: 'SEO', es: 'SEO', ar: 'تحسين محركات البحث' },
  socialmedia: { en: 'social media', fr: 'réseaux sociaux', es: 'redes sociales', ar: 'وسائل التواصل الاجتماعي' },
  chatbots: { en: 'chatbot', fr: 'chatbot', es: 'chatbot', ar: 'روبوتات المحادثة' },
  data: { en: 'data analysis', fr: 'analyse de données', es: 'análisis de datos', ar: 'تحليل البيانات' },
  design3d: { en: '3D design', fr: 'design 3D', es: 'diseño 3D', ar: 'التصميم ثلاثي الأبعاد' },
  slides: { en: 'presentation', fr: 'présentation', es: 'presentaciones', ar: 'العروض التقديمية' },
  excel: { en: 'spreadsheet', fr: 'tableurs', es: 'hojas de cálculo', ar: 'جداول البيانات' },
  translation: { en: 'translation', fr: 'traduction', es: 'traducción', ar: 'الترجمة' },
  finance: { en: 'finance', fr: 'finance', es: 'finanzas', ar: 'المالية' },
  contract: { en: 'contract management', fr: 'gestion de contrats', es: 'gestión de contratos', ar: 'إدارة العقود' },
  projectmgmt: { en: 'project management', fr: 'gestion de projet', es: 'gestión de proyectos', ar: 'إدارة المشاريع' },
  mindmap: { en: 'mind mapping', fr: 'cartes mentales', es: 'mapas mentales', ar: 'الخرائط الذهنية' },
  elearning: { en: 'e-learning', fr: 'e-learning', es: 'e-learning', ar: 'التعلم الإلكتروني' },
  legal: { en: 'legal', fr: 'juridique', es: 'legal', ar: 'القانون' },
  cybersecurity: { en: 'cybersecurity', fr: 'cybersécurité', es: 'ciberseguridad', ar: 'الأمن السيبراني' },
  pdf: { en: 'PDF', fr: 'PDF', es: 'PDF', ar: 'PDF' },
  compression: { en: 'file compression', fr: 'compression de fichiers', es: 'compresión de archivos', ar: 'ضغط الملفات' },
  conversion: { en: 'file conversion', fr: 'conversion de fichiers', es: 'conversión de archivos', ar: 'تحويل الملفات' },
  travel: { en: 'travel', fr: 'voyage', es: 'viajes', ar: 'السفر' },
  hr: { en: 'HR', fr: 'RH', es: 'RRHH', ar: 'الموارد البشرية' },
};

const FALLBACK_LABEL: Record<Locale, string> = {
  en: 'AI', fr: 'IA', es: 'IA', ar: 'الذكاء الاصطناعي',
};

function pricingAnswer(tool: AITool): Record<Locale, string> {
  const { name, pricing, pricingLocalized } = tool;
  if (pricing === 'Free') {
    return {
      en: `Yes, ${name} is completely free to use, with no paid plan required to access its core features.`,
      fr: `Oui, ${name} est entièrement gratuit : aucun plan payant n'est nécessaire pour accéder à ses fonctionnalités principales.`,
      es: `Sí, ${name} es completamente gratuito: no necesitas un plan de pago para acceder a sus funciones principales.`,
      ar: `نعم، ${name} مجاني بالكامل، ولا حاجة لخطة مدفوعة للوصول إلى ميزاته الأساسية.`,
    };
  }
  if (pricing === 'Freemium') {
    return {
      en: `Yes — ${name} offers a free plan (${pricingLocalized.en}) plus a paid tier for advanced features and higher usage limits. You can start for free and upgrade only if you need more.`,
      fr: `Oui — ${name} propose un plan gratuit (${pricingLocalized.fr}) ainsi qu'une offre payante pour des fonctionnalités avancées et des limites plus élevées. Vous pouvez commencer gratuitement et passer à l'offre payante seulement si besoin.`,
      es: `Sí — ${name} ofrece un plan gratuito (${pricingLocalized.es}) además de un plan de pago con funciones avanzadas y límites más altos. Puedes empezar gratis y mejorar solo si lo necesitas.`,
      ar: `نعم — يقدم ${name} خطة مجانية (${pricingLocalized.ar}) بالإضافة إلى خطة مدفوعة بميزات متقدمة وحدود استخدام أعلى. يمكنك البدء مجاناً والترقية فقط عند الحاجة.`,
    };
  }
  return {
    en: `No, ${name} doesn't have a free plan — it's a paid tool (${pricingLocalized.en}). Some paid AI tools offer a free trial, so check the official site for current offers.`,
    fr: `Non, ${name} n'a pas de version gratuite : c'est un outil payant (${pricingLocalized.fr}). Certains outils IA payants proposent un essai gratuit, vérifiez le site officiel pour les offres en cours.`,
    es: `No, ${name} no tiene un plan gratuito: es una herramienta de pago (${pricingLocalized.es}). Algunas herramientas de pago ofrecen una prueba gratuita; consulta el sitio oficial para ver las ofertas actuales.`,
    ar: `لا، ${name} ليس له خطة مجانية، فهو أداة مدفوعة (${pricingLocalized.ar}). تقدم بعض الأدوات المدفوعة فترة تجريبية مجانية، تحقق من الموقع الرسمي للعروض الحالية.`,
  };
}

function pricingQuestion(name: string): Record<Locale, string> {
  return {
    en: `Is ${name} free?`,
    fr: `${name} est-il gratuit ?`,
    es: `¿Es ${name} gratis?`,
    ar: `هل ${name} مجاني؟`,
  };
}

function usageQuestion(name: string): Record<Locale, string> {
  return {
    en: `What is ${name} used for?`,
    fr: `À quoi sert ${name} ?`,
    es: `¿Para qué sirve ${name}?`,
    ar: `لماذا يُستخدم ${name}؟`,
  };
}

function usageAnswer(tool: AITool): Record<Locale, string> {
  const { name, rating, description } = tool;
  const label = CATEGORY_LABEL[tool.category] || { en: FALLBACK_LABEL.en, fr: FALLBACK_LABEL.fr, es: FALLBACK_LABEL.es, ar: FALLBACK_LABEL.ar };
  return {
    en: `${name} is an AI ${label.en} tool. ${description.en} It currently holds a ${rating}/5 rating on Aiverse from real users.`,
    fr: `${name} est un outil IA de ${label.fr}. ${description.fr} Il a actuellement une note de ${rating}/5 sur Aiverse selon les utilisateurs.`,
    es: `${name} es una herramienta de IA de ${label.es}. ${description.es} Actualmente tiene una valoración de ${rating}/5 en Aiverse según los usuarios.`,
    ar: `${name} هي أداة ذكاء اصطناعي في مجال ${label.ar}. ${description.ar} يحصل حالياً على تقييم ${rating}/5 على Aiverse من المستخدمين.`,
  };
}

function worthItQuestion(name: string): Record<Locale, string> {
  return {
    en: `Is ${name} worth it in 2026?`,
    fr: `${name} en vaut-il la peine en 2026 ?`,
    es: `¿Vale la pena ${name} en 2026?`,
    ar: `هل ${name} يستحق التجربة في 2026؟`,
  };
}

function worthItAnswer(tool: AITool): Record<Locale, string> {
  const { name, rating } = tool;
  const label = CATEGORY_LABEL[tool.category] || { en: FALLBACK_LABEL.en, fr: FALLBACK_LABEL.fr, es: FALLBACK_LABEL.es, ar: FALLBACK_LABEL.ar };
  if (rating >= 4.5) {
    return {
      en: `Yes — ${name} holds a strong ${rating}/5 rating on Aiverse, making it one of the top-rated ${label.en} tools in 2026. It's a solid pick if it matches your use case.`,
      fr: `Oui — ${name} affiche une excellente note de ${rating}/5 sur Aiverse, ce qui en fait l'un des outils de ${label.fr} les mieux notés en 2026. Un bon choix s'il correspond à votre usage.`,
      es: `Sí — ${name} tiene una excelente valoración de ${rating}/5 en Aiverse, lo que lo convierte en una de las herramientas de ${label.es} mejor valoradas en 2026. Una buena opción si se ajusta a tu caso de uso.`,
      ar: `نعم — يحصل ${name} على تقييم قوي ${rating}/5 على Aiverse، مما يجعله من أفضل أدوات ${label.ar} المصنفة في 2026. خيار جيد إذا كان يناسب استخدامك.`,
    };
  }
  if (rating >= 4.0) {
    return {
      en: `${name} is a solid choice with a ${rating}/5 rating on Aiverse — a reliable option in the ${label.en} category, though it's worth comparing alternatives below for your specific needs.`,
      fr: `${name} est un choix solide avec une note de ${rating}/5 sur Aiverse, une option fiable dans la catégorie ${label.fr}, mais il vaut la peine de comparer les alternatives ci-dessous selon vos besoins.`,
      es: `${name} es una opción sólida con una valoración de ${rating}/5 en Aiverse, una alternativa fiable en la categoría de ${label.es}, aunque vale la pena comparar las alternativas siguientes según tus necesidades.`,
      ar: `${name} خيار جيد بتقييم ${rating}/5 على Aiverse، خيار موثوق في فئة ${label.ar}، لكن يستحق مقارنته بالبدائل أدناه حسب احتياجاتك.`,
    };
  }
  return {
    en: `${name} has a ${rating}/5 rating on Aiverse. It may suit specific use cases, but it's worth checking the alternatives below before committing.`,
    fr: `${name} a une note de ${rating}/5 sur Aiverse. Il peut convenir à des cas d'usage spécifiques, mais il vaut la peine de consulter les alternatives ci-dessous avant de s'engager.`,
    es: `${name} tiene una valoración de ${rating}/5 en Aiverse. Puede servir para casos de uso específicos, pero vale la pena revisar las alternativas siguientes antes de decidirte.`,
    ar: `يحصل ${name} على تقييم ${rating}/5 على Aiverse. قد يناسب حالات استخدام معينة، لكن يستحق مراجعة البدائل أدناه قبل الالتزام.`,
  };
}

// Generic, direct-answer-first (AEO) FAQ used as a fallback for tools that
// don't have a curated entry in TOOL_FAQS (src/lib/faq.ts).
export function getGenericFaq(tool: AITool): FAQItem[] {
  return [
    { question: pricingQuestion(tool.name), answer: pricingAnswer(tool) },
    { question: usageQuestion(tool.name), answer: usageAnswer(tool) },
    { question: worthItQuestion(tool.name), answer: worthItAnswer(tool) },
  ];
}
