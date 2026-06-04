export interface AITool {
  id: string;
  name: string;
  category: 'writing' | 'image' | 'code' | 'video' | 'productivity' | 'audio' | 'marketing' | 'agents';
  description: { en: string; fr: string; es: string; ar: string; };
  rating: number;
  pricing: 'Free' | 'Freemium' | 'Paid';
  pricingLocalized: { en: string; fr: string; es: string; ar: string; };
  websiteUrl: string;
  affiliateUrl?: string;   // lien affilié (prioritaire sur websiteUrl)
  commission?: string;     // ex: "30% récurrent"
  views: number;
  isWeeklyFeatured?: boolean;
  isFeaturedSponsored?: boolean; // outil sponsorisé payant
}

export const TOOLS_DATA: AITool[] = [
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    category: 'writing',
    description: {
      en: "OpenAI's flagship conversational model capable of text generation, coding, and logical reasoning.",
      fr: "Le modèle conversationnel phare d'OpenAI, capable de générer des textes, de coder et de raisonner.",
      es: "El modelo conversacional insignia de OpenAI capaz de generar texto, programar y razonar.",
      ar: "نموذج المحادثة الرائد من OpenAI القادر على إنشاء النصوص والبرمجة والتفكير المنطقي."
    },
    rating: 4.9,
    pricing: 'Freemium',
    pricingLocalized: {
      en: 'Free / $20/mo',
      fr: 'Gratuit / 20$/mois',
      es: 'Gratis / $20/mes',
      ar: 'مجاني / ٢٠ دولار شهرياً'
    },
    websiteUrl: 'https://chat.openai.com',
    views: 45200
  },
  {
    id: 'claude',
    name: 'Claude 3.5 Sonnet',
    category: 'writing',
    description: {
      en: "State of the art LLM from Anthropic featuring high code intelligence and brilliant writing.",
      fr: "Modèle de pointe d'Anthropic avec une intelligence de code élevée et une rédaction brillante.",
      es: "Modelo de última generación de Anthropic con alta inteligencia de código y redacción brillante.",
      ar: "نموذج لغوي متطور من Anthropic يتميز بذكاء برمجي عالٍ وأسلوب كتابة رائع."
    },
    rating: 4.9,
    pricing: 'Freemium',
    pricingLocalized: {
      en: 'Free / $20/mo',
      fr: 'Gratuit / 20$/mois',
      es: 'Gratis / $20/mes',
      ar: 'مجاني / ٢٠ دولار شهرياً'
    },
    websiteUrl: 'https://anthropic.com/claude',
    views: 39400
  },
  {
    id: 'gemini',
    name: 'Gemini',
    category: 'writing',
    description: {
      en: "Google's multimodal AI model with deep integration into Google Workspace and advanced reasoning.",
      fr: "Modèle IA multimodal de Google avec une intégration profonde dans Google Workspace.",
      es: "Modelo IA multimodal de Google con integración profunda en Google Workspace.",
      ar: "نموذج الذكاء الاصطناعي متعدد الوسائط من Google مع تكامل عميق في Google Workspace."
    },
    rating: 4.7,
    pricing: 'Freemium',
    pricingLocalized: {
      en: 'Free / $20/mo',
      fr: 'Gratuit / 20$/mois',
      es: 'Gratis / $20/mes',
      ar: 'مجاني / ٢٠ دولار شهرياً'
    },
    websiteUrl: 'https://gemini.google.com',
    views: 38600
  },
  {
    id: 'grok',
    name: 'Grok',
    category: 'writing',
    description: {
      en: "xAI's witty real-time AI assistant with live internet access and uncensored responses.",
      fr: "Assistant IA en temps réel de xAI avec accès internet en direct et réponses non censurées.",
      es: "Asistente IA en tiempo real de xAI con acceso a internet en vivo y respuestas sin censura.",
      ar: "مساعد الذكاء الاصطناعي الفوري من xAI مع وصول مباشر للإنترنت وردود غير مقيدة."
    },
    rating: 4.5,
    pricing: 'Freemium',
    pricingLocalized: {
      en: 'Free / $8/mo (X Premium)',
      fr: 'Gratuit / 8$/mois (X Premium)',
      es: 'Gratis / $8/mes (X Premium)',
      ar: 'مجاني / ٨ دولار شهرياً (X Premium)'
    },
    websiteUrl: 'https://grok.x.ai',
    views: 20100
  },
  {
    id: 'perplexity',
    name: 'Perplexity AI',
    category: 'writing',
    description: {
      en: "AI-powered search engine that provides cited real-time answers with deep research capabilities.",
      fr: "Moteur de recherche IA qui fournit des réponses citées en temps réel avec des capacités de recherche.",
      es: "Motor de búsqueda con IA que proporciona respuestas citadas en tiempo real.",
      ar: "محرك بحث بالذكاء الاصطناعي يقدم إجابات فورية مستشهداً بمصادرها مع قدرات بحث متعمقة."
    },
    rating: 4.6,
    pricing: 'Freemium',
    pricingLocalized: {
      en: 'Free / $20/mo',
      fr: 'Gratuit / 20$/mois',
      es: 'Gratis / $20/mes',
      ar: 'مجاني / ٢٠ دولار شهرياً'
    },
    websiteUrl: 'https://perplexity.ai',
    views: 25300
  },
  {
    id: 'mistral',
    name: 'Mistral AI',
    category: 'writing',
    description: {
      en: "European open-weight LLM delivering top-tier performance, privacy-first design, and multilingual fluency.",
      fr: "LLM européen open-weight offrant des performances de premier ordre axé sur la confidentialité.",
      es: "LLM europeo de peso abierto que ofrece rendimiento de primer nivel y diseño centrado en la privacidad.",
      ar: "نموذج لغوي أوروبي مفتوح الوزن يقدم أداءً متميزاً وتصميماً يحترم الخصوصية."
    },
    rating: 4.6,
    pricing: 'Freemium',
    pricingLocalized: {
      en: 'Free / API pricing',
      fr: 'Gratuit / Tarif API',
      es: 'Gratis / Precio API',
      ar: 'مجاني / تسعير API'
    },
    websiteUrl: 'https://mistral.ai',
    views: 17400
  },
  {
    id: 'grammarly',
    name: 'Grammarly',
    category: 'writing',
    description: {
      en: "AI-powered grammar, style, and tone checker with real-time suggestions across all writing platforms.",
      fr: "Correcteur de grammaire, style et ton alimenté par l'IA avec suggestions en temps réel.",
      es: "Corrector de gramática, estilo y tono con IA con sugerencias en tiempo real.",
      ar: "مدقق قواعد اللغة والأسلوب والنبرة المدعوم بالذكاء الاصطناعي مع اقتراحات فورية."
    },
    rating: 4.5,
    pricing: 'Freemium',
    pricingLocalized: {
      en: 'Free / $12/mo',
      fr: 'Gratuit / 12$/mois',
      es: 'Gratis / $12/mes',
      ar: 'مجاني / ١٢ دولار شهرياً'
    },
    websiteUrl: 'https://grammarly.com',
    affiliateUrl: 'https://grammarly.com?utm_source=aiverse&utm_medium=affiliate',
    commission: '$0.20 free / $20 premium',
    views: 30100
  },
  {
    id: 'quillbot',
    name: 'QuillBot',
    category: 'writing',
    description: {
      en: "Paraphrasing, summarizing, and grammar-checking AI tool widely used by students and professionals.",
      fr: "Outil IA de paraphrase, résumé et correction grammaticale, largement utilisé par les étudiants.",
      es: "Herramienta IA de paráfrasis, resumen y verificación gramatical ampliamente usada por estudiantes.",
      ar: "أداة ذكاء اصطناعي لإعادة الصياغة والتلخيص وفحص القواعد اللغوية."
    },
    rating: 4.3,
    pricing: 'Freemium',
    pricingLocalized: {
      en: 'Free / $10/mo',
      fr: 'Gratuit / 10$/mois',
      es: 'Gratis / $10/mes',
      ar: 'مجاني / ١٠ دولار شهرياً'
    },
    websiteUrl: 'https://quillbot.com',
    views: 14700
  },
  {
    id: 'copy-ai',
    name: 'Copy.ai',
    category: 'writing',
    description: {
      en: "AI writing assistant for creating high-converting marketing copy, blog posts, and social media content.",
      fr: "Assistant de rédaction IA pour créer du contenu marketing, des articles de blog et du contenu réseaux sociaux.",
      es: "Asistente de escritura IA para crear contenido de marketing, artículos de blog y contenido redes sociales.",
      ar: "مساعد الكتابة بالذكاء الاصطناعي لإنشاء محتوى تسويقي عالي التحويل ومقالات ومحتوى وسائل التواصل."
    },
    rating: 4.3,
    pricing: 'Freemium',
    pricingLocalized: {
      en: 'Free / $36/mo',
      fr: 'Gratuit / 36$/mois',
      es: 'Gratis / $36/mes',
      ar: 'مجاني / ٣٦ دولار شهرياً'
    },
    websiteUrl: 'https://copy.ai',
    affiliateUrl: 'https://copy.ai?via=aiverse',
    commission: '45% récurrent',
    views: 11200
  },
  {
    id: 'writesonic',
    name: 'Writesonic',
    category: 'writing',
    description: {
      en: "AI writer with SEO optimization, article generation, and a built-in Chatsonic chatbot assistant.",
      fr: "Rédacteur IA avec optimisation SEO, génération d'articles et un chatbot Chatsonic intégré.",
      es: "Escritor IA con optimización SEO, generación de artículos y un chatbot Chatsonic integrado.",
      ar: "كاتب ذكاء اصطناعي مع تحسين محركات البحث وتوليد المقالات وروبوت محادثة Chatsonic المدمج."
    },
    rating: 4.2,
    pricing: 'Freemium',
    pricingLocalized: {
      en: 'Free / $16/mo',
      fr: 'Gratuit / 16$/mois',
      es: 'Gratis / $16/mes',
      ar: 'مجاني / ١٦ دولار شهرياً'
    },
    websiteUrl: 'https://writesonic.com',
    affiliateUrl: 'https://writesonic.com?via=aiverse',
    commission: '30% récurrent',
    views: 9800
  },
  {
    id: 'deepl',
    name: 'DeepL',
    category: 'writing',
    description: {
      en: "World-class AI translator supporting 31 languages with nuanced context-aware translation quality.",
      fr: "Traducteur IA de classe mondiale prenant en charge 31 langues avec une qualité de traduction nuancée.",
      es: "Traductor IA de clase mundial con soporte para 31 idiomas y calidad de traducción contextual.",
      ar: "مترجم ذكاء اصطناعي عالمي المستوى يدعم 31 لغة بجودة ترجمة دقيقة وواعية بالسياق."
    },
    rating: 4.7,
    pricing: 'Freemium',
    pricingLocalized: {
      en: 'Free / $9/mo',
      fr: 'Gratuit / 9$/mois',
      es: 'Gratis / $9/mes',
      ar: 'مجاني / ٩ دولار شهرياً'
    },
    websiteUrl: 'https://deepl.com',
    views: 27600
  },
  {
    id: 'character-ai',
    name: 'Character.AI',
    category: 'writing',
    description: {
      en: "Platform for creating and chatting with AI personas from historical figures to original fictional characters.",
      fr: "Plateforme pour créer et discuter avec des personnages IA des figures historiques aux personnages fictifs.",
      es: "Plataforma para crear y chatear con personajes IA desde figuras históricas hasta personajes ficticios.",
      ar: "منصة لإنشاء والدردشة مع شخصيات الذكاء الاصطناعي من الشخصيات التاريخية إلى الخيالية الأصلية."
    },
    rating: 4.4,
    pricing: 'Freemium',
    pricingLocalized: {
      en: 'Free / $10/mo',
      fr: 'Gratuit / 10$/mois',
      es: 'Gratis / $10/mes',
      ar: 'مجاني / ١٠ دولار شهرياً'
    },
    websiteUrl: 'https://character.ai',
    views: 33900
  },
  {
    id: 'jasper',
    name: 'Jasper AI',
    category: 'marketing',
    description: {
      en: "Enterprise-grade copywriter tool tailored for marketing campaigns, blogs, and social content.",
      fr: "Outil de rédaction d'entreprise adapté aux campagnes marketing, blogs et réseaux sociaux.",
      es: "Herramienta de redacción empresarial adaptada para campañas de marketing, blogs y redes sociales.",
      ar: "أداة كتابة نصوص للشركات مخصصة لحملات التسويق والمدونات ومحتوى وسائل التواصل الاجتماعي."
    },
    rating: 4.5,
    pricing: 'Paid',
    pricingLocalized: {
      en: 'From $39/mo',
      fr: 'À partir de 39$/mois',
      es: 'Desde $39/mes',
      ar: 'تبدأ من ٣٩ دولار شهرياً'
    },
    websiteUrl: 'https://jasper.ai',
    affiliateUrl: 'https://jasper.ai?fpr=aiverse',
    commission: '30% récurrent',
    views: 15600
  },
  {
    id: 'midjourney',
    name: 'Midjourney',
    category: 'image',
    description: {
      en: "State-of-the-art text-to-image generator creating stunning cinematic visual art from prompts.",
      fr: "Générateur texte-image de pointe créant des oeuvres d'art visuel cinématiques à partir de prompts.",
      es: "Generador de texto a imagen de última generación que crea impresionantes obras de arte visual cinematográfico.",
      ar: "مولد نصوص إلى صور متطور ينتج أعمالاً فنية بصرية سينمائية مذهلة من الأوامر النصية."
    },
    rating: 4.8,
    pricing: 'Paid',
    pricingLocalized: {
      en: 'From $10/mo',
      fr: 'À partir de 10$/mois',
      es: 'Desde $10/mes',
      ar: 'تبدأ من ١٠ دولار شهرياً'
    },
    websiteUrl: 'https://midjourney.com',
    views: 31200
  },
  {
    id: 'dalle3',
    name: 'DALL-E 3',
    category: 'image',
    description: {
      en: "OpenAI's latest image generation model with precise prompt adherence and photorealistic output.",
      fr: "Le dernier modèle de génération d'images d'OpenAI avec une précision remarquable des prompts.",
      es: "El último modelo de generación de imágenes de OpenAI con precisión notable en los prompts.",
      ar: "أحدث نموذج توليد صور من OpenAI مع التزام دقيق بالأوامر وإخراج واقعي للغاية."
    },
    rating: 4.7,
    pricing: 'Freemium',
    pricingLocalized: {
      en: 'Included in ChatGPT Plus',
      fr: 'Inclus dans ChatGPT Plus',
      es: 'Incluido en ChatGPT Plus',
      ar: 'مضمن في ChatGPT Plus'
    },
    websiteUrl: 'https://openai.com/dall-e-3',
    views: 29800
  },
  {
    id: 'stable-diffusion',
    name: 'Stable Diffusion',
    category: 'image',
    description: {
      en: "Open-source text-to-image model enabling fine-tuned customizable image generation locally or in the cloud.",
      fr: "Modèle texte-image open-source permettant une génération d'images personnalisable localement ou dans le cloud.",
      es: "Modelo de texto a imagen de código abierto que permite la generación personalizable de imágenes.",
      ar: "نموذج مفتوح المصدر لتحويل النص إلى صورة يتيح توليد الصور المخصصة محلياً أو في السحابة."
    },
    rating: 4.5,
    pricing: 'Free',
    pricingLocalized: {
      en: 'Free (open source)',
      fr: 'Gratuit (open source)',
      es: 'Gratis (código abierto)',
      ar: 'مجاني (مفتوح المصدر)'
    },
    websiteUrl: 'https://stability.ai',
    views: 26500
  },
  {
    id: 'adobe-firefly',
    name: 'Adobe Firefly',
    category: 'image',
    description: {
      en: "Adobe's generative AI for images, vectors, and text effects trained on licensed commercial content.",
      fr: "IA générative d'Adobe pour les images, vecteurs et effets de texte, entraînée sur du contenu sous licence.",
      es: "IA generativa de Adobe para imágenes, vectores y efectos de texto, entrenada con contenido con licencia.",
      ar: "الذكاء الاصطناعي التوليدي من Adobe للصور والمتجهات وتأثيرات النص، مدرب على محتوى مرخص."
    },
    rating: 4.6,
    pricing: 'Freemium',
    pricingLocalized: {
      en: 'Free / Adobe CC plans',
      fr: 'Gratuit / Plans Adobe CC',
      es: 'Gratis / Planes Adobe CC',
      ar: 'مجاني / خطط Adobe CC'
    },
    websiteUrl: 'https://firefly.adobe.com',
    views: 21900
  },
  {
    id: 'flux',
    name: 'FLUX.1',
    category: 'image',
    description: {
      en: "Black Forest Labs state-of-the-art open image model with exceptional prompt adherence and photorealistic detail.",
      fr: "Modèle d'image open-source de pointe de Black Forest Labs avec une précision et un détail exceptionnels.",
      es: "Modelo de imagen de código abierto de vanguardia de Black Forest Labs con excepcional precisión.",
      ar: "نموذج الصور المفتوح المصدر المتطور من Black Forest Labs مع التزام استثنائي بالتعليمات."
    },
    rating: 4.8,
    pricing: 'Freemium',
    pricingLocalized: {
      en: 'Free / API pricing',
      fr: 'Gratuit / Tarif API',
      es: 'Gratis / Precio API',
      ar: 'مجاني / تسعير API'
    },
    websiteUrl: 'https://blackforestlabs.ai',
    views: 19200,
    isWeeklyFeatured: true
  },
  {
    id: 'ideogram',
    name: 'Ideogram',
    category: 'image',
    description: {
      en: "AI image generator specialized in rendering accurate text inside visuals, logos, and posters.",
      fr: "Générateur d'images IA spécialisé dans le rendu précis de texte dans les visuels et logos.",
      es: "Generador de imágenes IA especializado en renderizar texto preciso dentro de visuales y logos.",
      ar: "مولد صور بالذكاء الاصطناعي متخصص في عرض النصوص بدقة داخل المرئيات والشعارات والملصقات."
    },
    rating: 4.4,
    pricing: 'Freemium',
    pricingLocalized: {
      en: 'Free / $8/mo',
      fr: 'Gratuit / 8$/mois',
      es: 'Gratis / $8/mes',
      ar: 'مجاني / ٨ دولار شهرياً'
    },
    websiteUrl: 'https://ideogram.ai',
    views: 13400
  },
  {
    id: 'leonardo-ai',
    name: 'Leonardo AI',
    category: 'image',
    description: {
      en: "Game-asset and creative AI image platform with fine-tuned models, canvas tools, and video generation.",
      fr: "Plateforme d'images IA créatives avec des modèles affinés, des outils canvas et de la génération vidéo.",
      es: "Plataforma IA de imágenes creativas con modelos ajustados, herramientas de canvas y generación de video.",
      ar: "منصة صور ذكاء اصطناعي إبداعية مع نماذج مضبوطة وأدوات كانفاس وتوليد فيديو."
    },
    rating: 4.5,
    pricing: 'Freemium',
    pricingLocalized: {
      en: 'Free / $12/mo',
      fr: 'Gratuit / 12$/mois',
      es: 'Gratis / $12/mes',
      ar: 'مجاني / ١٢ دولار شهرياً'
    },
    websiteUrl: 'https://leonardo.ai',
    views: 16800
  },
  {
    id: 'canva-ai',
    name: 'Canva AI',
    category: 'image',
    description: {
      en: "Canva suite of AI tools including Magic Studio, text-to-image, and AI-powered design suggestions.",
      fr: "Suite d'outils IA de Canva incluant Magic Studio, texte-image et suggestions de design par IA.",
      es: "Suite de herramientas IA de Canva incluyendo Magic Studio, texto a imagen y sugerencias de diseño.",
      ar: "مجموعة أدوات الذكاء الاصطناعي من Canva تشمل Magic Studio وتحويل النص إلى صورة."
    },
    rating: 4.5,
    pricing: 'Freemium',
    pricingLocalized: {
      en: 'Free / $15/mo',
      fr: 'Gratuit / 15$/mois',
      es: 'Gratis / $15/mes',
      ar: 'مجاني / ١٥ دولار شهرياً'
    },
    websiteUrl: 'https://canva.com',
    views: 35600
  },
  {
    id: 'nightcafe',
    name: 'NightCafe',
    category: 'image',
    description: {
      en: "AI art generator community platform supporting multiple models including SDXL and Stable Diffusion.",
      fr: "Plateforme communautaire de génération d'art IA prenant en charge plusieurs modèles dont SDXL.",
      es: "Plataforma comunitaria de generación de arte IA compatible con múltiples modelos incluyendo SDXL.",
      ar: "منصة مجتمع مولد الفن بالذكاء الاصطناعي تدعم نماذج متعددة بما فيها SDXL وDALL-E."
    },
    rating: 4.3,
    pricing: 'Freemium',
    pricingLocalized: {
      en: 'Free / Credits system',
      fr: 'Gratuit / Système de crédits',
      es: 'Gratis / Sistema de créditos',
      ar: 'مجاني / نظام الاعتمادات'
    },
    websiteUrl: 'https://creator.nightcafe.studio',
    views: 11300
  },
  {
    id: 'getimg-ai',
    name: 'getimg.ai',
    category: 'image',
    description: {
      en: "All-in-one AI image platform with text-to-image, inpainting, outpainting, and custom model training.",
      fr: "Plateforme d'images IA tout-en-un avec texte-image, inpainting, outpainting et entraînement de modèles.",
      es: "Plataforma IA de imágenes todo en uno con texto a imagen, inpainting, outpainting y entrenamiento de modelos.",
      ar: "منصة صور ذكاء اصطناعي شاملة مع النص إلى صورة والرسم الداخلي والخارجي وتدريب النماذج المخصصة."
    },
    rating: 4.3,
    pricing: 'Freemium',
    pricingLocalized: {
      en: 'Free / $12/mo',
      fr: 'Gratuit / 12$/mois',
      es: 'Gratis / $12/mes',
      ar: 'مجاني / ١٢ دولار شهرياً'
    },
    websiteUrl: 'https://getimg.ai',
    views: 8700
  },
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    category: 'code',
    description: {
      en: "AI pair programmer integrated into VS Code and JetBrains IDEs powered by OpenAI Codex.",
      fr: "Programmeur en binôme IA intégré dans VS Code et JetBrains IDEs, propulsé par OpenAI Codex.",
      es: "Programador par IA integrado en VS Code y JetBrains IDEs, impulsado por OpenAI Codex.",
      ar: "مبرمج شريك بالذكاء الاصطناعي مدمج في VS Code وJetBrains IDEs، مدعوم بـ OpenAI Codex."
    },
    rating: 4.7,
    pricing: 'Paid',
    pricingLocalized: {
      en: '$10/mo',
      fr: '10$/mois',
      es: '$10/mes',
      ar: '١٠ دولار شهرياً'
    },
    websiteUrl: 'https://github.com/features/copilot',
    views: 42300
  },
  {
    id: 'cursor',
    name: 'Cursor',
    category: 'code',
    description: {
      en: "AI-first code editor forked from VS Code with deep chat, autocomplete, and codebase-aware edits.",
      fr: "Éditeur de code axé sur l'IA, forké de VS Code avec chat profond et autocomplétion avancée.",
      es: "Editor de código centrado en IA, bifurcado de VS Code con chat profundo y autocompletado.",
      ar: "محرر كود يعتمد على الذكاء الاصطناعي أولاً، مفرع من VS Code مع دردشة عميقة وإكمال تلقائي."
    },
    rating: 4.8,
    pricing: 'Freemium',
    pricingLocalized: {
      en: 'Free / $20/mo',
      fr: 'Gratuit / 20$/mois',
      es: 'Gratis / $20/mes',
      ar: 'مجاني / ٢٠ دولار شهرياً'
    },
    websiteUrl: 'https://cursor.sh',
    views: 33700
  },
  {
    id: 'bolt-new',
    name: 'Bolt.new',
    category: 'code',
    description: {
      en: "StackBlitz AI full-stack app builder — generate, run, edit, and deploy apps entirely in the browser.",
      fr: "Constructeur d'applications full-stack IA de StackBlitz — générez, exécutez et déployez dans le navigateur.",
      es: "Constructor de aplicaciones full-stack IA de StackBlitz — genera, ejecuta y despliega en el navegador.",
      ar: "أداة بناء التطبيقات الكاملة بالذكاء الاصطناعي من StackBlitz لتوليد التطبيقات وتشغيلها ونشرها في المتصفح."
    },
    rating: 4.7,
    pricing: 'Freemium',
    pricingLocalized: {
      en: 'Free / $20/mo',
      fr: 'Gratuit / 20$/mois',
      es: 'Gratis / $20/mes',
      ar: 'مجاني / ٢٠ دولار شهرياً'
    },
    websiteUrl: 'https://bolt.new',
    views: 27800
  },
  {
    id: 'lovable',
    name: 'Lovable',
    category: 'code',
    description: {
      en: "Prompt-driven web app builder that turns ideas into full-stack React apps with Supabase integration.",
      fr: "Constructeur d'applications web piloté par prompt qui transforme les idées en apps React full-stack.",
      es: "Constructor de aplicaciones web impulsado por prompts que convierte ideas en apps React full-stack.",
      ar: "منشئ تطبيقات الويب الذي يحول الأفكار إلى تطبيقات React كاملة مع تكامل Supabase."
    },
    rating: 4.6,
    pricing: 'Freemium',
    pricingLocalized: {
      en: 'Free / $20/mo',
      fr: 'Gratuit / 20$/mois',
      es: 'Gratis / $20/mes',
      ar: 'مجاني / ٢٠ دولار شهرياً'
    },
    websiteUrl: 'https://lovable.dev',
    views: 22600
  },
  {
    id: 'windsurf',
    name: 'Windsurf',
    category: 'code',
    description: {
      en: "Codeium's agentic AI IDE with Cascade — a multi-step agent that codes, runs, and debugs autonomously.",
      fr: "IDE IA agentique de Codeium avec Cascade — un agent multi-étapes qui code et débogue de façon autonome.",
      es: "IDE IA agéntico de Codeium con Cascade — un agente multipasos que codifica y depura autónomamente.",
      ar: "بيئة التطوير الذكية من Codeium مع Cascade — وكيل متعدد الخطوات يبرمج ويصحح الأخطاء باستقلالية."
    },
    rating: 4.7,
    pricing: 'Freemium',
    pricingLocalized: {
      en: 'Free / $15/mo',
      fr: 'Gratuit / 15$/mois',
      es: 'Gratis / $15/mes',
      ar: 'مجاني / ١٥ دولار شهرياً'
    },
    websiteUrl: 'https://codeium.com/windsurf',
    views: 18900
  },
  {
    id: 'v0-dev',
    name: 'v0 by Vercel',
    category: 'code',
    description: {
      en: "Generates production-ready React and Tailwind CSS UI components from simple text prompts.",
      fr: "Génère des composants d'interface utilisateur React et Tailwind CSS prêts pour la production.",
      es: "Genera componentes de interfaz React y Tailwind CSS listos para producción a partir de prompts sencillos.",
      ar: "يولد مكونات واجهة مستخدم React و Tailwind CSS جاهزة للإنتاج من أوامر نصية بسيطة."
    },
    rating: 4.7,
    pricing: 'Freemium',
    pricingLocalized: {
      en: 'Free / Paid tiers',
      fr: 'Gratuit / Plans payants',
      es: 'Gratis / Planes de pago',
      ar: 'مجاني / مستويات مدفوعة'
    },
    websiteUrl: 'https://v0.dev',
    views: 28900
  },
  {
    id: 'replit-ai',
    name: 'Replit AI',
    category: 'code',
    description: {
      en: "Browser-based IDE with AI code generation, debugging, and deployment in one collaborative platform.",
      fr: "IDE basé sur navigateur avec génération de code IA, débogage et déploiement collaboratif.",
      es: "IDE basado en navegador con generación de código IA, depuración y despliegue colaborativo.",
      ar: "بيئة تطوير متكاملة مستندة إلى المتصفح مع توليد الكود بالذكاء الاصطناعي وتصحيح الأخطاء."
    },
    rating: 4.4,
    pricing: 'Freemium',
    pricingLocalized: {
      en: 'Free / $25/mo',
      fr: 'Gratuit / 25$/mois',
      es: 'Gratis / $25/mes',
      ar: 'مجاني / ٢٥ دولار شهرياً'
    },
    websiteUrl: 'https://replit.com',
    views: 19500
  },
  {
    id: 'tabnine',
    name: 'Tabnine',
    category: 'code',
    description: {
      en: "Privacy-focused AI code completion tool that runs locally or in the cloud across 30+ languages.",
      fr: "Outil d'autocomplétion de code IA axé sur la confidentialité, fonctionnant localement ou dans le cloud.",
      es: "Herramienta de autocompletado de código IA centrada en privacidad que funciona localmente o en la nube.",
      ar: "أداة إكمال الكود بالذكاء الاصطناعي المركزة على الخصوصية والتي تعمل محلياً أو في السحابة."
    },
    rating: 4.3,
    pricing: 'Freemium',
    pricingLocalized: {
      en: 'Free / $12/mo',
      fr: 'Gratuit / 12$/mois',
      es: 'Gratis / $12/mes',
      ar: 'مجاني / ١٢ دولار شهرياً'
    },
    websiteUrl: 'https://tabnine.com',
    views: 11900
  },
  {
    id: 'codeium',
    name: 'Codeium',
    category: 'code',
    description: {
      en: "Free AI code completion and chat supporting 70+ languages and all major IDEs with zero data retention.",
      fr: "Outil gratuit d'autocomplétion de code IA et de chat prenant en charge 70+ langages et tous les IDE majeurs.",
      es: "Herramienta gratuita de autocompletado de código IA y chat compatible con 70+ lenguajes y todos los IDEs.",
      ar: "أداة إكمال الكود المجانية بالذكاء الاصطناعي والدردشة تدعم أكثر من 70 لغة وجميع بيئات التطوير."
    },
    rating: 4.4,
    pricing: 'Free',
    pricingLocalized: {
      en: 'Free',
      fr: 'Gratuit',
      es: 'Gratis',
      ar: 'مجاني'
    },
    websiteUrl: 'https://codeium.com',
    views: 15200
  },
  {
    id: 'claude-code',
    name: 'Claude Code',
    category: 'code',
    description: {
      en: "Anthropic's agentic CLI coding tool that reads, edits, runs tests, and ships features autonomously.",
      fr: "Outil de codage CLI agentique d'Anthropic qui lit, édite, exécute des tests et livre des fonctionnalités.",
      es: "Herramienta de codificación CLI agéntica de Anthropic que lee, edita, ejecuta pruebas y entrega funciones.",
      ar: "أداة البرمجة CLI الوكيلة من Anthropic التي تقرأ وتحرر وتشغل الاختبارات وتسلم الميزات باستقلالية."
    },
    rating: 4.8,
    pricing: 'Freemium',
    pricingLocalized: {
      en: 'Free / API usage',
      fr: 'Gratuit / Utilisation API',
      es: 'Gratis / Uso de API',
      ar: 'مجاني / استخدام API'
    },
    websiteUrl: 'https://docs.anthropic.com/claude-code',
    views: 24100
  },
  {
    id: 'runway-gen3',
    name: 'Runway Gen-3',
    category: 'video',
    description: {
      en: "AI video generation platform allowing video-to-video and text-to-video hyper-realistic creations.",
      fr: "Plateforme de génération vidéo IA permettant des créations hyperréalistes de vidéo à vidéo.",
      es: "Plataforma de generación de video con IA que permite creaciones hiperrealistas de texto a video.",
      ar: "منصة توليد فيديو بالذكاء الاصطناعي تسمح بإنشاء مقاطع فيديو واقعية للغاية من نصوص أو فيديو."
    },
    rating: 4.6,
    pricing: 'Freemium',
    pricingLocalized: {
      en: 'Free trial / Paid',
      fr: 'Essai gratuit / Payant',
      es: 'Prueba gratis / Pago',
      ar: 'تجربة مجانية / مدفوع'
    },
    websiteUrl: 'https://runwayml.com',
    views: 18400,
    isWeeklyFeatured: true
  },
  {
    id: 'sora',
    name: 'Sora',
    category: 'video',
    description: {
      en: "OpenAI's groundbreaking text-to-video model generating cinematic high-definition scenes up to 1 minute.",
      fr: "Le modèle texte-vidéo révolutionnaire d'OpenAI générant des scènes cinématiques en haute définition.",
      es: "El revolucionario modelo de texto a video de OpenAI que genera escenas cinematográficas en alta definición.",
      ar: "نموذج النص إلى الفيديو الرائد من OpenAI الذي يولد مشاهد سينمائية عالية الدقة تصل إلى دقيقة كاملة."
    },
    rating: 4.8,
    pricing: 'Paid',
    pricingLocalized: {
      en: 'Included in ChatGPT Pro',
      fr: 'Inclus dans ChatGPT Pro',
      es: 'Incluido en ChatGPT Pro',
      ar: 'مضمن في ChatGPT Pro'
    },
    websiteUrl: 'https://openai.com/sora',
    views: 41200
  },
  {
    id: 'kling-ai',
    name: 'Kling AI',
    category: 'video',
    description: {
      en: "Kuaishou's powerful video generation model producing realistic 2-minute videos from text or images.",
      fr: "Le puissant modèle de génération vidéo de Kuaishou produisant des vidéos réalistes de 2 minutes.",
      es: "El poderoso modelo de generación de video de Kuaishou que produce videos realistas de 2 minutos.",
      ar: "نموذج توليد الفيديو القوي من Kuaishou الذي ينتج مقاطع فيديو واقعية مدتها دقيقتان من نص أو صور."
    },
    rating: 4.6,
    pricing: 'Freemium',
    pricingLocalized: {
      en: 'Free / Credits system',
      fr: 'Gratuit / Système de crédits',
      es: 'Gratis / Sistema de créditos',
      ar: 'مجاني / نظام الاعتمادات'
    },
    websiteUrl: 'https://klingai.com',
    views: 24300
  },
  {
    id: 'hailuo-ai',
    name: 'Hailuo AI',
    category: 'video',
    description: {
      en: "MiniMax viral video generation tool known for incredibly smooth motion and cinematic quality.",
      fr: "Outil de génération vidéo viral de MiniMax connu pour son mouvement fluide et sa qualité cinématique.",
      es: "Herramienta viral de generación de video de MiniMax conocida por su movimiento suave y calidad cinematográfica.",
      ar: "أداة توليد الفيديو الفيروسية من MiniMax المعروفة بحركتها السلسة للغاية وجودتها السينمائية."
    },
    rating: 4.5,
    pricing: 'Freemium',
    pricingLocalized: {
      en: 'Free / Credits system',
      fr: 'Gratuit / Système de crédits',
      es: 'Gratis / Sistema de créditos',
      ar: 'مجاني / نظام الاعتمادات'
    },
    websiteUrl: 'https://hailuoai.com',
    views: 17800
  },
  {
    id: 'pika-labs',
    name: 'Pika Labs',
    category: 'video',
    description: {
      en: "AI video creation platform enabling text-to-video, image-to-video, and video editing with AI effects.",
      fr: "Plateforme de création vidéo IA permettant le texte-vidéo, l'image-vidéo et l'édition avec effets IA.",
      es: "Plataforma de creación de video IA que permite texto a video, imagen a video y edición con efectos IA.",
      ar: "منصة إنشاء الفيديو بالذكاء الاصطناعي تتيح النص إلى فيديو والصورة إلى فيديو وتحرير الفيديو."
    },
    rating: 4.4,
    pricing: 'Freemium',
    pricingLocalized: {
      en: 'Free / $8/mo',
      fr: 'Gratuit / 8$/mois',
      es: 'Gratis / $8/mes',
      ar: 'مجاني / ٨ دولار شهرياً'
    },
    websiteUrl: 'https://pika.art',
    views: 15900
  },
  {
    id: 'heygen',
    name: 'HeyGen',
    category: 'video',
    description: {
      en: "AI video platform for creating realistic avatar-based videos, instant translation, and video dubbing.",
      fr: "Plateforme vidéo IA pour créer des vidéos réalistes basées sur des avatars et la traduction instantanée.",
      es: "Plataforma de video IA para crear videos realistas basados en avatares y traducción instantánea.",
      ar: "منصة فيديو ذكاء اصطناعي لإنشاء مقاطع فيديو واقعية قائمة على الأفاتار والترجمة الفورية."
    },
    rating: 4.6,
    pricing: 'Freemium',
    pricingLocalized: {
      en: 'Free / $24/mo',
      fr: 'Gratuit / 24$/mois',
      es: 'Gratis / $24/mes',
      ar: 'مجاني / ٢٤ دولار شهرياً'
    },
    websiteUrl: 'https://heygen.com',
    views: 20700
  },
  {
    id: 'descript',
    name: 'Descript',
    category: 'video',
    description: {
      en: "AI video and podcast editor where you edit media by editing the transcript and remove filler words instantly.",
      fr: "Éditeur vidéo et podcast IA où vous éditez le média en éditant la transcription.",
      es: "Editor de video y podcast IA donde editas el medio editando la transcripción.",
      ar: "محرر الفيديو والبودكاست بالذكاء الاصطناعي حيث تحرر الوسائط عن طريق تحرير النص."
    },
    rating: 4.5,
    pricing: 'Freemium',
    pricingLocalized: {
      en: 'Free / $24/mo',
      fr: 'Gratuit / 24$/mois',
      es: 'Gratis / $24/mes',
      ar: 'مجاني / ٢٤ دولار شهرياً'
    },
    websiteUrl: 'https://descript.com',
    views: 13600
  },
  {
    id: 'invideo-ai',
    name: 'InVideo AI',
    category: 'video',
    description: {
      en: "AI video creation platform that turns text prompts or scripts into fully edited voiceover-ready videos.",
      fr: "Plateforme de création vidéo IA qui transforme les prompts textuels en vidéos entièrement éditées.",
      es: "Plataforma de creación de video IA que convierte prompts de texto en videos completamente editados.",
      ar: "منصة إنشاء الفيديو بالذكاء الاصطناعي التي تحول النصوص إلى مقاطع فيديو مُحررة بالكامل."
    },
    rating: 4.3,
    pricing: 'Freemium',
    pricingLocalized: {
      en: 'Free / $25/mo',
      fr: 'Gratuit / 25$/mois',
      es: 'Gratis / $25/mes',
      ar: 'مجاني / ٢٥ دولار شهرياً'
    },
    websiteUrl: 'https://invideo.io',
    views: 12100
  },
  {
    id: 'luma-dream',
    name: 'Luma Dream Machine',
    category: 'video',
    description: {
      en: "Luma AI's fast and realistic text-to-video and image-to-video generation model.",
      fr: "Le modèle de génération vidéo rapide et réaliste de Luma AI à partir de texte ou d'images.",
      es: "El modelo de generación de video rápido y realista de Luma AI a partir de texto o imágenes.",
      ar: "نموذج توليد الفيديو السريع والواقعي من Luma AI من نص أو صور."
    },
    rating: 4.5,
    pricing: 'Freemium',
    pricingLocalized: {
      en: 'Free / $30/mo',
      fr: 'Gratuit / 30$/mois',
      es: 'Gratis / $30/mes',
      ar: 'مجاني / ٣٠ دولار شهرياً'
    },
    websiteUrl: 'https://lumalabs.ai/dream-machine',
    views: 18500
  },
  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    category: 'audio',
    description: {
      en: "Hyper-realistic voice cloning, text-to-speech, and synthetic voice generation software.",
      fr: "Logiciel de clonage de voix hyperréaliste, synthèse vocale et génération de voix synthétique.",
      es: "Software de clonación de voz hiperrealista, conversión de texto a voz y generación sintética.",
      ar: "برنامج استنساخ الأصوات الواقعي للغاية، وتحويل النصوص إلى كلام، وتوليد الأصوات الاصطناعية."
    },
    rating: 4.8,
    pricing: 'Freemium',
    pricingLocalized: {
      en: 'Free / $5/mo+',
      fr: 'Gratuit / 5$/mois+',
      es: 'Gratis / $5/mes+',
      ar: 'مجاني / ٥ دولار شهرياً+'
    },
    websiteUrl: 'https://elevenlabs.io',
    views: 22100
  },
  {
    id: 'suno',
    name: 'Suno',
    category: 'audio',
    description: {
      en: "AI music generator that creates full songs with vocals, instruments, and lyrics from a text prompt.",
      fr: "Générateur de musique IA qui crée des chansons complètes avec voix, instruments et paroles.",
      es: "Generador de música IA que crea canciones completas con voces, instrumentos y letras.",
      ar: "مولد موسيقى بالذكاء الاصطناعي يُنشئ أغاني كاملة بالأصوات والآلات الموسيقية والكلمات من نص."
    },
    rating: 4.7,
    pricing: 'Freemium',
    pricingLocalized: {
      en: 'Free / $8/mo',
      fr: 'Gratuit / 8$/mois',
      es: 'Gratis / $8/mes',
      ar: 'مجاني / ٨ دولار شهرياً'
    },
    websiteUrl: 'https://suno.com',
    views: 28400
  },
  {
    id: 'udio',
    name: 'Udio',
    category: 'audio',
    description: {
      en: "Professional AI music creation tool producing studio-quality tracks across all genres from text.",
      fr: "Outil de création musicale IA professionnel produisant des pistes de qualité studio dans tous les genres.",
      es: "Herramienta profesional de creación musical IA que produce pistas de calidad de estudio en todos los géneros.",
      ar: "أداة إنشاء الموسيقى الاحترافية بالذكاء الاصطناعي تنتج مقاطع بجودة استوديو عبر جميع الأنواع."
    },
    rating: 4.5,
    pricing: 'Freemium',
    pricingLocalized: {
      en: 'Free / $10/mo',
      fr: 'Gratuit / 10$/mois',
      es: 'Gratis / $10/mes',
      ar: 'مجاني / ١٠ دولار شهرياً'
    },
    websiteUrl: 'https://udio.com',
    views: 16300
  },
  {
    id: 'whisper',
    name: 'OpenAI Whisper',
    category: 'audio',
    description: {
      en: "Open-source speech recognition model with near-human accuracy across 99 languages.",
      fr: "Modèle de reconnaissance vocale open-source avec une précision quasi humaine dans 99 langues.",
      es: "Modelo de reconocimiento de voz de código abierto con precisión casi humana en 99 idiomas.",
      ar: "نموذج التعرف على الكلام مفتوح المصدر بدقة تقترب من دقة الإنسان عبر 99 لغة."
    },
    rating: 4.6,
    pricing: 'Free',
    pricingLocalized: {
      en: 'Free (open source)',
      fr: 'Gratuit (open source)',
      es: 'Gratis (código abierto)',
      ar: 'مجاني (مفتوح المصدر)'
    },
    websiteUrl: 'https://openai.com/research/whisper',
    views: 18700
  },
  {
    id: 'murf-ai',
    name: 'Murf AI',
    category: 'audio',
    description: {
      en: "AI voice generator with 120+ studio-quality voices for voiceovers, presentations, and e-learning.",
      fr: "Générateur de voix IA avec 120+ voix de qualité studio pour les voix off, présentations et e-learning.",
      es: "Generador de voz IA con 120+ voces de calidad de estudio para doblajes, presentaciones y e-learning.",
      ar: "مولد الصوت بالذكاء الاصطناعي مع أكثر من 120 صوتاً بجودة استوديو للتعليق الصوتي والعروض التقديمية."
    },
    rating: 4.4,
    pricing: 'Freemium',
    pricingLocalized: {
      en: 'Free / $19/mo',
      fr: 'Gratuit / 19$/mois',
      es: 'Gratis / $19/mes',
      ar: 'مجاني / ١٩ دولار شهرياً'
    },
    websiteUrl: 'https://murf.ai',
    views: 10400
  },
  {
    id: 'aiva',
    name: 'AIVA',
    category: 'audio',
    description: {
      en: "AI music composer creating original soundtracks for games, films, and commercial projects.",
      fr: "Compositeur de musique IA créant des bandes sonores originales pour les jeux, films et projets commerciaux.",
      es: "Compositor de música IA que crea bandas sonoras originales para juegos, películas y proyectos comerciales.",
      ar: "ملحن الموسيقى بالذكاء الاصطناعي الذي يُنشئ مسارات صوتية أصلية للألعاب والأفلام والمشاريع التجارية."
    },
    rating: 4.3,
    pricing: 'Freemium',
    pricingLocalized: {
      en: 'Free / $11/mo',
      fr: 'Gratuit / 11$/mois',
      es: 'Gratis / $11/mes',
      ar: 'مجاني / ١١ دولار شهرياً'
    },
    websiteUrl: 'https://aiva.ai',
    views: 8900
  },
  {
    id: 'adobe-podcast',
    name: 'Adobe Podcast',
    category: 'audio',
    description: {
      en: "AI audio enhancement tool that removes background noise and boosts speech clarity to studio quality.",
      fr: "Outil d'amélioration audio IA qui supprime le bruit de fond et améliore la clarté de la parole.",
      es: "Herramienta de mejora de audio IA que elimina el ruido de fondo y mejora la claridad del habla.",
      ar: "أداة تحسين الصوت بالذكاء الاصطناعي التي تزيل ضجيج الخلفية وترفع وضوح الكلام إلى جودة الاستوديو."
    },
    rating: 4.6,
    pricing: 'Freemium',
    pricingLocalized: {
      en: 'Free / Adobe CC plans',
      fr: 'Gratuit / Plans Adobe CC',
      es: 'Gratis / Planes Adobe CC',
      ar: 'مجاني / خطط Adobe CC'
    },
    websiteUrl: 'https://podcast.adobe.com',
    views: 14100
  },
  {
    id: 'resemble-ai',
    name: 'Resemble AI',
    category: 'audio',
    description: {
      en: "AI voice cloning and generation platform with real-time voice synthesis and emotion control.",
      fr: "Plateforme de clonage et génération de voix IA avec synthèse vocale en temps réel et contrôle des émotions.",
      es: "Plataforma de clonación y generación de voz IA con síntesis de voz en tiempo real y control de emociones.",
      ar: "منصة استنساخ وتوليد الأصوات بالذكاء الاصطناعي مع تركيب الصوت في الوقت الفعلي والتحكم في المشاعر."
    },
    rating: 4.4,
    pricing: 'Freemium',
    pricingLocalized: {
      en: 'Free / $29/mo',
      fr: 'Gratuit / 29$/mois',
      es: 'Gratis / $29/mes',
      ar: 'مجاني / ٢٩ دولار شهرياً'
    },
    websiteUrl: 'https://resemble.ai',
    views: 7800
  },
  {
    id: 'notion-ai',
    name: 'Notion AI',
    category: 'productivity',
    description: {
      en: "Integrated workspace helper that summarizes notes, answers questions, and edits layout.",
      fr: "Assistant d'espace de travail intégré qui résume les notes, répond aux questions et édite.",
      es: "Ayudante de espacio de trabajo integrado que resume notas, responde preguntas y edita.",
      ar: "مساعد مساحة عمل متكامل يقوم بتلخيص الملاحظات، والإجابة عن الأسئلة، وتحرير المحتوى."
    },
    rating: 4.4,
    pricing: 'Paid',
    pricingLocalized: {
      en: '$10/mo addon',
      fr: 'Extension 10$/mois',
      es: 'Complemento de $10/mes',
      ar: 'إضافة بقيمة ١٠ دولار شهرياً'
    },
    websiteUrl: 'https://notion.so',
    views: 12500
  },
  {
    id: 'microsoft-copilot',
    name: 'Microsoft Copilot',
    category: 'productivity',
    description: {
      en: "Microsoft's AI assistant integrated across Word, Excel, PowerPoint, Teams, and the entire M365 suite.",
      fr: "L'assistant IA de Microsoft intégré dans Word, Excel, PowerPoint, Teams et toute la suite M365.",
      es: "El asistente IA de Microsoft integrado en Word, Excel, PowerPoint, Teams y toda la suite M365.",
      ar: "مساعد الذكاء الاصطناعي من Microsoft المدمج عبر Word وExcel وPowerPoint وTeams وكامل مجموعة M365."
    },
    rating: 4.5,
    pricing: 'Paid',
    pricingLocalized: {
      en: '$30/user/mo',
      fr: '30$/utilisateur/mois',
      es: '$30/usuario/mes',
      ar: '٣٠ دولار للمستخدم شهرياً'
    },
    websiteUrl: 'https://copilot.microsoft.com',
    views: 32100
  },
  {
    id: 'otter-ai',
    name: 'Otter.ai',
    category: 'productivity',
    description: {
      en: "AI meeting assistant that records, transcribes, and summarizes meetings in real time with action items.",
      fr: "Assistant de réunion IA qui enregistre, transcrit et résume les réunions en temps réel.",
      es: "Asistente de reuniones IA que graba, transcribe y resume reuniones en tiempo real.",
      ar: "مساعد الاجتماعات بالذكاء الاصطناعي الذي يسجل ويُفرغ ويلخص الاجتماعات في الوقت الفعلي."
    },
    rating: 4.4,
    pricing: 'Freemium',
    pricingLocalized: {
      en: 'Free / $17/mo',
      fr: 'Gratuit / 17$/mois',
      es: 'Gratis / $17/mes',
      ar: 'مجاني / ١٧ دولار شهرياً'
    },
    websiteUrl: 'https://otter.ai',
    views: 14200
  },
  {
    id: 'zapier-ai',
    name: 'Zapier AI',
    category: 'productivity',
    description: {
      en: "AI-powered automation platform connecting 6,000+ apps with natural language workflow creation.",
      fr: "Plateforme d'automatisation alimentée par IA connectant 6 000+ applications.",
      es: "Plataforma de automatización con IA que conecta 6,000+ aplicaciones.",
      ar: "منصة أتمتة مدعومة بالذكاء الاصطناعي تربط أكثر من 6000 تطبيق مع إنشاء سير العمل باللغة الطبيعية."
    },
    rating: 4.5,
    pricing: 'Freemium',
    pricingLocalized: {
      en: 'Free / $20/mo',
      fr: 'Gratuit / 20$/mois',
      es: 'Gratis / $20/mes',
      ar: 'مجاني / ٢٠ دولار شهرياً'
    },
    websiteUrl: 'https://zapier.com',
    views: 21400
  },
  {
    id: 'gamma-app',
    name: 'Gamma',
    category: 'productivity',
    description: {
      en: "AI presentation builder creating polished slides, documents, and web pages with a single prompt.",
      fr: "Constructeur de présentations IA créant des diapositives, documents et pages web soignés en un prompt.",
      es: "Constructor de presentaciones IA que crea diapositivas, documentos y páginas web pulidas con un prompt.",
      ar: "منشئ العروض التقديمية بالذكاء الاصطناعي الذي يُنشئ شرائح ومستندات وصفحات ويب مصقولة بأمر واحد."
    },
    rating: 4.5,
    pricing: 'Freemium',
    pricingLocalized: {
      en: 'Free / $10/mo',
      fr: 'Gratuit / 10$/mois',
      es: 'Gratis / $10/mes',
      ar: 'مجاني / ١٠ دولار شهرياً'
    },
    websiteUrl: 'https://gamma.app',
    views: 16400
  },
  {
    id: 'reclaim-ai',
    name: 'Reclaim AI',
    category: 'productivity',
    description: {
      en: "AI calendar scheduling assistant that auto-blocks time for tasks, habits, and meeting prep.",
      fr: "Assistant de planification calendrier IA qui bloque automatiquement du temps pour les tâches et habitudes.",
      es: "Asistente de programación de calendario IA que bloquea automáticamente tiempo para tareas y hábitos.",
      ar: "مساعد جدولة التقويم بالذكاء الاصطناعي الذي يحجز الوقت تلقائياً للمهام والعادات والتحضير للاجتماعات."
    },
    rating: 4.4,
    pricing: 'Freemium',
    pricingLocalized: {
      en: 'Free / $10/mo',
      fr: 'Gratuit / 10$/mois',
      es: 'Gratis / $10/mes',
      ar: 'مجاني / ١٠ دولار شهرياً'
    },
    websiteUrl: 'https://reclaim.ai',
    views: 8300
  },
  {
    id: 'fireflies-ai',
    name: 'Fireflies.ai',
    category: 'productivity',
    description: {
      en: "AI notetaker that joins meetings, transcribes conversations, and extracts searchable action items.",
      fr: "Preneur de notes IA qui rejoint les réunions, transcrit les conversations et extrait des points d'action.",
      es: "Tomador de notas IA que se une a reuniones, transcribe conversaciones y extrae elementos de acción.",
      ar: "آخذ الملاحظات بالذكاء الاصطناعي الذي ينضم إلى الاجتماعات ويُفرغ المحادثات ويستخرج نقاط العمل."
    },
    rating: 4.4,
    pricing: 'Freemium',
    pricingLocalized: {
      en: 'Free / $18/mo',
      fr: 'Gratuit / 18$/mois',
      es: 'Gratis / $18/mes',
      ar: 'مجاني / ١٨ دولار شهرياً'
    },
    websiteUrl: 'https://fireflies.ai',
    views: 12700
  },
  {
    id: 'beautiful-ai',
    name: 'Beautiful.ai',
    category: 'productivity',
    description: {
      en: "Smart presentation software with AI-powered slide design that auto-adjusts layouts as you add content.",
      fr: "Logiciel de présentation intelligent avec design de diapositives IA qui ajuste automatiquement les mises en page.",
      es: "Software de presentación inteligente con diseño de diapositivas IA que ajusta automáticamente los diseños.",
      ar: "برنامج العروض التقديمية الذكي مع تصميم الشرائح بالذكاء الاصطناعي الذي يضبط التخطيطات تلقائياً."
    },
    rating: 4.3,
    pricing: 'Freemium',
    pricingLocalized: {
      en: 'Free / $12/mo',
      fr: 'Gratuit / 12$/mois',
      es: 'Gratis / $12/mes',
      ar: 'مجاني / ١٢ دولار شهرياً'
    },
    websiteUrl: 'https://beautiful.ai',
    views: 8500
  },
  {
    id: 'clickup-ai',
    name: 'ClickUp AI',
    category: 'productivity',
    description: {
      en: "AI-powered project management with intelligent summaries, task generation, and writing assistance.",
      fr: "Gestion de projet alimentée par IA avec résumés intelligents, génération de tâches et aide à la rédaction.",
      es: "Gestión de proyectos con IA con resúmenes inteligentes, generación de tareas y asistencia de escritura.",
      ar: "إدارة المشاريع المدعومة بالذكاء الاصطناعي مع الملخصات الذكية وتوليد المهام ومساعدة الكتابة."
    },
    rating: 4.3,
    pricing: 'Paid',
    pricingLocalized: {
      en: '$7/user/mo + AI addon',
      fr: '7$/utilisateur/mois + addon IA',
      es: '$7/usuario/mes + complemento IA',
      ar: '٧ دولار للمستخدم شهرياً + إضافة ذكاء اصطناعي'
    },
    websiteUrl: 'https://clickup.com',
    views: 11800
  },
  {
    id: 'make-ai',
    name: 'Make',
    category: 'productivity',
    description: {
      en: "Visual no-code automation platform with AI modules for connecting apps and automating complex workflows.",
      fr: "Plateforme d'automatisation visuelle no-code avec modules IA pour connecter les applications.",
      es: "Plataforma de automatización visual no-code con módulos IA para conectar aplicaciones.",
      ar: "منصة أتمتة مرئية بدون كود مع وحدات الذكاء الاصطناعي لربط التطبيقات وأتمتة سير العمل المعقدة."
    },
    rating: 4.4,
    pricing: 'Freemium',
    pricingLocalized: {
      en: 'Free / $9/mo',
      fr: 'Gratuit / 9$/mois',
      es: 'Gratis / $9/mes',
      ar: 'مجاني / ٩ دولار شهرياً'
    },
    websiteUrl: 'https://make.com',
    views: 13900
  },
  {
    id: 'n8n',
    name: 'n8n',
    category: 'productivity',
    description: {
      en: "Open-source workflow automation tool with 400+ integrations and AI agent builder capabilities.",
      fr: "Outil d'automatisation de flux de travail open-source avec 400+ intégrations et constructeur d'agents IA.",
      es: "Herramienta de automatización de flujo de trabajo de código abierto con 400+ integraciones.",
      ar: "أداة أتمتة سير العمل مفتوحة المصدر مع أكثر من 400 تكامل وقدرات بناء وكيل الذكاء الاصطناعي."
    },
    rating: 4.6,
    pricing: 'Freemium',
    pricingLocalized: {
      en: 'Free (self-host) / $20/mo',
      fr: 'Gratuit (auto-hébergé) / 20$/mois',
      es: 'Gratis (auto-alojado) / $20/mes',
      ar: 'مجاني (استضافة ذاتية) / ٢٠ دولار شهرياً'
    },
    websiteUrl: 'https://n8n.io',
    views: 17200
  },
  {
    id: 'surfer-seo',
    name: 'Surfer SEO',
    category: 'marketing',
    description: {
      en: "AI SEO tool that analyzes top SERP results and generates data-driven content outlines to rank higher.",
      fr: "Outil SEO IA qui analyse les meilleurs résultats SERP et génère des plans de contenu pour mieux se classer.",
      es: "Herramienta SEO IA que analiza los mejores resultados SERP y genera esquemas de contenido.",
      ar: "أداة SEO بالذكاء الاصطناعي تحلل أفضل نتائج SERP وتُنشئ مخططات محتوى مبنية على البيانات للتصنيف الأعلى."
    },
    rating: 4.5,
    pricing: 'Paid',
    pricingLocalized: {
      en: 'From $89/mo',
      fr: 'À partir de 89$/mois',
      es: 'Desde $89/mes',
      ar: 'تبدأ من ٨٩ دولار شهرياً'
    },
    websiteUrl: 'https://surferseo.com',
    affiliateUrl: 'https://surferseo.com?via=aiverse',
    commission: '25% récurrent',
    views: 13500
  },
  {
    id: 'semrush-ai',
    name: 'Semrush AI',
    category: 'marketing',
    description: {
      en: "Comprehensive AI marketing toolkit covering SEO, PPC, content, social media, and competitor analysis.",
      fr: "Suite marketing IA complète couvrant SEO, PPC, contenu, réseaux sociaux et analyse concurrentielle.",
      es: "Kit de herramientas de marketing IA completo que cubre SEO, PPC, contenido, redes sociales y análisis.",
      ar: "مجموعة أدوات التسويق بالذكاء الاصطناعي الشاملة التي تغطي SEO وPPC والمحتوى ووسائل التواصل الاجتماعي."
    },
    rating: 4.6,
    pricing: 'Paid',
    pricingLocalized: {
      en: 'From $120/mo',
      fr: 'À partir de 120$/mois',
      es: 'Desde $120/mes',
      ar: 'تبدأ من ١٢٠ دولار شهرياً'
    },
    websiteUrl: 'https://semrush.com',
    affiliateUrl: 'https://semrush.com?via=aiverse',
    commission: '$200 par vente',
    views: 22800
  },
  {
    id: 'adcreative-ai',
    name: 'AdCreative.ai',
    category: 'marketing',
    description: {
      en: "AI ad creative generator producing conversion-optimized banners, social ads, and video creatives at scale.",
      fr: "Générateur de créatifs publicitaires IA produisant des bannières et publicités sociales optimisées.",
      es: "Generador de creatividades publicitarias IA que produce banners y anuncios sociales optimizados.",
      ar: "مولد المواد الإبداعية للإعلانات بالذكاء الاصطناعي ينتج لافتات وإعلانات اجتماعية محسّنة للتحويل."
    },
    rating: 4.4,
    pricing: 'Paid',
    pricingLocalized: {
      en: 'From $21/mo',
      fr: 'À partir de 21$/mois',
      es: 'Desde $21/mes',
      ar: 'تبدأ من ٢١ دولار شهرياً'
    },
    websiteUrl: 'https://adcreative.ai',
    views: 10200
  },
  {
    id: 'instantly-ai',
    name: 'Instantly AI',
    category: 'marketing',
    description: {
      en: "AI cold email platform with unlimited sending accounts, warmup automation, and reply detection.",
      fr: "Plateforme d'email froid IA avec comptes d'envoi illimités et automatisation du préchauffage.",
      es: "Plataforma de email frío IA con cuentas de envío ilimitadas y automatización de calentamiento.",
      ar: "منصة البريد الإلكتروني البارد بالذكاء الاصطناعي مع حسابات إرسال غير محدودة وأتمتة التدفئة."
    },
    rating: 4.5,
    pricing: 'Paid',
    pricingLocalized: {
      en: 'From $30/mo',
      fr: 'À partir de 30$/mois',
      es: 'Desde $30/mes',
      ar: 'تبدأ من ٣٠ دولار شهرياً'
    },
    websiteUrl: 'https://instantly.ai',
    views: 11600
  },
  {
    id: 'predis-ai',
    name: 'Predis.ai',
    category: 'marketing',
    description: {
      en: "AI social media post generator creating on-brand videos, carousels, and reels with competitor analysis.",
      fr: "Générateur de posts pour réseaux sociaux IA créant des vidéos, carrousels et reels avec analyse concurrentielle.",
      es: "Generador de publicaciones IA que crea videos, carruseles y reels con análisis de competencia.",
      ar: "مولد منشورات وسائل التواصل الاجتماعي بالذكاء الاصطناعي ينشئ مقاطع الفيديو والصور الدوارة."
    },
    rating: 4.3,
    pricing: 'Freemium',
    pricingLocalized: {
      en: 'Free / $29/mo',
      fr: 'Gratuit / 29$/mois',
      es: 'Gratis / $29/mes',
      ar: 'مجاني / ٢٩ دولار شهرياً'
    },
    websiteUrl: 'https://predis.ai',
    views: 8100
  },
  {
    id: 'hootsuite-ai',
    name: 'Hootsuite OwlyWriter AI',
    category: 'marketing',
    description: {
      en: "AI social media content creator that writes captions, hashtags, and posts optimized per platform.",
      fr: "Créateur de contenu IA pour réseaux sociaux qui rédige des légendes, hashtags et publications optimisées.",
      es: "Creador de contenido IA para redes sociales que escribe subtítulos, hashtags y publicaciones optimizadas.",
      ar: "منشئ محتوى وسائل التواصل الاجتماعي بالذكاء الاصطناعي الذي يكتب التسميات التوضيحية والمنشورات."
    },
    rating: 4.2,
    pricing: 'Paid',
    pricingLocalized: {
      en: 'From $99/mo',
      fr: 'À partir de 99$/mois',
      es: 'Desde $99/mes',
      ar: 'تبدأ من ٩٩ دولار شهرياً'
    },
    websiteUrl: 'https://hootsuite.com',
    views: 9800
  },
  {
    id: 'anyword',
    name: 'Anyword',
    category: 'marketing',
    description: {
      en: "Performance-driven AI copywriting tool with predictive scoring for ads, emails, and landing pages.",
      fr: "Outil de rédaction IA axé sur la performance avec notation prédictive pour annonces et emails.",
      es: "Herramienta de redacción IA orientada al rendimiento con puntuación predictiva para anuncios y emails.",
      ar: "أداة كتابة النصوص بالذكاء الاصطناعي المدفوعة بالأداء مع تسجيل تنبؤي للإعلانات والبريد الإلكتروني."
    },
    rating: 4.3,
    pricing: 'Paid',
    pricingLocalized: {
      en: 'From $39/mo',
      fr: 'À partir de 39$/mois',
      es: 'Desde $39/mes',
      ar: 'تبدأ من ٣٩ دولار شهرياً'
    },
    websiteUrl: 'https://anyword.com',
    views: 7400
  },
  {
    id: 'brand24',
    name: 'Brand24',
    category: 'marketing',
    description: {
      en: "AI-powered social listening and brand monitoring tool tracking mentions across the web in real time.",
      fr: "Outil d\'ecoute sociale et de surveillance de marque alimenté par IA suivant les mentions sur le web.",
      es: "Herramienta de escucha social y monitoreo de marca con IA que rastrea menciones en tiempo real.",
      ar: "أداة الاستماع الاجتماعي ومراقبة العلامة التجارية المدعومة بالذكاء الاصطناعي لتتبع الإشارات عبر الويب."
    },
    rating: 4.4,
    pricing: 'Paid',
    pricingLocalized: {
      en: 'From $79/mo',
      fr: 'À partir de 79$/mois',
      es: 'Desde $79/mes',
      ar: 'تبدأ من ٧٩ دولار شهرياً'
    },
    websiteUrl: 'https://brand24.com',
    views: 8200
  },
  {
    id: 'rytr',
    name: 'Rytr',
    category: 'writing',
    description: {
      en: "Affordable AI writing assistant for generating content in 40+ use cases and 30+ languages.",
      fr: "Assistant de rédaction IA abordable pour générer du contenu dans 40+ cas d'usage.",
      es: "Asistente de escritura IA asequible para generar contenido en 40+ casos de uso.",
      ar: "مساعد كتابة ذكاء اصطناعي بأسعار معقولة لإنشاء المحتوى في 40+ حالة استخدام."
    },
    rating: 4.2, pricing: 'Freemium',
    pricingLocalized: { en: 'Free / $9/mo', fr: 'Gratuit / 9$/mois', es: 'Gratis / $9/mes', ar: 'مجاني / ٩ دولار شهرياً' },
    websiteUrl: 'https://rytr.me', views: 12000
  },
  {
    id: 'wordtune',
    name: 'Wordtune',
    category: 'writing',
    description: {
      en: "AI writing companion that rewrites, paraphrases, and summarizes text while preserving your voice.",
      fr: "Compagnon de rédaction IA qui réécrit et paraphrase tout en préservant votre voix.",
      es: "Compañero de escritura IA que reescribe y parafrasea preservando tu voz.",
      ar: "رفيق الكتابة بالذكاء الاصطناعي الذي يعيد الكتابة والصياغة مع الحفاظ على صوتك."
    },
    rating: 4.3, pricing: 'Freemium',
    pricingLocalized: { en: 'Free / $13.99/mo', fr: 'Gratuit / 13,99$/mois', es: 'Gratis / $13.99/mes', ar: 'مجاني / ١٣.٩٩ دولار شهرياً' },
    websiteUrl: 'https://wordtune.com', views: 14000
  },
  {
    id: 'flux-ai',
    name: 'Flux',
    category: 'image',
    description: {
      en: "Open-source image generation model by Black Forest Labs with stunning photorealism.",
      fr: "Modèle de génération d'images open-source par Black Forest Labs avec un photoréalisme époustouflant.",
      es: "Modelo de generación de imágenes open-source de Black Forest Labs con fotorrealismo.",
      ar: "نموذج توليد الصور المفتوح المصدر من Black Forest Labs بواقعية مذهلة."
    },
    rating: 4.6, pricing: 'Freemium',
    pricingLocalized: { en: 'Free / Pay-per-use', fr: 'Gratuit / Paiement à l\'usage', es: 'Gratis / Pago por uso', ar: 'مجاني / الدفع حسب الاستخدام' },
    websiteUrl: 'https://blackforestlabs.ai', views: 17000
  },
  {
    id: 'veed-io',
    name: 'VEED.IO',
    category: 'video',
    description: {
      en: "Online video editor with AI auto-subtitles, avatar creation, noise removal, and translation.",
      fr: "Éditeur vidéo en ligne avec sous-titres auto IA, avatars, suppression de bruit et traduction.",
      es: "Editor de video en línea con subtítulos automáticos IA, avatares y traducción.",
      ar: "محرر فيديو عبر الإنترنت بأدوات ذكاء اصطناعي للترجمة التلقائية وإزالة الضوضاء."
    },
    rating: 4.4, pricing: 'Freemium',
    pricingLocalized: { en: 'Free / $18/mo', fr: 'Gratuit / 18$/mois', es: 'Gratis / $18/mes', ar: 'مجاني / ١٨ دولار شهرياً' },
    websiteUrl: 'https://veed.io', views: 20000
  },
  {
    id: 'runway-ml',
    name: 'Runway ML',
    category: 'video',
    description: {
      en: "Professional AI video generation and editing suite used by Hollywood filmmakers.",
      fr: "Suite professionnelle de génération et d'édition vidéo IA utilisée par les cinéastes de Hollywood.",
      es: "Suite profesional de generación y edición de video IA usada por cineastas de Hollywood.",
      ar: "مجموعة احترافية لتوليد وتحرير الفيديو بالذكاء الاصطناعي يستخدمها صانعو أفلام هوليوود."
    },
    rating: 4.6, pricing: 'Freemium',
    pricingLocalized: { en: 'Free / $15/mo', fr: 'Gratuit / 15$/mois', es: 'Gratis / $15/mes', ar: 'مجاني / ١٥ دولار شهرياً' },
    websiteUrl: 'https://runwayml.com', views: 28000
  },
  {
    id: 'zapier',
    name: 'Zapier',
    category: 'productivity',
    description: {
      en: "Leading no-code automation tool connecting 6,000+ apps with AI-powered workflow creation.",
      fr: "Principal outil d'automatisation no-code connectant 6 000+ applications.",
      es: "Principal herramienta de automatización no-code que conecta 6.000+ apps.",
      ar: "أداة الأتمتة الرائدة بدون كود تربط أكثر من 6000 تطبيق."
    },
    rating: 4.5, pricing: 'Freemium',
    pricingLocalized: { en: 'Free / $19.99/mo', fr: 'Gratuit / 19,99$/mois', es: 'Gratis / $19.99/mes', ar: 'مجاني / ١٩.٩٩ دولار شهرياً' },
    websiteUrl: 'https://zapier.com', views: 28000
  },
  {
    id: 'tldv',
    name: 'tl;dv',
    category: 'productivity',
    description: {
      en: "AI meeting recorder that transcribes and summarizes your Zoom and Google Meet calls.",
      fr: "Enregistreur de réunions IA qui transcrit et résume vos appels Zoom et Google Meet.",
      es: "Grabador de reuniones IA que transcribe y resume tus llamadas de Zoom y Google Meet.",
      ar: "مسجّل الاجتماعات بالذكاء الاصطناعي الذي يُفرّغ ويلخص مكالمات Zoom وGoogle Meet."
    },
    rating: 4.5, pricing: 'Freemium',
    pricingLocalized: { en: 'Free / $18/mo', fr: 'Gratuit / 18$/mois', es: 'Gratis / $18/mes', ar: 'مجاني / ١٨ دولار شهرياً' },
    websiteUrl: 'https://tldv.io', views: 13000
  },
  {
    id: 'motion-app',
    name: 'Motion',
    category: 'productivity',
    description: {
      en: "AI project and task manager that automatically builds and adjusts your daily schedule.",
      fr: "Gestionnaire de projets et tâches IA qui crée et ajuste automatiquement votre planning.",
      es: "Gestor de proyectos y tareas IA que construye y ajusta automáticamente tu agenda.",
      ar: "مدير المشاريع والمهام بالذكاء الاصطناعي الذي يبني جدولك اليومي ويعدّله تلقائياً."
    },
    rating: 4.3, pricing: 'Paid',
    pricingLocalized: { en: '$19/mo', fr: '19$/mois', es: '$19/mes', ar: '١٩ دولار شهرياً' },
    websiteUrl: 'https://usemotion.com', views: 14000
  },
  {
    id: 'mem-ai',
    name: 'Mem',
    category: 'productivity',
    description: {
      en: "AI-powered note-taking app that organizes your knowledge automatically.",
      fr: "Application de prise de notes IA qui organise automatiquement vos connaissances.",
      es: "App de toma de notas IA que organiza tu conocimiento automáticamente.",
      ar: "تطبيق تدوين الملاحظات بالذكاء الاصطناعي الذي ينظم معرفتك تلقائياً."
    },
    rating: 4.2, pricing: 'Freemium',
    pricingLocalized: { en: 'Free / $14.99/mo', fr: 'Gratuit / 14,99$/mois', es: 'Gratis / $14.99/mes', ar: 'مجاني / ١٤.٩٩ دولار شهرياً' },
    websiteUrl: 'https://mem.ai', views: 10000
  },
  {
    id: 'superhuman',
    name: 'Superhuman',
    category: 'productivity',
    description: {
      en: "AI-powered email client that helps you reach inbox zero faster with smart shortcuts and summaries.",
      fr: "Client email propulsé par IA pour atteindre inbox zéro plus rapidement avec des raccourcis intelligents.",
      es: "Cliente de email con IA para alcanzar inbox cero más rápido con atajos inteligentes.",
      ar: "عميل بريد إلكتروني مدعوم بالذكاء الاصطناعي للوصول إلى صفر رسائل بشكل أسرع."
    },
    rating: 4.4, pricing: 'Paid',
    pricingLocalized: { en: '$30/mo', fr: '30$/mois', es: '$30/mes', ar: '٣٠ دولار شهرياً' },
    websiteUrl: 'https://superhuman.com', views: 11000
  },
  {
    id: 'semrush',
    name: 'Semrush',
    category: 'marketing',
    description: {
      en: "All-in-one digital marketing platform with AI SEO, PPC, content, and competitor analysis tools.",
      fr: "Plateforme marketing digital tout-en-un avec SEO, PPC, contenu et analyse de concurrents.",
      es: "Plataforma de marketing digital todo en uno con SEO, PPC, contenido y análisis de competidores.",
      ar: "منصة التسويق الرقمي الشاملة بأدوات SEO وPPC والمحتوى وتحليل المنافسين."
    },
    rating: 4.7, pricing: 'Paid',
    pricingLocalized: { en: 'From $129.95/mo', fr: 'À partir de 129,95$/mois', es: 'Desde $129.95/mes', ar: 'تبدأ من ١٢٩.٩٥ دولار شهرياً' },
    websiteUrl: 'https://semrush.com', views: 35000
  },
  {
    id: 'beehiiv',
    name: 'Beehiiv',
    category: 'marketing',
    description: {
      en: "AI newsletter platform by ex-Morning Brew team with monetization and growth tools built in.",
      fr: "Plateforme de newsletter IA par l'équipe ex-Morning Brew avec outils de monétisation.",
      es: "Plataforma de newsletter IA del equipo ex-Morning Brew con herramientas de monetización.",
      ar: "منصة النشرة الإخبارية بالذكاء الاصطناعي من فريق Morning Brew السابق مع أدوات التحقيق."
    },
    rating: 4.6, pricing: 'Freemium',
    pricingLocalized: { en: 'Free / $39/mo', fr: 'Gratuit / 39$/mois', es: 'Gratis / $39/mes', ar: 'مجاني / ٣٩ دولار شهرياً' },
    websiteUrl: 'https://beehiiv.com',
    affiliateUrl: 'https://www.beehiiv.com?via=aiverse',
    commission: '50% for 12 months',
    views: 16000
  },
  {
    id: 'ahrefs',
    name: 'Ahrefs',
    category: 'marketing',
    description: {
      en: "SEO toolset with AI features for backlink analysis, keyword research, and site audits.",
      fr: "Suite SEO avec fonctionnalités IA pour analyse de backlinks, recherche de mots-clés et audits.",
      es: "Suite SEO con funciones IA para análisis de backlinks, investigación de palabras clave y auditorías.",
      ar: "مجموعة أدوات SEO بميزات ذكاء اصطناعي لتحليل الروابط الخلفية وأبحاث الكلمات المفتاحية."
    },
    rating: 4.7, pricing: 'Paid',
    pricingLocalized: { en: 'From $99/mo', fr: 'À partir de 99$/mois', es: 'Desde $99/mes', ar: 'تبدأ من ٩٩ دولار شهرياً' },
    websiteUrl: 'https://ahrefs.com', views: 30000
  },
  {
    id: 'klaviyo',
    name: 'Klaviyo',
    category: 'marketing',
    description: {
      en: "AI-powered email and SMS marketing platform for e-commerce with predictive analytics.",
      fr: "Plateforme de marketing email et SMS propulsée par IA pour l'e-commerce avec analytiques prédictives.",
      es: "Plataforma de marketing email y SMS con IA para e-commerce con analíticas predictivas.",
      ar: "منصة تسويق البريد الإلكتروني والرسائل القصيرة المدعومة بالذكاء الاصطناعي للتجارة الإلكترونية."
    },
    rating: 4.5, pricing: 'Freemium',
    pricingLocalized: { en: 'Free / $20/mo', fr: 'Gratuit / 20$/mois', es: 'Gratis / $20/mes', ar: 'مجاني / ٢٠ دولار شهرياً' },
    websiteUrl: 'https://klaviyo.com', views: 18000
  },
  {
    id: 'hemingway-editor',
    name: 'Hemingway Editor',
    category: 'writing',
    description: {
      en: "Writing tool that highlights complex sentences and readability issues to make prose bold and clear.",
      fr: "Outil qui identifie les phrases complexes pour rendre votre ecriture claire et percutante.",
      es: "Herramienta que resalta oraciones complejas para hacer tu escritura clara.",
      ar: "أداة تسلط الضوء على الجمل المعقدة لجعل كتابتك واضحة وجريئة."
    },
    rating: 4.3, pricing: 'Freemium',
    pricingLocalized: { en: 'Free / $19.99', fr: 'Gratuit / 19.99$', es: 'Gratis / $19.99', ar: 'مجاني / 19.99 دولار' },
    websiteUrl: 'https://hemingwayapp.com',
    views: 11000
  },
  {
    id: 'sudowrite',
    name: 'Sudowrite',
    category: 'writing',
    description: {
      en: "AI writing tool designed specifically for fiction writers — generates plot ideas, rewrites, and character arcs.",
      fr: "Outil IA concu specifiquement pour les auteurs de fiction et de romans.",
      es: "Herramienta IA disenada especificamente para escritores de ficcion.",
      ar: "أداة كتابة بالذكاء الاصطناعي مصممة خصيصاً لكتّاب الروايات والخيال."
    },
    rating: 4.4, pricing: 'Paid',
    pricingLocalized: { en: 'From $19/mo', fr: 'A partir de 19$/mois', es: 'Desde $19/mes', ar: 'تبدأ من 19 دولار' },
    websiteUrl: 'https://sudowrite.com',
    views: 9000
  },
  {
    id: 'longshot-ai',
    name: 'LongShot AI',
    category: 'writing',
    description: {
      en: "Fact-checked AI content writer generating long-form SEO blogs grounded in real-time web data.",
      fr: "Redacteur IA verifie generant des articles SEO longs bases sur des donnees web en temps reel.",
      es: "Redactor IA verificado que genera articulos SEO extensos basados en datos web en tiempo real.",
      ar: "كاتب محتوى بالذكاء الاصطناعي يولد مقالات SEO طويلة مستندة إلى بيانات الويب الفورية."
    },
    rating: 4.2, pricing: 'Freemium',
    pricingLocalized: { en: 'Free / $29/mo', fr: 'Gratuit / 29$/mois', es: 'Gratis / $29/mes', ar: 'مجاني / 29 دولار' },
    websiteUrl: 'https://longshot.ai',
    views: 8000
  },
  {
    id: 'cohere-ai',
    name: 'Cohere',
    category: 'writing',
    description: {
      en: "Enterprise NLP platform offering powerful text generation, classification, and semantic search APIs.",
      fr: "Plateforme NLP d'entreprise offrant de puissantes API de generation de texte et recherche semantique.",
      es: "Plataforma NLP empresarial que ofrece potentes API de generacion de texto y busqueda semantica.",
      ar: "منصة معالجة اللغة الطبيعية للمؤسسات تقدم واجهات API قوية لتوليد النص والبحث الدلالي."
    },
    rating: 4.5, pricing: 'Freemium',
    pricingLocalized: { en: 'Free / $20/mo', fr: 'Gratuit / 20$/mois', es: 'Gratis / $20/mes', ar: 'مجاني / 20 دولار' },
    websiteUrl: 'https://cohere.com',
    views: 12000
  },
  {
    id: 'hyperwrite',
    name: 'HyperWrite',
    category: 'writing',
    description: {
      en: "AI writing assistant that learns your personal style and helps draft emails, documents, and content faster.",
      fr: "Assistant IA qui apprend votre style personnel et aide a rediger emails et documents plus vite.",
      es: "Asistente IA que aprende tu estilo personal y ayuda a redactar correos y documentos mas rapido.",
      ar: "مساعد كتابة بالذكاء الاصطناعي يتعلم أسلوبك الشخصي ويساعد في صياغة رسائل البريد والمستندات."
    },
    rating: 4.2, pricing: 'Freemium',
    pricingLocalized: { en: 'Free / $19.99/mo', fr: 'Gratuit / 19.99$/mois', es: 'Gratis / $19.99/mes', ar: 'مجاني / 19.99 دولار' },
    websiteUrl: 'https://hyperwriteai.com',
    views: 8500
  },
  {
    id: 'recraft',
    name: 'Recraft',
    category: 'image',
    description: {
      en: "AI design tool for creating consistent vector images, icons, and brand illustrations at scale.",
      fr: "Outil de design IA pour creer des images vectorielles et illustrations de marque coherentes.",
      es: "Herramienta de diseno IA para crear imagenes vectoriales e ilustraciones de marca coherentes.",
      ar: "أداة تصميم بالذكاء الاصطناعي لإنشاء صور متجهية وأيقونات ورسوم علامات تجارية متسقة."
    },
    rating: 4.5, pricing: 'Freemium',
    pricingLocalized: { en: 'Free / $12/mo', fr: 'Gratuit / 12$/mois', es: 'Gratis / $12/mes', ar: 'مجاني / 12 دولار' },
    websiteUrl: 'https://recraft.ai',
    views: 11000
  },
  {
    id: 'playground-ai',
    name: 'Playground AI',
    category: 'image',
    description: {
      en: "Free AI image creator with powerful editing tools, real-time canvas, and a large creator community.",
      fr: "Createur d'images IA gratuit avec outils d'edition puissants et grande communaute creative.",
      es: "Creador de imagenes IA gratuito con potentes herramientas de edicion y gran comunidad.",
      ar: "منشئ صور مجاني بالذكاء الاصطناعي مع أدوات تحرير قوية ومجتمع كبير من المبدعين."
    },
    rating: 4.3, pricing: 'Freemium',
    pricingLocalized: { en: 'Free / $15/mo', fr: 'Gratuit / 15$/mois', es: 'Gratis / $15/mes', ar: 'مجاني / 15 دولار' },
    websiteUrl: 'https://playground.com',
    views: 13000
  },
  {
    id: 'clipdrop',
    name: 'ClipDrop',
    category: 'image',
    description: {
      en: "AI image editing suite by Stability AI with background removal, relighting, text removal, and upscaling.",
      fr: "Suite d'edition d'images IA par Stability AI avec suppression de fond, reeclairage et upscaling.",
      es: "Suite de edicion de imagenes IA de Stability AI con eliminacion de fondo y aumento de resolucion.",
      ar: "مجموعة تحرير صور بالذكاء الاصطناعي من Stability AI مع إزالة الخلفية والتحسين."
    },
    rating: 4.4, pricing: 'Freemium',
    pricingLocalized: { en: 'Free / $13/mo', fr: 'Gratuit / 13$/mois', es: 'Gratis / $13/mes', ar: 'مجاني / 13 دولار' },
    websiteUrl: 'https://clipdrop.co',
    views: 14000
  },
  {
    id: 'krea-ai',
    name: 'Krea AI',
    category: 'image',
    description: {
      en: "Real-time AI image generation and enhancement tool with a live canvas for instant creative iteration.",
      fr: "Outil de generation d'images IA en temps reel avec un canvas live pour iteration creative instantanee.",
      es: "Herramienta de generacion de imagenes IA en tiempo real con lienzo en vivo para iteracion creativa.",
      ar: "أداة توليد وتحسين الصور بالذكاء الاصطناعي في الوقت الفعلي مع لوحة رسم مباشرة."
    },
    rating: 4.5, pricing: 'Freemium',
    pricingLocalized: { en: 'Free / $24/mo', fr: 'Gratuit / 24$/mois', es: 'Gratis / $24/mes', ar: 'مجاني / 24 دولار' },
    websiteUrl: 'https://krea.ai',
    views: 15000
  },
  {
    id: 'magnific-ai',
    name: 'Magnific AI',
    category: 'image',
    description: {
      en: "AI image upscaler and enhancer that adds ultra-sharp details and textures beyond the original resolution.",
      fr: "Upscaler IA qui ajoute des details ultra-nets et des textures au-dela de la resolution originale.",
      es: "Upscaler IA que agrega detalles ultra-nitidos y texturas mas alla de la resolucion original.",
      ar: "أداة تكبير وتحسين الصور بالذكاء الاصطناعي تضيف تفاصيل حادة وقوام فائق الدقة."
    },
    rating: 4.6, pricing: 'Paid',
    pricingLocalized: { en: 'From $39/mo', fr: 'A partir de 39$/mois', es: 'Desde $39/mes', ar: 'تبدأ من 39 دولار' },
    websiteUrl: 'https://magnific.ai',
    views: 12000
  },
  {
    id: 'claude-ai',
    name: 'Claude.ai',
    category: 'code',
    description: {
      en: "Anthropic AI assistant excelling at long-context analysis, nuanced writing, coding, and safe conversation.",
      fr: "Assistant IA d'Anthropic excellent pour l'analyse en contexte long, le codage et la conversation.",
      es: "Asistente IA de Anthropic excelente en analisis de contexto largo, codificacion y conversacion.",
      ar: "مساعد الذكاء الاصطناعي من Anthropic يتفوق في تحليل السياق الطويل والبرمجة والمحادثة."
    },
    rating: 4.9, pricing: 'Freemium',
    pricingLocalized: { en: 'Free / $20/mo', fr: 'Gratuit / 20$/mois', es: 'Gratis / $20/mes', ar: 'مجاني / 20 دولار' },
    websiteUrl: 'https://claude.ai',
    views: 38000
  },
  {
    id: 'amazon-codewhisperer',
    name: 'Amazon CodeWhisperer',
    category: 'code',
    description: {
      en: "AWS AI coding companion that gives real-time code suggestions and security scans inside your IDE.",
      fr: "Compagnon de codage IA d'AWS qui donne des suggestions de code en temps reel dans votre IDE.",
      es: "Companero de codificacion IA de AWS que ofrece sugerencias de codigo en tiempo real en tu IDE.",
      ar: "مساعد برمجة بالذكاء الاصطناعي من AWS يقدم اقتراحات كود فورية وفحوصات أمنية داخل IDE."
    },
    rating: 4.3, pricing: 'Freemium',
    pricingLocalized: { en: 'Free / $19/mo', fr: 'Gratuit / 19$/mois', es: 'Gratis / $19/mes', ar: 'مجاني / 19 دولار' },
    websiteUrl: 'https://aws.amazon.com/codewhisperer',
    views: 16000
  },
  {
    id: 'pieces-ai',
    name: 'Pieces for Developers',
    category: 'code',
    description: {
      en: "AI-powered developer tool that saves, enriches, and reuses code snippets with full context awareness.",
      fr: "Outil IA pour developpeurs qui sauvegarde, enrichit et reutilise les extraits de code.",
      es: "Herramienta IA para desarrolladores que guarda, enriquece y reutiliza fragmentos de codigo.",
      ar: "أداة مطورين بالذكاء الاصطناعي تحفظ مقتطفات الكود وتثريها وتعيد استخدامها مع وعي كامل بالسياق."
    },
    rating: 4.3, pricing: 'Freemium',
    pricingLocalized: { en: 'Free / $10/mo', fr: 'Gratuit / 10$/mois', es: 'Gratis / $10/mes', ar: 'مجاني / 10 دولار' },
    websiteUrl: 'https://pieces.app',
    views: 8000
  },
  {
    id: 'sourcegraph-cody',
    name: 'Sourcegraph Cody',
    category: 'code',
    description: {
      en: "AI coding assistant with deep codebase understanding that can search, explain, and write code across files.",
      fr: "Assistant de codage IA avec comprehension approfondie du codebase pour rechercher et expliquer le code.",
      es: "Asistente de codificacion IA con comprension profunda del codebase para buscar y explicar codigo.",
      ar: "مساعد برمجة بالذكاء الاصطناعي يفهم قاعدة الكود بعمق ويبحث ويشرح ويكتب الكود عبر الملفات."
    },
    rating: 4.4, pricing: 'Freemium',
    pricingLocalized: { en: 'Free / $9/mo', fr: 'Gratuit / 9$/mois', es: 'Gratis / $9/mes', ar: 'مجاني / 9 دولار' },
    websiteUrl: 'https://sourcegraph.com/cody',
    views: 10000
  },
  {
    id: 'synthesia',
    name: 'Synthesia',
    category: 'video',
    description: {
      en: "AI video platform that creates professional videos with AI avatars from text — no camera needed.",
      fr: "Plateforme video IA qui cree des videos professionnelles avec avatars IA a partir de texte.",
      es: "Plataforma de video IA que crea videos profesionales con avatares IA a partir de texto.",
      ar: "منصة فيديو بالذكاء الاصطناعي تنشئ مقاطع احترافية مع أفاتارات ذكاء اصطناعي من النص."
    },
    rating: 4.6, pricing: 'Paid',
    pricingLocalized: { en: 'From $22/mo', fr: 'A partir de 22$/mois', es: 'Desde $22/mes', ar: 'تبدأ من 22 دولار' },
    websiteUrl: 'https://synthesia.io',
    views: 22000
  },
  {
    id: 'd-id',
    name: 'D-ID',
    category: 'video',
    description: {
      en: "AI video creation platform that animates photos and generates talking avatar videos from text.",
      fr: "Plateforme de creation video IA qui anime des photos et genere des videos d'avatars parlants.",
      es: "Plataforma de creacion de video IA que anima fotos y genera videos de avatares hablantes.",
      ar: "منصة إنشاء فيديو بالذكاء الاصطناعي تحرك الصور وتولد مقاطع أفاتار ناطقة من النص."
    },
    rating: 4.4, pricing: 'Freemium',
    pricingLocalized: { en: 'Free / $5.9/mo', fr: 'Gratuit / 5.9$/mois', es: 'Gratis / $5.9/mes', ar: 'مجاني / 5.9 دولار' },
    websiteUrl: 'https://d-id.com',
    views: 18000
  },
  {
    id: 'captions-ai',
    name: 'Captions AI',
    category: 'video',
    description: {
      en: "AI-powered video editing app that adds captions, edits silences, and enhances videos automatically.",
      fr: "Application de montage video IA qui ajoute des sous-titres et edite les silences automatiquement.",
      es: "Aplicacion de edicion de video IA que agrega subtitulos y edita silencios automaticamente.",
      ar: "تطبيق تحرير فيديو بالذكاء الاصطناعي يضيف تعليقاً توضيحياً ويحرر الصمت تلقائياً."
    },
    rating: 4.5, pricing: 'Freemium',
    pricingLocalized: { en: 'Free / $12/mo', fr: 'Gratuit / 12$/mois', es: 'Gratis / $12/mes', ar: 'مجاني / 12 دولار' },
    websiteUrl: 'https://captions.ai',
    views: 16000
  },
  {
    id: 'steve-ai',
    name: 'Steve AI',
    category: 'video',
    description: {
      en: "AI video creation tool that converts blog posts, podcasts, and scripts into animated or live-action videos.",
      fr: "Outil de creation video IA qui convertit articles de blog et scripts en videos animees.",
      es: "Herramienta de creacion de video IA que convierte articulos y scripts en videos animados.",
      ar: "أداة إنشاء فيديو بالذكاء الاصطناعي تحول مقالات المدونات والسكريبت إلى مقاطع فيديو متحركة."
    },
    rating: 4.2, pricing: 'Freemium',
    pricingLocalized: { en: 'Free / $20/mo', fr: 'Gratuit / 20$/mois', es: 'Gratis / $20/mes', ar: 'مجاني / 20 دولار' },
    websiteUrl: 'https://steve.ai',
    views: 11000
  },
  {
    id: 'fliki',
    name: 'Fliki',
    category: 'video',
    description: {
      en: "AI video and voice generation platform that turns text and ideas into engaging videos with realistic voices.",
      fr: "Plateforme de video et voix IA qui transforme le texte en videos engageantes avec des voix realistes.",
      es: "Plataforma de video y voz IA que convierte texto en videos atractivos con voces realistas.",
      ar: "منصة فيديو وصوت بالذكاء الاصطناعي تحول النص إلى مقاطع فيديو جذابة بأصوات واقعية."
    },
    rating: 4.4, pricing: 'Freemium',
    pricingLocalized: { en: 'Free / $28/mo', fr: 'Gratuit / 28$/mois', es: 'Gratis / $28/mes', ar: 'مجاني / 28 دولار' },
    websiteUrl: 'https://fliki.ai',
    views: 13000
  },
  {
    id: 'obsidian',
    name: 'Obsidian',
    category: 'productivity',
    description: {
      en: "Knowledge management app with AI plugins for building a connected second brain from your notes.",
      fr: "Application de gestion des connaissances avec plugins IA pour construire un second cerveau connecte.",
      es: "Aplicacion de gestion del conocimiento con plugins IA para construir un segundo cerebro conectado.",
      ar: "تطبيق إدارة المعرفة مع مكونات الذكاء الاصطناعي لبناء دماغ ثانٍ متصل من ملاحظاتك."
    },
    rating: 4.6, pricing: 'Freemium',
    pricingLocalized: { en: 'Free / $8/mo', fr: 'Gratuit / 8$/mois', es: 'Gratis / $8/mes', ar: 'مجاني / 8 دولار' },
    websiteUrl: 'https://obsidian.md',
    views: 18000
  },
  {
    id: 'todoist-ai',
    name: 'Todoist AI',
    category: 'productivity',
    description: {
      en: "Popular task manager enhanced with AI to auto-schedule, prioritize, and suggest task breakdowns.",
      fr: "Gestionnaire de taches populaire ameliore par IA pour planifier et prioriser automatiquement.",
      es: "Gestor de tareas popular mejorado con IA para programar y priorizar automaticamente.",
      ar: "مدير مهام شهير معزز بالذكاء الاصطناعي للجدولة والأولوية التلقائية واقتراح تقسيم المهام."
    },
    rating: 4.5, pricing: 'Freemium',
    pricingLocalized: { en: 'Free / $4/mo', fr: 'Gratuit / 4$/mois', es: 'Gratis / $4/mes', ar: 'مجاني / 4 دولار' },
    websiteUrl: 'https://todoist.com',
    views: 14000
  },
  {
    id: 'craft-docs',
    name: 'Craft Docs',
    category: 'productivity',
    description: {
      en: "AI-powered document editor for teams combining notes, docs, and tasks with a beautiful interface.",
      fr: "Editeur de documents IA pour equipes combinant notes, docs et taches avec une belle interface.",
      es: "Editor de documentos IA para equipos que combina notas, documentos y tareas con bella interfaz.",
      ar: "محرر مستندات بالذكاء الاصطناعي للفرق يجمع الملاحظات والمستندات والمهام بواجهة جميلة."
    },
    rating: 4.4, pricing: 'Freemium',
    pricingLocalized: { en: 'Free / $5/mo', fr: 'Gratuit / 5$/mois', es: 'Gratis / $5/mes', ar: 'مجاني / 5 دولار' },
    websiteUrl: 'https://craft.do',
    views: 11000
  },
  {
    id: 'elicit',
    name: 'Elicit',
    category: 'productivity',
    description: {
      en: "AI research assistant that searches and summarizes academic papers to accelerate literature reviews.",
      fr: "Assistant de recherche IA qui recherche et resume des articles academiques pour accelerer les revues.",
      es: "Asistente de investigacion IA que busca y resume articulos academicos para acelerar revisiones.",
      ar: "مساعد بحثي بالذكاء الاصطناعي يبحث ويلخص الأوراق الأكاديمية لتسريع مراجعات الأدبيات."
    },
    rating: 4.4, pricing: 'Freemium',
    pricingLocalized: { en: 'Free / $10/mo', fr: 'Gratuit / 10$/mois', es: 'Gratis / $10/mes', ar: 'مجاني / 10 دولار' },
    websiteUrl: 'https://elicit.com',
    views: 9000
  },
  {
    id: 'linear-ai',
    name: 'Linear',
    category: 'productivity',
    description: {
      en: "Modern project management tool for software teams with AI-powered issue tracking and workflow automation.",
      fr: "Outil de gestion de projet moderne pour equipes logicielles avec suivi des problemes IA.",
      es: "Herramienta moderna de gestion de proyectos para equipos de software con seguimiento IA.",
      ar: "أداة إدارة مشاريع حديثة لفرق البرمجيات مع تتبع المشكلات وأتمتة سير العمل بالذكاء الاصطناعي."
    },
    rating: 4.6, pricing: 'Freemium',
    pricingLocalized: { en: 'Free / $8/mo', fr: 'Gratuit / 8$/mois', es: 'Gratis / $8/mes', ar: 'مجاني / 8 دولار' },
    websiteUrl: 'https://linear.app',
    views: 16000
  },
  {
    id: 'reflect-notes',
    name: 'Reflect',
    category: 'productivity',
    description: {
      en: "AI note-taking app that syncs across devices and uses AI to surface connections between your ideas.",
      fr: "Application de prise de notes IA qui synchronise entre appareils et fait emerger les connexions entre idees.",
      es: "Aplicacion de notas IA que sincroniza entre dispositivos y hace emerger conexiones entre ideas.",
      ar: "تطبيق تدوين ملاحظات بالذكاء الاصطناعي يزامن بين الأجهزة ويكشف الروابط بين أفكارك."
    },
    rating: 4.3, pricing: 'Paid',
    pricingLocalized: { en: 'From $10/mo', fr: 'A partir de 10$/mois', es: 'Desde $10/mes', ar: 'تبدأ من 10 دولار' },
    websiteUrl: 'https://reflect.app',
    views: 8000
  },
  {
    id: 'speechify',
    name: 'Speechify',
    category: 'audio',
    description: {
      en: "AI text-to-speech app that reads documents, PDFs, and articles aloud with natural human voices at 4.5x speed.",
      fr: "Application IA de synthese vocale qui lit documents, PDFs et articles a voix haute a 4.5x la vitesse.",
      es: "Aplicacion IA de texto a voz que lee documentos y PDFs en voz alta a 4.5x la velocidad.",
      ar: "تطبيق ذكاء اصطناعي لتحويل النص إلى كلام يقرأ المستندات وملفات PDF بأصوات بشرية طبيعية."
    },
    rating: 4.5, pricing: 'Freemium',
    pricingLocalized: { en: 'Free / $11.58/mo', fr: 'Gratuit / 11.58$/mois', es: 'Gratis / $11.58/mes', ar: 'مجاني / 11.58 دولار' },
    websiteUrl: 'https://speechify.com',
    views: 16000
  },
  {
    id: 'play-ai',
    name: 'Play.ai',
    category: 'audio',
    description: {
      en: "AI voice cloning and text-to-speech platform with ultra-realistic voice generation for any use case.",
      fr: "Plateforme de clonage vocal IA et synthese vocale avec generation ultra-realiste pour tout usage.",
      es: "Plataforma de clonacion de voz IA y texto a voz con generacion ultra-realista para cualquier uso.",
      ar: "منصة استنساخ الصوت وتحويل النص إلى كلام بالذكاء الاصطناعي بتوليد صوتي فائق الواقعية."
    },
    rating: 4.4, pricing: 'Freemium',
    pricingLocalized: { en: 'Free / $39/mo', fr: 'Gratuit / 39$/mois', es: 'Gratis / $39/mes', ar: 'مجاني / 39 دولار' },
    websiteUrl: 'https://play.ai',
    views: 11000
  },
  {
    id: 'lalal-ai',
    name: 'LALAL.AI',
    category: 'audio',
    description: {
      en: "AI audio separation tool that splits music into stems — vocals, drums, bass, piano — with high accuracy.",
      fr: "Outil de separation audio IA qui divise la musique en pistes: voix, batterie, basse, piano.",
      es: "Herramienta de separacion de audio IA que divide musica en pistas con alta precision.",
      ar: "أداة فصل الصوت بالذكاء الاصطناعي تقسم الموسيقى إلى مسارات - صوت، طبول، باس - بدقة عالية."
    },
    rating: 4.5, pricing: 'Freemium',
    pricingLocalized: { en: 'Free / $15/mo', fr: 'Gratuit / 15$/mois', es: 'Gratis / $15/mes', ar: 'مجاني / 15 دولار' },
    websiteUrl: 'https://lalal.ai',
    views: 14000
  },
  {
    id: 'voicemod',
    name: 'Voicemod',
    category: 'audio',
    description: {
      en: "Real-time AI voice changer and soundboard app for streamers, gamers, and content creators.",
      fr: "Changeur de voix IA en temps reel et soundboard pour streamers, joueurs et createurs de contenu.",
      es: "Cambiador de voz IA en tiempo real y soundboard para streamers, jugadores y creadores de contenido.",
      ar: "تطبيق تغيير الصوت بالذكاء الاصطناعي في الوقت الفعلي للمذيعين والمراهنين ومنشئي المحتوى."
    },
    rating: 4.3, pricing: 'Freemium',
    pricingLocalized: { en: 'Free / $6/mo', fr: 'Gratuit / 6$/mois', es: 'Gratis / $6/mes', ar: 'مجاني / 6 دولار' },
    websiteUrl: 'https://voicemod.net',
    views: 12000
  },
  {
    id: 'tapfiliate',
    name: 'Tapfiliate',
    category: 'marketing',
    description: {
      en: "Cloud-based affiliate marketing software to create, track, and optimize your own affiliate program.",
      fr: "Logiciel de marketing affiliation cloud pour creer et optimiser votre programme d'affiliation.",
      es: "Software de marketing de afiliados basado en la nube para crear tu programa de afiliados.",
      ar: "برنامج تسويق بالعمولة سحابي لإنشاء وتتبع وتحسين برنامج الإحالة الخاص بك."
    },
    rating: 4.3, pricing: 'Paid',
    pricingLocalized: { en: 'From $89/mo', fr: 'A partir de 89$/mois', es: 'Desde $89/mes', ar: 'تبدأ من 89 دولار' },
    websiteUrl: 'https://tapfiliate.com',
    views: 7000
  },
  {
    id: 'frase',
    name: 'Frase.io',
    category: 'marketing',
    description: {
      en: "AI SEO content tool that researches, outlines, and writes optimized blog posts based on top-ranking results.",
      fr: "Outil SEO IA qui recherche, structure et redige des articles de blog optimises pour le classement.",
      es: "Herramienta SEO IA que investiga, esboza y escribe publicaciones de blog optimizadas.",
      ar: "أداة محتوى SEO بالذكاء الاصطناعي تبحث وتنظم وتكتب منشورات مدونة محسّنة."
    },
    rating: 4.4, pricing: 'Paid',
    pricingLocalized: { en: 'From $45/mo', fr: 'A partir de 45$/mois', es: 'Desde $45/mes', ar: 'تبدأ من 45 دولار' },
    websiteUrl: 'https://frase.io',
    views: 9500
  },
  {
    id: 'serpstat',
    name: 'Serpstat',
    category: 'marketing',
    description: {
      en: "All-in-one SEO platform combining keyword research, competitor analysis, site audit, and rank tracking.",
      fr: "Plateforme SEO tout-en-un combinant recherche de mots-cles, analyse concurrentielle et audit de site.",
      es: "Plataforma SEO todo en uno que combina investigacion de palabras clave y analisis de competidores.",
      ar: "منصة SEO متكاملة تجمع بحث الكلمات المفتاحية وتحليل المنافسين ومراجعة الموقع وتتبع الترتيب."
    },
    rating: 4.3, pricing: 'Freemium',
    pricingLocalized: { en: 'Free / $69/mo', fr: 'Gratuit / 69$/mois', es: 'Gratis / $69/mes', ar: 'مجاني / 69 دولار' },
    websiteUrl: 'https://serpstat.com',
    views: 8000
  },
  {
    id: 'mailmodo',
    name: 'Mailmodo',
    category: 'marketing',
    description: {
      en: "Interactive email marketing platform that enables AMP emails with forms, polls, and widgets inside emails.",
      fr: "Plateforme d'emailing interactif avec emails AMP incluant formulaires et sondages dans les emails.",
      es: "Plataforma de email marketing interactivo con emails AMP que incluyen formularios y encuestas.",
      ar: "منصة تسويق عبر البريد الإلكتروني التفاعلي مع رسائل AMP تتضمن نماذج واستطلاعات داخل الرسائل."
    },
    rating: 4.3, pricing: 'Freemium',
    pricingLocalized: { en: 'Free / $49/mo', fr: 'Gratuit / 49$/mois', es: 'Gratis / $49/mes', ar: 'مجاني / 49 دولار' },
    websiteUrl: 'https://mailmodo.com',
    views: 7000
  },
  // ── AI AGENTS (nouvelle catégorie) ───────────────────────────
  { id: 'langchain', name: 'LangChain', category: 'agents',
    description: { en: "Open-source framework for building LLM-powered applications and autonomous AI agents with memory and tools.", fr: "Framework open-source pour construire des applications LLM et des agents IA autonomes avec memoire.", es: "Framework open-source para construir aplicaciones LLM y agentes IA autonomos con memoria.", ar: "إطار مفتوح المصدر لبناء تطبيقات LLM ووكلاء ذكاء اصطناعي مستقلين بذاكرة وأدوات." },
    rating: 4.6, pricing: 'Free', pricingLocalized: { en: 'Free / Open Source', fr: 'Gratuit / Open Source', es: 'Gratis / Codigo abierto', ar: 'مجاني / مفتوح المصدر' }, websiteUrl: 'https://langchain.com', views: 32000 },
  { id: 'crewai', name: 'CrewAI', category: 'agents',
    description: { en: "Framework for orchestrating multi-agent AI systems where agents collaborate to complete complex tasks autonomously.", fr: "Framework pour orchestrer des systemes multi-agents IA collaborant pour accomplir des taches complexes.", es: "Framework para orquestar sistemas multi-agente IA que colaboran para completar tareas complejas.", ar: "إطار لتنسيق أنظمة متعددة الوكلاء حيث تتعاون لإنجاز المهام المعقدة باستقلالية." },
    rating: 4.5, pricing: 'Freemium', pricingLocalized: { en: 'Free / $29/mo', fr: 'Gratuit / 29$/mois', es: 'Gratis / $29/mes', ar: 'مجاني / 29 دولار' }, websiteUrl: 'https://crewai.com', views: 22000 },
  { id: 'autogpt', name: 'AutoGPT', category: 'agents',
    description: { en: "Autonomous AI agent that breaks down goals into tasks and executes them independently using the internet and tools.", fr: "Agent IA autonome qui decompose les objectifs en taches et les execute independamment.", es: "Agente IA autonomo que descompone objetivos en tareas y las ejecuta independientemente.", ar: "وكيل ذكاء اصطناعي مستقل يقسم الأهداف إلى مهام وينفذها بشكل مستقل باستخدام الإنترنت." },
    rating: 4.3, pricing: 'Free', pricingLocalized: { en: 'Free / Open Source', fr: 'Gratuit / Open Source', es: 'Gratis / Codigo abierto', ar: 'مجاني / مفتوح المصدر' }, websiteUrl: 'https://agpt.co', views: 28000 },
  { id: 'agentgpt', name: 'AgentGPT', category: 'agents',
    description: { en: "Browser-based autonomous AI agent platform that lets you configure and deploy AI agents directly in your browser.", fr: "Plateforme d'agents IA autonomes dans le navigateur pour configurer et deployer des agents directement.", es: "Plataforma de agentes IA autonomos basada en navegador para configurar y desplegar agentes.", ar: "منصة وكلاء ذكاء اصطناعي مستقلة في المتصفح تتيح تكوين ونشر وكلاء ذكاء اصطناعي مباشرة." },
    rating: 4.2, pricing: 'Freemium', pricingLocalized: { en: 'Free / $40/mo', fr: 'Gratuit / 40$/mois', es: 'Gratis / $40/mes', ar: 'مجاني / 40 دولار' }, websiteUrl: 'https://agentgpt.reworkd.ai', views: 18000 },
  { id: 'n8n-ai', name: 'n8n AI', category: 'agents',
    description: { en: "Fair-code workflow automation with AI agent nodes — build powerful automated pipelines connecting 400+ services.", fr: "Automatisation de flux de travail avec noeuds d'agents IA pour connecter 400+ services.", es: "Automatizacion de flujos de trabajo con nodos de agentes IA para conectar 400+ servicios.", ar: "أتمتة سير العمل مع عقد وكلاء الذكاء الاصطناعي لربط أكثر من 400 خدمة." },
    rating: 4.6, pricing: 'Freemium', pricingLocalized: { en: 'Free / $20/mo', fr: 'Gratuit / 20$/mois', es: 'Gratis / $20/mes', ar: 'مجاني / 20 دولار' }, websiteUrl: 'https://n8n.io', views: 25000 },
  { id: 'flowise', name: 'Flowise', category: 'agents',
    description: { en: "Open-source drag-and-drop UI to build LLM flows and AI agents visually without writing code.", fr: "Interface glisser-deposer open-source pour construire des flux LLM et agents IA visuellement.", es: "Interfaz drag-and-drop open-source para construir flujos LLM y agentes IA visualmente.", ar: "واجهة سحب وإفلات مفتوحة المصدر لبناء تدفقات LLM ووكلاء الذكاء الاصطناعي بصرياً." },
    rating: 4.5, pricing: 'Free', pricingLocalized: { en: 'Free / Open Source', fr: 'Gratuit / Open Source', es: 'Gratis / Codigo abierto', ar: 'مجاني / مفتوح المصدر' }, websiteUrl: 'https://flowiseai.com', views: 20000 },
  { id: 'dify', name: 'Dify', category: 'agents',
    description: { en: "LLM application development platform for building AI agents, chatbots, and workflows with a visual interface.", fr: "Plateforme de developpement d'applications LLM pour construire des agents IA et chatbots.", es: "Plataforma de desarrollo de aplicaciones LLM para construir agentes IA y chatbots.", ar: "منصة تطوير تطبيقات LLM لبناء وكلاء الذكاء الاصطناعي وروبوتات الدردشة بواجهة مرئية." },
    rating: 4.6, pricing: 'Freemium', pricingLocalized: { en: 'Free / $59/mo', fr: 'Gratuit / 59$/mois', es: 'Gratis / $59/mes', ar: 'مجاني / 59 دولار' }, websiteUrl: 'https://dify.ai', views: 19000 },
  { id: 'composio', name: 'Composio', category: 'agents',
    description: { en: "Toolset for AI agents with 250+ integrations — connects agents to GitHub, Gmail, Slack, and more.", fr: "Ensemble d'outils pour agents IA avec 250+ integrations - connecte les agents a GitHub, Gmail, Slack.", es: "Conjunto de herramientas para agentes IA con 250+ integraciones que los conecta a GitHub, Gmail.", ar: "مجموعة أدوات لوكلاء الذكاء الاصطناعي مع 250+ تكاملاً يربطها بـ GitHub وGmail وSlack." },
    rating: 4.4, pricing: 'Freemium', pricingLocalized: { en: 'Free / $49/mo', fr: 'Gratuit / 49$/mois', es: 'Gratis / $49/mes', ar: 'مجاني / 49 دولار' }, websiteUrl: 'https://composio.dev', views: 14000 },
  { id: 'relevance-ai', name: 'Relevance AI', category: 'agents',
    description: { en: "No-code platform to build and deploy custom AI agents and multi-agent teams for business automation.", fr: "Plateforme no-code pour construire et deployer des agents IA personnalises pour l'automatisation.", es: "Plataforma no-code para construir y desplegar agentes IA personalizados para automatizacion empresarial.", ar: "منصة بدون كود لبناء ونشر وكلاء ذكاء اصطناعي مخصصة لأتمتة الأعمال." },
    rating: 4.4, pricing: 'Freemium', pricingLocalized: { en: 'Free / $19/mo', fr: 'Gratuit / 19$/mois', es: 'Gratis / $19/mes', ar: 'مجاني / 19 دولار' }, websiteUrl: 'https://relevanceai.com', views: 13000 },
  { id: 'vertex-ai', name: 'Google Vertex AI', category: 'agents',
    description: { en: "Google Cloud platform for building, deploying, and scaling AI agents and ML models in production.", fr: "Plateforme Google Cloud pour construire, deployer et mettre a l'echelle des agents IA en production.", es: "Plataforma Google Cloud para construir, desplegar y escalar agentes IA y modelos ML en produccion.", ar: "منصة Google Cloud لبناء ونشر وتوسيع نطاق وكلاء الذكاء الاصطناعي ونماذج ML في الإنتاج." },
    rating: 4.5, pricing: 'Paid', pricingLocalized: { en: 'Pay as you go', fr: 'Paiement a l usage', es: 'Pago por uso', ar: 'الدفع حسب الاستخدام' }, websiteUrl: 'https://cloud.google.com/vertex-ai', views: 17000 },
  { id: 'aws-bedrock', name: 'AWS Bedrock', category: 'agents',
    description: { en: "Amazon's fully managed AI service to build generative AI applications with foundation models and AI agents.", fr: "Service IA manage d'Amazon pour construire des apps IA generative avec des modeles fondamentaux.", es: "Servicio IA gestionado de Amazon para construir apps de IA generativa con modelos base.", ar: "خدمة الذكاء الاصطناعي المُدارة من Amazon لبناء تطبيقات الذكاء الاصطناعي التوليدي." },
    rating: 4.5, pricing: 'Paid', pricingLocalized: { en: 'Pay as you go', fr: 'Paiement a l usage', es: 'Pago por uso', ar: 'الدفع حسب الاستخدام' }, websiteUrl: 'https://aws.amazon.com/bedrock', views: 15000 },
  { id: 'openai-assistants', name: 'OpenAI Assistants', category: 'agents',
    description: { en: "OpenAI API for building AI assistants with persistent threads, file search, code interpreter, and function calling.", fr: "API OpenAI pour construire des assistants IA avec threads persistants et appel de fonctions.", es: "API OpenAI para construir asistentes IA con hilos persistentes y llamada a funciones.", ar: "واجهة برمجة OpenAI لبناء مساعدات ذكاء اصطناعي مع خيوط مستمرة واستدعاء الوظائف." },
    rating: 4.6, pricing: 'Paid', pricingLocalized: { en: 'Pay as you go', fr: 'Paiement a l usage', es: 'Pago por uso', ar: 'الدفع حسب الاستخدام' }, websiteUrl: 'https://platform.openai.com/assistants', views: 21000 },

  // ── WRITING extra ─────────────────────────────────────────────
  { id: 'ai21-labs', name: 'AI21 Labs', category: 'writing',
    description: { en: "NLP company offering Jurassic language models and Wordtune — specialized in contextual AI writing assistance.", fr: "Entreprise NLP offrant des modeles Jurassic et Wordtune specialises dans l'assistance a la redaction.", es: "Empresa NLP que ofrece modelos Jurassic y Wordtune especializados en asistencia de escritura.", ar: "شركة معالجة اللغة تقدم نماذج Jurassic وWordtune المتخصصة في مساعدة الكتابة السياقية." },
    rating: 4.3, pricing: 'Freemium', pricingLocalized: { en: 'Free / $39/mo', fr: 'Gratuit / 39$/mois', es: 'Gratis / $39/mes', ar: 'مجاني / 39 دولار' }, websiteUrl: 'https://ai21.com', views: 11000 },
  { id: 'textblaze', name: 'Text Blaze', category: 'writing',
    description: { en: "Text expansion and templating tool with AI assistance for creating snippets and automating repetitive typing.", fr: "Outil d'expansion de texte avec assistance IA pour creer des extraits et automatiser la frappe.", es: "Herramienta de expansion de texto con asistencia IA para crear fragmentos y automatizar escritura.", ar: "أداة توسيع النص مع مساعدة الذكاء الاصطناعي لإنشاء مقتطفات وأتمتة الكتابة المتكررة." },
    rating: 4.5, pricing: 'Freemium', pricingLocalized: { en: 'Free / $2.99/mo', fr: 'Gratuit / 2.99$/mois', es: 'Gratis / $2.99/mes', ar: 'مجاني / 2.99 دولار' }, websiteUrl: 'https://blaze.today', views: 9000 },
  { id: 'lex-ai', name: 'Lex', category: 'writing',
    description: { en: "AI-native word processor with inline suggestions, auto-complete, and feedback built directly into writing flow.", fr: "Traitement de texte natif IA avec suggestions en ligne et completions automatiques integrees.", es: "Procesador de texto nativo IA con sugerencias en linea y autocompletado integrado.", ar: "معالج نصوص أصلي للذكاء الاصطناعي مع اقتراحات مضمنة وإكمال تلقائي مدمج في تدفق الكتابة." },
    rating: 4.2, pricing: 'Freemium', pricingLocalized: { en: 'Free / $18/mo', fr: 'Gratuit / 18$/mois', es: 'Gratis / $18/mes', ar: 'مجاني / 18 دولار' }, websiteUrl: 'https://lex.page', views: 8000 },

  // ── IMAGE extra ───────────────────────────────────────────────
  { id: 'adobe-express', name: 'Adobe Express AI', category: 'image',
    description: { en: "Adobe's all-in-one creative tool with Firefly AI for quick graphic design, social posts, and image editing.", fr: "Outil creatif tout-en-un d'Adobe avec Firefly IA pour le design graphique rapide et l'edition d'images.", es: "Herramienta creativa todo en uno de Adobe con Firefly IA para diseno grafico rapido.", ar: "أداة إبداعية شاملة من Adobe مع Firefly AI للتصميم الجرافيكي السريع وتحرير الصور." },
    rating: 4.4, pricing: 'Freemium', pricingLocalized: { en: 'Free / $9.99/mo', fr: 'Gratuit / 9.99$/mois', es: 'Gratis / $9.99/mes', ar: 'مجاني / 9.99 دولار' }, websiteUrl: 'https://express.adobe.com', views: 15000 },
  { id: 'looka', name: 'Looka', category: 'image',
    description: { en: "AI logo maker that generates professional brand identities including logos, business cards, and brand kits.", fr: "Createur de logo IA qui genere des identites de marque professionnelles incluant logos et cartes de visite.", es: "Creador de logos IA que genera identidades de marca profesionales incluyendo logos y tarjetas.", ar: "صانع شعارات بالذكاء الاصطناعي يولد هويات العلامات التجارية الاحترافية بما في ذلك الشعارات." },
    rating: 4.4, pricing: 'Paid', pricingLocalized: { en: 'From $20 one-time', fr: 'A partir de 20$ unique', es: 'Desde $20 unico', ar: 'تبدأ من 20 دولار مرة واحدة' }, websiteUrl: 'https://looka.com', views: 13000 },
  { id: 'stockimg-ai', name: 'Stockimg AI', category: 'image',
    description: { en: "AI image generation platform specialized in stock photos, book covers, posters, and UI/UX designs.", fr: "Plateforme de generation d'images IA specialisee dans les photos stock, couvertures de livres et UI.", es: "Plataforma de generacion de imagenes IA especializada en fotos stock, portadas y disenos UI/UX.", ar: "منصة توليد صور بالذكاء الاصطناعي متخصصة في صور المخزون وأغلفة الكتب وتصاميم UI/UX." },
    rating: 4.3, pricing: 'Freemium', pricingLocalized: { en: 'Free / $19/mo', fr: 'Gratuit / 19$/mois', es: 'Gratis / $19/mes', ar: 'مجاني / 19 دولار' }, websiteUrl: 'https://stockimg.ai', views: 10000 },

  // ── CODE extra ────────────────────────────────────────────────
  { id: 'deepseek', name: 'DeepSeek', category: 'code',
    description: { en: "Chinese open-source LLM with exceptional coding capabilities and competitive performance at low cost.", fr: "LLM open-source chinois avec des capacites de codage exceptionnelles et performances competitives.", es: "LLM open-source chino con capacidades de codificacion excepcionales y rendimiento competitivo.", ar: "نموذج لغوي كبير صيني مفتوح المصدر بقدرات برمجة استثنائية وأداء تنافسي بتكلفة منخفضة." },
    rating: 4.7, pricing: 'Freemium', pricingLocalized: { en: 'Free / API pricing', fr: 'Gratuit / Tarif API', es: 'Gratis / Precio API', ar: 'مجاني / تسعير API' }, websiteUrl: 'https://deepseek.com', views: 29000 },
  { id: 'qwen', name: 'Qwen (Alibaba)', category: 'code',
    description: { en: "Alibaba's open-source LLM series with strong coding, reasoning, and multilingual capabilities.", fr: "Serie de LLM open-source d'Alibaba avec de solides capacites de codage et de raisonnement.", es: "Serie de LLM open-source de Alibaba con solidas capacidades de codificacion y razonamiento.", ar: "سلسلة نماذج لغوية مفتوحة المصدر من Alibaba بقدرات برمجة واستدلال ومتعددة اللغات قوية." },
    rating: 4.5, pricing: 'Free', pricingLocalized: { en: 'Free / Open Source', fr: 'Gratuit / Open Source', es: 'Gratis / Codigo abierto', ar: 'مجاني / مفتوح المصدر' }, websiteUrl: 'https://qwenlm.github.io', views: 18000 },
  { id: 'aider', name: 'Aider', category: 'code',
    description: { en: "AI pair programming in your terminal — edit code across multiple files using GPT-4 or Claude directly in CLI.", fr: "Programmation en binome IA dans votre terminal - editez le code avec GPT-4 ou Claude en CLI.", es: "Programacion en pareja IA en tu terminal - edita codigo con GPT-4 o Claude directamente en CLI.", ar: "برمجة ثنائية بالذكاء الاصطناعي في طرفيتك - تحرير الكود عبر ملفات متعددة باستخدام GPT-4 أو Claude." },
    rating: 4.5, pricing: 'Free', pricingLocalized: { en: 'Free / Open Source', fr: 'Gratuit / Open Source', es: 'Gratis / Codigo abierto', ar: 'مجاني / مفتوح المصدر' }, websiteUrl: 'https://aider.chat', views: 16000 },
  { id: 'fine-dev', name: 'Fine', category: 'code',
    description: { en: "AI developer platform that plans, codes, and ships features autonomously by reading your GitHub issues.", fr: "Plateforme de developpement IA qui planifie, code et livre des fonctionnalites autonomement.", es: "Plataforma de desarrollo IA que planifica, codifica y lanza funcionalidades autonomamente.", ar: "منصة مطورين بالذكاء الاصطناعي تخطط وتبرمج وتسلم الميزات بشكل مستقل من مشاكل GitHub." },
    rating: 4.3, pricing: 'Freemium', pricingLocalized: { en: 'Free / $25/mo', fr: 'Gratuit / 25$/mois', es: 'Gratis / $25/mes', ar: 'مجاني / 25 دولار' }, websiteUrl: 'https://fine.dev', views: 10000 },

  // ── VIDEO extra ───────────────────────────────────────────────
  { id: 'luma-ai', name: 'Luma AI', category: 'video',
    description: { en: "AI video generation model by Luma that creates cinematic, physically accurate videos from text and image prompts.", fr: "Modele de generation video IA par Luma creant des videos cinematographiques precises physiquement.", es: "Modelo de generacion de video IA por Luma que crea videos cinematograficos precisos fisicamente.", ar: "نموذج توليد فيديو بالذكاء الاصطناعي من Luma يُنشئ مقاطع سينمائية دقيقة فيزيائياً." },
    rating: 4.7, pricing: 'Freemium', pricingLocalized: { en: 'Free / $29.99/mo', fr: 'Gratuit / 29.99$/mois', es: 'Gratis / $29.99/mes', ar: 'مجاني / 29.99 دولار' }, websiteUrl: 'https://lumalabs.ai', views: 24000 },
  { id: 'capcut-ai', name: 'CapCut AI', category: 'video',
    description: { en: "Popular video editor with powerful AI features including auto-captions, background removal, and AI avatars.", fr: "Editeur video populaire avec fonctionnalites IA puissantes incluant sous-titres auto et avatars IA.", es: "Editor de video popular con potentes funciones IA incluyendo subtitulos automaticos y avatares IA.", ar: "محرر فيديو شهير مع ميزات ذكاء اصطناعي قوية تشمل التسميات التوضيحية التلقائية وإزالة الخلفية." },
    rating: 4.6, pricing: 'Freemium', pricingLocalized: { en: 'Free / $7.99/mo', fr: 'Gratuit / 7.99$/mois', es: 'Gratis / $7.99/mes', ar: 'مجاني / 7.99 دولار' }, websiteUrl: 'https://capcut.com', views: 35000 },
  { id: 'vidiq-ai', name: 'vidIQ AI', category: 'video',
    description: { en: "YouTube growth tool with AI coaching, keyword research, and competitor analysis to grow your channel faster.", fr: "Outil de croissance YouTube avec coaching IA et recherche de mots-cles pour developper votre chaine.", es: "Herramienta de crecimiento YouTube con coaching IA e investigacion de palabras clave.", ar: "أداة نمو YouTube مع تدريب بالذكاء الاصطناعي وبحث الكلمات المفتاحية لتنمية قناتك." },
    rating: 4.4, pricing: 'Freemium', pricingLocalized: { en: 'Free / $16.58/mo', fr: 'Gratuit / 16.58$/mois', es: 'Gratis / $16.58/mes', ar: 'مجاني / 16.58 دولار' }, websiteUrl: 'https://vidiq.com', affiliateUrl: 'https://vidiq.com?via=aiverse', commission: '30% recurring', views: 18000 },

  // ── PRODUCTIVITY extra ────────────────────────────────────────
  { id: 'claude-projects', name: 'Claude Projects', category: 'productivity',
    description: { en: "Anthropic's collaborative workspace in Claude where you can organize conversations, share context, and build with teams.", fr: "Espace de travail collaboratif dans Claude pour organiser conversations et partager contexte avec equipes.", es: "Espacio de trabajo colaborativo en Claude para organizar conversaciones y compartir contexto.", ar: "مساحة عمل تعاونية في Claude لتنظيم المحادثات ومشاركة السياق والبناء مع الفرق." },
    rating: 4.7, pricing: 'Freemium', pricingLocalized: { en: 'Free / $20/mo', fr: 'Gratuit / 20$/mois', es: 'Gratis / $20/mes', ar: 'مجاني / 20 دولار' }, websiteUrl: 'https://claude.ai/projects', views: 19000 },
  { id: 'taskade', name: 'Taskade', category: 'productivity',
    description: { en: "AI-powered project management and team collaboration tool with built-in AI agents for task automation.", fr: "Outil de gestion de projet et collaboration d'equipe IA avec agents IA integres pour l'automatisation.", es: "Herramienta de gestion de proyectos IA con agentes IA integrados para automatizacion de tareas.", ar: "أداة إدارة مشاريع وتعاون فريق بالذكاء الاصطناعي مع وكلاء ذكاء اصطناعي مدمجين." },
    rating: 4.4, pricing: 'Freemium', pricingLocalized: { en: 'Free / $8/mo', fr: 'Gratuit / 8$/mois', es: 'Gratis / $8/mes', ar: 'مجاني / 8 دولار' }, websiteUrl: 'https://taskade.com', affiliateUrl: 'https://taskade.com?via=aiverse', commission: '30% recurring', views: 12000 },
  { id: 'hiver', name: 'Hiver', category: 'productivity',
    description: { en: "AI-powered email collaboration tool for teams to manage shared inboxes in Gmail with analytics and automation.", fr: "Outil de collaboration email IA pour equipes gerant des boites de reception partagees dans Gmail.", es: "Herramienta de colaboracion email IA para equipos que gestionan bandejas de entrada compartidas.", ar: "أداة تعاون بريد إلكتروني بالذكاء الاصطناعي للفرق لإدارة صناديق البريد المشتركة في Gmail." },
    rating: 4.4, pricing: 'Paid', pricingLocalized: { en: 'From $19/mo', fr: 'A partir de 19$/mois', es: 'Desde $19/mes', ar: 'تبدأ من 19 دولار' }, websiteUrl: 'https://hiverhq.com', views: 9000 },
  { id: 'coda-ai', name: 'Coda AI', category: 'productivity',
    description: { en: "All-in-one doc platform with native AI to summarize, analyze, and automate your documents and workflows.", fr: "Plateforme de documents tout-en-un avec IA native pour resumer, analyser et automatiser vos docs.", es: "Plataforma de documentos todo en uno con IA nativa para resumir, analizar y automatizar.", ar: "منصة مستندات شاملة مع ذكاء اصطناعي أصلي لتلخيص وتحليل وأتمتة المستندات وسير العمل." },
    rating: 4.5, pricing: 'Freemium', pricingLocalized: { en: 'Free / $10/mo', fr: 'Gratuit / 10$/mois', es: 'Gratis / $10/mes', ar: 'مجاني / 10 دولار' }, websiteUrl: 'https://coda.io', views: 14000 },
  { id: 'raycast-ai', name: 'Raycast AI', category: 'productivity',
    description: { en: "Mac launcher with built-in AI assistant to search, write, code, and control your Mac with keyboard shortcuts.", fr: "Lanceur Mac avec assistant IA integre pour rechercher, ecrire, coder et controler votre Mac.", es: "Lanzador Mac con asistente IA integrado para buscar, escribir, codificar y controlar tu Mac.", ar: "قاذف Mac مع مساعد ذكاء اصطناعي مدمج للبحث والكتابة والبرمجة والتحكم في جهازك." },
    rating: 4.7, pricing: 'Freemium', pricingLocalized: { en: 'Free / $8/mo', fr: 'Gratuit / 8$/mois', es: 'Gratis / $8/mes', ar: 'مجاني / 8 دولار' }, websiteUrl: 'https://raycast.com', views: 20000 },

  // ── AUDIO extra ───────────────────────────────────────────────
  { id: 'audo-ai', name: 'Audo AI', category: 'audio',
    description: { en: "AI audio enhancement tool that removes background noise and improves voice clarity in recordings automatically.", fr: "Outil d'amelioration audio IA qui supprime le bruit de fond et ameliore la clarte vocale.", es: "Herramienta de mejora de audio IA que elimina ruido de fondo y mejora la claridad de voz.", ar: "أداة تحسين الصوت بالذكاء الاصطناعي تزيل ضوضاء الخلفية وتحسن وضوح الصوت تلقائياً." },
    rating: 4.4, pricing: 'Freemium', pricingLocalized: { en: 'Free / $9/mo', fr: 'Gratuit / 9$/mois', es: 'Gratis / $9/mes', ar: 'مجاني / 9 دولار' }, websiteUrl: 'https://audo.ai', views: 11000 },
  { id: 'musicfy', name: 'Musicfy', category: 'audio',
    description: { en: "AI voice cloning and music generation tool — create songs in the voice of any artist or custom AI voice.", fr: "Outil de clonage vocal et generation musicale IA - creez des chansons avec la voix de tout artiste.", es: "Herramienta de clonacion de voz y generacion musical IA para crear canciones con cualquier voz.", ar: "أداة استنساخ الصوت وتوليد الموسيقى بالذكاء الاصطناعي لإنشاء أغاني بصوت أي فنان." },
    rating: 4.3, pricing: 'Freemium', pricingLocalized: { en: 'Free / $9.99/mo', fr: 'Gratuit / 9.99$/mois', es: 'Gratis / $9.99/mes', ar: 'مجاني / 9.99 دولار' }, websiteUrl: 'https://musicfy.lol', views: 13000 },
  { id: 'beatoven-ai', name: 'Beatoven AI', category: 'audio',
    description: { en: "AI music composer that creates unique royalty-free background music for videos and podcasts based on mood.", fr: "Compositeur musical IA creant de la musique de fond libre de droits pour videos et podcasts.", es: "Compositor musical IA que crea musica de fondo libre de derechos para videos y podcasts.", ar: "ملحن موسيقي بالذكاء الاصطناعي يُنشئ موسيقى خلفية خالية من حقوق الملكية للفيديو والبودكاست." },
    rating: 4.4, pricing: 'Freemium', pricingLocalized: { en: 'Free / $9/mo', fr: 'Gratuit / 9$/mois', es: 'Gratis / $9/mes', ar: 'مجاني / 9 دولار' }, websiteUrl: 'https://beatoven.ai', views: 9000 },

  // ── MARKETING extra ───────────────────────────────────────────
  { id: 'getresponse-ai', name: 'GetResponse AI', category: 'marketing',
    description: { en: "All-in-one email marketing platform with AI email writer, automation, landing pages, and webinars.", fr: "Plateforme email marketing tout-en-un avec redacteur IA, automatisation et pages d'atterrissage.", es: "Plataforma de email marketing todo en uno con redactor IA, automatizacion y paginas de aterrizaje.", ar: "منصة تسويق بريد إلكتروني شاملة مع كاتب بريد إلكتروني بالذكاء الاصطناعي وأتمتة وصفحات هبوط." },
    rating: 4.4, pricing: 'Freemium', pricingLocalized: { en: 'Free / $15.58/mo', fr: 'Gratuit / 15.58$/mois', es: 'Gratis / $15.58/mes', ar: 'مجاني / 15.58 دولار' }, websiteUrl: 'https://getresponse.com', affiliateUrl: 'https://getresponse.com?via=aiverse', commission: '33% recurring', views: 15000 },
  { id: 'systeme-io', name: 'Systeme.io', category: 'marketing',
    description: { en: "All-in-one online business platform with AI for funnels, email marketing, courses, and affiliate management.", fr: "Plateforme de business en ligne tout-en-un avec IA pour funnels, email marketing et cours.", es: "Plataforma de negocio en linea todo en uno con IA para embudos, email marketing y cursos.", ar: "منصة أعمال عبر الإنترنت شاملة مع ذكاء اصطناعي للمسارات والتسويق والدورات وإدارة الانتساب." },
    rating: 4.5, pricing: 'Freemium', pricingLocalized: { en: 'Free / $27/mo', fr: 'Gratuit / 27$/mois', es: 'Gratis / $27/mes', ar: 'مجاني / 27 دولار' }, websiteUrl: 'https://systeme.io', affiliateUrl: 'https://systeme.io?via=aiverse', commission: '40% recurring', views: 14000 },
  { id: 'writersonic-seo', name: 'Writesonic SEO', category: 'marketing',
    description: { en: "Writesonic's dedicated SEO module with AI keyword clustering, content briefs, and SERP optimization built-in.", fr: "Module SEO dedie de Writesonic avec clustering de mots-cles IA et optimisation SERP integrees.", es: "Modulo SEO dedicado de Writesonic con clustering de palabras clave IA y optimizacion SERP.", ar: "وحدة SEO المخصصة من Writesonic مع تجميع الكلمات المفتاحية بالذكاء الاصطناعي وتحسين SERP." },
    rating: 4.3, pricing: 'Paid', pricingLocalized: { en: 'From $49/mo', fr: 'A partir de 49$/mois', es: 'Desde $49/mes', ar: 'تبدأ من 49 دولار' }, websiteUrl: 'https://writesonic.com/seo-checker-and-optimizer', views: 8000 },
  { id: 'convohunter', name: 'ConvoHunter', category: 'marketing',
    description: { en: "AI tool that finds Reddit and forum conversations where your target audience is asking for your product.", fr: "Outil IA qui trouve les conversations Reddit et forums ou votre cible cherche votre produit.", es: "Herramienta IA que encuentra conversaciones en Reddit y foros donde tu audiencia busca tu producto.", ar: "أداة ذكاء اصطناعي تجد محادثات Reddit والمنتديات حيث يبحث جمهورك المستهدف عن منتجك." },
    rating: 4.4, pricing: 'Freemium', pricingLocalized: { en: 'Free / $29/mo', fr: 'Gratuit / 29$/mois', es: 'Gratis / $29/mes', ar: 'مجاني / 29 دولار' }, websiteUrl: 'https://convohunter.com', views: 9000 },

  // ── AGENTS extra ─────────────────────────────────────────────
  { id: 'superagent', name: 'Superagent', category: 'agents',
    description: { en: "Open-source platform to build, deploy and manage AI agents with memory, tools, and LLM integrations.", fr: "Plateforme open-source pour construire, deployer et gerer des agents IA avec memoire et outils.", es: "Plataforma open-source para construir, desplegar y gestionar agentes IA con memoria y herramientas.", ar: "منصة مفتوحة المصدر لبناء ونشر وإدارة وكلاء الذكاء الاصطناعي بذاكرة وأدوات." },
    rating: 4.3, pricing: 'Freemium', pricingLocalized: { en: 'Free / $29/mo', fr: 'Gratuit / 29$/mois', es: 'Gratis / $29/mes', ar: 'مجاني / 29 دولار' }, websiteUrl: 'https://superagent.sh', views: 11000 },
  { id: 'langflow', name: 'Langflow', category: 'agents',
    description: { en: "Visual framework for building multi-agent and RAG applications with drag-and-drop LLM pipeline editor.", fr: "Framework visuel pour construire des applications multi-agents avec editeur de pipeline LLM.", es: "Framework visual para construir aplicaciones multi-agente con editor de pipeline LLM.", ar: "إطار مرئي لبناء تطبيقات متعددة الوكلاء مع محرر مسار LLM بالسحب والإفلات." },
    rating: 4.4, pricing: 'Free', pricingLocalized: { en: 'Free / Open Source', fr: 'Gratuit / Open Source', es: 'Gratis / Codigo abierto', ar: 'مجاني / مفتوح المصدر' }, websiteUrl: 'https://langflow.org', views: 14000 },
  { id: 'autogen', name: 'AutoGen', category: 'agents',
    description: { en: "Microsoft's framework for building multi-agent conversational AI systems that solve complex tasks collaboratively.", fr: "Framework Microsoft pour des systemes IA multi-agents conversationnels resolvant des taches complexes.", es: "Framework de Microsoft para sistemas IA multi-agente conversacionales que resuelven tareas complejas.", ar: "إطار Microsoft لبناء أنظمة ذكاء اصطناعي متعددة الوكلاء تحل المهام المعقدة بشكل تعاوني." },
    rating: 4.5, pricing: 'Free', pricingLocalized: { en: 'Free / Open Source', fr: 'Gratuit / Open Source', es: 'Gratis / Codigo abierto', ar: 'مجاني / مفتوح المصدر' }, websiteUrl: 'https://microsoft.github.io/autogen', views: 18000 },
  { id: 'ai-sdk', name: 'Vercel AI SDK', category: 'agents',
    description: { en: "TypeScript toolkit for building AI-powered applications with streaming, tool use, and agent support.", fr: "Boite a outils TypeScript pour construire des applications IA avec streaming et support d'agents.", es: "Kit de herramientas TypeScript para construir aplicaciones IA con streaming y soporte de agentes.", ar: "مجموعة أدوات TypeScript لبناء تطبيقات مدعومة بالذكاء الاصطناعي مع البث واستخدام الأدوات." },
    rating: 4.6, pricing: 'Free', pricingLocalized: { en: 'Free / Open Source', fr: 'Gratuit / Open Source', es: 'Gratis / Codigo abierto', ar: 'مجاني / مفتوح المصدر' }, websiteUrl: 'https://sdk.vercel.ai', views: 16000 },
  { id: 'fixie-ai', name: 'Fixie AI', category: 'agents',
    description: { en: "Platform for building and deploying conversational AI agents with real-time web search and tool access.", fr: "Plateforme pour construire et deployer des agents IA conversationnels avec recherche web en temps reel.", es: "Plataforma para construir y desplegar agentes IA conversacionales con busqueda web en tiempo real.", ar: "منصة لبناء ونشر وكلاء ذكاء اصطناعي محادثة مع بحث الويب في الوقت الفعلي." },
    rating: 4.2, pricing: 'Freemium', pricingLocalized: { en: 'Free / $25/mo', fr: 'Gratuit / 25$/mois', es: 'Gratis / $25/mes', ar: 'مجاني / 25 دولار' }, websiteUrl: 'https://fixie.ai', views: 8000 },

  // ── WRITING extra ─────────────────────────────────────────────
  { id: 'scalenut', name: 'Scalenut', category: 'writing',
    description: { en: "AI-powered SEO content platform that plans, researches, writes, and optimizes articles for organic traffic.", fr: "Plateforme de contenu SEO IA qui planifie, recherche, redige et optimise les articles.", es: "Plataforma de contenido SEO IA que planifica, investiga, escribe y optimiza articulos.", ar: "منصة محتوى SEO بالذكاء الاصطناعي تخطط وتبحث وتكتب وتحسن المقالات للزيارات العضوية." },
    rating: 4.3, pricing: 'Paid', pricingLocalized: { en: 'From $39/mo', fr: 'A partir de 39$/mois', es: 'Desde $39/mes', ar: 'تبدأ من 39 دولار' }, websiteUrl: 'https://scalenut.com', views: 10000 },
  { id: 'ink-for-all', name: 'INK AI', category: 'writing',
    description: { en: "AI writing assistant with SEO optimization built-in — scores your content in real time for search ranking.", fr: "Assistant redaction IA avec optimisation SEO integree - note votre contenu en temps reel.", es: "Asistente de escritura IA con optimizacion SEO integrada que puntua tu contenido en tiempo real.", ar: "مساعد كتابة بالذكاء الاصطناعي مع تحسين SEO المدمج يسجل محتواك في الوقت الفعلي." },
    rating: 4.2, pricing: 'Freemium', pricingLocalized: { en: 'Free / $49/mo', fr: 'Gratuit / 49$/mois', es: 'Gratis / $49/mes', ar: 'مجاني / 49 دولار' }, websiteUrl: 'https://inkforall.com', views: 8500 },
  { id: 'peppertype', name: 'Peppertype AI', category: 'writing',
    description: { en: "AI content assistant that generates social media posts, ad copies, product descriptions, and blog ideas instantly.", fr: "Assistant contenu IA generant posts sociaux, copies publicitaires et descriptions de produits.", es: "Asistente de contenido IA que genera posts sociales, copias publicitarias y descripciones.", ar: "مساعد محتوى بالذكاء الاصطناعي يولد منشورات التواصل الاجتماعي والإعلانات وأوصاف المنتجات." },
    rating: 4.2, pricing: 'Paid', pricingLocalized: { en: 'From $35/mo', fr: 'A partir de 35$/mois', es: 'Desde $35/mes', ar: 'تبدأ من 35 دولار' }, websiteUrl: 'https://peppertype.ai', views: 7000 },

  // ── IMAGE extra ───────────────────────────────────────────────
  { id: 'getimg', name: 'GetIMG', category: 'image',
    description: { en: "Suite of AI image tools including text-to-image, image editing, AI canvas, and custom model training.", fr: "Suite d'outils IA incluant texte vers image, edition d'images et canvas IA.", es: "Suite de herramientas IA incluyendo texto a imagen, edicion de imagenes y canvas IA.", ar: "مجموعة أدوات صور ذكاء اصطناعي تشمل النص إلى صورة وتحرير الصور ولوحة الرسم." },
    rating: 4.4, pricing: 'Freemium', pricingLocalized: { en: 'Free / $12/mo', fr: 'Gratuit / 12$/mois', es: 'Gratis / $12/mes', ar: 'مجاني / 12 دولار' }, websiteUrl: 'https://getimg.ai', views: 13000 },
  { id: 'pixlr-ai', name: 'Pixlr AI', category: 'image',
    description: { en: "Online photo editor with AI-powered tools for background removal, retouching, and generative fill.", fr: "Editeur photo en ligne avec outils IA pour suppression de fond, retouche et remplissage generatif.", es: "Editor de fotos en linea con herramientas IA para eliminar fondo y relleno generativo.", ar: "محرر صور عبر الإنترنت مع أدوات ذكاء اصطناعي لإزالة الخلفية والتعبئة التوليدية." },
    rating: 4.3, pricing: 'Freemium', pricingLocalized: { en: 'Free / $7.99/mo', fr: 'Gratuit / 7.99$/mois', es: 'Gratis / $7.99/mes', ar: 'مجاني / 7.99 دولار' }, websiteUrl: 'https://pixlr.com', views: 14000 },
  { id: 'removal-ai', name: 'Removal.ai', category: 'image',
    description: { en: "AI background remover that automatically removes backgrounds from photos in seconds with high precision.", fr: "Suppresseur de fond IA qui retire automatiquement les fonds des photos en quelques secondes.", es: "Eliminador de fondo IA que elimina automaticamente fondos de fotos en segundos.", ar: "أداة إزالة خلفية بالذكاء الاصطناعي تزيل الخلفيات من الصور تلقائياً في ثوانٍ بدقة عالية." },
    rating: 4.4, pricing: 'Freemium', pricingLocalized: { en: 'Free / $9.90/mo', fr: 'Gratuit / 9.90$/mois', es: 'Gratis / $9.90/mes', ar: 'مجاني / 9.90 دولار' }, websiteUrl: 'https://removal.ai', views: 12000 },

  // ── CODE extra ────────────────────────────────────────────────
  { id: 'phind', name: 'Phind', category: 'code',
    description: { en: "AI search engine for developers that searches the web and Stack Overflow to answer coding questions.", fr: "Moteur de recherche IA pour developpeurs cherchant sur le web pour repondre aux questions de code.", es: "Motor de busqueda IA para desarrolladores que busca en la web para responder preguntas de codigo.", ar: "محرك بحث بالذكاء الاصطناعي للمطورين يبحث في الويب للإجابة على أسئلة البرمجة." },
    rating: 4.5, pricing: 'Freemium', pricingLocalized: { en: 'Free / $17/mo', fr: 'Gratuit / 17$/mois', es: 'Gratis / $17/mes', ar: 'مجاني / 17 دولار' }, websiteUrl: 'https://phind.com', views: 15000 },
  { id: 'coderabbit', name: 'CodeRabbit', category: 'code',
    description: { en: "AI code review tool that provides line-by-line review suggestions on pull requests with context awareness.", fr: "Outil de revue de code IA fournissant des suggestions ligne par ligne sur les pull requests.", es: "Herramienta de revision de codigo IA que proporciona sugerencias linea por linea en pull requests.", ar: "أداة مراجعة كود بالذكاء الاصطناعي تقدم اقتراحات سطراً بسطر على طلبات السحب." },
    rating: 4.5, pricing: 'Freemium', pricingLocalized: { en: 'Free / $15/mo', fr: 'Gratuit / 15$/mois', es: 'Gratis / $15/mes', ar: 'مجاني / 15 دولار' }, websiteUrl: 'https://coderabbit.ai', views: 12000 },
  { id: 'mutable-ai', name: 'Mutable AI', category: 'code',
    description: { en: "AI-accelerated software development platform for autocomplete, test generation, and documentation writing.", fr: "Plateforme de developpement logiciel acceleree par IA pour l'autocompletion et la generation de tests.", es: "Plataforma de desarrollo de software acelerada por IA para autocompletado y generacion de tests.", ar: "منصة تطوير برمجيات مسرّعة بالذكاء الاصطناعي للإكمال التلقائي وتوليد الاختبارات." },
    rating: 4.3, pricing: 'Freemium', pricingLocalized: { en: 'Free / $13/mo', fr: 'Gratuit / 13$/mois', es: 'Gratis / $13/mes', ar: 'مجاني / 13 دولار' }, websiteUrl: 'https://mutable.ai', views: 9000 },

  // ── VIDEO extra ───────────────────────────────────────────────
  { id: 'pictory-ai', name: 'Pictory AI', category: 'video',
    description: { en: "AI video creation platform that turns long-form content, scripts, and blog posts into short branded videos.", fr: "Plateforme de creation video IA transformant le contenu long en courtes videos brandees.", es: "Plataforma de creacion de video IA que convierte contenido extenso en videos cortos de marca.", ar: "منصة إنشاء فيديو بالذكاء الاصطناعي تحول المحتوى الطويل إلى مقاطع فيديو قصيرة بعلامة تجارية." },
    rating: 4.4, pricing: 'Paid', pricingLocalized: { en: 'From $23/mo', fr: 'A partir de 23$/mois', es: 'Desde $23/mes', ar: 'تبدأ من 23 دولار' }, websiteUrl: 'https://pictory.ai', affiliateUrl: 'https://pictory.ai?via=aiverse', commission: '30% recurring', views: 16000 },
  { id: 'opus-clip', name: 'Opus Clip', category: 'video',
    description: { en: "AI video repurposing tool that transforms long videos into viral short clips for TikTok, YouTube Shorts.", fr: "Outil de reutilisation video IA transformant les longs videos en clips courts viraux pour TikTok.", es: "Herramienta de reutilizacion de video IA que transforma videos largos en clips cortos virales.", ar: "أداة إعادة استخدام الفيديو بالذكاء الاصطناعي تحول الفيديوهات الطويلة إلى مقاطع قصيرة فيروسية." },
    rating: 4.6, pricing: 'Freemium', pricingLocalized: { en: 'Free / $15/mo', fr: 'Gratuit / 15$/mois', es: 'Gratis / $15/mes', ar: 'مجاني / 15 دولار' }, websiteUrl: 'https://opus.pro', views: 20000 },
  { id: 'wisecut', name: 'Wisecut', category: 'video',
    description: { en: "AI video editor that automatically cuts silences, adds subtitles, and creates background music for videos.", fr: "Editeur video IA qui coupe automatiquement les silences, ajoute des sous-titres et cree de la musique.", es: "Editor de video IA que corta automaticamente silencios, agrega subtitulos y crea musica de fondo.", ar: "محرر فيديو بالذكاء الاصطناعي يقطع الصمت تلقائياً ويضيف تعليقات ويُنشئ موسيقى خلفية." },
    rating: 4.3, pricing: 'Freemium', pricingLocalized: { en: 'Free / $10/mo', fr: 'Gratuit / 10$/mois', es: 'Gratis / $10/mes', ar: 'مجاني / 10 دولار' }, websiteUrl: 'https://wisecut.video', views: 11000 },

  // ── PRODUCTIVITY extra ────────────────────────────────────────
  { id: 'ai-notes', name: 'Notepd AI', category: 'productivity',
    description: { en: "AI-enhanced note-taking app that summarizes meetings, emails, and documents and links related ideas.", fr: "Application de notes amelioree par IA qui resume reunions, emails et documents.", es: "Aplicacion de notas mejorada con IA que resume reuniones, correos y documentos.", ar: "تطبيق تدوين ملاحظات معزز بالذكاء الاصطناعي يلخص الاجتماعات والبريد الإلكتروني والمستندات." },
    rating: 4.2, pricing: 'Freemium', pricingLocalized: { en: 'Free / $5/mo', fr: 'Gratuit / 5$/mois', es: 'Gratis / $5/mes', ar: 'مجاني / 5 دولار' }, websiteUrl: 'https://notepd.com', views: 7000 },
  { id: 'tana-ai', name: 'Tana', category: 'productivity',
    description: { en: "AI-powered outliner and knowledge management tool combining notes, tasks, and databases in one workspace.", fr: "Gestionnaire de connaissances IA combinant notes, taches et bases de donnees en un seul espace.", es: "Herramienta de gestion del conocimiento IA que combina notas, tareas y bases de datos.", ar: "أداة إدارة المعرفة بالذكاء الاصطناعي تجمع الملاحظات والمهام وقواعد البيانات في مساحة واحدة." },
    rating: 4.4, pricing: 'Freemium', pricingLocalized: { en: 'Free / $10/mo', fr: 'Gratuit / 10$/mois', es: 'Gratis / $10/mes', ar: 'مجاني / 10 دولار' }, websiteUrl: 'https://tana.inc', views: 10000 },
  { id: 'magical-ai', name: 'Magical', category: 'productivity',
    description: { en: "AI productivity tool that automates repetitive tasks like data entry, messaging, and CRM updates.", fr: "Outil de productivite IA automatisant les taches repetitives comme la saisie de donnees.", es: "Herramienta de productividad IA que automatiza tareas repetitivas como entrada de datos.", ar: "أداة إنتاجية بالذكاء الاصطناعي تؤتمت المهام المتكررة كإدخال البيانات والمراسلة." },
    rating: 4.4, pricing: 'Freemium', pricingLocalized: { en: 'Free / $10/mo', fr: 'Gratuit / 10$/mois', es: 'Gratis / $10/mes', ar: 'مجاني / 10 دولار' }, websiteUrl: 'https://magical.com', views: 12000 },

  // ── AUDIO extra ───────────────────────────────────────────────
  { id: 'soundraw', name: 'Soundraw', category: 'audio',
    description: { en: "AI music generator that creates royalty-free customizable background music for content creators.", fr: "Generateur de musique IA creant de la musique de fond libre de droits personnalisable.", es: "Generador de musica IA que crea musica de fondo personalizable libre de derechos.", ar: "مولد موسيقى بالذكاء الاصطناعي يُنشئ موسيقى خلفية خالية من حقوق الملكية قابلة للتخصيص." },
    rating: 4.5, pricing: 'Paid', pricingLocalized: { en: 'From $16.99/mo', fr: 'A partir de 16.99$/mois', es: 'Desde $16.99/mes', ar: 'تبدأ من 16.99 دولار' }, websiteUrl: 'https://soundraw.io', views: 13000 },
  { id: 'podcastle', name: 'Podcastle', category: 'audio',
    description: { en: "All-in-one podcast creation platform with AI audio enhancement, transcription, and remote recording.", fr: "Plateforme de creation de podcast tout-en-un avec amelioration audio IA et transcription.", es: "Plataforma de creacion de podcast todo en uno con mejora de audio IA y transcripcion.", ar: "منصة إنشاء بودكاست شاملة مع تحسين الصوت بالذكاء الاصطناعي والنسخ." },
    rating: 4.4, pricing: 'Freemium', pricingLocalized: { en: 'Free / $11.99/mo', fr: 'Gratuit / 11.99$/mois', es: 'Gratis / $11.99/mes', ar: 'مجاني / 11.99 دولار' }, websiteUrl: 'https://podcastle.ai', views: 10000 },

  // ── MARKETING extra ───────────────────────────────────────────
  { id: 'vidyard', name: 'Vidyard', category: 'marketing',
    description: { en: "Video platform for sales and marketing teams with AI scripts, personalized video, and analytics.", fr: "Plateforme video pour equipes commerciales avec scripts IA et video personnalisee.", es: "Plataforma de video para equipos de ventas con scripts IA y video personalizado.", ar: "منصة فيديو لفرق المبيعات والتسويق مع نصوص الذكاء الاصطناعي والفيديو الشخصي والتحليلات." },
    rating: 4.4, pricing: 'Freemium', pricingLocalized: { en: 'Free / $19/mo', fr: 'Gratuit / 19$/mois', es: 'Gratis / $19/mes', ar: 'مجاني / 19 دولار' }, websiteUrl: 'https://vidyard.com', views: 13000 },
  { id: 'ocoya', name: 'Ocoya', category: 'marketing',
    description: { en: "AI social media marketing tool that generates captions, hashtags, and schedules posts across all platforms.", fr: "Outil marketing social media IA generant legendes, hashtags et planifiant les posts.", es: "Herramienta de marketing en redes sociales IA que genera subtitulos, hashtags y programa publicaciones.", ar: "أداة تسويق وسائل التواصل الاجتماعي بالذكاء الاصطناعي تولد التعليقات والهاشتاغات وتجدول المنشورات." },
    rating: 4.3, pricing: 'Paid', pricingLocalized: { en: 'From $19/mo', fr: 'A partir de 19$/mois', es: 'Desde $19/mes', ar: 'تبدأ من 19 دولار' }, websiteUrl: 'https://ocoya.com', views: 9000 },

  // ── NEW TOOLS batch ───────────────────────────────────────────
  { id: 'recraft-ai', name: 'Recraft AI', category: 'image',
    description: { en: "Professional AI design tool for creating vector art, icons, illustrations, and brand-consistent imagery at scale.", fr: "Outil de design IA professionnel pour creer art vectoriel, icones et illustrations de marque.", es: "Herramienta de diseño IA profesional para crear arte vectorial, iconos e ilustraciones de marca.", ar: "أداة تصميم ذكاء اصطناعي احترافية لإنشاء الفن المتجه والأيقونات والرسوم التوضيحية." },
    rating: 4.7, pricing: 'Freemium', pricingLocalized: { en: 'Free / $12/mo', fr: 'Gratuit / 12$/mois', es: 'Gratis / $12/mes', ar: 'مجاني / 12 دولار' }, websiteUrl: 'https://recraft.ai', affiliateUrl: 'https://recraft.ai?via=aiverse', commission: '30% recurring', views: 19000 },
  { id: 'blackbox-ai', name: 'Blackbox AI', category: 'code',
    description: { en: "AI coding assistant with real-time code completion, web search, and chat integrated directly into your editor.", fr: "Assistant code IA avec completion en temps reel et recherche web integres dans votre editeur.", es: "Asistente de código IA con completado en tiempo real y búsqueda web integrados en tu editor.", ar: "مساعد برمجة بالذكاء الاصطناعي مع إكمال الكود في الوقت الفعلي والبحث في محررك." },
    rating: 4.4, pricing: 'Freemium', pricingLocalized: { en: 'Free / $9.99/mo', fr: 'Gratuit / 9.99$/mois', es: 'Gratis / $9.99/mes', ar: 'مجاني / 9.99 دولار' }, websiteUrl: 'https://blackbox.ai', affiliateUrl: 'https://blackbox.ai?via=aiverse', commission: '25% recurring', views: 20000 },
  { id: 'gumloop', name: 'Gumloop', category: 'agents',
    description: { en: "No-code AI automation platform for building complex multi-step workflows with web scraping, email, and LLM nodes.", fr: "Plateforme automatisation IA no-code pour workflows complexes avec scraping web et LLM.", es: "Plataforma de automatización IA sin código para flujos complejos con scraping web y LLM.", ar: "منصة أتمتة ذكاء اصطناعي بدون كود لبناء سير عمل معقدة مع استخراج الويب ونماذج LLM." },
    rating: 4.5, pricing: 'Freemium', pricingLocalized: { en: 'Free / $29/mo', fr: 'Gratuit / 29$/mois', es: 'Gratis / $29/mes', ar: 'مجاني / 29 دولار' }, websiteUrl: 'https://gumloop.com', affiliateUrl: 'https://gumloop.com?via=aiverse', commission: '30% recurring', views: 13000 },
  { id: 'grammarly-ai', name: 'Grammarly AI', category: 'writing',
    description: { en: "AI writing assistant trusted by 30M+ users for grammar, tone, clarity, and full-sentence rewrites across every app.", fr: "Assistant redaction IA utilisé par 30M+ utilisateurs pour grammaire, ton et clarte.", es: "Asistente de escritura IA de confianza para gramática, tono y claridad en todas las apps.", ar: "مساعد الكتابة بالذكاء الاصطناعي الموثوق به من قبل 30+ مليون مستخدم للقواعد والنبرة والوضوح." },
    rating: 4.7, pricing: 'Freemium', pricingLocalized: { en: 'Free / $12/mo', fr: 'Gratuit / 12$/mois', es: 'Gratis / $12/mes', ar: 'مجاني / 12 دولار' }, websiteUrl: 'https://grammarly.com', affiliateUrl: 'https://grammarly.com?utm_source=aiverse&utm_medium=affiliate', commission: '20% per sale', views: 55000 },
  { id: 'cohere', name: 'Cohere AI', category: 'code',
    description: { en: "Enterprise AI platform offering embeddings, text generation, and RAG APIs — built for production-grade NLP applications.", fr: "Plateforme IA enterprise offrant embeddings, generation de texte et APIs RAG.", es: "Plataforma IA empresarial con embeddings, generación de texto y APIs RAG para producción.", ar: "منصة ذكاء اصطناعي للمؤسسات تقدم التضمينات وتوليد النصوص وواجهات برمجة RAG." },
    rating: 4.4, pricing: 'Freemium', pricingLocalized: { en: 'Free / Pay-as-you-go', fr: 'Gratuit / Paiement a usage', es: 'Gratis / Pago por uso', ar: 'مجاني / الدفع حسب الاستخدام' }, websiteUrl: 'https://cohere.com', views: 18000 },
  { id: 'fireflies-ai', name: 'Fireflies.ai', category: 'productivity',
    description: { en: "AI meeting assistant that records, transcribes, and summarizes meetings with action items — works with Zoom, Meet, Teams.", fr: "Assistant reunion IA qui enregistre, transcrit et resume les reunions avec les actions.", es: "Asistente de reuniones IA que graba, transcribe y resume reuniones con elementos de acción.", ar: "مساعد اجتماعات بالذكاء الاصطناعي يسجل ويُنسخ ويُلخص الاجتماعات مع بنود العمل." },
    rating: 4.6, pricing: 'Freemium', pricingLocalized: { en: 'Free / $10/mo', fr: 'Gratuit / 10$/mois', es: 'Gratis / $10/mes', ar: 'مجاني / 10 دولار' }, websiteUrl: 'https://fireflies.ai', affiliateUrl: 'https://fireflies.ai?fpr=aiverse', commission: '20% recurring', views: 22000 },
  { id: 'loom-ai', name: 'Loom AI', category: 'productivity',
    description: { en: "Screen and video recording tool with AI that auto-generates titles, summaries, and chapters for every video.", fr: "Outil d'enregistrement ecran avec IA generant titres, resumes et chapitres automatiquement.", es: "Herramienta de grabación con IA que genera títulos, resúmenes y capítulos automáticamente.", ar: "أداة تسجيل الشاشة مع ذكاء اصطناعي يولد العناوين والملخصات والفصول تلقائياً." },
    rating: 4.5, pricing: 'Freemium', pricingLocalized: { en: 'Free / $12.50/mo', fr: 'Gratuit / 12.50$/mois', es: 'Gratis / $12.50/mes', ar: 'مجاني / 12.50 دولار' }, websiteUrl: 'https://loom.com', affiliateUrl: 'https://loom.com?via=aiverse', commission: '15% per sale', views: 28000 },
  { id: 'tome-ai', name: 'Tome', category: 'productivity',
    description: { en: "AI-native presentation tool that builds entire slide decks from a prompt — with layouts, images, and copy included.", fr: "Outil de presentation IA construisant des decks entiers a partir d'un prompt avec images.", es: "Herramienta de presentación IA que construye decks completos desde un prompt con imágenes.", ar: "أداة عروض تقديمية أصلية بالذكاء الاصطناعي تبني شرائح كاملة من موجه واحد مع الصور." },
    rating: 4.4, pricing: 'Freemium', pricingLocalized: { en: 'Free / $16/mo', fr: 'Gratuit / 16$/mois', es: 'Gratis / $16/mes', ar: 'مجاني / 16 دولار' }, websiteUrl: 'https://tome.app', affiliateUrl: 'https://tome.app?via=aiverse', commission: '20% recurring', views: 20000 },
  { id: 'poe-ai', name: 'Poe by Quora', category: 'productivity',
    description: { en: "AI aggregator by Quora giving access to GPT-4, Claude, Gemini, and custom bots in one single interface.", fr: "Agregateur IA de Quora donnant acces a GPT-4, Claude, Gemini et bots custom.", es: "Agregador IA de Quora que da acceso a GPT-4, Claude, Gemini y bots personalizados.", ar: "مجمع ذكاء اصطناعي من Quora يتيح الوصول إلى GPT-4 وClaude وGemini وبوتات مخصصة." },
    rating: 4.4, pricing: 'Freemium', pricingLocalized: { en: 'Free / $19.99/mo', fr: 'Gratuit / 19.99$/mois', es: 'Gratis / $19.99/mes', ar: 'مجاني / 19.99 دولار' }, websiteUrl: 'https://poe.com', views: 25000 },
  { id: 'remove-bg', name: 'Remove.bg', category: 'image',
    description: { en: "The original AI background remover — instantly cuts out backgrounds from portraits, products, and objects with one click.", fr: "Le suppresseur de fond IA original - supprime instantanement les fonds en un clic.", es: "El removedor de fondo IA original — elimina fondos de retratos y productos con un clic.", ar: "أداة إزالة الخلفية الأصلية بالذكاء الاصطناعي تزيل الخلفيات فوراً بنقرة واحدة." },
    rating: 4.6, pricing: 'Freemium', pricingLocalized: { en: 'Free / $9/mo', fr: 'Gratuit / 9$/mois', es: 'Gratis / $9/mes', ar: 'مجاني / 9 دولار' }, websiteUrl: 'https://remove.bg', affiliateUrl: 'https://remove.bg?via=aiverse', commission: '20% per sale', views: 40000 },
  { id: 'flair-ai', name: 'Flair AI', category: 'image',
    description: { en: "AI product photo studio that generates stunning branded product photos with backgrounds in seconds.", fr: "Studio photo produit IA generant des photos de produits brandees avec fonds en secondes.", es: "Estudio de fotos de producto IA que genera fotos de producto con fondos en segundos.", ar: "استوديو صور المنتجات بالذكاء الاصطناعي يولد صور منتجات بعلامة تجارية مع خلفيات في ثوانٍ." },
    rating: 4.5, pricing: 'Freemium', pricingLocalized: { en: 'Free / $10/mo', fr: 'Gratuit / 10$/mois', es: 'Gratis / $10/mes', ar: 'مجاني / 10 دولار' }, websiteUrl: 'https://flair.ai', affiliateUrl: 'https://flair.ai?via=aiverse', commission: '30% recurring', views: 16000 },
  { id: 'fliki-ai', name: 'Fliki', category: 'video',
    description: { en: "AI video maker that converts blog posts and scripts into videos with AI voiceovers in 75+ languages and 1,300+ voices.", fr: "Createur video IA convertissant articles et scripts en videos avec voix IA en 75+ langues.", es: "Creador de videos IA que convierte blogs y scripts en videos con voces IA en 75+ idiomas.", ar: "صانع فيديو بالذكاء الاصطناعي يحول المدونات والنصوص إلى فيديوهات بأصوات ذكاء اصطناعي." },
    rating: 4.4, pricing: 'Freemium', pricingLocalized: { en: 'Free / $21/mo', fr: 'Gratuit / 21$/mois', es: 'Gratis / $21/mes', ar: 'مجاني / 21 دولار' }, websiteUrl: 'https://fliki.ai', affiliateUrl: 'https://fliki.ai?via=aiverse', commission: '30% recurring', views: 18000 },
  { id: 'hedra-ai', name: 'Hedra', category: 'video',
    description: { en: "AI character video generator that animates a portrait photo with any audio to create realistic talking avatars.", fr: "Generateur de video IA animant un portrait avec de l'audio pour creer des avatars parlants.", es: "Generador de video IA que anima fotos de retrato con audio para crear avatares realistas.", ar: "مولد فيديو شخصيات بالذكاء الاصطناعي يحرك صورة بأي صوت لإنشاء أفاتارات متحدثة واقعية." },
    rating: 4.5, pricing: 'Freemium', pricingLocalized: { en: 'Free / $8/mo', fr: 'Gratuit / 8$/mois', es: 'Gratis / $8/mes', ar: 'مجاني / 8 دولار' }, websiteUrl: 'https://hedra.com', views: 15000 },
  { id: 'vapi-ai', name: 'Vapi', category: 'agents',
    description: { en: "Developer platform for building voice AI agents — create phone-call bots with custom voices, tools, and LLM backends.", fr: "Plateforme developpeur pour agents IA vocaux - bots d'appel avec voix custom et LLM.", es: "Plataforma de desarrollo para agentes IA de voz — bots de llamadas con voces personalizadas.", ar: "منصة المطورين لبناء وكلاء الذكاء الاصطناعي الصوتية — بوتات مكالمات بأصوات مخصصة ونماذج LLM." },
    rating: 4.6, pricing: 'Freemium', pricingLocalized: { en: 'Free / $0.05/min', fr: 'Gratuit / 0.05$/min', es: 'Gratis / $0.05/min', ar: 'مجاني / 0.05 دولار/دقيقة' }, websiteUrl: 'https://vapi.ai', affiliateUrl: 'https://vapi.ai?via=aiverse', commission: '20% recurring', views: 17000 },
  { id: 'langsmith', name: 'LangSmith', category: 'agents',
    description: { en: "LangChain's platform for debugging, testing, evaluating, and monitoring LLM applications in production.", fr: "Plateforme LangChain pour deboguer, tester et surveiller les applications LLM en production.", es: "Plataforma de LangChain para depurar, probar y monitorear aplicaciones LLM en producción.", ar: "منصة LangChain لتصحيح الأخطاء واختبار ومراقبة تطبيقات LLM في الإنتاج." },
    rating: 4.5, pricing: 'Freemium', pricingLocalized: { en: 'Free / $39/mo', fr: 'Gratuit / 39$/mois', es: 'Gratis / $39/mes', ar: 'مجاني / 39 دولار' }, websiteUrl: 'https://smith.langchain.com', views: 14000 },
  { id: 'durable-ai', name: 'Durable', category: 'marketing',
    description: { en: "AI website builder that generates a complete small-business website with copy, images, and CRM in under 30 seconds.", fr: "Createur de site IA generant un site complet avec textes, images et CRM en 30 secondes.", es: "Constructor de sitios IA que genera un sitio web completo con textos, imágenes y CRM en 30 segundos.", ar: "منشئ مواقع بالذكاء الاصطناعي يولد موقعاً كاملاً للأعمال مع النصوص والصور و CRM في 30 ثانية." },
    rating: 4.3, pricing: 'Paid', pricingLocalized: { en: 'From $12/mo', fr: 'A partir de 12$/mois', es: 'Desde $12/mes', ar: 'تبدأ من 12 دولار' }, websiteUrl: 'https://durable.co', affiliateUrl: 'https://durable.co?via=aiverse', commission: '30% recurring', views: 13000 },
  { id: 'framer-ai', name: 'Framer AI', category: 'marketing',
    description: { en: "AI-powered web design tool that generates and publishes complete websites from text prompts with animations.", fr: "Outil de design web IA generant et publiant des sites complets a partir de prompts texte.", es: "Herramienta de diseño web IA que genera y publica sitios completos desde prompts de texto.", ar: "أداة تصميم ويب بالذكاء الاصطناعي تولد وتنشر مواقع كاملة من نصوص مع الرسوم المتحركة." },
    rating: 4.6, pricing: 'Freemium', pricingLocalized: { en: 'Free / $15/mo', fr: 'Gratuit / 15$/mois', es: 'Gratis / $15/mes', ar: 'مجاني / 15 دولار' }, websiteUrl: 'https://framer.com', affiliateUrl: 'https://framer.com?via=aiverse', commission: '50% first year', views: 22000 },
  { id: 'helicone', name: 'Helicone', category: 'agents',
    description: { en: "Open-source LLM observability platform — log, monitor, and debug all your AI API calls with one line of code.", fr: "Plateforme d'observabilite LLM open-source pour logger et monitorer vos appels API IA.", es: "Plataforma de observabilidad LLM de código abierto para registrar y monitorear llamadas API IA.", ar: "منصة مراقبة LLM مفتوحة المصدر لتسجيل ومراقبة وتصحيح جميع استدعاءات API الذكاء الاصطناعي." },
    rating: 4.5, pricing: 'Freemium', pricingLocalized: { en: 'Free / $20/mo', fr: 'Gratuit / 20$/mois', es: 'Gratis / $20/mes', ar: 'مجاني / 20 دولار' }, websiteUrl: 'https://helicone.ai', views: 11000 },
  { id: 'wegic', name: 'Wegic', category: 'marketing',
    description: { en: "AI web designer and developer that builds and updates websites through natural conversation — no code required.", fr: "Designer et developpeur web IA construisant des sites via conversation naturelle sans code.", es: "Diseñador y desarrollador web IA que construye y actualiza sitios mediante conversación natural.", ar: "مصمم ومطور ويب بالذكاء الاصطناعي يبني ويحدث المواقع من خلال المحادثة الطبيعية بدون كود." },
    rating: 4.4, pricing: 'Freemium', pricingLocalized: { en: 'Free / $9.9/mo', fr: 'Gratuit / 9.9$/mois', es: 'Gratis / $9.9/mes', ar: 'مجاني / 9.9 دولار' }, websiteUrl: 'https://wegic.ai', affiliateUrl: 'https://wegic.ai?via=aiverse', commission: '20% recurring', views: 12000 },
  { id: 'typeframes', name: 'Typeframes', category: 'video',
    description: { en: "AI video creation tool that turns text into animated product demo and marketing videos in minutes.", fr: "Outil creation video IA transformant du texte en videos de demo et marketing animees.", es: "Herramienta de creación de video IA que convierte texto en videos animados de producto.", ar: "أداة إنشاء الفيديو بالذكاء الاصطناعي تحول النص إلى مقاطع فيديو تسويقية متحركة." },
    rating: 4.3, pricing: 'Freemium', pricingLocalized: { en: 'Free / $29/mo', fr: 'Gratuit / 29$/mois', es: 'Gratis / $29/mes', ar: 'مجاني / 29 دولار' }, websiteUrl: 'https://typeframes.com', affiliateUrl: 'https://typeframes.com?via=aiverse', commission: '30% recurring', views: 10000 },
  { id: 'locofy-ai', name: 'Locofy', category: 'code',
    description: { en: "AI tool that converts Figma and Adobe XD designs into production-ready React, Next.js, and HTML/CSS code.", fr: "Outil IA convertissant les designs Figma en code React, Next.js et HTML/CSS pret pour la production.", es: "Herramienta IA que convierte diseños Figma en código React, Next.js y HTML/CSS listo para producción.", ar: "أداة ذكاء اصطناعي تحول تصميمات Figma إلى كود React و Next.js و HTML/CSS جاهز للإنتاج." },
    rating: 4.4, pricing: 'Freemium', pricingLocalized: { en: 'Free / $29/mo', fr: 'Gratuit / 29$/mois', es: 'Gratis / $29/mes', ar: 'مجاني / 29 دولار' }, websiteUrl: 'https://locofy.ai', affiliateUrl: 'https://locofy.ai?via=aiverse', commission: '25% recurring', views: 14000 },
  { id: 'bland-ai', name: 'Bland AI', category: 'agents',
    description: { en: "AI phone calling platform that makes and receives human-sounding calls at scale — for sales, support, and scheduling.", fr: "Plateforme d'appels IA effectuant des appels telephoniques a grande echelle pour ventes et support.", es: "Plataforma de llamadas IA que realiza llamadas con voz humana a escala para ventas y soporte.", ar: "منصة مكالمات هاتفية بالذكاء الاصطناعي تجري وتستقبل مكالمات تبدو بشرية على نطاق واسع." },
    rating: 4.4, pricing: 'Freemium', pricingLocalized: { en: 'Free / $0.09/min', fr: 'Gratuit / 0.09$/min', es: 'Gratis / $0.09/min', ar: 'مجاني / 0.09 دولار/دقيقة' }, websiteUrl: 'https://bland.ai', affiliateUrl: 'https://bland.ai?via=aiverse', commission: '20% recurring', views: 13000 }

];
