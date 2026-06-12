export type Locale = 'en' | 'fr' | 'es' | 'ar';

export interface FAQItem {
  question: Record<Locale, string>;
  answer: Record<Locale, string>;
}

// FAQ entries keyed by AITool.id — used on /tools/[id] pages for AEO/GEO
// (FAQPage JSON-LD + visible Q&A so Google and AI search engines can cite us)
export const TOOL_FAQS: Record<string, FAQItem[]> = {
  chatgpt: [
    {
      question: {
        en: 'Is ChatGPT free to use?',
        fr: 'ChatGPT est-il gratuit ?',
        es: '¿Es ChatGPT gratis?',
        ar: 'هل ChatGPT مجاني؟',
      },
      answer: {
        en: 'Yes, ChatGPT has a free tier with access to a capable model. A paid Plus/Pro plan unlocks faster responses, the most advanced models, and extra features like image generation and voice mode.',
        fr: 'Oui, ChatGPT propose une version gratuite avec accès à un modèle performant. L\'abonnement payant Plus/Pro débloque des réponses plus rapides, les modèles les plus avancés et des fonctionnalités supplémentaires comme la génération d\'images et le mode vocal.',
        es: 'Sí, ChatGPT tiene un plan gratuito con acceso a un modelo capaz. El plan de pago Plus/Pro desbloquea respuestas más rápidas, los modelos más avanzados y funciones adicionales como generación de imágenes y modo de voz.',
        ar: 'نعم، يوفر ChatGPT خطة مجانية بإمكانيات جيدة. تتيح الخطة المدفوعة Plus/Pro استجابات أسرع، والنماذج الأكثر تطوراً، وميزات إضافية مثل توليد الصور والوضع الصوتي.',
      },
    },
    {
      question: {
        en: 'What can ChatGPT be used for?',
        fr: 'À quoi sert ChatGPT ?',
        es: '¿Para qué sirve ChatGPT?',
        ar: 'لماذا يُستخدم ChatGPT؟',
      },
      answer: {
        en: 'ChatGPT can write and edit text, answer questions, explain concepts, brainstorm ideas, write and debug code, summarize documents, and generate images. It is used by students, writers, marketers, and developers.',
        fr: 'ChatGPT peut écrire et corriger des textes, répondre à des questions, expliquer des concepts, générer des idées, écrire et déboguer du code, résumer des documents et créer des images. Il est utilisé par des étudiants, rédacteurs, marketeurs et développeurs.',
        es: 'ChatGPT puede escribir y editar textos, responder preguntas, explicar conceptos, generar ideas, escribir y depurar código, resumir documentos y crear imágenes. Lo usan estudiantes, redactores, profesionales del marketing y desarrolladores.',
        ar: 'يمكن لـ ChatGPT كتابة وتحرير النصوص، والإجابة على الأسئلة، وشرح المفاهيم، وتوليد الأفكار، وكتابة وتصحيح الكود، وتلخيص المستندات، وإنشاء الصور. يستخدمه الطلاب والكتّاب والمسوقون والمطورون.',
      },
    },
    {
      question: {
        en: 'Is ChatGPT safe to use for work?',
        fr: 'ChatGPT est-il sûr pour un usage professionnel ?',
        es: '¿Es seguro usar ChatGPT en el trabajo?',
        ar: 'هل من الآمن استخدام ChatGPT في العمل؟',
      },
      answer: {
        en: 'ChatGPT is widely used at work, but always double-check important facts and avoid pasting confidential data unless your company has an enterprise agreement with OpenAI that covers data privacy.',
        fr: 'ChatGPT est largement utilisé au travail, mais vérifiez toujours les informations importantes et évitez de coller des données confidentielles, sauf si votre entreprise a un accord entreprise avec OpenAI couvrant la confidentialité des données.',
        es: 'ChatGPT se usa ampliamente en el trabajo, pero verifica siempre los datos importantes y evita pegar información confidencial a menos que tu empresa tenga un acuerdo empresarial con OpenAI que cubra la privacidad de datos.',
        ar: 'يُستخدم ChatGPT بشكل واسع في العمل، لكن تحقق دائماً من المعلومات المهمة وتجنب لصق بيانات سرية إلا إذا كانت شركتك لديها اتفاقية مؤسسات مع OpenAI تغطي خصوصية البيانات.',
      },
    },
  ],
  claude: [
    {
      question: {
        en: 'Is Claude free to use?',
        fr: 'Claude est-il gratuit ?',
        es: '¿Es Claude gratis?',
        ar: 'هل Claude مجاني؟',
      },
      answer: {
        en: 'Claude offers a free tier with daily usage limits. The Pro plan increases those limits and gives access to the most capable models for longer documents and more complex tasks.',
        fr: 'Claude propose une version gratuite avec des limites d\'utilisation quotidiennes. Le plan Pro augmente ces limites et donne accès aux modèles les plus performants pour des documents plus longs et des tâches plus complexes.',
        es: 'Claude ofrece un plan gratuito con límites de uso diarios. El plan Pro aumenta esos límites y da acceso a los modelos más capaces para documentos más largos y tareas más complejas.',
        ar: 'يوفر Claude خطة مجانية بحدود استخدام يومية. تزيد خطة Pro هذه الحدود وتمنح الوصول إلى أقوى النماذج للمستندات الطويلة والمهام المعقدة.',
      },
    },
    {
      question: {
        en: 'What makes Claude different from ChatGPT?',
        fr: 'Qu\'est-ce qui différencie Claude de ChatGPT ?',
        es: '¿Qué diferencia a Claude de ChatGPT?',
        ar: 'ما الذي يميز Claude عن ChatGPT؟',
      },
      answer: {
        en: 'Claude is known for long-form writing, careful reasoning, and handling very large documents in a single conversation. ChatGPT has a larger plugin ecosystem and built-in image generation. See our ChatGPT vs Claude comparison for details.',
        fr: 'Claude est reconnu pour la rédaction longue, le raisonnement minutieux et le traitement de très grands documents en une seule conversation. ChatGPT dispose d\'un écosystème de plugins plus large et d\'une génération d\'images intégrée. Voir notre comparatif ChatGPT vs Claude.',
        es: 'Claude es conocido por la escritura extensa, el razonamiento cuidadoso y el manejo de documentos muy largos en una sola conversación. ChatGPT tiene un ecosistema de plugins más amplio y generación de imágenes integrada. Consulta nuestra comparativa ChatGPT vs Claude.',
        ar: 'يُعرف Claude بالكتابة الطويلة والاستدلال الدقيق والتعامل مع مستندات ضخمة في محادثة واحدة. يتميز ChatGPT بنظام إضافات أكبر وتوليد صور مدمج. راجع مقارنتنا بين ChatGPT و Claude.',
      },
    },
    {
      question: {
        en: 'Can Claude write code?',
        fr: 'Claude peut-il écrire du code ?',
        es: '¿Puede Claude escribir código?',
        ar: 'هل يمكن لـ Claude كتابة الكود؟',
      },
      answer: {
        en: 'Yes. Claude is widely used for coding — writing functions, debugging, and explaining code. Claude Code extends this further into an agentic command-line tool that can edit and test entire projects.',
        fr: 'Oui. Claude est largement utilisé pour la programmation — écriture de fonctions, débogage et explication de code. Claude Code va plus loin avec un outil en ligne de commande agentique capable de modifier et tester des projets entiers.',
        es: 'Sí. Claude se usa mucho para programar — escribir funciones, depurar y explicar código. Claude Code va más allá con una herramienta de línea de comandos agéntica capaz de editar y probar proyectos completos.',
        ar: 'نعم. يُستخدم Claude بشكل واسع للبرمجة — كتابة الدوال، تصحيح الأخطاء، وشرح الكود. يذهب Claude Code أبعد من ذلك كأداة سطر أوامر وكيلة قادرة على تعديل واختبار مشاريع كاملة.',
      },
    },
  ],
  perplexity: [
    {
      question: {
        en: 'Is Perplexity free?',
        fr: 'Perplexity est-il gratuit ?',
        es: '¿Es Perplexity gratis?',
        ar: 'هل Perplexity مجاني؟',
      },
      answer: {
        en: 'Yes, Perplexity has a generous free tier. The Pro plan adds more daily searches, access to premium AI models, and file upload support.',
        fr: 'Oui, Perplexity propose une version gratuite généreuse. Le plan Pro ajoute plus de recherches quotidiennes, l\'accès à des modèles IA premium et le téléchargement de fichiers.',
        es: 'Sí, Perplexity tiene un plan gratuito generoso. El plan Pro añade más búsquedas diarias, acceso a modelos de IA premium y carga de archivos.',
        ar: 'نعم، يوفر Perplexity خطة مجانية سخية. تضيف خطة Pro عمليات بحث يومية أكثر، والوصول إلى نماذج ذكاء اصطناعي متقدمة، ودعم رفع الملفات.',
      },
    },
    {
      question: {
        en: 'How is Perplexity different from Google?',
        fr: 'En quoi Perplexity diffère-t-il de Google ?',
        es: '¿En qué se diferencia Perplexity de Google?',
        ar: 'ما الفرق بين Perplexity وGoogle؟',
      },
      answer: {
        en: 'Instead of returning a list of links, Perplexity reads multiple sources and gives you a direct written answer with citations, so you can verify the information at the source.',
        fr: 'Au lieu de renvoyer une liste de liens, Perplexity lit plusieurs sources et fournit une réponse rédigée directe avec des citations, permettant de vérifier l\'information à la source.',
        es: 'En lugar de devolver una lista de enlaces, Perplexity lee varias fuentes y te da una respuesta redactada directamente con citas, para que puedas verificar la información en la fuente.',
        ar: 'بدلاً من إعادة قائمة من الروابط، يقرأ Perplexity مصادر متعددة ويقدم لك إجابة مكتوبة مباشرة مع استشهادات، حتى تتمكن من التحقق من المعلومة من مصدرها.',
      },
    },
    {
      question: {
        en: 'Can I trust Perplexity\'s sources?',
        fr: 'Peut-on faire confiance aux sources de Perplexity ?',
        es: '¿Puedo confiar en las fuentes de Perplexity?',
        ar: 'هل يمكن الوثوق بمصادر Perplexity؟',
      },
      answer: {
        en: 'Perplexity links every claim to a source you can open and check yourself, which makes it well-suited for research — but as with any AI tool, it is good practice to verify important facts independently.',
        fr: 'Perplexity relie chaque affirmation à une source que vous pouvez ouvrir et vérifier vous-même, ce qui le rend adapté à la recherche — mais comme pour tout outil IA, il est conseillé de vérifier indépendamment les informations importantes.',
        es: 'Perplexity enlaza cada afirmación con una fuente que puedes abrir y comprobar tú mismo, lo que lo hace adecuado para investigación — pero como con cualquier herramienta de IA, conviene verificar de forma independiente los datos importantes.',
        ar: 'يربط Perplexity كل معلومة بمصدر يمكنك فتحه والتحقق منه بنفسك، مما يجعله مناسباً للبحث — لكن كما هو الحال مع أي أداة ذكاء اصطناعي، يُفضّل التحقق بشكل مستقل من المعلومات المهمة.',
      },
    },
  ],
  'grammarly-ai': [
    {
      question: {
        en: 'Is Grammarly free?',
        fr: 'Grammarly est-il gratuit ?',
        es: '¿Es Grammarly gratis?',
        ar: 'هل Grammarly مجاني؟',
      },
      answer: {
        en: 'Grammarly has a free plan covering basic grammar and spelling checks. Grammarly Premium adds tone, clarity, and fluency suggestions, plus plagiarism detection.',
        fr: 'Grammarly propose un plan gratuit couvrant la vérification de base de la grammaire et de l\'orthographe. Grammarly Premium ajoute des suggestions de ton, de clarté et de fluidité, ainsi que la détection de plagiat.',
        es: 'Grammarly tiene un plan gratuito que cubre la corrección básica de gramática y ortografía. Grammarly Premium añade sugerencias de tono, claridad y fluidez, además de detección de plagio.',
        ar: 'يوفر Grammarly خطة مجانية تغطي فحص القواعد والتهجئة الأساسية. تضيف نسخة Premium اقتراحات للنبرة والوضوح والسلاسة، بالإضافة إلى كشف الاستلال.',
      },
    },
    {
      question: {
        en: 'Does Grammarly work in Google Docs and Word?',
        fr: 'Grammarly fonctionne-t-il dans Google Docs et Word ?',
        es: '¿Funciona Grammarly en Google Docs y Word?',
        ar: 'هل يعمل Grammarly في Google Docs و Word؟',
      },
      answer: {
        en: 'Yes, Grammarly works as a browser extension and desktop app, giving real-time suggestions inside Google Docs, Microsoft Word, email clients, and most websites.',
        fr: 'Oui, Grammarly fonctionne comme une extension de navigateur et une application bureau, offrant des suggestions en temps réel dans Google Docs, Microsoft Word, les clients email et la plupart des sites web.',
        es: 'Sí, Grammarly funciona como extensión de navegador y aplicación de escritorio, dando sugerencias en tiempo real en Google Docs, Microsoft Word, clientes de correo y la mayoría de sitios web.',
        ar: 'نعم، يعمل Grammarly كإضافة متصفح وتطبيق سطح مكتب، ويقدم اقتراحات فورية داخل Google Docs و Microsoft Word وبرامج البريد الإلكتروني ومعظم المواقع.',
      },
    },
    {
      question: {
        en: 'Can Grammarly detect AI-generated text?',
        fr: 'Grammarly peut-il détecter un texte généré par IA ?',
        es: '¿Puede Grammarly detectar texto generado por IA?',
        ar: 'هل يمكن لـ Grammarly اكتشاف النص المُنشأ بالذكاء الاصطناعي؟',
      },
      answer: {
        en: 'Grammarly includes an AI-detection feature in some plans, but like all AI detectors it is not 100% accurate and should be used as a guide rather than definitive proof.',
        fr: 'Grammarly inclut une fonction de détection d\'IA dans certains plans, mais comme tous les détecteurs d\'IA, elle n\'est pas fiable à 100 % et doit être utilisée comme indication plutôt que comme preuve définitive.',
        es: 'Grammarly incluye una función de detección de IA en algunos planes, pero como todos los detectores de IA, no es 100% precisa y debe usarse como guía y no como prueba definitiva.',
        ar: 'يتضمن Grammarly ميزة كشف الذكاء الاصطناعي في بعض الخطط، لكنها كغيرها من أدوات الكشف غير دقيقة بنسبة 100% ويجب اعتبارها إرشاداً لا دليلاً قاطعاً.',
      },
    },
  ],
  quillbot: [
    {
      question: {
        en: 'Is QuillBot free?',
        fr: 'QuillBot est-il gratuit ?',
        es: '¿Es QuillBot gratis?',
        ar: 'هل QuillBot مجاني؟',
      },
      answer: {
        en: 'QuillBot offers a free plan with limited paraphrasing modes and word counts. The Premium plan unlocks all paraphrasing modes, unlimited words, and a full grammar and plagiarism checker.',
        fr: 'QuillBot propose un plan gratuit avec un nombre limité de modes de paraphrase et de mots. Le plan Premium débloque tous les modes de paraphrase, des mots illimités et un correcteur grammatical et anti-plagiat complet.',
        es: 'QuillBot ofrece un plan gratuito con modos de paráfrasis y número de palabras limitados. El plan Premium desbloquea todos los modos de paráfrasis, palabras ilimitadas y un corrector gramatical y de plagio completo.',
        ar: 'يوفر QuillBot خطة مجانية بأوضاع إعادة صياغة وعدد كلمات محدود. تفتح خطة Premium جميع أوضاع إعادة الصياغة وعدداً غير محدود من الكلمات وفاحص قواعد واستلال كامل.',
      },
    },
    {
      question: {
        en: 'What is QuillBot best used for?',
        fr: 'À quoi QuillBot sert-il le mieux ?',
        es: '¿Para qué se usa mejor QuillBot?',
        ar: 'لماذا يُستخدم QuillBot بشكل أفضل؟',
      },
      answer: {
        en: 'QuillBot is best for rephrasing sentences in your own words, summarizing long texts, and generating citations — making it especially popular with students working on research papers.',
        fr: 'QuillBot est idéal pour reformuler des phrases avec ses propres mots, résumer de longs textes et générer des citations — ce qui le rend particulièrement populaire chez les étudiants travaillant sur des travaux de recherche.',
        es: 'QuillBot es ideal para reformular frases con tus propias palabras, resumir textos largos y generar citas — lo que lo hace especialmente popular entre estudiantes que trabajan en trabajos de investigación.',
        ar: 'يُعد QuillBot مثالياً لإعادة صياغة الجمل بأسلوبك الخاص، وتلخيص النصوص الطويلة، وتوليد الاستشهادات — مما يجعله شائعاً بشكل خاص بين الطلاب الذين يعملون على أوراق بحثية.',
      },
    },
    {
      question: {
        en: 'Does QuillBot have a citation generator?',
        fr: 'QuillBot dispose-t-il d\'un générateur de citations ?',
        es: '¿Tiene QuillBot un generador de citas?',
        ar: 'هل يحتوي QuillBot على مولد استشهادات؟',
      },
      answer: {
        en: 'Yes, QuillBot includes a citation generator that supports APA, MLA, Chicago, and other formats, useful alongside its summarizer and paraphraser for academic writing.',
        fr: 'Oui, QuillBot inclut un générateur de citations qui prend en charge les formats APA, MLA, Chicago et d\'autres, utile avec son résumé et son paraphraseur pour la rédaction académique.',
        es: 'Sí, QuillBot incluye un generador de citas que admite los formatos APA, MLA, Chicago y otros, útil junto a su resumidor y parafraseador para la escritura académica.',
        ar: 'نعم، يحتوي QuillBot على مولد استشهادات يدعم صيغ APA و MLA و Chicago وغيرها، وهو مفيد مع أداتي التلخيص وإعادة الصياغة في الكتابة الأكاديمية.',
      },
    },
  ],
  'notion-ai': [
    {
      question: {
        en: 'Do I need a Notion account to use Notion AI?',
        fr: 'Faut-il un compte Notion pour utiliser Notion AI ?',
        es: '¿Necesito una cuenta de Notion para usar Notion AI?',
        ar: 'هل أحتاج إلى حساب Notion لاستخدام Notion AI؟',
      },
      answer: {
        en: 'Yes, Notion AI is an add-on inside the Notion workspace app, so you need a Notion account first, then enable the AI add-on for an extra monthly fee.',
        fr: 'Oui, Notion AI est un module complémentaire dans l\'application Notion, vous avez donc besoin d\'un compte Notion, puis d\'activer le module IA pour un coût mensuel supplémentaire.',
        es: 'Sí, Notion AI es un complemento dentro de la app de espacios de trabajo Notion, así que necesitas primero una cuenta de Notion y luego activar el complemento de IA por una tarifa mensual adicional.',
        ar: 'نعم، يعد Notion AI إضافة داخل تطبيق مساحة عمل Notion، لذا تحتاج إلى حساب Notion أولاً، ثم تفعيل إضافة الذكاء الاصطناعي برسوم شهرية إضافية.',
      },
    },
    {
      question: {
        en: 'What can Notion AI do?',
        fr: 'Que peut faire Notion AI ?',
        es: '¿Qué puede hacer Notion AI?',
        ar: 'ما الذي يمكن أن يفعله Notion AI؟',
      },
      answer: {
        en: 'Notion AI can summarize pages, write and edit text directly inside your notes, generate to-do lists from meeting notes, translate content, and answer questions about your workspace.',
        fr: 'Notion AI peut résumer des pages, écrire et modifier du texte directement dans vos notes, générer des listes de tâches à partir de notes de réunion, traduire du contenu et répondre à des questions sur votre espace de travail.',
        es: 'Notion AI puede resumir páginas, escribir y editar texto directamente en tus notas, generar listas de tareas a partir de notas de reuniones, traducir contenido y responder preguntas sobre tu espacio de trabajo.',
        ar: 'يمكن لـ Notion AI تلخيص الصفحات، وكتابة وتحرير النص مباشرة داخل ملاحظاتك، وإنشاء قوائم مهام من ملاحظات الاجتماعات، وترجمة المحتوى، والإجابة على أسئلة حول مساحة عملك.',
      },
    },
    {
      question: {
        en: 'Is Notion AI included in the free plan?',
        fr: 'Notion AI est-il inclus dans le plan gratuit ?',
        es: '¿Está Notion AI incluido en el plan gratuito?',
        ar: 'هل Notion AI مشمول في الخطة المجانية؟',
      },
      answer: {
        en: 'Notion\'s free plan gives you a small number of free AI responses to try it out, but regular use requires the paid Notion AI add-on on top of any Notion plan.',
        fr: 'Le plan gratuit de Notion offre un petit nombre de réponses IA gratuites pour l\'essayer, mais un usage régulier nécessite le module payant Notion AI en plus de tout plan Notion.',
        es: 'El plan gratuito de Notion ofrece un pequeño número de respuestas de IA gratuitas para probarlo, pero el uso habitual requiere el complemento de pago Notion AI además de cualquier plan de Notion.',
        ar: 'تمنحك خطة Notion المجانية عدداً صغيراً من ردود الذكاء الاصطناعي المجانية للتجربة، لكن الاستخدام المنتظم يتطلب إضافة Notion AI المدفوعة بالإضافة إلى أي خطة Notion.',
      },
    },
  ],
  'chatpdf-ai': [
    {
      question: {
        en: 'Is ChatPDF free?',
        fr: 'ChatPDF est-il gratuit ?',
        es: '¿Es ChatPDF gratis?',
        ar: 'هل ChatPDF مجاني؟',
      },
      answer: {
        en: 'ChatPDF offers a free plan with a daily limit on the number of PDFs and questions. The paid plan increases file size limits, page counts, and the number of questions per day.',
        fr: 'ChatPDF propose un plan gratuit avec une limite quotidienne sur le nombre de PDF et de questions. Le plan payant augmente les limites de taille de fichier, de nombre de pages et de questions par jour.',
        es: 'ChatPDF ofrece un plan gratuito con un límite diario en el número de PDFs y preguntas. El plan de pago aumenta los límites de tamaño de archivo, número de páginas y preguntas por día.',
        ar: 'يوفر ChatPDF خطة مجانية بحد يومي لعدد ملفات PDF والأسئلة. تزيد الخطة المدفوعة حدود حجم الملف وعدد الصفحات وعدد الأسئلة يومياً.',
      },
    },
    {
      question: {
        en: 'How does ChatPDF work?',
        fr: 'Comment fonctionne ChatPDF ?',
        es: '¿Cómo funciona ChatPDF?',
        ar: 'كيف يعمل ChatPDF؟',
      },
      answer: {
        en: 'You upload a PDF, and ChatPDF reads it and lets you ask questions in plain language. It answers based on the document\'s content and points you to the relevant page.',
        fr: 'Vous téléchargez un PDF, et ChatPDF le lit et vous permet de poser des questions en langage simple. Il répond en se basant sur le contenu du document et vous indique la page concernée.',
        es: 'Subes un PDF, y ChatPDF lo lee y te permite hacer preguntas en lenguaje natural. Responde según el contenido del documento y te indica la página relevante.',
        ar: 'تقوم برفع ملف PDF، ويقرأه ChatPDF ويتيح لك طرح أسئلة بلغة طبيعية. يجيب بناءً على محتوى المستند ويشير إلى الصفحة ذات الصلة.',
      },
    },
    {
      question: {
        en: 'Is my data private with ChatPDF?',
        fr: 'Mes données sont-elles privées avec ChatPDF ?',
        es: '¿Mis datos son privados con ChatPDF?',
        ar: 'هل بياناتي خاصة مع ChatPDF؟',
      },
      answer: {
        en: 'ChatPDF states it does not use uploaded documents to train its models, but for highly sensitive documents always check the latest privacy policy before uploading.',
        fr: 'ChatPDF indique ne pas utiliser les documents téléchargés pour entraîner ses modèles, mais pour des documents très sensibles, vérifiez toujours la politique de confidentialité la plus récente avant de les téléverser.',
        es: 'ChatPDF afirma que no usa los documentos subidos para entrenar sus modelos, pero para documentos muy sensibles revisa siempre la política de privacidad más reciente antes de subirlos.',
        ar: 'يذكر ChatPDF أنه لا يستخدم المستندات المرفوعة لتدريب نماذجه، ولكن بالنسبة للمستندات الحساسة جداً، تحقق دائماً من سياسة الخصوصية الأخيرة قبل الرفع.',
      },
    },
  ],
  'github-copilot': [
    {
      question: {
        en: 'Is GitHub Copilot free?',
        fr: 'GitHub Copilot est-il gratuit ?',
        es: '¿Es GitHub Copilot gratis?',
        ar: 'هل GitHub Copilot مجاني؟',
      },
      answer: {
        en: 'GitHub Copilot has a free tier with limited monthly completions and chat requests. Verified students and maintainers of popular open-source projects can get it free; paid plans remove the limits.',
        fr: 'GitHub Copilot propose un palier gratuit avec un nombre limité de complétions et de requêtes chat par mois. Les étudiants vérifiés et les mainteneurs de projets open-source populaires peuvent l\'obtenir gratuitement ; les plans payants suppriment ces limites.',
        es: 'GitHub Copilot tiene un nivel gratuito con un número limitado de completados y solicitudes de chat al mes. Los estudiantes verificados y mantenedores de proyectos open-source populares pueden obtenerlo gratis; los planes de pago eliminan los límites.',
        ar: 'يوفر GitHub Copilot مستوى مجانياً بعدد محدود من الإكمالات وطلبات الدردشة شهرياً. يمكن للطلاب الموثقين ومسؤولي مشاريع المصادر المفتوحة الشائعة الحصول عليه مجاناً؛ تزيل الخطط المدفوعة هذه الحدود.',
      },
    },
    {
      question: {
        en: 'Which editors support GitHub Copilot?',
        fr: 'Quels éditeurs prennent en charge GitHub Copilot ?',
        es: '¿Qué editores admiten GitHub Copilot?',
        ar: 'ما هي المحررات التي تدعم GitHub Copilot؟',
      },
      answer: {
        en: 'GitHub Copilot works in VS Code, Visual Studio, JetBrains IDEs (IntelliJ, PyCharm, etc.), Neovim, and directly on GitHub.com for pull requests and chat.',
        fr: 'GitHub Copilot fonctionne dans VS Code, Visual Studio, les IDE JetBrains (IntelliJ, PyCharm, etc.), Neovim, et directement sur GitHub.com pour les pull requests et le chat.',
        es: 'GitHub Copilot funciona en VS Code, Visual Studio, los IDE de JetBrains (IntelliJ, PyCharm, etc.), Neovim, y directamente en GitHub.com para pull requests y chat.',
        ar: 'يعمل GitHub Copilot في VS Code و Visual Studio وبيئات JetBrains (IntelliJ، PyCharm، إلخ) و Neovim، وكذلك مباشرة على GitHub.com لطلبات السحب والدردشة.',
      },
    },
    {
      question: {
        en: 'Can Copilot write entire files?',
        fr: 'Copilot peut-il écrire des fichiers entiers ?',
        es: '¿Puede Copilot escribir archivos completos?',
        ar: 'هل يمكن لـ Copilot كتابة ملفات كاملة؟',
      },
      answer: {
        en: 'Yes — beyond line-by-line suggestions, Copilot\'s chat and "workspace" features can generate new files, implement features across multiple files, and explain or fix existing code.',
        fr: 'Oui — en plus des suggestions ligne par ligne, le chat et les fonctionnalités "workspace" de Copilot peuvent générer de nouveaux fichiers, implémenter des fonctionnalités sur plusieurs fichiers, et expliquer ou corriger du code existant.',
        es: 'Sí — más allá de las sugerencias línea por línea, el chat y las funciones "workspace" de Copilot pueden generar nuevos archivos, implementar funciones en varios archivos y explicar o corregir código existente.',
        ar: 'نعم — بالإضافة إلى الاقتراحات سطراً بسطر، يمكن لميزات الدردشة و"workspace" في Copilot إنشاء ملفات جديدة، وتنفيذ ميزات عبر ملفات متعددة، وشرح أو تصحيح الكود الموجود.',
      },
    },
  ],
  cursor: [
    {
      question: {
        en: 'Is Cursor free?',
        fr: 'Cursor est-il gratuit ?',
        es: '¿Es Cursor gratis?',
        ar: 'هل Cursor مجاني؟',
      },
      answer: {
        en: 'Cursor has a free plan with limited AI completions and chat usage per month. The Pro plan offers significantly higher usage limits and access to more advanced models.',
        fr: 'Cursor propose un plan gratuit avec un nombre limité de complétions IA et d\'utilisation du chat par mois. Le plan Pro offre des limites d\'utilisation bien plus élevées et accès à des modèles plus avancés.',
        es: 'Cursor tiene un plan gratuito con completados de IA y uso de chat limitados al mes. El plan Pro ofrece límites de uso mucho más altos y acceso a modelos más avanzados.',
        ar: 'يوفر Cursor خطة مجانية بإكمالات ذكاء اصطناعي واستخدام دردشة محدود شهرياً. تقدم خطة Pro حدود استخدام أعلى بكثير والوصول إلى نماذج أكثر تطوراً.',
      },
    },
    {
      question: {
        en: 'Can I use Cursor with my existing VS Code extensions?',
        fr: 'Puis-je utiliser Cursor avec mes extensions VS Code existantes ?',
        es: '¿Puedo usar Cursor con mis extensiones de VS Code existentes?',
        ar: 'هل يمكنني استخدام Cursor مع إضافات VS Code الحالية؟',
      },
      answer: {
        en: 'Yes, Cursor is a fork of VS Code and supports most VS Code extensions, themes, and keybindings, so you can switch over without losing your setup.',
        fr: 'Oui, Cursor est un fork de VS Code et prend en charge la plupart des extensions, thèmes et raccourcis clavier de VS Code, vous pouvez donc basculer sans perdre votre configuration.',
        es: 'Sí, Cursor es un fork de VS Code y admite la mayoría de extensiones, temas y combinaciones de teclas de VS Code, por lo que puedes cambiar sin perder tu configuración.',
        ar: 'نعم، Cursor هو نسخة مشتقة من VS Code ويدعم معظم إضافات وثيمات واختصارات لوحة مفاتيح VS Code، فيمكنك الانتقال إليه دون فقدان إعداداتك.',
      },
    },
    {
      question: {
        en: 'What is Cursor\'s Composer mode?',
        fr: 'Qu\'est-ce que le mode Composer de Cursor ?',
        es: '¿Qué es el modo Composer de Cursor?',
        ar: 'ما هو وضع Composer في Cursor؟',
      },
      answer: {
        en: 'Composer lets you describe a feature or change in natural language, and Cursor plans and edits the necessary files across your project to implement it, showing you a diff to review before applying.',
        fr: 'Composer vous permet de décrire une fonctionnalité ou un changement en langage naturel, et Cursor planifie et modifie les fichiers nécessaires dans votre projet pour l\'implémenter, en affichant un diff à valider avant application.',
        es: 'Composer te permite describir una función o cambio en lenguaje natural, y Cursor planifica y edita los archivos necesarios de tu proyecto para implementarlo, mostrándote un diff para revisar antes de aplicarlo.',
        ar: 'يتيح لك Composer وصف ميزة أو تغيير بلغة طبيعية، ويخطط Cursor ويعدّل الملفات اللازمة في مشروعك لتنفيذه، ويعرض لك الفروقات للمراجعة قبل التطبيق.',
      },
    },
  ],
  'claude-code': [
    {
      question: {
        en: 'What is Claude Code?',
        fr: 'Qu\'est-ce que Claude Code ?',
        es: '¿Qué es Claude Code?',
        ar: 'ما هو Claude Code؟',
      },
      answer: {
        en: 'Claude Code is a command-line tool that lets Claude work directly in your codebase — reading files, writing code, running tests, and executing terminal commands to complete coding tasks autonomously.',
        fr: 'Claude Code est un outil en ligne de commande qui permet à Claude de travailler directement dans votre base de code — lire des fichiers, écrire du code, exécuter des tests et lancer des commandes terminal pour accomplir des tâches de codage de manière autonome.',
        es: 'Claude Code es una herramienta de línea de comandos que permite a Claude trabajar directamente en tu base de código — leyendo archivos, escribiendo código, ejecutando pruebas y comandos de terminal para completar tareas de programación de forma autónoma.',
        ar: 'Claude Code هو أداة سطر أوامر تتيح لـ Claude العمل مباشرة في قاعدة كودك — قراءة الملفات، كتابة الكود، تشغيل الاختبارات، وتنفيذ أوامر الطرفية لإتمام مهام البرمجة بشكل مستقل.',
      },
    },
    {
      question: {
        en: 'Does Claude Code require a subscription?',
        fr: 'Claude Code nécessite-t-il un abonnement ?',
        es: '¿Claude Code requiere suscripción?',
        ar: 'هل يتطلب Claude Code اشتراكاً؟',
      },
      answer: {
        en: 'Claude Code is used through your Claude account (Pro/Max plans) or billed via API usage, so cost depends on which plan or API tier you connect it to.',
        fr: 'Claude Code s\'utilise via votre compte Claude (plans Pro/Max) ou facturé selon l\'usage de l\'API, le coût dépend donc du plan ou du niveau d\'API auquel vous le connectez.',
        es: 'Claude Code se usa a través de tu cuenta Claude (planes Pro/Max) o se factura según el uso de la API, por lo que el costo depende del plan o nivel de API al que lo conectes.',
        ar: 'يُستخدم Claude Code من خلال حساب Claude (خطط Pro/Max) أو يُدفع حسب استخدام واجهة برمجة التطبيقات، لذا تعتمد التكلفة على الخطة أو مستوى الـ API الذي توصله به.',
      },
    },
    {
      question: {
        en: 'Can Claude Code run terminal commands?',
        fr: 'Claude Code peut-il exécuter des commandes terminal ?',
        es: '¿Puede Claude Code ejecutar comandos de terminal?',
        ar: 'هل يمكن لـ Claude Code تنفيذ أوامر الطرفية؟',
      },
      answer: {
        en: 'Yes, with your permission Claude Code can run shell commands — installing dependencies, running test suites, and using git — as part of completing a task.',
        fr: 'Oui, avec votre autorisation, Claude Code peut exécuter des commandes shell — installer des dépendances, lancer des suites de tests et utiliser git — pour accomplir une tâche.',
        es: 'Sí, con tu permiso, Claude Code puede ejecutar comandos de shell — instalar dependencias, ejecutar pruebas y usar git — como parte de completar una tarea.',
        ar: 'نعم، بإذن منك يمكن لـ Claude Code تنفيذ أوامر الطرفية — تثبيت التبعيات، تشغيل مجموعات الاختبار، واستخدام git — كجزء من إتمام مهمة ما.',
      },
    },
  ],
  'blackbox-ai': [
    {
      question: {
        en: 'Is Blackbox AI free?',
        fr: 'Blackbox AI est-il gratuit ?',
        es: '¿Es Blackbox AI gratis?',
        ar: 'هل Blackbox AI مجاني؟',
      },
      answer: {
        en: 'Yes, Blackbox AI has a free tier that covers code autocomplete, chat, and code search. A paid plan adds higher usage limits and access to more advanced models.',
        fr: 'Oui, Blackbox AI propose un palier gratuit couvrant l\'autocomplétion de code, le chat et la recherche de code. Un plan payant ajoute des limites d\'utilisation plus élevées et l\'accès à des modèles plus avancés.',
        es: 'Sí, Blackbox AI tiene un nivel gratuito que cubre autocompletado de código, chat y búsqueda de código. Un plan de pago añade límites de uso más altos y acceso a modelos más avanzados.',
        ar: 'نعم، يوفر Blackbox AI مستوى مجانياً يغطي الإكمال التلقائي للكود والدردشة والبحث في الكود. تضيف الخطة المدفوعة حدود استخدام أعلى والوصول إلى نماذج أكثر تطوراً.',
      },
    },
    {
      question: {
        en: 'What can Blackbox AI do?',
        fr: 'Que peut faire Blackbox AI ?',
        es: '¿Qué puede hacer Blackbox AI?',
        ar: 'ما الذي يمكن أن يفعله Blackbox AI؟',
      },
      answer: {
        en: 'Blackbox AI can autocomplete code, explain snippets, find code from videos and screenshots, and answer programming questions in a chat interface.',
        fr: 'Blackbox AI peut compléter automatiquement du code, expliquer des extraits, retrouver du code à partir de vidéos et de captures d\'écran, et répondre à des questions de programmation via une interface de chat.',
        es: 'Blackbox AI puede autocompletar código, explicar fragmentos, encontrar código a partir de videos y capturas de pantalla, y responder preguntas de programación en una interfaz de chat.',
        ar: 'يمكن لـ Blackbox AI إكمال الكود تلقائياً، وشرح المقتطفات، والعثور على الكود من الفيديوهات ولقطات الشاشة، والإجابة على أسئلة البرمجة عبر واجهة دردشة.',
      },
    },
    {
      question: {
        en: 'Does Blackbox AI work in the browser?',
        fr: 'Blackbox AI fonctionne-t-il dans le navigateur ?',
        es: '¿Funciona Blackbox AI en el navegador?',
        ar: 'هل يعمل Blackbox AI في المتصفح؟',
      },
      answer: {
        en: 'Yes, Blackbox AI is available as a web app and as extensions for VS Code and major browsers, so you can use it without installing a separate editor.',
        fr: 'Oui, Blackbox AI est disponible en tant qu\'application web et en tant qu\'extensions pour VS Code et les principaux navigateurs, vous pouvez donc l\'utiliser sans installer un éditeur séparé.',
        es: 'Sí, Blackbox AI está disponible como app web y como extensiones para VS Code y los principales navegadores, por lo que puedes usarlo sin instalar un editor aparte.',
        ar: 'نعم، يتوفر Blackbox AI كتطبيق ويب وكإضافات لـ VS Code والمتصفحات الرئيسية، فيمكنك استخدامه دون تثبيت محرر منفصل.',
      },
    },
  ],
  autogpt: [
    {
      question: {
        en: 'Is AutoGPT free?',
        fr: 'AutoGPT est-il gratuit ?',
        es: '¿Es AutoGPT gratis?',
        ar: 'هل AutoGPT مجاني؟',
      },
      answer: {
        en: 'AutoGPT itself is free and open-source, but it calls AI models (like GPT-4) through an API, so you pay for the underlying API usage based on your own account.',
        fr: 'AutoGPT lui-même est gratuit et open-source, mais il appelle des modèles IA (comme GPT-4) via une API, donc vous payez l\'utilisation de l\'API sous-jacente selon votre propre compte.',
        es: 'AutoGPT en sí es gratuito y de código abierto, pero llama a modelos de IA (como GPT-4) a través de una API, por lo que pagas el uso de esa API según tu propia cuenta.',
        ar: 'AutoGPT نفسه مجاني ومفتوح المصدر، لكنه يستدعي نماذج ذكاء اصطناعي (مثل GPT-4) عبر واجهة برمجة تطبيقات، فتدفع تكلفة استخدام تلك الواجهة حسب حسابك الخاص.',
      },
    },
    {
      question: {
        en: 'Do I need to code to use AutoGPT?',
        fr: 'Faut-il savoir coder pour utiliser AutoGPT ?',
        es: '¿Necesito saber programar para usar AutoGPT?',
        ar: 'هل أحتاج إلى البرمجة لاستخدام AutoGPT؟',
      },
      answer: {
        en: 'Basic setup involves running it from the command line and adding an API key, so some comfort with the terminal helps. No-code alternatives like AgentGPT offer a similar experience through a web interface.',
        fr: 'La configuration de base implique de l\'exécuter depuis la ligne de commande et d\'ajouter une clé API, donc une certaine aisance avec le terminal est utile. Des alternatives sans code comme AgentGPT offrent une expérience similaire via une interface web.',
        es: 'La configuración básica implica ejecutarlo desde la línea de comandos y añadir una clave API, así que cierta familiaridad con la terminal ayuda. Alternativas sin código como AgentGPT ofrecen una experiencia similar mediante una interfaz web.',
        ar: 'يتضمن الإعداد الأساسي تشغيله من سطر الأوامر وإضافة مفتاح API، فبعض الإلمام بالطرفية يساعد. تقدم بدائل بلا كود مثل AgentGPT تجربة مشابهة عبر واجهة ويب.',
      },
    },
    {
      question: {
        en: 'What can AutoGPT actually do?',
        fr: 'Que peut réellement faire AutoGPT ?',
        es: '¿Qué puede hacer realmente AutoGPT?',
        ar: 'ما الذي يمكن لـ AutoGPT فعله حقاً؟',
      },
      answer: {
        en: 'Given a goal, AutoGPT can break it into sub-tasks, search the web, write and save files, and chain these actions together with minimal human input — useful for research and content drafting tasks.',
        fr: 'Avec un objectif donné, AutoGPT peut le décomposer en sous-tâches, effectuer des recherches web, écrire et sauvegarder des fichiers, et enchaîner ces actions avec peu d\'intervention humaine — utile pour la recherche et la rédaction de contenu.',
        es: 'Dado un objetivo, AutoGPT puede dividirlo en subtareas, buscar en la web, escribir y guardar archivos, y encadenar estas acciones con mínima intervención humana — útil para investigación y redacción de contenido.',
        ar: 'عند تحديد هدف، يمكن لـ AutoGPT تقسيمه إلى مهام فرعية، والبحث على الويب، وكتابة وحفظ الملفات، وربط هذه الإجراءات معاً بأقل تدخل بشري — وهو مفيد لمهام البحث وكتابة المحتوى.',
      },
    },
  ],
  agentgpt: [
    {
      question: {
        en: 'Is AgentGPT free?',
        fr: 'AgentGPT est-il gratuit ?',
        es: '¿Es AgentGPT gratis?',
        ar: 'هل AgentGPT مجاني؟',
      },
      answer: {
        en: 'AgentGPT offers a free way to run agents using shared resources with daily limits. You can also connect your own API key for unlimited use at your own cost.',
        fr: 'AgentGPT propose un moyen gratuit d\'exécuter des agents avec des ressources partagées et des limites quotidiennes. Vous pouvez aussi connecter votre propre clé API pour un usage illimité à votre charge.',
        es: 'AgentGPT ofrece una forma gratuita de ejecutar agentes usando recursos compartidos con límites diarios. También puedes conectar tu propia clave API para uso ilimitado a tu cargo.',
        ar: 'يوفر AgentGPT طريقة مجانية لتشغيل الوكلاء باستخدام موارد مشتركة بحدود يومية. يمكنك أيضاً ربط مفتاح API الخاص بك للاستخدام غير المحدود على حسابك.',
      },
    },
    {
      question: {
        en: 'Do I need to install anything to use AgentGPT?',
        fr: 'Faut-il installer quelque chose pour utiliser AgentGPT ?',
        es: '¿Necesito instalar algo para usar AgentGPT?',
        ar: 'هل أحتاج إلى تثبيت أي شيء لاستخدام AgentGPT؟',
      },
      answer: {
        en: 'No — AgentGPT runs entirely in your browser. You just type a goal and watch the agent plan and execute sub-tasks in real time, with no setup required.',
        fr: 'Non — AgentGPT fonctionne entièrement dans votre navigateur. Vous saisissez simplement un objectif et regardez l\'agent planifier et exécuter des sous-tâches en temps réel, sans configuration nécessaire.',
        es: 'No — AgentGPT funciona completamente en tu navegador. Solo escribes un objetivo y observas cómo el agente planifica y ejecuta subtareas en tiempo real, sin necesidad de configuración.',
        ar: 'لا — يعمل AgentGPT بالكامل في متصفحك. تكتب فقط هدفاً وتشاهد الوكيل يخطط وينفذ المهام الفرعية في الوقت الفعلي، دون أي إعداد.',
      },
    },
    {
      question: {
        en: 'What is AgentGPT good for?',
        fr: 'À quoi AgentGPT est-il utile ?',
        es: '¿Para qué es bueno AgentGPT?',
        ar: 'لماذا يُستخدم AgentGPT بشكل جيد؟',
      },
      answer: {
        en: 'AgentGPT is a great way to experiment with autonomous agents — research summaries, brainstorming, and simple multi-step planning — before committing to a more technical, self-hosted framework.',
        fr: 'AgentGPT est un excellent moyen d\'expérimenter avec des agents autonomes — résumés de recherche, idéation, et planification simple en plusieurs étapes — avant de s\'engager dans un framework plus technique et auto-hébergé.',
        es: 'AgentGPT es una excelente forma de experimentar con agentes autónomos — resúmenes de investigación, generación de ideas y planificación simple de varios pasos — antes de comprometerse con un framework más técnico y autoalojado.',
        ar: 'يُعد AgentGPT طريقة رائعة للتجربة مع الوكلاء المستقلين — ملخصات البحث، توليد الأفكار، والتخطيط البسيط متعدد الخطوات — قبل الانتقال إلى إطار عمل أكثر تقنية ومستضاف بشكل ذاتي.',
      },
    },
  ],
  autogen: [
    {
      question: {
        en: 'What is AutoGen?',
        fr: 'Qu\'est-ce qu\'AutoGen ?',
        es: '¿Qué es AutoGen?',
        ar: 'ما هو AutoGen؟',
      },
      answer: {
        en: 'AutoGen is an open-source framework from Microsoft for building applications with multiple AI agents that can talk to each other and to humans to solve tasks collaboratively.',
        fr: 'AutoGen est un framework open-source de Microsoft pour créer des applications avec plusieurs agents IA capables de communiquer entre eux et avec des humains pour résoudre des tâches en collaboration.',
        es: 'AutoGen es un framework de código abierto de Microsoft para crear aplicaciones con múltiples agentes de IA que pueden comunicarse entre sí y con humanos para resolver tareas de forma colaborativa.',
        ar: 'AutoGen هو إطار عمل مفتوح المصدر من Microsoft لبناء تطبيقات بوكلاء ذكاء اصطناعي متعددين يمكنهم التحدث مع بعضهم ومع البشر لحل المهام بشكل تعاوني.',
      },
    },
    {
      question: {
        en: 'Is AutoGen free?',
        fr: 'AutoGen est-il gratuit ?',
        es: '¿Es AutoGen gratis?',
        ar: 'هل AutoGen مجاني؟',
      },
      answer: {
        en: 'Yes, AutoGen is free and open-source. As with AutoGPT, you cover the cost of the underlying AI model API calls your agents make.',
        fr: 'Oui, AutoGen est gratuit et open-source. Comme pour AutoGPT, vous prenez en charge le coût des appels API du modèle IA sous-jacent effectués par vos agents.',
        es: 'Sí, AutoGen es gratuito y de código abierto. Como con AutoGPT, tú asumes el costo de las llamadas a la API del modelo de IA subyacente que hacen tus agentes.',
        ar: 'نعم، AutoGen مجاني ومفتوح المصدر. وكما هو الحال مع AutoGPT، أنت تتحمل تكلفة استدعاءات واجهة برمجة نموذج الذكاء الاصطناعي التي يقوم بها وكلاؤك.',
      },
    },
    {
      question: {
        en: 'Do I need to know how to code to use AutoGen?',
        fr: 'Faut-il savoir coder pour utiliser AutoGen ?',
        es: '¿Necesito saber programar para usar AutoGen?',
        ar: 'هل أحتاج إلى معرفة البرمجة لاستخدام AutoGen؟',
      },
      answer: {
        en: 'Yes, AutoGen is a Python framework aimed at developers who want to design custom multi-agent workflows — it is not a no-code consumer app like AgentGPT.',
        fr: 'Oui, AutoGen est un framework Python destiné aux développeurs qui souhaitent concevoir des flux de travail multi-agents personnalisés — ce n\'est pas une application grand public sans code comme AgentGPT.',
        es: 'Sí, AutoGen es un framework de Python orientado a desarrolladores que quieren diseñar flujos de trabajo personalizados con múltiples agentes — no es una app sin código como AgentGPT.',
        ar: 'نعم، AutoGen هو إطار عمل بلغة Python مخصص للمطورين الذين يريدون تصميم سير عمل مخصص متعدد الوكلاء — وليس تطبيقاً بلا كود مثل AgentGPT.',
      },
    },
  ],
  babyagi: [
    {
      question: {
        en: 'What is BabyAGI?',
        fr: 'Qu\'est-ce que BabyAGI ?',
        es: '¿Qué es BabyAGI?',
        ar: 'ما هو BabyAGI؟',
      },
      answer: {
        en: 'BabyAGI is a minimal, open-source example of an autonomous AI agent loop — it creates tasks, prioritizes them, executes them, and creates new tasks based on the results, in a small, readable codebase.',
        fr: 'BabyAGI est un exemple minimal et open-source d\'une boucle d\'agent IA autonome — il crée des tâches, les priorise, les exécute, et crée de nouvelles tâches en fonction des résultats, dans une base de code petite et lisible.',
        es: 'BabyAGI es un ejemplo mínimo y de código abierto de un bucle de agente de IA autónomo — crea tareas, las prioriza, las ejecuta y crea nuevas tareas según los resultados, en una base de código pequeña y legible.',
        ar: 'BabyAGI هو مثال بسيط ومفتوح المصدر لحلقة وكيل ذكاء اصطناعي مستقل — ينشئ مهاماً، يرتبها بالأولوية، ينفذها، وينشئ مهاماً جديدة بناءً على النتائج، ضمن قاعدة كود صغيرة وسهلة القراءة.',
      },
    },
    {
      question: {
        en: 'Is BabyAGI good for beginners?',
        fr: 'BabyAGI est-il adapté aux débutants ?',
        es: '¿Es BabyAGI bueno para principiantes?',
        ar: 'هل BabyAGI مناسب للمبتدئين؟',
      },
      answer: {
        en: 'BabyAGI is better suited to developers who want to learn how agent loops work under the hood. If you want a ready-made interface with no setup, AgentGPT is an easier starting point.',
        fr: 'BabyAGI convient mieux aux développeurs qui veulent comprendre comment fonctionnent les boucles d\'agents en interne. Pour une interface prête à l\'emploi sans configuration, AgentGPT est un point de départ plus simple.',
        es: 'BabyAGI es más adecuado para desarrolladores que quieren aprender cómo funcionan internamente los bucles de agentes. Si quieres una interfaz lista para usar sin configuración, AgentGPT es un punto de partida más sencillo.',
        ar: 'يناسب BabyAGI المطورين الذين يريدون تعلم كيفية عمل حلقات الوكلاء داخلياً. إذا كنت تريد واجهة جاهزة دون إعداد، فإن AgentGPT نقطة انطلاق أسهل.',
      },
    },
    {
      question: {
        en: 'Is BabyAGI free?',
        fr: 'BabyAGI est-il gratuit ?',
        es: '¿Es BabyAGI gratis?',
        ar: 'هل BabyAGI مجاني؟',
      },
      answer: {
        en: 'Yes, BabyAGI\'s code is free and open-source on GitHub. You only pay for the AI model API calls it makes when you run it with your own API key.',
        fr: 'Oui, le code de BabyAGI est gratuit et open-source sur GitHub. Vous ne payez que les appels API du modèle IA qu\'il effectue lorsque vous l\'exécutez avec votre propre clé API.',
        es: 'Sí, el código de BabyAGI es gratuito y de código abierto en GitHub. Solo pagas las llamadas a la API del modelo de IA que realiza cuando lo ejecutas con tu propia clave API.',
        ar: 'نعم، كود BabyAGI مجاني ومفتوح المصدر على GitHub. تدفع فقط تكلفة استدعاءات واجهة برمجة نموذج الذكاء الاصطناعي التي يقوم بها عند تشغيله بمفتاح API الخاص بك.',
      },
    },
  ],
};
