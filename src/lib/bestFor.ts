import type { Locale } from '@/navigation';

export interface BestForGuide {
  slug: string;
  emoji: string;
  toolIds: string[];
  name: Record<Locale, string>;   // short audience name, e.g. "students"
  title: Record<Locale, string>;  // H1 / page title
  intro: Record<Locale, string>;
  meta: Record<Locale, string>;
}

export const BEST_FOR: BestForGuide[] = [
  {
    slug: 'students',
    emoji: '🎓',
    toolIds: ['chatgpt', 'claude', 'google-notebooklm', 'quillbot', 'grammarly', 'notion-ai', 'gamma-app', 'perplexity'],
    name: { en: 'students', fr: 'étudiants', es: 'estudiantes', ar: 'الطلاب' },
    title: {
      en: 'Best AI Tools for Students in 2026',
      fr: 'Meilleurs Outils IA pour Étudiants en 2026',
      es: 'Mejores Herramientas IA para Estudiantes en 2026',
      ar: 'أفضل أدوات الذكاء الاصطناعي للطلاب في 2026',
    },
    intro: {
      en: 'From writing essays and summarizing PDFs to studying smarter and building presentations, these AI tools save students hours every week. Below are the best free and paid options in 2026, ranked with pricing and what each is best for.',
      fr: "De la rédaction de dissertations au résumé de PDF, en passant par les révisions et les présentations, ces outils IA font gagner des heures aux étudiants chaque semaine. Voici les meilleures options gratuites et payantes en 2026, classées avec leurs prix.",
      es: 'Desde redactar ensayos y resumir PDF hasta estudiar mejor y crear presentaciones, estas herramientas IA ahorran horas a los estudiantes cada semana. Aquí están las mejores opciones gratuitas y de pago en 2026.',
      ar: 'من كتابة المقالات وتلخيص ملفات PDF إلى الدراسة بذكاء وإنشاء العروض التقديمية، توفّر هذه الأدوات ساعات على الطلاب أسبوعيًا. إليك أفضل الخيارات المجانية والمدفوعة في 2026.',
    },
    meta: {
      en: 'The best AI tools for students in 2026 — for essays, research, summarizing PDFs, studying and presentations. Free and paid options compared.',
      fr: 'Les meilleurs outils IA pour étudiants en 2026 — dissertations, recherche, résumé de PDF, révisions et présentations. Options gratuites et payantes comparées.',
      es: 'Las mejores herramientas IA para estudiantes en 2026 — ensayos, investigación, resumen de PDF, estudio y presentaciones.',
      ar: 'أفضل أدوات الذكاء الاصطناعي للطلاب في 2026 — للمقالات والبحث وتلخيص PDF والدراسة والعروض.',
    },
  },
  {
    slug: 'content-creators',
    emoji: '🎬',
    toolIds: ['descript', 'opus-clip', 'elevenlabs', 'canva-ai', 'runway-ml', 'fliki', 'synthesia'],
    name: { en: 'content creators', fr: 'créateurs de contenu', es: 'creadores de contenido', ar: 'صنّاع المحتوى' },
    title: {
      en: 'Best AI Tools for Content Creators & YouTubers in 2026',
      fr: 'Meilleurs Outils IA pour Créateurs de Contenu & YouTubers en 2026',
      es: 'Mejores Herramientas IA para Creadores de Contenido y YouTubers en 2026',
      ar: 'أفضل أدوات الذكاء الاصطناعي لصنّاع المحتوى ويوتيوب في 2026',
    },
    intro: {
      en: 'Editing videos, generating voiceovers, repurposing long videos into shorts, and creating thumbnails — these AI tools help creators publish faster and grow their channels. Here are the best picks for 2026.',
      fr: "Montage vidéo, voix off, transformation de vidéos longues en shorts, création de miniatures — ces outils IA aident les créateurs à publier plus vite et à faire grandir leur chaîne. Voici les meilleurs choix pour 2026.",
      es: 'Editar videos, generar voces, convertir videos largos en shorts y crear miniaturas — estas herramientas IA ayudan a los creadores a publicar más rápido. Estas son las mejores opciones para 2026.',
      ar: 'تحرير الفيديو، وإنشاء التعليق الصوتي، وتحويل الفيديوهات الطويلة إلى مقاطع قصيرة، وتصميم الصور المصغّرة — تساعد هذه الأدوات المبدعين على النشر أسرع. إليك أفضل الخيارات لعام 2026.',
    },
    meta: {
      en: 'The best AI tools for content creators and YouTubers in 2026 — video editing, voiceovers, shorts, and avatars. Compared with pricing.',
      fr: 'Les meilleurs outils IA pour créateurs et YouTubers en 2026 — montage, voix off, shorts et avatars. Comparés avec les prix.',
      es: 'Las mejores herramientas IA para creadores y YouTubers en 2026 — edición de video, voces, shorts y avatares.',
      ar: 'أفضل أدوات الذكاء الاصطناعي لصنّاع المحتوى ويوتيوب في 2026 — تحرير الفيديو والتعليق الصوتي والمقاطع القصيرة.',
    },
  },
  {
    slug: 'marketing',
    emoji: '📈',
    toolIds: ['jasper', 'writesonic', 'copy-ai', 'surfer-seo', 'adcreative-ai', 'semrush-ai'],
    name: { en: 'marketing', fr: 'le marketing', es: 'marketing', ar: 'التسويق' },
    title: {
      en: 'Best AI Tools for Marketing in 2026',
      fr: 'Meilleurs Outils IA pour le Marketing en 2026',
      es: 'Mejores Herramientas IA para Marketing en 2026',
      ar: 'أفضل أدوات الذكاء الاصطناعي للتسويق في 2026',
    },
    intro: {
      en: 'Writing copy, planning SEO content, generating ad creatives and analyzing competitors — these AI tools help marketers do more with less. Here are the top-rated options for 2026, free and paid.',
      fr: "Rédaction publicitaire, planification SEO, création de visuels publicitaires et analyse de la concurrence — ces outils IA aident les marketeurs à faire plus avec moins. Voici les mieux notés pour 2026.",
      es: 'Redacción, planificación de contenido SEO, creación de anuncios y análisis de la competencia — estas herramientas IA ayudan a los marketers a hacer más con menos. Aquí están las mejores para 2026.',
      ar: 'كتابة النصوص، وتخطيط محتوى SEO، وإنشاء إعلانات، وتحليل المنافسين — تساعد هذه الأدوات المسوّقين على إنجاز المزيد. إليك الأعلى تقييمًا لعام 2026.',
    },
    meta: {
      en: 'The best AI tools for marketing in 2026 — copywriting, SEO, ad creatives and competitor analysis. Ranked with pricing.',
      fr: 'Les meilleurs outils IA pour le marketing en 2026 — rédaction, SEO, créations publicitaires et analyse concurrentielle.',
      es: 'Las mejores herramientas IA para marketing en 2026 — copywriting, SEO, anuncios y análisis de competencia.',
      ar: 'أفضل أدوات الذكاء الاصطناعي للتسويق في 2026 — كتابة الإعلانات وSEO والتحليل التنافسي.',
    },
  },
  {
    slug: 'developers',
    emoji: '💻',
    toolIds: ['github-copilot', 'cursor', 'chatgpt', 'claude', 'codeium', 'tabnine'],
    name: { en: 'developers', fr: 'développeurs', es: 'desarrolladores', ar: 'المطوّرين' },
    title: {
      en: 'Best AI Tools for Developers & Coding in 2026',
      fr: 'Meilleurs Outils IA pour Développeurs & Code en 2026',
      es: 'Mejores Herramientas IA para Desarrolladores y Programación en 2026',
      ar: 'أفضل أدوات الذكاء الاصطناعي للمطوّرين والبرمجة في 2026',
    },
    intro: {
      en: 'AI code completion, debugging, refactoring and full-feature generation now save developers hours daily. These are the best AI coding assistants in 2026, compared on capability, IDE support and pricing.',
      fr: "Complétion de code, débogage, refactoring et génération de fonctionnalités font gagner des heures aux développeurs. Voici les meilleurs assistants de code IA en 2026, comparés sur les capacités et le prix.",
      es: 'Autocompletado de código, depuración, refactorización y generación de funciones ahorran horas a los desarrolladores. Estos son los mejores asistentes de código IA en 2026.',
      ar: 'إكمال الكود وتصحيح الأخطاء وإعادة الهيكلة وتوليد الميزات توفّر ساعات على المطوّرين. إليك أفضل مساعدي البرمجة بالذكاء الاصطناعي في 2026.',
    },
    meta: {
      en: 'The best AI coding tools for developers in 2026 — code completion, debugging and refactoring. GitHub Copilot, Cursor and more compared.',
      fr: 'Les meilleurs outils IA de code pour développeurs en 2026 — complétion, débogage et refactoring. Copilot, Cursor et plus.',
      es: 'Las mejores herramientas IA de código en 2026 — autocompletado, depuración y refactorización. Copilot, Cursor y más.',
      ar: 'أفضل أدوات البرمجة بالذكاء الاصطناعي في 2026 — الإكمال والتصحيح وإعادة الهيكلة.',
    },
  },
  {
    slug: 'writing',
    emoji: '✍️',
    toolIds: ['chatgpt', 'claude', 'jasper', 'grammarly', 'quillbot', 'writesonic'],
    name: { en: 'writing', fr: "l'écriture", es: 'escritura', ar: 'الكتابة' },
    title: {
      en: 'Best AI Tools for Writing in 2026',
      fr: "Meilleurs Outils IA pour l'Écriture en 2026",
      es: 'Mejores Herramientas IA para Escritura en 2026',
      ar: 'أفضل أدوات الذكاء الاصطناعي للكتابة في 2026',
    },
    intro: {
      en: 'Whether you write articles, emails, books or marketing copy, these AI writing tools help you draft faster and edit better. Here are the best options in 2026, with free tiers and pricing compared.',
      fr: "Articles, emails, livres ou textes marketing — ces outils IA vous aident à rédiger plus vite et à mieux corriger. Voici les meilleures options en 2026, avec leurs offres gratuites et leurs prix.",
      es: 'Ya escribas artículos, correos, libros o textos de marketing, estas herramientas IA te ayudan a redactar más rápido y editar mejor. Estas son las mejores opciones en 2026.',
      ar: 'سواء كنت تكتب مقالات أو رسائل أو كتبًا أو نصوصًا تسويقية، تساعدك هذه الأدوات على الكتابة أسرع والتحرير أفضل. إليك أفضل الخيارات في 2026.',
    },
    meta: {
      en: 'The best AI writing tools in 2026 — for articles, emails, books and copy. Free and paid options ranked with pros and pricing.',
      fr: "Les meilleurs outils IA d'écriture en 2026 — articles, emails, livres et copy. Options gratuites et payantes classées.",
      es: 'Las mejores herramientas IA de escritura en 2026 — artículos, correos, libros y copy. Opciones gratuitas y de pago.',
      ar: 'أفضل أدوات الكتابة بالذكاء الاصطناعي في 2026 — للمقالات والرسائل والكتب والنصوص.',
    },
  },
  {
    slug: 'designers',
    emoji: '🎨',
    toolIds: ['midjourney', 'dalle3', 'stable-diffusion', 'canva-ai', 'adobe-firefly', 'leonardo-ai'],
    name: { en: 'designers', fr: 'designers', es: 'diseñadores', ar: 'المصمّمين' },
    title: {
      en: 'Best AI Tools for Designers & Image Generation in 2026',
      fr: "Meilleurs Outils IA pour Designers & Génération d'Images en 2026",
      es: 'Mejores Herramientas IA para Diseñadores e Imágenes en 2026',
      ar: 'أفضل أدوات الذكاء الاصطناعي للمصمّمين وتوليد الصور في 2026',
    },
    intro: {
      en: 'From photorealistic image generation to logos, illustrations and social graphics, these AI tools give designers a creative edge. Here are the best image and design AI tools in 2026, compared.',
      fr: "Génération d'images photoréalistes, logos, illustrations et visuels sociaux — ces outils IA donnent un avantage créatif aux designers. Voici les meilleurs outils d'image et de design IA en 2026.",
      es: 'Desde imágenes fotorrealistas hasta logos, ilustraciones y gráficos sociales, estas herramientas IA dan ventaja creativa a los diseñadores. Estas son las mejores en 2026.',
      ar: 'من توليد الصور الواقعية إلى الشعارات والرسوم والتصاميم الاجتماعية، تمنح هذه الأدوات المصمّمين ميزة إبداعية. إليك أفضلها في 2026.',
    },
    meta: {
      en: 'The best AI tools for designers and image generation in 2026 — Midjourney, DALL·E 3, Stable Diffusion and more compared.',
      fr: "Les meilleurs outils IA pour designers et génération d'images en 2026 — Midjourney, DALL·E 3, Stable Diffusion et plus.",
      es: 'Las mejores herramientas IA para diseñadores e imágenes en 2026 — Midjourney, DALL·E 3, Stable Diffusion y más.',
      ar: 'أفضل أدوات الذكاء الاصطناعي للمصمّمين وتوليد الصور في 2026 — Midjourney وDALL·E 3 وStable Diffusion.',
    },
  },
  {
    slug: 'small-business',
    emoji: '🏢',
    toolIds: ['chatgpt', 'canva-ai', 'jasper', 'notion-ai', 'zapier-ai', 'make-ai'],
    name: { en: 'small business', fr: 'petites entreprises', es: 'pequeñas empresas', ar: 'الشركات الصغيرة' },
    title: {
      en: 'Best AI Tools for Small Business in 2026',
      fr: 'Meilleurs Outils IA pour Petites Entreprises en 2026',
      es: 'Mejores Herramientas IA para Pequeñas Empresas en 2026',
      ar: 'أفضل أدوات الذكاء الاصطناعي للشركات الصغيرة في 2026',
    },
    intro: {
      en: 'Small teams can now run marketing, design, content and automation with AI — no big budget required. These are the most useful and affordable AI tools for small businesses in 2026.',
      fr: "Les petites équipes peuvent désormais gérer marketing, design, contenu et automatisation avec l'IA, sans gros budget. Voici les outils IA les plus utiles et abordables pour les petites entreprises en 2026.",
      es: 'Los equipos pequeños ya pueden gestionar marketing, diseño, contenido y automatización con IA, sin gran presupuesto. Estas son las herramientas IA más útiles y económicas en 2026.',
      ar: 'يمكن للفرق الصغيرة الآن إدارة التسويق والتصميم والمحتوى والأتمتة بالذكاء الاصطناعي دون ميزانية كبيرة. إليك أكثر الأدوات فائدة وبأسعار معقولة في 2026.',
    },
    meta: {
      en: 'The best AI tools for small business in 2026 — marketing, design, content and automation. Affordable picks compared.',
      fr: 'Les meilleurs outils IA pour petites entreprises en 2026 — marketing, design, contenu et automatisation.',
      es: 'Las mejores herramientas IA para pequeñas empresas en 2026 — marketing, diseño, contenido y automatización.',
      ar: 'أفضل أدوات الذكاء الاصطناعي للشركات الصغيرة في 2026 — التسويق والتصميم والمحتوى والأتمتة.',
    },
  },
  {
    slug: 'teachers',
    emoji: '📚',
    toolIds: ['chatgpt', 'gamma-app', 'synthesia', 'google-notebooklm', 'claude', 'perplexity'],
    name: { en: 'teachers', fr: 'enseignants', es: 'profesores', ar: 'المعلّمين' },
    title: {
      en: 'Best AI Tools for Teachers & Educators in 2026',
      fr: 'Meilleurs Outils IA pour Enseignants en 2026',
      es: 'Mejores Herramientas IA para Profesores en 2026',
      ar: 'أفضل أدوات الذكاء الاصطناعي للمعلّمين في 2026',
    },
    intro: {
      en: 'Lesson planning, slide decks, quizzes, video lessons and research — these AI tools save teachers time and make classes more engaging. Here are the best options for educators in 2026.',
      fr: "Préparation de cours, diaporamas, quiz, leçons vidéo et recherche — ces outils IA font gagner du temps aux enseignants et rendent les cours plus vivants. Voici les meilleures options en 2026.",
      es: 'Planificación de clases, presentaciones, cuestionarios, videolecciones e investigación — estas herramientas IA ahorran tiempo a los profesores. Estas son las mejores opciones en 2026.',
      ar: 'تحضير الدروس والعروض والاختبارات والدروس المصوّرة والبحث — توفّر هذه الأدوات وقت المعلّمين وتجعل الحصص أكثر تفاعلًا. إليك أفضل الخيارات في 2026.',
    },
    meta: {
      en: 'The best AI tools for teachers in 2026 — lesson planning, slides, quizzes and video lessons. Free and paid options compared.',
      fr: 'Les meilleurs outils IA pour enseignants en 2026 — préparation de cours, diapositives, quiz et leçons vidéo.',
      es: 'Las mejores herramientas IA para profesores en 2026 — clases, presentaciones, cuestionarios y videolecciones.',
      ar: 'أفضل أدوات الذكاء الاصطناعي للمعلّمين في 2026 — تحضير الدروس والعروض والاختبارات.',
    },
  },
];

export const getBestFor = (slug: string): BestForGuide | undefined =>
  BEST_FOR.find((g) => g.slug === slug);

export function getBestForFaq(g: BestForGuide, topToolName: string) {
  const n = g.name;
  return [
    {
      q: {
        en: `What is the best AI tool for ${n.en}?`,
        fr: `Quel est le meilleur outil IA pour ${n.fr} ?`,
        es: `¿Cuál es la mejor herramienta IA para ${n.es}?`,
        ar: `ما أفضل أداة ذكاء اصطناعي لـ${n.ar}؟`,
      },
      a: {
        en: `${topToolName} is widely considered the top overall pick for ${n.en} in 2026, but the best choice depends on your budget and exact needs. The ranked list above compares each tool's pricing, strengths and what it's best for.`,
        fr: `${topToolName} est généralement considéré comme le meilleur choix global pour ${n.fr} en 2026, mais le bon outil dépend de votre budget et de vos besoins. La liste ci-dessus compare prix, points forts et usages.`,
        es: `${topToolName} suele considerarse la mejor opción general para ${n.es} en 2026, pero depende de tu presupuesto y necesidades. La lista anterior compara precios, ventajas y usos.`,
        ar: `يُعدّ ${topToolName} عمومًا الخيار الأفضل لـ${n.ar} في 2026، لكن الأنسب يعتمد على ميزانيتك واحتياجاتك. القائمة أعلاه تقارن الأسعار والمزايا والاستخدامات.`,
      },
    },
    {
      q: {
        en: `Are there free AI tools for ${n.en}?`,
        fr: `Existe-t-il des outils IA gratuits pour ${n.fr} ?`,
        es: `¿Hay herramientas IA gratuitas para ${n.es}?`,
        ar: `هل توجد أدوات ذكاء اصطناعي مجانية لـ${n.ar}؟`,
      },
      a: {
        en: `Yes. Several tools in this guide offer free or freemium plans, so you can start at no cost. Each card below shows the pricing model (free, freemium or paid) so you can pick what fits your budget.`,
        fr: `Oui. Plusieurs outils de ce guide proposent une offre gratuite ou freemium, vous pouvez donc commencer sans frais. Chaque fiche ci-dessous indique le modèle tarifaire (gratuit, freemium ou payant).`,
        es: `Sí. Varias herramientas de esta guía ofrecen planes gratuitos o freemium, así que puedes empezar sin costo. Cada tarjeta muestra el modelo de precio (gratis, freemium o de pago).`,
        ar: `نعم. تقدّم عدة أدوات في هذا الدليل خططًا مجانية أو فريميوم، فيمكنك البدء دون تكلفة. توضّح كل بطاقة نموذج التسعير (مجاني، فريميوم، أو مدفوع).`,
      },
    },
    {
      q: {
        en: `How did AIverse choose these tools?`,
        fr: `Comment AIverse a-t-il choisi ces outils ?`,
        es: `¿Cómo eligió AIverse estas herramientas?`,
        ar: `كيف اختار AIverse هذه الأدوات؟`,
      },
      a: {
        en: `Each tool is assessed on capability, usability, pricing and value, reliability and fit for ${n.en}. Rankings are editorial and are never influenced by affiliate programs.`,
        fr: `Chaque outil est évalué selon ses capacités, sa facilité d'usage, son prix, sa fiabilité et son adéquation pour ${n.fr}. Les classements sont éditoriaux et indépendants de tout programme d'affiliation.`,
        es: `Cada herramienta se evalúa por capacidad, usabilidad, precio y valor, fiabilidad y ajuste para ${n.es}. Las clasificaciones son editoriales e independientes de programas de afiliados.`,
        ar: `تُقيّم كل أداة وفق القدرة وسهولة الاستخدام والسعر والقيمة والموثوقية والملاءمة لـ${n.ar}. التصنيفات تحريرية ولا تتأثر ببرامج الإحالة.`,
      },
    },
  ];
}
