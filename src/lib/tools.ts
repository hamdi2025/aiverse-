export interface AITool {
  id: string;
  name: string;
  category: 'writing' | 'image' | 'code' | 'video' | 'productivity' | 'audio' | 'marketing';
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
      fr: "Outil d'écoute sociale et de surveillance de marque alimenté par IA suivant les mentions sur le web.",
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
  }
];
