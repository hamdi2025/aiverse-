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
  gemini: [
    {
      question: {
        en: 'Is Google Gemini free?',
        fr: 'Google Gemini est-il gratuit ?',
        es: '¿Es Google Gemini gratis?',
        ar: 'هل Google Gemini مجاني؟',
      },
      answer: {
        en: 'Yes, Gemini has a free tier accessible with a Google account. The Gemini Advanced plan (via Google One AI Premium) unlocks the most capable model, a larger context window, and integration across Gmail, Docs, and Sheets.',
        fr: 'Oui, Gemini propose une version gratuite accessible avec un compte Google. Le plan Gemini Advanced (via Google One AI Premium) débloque le modèle le plus performant, une fenêtre de contexte plus large et l\'intégration avec Gmail, Docs et Sheets.',
        es: 'Sí, Gemini tiene un nivel gratuito accesible con una cuenta de Google. El plan Gemini Advanced (vía Google One AI Premium) desbloquea el modelo más potente, una ventana de contexto más grande y la integración con Gmail, Docs y Sheets.',
        ar: 'نعم، يوفر Gemini مستوى مجانياً يمكن الوصول إليه بحساب Google. تفتح خطة Gemini Advanced (عبر Google One AI Premium) أقوى نموذج، ونافذة سياق أكبر، والتكامل مع Gmail و Docs و Sheets.',
      },
    },
    {
      question: {
        en: 'What makes Gemini different from ChatGPT?',
        fr: 'Qu\'est-ce qui différencie Gemini de ChatGPT ?',
        es: '¿Qué diferencia a Gemini de ChatGPT?',
        ar: 'ما الذي يميز Gemini عن ChatGPT؟',
      },
      answer: {
        en: 'Gemini is deeply integrated into Google\'s ecosystem — Search, Gmail, Docs, Android — and has strong native multimodal abilities (text, images, video, audio in one model).',
        fr: 'Gemini est profondément intégré à l\'écosystème Google — Search, Gmail, Docs, Android — et possède de solides capacités multimodales natives (texte, images, vidéo, audio dans un seul modèle).',
        es: 'Gemini está profundamente integrado en el ecosistema de Google — Search, Gmail, Docs, Android — y tiene fuertes capacidades multimodales nativas (texto, imágenes, video, audio en un solo modelo).',
        ar: 'يتكامل Gemini بعمق مع منظومة Google — البحث وGmail وDocs وAndroid — ويتمتع بقدرات متعددة الوسائط قوية (نص، صور، فيديو، صوت في نموذج واحد).',
      },
    },
    {
      question: {
        en: 'Can Gemini access real-time information?',
        fr: 'Gemini peut-il accéder à des informations en temps réel ?',
        es: '¿Puede Gemini acceder a información en tiempo real?',
        ar: 'هل يمكن لـ Gemini الوصول إلى معلومات في الوقت الفعلي؟',
      },
      answer: {
        en: 'Yes, Gemini can search Google in real time to answer questions about current events, making it more up to date than models without live web access.',
        fr: 'Oui, Gemini peut effectuer des recherches Google en temps réel pour répondre aux questions sur l\'actualité, ce qui le rend plus à jour que les modèles sans accès web en direct.',
        es: 'Sí, Gemini puede buscar en Google en tiempo real para responder preguntas sobre eventos actuales, lo que lo hace más actualizado que los modelos sin acceso web en vivo.',
        ar: 'نعم، يمكن لـ Gemini البحث في Google في الوقت الفعلي للإجابة عن أسئلة حول الأحداث الجارية، مما يجعله أكثر تحديثاً من النماذج التي لا تملك وصولاً مباشراً للويب.',
      },
    },
  ],
  grok: [
    {
      question: {
        en: 'Is Grok free?',
        fr: 'Grok est-il gratuit ?',
        es: '¿Es Grok gratis?',
        ar: 'هل Grok مجاني؟',
      },
      answer: {
        en: 'Grok offers limited free access to X (Twitter) users, with a paid X Premium+ subscription required for higher usage limits and the most advanced models.',
        fr: 'Grok offre un accès gratuit limité aux utilisateurs de X (Twitter), un abonnement payant X Premium+ étant nécessaire pour des limites d\'utilisation plus élevées et les modèles les plus avancés.',
        es: 'Grok ofrece acceso gratuito limitado a los usuarios de X (Twitter), siendo necesaria una suscripción de pago X Premium+ para límites de uso más altos y los modelos más avanzados.',
        ar: 'يوفر Grok وصولاً مجانياً محدوداً لمستخدمي X (تويتر)، مع الحاجة إلى اشتراك مدفوع X Premium+ للحصول على حدود استخدام أعلى وأحدث النماذج.',
      },
    },
    {
      question: {
        en: 'What makes Grok different from other chatbots?',
        fr: 'Qu\'est-ce qui différencie Grok des autres chatbots ?',
        es: '¿Qué diferencia a Grok de otros chatbots?',
        ar: 'ما الذي يميز Grok عن روبوتات الدردشة الأخرى؟',
      },
      answer: {
        en: 'Grok has direct access to real-time posts on X, giving it an edge for questions about trending topics and current events, and it tends to have a more casual, less filtered tone.',
        fr: 'Grok a un accès direct aux publications en temps réel sur X, ce qui lui donne un avantage pour les questions sur les sujets tendances et l\'actualité, et il a tendance à avoir un ton plus décontracté et moins filtré.',
        es: 'Grok tiene acceso directo a publicaciones en tiempo real en X, lo que le da ventaja para preguntas sobre temas de tendencia y eventos actuales, y tiende a tener un tono más casual y menos filtrado.',
        ar: 'يتمتع Grok بوصول مباشر للمنشورات في الوقت الفعلي على X، مما يعطيه ميزة في الأسئلة حول المواضيع الرائجة والأحداث الجارية، ويميل إلى نبرة أكثر عفوية وأقل تصفية.',
      },
    },
    {
      question: {
        en: 'Do I need an X account to use Grok?',
        fr: 'Faut-il un compte X pour utiliser Grok ?',
        es: '¿Necesito una cuenta de X para usar Grok?',
        ar: 'هل أحتاج إلى حساب X لاستخدام Grok؟',
      },
      answer: {
        en: 'Grok is primarily accessed through the X app and website, so an X account is required, though a standalone Grok app and website are also available in some regions.',
        fr: 'Grok est principalement accessible via l\'application et le site X, un compte X est donc nécessaire, bien qu\'une application et un site Grok autonomes soient également disponibles dans certaines régions.',
        es: 'Se accede a Grok principalmente a través de la app y el sitio web de X, por lo que se requiere una cuenta de X, aunque también hay disponible una app y sitio web independientes de Grok en algunas regiones.',
        ar: 'يتم الوصول إلى Grok بشكل أساسي عبر تطبيق وموقع X، لذا فإن حساب X مطلوب، على الرغم من توفر تطبيق وموقع مستقل لـ Grok في بعض المناطق.',
      },
    },
  ],
  mistral: [
    {
      question: {
        en: 'Is Mistral AI free?',
        fr: 'Mistral AI est-il gratuit ?',
        es: '¿Es Mistral AI gratis?',
        ar: 'هل Mistral AI مجاني؟',
      },
      answer: {
        en: 'Yes, Mistral\'s chat assistant "Le Chat" has a free tier, and several of Mistral\'s models are open-weight and free to download and run yourself.',
        fr: 'Oui, l\'assistant de chat de Mistral "Le Chat" propose une version gratuite, et plusieurs modèles de Mistral sont open-weight, gratuits à télécharger et à exécuter soi-même.',
        es: 'Sí, el asistente de chat de Mistral "Le Chat" tiene un nivel gratuito, y varios modelos de Mistral son de peso abierto, gratuitos para descargar y ejecutar tú mismo.',
        ar: 'نعم، يوفر مساعد الدردشة "Le Chat" من Mistral مستوى مجانياً، والعديد من نماذج Mistral مفتوحة الأوزان ومجانية للتنزيل والتشغيل بنفسك.',
      },
    },
    {
      question: {
        en: 'Is Mistral AI a European alternative to ChatGPT?',
        fr: 'Mistral AI est-il une alternative européenne à ChatGPT ?',
        es: '¿Es Mistral AI una alternativa europea a ChatGPT?',
        ar: 'هل Mistral AI بديل أوروبي لـ ChatGPT؟',
      },
      answer: {
        en: 'Yes, Mistral AI is a French company and one of the leading European AI labs, often highlighted as a privacy-focused, EU-based alternative to US-based assistants.',
        fr: 'Oui, Mistral AI est une entreprise française et l\'un des principaux laboratoires d\'IA européens, souvent présenté comme une alternative axée sur la confidentialité, basée dans l\'UE, aux assistants américains.',
        es: 'Sí, Mistral AI es una empresa francesa y uno de los principales laboratorios de IA europeos, a menudo destacado como una alternativa centrada en la privacidad y con sede en la UE frente a los asistentes estadounidenses.',
        ar: 'نعم، Mistral AI شركة فرنسية وأحد أبرز مختبرات الذكاء الاصطناعي الأوروبية، وتُعتبر غالباً بديلاً أوروبياً يركز على الخصوصية للمساعدين الأمريكيين.',
      },
    },
    {
      question: {
        en: 'Can I run Mistral models on my own computer?',
        fr: 'Peut-on exécuter les modèles Mistral sur son propre ordinateur ?',
        es: '¿Puedo ejecutar los modelos de Mistral en mi propia computadora?',
        ar: 'هل يمكنني تشغيل نماذج Mistral على جهازي الخاص؟',
      },
      answer: {
        en: 'Yes, several Mistral models (like Mistral 7B and Mixtral) are released as open-weight models that can be downloaded and run locally using tools like Ollama or LM Studio.',
        fr: 'Oui, plusieurs modèles Mistral (comme Mistral 7B et Mixtral) sont publiés en open-weight et peuvent être téléchargés et exécutés localement avec des outils comme Ollama ou LM Studio.',
        es: 'Sí, varios modelos de Mistral (como Mistral 7B y Mixtral) se publican como modelos de peso abierto que se pueden descargar y ejecutar localmente con herramientas como Ollama o LM Studio.',
        ar: 'نعم، تُنشر عدة نماذج من Mistral (مثل Mistral 7B وMixtral) كنماذج مفتوحة الأوزان يمكن تنزيلها وتشغيلها محلياً باستخدام أدوات مثل Ollama أو LM Studio.',
      },
    },
  ],
  'copy-ai': [
    {
      question: {
        en: 'Is Copy.ai free?',
        fr: 'Copy.ai est-il gratuit ?',
        es: '¿Es Copy.ai gratis?',
        ar: 'هل Copy.ai مجاني؟',
      },
      answer: {
        en: 'Copy.ai offers a free plan with a limited number of monthly words/credits. Paid plans remove word limits and add team collaboration and workflow automation features.',
        fr: 'Copy.ai propose un plan gratuit avec un nombre limité de mots/crédits mensuels. Les plans payants suppriment les limites de mots et ajoutent la collaboration en équipe et l\'automatisation de workflows.',
        es: 'Copy.ai ofrece un plan gratuito con un número limitado de palabras/créditos mensuales. Los planes de pago eliminan los límites de palabras y añaden colaboración en equipo y automatización de flujos de trabajo.',
        ar: 'يوفر Copy.ai خطة مجانية بعدد محدود من الكلمات/الأرصدة شهرياً. تزيل الخطط المدفوعة حدود الكلمات وتضيف ميزات التعاون الجماعي وأتمتة سير العمل.',
      },
    },
    {
      question: {
        en: 'What is Copy.ai best used for?',
        fr: 'À quoi Copy.ai sert-il le mieux ?',
        es: '¿Para qué se usa mejor Copy.ai?',
        ar: 'لماذا يُستخدم Copy.ai بشكل أفضل؟',
      },
      answer: {
        en: 'Copy.ai is built for marketing copy — ads, product descriptions, social media posts, and email campaigns — with templates designed for fast, repeatable content production.',
        fr: 'Copy.ai est conçu pour le contenu marketing — publicités, descriptions de produits, publications sur les réseaux sociaux et campagnes email — avec des modèles conçus pour une production de contenu rapide et répétable.',
        es: 'Copy.ai está diseñado para textos de marketing — anuncios, descripciones de productos, publicaciones en redes sociales y campañas de email — con plantillas pensadas para una producción de contenido rápida y repetible.',
        ar: 'صُمم Copy.ai لكتابة المحتوى التسويقي — الإعلانات، أوصاف المنتجات، منشورات وسائل التواصل، والحملات البريدية — بقوالب مصممة لإنتاج محتوى سريع وقابل للتكرار.',
      },
    },
    {
      question: {
        en: 'Can Copy.ai work as a workflow automation tool?',
        fr: 'Copy.ai peut-il fonctionner comme outil d\'automatisation de workflows ?',
        es: '¿Puede Copy.ai funcionar como herramienta de automatización de flujos de trabajo?',
        ar: 'هل يمكن لـ Copy.ai العمل كأداة أتمتة سير العمل؟',
      },
      answer: {
        en: 'Yes, beyond simple text generation, Copy.ai offers "workflows" that chain multiple AI steps together to automate multi-step marketing and sales tasks.',
        fr: 'Oui, au-delà de la simple génération de texte, Copy.ai propose des "workflows" qui enchaînent plusieurs étapes IA pour automatiser des tâches marketing et commerciales en plusieurs étapes.',
        es: 'Sí, más allá de la simple generación de texto, Copy.ai ofrece "workflows" que encadenan múltiples pasos de IA para automatizar tareas de marketing y ventas de varios pasos.',
        ar: 'نعم، بالإضافة إلى توليد النصوص البسيط، يقدم Copy.ai "سير عمل" يربط خطوات ذكاء اصطناعي متعددة معاً لأتمتة مهام تسويقية وبيعية متعددة الخطوات.',
      },
    },
  ],
  'character-ai': [
    {
      question: {
        en: 'Is Character.AI free?',
        fr: 'Character.AI est-il gratuit ?',
        es: '¿Es Character.AI gratis?',
        ar: 'هل Character.AI مجاني؟',
      },
      answer: {
        en: 'Yes, Character.AI is free to use. The c.ai+ subscription offers faster response times and priority access during busy periods.',
        fr: 'Oui, Character.AI est gratuit. L\'abonnement c.ai+ offre des temps de réponse plus rapides et un accès prioritaire pendant les périodes de forte affluence.',
        es: 'Sí, Character.AI es gratuito. La suscripción c.ai+ ofrece tiempos de respuesta más rápidos y acceso prioritario en horas de mucho tráfico.',
        ar: 'نعم، Character.AI مجاني للاستخدام. يوفر اشتراك c.ai+ أوقات استجابة أسرع وأولوية الوصول في فترات الازدحام.',
      },
    },
    {
      question: {
        en: 'What is Character.AI used for?',
        fr: 'À quoi sert Character.AI ?',
        es: '¿Para qué se usa Character.AI?',
        ar: 'لماذا يُستخدم Character.AI؟',
      },
      answer: {
        en: 'Character.AI lets you create and chat with AI characters — from original personas to fictional or historical figures — for creative writing, roleplay, language practice, and entertainment.',
        fr: 'Character.AI permet de créer et de discuter avec des personnages IA — de personnages originaux à des figures fictives ou historiques — pour l\'écriture créative, le roleplay, la pratique des langues et le divertissement.',
        es: 'Character.AI permite crear y chatear con personajes de IA — desde personajes originales hasta figuras ficticias o históricas — para escritura creativa, roleplay, práctica de idiomas y entretenimiento.',
        ar: 'يتيح Character.AI إنشاء شخصيات ذكاء اصطناعي والتحدث معها — من شخصيات أصلية إلى شخصيات خيالية أو تاريخية — للكتابة الإبداعية ولعب الأدوار وممارسة اللغة والترفيه.',
      },
    },
    {
      question: {
        en: 'Is Character.AI safe for younger users?',
        fr: 'Character.AI est-il sûr pour les jeunes utilisateurs ?',
        es: '¿Es Character.AI seguro para usuarios jóvenes?',
        ar: 'هل Character.AI آمن للمستخدمين الصغار؟',
      },
      answer: {
        en: 'Character.AI has content filters and age-related safety features, but as with any open-ended chat AI, parents should review the platform\'s guidelines and supervise use by minors.',
        fr: 'Character.AI dispose de filtres de contenu et de fonctionnalités de sécurité liées à l\'âge, mais comme pour toute IA de chat ouverte, les parents devraient consulter les directives de la plateforme et superviser l\'usage par les mineurs.',
        es: 'Character.AI cuenta con filtros de contenido y funciones de seguridad relacionadas con la edad, pero como con cualquier IA de chat abierta, los padres deben revisar las directrices de la plataforma y supervisar su uso por menores.',
        ar: 'يحتوي Character.AI على فلاتر محتوى وميزات أمان متعلقة بالعمر، ولكن كما هو الحال مع أي ذكاء اصطناعي محادثة مفتوح، يجب على الأهل مراجعة إرشادات المنصة والإشراف على استخدام القاصرين لها.',
      },
    },
  ],
  jasper: [
    {
      question: {
        en: 'Is Jasper AI free?',
        fr: 'Jasper AI est-il gratuit ?',
        es: '¿Es Jasper AI gratis?',
        ar: 'هل Jasper AI مجاني؟',
      },
      answer: {
        en: 'Jasper does not have a permanent free plan, but it offers a free trial. Paid plans are billed monthly and aimed at individuals, teams, and businesses doing regular content production.',
        fr: 'Jasper n\'a pas de plan gratuit permanent, mais propose un essai gratuit. Les plans payants sont facturés mensuellement et destinés aux particuliers, équipes et entreprises produisant du contenu régulièrement.',
        es: 'Jasper no tiene un plan gratuito permanente, pero ofrece una prueba gratuita. Los planes de pago se facturan mensualmente y están dirigidos a individuos, equipos y empresas que producen contenido regularmente.',
        ar: 'لا يوفر Jasper خطة مجانية دائمة، لكنه يقدم تجربة مجانية. تُفوتر الخطط المدفوعة شهرياً وهي موجهة للأفراد والفرق والشركات التي تنتج محتوى بشكل منتظم.',
      },
    },
    {
      question: {
        en: 'Who is Jasper AI for?',
        fr: 'À qui s\'adresse Jasper AI ?',
        es: '¿Para quién es Jasper AI?',
        ar: 'لمن يُوجَّه Jasper AI؟',
      },
      answer: {
        en: 'Jasper is built for marketing teams and businesses that need on-brand content at scale — blog posts, ads, and social copy that follow a consistent brand voice across the team.',
        fr: 'Jasper est conçu pour les équipes marketing et entreprises qui ont besoin de contenu cohérent à grande échelle — articles de blog, publicités et textes sociaux suivant une voix de marque cohérente au sein de l\'équipe.',
        es: 'Jasper está diseñado para equipos de marketing y empresas que necesitan contenido de marca a gran escala — posts de blog, anuncios y textos para redes sociales con una voz de marca coherente en todo el equipo.',
        ar: 'صُمم Jasper لفرق التسويق والشركات التي تحتاج محتوى متوافقاً مع هويتها على نطاق واسع — مقالات، إعلانات، ومحتوى اجتماعي يتبع نفس صوت العلامة التجارية ضمن الفريق.',
      },
    },
    {
      question: {
        en: 'Does Jasper offer a brand voice feature?',
        fr: 'Jasper propose-t-il une fonctionnalité de voix de marque ?',
        es: '¿Ofrece Jasper una función de voz de marca?',
        ar: 'هل يوفر Jasper ميزة صوت العلامة التجارية؟',
      },
      answer: {
        en: 'Yes, Jasper lets you define a "Brand Voice" profile trained on your existing content so all generated copy matches your tone, style, and terminology.',
        fr: 'Oui, Jasper permet de définir un profil "Brand Voice" entraîné sur votre contenu existant pour que tous les textes générés correspondent à votre ton, style et terminologie.',
        es: 'Sí, Jasper permite definir un perfil de "Brand Voice" entrenado con tu contenido existente para que todo el texto generado coincida con tu tono, estilo y terminología.',
        ar: 'نعم، يتيح Jasper تحديد ملف "صوت العلامة التجارية" مُدرَّب على محتواك الحالي بحيث يتطابق كل المحتوى المُولَّد مع نبرتك وأسلوبك ومصطلحاتك.',
      },
    },
  ],
  midjourney: [
    {
      question: {
        en: 'Is Midjourney free?',
        fr: 'Midjourney est-il gratuit ?',
        es: '¿Es Midjourney gratis?',
        ar: 'هل Midjourney مجاني؟',
      },
      answer: {
        en: 'Midjourney no longer offers a free trial for new accounts — it requires a paid subscription, billed monthly or annually, with plans based on how many images you generate.',
        fr: 'Midjourney ne propose plus d\'essai gratuit pour les nouveaux comptes — il nécessite un abonnement payant, facturé mensuellement ou annuellement, avec des plans basés sur le nombre d\'images générées.',
        es: 'Midjourney ya no ofrece prueba gratuita para cuentas nuevas — requiere una suscripción de pago, facturada mensual o anualmente, con planes según la cantidad de imágenes que generes.',
        ar: 'لا يوفر Midjourney تجربة مجانية للحسابات الجديدة بعد الآن — يتطلب اشتراكاً مدفوعاً، يُفوتر شهرياً أو سنوياً، مع خطط حسب عدد الصور التي تُولّدها.',
      },
    },
    {
      question: {
        en: 'How do I use Midjourney?',
        fr: 'Comment utiliser Midjourney ?',
        es: '¿Cómo se usa Midjourney?',
        ar: 'كيف يُستخدم Midjourney؟',
      },
      answer: {
        en: 'Midjourney is used through Discord (typing /imagine prompts) or its own web app, generating multiple image variations from a text prompt that you can then upscale or refine.',
        fr: 'Midjourney s\'utilise via Discord (en tapant des prompts /imagine) ou sa propre application web, générant plusieurs variantes d\'image à partir d\'un prompt texte que vous pouvez ensuite agrandir ou affiner.',
        es: 'Midjourney se usa a través de Discord (escribiendo prompts /imagine) o su propia app web, generando varias variantes de imagen a partir de un prompt de texto que luego puedes ampliar o refinar.',
        ar: 'يُستخدم Midjourney عبر Discord (بكتابة أوامر /imagine) أو من خلال تطبيقه الخاص على الويب، حيث يولد عدة نسخ من الصورة من نص وصفي يمكنك بعد ذلك تكبيرها أو تحسينها.',
      },
    },
    {
      question: {
        en: 'Can I use Midjourney images commercially?',
        fr: 'Peut-on utiliser les images Midjourney à des fins commerciales ?',
        es: '¿Puedo usar las imágenes de Midjourney comercialmente?',
        ar: 'هل يمكن استخدام صور Midjourney تجارياً؟',
      },
      answer: {
        en: 'Paid subscribers generally own the images they create and can use them commercially, but companies above a certain revenue threshold need a higher-tier plan — always check the current terms of service.',
        fr: 'Les abonnés payants possèdent généralement les images qu\'ils créent et peuvent les utiliser commercialement, mais les entreprises au-delà d\'un certain seuil de revenus ont besoin d\'un plan supérieur — vérifiez toujours les conditions d\'utilisation actuelles.',
        es: 'Los suscriptores de pago generalmente son propietarios de las imágenes que crean y pueden usarlas comercialmente, pero las empresas que superen un cierto umbral de ingresos necesitan un plan superior — consulta siempre los términos de servicio actuales.',
        ar: 'يملك المشتركون المدفوعون عموماً الصور التي ينشئونها ويمكنهم استخدامها تجارياً، لكن الشركات التي تتجاوز حد دخل معين تحتاج إلى خطة أعلى — تحقق دائماً من شروط الخدمة الحالية.',
      },
    },
  ],
  dalle3: [
    {
      question: {
        en: 'Is DALL-E 3 free?',
        fr: 'DALL-E 3 est-il gratuit ?',
        es: '¿Es DALL-E 3 gratis?',
        ar: 'هل DALL-E 3 مجاني؟',
      },
      answer: {
        en: 'DALL-E 3 is available to ChatGPT Plus, Team, and Enterprise subscribers, and ChatGPT free users get a limited number of image generations per day.',
        fr: 'DALL-E 3 est disponible pour les abonnés ChatGPT Plus, Team et Enterprise, et les utilisateurs gratuits de ChatGPT bénéficient d\'un nombre limité de générations d\'images par jour.',
        es: 'DALL-E 3 está disponible para los suscriptores de ChatGPT Plus, Team y Enterprise, y los usuarios gratuitos de ChatGPT obtienen un número limitado de generaciones de imágenes al día.',
        ar: 'يتوفر DALL-E 3 لمشتركي ChatGPT Plus وTeam وEnterprise، ويحصل مستخدمو ChatGPT المجاني على عدد محدود من توليدات الصور يومياً.',
      },
    },
    {
      question: {
        en: 'How do I access DALL-E 3?',
        fr: 'Comment accéder à DALL-E 3 ?',
        es: '¿Cómo accedo a DALL-E 3?',
        ar: 'كيف يمكن الوصول إلى DALL-E 3؟',
      },
      answer: {
        en: 'DALL-E 3 is accessed directly inside ChatGPT — just describe the image you want in the chat, and ChatGPT will refine your prompt and generate it.',
        fr: 'DALL-E 3 est accessible directement dans ChatGPT — décrivez simplement l\'image souhaitée dans le chat, et ChatGPT affinera votre prompt et la générera.',
        es: 'DALL-E 3 se accede directamente dentro de ChatGPT — solo describe la imagen que quieres en el chat, y ChatGPT refinará tu prompt y la generará.',
        ar: 'يتم الوصول إلى DALL-E 3 مباشرة داخل ChatGPT — فقط صف الصورة التي تريدها في المحادثة، وسيقوم ChatGPT بتحسين طلبك وتوليدها.',
      },
    },
    {
      question: {
        en: 'How is DALL-E 3 different from Midjourney?',
        fr: 'En quoi DALL-E 3 diffère-t-il de Midjourney ?',
        es: '¿En qué se diferencia DALL-E 3 de Midjourney?',
        ar: 'ما الفرق بين DALL-E 3 و Midjourney؟',
      },
      answer: {
        en: 'DALL-E 3 tends to follow detailed prompts and render text more accurately, and is conveniently bundled inside ChatGPT, while Midjourney is often favored for more artistic, stylized results.',
        fr: 'DALL-E 3 a tendance à mieux suivre les prompts détaillés et à rendre le texte plus fidèlement, et est intégré pratiquement à ChatGPT, tandis que Midjourney est souvent préféré pour des résultats plus artistiques et stylisés.',
        es: 'DALL-E 3 tiende a seguir mejor las indicaciones detalladas y a renderizar texto con mayor precisión, y está integrado de forma práctica en ChatGPT, mientras que Midjourney suele preferirse para resultados más artísticos y estilizados.',
        ar: 'يميل DALL-E 3 إلى اتباع الأوامر التفصيلية بدقة أكبر وعرض النص بشكل أصح، وهو مدمج بشكل عملي داخل ChatGPT، بينما يُفضَّل Midjourney غالباً للنتائج الفنية والمصممة بأسلوب مميز.',
      },
    },
  ],
  'stable-diffusion': [
    {
      question: {
        en: 'Is Stable Diffusion free?',
        fr: 'Stable Diffusion est-il gratuit ?',
        es: '¿Es Stable Diffusion gratis?',
        ar: 'هل Stable Diffusion مجاني؟',
      },
      answer: {
        en: 'Yes, Stable Diffusion is open-source and free to download and run on your own hardware. Hosted versions and web interfaces may charge for compute or convenience.',
        fr: 'Oui, Stable Diffusion est open-source et gratuit à télécharger et exécuter sur votre propre matériel. Les versions hébergées et interfaces web peuvent facturer le calcul ou la commodité.',
        es: 'Sí, Stable Diffusion es de código abierto y gratuito para descargar y ejecutar en tu propio hardware. Las versiones alojadas e interfaces web pueden cobrar por el cómputo o la comodidad.',
        ar: 'نعم، Stable Diffusion مفتوح المصدر ومجاني للتنزيل والتشغيل على جهازك الخاص. قد تفرض النسخ المستضافة وواجهات الويب رسوماً على المعالجة أو الراحة.',
      },
    },
    {
      question: {
        en: 'Do I need a powerful computer to run Stable Diffusion?',
        fr: 'Faut-il un ordinateur puissant pour exécuter Stable Diffusion ?',
        es: '¿Necesito una computadora potente para ejecutar Stable Diffusion?',
        ar: 'هل أحتاج إلى جهاز قوي لتشغيل Stable Diffusion؟',
      },
      answer: {
        en: 'Running it locally benefits from a dedicated GPU with several GB of VRAM. If you don\'t have one, you can use cloud-based or web-hosted versions instead.',
        fr: 'L\'exécution locale bénéficie d\'un GPU dédié avec plusieurs Go de VRAM. Si vous n\'en avez pas, vous pouvez utiliser des versions cloud ou hébergées en ligne.',
        es: 'Ejecutarlo localmente se beneficia de una GPU dedicada con varios GB de VRAM. Si no tienes una, puedes usar versiones en la nube o alojadas en la web.',
        ar: 'يستفيد التشغيل المحلي من وحدة معالجة رسومات مخصصة بعدة غيغابايت من VRAM. إذا لم تتوفر لديك، يمكنك استخدام نسخ سحابية أو مستضافة على الويب بدلاً من ذلك.',
      },
    },
    {
      question: {
        en: 'Can I customize Stable Diffusion with my own styles?',
        fr: 'Peut-on personnaliser Stable Diffusion avec ses propres styles ?',
        es: '¿Puedo personalizar Stable Diffusion con mis propios estilos?',
        ar: 'هل يمكن تخصيص Stable Diffusion بأنماط خاصة بي؟',
      },
      answer: {
        en: 'Yes — its open nature lets you use community-trained models, LoRAs, and fine-tunes (via tools like Automatic1111 or ComfyUI) to get specific art styles or subjects.',
        fr: 'Oui — sa nature ouverte permet d\'utiliser des modèles entraînés par la communauté, des LoRAs et des fine-tunes (via des outils comme Automatic1111 ou ComfyUI) pour obtenir des styles artistiques ou sujets spécifiques.',
        es: 'Sí — su naturaleza abierta permite usar modelos entrenados por la comunidad, LoRAs y fine-tunes (mediante herramientas como Automatic1111 o ComfyUI) para obtener estilos artísticos o temas específicos.',
        ar: 'نعم — تتيح طبيعته المفتوحة استخدام نماذج مدربة من المجتمع وLoRAs وضبط دقيق (عبر أدوات مثل Automatic1111 أو ComfyUI) للحصول على أنماط فنية أو مواضيع محددة.',
      },
    },
  ],
  'adobe-firefly': [
    {
      question: {
        en: 'Is Adobe Firefly free?',
        fr: 'Adobe Firefly est-il gratuit ?',
        es: '¿Es Adobe Firefly gratis?',
        ar: 'هل Adobe Firefly مجاني؟',
      },
      answer: {
        en: 'Adobe Firefly offers a free plan with a monthly allowance of generative credits. Creative Cloud subscribers get additional credits included with their plan.',
        fr: 'Adobe Firefly propose un plan gratuit avec un quota mensuel de crédits génératifs. Les abonnés Creative Cloud obtiennent des crédits supplémentaires inclus dans leur plan.',
        es: 'Adobe Firefly ofrece un plan gratuito con una asignación mensual de créditos generativos. Los suscriptores de Creative Cloud obtienen créditos adicionales incluidos en su plan.',
        ar: 'يوفر Adobe Firefly خطة مجانية بحصة شهرية من أرصدة التوليد. يحصل مشتركو Creative Cloud على أرصدة إضافية مشمولة في خطتهم.',
      },
    },
    {
      question: {
        en: 'Is Adobe Firefly safe to use commercially?',
        fr: 'Adobe Firefly est-il sûr pour un usage commercial ?',
        es: '¿Es seguro usar Adobe Firefly comercialmente?',
        ar: 'هل من الآمن استخدام Adobe Firefly تجارياً؟',
      },
      answer: {
        en: 'Yes, Firefly is trained on licensed and public-domain content, and Adobe offers IP indemnification for paying customers, making it a popular choice for commercial work.',
        fr: 'Oui, Firefly est entraîné sur du contenu sous licence et du domaine public, et Adobe offre une indemnisation pour la propriété intellectuelle aux clients payants, ce qui en fait un choix populaire pour un usage commercial.',
        es: 'Sí, Firefly se entrena con contenido licenciado y de dominio público, y Adobe ofrece indemnización por propiedad intelectual a los clientes de pago, lo que lo convierte en una opción popular para trabajos comerciales.',
        ar: 'نعم، تم تدريب Firefly على محتوى مرخص وعام، وتقدم Adobe تعويضاً عن حقوق الملكية الفكرية للعملاء المدفوعين، مما يجعله خياراً شائعاً للأعمال التجارية.',
      },
    },
    {
      question: {
        en: 'Does Adobe Firefly integrate with Photoshop?',
        fr: 'Adobe Firefly s\'intègre-t-il à Photoshop ?',
        es: '¿Se integra Adobe Firefly con Photoshop?',
        ar: 'هل يتكامل Adobe Firefly مع Photoshop؟',
      },
      answer: {
        en: 'Yes, Firefly powers Generative Fill and Generative Expand directly inside Photoshop, letting you extend or edit images using text prompts without leaving the app.',
        fr: 'Oui, Firefly alimente le Remplissage génératif et l\'Extension générative directement dans Photoshop, permettant d\'étendre ou de modifier des images avec des prompts texte sans quitter l\'application.',
        es: 'Sí, Firefly impulsa el Relleno generativo y la Expansión generativa directamente en Photoshop, permitiéndote ampliar o editar imágenes con prompts de texto sin salir de la app.',
        ar: 'نعم، يشغّل Firefly ميزتي "التعبئة التوليدية" و"التوسيع التوليدي" مباشرة داخل Photoshop، مما يتيح لك توسيع أو تحرير الصور باستخدام أوامر نصية دون الخروج من التطبيق.',
      },
    },
  ],
  'canva-ai': [
    {
      question: {
        en: 'Is Canva AI free?',
        fr: 'Canva AI est-il gratuit ?',
        es: '¿Es Canva AI gratis?',
        ar: 'هل Canva AI مجاني؟',
      },
      answer: {
        en: 'Canva\'s free plan includes limited access to AI features like Magic Write and basic background removal. Canva Pro unlocks Magic Studio tools with much higher usage limits.',
        fr: 'Le plan gratuit de Canva inclut un accès limité aux fonctionnalités IA comme Magic Write et la suppression basique d\'arrière-plan. Canva Pro débloque les outils Magic Studio avec des limites d\'utilisation bien plus élevées.',
        es: 'El plan gratuito de Canva incluye acceso limitado a funciones de IA como Magic Write y la eliminación básica de fondo. Canva Pro desbloquea las herramientas Magic Studio con límites de uso mucho más altos.',
        ar: 'تشمل خطة Canva المجانية وصولاً محدوداً لميزات الذكاء الاصطناعي مثل Magic Write وإزالة الخلفية الأساسية. تفتح خطة Canva Pro أدوات Magic Studio بحدود استخدام أعلى بكثير.',
      },
    },
    {
      question: {
        en: 'What AI tools does Canva include?',
        fr: 'Quels outils IA Canva inclut-il ?',
        es: '¿Qué herramientas de IA incluye Canva?',
        ar: 'ما أدوات الذكاء الاصطناعي التي يتضمنها Canva؟',
      },
      answer: {
        en: 'Canva\'s Magic Studio includes Magic Write (text generation), Magic Design (auto-layout from a prompt or image), Magic Eraser, Background Remover, and an AI image generator called Magic Media.',
        fr: 'Le Magic Studio de Canva inclut Magic Write (génération de texte), Magic Design (mise en page automatique à partir d\'un prompt ou d\'une image), Magic Eraser, Background Remover, et un générateur d\'images IA appelé Magic Media.',
        es: 'Magic Studio de Canva incluye Magic Write (generación de texto), Magic Design (diseño automático a partir de un prompt o imagen), Magic Eraser, Background Remover, y un generador de imágenes de IA llamado Magic Media.',
        ar: 'يتضمن Magic Studio في Canva ميزة Magic Write (توليد النصوص)، وMagic Design (تصميم تلقائي من أمر أو صورة)، وMagic Eraser، وأداة إزالة الخلفية، ومولد صور بالذكاء الاصطناعي يُسمى Magic Media.',
      },
    },
    {
      question: {
        en: 'Is Canva AI good for non-designers?',
        fr: 'Canva AI est-il adapté aux non-designers ?',
        es: '¿Es Canva AI bueno para no diseñadores?',
        ar: 'هل Canva AI مناسب لغير المصممين؟',
      },
      answer: {
        en: 'Yes, Canva AI is specifically designed to let anyone create professional-looking graphics, presentations, and videos without design experience, by describing what they want in plain language.',
        fr: 'Oui, Canva AI est spécifiquement conçu pour permettre à n\'importe qui de créer des graphiques, présentations et vidéos d\'aspect professionnel sans expérience en design, en décrivant simplement ce qu\'il souhaite.',
        es: 'Sí, Canva AI está específicamente diseñado para que cualquiera pueda crear gráficos, presentaciones y videos de aspecto profesional sin experiencia en diseño, simplemente describiendo lo que quiere.',
        ar: 'نعم، صُمم Canva AI خصيصاً لتمكين أي شخص من إنشاء رسومات وعروض تقديمية وفيديوهات بمظهر محترف دون خبرة تصميم، عبر وصف ما يريده بلغة بسيطة.',
      },
    },
  ],
  'bolt-new': [
    {
      question: {
        en: 'Is Bolt.new free?',
        fr: 'Bolt.new est-il gratuit ?',
        es: '¿Es Bolt.new gratis?',
        ar: 'هل Bolt.new مجاني؟',
      },
      answer: {
        en: 'Bolt.new offers a free tier with a limited number of daily AI tokens. Paid plans provide more tokens for building larger or more complex applications.',
        fr: 'Bolt.new propose un palier gratuit avec un nombre limité de tokens IA quotidiens. Les plans payants offrent plus de tokens pour créer des applications plus grandes ou complexes.',
        es: 'Bolt.new ofrece un nivel gratuito con un número limitado de tokens de IA diarios. Los planes de pago proporcionan más tokens para crear aplicaciones más grandes o complejas.',
        ar: 'يوفر Bolt.new مستوى مجانياً بعدد محدود من رموز الذكاء الاصطناعي يومياً. تمنح الخطط المدفوعة رموزاً أكثر لبناء تطبيقات أكبر أو أكثر تعقيداً.',
      },
    },
    {
      question: {
        en: 'What can Bolt.new build?',
        fr: 'Que peut construire Bolt.new ?',
        es: '¿Qué puede construir Bolt.new?',
        ar: 'ما الذي يمكن لـ Bolt.new بناؤه؟',
      },
      answer: {
        en: 'Bolt.new can generate full-stack web apps from a text description — writing the code, installing dependencies, and running a live preview in the browser, all in one place.',
        fr: 'Bolt.new peut générer des applications web complètes à partir d\'une description textuelle — écrire le code, installer les dépendances et lancer un aperçu en direct dans le navigateur, tout en un seul endroit.',
        es: 'Bolt.new puede generar aplicaciones web completas a partir de una descripción de texto — escribiendo el código, instalando dependencias y ejecutando una vista previa en vivo en el navegador, todo en un solo lugar.',
        ar: 'يمكن لـ Bolt.new توليد تطبيقات ويب كاملة من وصف نصي — كتابة الكود، تثبيت التبعيات، وتشغيل معاينة مباشرة في المتصفح، كل ذلك في مكان واحد.',
      },
    },
    {
      question: {
        en: 'Do I need to know how to code to use Bolt.new?',
        fr: 'Faut-il savoir coder pour utiliser Bolt.new ?',
        es: '¿Necesito saber programar para usar Bolt.new?',
        ar: 'هل أحتاج إلى معرفة البرمجة لاستخدام Bolt.new؟',
      },
      answer: {
        en: 'No — Bolt.new is designed so non-developers can build working apps by describing them in natural language, though basic coding knowledge helps when refining the generated code.',
        fr: 'Non — Bolt.new est conçu pour permettre aux non-développeurs de créer des applications fonctionnelles en les décrivant en langage naturel, bien que des connaissances de base en code aident pour affiner le code généré.',
        es: 'No — Bolt.new está diseñado para que personas sin experiencia en programación puedan crear aplicaciones funcionales describiéndolas en lenguaje natural, aunque conocimientos básicos de código ayudan a refinar el código generado.',
        ar: 'لا — صُمم Bolt.new لتمكين غير المطورين من بناء تطبيقات عاملة عبر وصفها بلغة طبيعية، مع أن المعرفة الأساسية بالبرمجة تساعد في تحسين الكود المُولَّد.',
      },
    },
  ],
  'v0-dev': [
    {
      question: {
        en: 'Is v0 by Vercel free?',
        fr: 'v0 de Vercel est-il gratuit ?',
        es: '¿Es v0 de Vercel gratis?',
        ar: 'هل v0 من Vercel مجاني؟',
      },
      answer: {
        en: 'v0 has a free tier with limited monthly generations. Paid plans increase the number of generations and add team features for collaborative UI development.',
        fr: 'v0 propose un palier gratuit avec un nombre limité de générations mensuelles. Les plans payants augmentent le nombre de générations et ajoutent des fonctionnalités d\'équipe pour le développement UI collaboratif.',
        es: 'v0 tiene un nivel gratuito con generaciones mensuales limitadas. Los planes de pago aumentan el número de generaciones y añaden funciones de equipo para el desarrollo de UI colaborativo.',
        ar: 'يوفر v0 مستوى مجانياً بعدد محدود من التوليدات شهرياً. تزيد الخطط المدفوعة عدد التوليدات وتضيف ميزات الفريق لتطوير واجهات المستخدم بشكل تعاوني.',
      },
    },
    {
      question: {
        en: 'What does v0 generate?',
        fr: 'Que génère v0 ?',
        es: '¿Qué genera v0?',
        ar: 'ما الذي يولّده v0؟',
      },
      answer: {
        en: 'v0 generates React UI components and full pages built with shadcn/ui and Tailwind CSS from a text prompt or image, with copy-paste-ready code for your Next.js project.',
        fr: 'v0 génère des composants UI React et des pages complètes construits avec shadcn/ui et Tailwind CSS à partir d\'un prompt texte ou d\'une image, avec un code prêt à copier-coller pour votre projet Next.js.',
        es: 'v0 genera componentes de UI en React y páginas completas construidos con shadcn/ui y Tailwind CSS a partir de un prompt de texto o imagen, con código listo para copiar y pegar en tu proyecto Next.js.',
        ar: 'يولّد v0 مكونات واجهة مستخدم بـ React وصفحات كاملة مبنية بـ shadcn/ui وTailwind CSS من أمر نصي أو صورة، مع كود جاهز للنسخ واللصق في مشروع Next.js الخاص بك.',
      },
    },
    {
      question: {
        en: 'Can v0 use an image or design as a starting point?',
        fr: 'v0 peut-il utiliser une image ou un design comme point de départ ?',
        es: '¿Puede v0 usar una imagen o diseño como punto de partida?',
        ar: 'هل يمكن لـ v0 استخدام صورة أو تصميم كنقطة انطلاق؟',
      },
      answer: {
        en: 'Yes, you can upload a screenshot or design mockup, and v0 will attempt to recreate it as a working React component, which you can then refine through chat.',
        fr: 'Oui, vous pouvez télécharger une capture d\'écran ou une maquette de design, et v0 essaiera de la recréer en composant React fonctionnel, que vous pourrez ensuite affiner via le chat.',
        es: 'Sí, puedes subir una captura de pantalla o un mockup de diseño, y v0 intentará recrearlo como un componente React funcional, que luego podrás refinar mediante el chat.',
        ar: 'نعم، يمكنك رفع لقطة شاشة أو نموذج تصميم، وسيحاول v0 إعادة إنشائه كمكون React يعمل، والذي يمكنك تحسينه بعد ذلك عبر الدردشة.',
      },
    },
  ],
  windsurf: [
    {
      question: {
        en: 'Is Windsurf free?',
        fr: 'Windsurf est-il gratuit ?',
        es: '¿Es Windsurf gratis?',
        ar: 'هل Windsurf مجاني؟',
      },
      answer: {
        en: 'Windsurf has a free plan with limited AI credits per month. The paid Pro plan increases the credit allowance for heavier daily use.',
        fr: 'Windsurf propose un plan gratuit avec un nombre limité de crédits IA par mois. Le plan Pro payant augmente l\'allocation de crédits pour un usage quotidien plus intensif.',
        es: 'Windsurf tiene un plan gratuito con créditos de IA limitados al mes. El plan Pro de pago aumenta la asignación de créditos para un uso diario más intensivo.',
        ar: 'يوفر Windsurf خطة مجانية بأرصدة ذكاء اصطناعي محدودة شهرياً. تزيد خطة Pro المدفوعة من الأرصدة المخصصة للاستخدام اليومي المكثف.',
      },
    },
    {
      question: {
        en: 'What is Windsurf\'s Cascade feature?',
        fr: 'Qu\'est-ce que la fonctionnalité Cascade de Windsurf ?',
        es: '¿Qué es la función Cascade de Windsurf?',
        ar: 'ما هي ميزة Cascade في Windsurf؟',
      },
      answer: {
        en: 'Cascade is Windsurf\'s AI agent that understands your whole codebase context, can make multi-file edits, run terminal commands, and fix errors automatically as you work.',
        fr: 'Cascade est l\'agent IA de Windsurf qui comprend le contexte de toute votre base de code, peut effectuer des modifications sur plusieurs fichiers, exécuter des commandes terminal et corriger automatiquement les erreurs pendant votre travail.',
        es: 'Cascade es el agente de IA de Windsurf que entiende el contexto de toda tu base de código, puede hacer ediciones en varios archivos, ejecutar comandos de terminal y corregir errores automáticamente mientras trabajas.',
        ar: 'Cascade هو وكيل الذكاء الاصطناعي في Windsurf الذي يفهم سياق قاعدة الكود بالكامل، ويمكنه إجراء تعديلات على ملفات متعددة، وتشغيل أوامر الطرفية، وتصحيح الأخطاء تلقائياً أثناء عملك.',
      },
    },
    {
      question: {
        en: 'Is Windsurf based on VS Code?',
        fr: 'Windsurf est-il basé sur VS Code ?',
        es: '¿Está Windsurf basado en VS Code?',
        ar: 'هل يعتمد Windsurf على VS Code؟',
      },
      answer: {
        en: 'Yes, Windsurf is a standalone IDE built on the same open-source foundation as VS Code, so it supports many familiar extensions, themes, and keyboard shortcuts.',
        fr: 'Oui, Windsurf est un IDE autonome construit sur la même base open-source que VS Code, il prend donc en charge de nombreuses extensions, thèmes et raccourcis clavier familiers.',
        es: 'Sí, Windsurf es un IDE independiente construido sobre la misma base de código abierto que VS Code, por lo que admite muchas extensiones, temas y combinaciones de teclas familiares.',
        ar: 'نعم، Windsurf هو بيئة تطوير مستقلة مبنية على نفس الأساس مفتوح المصدر لـ VS Code، لذا فهو يدعم العديد من الإضافات والثيمات واختصارات لوحة المفاتيح المألوفة.',
      },
    },
  ],
  'runway-gen3': [
    {
      question: {
        en: 'Is Runway Gen-3 free?',
        fr: 'Runway Gen-3 est-il gratuit ?',
        es: '¿Es Runway Gen-3 gratis?',
        ar: 'هل Runway Gen-3 مجاني؟',
      },
      answer: {
        en: 'Runway offers a free plan with a limited number of one-time credits for generating short video clips. Paid plans provide monthly credits for regular use.',
        fr: 'Runway propose un plan gratuit avec un nombre limité de crédits ponctuels pour générer de courts clips vidéo. Les plans payants offrent des crédits mensuels pour un usage régulier.',
        es: 'Runway ofrece un plan gratuito con un número limitado de créditos únicos para generar clips de video cortos. Los planes de pago proporcionan créditos mensuales para uso regular.',
        ar: 'يوفر Runway خطة مجانية بعدد محدود من الأرصدة لمرة واحدة لتوليد مقاطع فيديو قصيرة. تمنح الخطط المدفوعة أرصدة شهرية للاستخدام المنتظم.',
      },
    },
    {
      question: {
        en: 'What can Runway Gen-3 generate?',
        fr: 'Que peut générer Runway Gen-3 ?',
        es: '¿Qué puede generar Runway Gen-3?',
        ar: 'ما الذي يمكن لـ Runway Gen-3 توليده؟',
      },
      answer: {
        en: 'Gen-3 generates realistic short video clips from text prompts or a starting image, with control over camera movement, style, and motion — popular for film pre-visualization and social content.',
        fr: 'Gen-3 génère des courts clips vidéo réalistes à partir de prompts texte ou d\'une image de départ, avec un contrôle sur le mouvement de caméra, le style et le mouvement — populaire pour la pré-visualisation cinématographique et le contenu social.',
        es: 'Gen-3 genera clips de video cortos y realistas a partir de prompts de texto o una imagen inicial, con control sobre el movimiento de cámara, estilo y movimiento — popular para la previsualización cinematográfica y contenido social.',
        ar: 'يولّد Gen-3 مقاطع فيديو قصيرة واقعية من أوامر نصية أو صورة بداية، مع التحكم في حركة الكاميرا والنمط والحركة — وهو شائع للمعاينة المسبقة السينمائية والمحتوى الاجتماعي.',
      },
    },
    {
      question: {
        en: 'How long are the videos Runway can create?',
        fr: 'Quelle est la durée des vidéos que Runway peut créer ?',
        es: '¿Cuánto duran los videos que Runway puede crear?',
        ar: 'ما هي مدة الفيديوهات التي يمكن لـ Runway إنشاؤها؟',
      },
      answer: {
        en: 'Generated clips are typically a few seconds long (around 5-10 seconds per generation), which can then be extended or stitched together for longer sequences.',
        fr: 'Les clips générés durent généralement quelques secondes (environ 5 à 10 secondes par génération), qui peuvent ensuite être étendus ou assemblés pour des séquences plus longues.',
        es: 'Los clips generados duran típicamente unos segundos (alrededor de 5-10 segundos por generación), que luego se pueden extender o unir para secuencias más largas.',
        ar: 'تكون المقاطع المُولَّدة عادة بطول بضع ثوانٍ (حوالي 5-10 ثوانٍ لكل توليد)، والتي يمكن بعد ذلك تمديدها أو ربطها لتكوين تسلسلات أطول.',
      },
    },
  ],
  sora: [
    {
      question: {
        en: 'Is Sora free?',
        fr: 'Sora est-il gratuit ?',
        es: '¿Es Sora gratis?',
        ar: 'هل Sora مجاني؟',
      },
      answer: {
        en: 'Sora is available to ChatGPT Plus and Pro subscribers, with Pro plans offering longer, higher-resolution videos and more monthly generations.',
        fr: 'Sora est disponible pour les abonnés ChatGPT Plus et Pro, les plans Pro offrant des vidéos plus longues, en meilleure résolution et plus de générations mensuelles.',
        es: 'Sora está disponible para los suscriptores de ChatGPT Plus y Pro, con los planes Pro ofreciendo videos más largos, de mayor resolución y más generaciones mensuales.',
        ar: 'يتوفر Sora لمشتركي ChatGPT Plus وPro، وتوفر خطط Pro فيديوهات أطول وبدقة أعلى وعدداً أكبر من التوليدات شهرياً.',
      },
    },
    {
      question: {
        en: 'What can Sora create?',
        fr: 'Que peut créer Sora ?',
        es: '¿Qué puede crear Sora?',
        ar: 'ما الذي يمكن لـ Sora إنشاؤه؟',
      },
      answer: {
        en: 'Sora generates realistic and imaginative video clips from text descriptions, and can also extend existing videos, fill in missing frames, or generate variations of a clip.',
        fr: 'Sora génère des clips vidéo réalistes et imaginatifs à partir de descriptions textuelles, et peut aussi étendre des vidéos existantes, compléter des images manquantes ou générer des variantes d\'un clip.',
        es: 'Sora genera clips de video realistas e imaginativos a partir de descripciones de texto, y también puede extender videos existentes, completar fotogramas faltantes o generar variaciones de un clip.',
        ar: 'يولّد Sora مقاطع فيديو واقعية وخيالية من أوصاف نصية، ويمكنه أيضاً تمديد فيديوهات موجودة، أو ملء الإطارات المفقودة، أو توليد اختلافات لمقطع ما.',
      },
    },
    {
      question: {
        en: 'Are Sora videos watermarked?',
        fr: 'Les vidéos Sora sont-elles filigranées ?',
        es: '¿Los videos de Sora tienen marca de agua?',
        ar: 'هل تحمل فيديوهات Sora علامة مائية؟',
      },
      answer: {
        en: 'Yes, videos generated by Sora include a visible watermark and embedded metadata (C2PA) to indicate they were AI-generated, which helps with transparency online.',
        fr: 'Oui, les vidéos générées par Sora incluent un filigrane visible et des métadonnées intégrées (C2PA) indiquant qu\'elles ont été générées par IA, ce qui favorise la transparence en ligne.',
        es: 'Sí, los videos generados por Sora incluyen una marca de agua visible y metadatos incrustados (C2PA) que indican que fueron generados por IA, lo que ayuda a la transparencia en línea.',
        ar: 'نعم، تتضمن الفيديوهات التي تولّدها Sora علامة مائية مرئية وبيانات وصفية مدمجة (C2PA) للإشارة إلى أنها مُولَّدة بالذكاء الاصطناعي، مما يساعد في الشفافية على الإنترنت.',
      },
    },
  ],
  heygen: [
    {
      question: {
        en: 'Is HeyGen free?',
        fr: 'HeyGen est-il gratuit ?',
        es: '¿Es HeyGen gratis?',
        ar: 'هل HeyGen مجاني؟',
      },
      answer: {
        en: 'HeyGen offers a free plan with a small amount of monthly video credits and a watermark. Paid plans remove the watermark and increase video length and credit limits.',
        fr: 'HeyGen propose un plan gratuit avec une petite quantité de crédits vidéo mensuels et un filigrane. Les plans payants suppriment le filigrane et augmentent la durée des vidéos et les limites de crédits.',
        es: 'HeyGen ofrece un plan gratuito con una pequeña cantidad de créditos de video mensuales y marca de agua. Los planes de pago eliminan la marca de agua y aumentan la duración del video y los límites de créditos.',
        ar: 'يوفر HeyGen خطة مجانية بكمية صغيرة من أرصدة الفيديو شهرياً مع علامة مائية. تزيل الخطط المدفوعة العلامة المائية وتزيد مدة الفيديو وحدود الأرصدة.',
      },
    },
    {
      question: {
        en: 'What is HeyGen used for?',
        fr: 'À quoi sert HeyGen ?',
        es: '¿Para qué se usa HeyGen?',
        ar: 'لماذا يُستخدم HeyGen؟',
      },
      answer: {
        en: 'HeyGen creates videos featuring realistic AI avatars that speak your script in dozens of languages, commonly used for training videos, marketing, and personalized sales outreach.',
        fr: 'HeyGen crée des vidéos avec des avatars IA réalistes qui prononcent votre script dans des dizaines de langues, couramment utilisées pour des vidéos de formation, le marketing et la prospection commerciale personnalisée.',
        es: 'HeyGen crea videos con avatares de IA realistas que recitan tu guion en decenas de idiomas, comúnmente usados para videos de formación, marketing y prospección de ventas personalizada.',
        ar: 'يُنشئ HeyGen فيديوهات بصور رمزية واقعية بالذكاء الاصطناعي تتحدث بنصك بعشرات اللغات، وتُستخدم بشكل شائع لفيديوهات التدريب والتسويق والتواصل البيعي الشخصي.',
      },
    },
    {
      question: {
        en: 'Can I create a custom avatar with HeyGen?',
        fr: 'Peut-on créer un avatar personnalisé avec HeyGen ?',
        es: '¿Puedo crear un avatar personalizado con HeyGen?',
        ar: 'هل يمكن إنشاء صورة رمزية مخصصة مع HeyGen؟',
      },
      answer: {
        en: 'Yes, paid plans let you create a digital twin avatar from a short video of yourself, which can then read any script in your likeness and voice.',
        fr: 'Oui, les plans payants permettent de créer un avatar jumeau numérique à partir d\'une courte vidéo de vous-même, qui peut ensuite lire n\'importe quel script avec votre apparence et votre voix.',
        es: 'Sí, los planes de pago permiten crear un avatar gemelo digital a partir de un breve video de ti mismo, que luego puede leer cualquier guion con tu apariencia y voz.',
        ar: 'نعم، تتيح الخطط المدفوعة إنشاء صورة رمزية توأم رقمي من فيديو قصير لك، والتي يمكنها بعد ذلك قراءة أي نص بمظهرك وصوتك.',
      },
    },
  ],
  elevenlabs: [
    {
      question: {
        en: 'Is ElevenLabs free?',
        fr: 'ElevenLabs est-il gratuit ?',
        es: '¿Es ElevenLabs gratis?',
        ar: 'هل ElevenLabs مجاني؟',
      },
      answer: {
        en: 'ElevenLabs has a free tier with a limited monthly character count for text-to-speech. Paid plans increase the character limit and unlock voice cloning and commercial licensing.',
        fr: 'ElevenLabs propose un palier gratuit avec un nombre limité de caractères mensuels pour la synthèse vocale. Les plans payants augmentent la limite de caractères et débloquent le clonage vocal et la licence commerciale.',
        es: 'ElevenLabs tiene un nivel gratuito con un límite mensual de caracteres para texto a voz. Los planes de pago aumentan el límite de caracteres y desbloquean clonación de voz y licencia comercial.',
        ar: 'يوفر ElevenLabs مستوى مجانياً بعدد محدود من الأحرف شهرياً لتحويل النص إلى كلام. تزيد الخطط المدفوعة حد الأحرف وتفتح استنساخ الصوت والترخيص التجاري.',
      },
    },
    {
      question: {
        en: 'How realistic are ElevenLabs voices?',
        fr: 'À quel point les voix ElevenLabs sont-elles réalistes ?',
        es: '¿Qué tan realistas son las voces de ElevenLabs?',
        ar: 'ما مدى واقعية أصوات ElevenLabs؟',
      },
      answer: {
        en: 'ElevenLabs is widely regarded as one of the most natural-sounding text-to-speech engines, with emotional tone, pacing, and emphasis that closely resemble human speech in dozens of languages.',
        fr: 'ElevenLabs est largement considéré comme l\'un des moteurs de synthèse vocale les plus naturels, avec un ton émotionnel, un rythme et une emphase proches de la parole humaine dans des dizaines de langues.',
        es: 'ElevenLabs es ampliamente considerado uno de los motores de texto a voz más naturales, con tono emocional, ritmo y énfasis muy similares al habla humana en decenas de idiomas.',
        ar: 'يُعتبر ElevenLabs على نطاق واسع من أكثر محركات تحويل النص إلى كلام طبيعية، بنبرة عاطفية وإيقاع وتأكيد يشبه كلام الإنسان بعشرات اللغات.',
      },
    },
    {
      question: {
        en: 'Can ElevenLabs clone my voice?',
        fr: 'ElevenLabs peut-il cloner ma voix ?',
        es: '¿Puede ElevenLabs clonar mi voz?',
        ar: 'هل يمكن لـ ElevenLabs استنساخ صوتي؟',
      },
      answer: {
        en: 'Yes, with a short audio sample ElevenLabs can create an "instant voice clone," and professional voice cloning offers an even higher-fidelity replica for paid plans.',
        fr: 'Oui, avec un court échantillon audio, ElevenLabs peut créer un "clone vocal instantané", et le clonage vocal professionnel offre une réplique encore plus fidèle pour les plans payants.',
        es: 'Sí, con una breve muestra de audio ElevenLabs puede crear un "clon de voz instantáneo", y la clonación de voz profesional ofrece una réplica de mayor fidelidad para planes de pago.',
        ar: 'نعم، بعينة صوتية قصيرة يمكن لـ ElevenLabs إنشاء "نسخة صوتية فورية"، ويقدم استنساخ الصوت الاحترافي نسخة أكثر دقة للخطط المدفوعة.',
      },
    },
  ],
  suno: [
    {
      question: {
        en: 'Is Suno free?',
        fr: 'Suno est-il gratuit ?',
        es: '¿Es Suno gratis?',
        ar: 'هل Suno مجاني؟',
      },
      answer: {
        en: 'Yes, Suno offers a free plan with a limited number of song generations per day. Paid plans increase generation limits and grant commercial usage rights.',
        fr: 'Oui, Suno propose un plan gratuit avec un nombre limité de générations de morceaux par jour. Les plans payants augmentent les limites de génération et accordent des droits d\'usage commercial.',
        es: 'Sí, Suno ofrece un plan gratuito con un número limitado de generaciones de canciones al día. Los planes de pago aumentan los límites de generación y otorgan derechos de uso comercial.',
        ar: 'نعم، يوفر Suno خطة مجانية بعدد محدود من توليدات الأغاني يومياً. تزيد الخطط المدفوعة حدود التوليد وتمنح حقوق الاستخدام التجاري.',
      },
    },
    {
      question: {
        en: 'What can Suno create?',
        fr: 'Que peut créer Suno ?',
        es: '¿Qué puede crear Suno?',
        ar: 'ما الذي يمكن لـ Suno إنشاؤه؟',
      },
      answer: {
        en: 'Suno generates full songs — including lyrics, vocals, and instrumentation — from a text prompt describing genre, mood, or topic, in a couple of minutes.',
        fr: 'Suno génère des chansons complètes — paroles, voix et instrumentation incluses — à partir d\'un prompt texte décrivant le genre, l\'ambiance ou le sujet, en quelques minutes.',
        es: 'Suno genera canciones completas — incluyendo letras, voces e instrumentación — a partir de un prompt de texto que describe el género, ambiente o tema, en un par de minutos.',
        ar: 'يولّد Suno أغاني كاملة — تشمل الكلمات والغناء والموسيقى — من أمر نصي يصف النوع أو المزاج أو الموضوع، في غضون دقيقتين.',
      },
    },
    {
      question: {
        en: 'Who owns the songs generated by Suno?',
        fr: 'À qui appartiennent les chansons générées par Suno ?',
        es: '¿De quién son las canciones generadas por Suno?',
        ar: 'لمن تعود ملكية الأغاني التي تولّدها Suno؟',
      },
      answer: {
        en: 'Ownership and commercial rights depend on your subscription tier — paid plans generally grant broader rights to use and monetize the songs you create, so check the current terms before publishing.',
        fr: 'La propriété et les droits commerciaux dépendent de votre niveau d\'abonnement — les plans payants accordent généralement des droits plus larges pour utiliser et monétiser les chansons créées, vérifiez donc les conditions actuelles avant publication.',
        es: 'La propiedad y los derechos comerciales dependen de tu nivel de suscripción — los planes de pago generalmente otorgan derechos más amplios para usar y monetizar las canciones que creas, así que revisa los términos actuales antes de publicar.',
        ar: 'تعتمد الملكية والحقوق التجارية على مستوى اشتراكك — تمنح الخطط المدفوعة عموماً حقوقاً أوسع لاستخدام وتحقيق الدخل من الأغاني التي تنشئها، لذا تحقق من الشروط الحالية قبل النشر.',
      },
    },
  ],
  'microsoft-copilot': [
    {
      question: {
        en: 'Is Microsoft Copilot free?',
        fr: 'Microsoft Copilot est-il gratuit ?',
        es: '¿Es Microsoft Copilot gratis?',
        ar: 'هل Microsoft Copilot مجاني؟',
      },
      answer: {
        en: 'Yes, Copilot is free to use in the Edge browser and Windows. Copilot Pro adds priority access and integration with Microsoft 365 apps like Word, Excel, and Outlook.',
        fr: 'Oui, Copilot est gratuit dans le navigateur Edge et Windows. Copilot Pro ajoute un accès prioritaire et l\'intégration avec les applications Microsoft 365 comme Word, Excel et Outlook.',
        es: 'Sí, Copilot es gratuito en el navegador Edge y Windows. Copilot Pro añade acceso prioritario e integración con las apps de Microsoft 365 como Word, Excel y Outlook.',
        ar: 'نعم، Copilot مجاني للاستخدام في متصفح Edge وWindows. تضيف نسخة Copilot Pro أولوية الوصول والتكامل مع تطبيقات Microsoft 365 مثل Word وExcel وOutlook.',
      },
    },
    {
      question: {
        en: 'Where can I use Microsoft Copilot?',
        fr: 'Où peut-on utiliser Microsoft Copilot ?',
        es: '¿Dónde puedo usar Microsoft Copilot?',
        ar: 'أين يمكن استخدام Microsoft Copilot؟',
      },
      answer: {
        en: 'Copilot is built into Windows 11, the Edge browser sidebar, Microsoft 365 apps, and is also available as a standalone web and mobile app.',
        fr: 'Copilot est intégré à Windows 11, à la barre latérale du navigateur Edge, aux applications Microsoft 365, et disponible aussi en tant qu\'application web et mobile autonome.',
        es: 'Copilot está integrado en Windows 11, la barra lateral del navegador Edge, las apps de Microsoft 365, y también está disponible como app web y móvil independiente.',
        ar: 'يأتي Copilot مدمجاً في Windows 11 وشريط جانبي في متصفح Edge وتطبيقات Microsoft 365، وهو متاح أيضاً كتطبيق ويب وهاتف مستقل.',
      },
    },
    {
      question: {
        en: 'Can Copilot work with my Word and Excel files?',
        fr: 'Copilot peut-il fonctionner avec mes fichiers Word et Excel ?',
        es: '¿Puede Copilot trabajar con mis archivos de Word y Excel?',
        ar: 'هل يمكن لـ Copilot العمل مع ملفات Word وExcel الخاصة بي؟',
      },
      answer: {
        en: 'With a Microsoft 365 Copilot subscription, Copilot can draft documents in Word, build formulas and analyze data in Excel, and summarize emails in Outlook directly from your content.',
        fr: 'Avec un abonnement Microsoft 365 Copilot, Copilot peut rédiger des documents dans Word, créer des formules et analyser des données dans Excel, et résumer des emails dans Outlook directement à partir de votre contenu.',
        es: 'Con una suscripción a Microsoft 365 Copilot, Copilot puede redactar documentos en Word, crear fórmulas y analizar datos en Excel, y resumir correos en Outlook directamente desde tu contenido.',
        ar: 'مع اشتراك Microsoft 365 Copilot، يمكن لـ Copilot كتابة المستندات في Word، وبناء الصيغ وتحليل البيانات في Excel، وتلخيص رسائل البريد في Outlook مباشرة من محتواك.',
      },
    },
  ],
};
