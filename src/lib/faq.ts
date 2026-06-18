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
  writesonic: [
    {
      question: {
        en: 'Is Writesonic free?',
        fr: 'Writesonic est-il gratuit ?',
        es: '¿Es Writesonic gratis?',
        ar: 'هل Writesonic مجاني؟',
      },
      answer: {
        en: 'Writesonic offers a free trial with limited words. Paid plans unlock unlimited words on some tiers, plus access to AI article writers, AI chat, and SEO tools.',
        fr: 'Writesonic propose un essai gratuit avec un nombre limité de mots. Les plans payants débloquent des mots illimités sur certains paliers, ainsi que l\'accès aux rédacteurs d\'articles IA, au chat IA et aux outils SEO.',
        es: 'Writesonic ofrece una prueba gratuita con palabras limitadas. Los planes de pago desbloquean palabras ilimitadas en algunos niveles, además del acceso a redactores de artículos con IA, chat de IA y herramientas SEO.',
        ar: 'يوفر Writesonic تجربة مجانية بعدد كلمات محدود. تفتح الخطط المدفوعة كلمات غير محدودة في بعض المستويات، بالإضافة إلى الوصول إلى كاتب المقالات بالذكاء الاصطناعي ودردشة الذكاء الاصطناعي وأدوات SEO.',
      },
    },
    {
      question: {
        en: 'What is Writesonic best for?',
        fr: 'À quoi Writesonic sert-il le mieux ?',
        es: '¿Para qué es mejor Writesonic?',
        ar: 'لماذا يُستخدم Writesonic بشكل أفضل؟',
      },
      answer: {
        en: 'Writesonic specializes in long-form SEO articles, with a workflow that researches keywords, builds an outline, and writes a full optimized blog post in one pass.',
        fr: 'Writesonic se spécialise dans les articles SEO longs, avec un workflow qui recherche les mots-clés, construit un plan et rédige un article de blog complet et optimisé en une seule fois.',
        es: 'Writesonic se especializa en artículos SEO largos, con un flujo de trabajo que investiga palabras clave, crea un esquema y redacta un post de blog completo y optimizado de una vez.',
        ar: 'يتخصص Writesonic في المقالات الطويلة المحسّنة لمحركات البحث، بسير عمل يبحث عن الكلمات المفتاحية، يبني مخططاً، ويكتب مقالة مدونة كاملة ومحسّنة دفعة واحدة.',
      },
    },
    {
      question: {
        en: 'Does Writesonic check for plagiarism?',
        fr: 'Writesonic vérifie-t-il le plagiat ?',
        es: '¿Writesonic verifica el plagio?',
        ar: 'هل يتحقق Writesonic من الاستلال؟',
      },
      answer: {
        en: 'Yes, higher-tier Writesonic plans include a built-in plagiarism checker so you can verify originality before publishing AI-generated content.',
        fr: 'Oui, les plans Writesonic supérieurs incluent un vérificateur de plagiat intégré pour s\'assurer de l\'originalité avant de publier du contenu généré par IA.',
        es: 'Sí, los planes superiores de Writesonic incluyen un verificador de plagio integrado para confirmar la originalidad antes de publicar contenido generado por IA.',
        ar: 'نعم، تتضمن خطط Writesonic الأعلى فاحص استلال مدمجاً للتحقق من الأصالة قبل نشر المحتوى المُولَّد بالذكاء الاصطناعي.',
      },
    },
  ],
  deepl: [
    {
      question: {
        en: 'Is DeepL free?',
        fr: 'DeepL est-il gratuit ?',
        es: '¿Es DeepL gratis?',
        ar: 'هل DeepL مجاني؟',
      },
      answer: {
        en: 'Yes, DeepL has a free web translator with a character limit per request. DeepL Pro removes the limit, allows document translation, and offers an API for developers.',
        fr: 'Oui, DeepL propose un traducteur web gratuit avec une limite de caractères par requête. DeepL Pro supprime cette limite, permet la traduction de documents et offre une API pour les développeurs.',
        es: 'Sí, DeepL tiene un traductor web gratuito con un límite de caracteres por solicitud. DeepL Pro elimina el límite, permite traducir documentos y ofrece una API para desarrolladores.',
        ar: 'نعم، يوفر DeepL مترجماً مجانياً على الويب بحد أحرف لكل طلب. تزيل نسخة DeepL Pro هذا الحد، وتتيح ترجمة المستندات، وتوفر واجهة برمجة تطبيقات للمطورين.',
      },
    },
    {
      question: {
        en: 'Is DeepL more accurate than Google Translate?',
        fr: 'DeepL est-il plus précis que Google Traduction ?',
        es: '¿Es DeepL más preciso que Google Translate?',
        ar: 'هل DeepL أكثر دقة من Google Translate؟',
      },
      answer: {
        en: 'DeepL is widely praised for producing more natural, context-aware translations, especially for European languages, though Google Translate supports more languages overall.',
        fr: 'DeepL est largement reconnu pour produire des traductions plus naturelles et contextuelles, en particulier pour les langues européennes, bien que Google Traduction prenne en charge davantage de langues au total.',
        es: 'DeepL es muy elogiado por producir traducciones más naturales y contextuales, especialmente para idiomas europeos, aunque Google Translate admite más idiomas en general.',
        ar: 'يُحظى DeepL بتقدير واسع لتقديم ترجمات أكثر طبيعية ووعياً بالسياق، خاصة للغات الأوروبية، على الرغم من أن Google Translate يدعم عدداً أكبر من اللغات بشكل عام.',
      },
    },
    {
      question: {
        en: 'Can DeepL translate documents?',
        fr: 'DeepL peut-il traduire des documents ?',
        es: '¿Puede DeepL traducir documentos?',
        ar: 'هل يمكن لـ DeepL ترجمة المستندات؟',
      },
      answer: {
        en: 'Yes, DeepL can translate Word, PowerPoint, and PDF files while preserving the original formatting, available with usage limits on the free plan and higher limits on Pro.',
        fr: 'Oui, DeepL peut traduire des fichiers Word, PowerPoint et PDF en préservant la mise en forme d\'origine, avec des limites d\'utilisation sur le plan gratuit et des limites plus élevées sur Pro.',
        es: 'Sí, DeepL puede traducir archivos de Word, PowerPoint y PDF conservando el formato original, con límites de uso en el plan gratuito y límites más altos en Pro.',
        ar: 'نعم، يمكن لـ DeepL ترجمة ملفات Word وPowerPoint وPDF مع الحفاظ على التنسيق الأصلي، بحدود استخدام في الخطة المجانية وحدود أعلى في Pro.',
      },
    },
  ],
  flux: [
    {
      question: {
        en: 'Is FLUX.1 free?',
        fr: 'FLUX.1 est-il gratuit ?',
        es: '¿Es FLUX.1 gratis?',
        ar: 'هل FLUX.1 مجاني؟',
      },
      answer: {
        en: 'FLUX.1 has an open-weight "schnell" version that is free to download and run, while the higher-quality "pro" and "dev" versions are accessed through paid APIs and hosted platforms.',
        fr: 'FLUX.1 dispose d\'une version open-weight "schnell" gratuite à télécharger et exécuter, tandis que les versions "pro" et "dev" de meilleure qualité sont accessibles via des API payantes et des plateformes hébergées.',
        es: 'FLUX.1 tiene una versión "schnell" de peso abierto gratuita para descargar y ejecutar, mientras que las versiones "pro" y "dev" de mayor calidad se acceden mediante APIs de pago y plataformas alojadas.',
        ar: 'يحتوي FLUX.1 على نسخة "schnell" مفتوحة الأوزان مجانية للتنزيل والتشغيل، بينما يتم الوصول إلى نسختي "pro" و"dev" الأعلى جودة عبر واجهات برمجة تطبيقات مدفوعة ومنصات مستضافة.',
      },
    },
    {
      question: {
        en: 'How does FLUX.1 compare to Midjourney?',
        fr: 'Comment FLUX.1 se compare-t-il à Midjourney ?',
        es: '¿Cómo se compara FLUX.1 con Midjourney?',
        ar: 'كيف يُقارن FLUX.1 بـ Midjourney؟',
      },
      answer: {
        en: 'FLUX.1 is known for strong prompt accuracy and realistic detail, and unlike Midjourney it offers open-weight versions you can self-host, giving more flexibility for developers.',
        fr: 'FLUX.1 est reconnu pour sa grande précision de suivi des prompts et son détail réaliste, et contrairement à Midjourney, il propose des versions open-weight auto-hébergeables, offrant plus de flexibilité aux développeurs.',
        es: 'FLUX.1 es conocido por su gran precisión en seguir indicaciones y detalle realista, y a diferencia de Midjourney, ofrece versiones de peso abierto que puedes alojar tú mismo, dando más flexibilidad a los desarrolladores.',
        ar: 'يُعرف FLUX.1 بدقته العالية في اتباع الأوامر والتفاصيل الواقعية، وبخلاف Midjourney، يقدم نسخاً مفتوحة الأوزان يمكن استضافتها ذاتياً، مما يوفر مرونة أكبر للمطورين.',
      },
    },
    {
      question: {
        en: 'Where can I use FLUX.1?',
        fr: 'Où peut-on utiliser FLUX.1 ?',
        es: '¿Dónde puedo usar FLUX.1?',
        ar: 'أين يمكن استخدام FLUX.1؟',
      },
      answer: {
        en: 'FLUX.1 is available through platforms like Replicate, Hugging Face, and various AI image generators that have integrated it, as well as locally via ComfyUI for the open-weight versions.',
        fr: 'FLUX.1 est disponible via des plateformes comme Replicate, Hugging Face et divers générateurs d\'images IA qui l\'ont intégré, ainsi qu\'en local via ComfyUI pour les versions open-weight.',
        es: 'FLUX.1 está disponible a través de plataformas como Replicate, Hugging Face y varios generadores de imágenes de IA que lo han integrado, así como localmente vía ComfyUI para las versiones de peso abierto.',
        ar: 'يتوفر FLUX.1 عبر منصات مثل Replicate وHugging Face ومولدات صور ذكاء اصطناعي متعددة دمجته، وكذلك محلياً عبر ComfyUI للنسخ مفتوحة الأوزان.',
      },
    },
  ],
  ideogram: [
    {
      question: {
        en: 'Is Ideogram free?',
        fr: 'Ideogram est-il gratuit ?',
        es: '¿Es Ideogram gratis?',
        ar: 'هل Ideogram مجاني؟',
      },
      answer: {
        en: 'Yes, Ideogram offers a free plan with a limited number of daily image generations. Paid plans increase generation limits and add private generations.',
        fr: 'Oui, Ideogram propose un plan gratuit avec un nombre limité de générations d\'images par jour. Les plans payants augmentent les limites de génération et ajoutent des générations privées.',
        es: 'Sí, Ideogram ofrece un plan gratuito con un número limitado de generaciones de imágenes al día. Los planes de pago aumentan los límites de generación y añaden generaciones privadas.',
        ar: 'نعم، يوفر Ideogram خطة مجانية بعدد محدود من توليدات الصور يومياً. تزيد الخطط المدفوعة حدود التوليد وتضيف توليدات خاصة.',
      },
    },
    {
      question: {
        en: 'What makes Ideogram different from other image generators?',
        fr: 'Qu\'est-ce qui différencie Ideogram des autres générateurs d\'images ?',
        es: '¿Qué diferencia a Ideogram de otros generadores de imágenes?',
        ar: 'ما الذي يميز Ideogram عن مولدات الصور الأخرى؟',
      },
      answer: {
        en: 'Ideogram is particularly strong at rendering legible, accurately spelled text within images, which makes it popular for logos, posters, and designs that include words.',
        fr: 'Ideogram excelle particulièrement dans le rendu de texte lisible et correctement orthographié dans les images, ce qui le rend populaire pour les logos, affiches et designs comportant du texte.',
        es: 'Ideogram destaca especialmente en renderizar texto legible y correctamente escrito dentro de las imágenes, lo que lo hace popular para logos, carteles y diseños que incluyen palabras.',
        ar: 'يتميز Ideogram بشكل خاص في عرض نص واضح ومكتوب بشكل صحيح داخل الصور، مما يجعله شائعاً للشعارات والملصقات والتصاميم التي تتضمن كلمات.',
      },
    },
    {
      question: {
        en: 'Can I use Ideogram images commercially?',
        fr: 'Peut-on utiliser les images Ideogram à des fins commerciales ?',
        es: '¿Puedo usar las imágenes de Ideogram comercialmente?',
        ar: 'هل يمكن استخدام صور Ideogram تجارياً؟',
      },
      answer: {
        en: 'Paid plan subscribers generally receive commercial usage rights to the images they generate — check the current plan details for specifics on licensing and ownership.',
        fr: 'Les abonnés aux plans payants reçoivent généralement des droits d\'usage commercial sur les images qu\'ils génèrent — consultez les détails actuels du plan pour les spécificités de licence et de propriété.',
        es: 'Los suscriptores de planes de pago generalmente reciben derechos de uso comercial sobre las imágenes que generan — consulta los detalles actuales del plan para conocer las especificaciones de licencia y propiedad.',
        ar: 'يحصل مشتركو الخطط المدفوعة عموماً على حقوق استخدام تجاري للصور التي يولّدونها — تحقق من تفاصيل الخطة الحالية لمعرفة تفاصيل الترخيص والملكية.',
      },
    },
  ],
  'leonardo-ai': [
    {
      question: {
        en: 'Is Leonardo AI free?',
        fr: 'Leonardo AI est-il gratuit ?',
        es: '¿Es Leonardo AI gratis?',
        ar: 'هل Leonardo AI مجاني؟',
      },
      answer: {
        en: 'Yes, Leonardo AI offers a free daily allowance of generation credits. Paid plans provide more credits, faster generation, and access to private models.',
        fr: 'Oui, Leonardo AI propose une allocation quotidienne gratuite de crédits de génération. Les plans payants offrent plus de crédits, une génération plus rapide et l\'accès à des modèles privés.',
        es: 'Sí, Leonardo AI ofrece una asignación diaria gratuita de créditos de generación. Los planes de pago proporcionan más créditos, generación más rápida y acceso a modelos privados.',
        ar: 'نعم، يوفر Leonardo AI حصة يومية مجانية من أرصدة التوليد. تقدم الخطط المدفوعة أرصدة أكثر وتوليداً أسرع والوصول إلى نماذج خاصة.',
      },
    },
    {
      question: {
        en: 'What is Leonardo AI used for?',
        fr: 'À quoi sert Leonardo AI ?',
        es: '¿Para qué se usa Leonardo AI?',
        ar: 'لماذا يُستخدم Leonardo AI؟',
      },
      answer: {
        en: 'Leonardo AI is popular for generating game assets, character designs, and concept art, with fine-tuned models tailored to specific visual styles.',
        fr: 'Leonardo AI est populaire pour générer des assets de jeu, des designs de personnages et des concept arts, avec des modèles affinés adaptés à des styles visuels spécifiques.',
        es: 'Leonardo AI es popular para generar assets de videojuegos, diseños de personajes y arte conceptual, con modelos ajustados a estilos visuales específicos.',
        ar: 'يحظى Leonardo AI بشعبية لتوليد أصول الألعاب وتصاميم الشخصيات والفن المفهومي، بنماذج مضبوطة بدقة لأنماط بصرية محددة.',
      },
    },
    {
      question: {
        en: 'Can I train my own model on Leonardo AI?',
        fr: 'Peut-on entraîner son propre modèle sur Leonardo AI ?',
        es: '¿Puedo entrenar mi propio modelo en Leonardo AI?',
        ar: 'هل يمكنني تدريب نموذجي الخاص على Leonardo AI؟',
      },
      answer: {
        en: 'Yes, Leonardo AI lets you train custom models on your own images to consistently generate a specific character, product, or art style.',
        fr: 'Oui, Leonardo AI permet d\'entraîner des modèles personnalisés sur vos propres images pour générer de manière cohérente un personnage, produit ou style artistique spécifique.',
        es: 'Sí, Leonardo AI permite entrenar modelos personalizados con tus propias imágenes para generar de forma consistente un personaje, producto o estilo artístico específico.',
        ar: 'نعم، يتيح Leonardo AI تدريب نماذج مخصصة على صورك الخاصة لتوليد شخصية أو منتج أو نمط فني محدد بشكل متناسق.',
      },
    },
  ],
  'replit-ai': [
    {
      question: {
        en: 'Is Replit AI free?',
        fr: 'Replit AI est-il gratuit ?',
        es: '¿Es Replit AI gratis?',
        ar: 'هل Replit AI مجاني؟',
      },
      answer: {
        en: 'Replit offers a free plan with limited AI usage (Agent and Assistant). The paid Core plan includes monthly credits for AI-powered app building and deployment.',
        fr: 'Replit propose un plan gratuit avec un usage IA limité (Agent et Assistant). Le plan Core payant inclut des crédits mensuels pour la création et le déploiement d\'applications avec IA.',
        es: 'Replit ofrece un plan gratuito con uso limitado de IA (Agent y Assistant). El plan Core de pago incluye créditos mensuales para crear y desplegar apps con IA.',
        ar: 'يوفر Replit خطة مجانية باستخدام محدود للذكاء الاصطناعي (Agent وAssistant). تتضمن خطة Core المدفوعة أرصدة شهرية لبناء التطبيقات ونشرها بالذكاء الاصطناعي.',
      },
    },
    {
      question: {
        en: 'What is Replit Agent?',
        fr: 'Qu\'est-ce que Replit Agent ?',
        es: '¿Qué es Replit Agent?',
        ar: 'ما هو Replit Agent؟',
      },
      answer: {
        en: 'Replit Agent can build a full application from a description — setting up the project, writing code, installing packages, and deploying it — all within the browser-based Replit environment.',
        fr: 'Replit Agent peut construire une application complète à partir d\'une description — configuration du projet, écriture du code, installation des paquets et déploiement — tout dans l\'environnement Replit basé sur le navigateur.',
        es: 'Replit Agent puede construir una aplicación completa a partir de una descripción — configurando el proyecto, escribiendo código, instalando paquetes y desplegándola — todo dentro del entorno de Replit basado en el navegador.',
        ar: 'يمكن لـ Replit Agent بناء تطبيق كامل من وصف — إعداد المشروع، كتابة الكود، تثبيت الحزم، ونشره — كل ذلك ضمن بيئة Replit المستندة إلى المتصفح.',
      },
    },
    {
      question: {
        en: 'Do I need to install anything to use Replit?',
        fr: 'Faut-il installer quelque chose pour utiliser Replit ?',
        es: '¿Necesito instalar algo para usar Replit?',
        ar: 'هل أحتاج إلى تثبيت أي شيء لاستخدام Replit؟',
      },
      answer: {
        en: 'No, Replit runs entirely in the browser, including the code editor, terminal, and AI tools, so you can build and deploy apps from any device with no setup.',
        fr: 'Non, Replit fonctionne entièrement dans le navigateur, y compris l\'éditeur de code, le terminal et les outils IA, vous pouvez donc créer et déployer des applications depuis n\'importe quel appareil sans configuration.',
        es: 'No, Replit funciona completamente en el navegador, incluyendo el editor de código, la terminal y las herramientas de IA, por lo que puedes crear y desplegar apps desde cualquier dispositivo sin configuración.',
        ar: 'لا، يعمل Replit بالكامل في المتصفح، بما في ذلك محرر الكود والطرفية وأدوات الذكاء الاصطناعي، فيمكنك بناء التطبيقات ونشرها من أي جهاز دون إعداد.',
      },
    },
  ],
  tabnine: [
    {
      question: {
        en: 'Is Tabnine free?',
        fr: 'Tabnine est-il gratuit ?',
        es: '¿Es Tabnine gratis?',
        ar: 'هل Tabnine مجاني؟',
      },
      answer: {
        en: 'Yes, Tabnine has a free tier with basic AI code completions. Paid plans add more advanced chat, full-function generation, and team-trained models on private codebases.',
        fr: 'Oui, Tabnine propose un palier gratuit avec des complétions de code IA basiques. Les plans payants ajoutent un chat plus avancé, la génération de fonctions complètes et des modèles entraînés sur le code privé de l\'équipe.',
        es: 'Sí, Tabnine tiene un nivel gratuito con completados de código de IA básicos. Los planes de pago añaden chat más avanzado, generación de funciones completas y modelos entrenados con el código privado del equipo.',
        ar: 'نعم، يوفر Tabnine مستوى مجانياً بإكمالات كود أساسية بالذكاء الاصطناعي. تضيف الخطط المدفوعة دردشة أكثر تطوراً، وتوليد دوال كاملة، ونماذج مدربة على كود الفريق الخاص.',
      },
    },
    {
      question: {
        en: 'Is Tabnine good for privacy and security?',
        fr: 'Tabnine est-il bon pour la confidentialité et la sécurité ?',
        es: '¿Es Tabnine bueno para la privacidad y seguridad?',
        ar: 'هل Tabnine جيد للخصوصية والأمان؟',
      },
      answer: {
        en: 'Yes, Tabnine is often chosen by enterprises because it offers on-premises and private deployment options, ensuring code never leaves the company\'s infrastructure.',
        fr: 'Oui, Tabnine est souvent choisi par les entreprises car il offre des options de déploiement sur site et privé, garantissant que le code ne quitte jamais l\'infrastructure de l\'entreprise.',
        es: 'Sí, las empresas suelen elegir Tabnine porque ofrece opciones de implementación local y privada, garantizando que el código nunca salga de la infraestructura de la empresa.',
        ar: 'نعم، تختار الشركات Tabnine غالباً لأنه يقدم خيارات نشر محلية وخاصة، مما يضمن عدم خروج الكود من بنية الشركة التحتية.',
      },
    },
    {
      question: {
        en: 'Which editors does Tabnine support?',
        fr: 'Quels éditeurs Tabnine prend-il en charge ?',
        es: '¿Qué editores admite Tabnine?',
        ar: 'ما هي المحررات التي يدعمها Tabnine؟',
      },
      answer: {
        en: 'Tabnine works as an extension in VS Code, JetBrains IDEs, Visual Studio, Eclipse, Vim, and several other popular editors.',
        fr: 'Tabnine fonctionne comme une extension dans VS Code, les IDE JetBrains, Visual Studio, Eclipse, Vim et plusieurs autres éditeurs populaires.',
        es: 'Tabnine funciona como una extensión en VS Code, los IDE de JetBrains, Visual Studio, Eclipse, Vim y otros editores populares.',
        ar: 'يعمل Tabnine كإضافة في VS Code وبيئات JetBrains وVisual Studio وEclipse وVim ومحررات شائعة أخرى.',
      },
    },
  ],
  codeium: [
    {
      question: {
        en: 'Is Codeium free?',
        fr: 'Codeium est-il gratuit ?',
        es: '¿Es Codeium gratis?',
        ar: 'هل Codeium مجاني؟',
      },
      answer: {
        en: 'Yes, Codeium\'s individual plan is free with unlimited basic code completions. Paid Teams and Enterprise plans add advanced chat models and admin controls.',
        fr: 'Oui, le plan individuel de Codeium est gratuit avec des complétions de code basiques illimitées. Les plans Teams et Enterprise payants ajoutent des modèles de chat avancés et des contrôles d\'administration.',
        es: 'Sí, el plan individual de Codeium es gratuito con completados de código básicos ilimitados. Los planes de pago Teams y Enterprise añaden modelos de chat avanzados y controles de administración.',
        ar: 'نعم، الخطة الفردية لـ Codeium مجانية مع إكمالات كود أساسية غير محدودة. تضيف خطط Teams وEnterprise المدفوعة نماذج دردشة متقدمة وأدوات تحكم إدارية.',
      },
    },
    {
      question: {
        en: 'What can Codeium do besides autocomplete?',
        fr: 'Que peut faire Codeium en plus de l\'autocomplétion ?',
        es: '¿Qué puede hacer Codeium además de autocompletar?',
        ar: 'ما الذي يمكن لـ Codeium فعله إلى جانب الإكمال التلقائي؟',
      },
      answer: {
        en: 'Codeium also includes an in-editor AI chat for explaining code, generating tests, refactoring, and a search feature to find relevant code across your repository.',
        fr: 'Codeium inclut aussi un chat IA intégré à l\'éditeur pour expliquer le code, générer des tests, refactoriser, ainsi qu\'une fonction de recherche pour trouver du code pertinent dans votre dépôt.',
        es: 'Codeium también incluye un chat de IA dentro del editor para explicar código, generar pruebas, refactorizar, y una función de búsqueda para encontrar código relevante en tu repositorio.',
        ar: 'يتضمن Codeium أيضاً دردشة ذكاء اصطناعي داخل المحرر لشرح الكود وتوليد الاختبارات وإعادة الهيكلة، وميزة بحث للعثور على الكود ذي الصلة في مستودعك.',
      },
    },
    {
      question: {
        en: 'Which editors and languages does Codeium support?',
        fr: 'Quels éditeurs et langages Codeium prend-il en charge ?',
        es: '¿Qué editores y lenguajes admite Codeium?',
        ar: 'ما هي المحررات واللغات التي يدعمها Codeium؟',
      },
      answer: {
        en: 'Codeium supports over 70 programming languages and integrates with VS Code, JetBrains IDEs, Vim/Neovim, Jupyter notebooks, and more.',
        fr: 'Codeium prend en charge plus de 70 langages de programmation et s\'intègre à VS Code, aux IDE JetBrains, Vim/Neovim, aux notebooks Jupyter et plus encore.',
        es: 'Codeium admite más de 70 lenguajes de programación y se integra con VS Code, los IDE de JetBrains, Vim/Neovim, notebooks de Jupyter y más.',
        ar: 'يدعم Codeium أكثر من 70 لغة برمجة ويتكامل مع VS Code وبيئات JetBrains وVim/Neovim ودفاتر Jupyter وغيرها.',
      },
    },
  ],
  'kling-ai': [
    {
      question: {
        en: 'Is Kling AI free?',
        fr: 'Kling AI est-il gratuit ?',
        es: '¿Es Kling AI gratis?',
        ar: 'هل Kling AI مجاني؟',
      },
      answer: {
        en: 'Kling AI offers a free tier with daily credits for generating short videos. Paid plans provide more credits, longer videos, and faster generation speeds.',
        fr: 'Kling AI propose un palier gratuit avec des crédits quotidiens pour générer de courtes vidéos. Les plans payants offrent plus de crédits, des vidéos plus longues et une génération plus rapide.',
        es: 'Kling AI ofrece un nivel gratuito con créditos diarios para generar videos cortos. Los planes de pago proporcionan más créditos, videos más largos y generación más rápida.',
        ar: 'يوفر Kling AI مستوى مجانياً بأرصدة يومية لتوليد فيديوهات قصيرة. تقدم الخطط المدفوعة أرصدة أكثر وفيديوهات أطول وسرعة توليد أعلى.',
      },
    },
    {
      question: {
        en: 'What can Kling AI generate?',
        fr: 'Que peut générer Kling AI ?',
        es: '¿Qué puede generar Kling AI?',
        ar: 'ما الذي يمكن لـ Kling AI توليده؟',
      },
      answer: {
        en: 'Kling AI generates high-quality video clips from text prompts or images, with realistic physics and motion, and supports extending clips to longer durations.',
        fr: 'Kling AI génère des clips vidéo de haute qualité à partir de prompts texte ou d\'images, avec une physique et un mouvement réalistes, et permet d\'étendre les clips à des durées plus longues.',
        es: 'Kling AI genera clips de video de alta calidad a partir de prompts de texto o imágenes, con física y movimiento realistas, y permite extender los clips a duraciones más largas.',
        ar: 'يولّد Kling AI مقاطع فيديو عالية الجودة من أوامر نصية أو صور، بفيزياء وحركة واقعية، ويدعم تمديد المقاطع لمدد أطول.',
      },
    },
    {
      question: {
        en: 'How does Kling AI compare to Sora and Runway?',
        fr: 'Comment Kling AI se compare-t-il à Sora et Runway ?',
        es: '¿Cómo se compara Kling AI con Sora y Runway?',
        ar: 'كيف يُقارن Kling AI بـ Sora وRunway؟',
      },
      answer: {
        en: 'Kling AI is often praised for realistic motion and longer generation lengths compared to some competitors, while access and pricing models vary across these AI video tools — worth comparing for your specific use case.',
        fr: 'Kling AI est souvent salué pour son mouvement réaliste et ses durées de génération plus longues par rapport à certains concurrents, tandis que l\'accès et les modèles de prix varient selon ces outils vidéo IA — à comparer selon votre usage.',
        es: 'Kling AI es a menudo elogiado por su movimiento realista y duraciones de generación más largas comparado con algunos competidores, mientras que el acceso y los modelos de precios varían entre estas herramientas de video con IA — vale la pena comparar según tu caso de uso.',
        ar: 'يُحظى Kling AI غالباً بالتقدير لحركته الواقعية ومدة التوليد الأطول مقارنة ببعض المنافسين، بينما تختلف نماذج الوصول والتسعير بين أدوات الفيديو هذه — يستحق المقارنة حسب استخدامك.',
      },
    },
  ],
  'pika-labs': [
    {
      question: {
        en: 'Is Pika Labs free?',
        fr: 'Pika Labs est-il gratuit ?',
        es: '¿Es Pika Labs gratis?',
        ar: 'هل Pika Labs مجاني؟',
      },
      answer: {
        en: 'Yes, Pika offers a free plan with a limited number of monthly video credits. Paid plans increase credits, remove watermarks, and add higher-resolution exports.',
        fr: 'Oui, Pika propose un plan gratuit avec un nombre limité de crédits vidéo mensuels. Les plans payants augmentent les crédits, suppriment les filigranes et ajoutent des exports en résolution supérieure.',
        es: 'Sí, Pika ofrece un plan gratuito con un número limitado de créditos de video mensuales. Los planes de pago aumentan los créditos, eliminan las marcas de agua y añaden exportaciones de mayor resolución.',
        ar: 'نعم، يوفر Pika خطة مجانية بعدد محدود من أرصدة الفيديو شهرياً. تزيد الخطط المدفوعة الأرصدة، وتزيل العلامات المائية، وتضيف تصديراً بدقة أعلى.',
      },
    },
    {
      question: {
        en: 'What is Pika Labs used for?',
        fr: 'À quoi sert Pika Labs ?',
        es: '¿Para qué se usa Pika Labs?',
        ar: 'لماذا يُستخدم Pika Labs؟',
      },
      answer: {
        en: 'Pika turns text prompts or images into short animated video clips, and includes fun effects ("Pikaffects") that apply specific transformations like inflating or melting objects.',
        fr: 'Pika transforme des prompts texte ou des images en courts clips vidéo animés, et inclut des effets amusants ("Pikaffects") qui appliquent des transformations spécifiques comme gonfler ou faire fondre des objets.',
        es: 'Pika convierte prompts de texto o imágenes en clips de video animados cortos, e incluye efectos divertidos ("Pikaffects") que aplican transformaciones específicas como inflar o derretir objetos.',
        ar: 'يحوّل Pika الأوامر النصية أو الصور إلى مقاطع فيديو متحركة قصيرة، ويتضمن تأثيرات ممتعة ("Pikaffects") تطبق تحويلات محددة مثل نفخ أو إذابة الأشياء.',
      },
    },
    {
      question: {
        en: 'Can I edit existing videos with Pika?',
        fr: 'Peut-on modifier des vidéos existantes avec Pika ?',
        es: '¿Puedo editar videos existentes con Pika?',
        ar: 'هل يمكن تعديل فيديوهات موجودة مع Pika؟',
      },
      answer: {
        en: 'Yes, Pika supports editing and extending existing video clips, modifying specific regions of a video, and adding new elements through text instructions.',
        fr: 'Oui, Pika permet de modifier et d\'étendre des clips vidéo existants, de modifier des zones spécifiques d\'une vidéo et d\'ajouter de nouveaux éléments via des instructions texte.',
        es: 'Sí, Pika permite editar y extender clips de video existentes, modificar regiones específicas de un video y añadir nuevos elementos mediante instrucciones de texto.',
        ar: 'نعم، يدعم Pika تعديل وتمديد مقاطع فيديو موجودة، وتعديل مناطق محددة من الفيديو، وإضافة عناصر جديدة عبر تعليمات نصية.',
      },
    },
  ],
  descript: [
    {
      question: {
        en: 'Is Descript free?',
        fr: 'Descript est-il gratuit ?',
        es: '¿Es Descript gratis?',
        ar: 'هل Descript مجاني؟',
      },
      answer: {
        en: 'Yes, Descript has a free plan with limited transcription hours and export quality. Paid plans add more transcription time, higher export resolution, and advanced AI features like Overdub.',
        fr: 'Oui, Descript propose un plan gratuit avec des heures de transcription limitées et une qualité d\'export réduite. Les plans payants ajoutent plus de temps de transcription, une résolution d\'export supérieure et des fonctionnalités IA avancées comme Overdub.',
        es: 'Sí, Descript tiene un plan gratuito con horas de transcripción limitadas y calidad de exportación reducida. Los planes de pago añaden más tiempo de transcripción, mayor resolución de exportación y funciones de IA avanzadas como Overdub.',
        ar: 'نعم، يوفر Descript خطة مجانية بساعات نسخ محدودة وجودة تصدير منخفضة. تضيف الخطط المدفوعة وقت نسخ أكبر ودقة تصدير أعلى وميزات ذكاء اصطناعي متقدمة مثل Overdub.',
      },
    },
    {
      question: {
        en: 'What makes Descript different from traditional video editors?',
        fr: 'Qu\'est-ce qui différencie Descript des éditeurs vidéo traditionnels ?',
        es: '¿Qué diferencia a Descript de los editores de video tradicionales?',
        ar: 'ما الذي يميز Descript عن محررات الفيديو التقليدية؟',
      },
      answer: {
        en: 'Descript lets you edit video and audio by editing a text transcript — deleting a word in the text removes it from the recording, which makes editing as simple as word processing.',
        fr: 'Descript permet de modifier vidéo et audio en éditant une transcription texte — supprimer un mot dans le texte le retire de l\'enregistrement, ce qui rend l\'édition aussi simple que du traitement de texte.',
        es: 'Descript permite editar video y audio editando una transcripción de texto — eliminar una palabra en el texto la quita de la grabación, lo que hace que editar sea tan simple como procesar texto.',
        ar: 'يتيح Descript تعديل الفيديو والصوت من خلال تعديل النص المكتوب — حذف كلمة من النص يزيلها من التسجيل، مما يجعل التحرير بسيطاً كمعالجة النصوص.',
      },
    },
    {
      question: {
        en: 'What is Overdub in Descript?',
        fr: 'Qu\'est-ce que Overdub dans Descript ?',
        es: '¿Qué es Overdub en Descript?',
        ar: 'ما هو Overdub في Descript؟',
      },
      answer: {
        en: 'Overdub is Descript\'s AI voice cloning feature that lets you generate new spoken audio in your own voice (or a stock voice) by typing text, useful for fixing mistakes without re-recording.',
        fr: 'Overdub est la fonctionnalité de clonage vocal IA de Descript qui permet de générer un nouvel audio parlé avec votre propre voix (ou une voix prédéfinie) en tapant du texte, utile pour corriger des erreurs sans réenregistrer.',
        es: 'Overdub es la función de clonación de voz con IA de Descript que permite generar nuevo audio hablado con tu propia voz (o una voz predefinida) escribiendo texto, útil para corregir errores sin volver a grabar.',
        ar: 'Overdub هي ميزة استنساخ الصوت بالذكاء الاصطناعي في Descript التي تتيح توليد صوت منطوق جديد بصوتك (أو صوت جاهز) عن طريق كتابة نص، مفيدة لتصحيح الأخطاء دون إعادة التسجيل.',
      },
    },
  ],
  'luma-dream': [
    {
      question: {
        en: 'Is Luma Dream Machine free?',
        fr: 'Luma Dream Machine est-il gratuit ?',
        es: '¿Es Luma Dream Machine gratis?',
        ar: 'هل Luma Dream Machine مجاني؟',
      },
      answer: {
        en: 'Yes, Luma Dream Machine offers free monthly video generations. Paid plans increase the number of generations, allow faster processing, and remove watermarks.',
        fr: 'Oui, Luma Dream Machine propose des générations vidéo gratuites mensuelles. Les plans payants augmentent le nombre de générations, permettent un traitement plus rapide et suppriment les filigranes.',
        es: 'Sí, Luma Dream Machine ofrece generaciones de video gratuitas mensuales. Los planes de pago aumentan el número de generaciones, permiten un procesamiento más rápido y eliminan las marcas de agua.',
        ar: 'نعم، يوفر Luma Dream Machine توليدات فيديو مجانية شهرياً. تزيد الخطط المدفوعة عدد التوليدات وتسمح بمعالجة أسرع وتزيل العلامات المائية.',
      },
    },
    {
      question: {
        en: 'What is Luma Dream Machine used for?',
        fr: 'À quoi sert Luma Dream Machine ?',
        es: '¿Para qué se usa Luma Dream Machine?',
        ar: 'لماذا يُستخدم Luma Dream Machine؟',
      },
      answer: {
        en: 'Dream Machine generates realistic video clips from text descriptions or a starting image, with smooth camera movements and natural motion of people, animals, and objects.',
        fr: 'Dream Machine génère des clips vidéo réalistes à partir de descriptions texte ou d\'une image de départ, avec des mouvements de caméra fluides et des mouvements naturels de personnes, animaux et objets.',
        es: 'Dream Machine genera clips de video realistas a partir de descripciones de texto o una imagen inicial, con movimientos de cámara fluidos y movimiento natural de personas, animales y objetos.',
        ar: 'يولّد Dream Machine مقاطع فيديو واقعية من أوصاف نصية أو صورة بداية، بحركات كاميرا سلسة وحركة طبيعية للأشخاص والحيوانات والأشياء.',
      },
    },
    {
      question: {
        en: 'How long are the videos generated by Luma?',
        fr: 'Quelle est la durée des vidéos générées par Luma ?',
        es: '¿Cuánto duran los videos generados por Luma?',
        ar: 'ما مدة الفيديوهات التي يولّدها Luma؟',
      },
      answer: {
        en: 'Luma typically generates short clips of a few seconds, which can be extended or combined to create longer sequences for social media and creative projects.',
        fr: 'Luma génère généralement de courts clips de quelques secondes, qui peuvent être étendus ou combinés pour créer des séquences plus longues pour les réseaux sociaux et projets créatifs.',
        es: 'Luma generalmente genera clips cortos de unos segundos, que pueden extenderse o combinarse para crear secuencias más largas para redes sociales y proyectos creativos.',
        ar: 'يولّد Luma عادة مقاطع قصيرة من ثوانٍ معدودة، يمكن تمديدها أو دمجها لإنشاء تسلسلات أطول لوسائل التواصل الاجتماعي والمشاريع الإبداعية.',
      },
    },
  ],
  whisper: [
    {
      question: {
        en: 'Is Whisper free?',
        fr: 'Whisper est-il gratuit ?',
        es: '¿Es Whisper gratis?',
        ar: 'هل Whisper مجاني؟',
      },
      answer: {
        en: 'Yes, OpenAI\'s Whisper is an open-source model that is free to download and run locally. Using it via the OpenAI API incurs a small per-minute cost.',
        fr: 'Oui, Whisper d\'OpenAI est un modèle open-source gratuit à télécharger et exécuter localement. L\'utiliser via l\'API OpenAI entraîne un petit coût par minute.',
        es: 'Sí, Whisper de OpenAI es un modelo de código abierto gratuito para descargar y ejecutar localmente. Usarlo a través de la API de OpenAI tiene un pequeño costo por minuto.',
        ar: 'نعم، Whisper من OpenAI نموذج مفتوح المصدر مجاني للتنزيل والتشغيل محلياً. استخدامه عبر واجهة برمجة تطبيقات OpenAI يكلّف رسوماً صغيرة لكل دقيقة.',
      },
    },
    {
      question: {
        en: 'What languages does Whisper support?',
        fr: 'Quelles langues Whisper prend-il en charge ?',
        es: '¿Qué idiomas admite Whisper?',
        ar: 'ما هي اللغات التي يدعمها Whisper؟',
      },
      answer: {
        en: 'Whisper supports transcription and translation across nearly 100 languages, with varying accuracy depending on the amount of training data available for each language.',
        fr: 'Whisper prend en charge la transcription et la traduction dans près de 100 langues, avec une précision variable selon la quantité de données d\'entraînement disponibles pour chaque langue.',
        es: 'Whisper admite transcripción y traducción en casi 100 idiomas, con una precisión variable según la cantidad de datos de entrenamiento disponibles para cada idioma.',
        ar: 'يدعم Whisper النسخ والترجمة في ما يقارب 100 لغة، بدقة متفاوتة حسب كمية بيانات التدريب المتاحة لكل لغة.',
      },
    },
    {
      question: {
        en: 'How accurate is Whisper for transcription?',
        fr: 'Quelle est la précision de Whisper pour la transcription ?',
        es: '¿Qué tan preciso es Whisper para la transcripción?',
        ar: 'ما مدى دقة Whisper في النسخ؟',
      },
      answer: {
        en: 'Whisper achieves near-human accuracy on clear English audio and is widely used as the underlying engine for many transcription apps, though accuracy drops with heavy background noise or rare accents.',
        fr: 'Whisper atteint une précision proche de l\'humain sur de l\'audio anglais clair et est largement utilisé comme moteur sous-jacent de nombreuses applications de transcription, bien que la précision baisse avec un bruit de fond important ou des accents rares.',
        es: 'Whisper alcanza una precisión casi humana en audio en inglés claro y se usa ampliamente como motor subyacente de muchas apps de transcripción, aunque la precisión baja con ruido de fondo intenso o acentos poco comunes.',
        ar: 'يحقق Whisper دقة تقارب البشر في الصوت الإنجليزي الواضح، ويُستخدم على نطاق واسع كمحرك أساسي للعديد من تطبيقات النسخ، لكن الدقة تقل مع ضجيج الخلفية الشديد أو اللكنات النادرة.',
      },
    },
  ],
  'murf-ai': [
    {
      question: {
        en: 'Is Murf AI free?',
        fr: 'Murf AI est-il gratuit ?',
        es: '¿Es Murf AI gratis?',
        ar: 'هل Murf AI مجاني؟',
      },
      answer: {
        en: 'Yes, Murf offers a free trial with limited voice generation minutes. Paid plans increase usage limits, add more voices, and unlock commercial licensing.',
        fr: 'Oui, Murf propose un essai gratuit avec un nombre limité de minutes de génération vocale. Les plans payants augmentent les limites d\'utilisation, ajoutent plus de voix et débloquent une licence commerciale.',
        es: 'Sí, Murf ofrece una prueba gratuita con minutos limitados de generación de voz. Los planes de pago aumentan los límites de uso, añaden más voces y desbloquean licencias comerciales.',
        ar: 'نعم، يوفر Murf تجربة مجانية بدقائق محدودة لتوليد الصوت. تزيد الخطط المدفوعة حدود الاستخدام، وتضيف أصواتاً أكثر، وتفتح ترخيصاً تجارياً.',
      },
    },
    {
      question: {
        en: 'What is Murf AI used for?',
        fr: 'À quoi sert Murf AI ?',
        es: '¿Para qué se usa Murf AI?',
        ar: 'لماذا يُستخدم Murf AI؟',
      },
      answer: {
        en: 'Murf converts text into natural-sounding voiceovers in over 20 languages, commonly used for presentations, e-learning courses, video narration, and ads.',
        fr: 'Murf convertit du texte en voix off naturelles dans plus de 20 langues, couramment utilisé pour les présentations, cours e-learning, narrations vidéo et publicités.',
        es: 'Murf convierte texto en voces en off de sonido natural en más de 20 idiomas, comúnmente usado para presentaciones, cursos de e-learning, narración de videos y anuncios.',
        ar: 'يحوّل Murf النص إلى تعليق صوتي طبيعي بأكثر من 20 لغة، يُستخدم بكثرة للعروض التقديمية ودورات التعلّم الإلكتروني والسرد بالفيديو والإعلانات.',
      },
    },
    {
      question: {
        en: 'Can I customize the AI voices in Murf?',
        fr: 'Peut-on personnaliser les voix IA dans Murf ?',
        es: '¿Puedo personalizar las voces de IA en Murf?',
        ar: 'هل يمكن تخصيص الأصوات في Murf؟',
      },
      answer: {
        en: 'Yes, Murf lets you adjust pitch, speed, emphasis, and pauses for each voice, and supports syncing voiceovers to video timing.',
        fr: 'Oui, Murf permet d\'ajuster la hauteur, la vitesse, l\'accentuation et les pauses pour chaque voix, et prend en charge la synchronisation des voix off avec le timing vidéo.',
        es: 'Sí, Murf permite ajustar el tono, la velocidad, el énfasis y las pausas de cada voz, y admite sincronizar las voces en off con el tiempo del video.',
        ar: 'نعم، يتيح Murf ضبط النغمة والسرعة والتشديد والوقفات لكل صوت، ويدعم مزامنة التعليق الصوتي مع توقيت الفيديو.',
      },
    },
  ],
  'otter-ai': [
    {
      question: {
        en: 'Is Otter.ai free?',
        fr: 'Otter.ai est-il gratuit ?',
        es: '¿Es Otter.ai gratis?',
        ar: 'هل Otter.ai مجاني؟',
      },
      answer: {
        en: 'Yes, Otter.ai has a free plan with a monthly limit of transcription minutes. Paid plans increase the limit, add advanced search, and offer team collaboration features.',
        fr: 'Oui, Otter.ai propose un plan gratuit avec une limite mensuelle de minutes de transcription. Les plans payants augmentent la limite, ajoutent une recherche avancée et des fonctionnalités de collaboration d\'équipe.',
        es: 'Sí, Otter.ai tiene un plan gratuito con un límite mensual de minutos de transcripción. Los planes de pago aumentan el límite, añaden búsqueda avanzada y funciones de colaboración en equipo.',
        ar: 'نعم، يوفر Otter.ai خطة مجانية بحد شهري لدقائق النسخ. تزيد الخطط المدفوعة الحد، وتضيف بحثاً متقدماً، وميزات تعاون جماعي.',
      },
    },
    {
      question: {
        en: 'What is Otter.ai best used for?',
        fr: 'À quoi Otter.ai sert-il le mieux ?',
        es: '¿Para qué es mejor Otter.ai?',
        ar: 'لماذا يُستخدم Otter.ai بشكل أفضل؟',
      },
      answer: {
        en: 'Otter.ai is widely used for real-time meeting transcription, generating automatic summaries, action items, and searchable notes from Zoom, Google Meet, and Microsoft Teams calls.',
        fr: 'Otter.ai est largement utilisé pour la transcription en temps réel de réunions, générant des résumés automatiques, des éléments d\'action et des notes consultables depuis Zoom, Google Meet et Microsoft Teams.',
        es: 'Otter.ai se usa ampliamente para la transcripción en tiempo real de reuniones, generando resúmenes automáticos, elementos de acción y notas buscables desde llamadas de Zoom, Google Meet y Microsoft Teams.',
        ar: 'يُستخدم Otter.ai على نطاق واسع لنسخ الاجتماعات في الوقت الفعلي، وتوليد ملخصات تلقائية، وعناصر إجراءات، وملاحظات قابلة للبحث من مكالمات Zoom وGoogle Meet وMicrosoft Teams.',
      },
    },
    {
      question: {
        en: 'Does Otter.ai work in languages other than English?',
        fr: 'Otter.ai fonctionne-t-il dans d\'autres langues que l\'anglais ?',
        es: '¿Funciona Otter.ai en otros idiomas además del inglés?',
        ar: 'هل يعمل Otter.ai بلغات أخرى غير الإنجليزية؟',
      },
      answer: {
        en: 'Otter.ai primarily focuses on English transcription with the highest accuracy, though it has expanded limited support for some other languages over time.',
        fr: 'Otter.ai se concentre principalement sur la transcription en anglais avec la plus haute précision, bien qu\'il ait étendu un support limité pour d\'autres langues au fil du temps.',
        es: 'Otter.ai se centra principalmente en la transcripción en inglés con la mayor precisión, aunque ha ampliado un soporte limitado para otros idiomas con el tiempo.',
        ar: 'يركز Otter.ai بشكل أساسي على النسخ بالإنجليزية بأعلى دقة، لكنه وسّع دعماً محدوداً لبعض اللغات الأخرى مع مرور الوقت.',
      },
    },
  ],
  'zapier-ai': [
    {
      question: {
        en: 'Is Zapier AI free?',
        fr: 'Zapier AI est-il gratuit ?',
        es: '¿Es Zapier AI gratis?',
        ar: 'هل Zapier AI مجاني؟',
      },
      answer: {
        en: 'Zapier has a free plan with limited tasks per month and basic AI features. Paid plans increase task limits and unlock advanced AI automation tools like AI-powered Zaps and Central agents.',
        fr: 'Zapier propose un plan gratuit avec un nombre limité de tâches par mois et des fonctionnalités IA basiques. Les plans payants augmentent les limites de tâches et débloquent des outils d\'automatisation IA avancés comme les Zaps alimentés par IA et les agents Central.',
        es: 'Zapier tiene un plan gratuito con tareas limitadas al mes y funciones de IA básicas. Los planes de pago aumentan los límites de tareas y desbloquean herramientas de automatización con IA avanzadas como Zaps potenciados por IA y agentes Central.',
        ar: 'يوفر Zapier خطة مجانية بمهام محدودة شهرياً وميزات ذكاء اصطناعي أساسية. تزيد الخطط المدفوعة حدود المهام وتفتح أدوات أتمتة ذكاء اصطناعي متقدمة مثل Zaps المدعومة بالذكاء الاصطناعي وعملاء Central.',
      },
    },
    {
      question: {
        en: 'What is Zapier AI used for?',
        fr: 'À quoi sert Zapier AI ?',
        es: '¿Para qué se usa Zapier AI?',
        ar: 'لماذا يُستخدم Zapier AI؟',
      },
      answer: {
        en: 'Zapier AI adds intelligence to automated workflows ("Zaps"), letting you use AI steps to summarize, categorize, draft text, or make decisions between apps without writing code.',
        fr: 'Zapier AI ajoute de l\'intelligence aux workflows automatisés ("Zaps"), permettant d\'utiliser des étapes IA pour résumer, catégoriser, rédiger du texte ou prendre des décisions entre applications sans écrire de code.',
        es: 'Zapier AI añade inteligencia a los flujos de trabajo automatizados ("Zaps"), permitiendo usar pasos de IA para resumir, categorizar, redactar texto o tomar decisiones entre apps sin escribir código.',
        ar: 'يضيف Zapier AI الذكاء إلى تدفقات العمل المؤتمتة ("Zaps")، مما يتيح استخدام خطوات ذكاء اصطناعي لتلخيص أو تصنيف أو كتابة نص أو اتخاذ قرارات بين التطبيقات دون كتابة كود.',
      },
    },
    {
      question: {
        en: 'How many apps does Zapier connect with?',
        fr: 'Avec combien d\'applications Zapier se connecte-t-il ?',
        es: '¿Con cuántas aplicaciones se conecta Zapier?',
        ar: 'مع كم تطبيق يتصل Zapier؟',
      },
      answer: {
        en: 'Zapier connects with thousands of apps, including Gmail, Slack, Notion, Google Sheets, and CRMs, making it one of the most widely integrated automation platforms.',
        fr: 'Zapier se connecte à des milliers d\'applications, dont Gmail, Slack, Notion, Google Sheets et des CRM, ce qui en fait l\'une des plateformes d\'automatisation les plus largement intégrées.',
        es: 'Zapier se conecta con miles de aplicaciones, incluyendo Gmail, Slack, Notion, Google Sheets y CRMs, lo que la convierte en una de las plataformas de automatización más integradas.',
        ar: 'يتصل Zapier بآلاف التطبيقات، بما في ذلك Gmail وSlack وNotion وGoogle Sheets وأنظمة CRM، مما يجعله من أكثر منصات الأتمتة تكاملاً.',
      },
    },
  ],
  'gamma-app': [
    {
      question: {
        en: 'Is Gamma free?',
        fr: 'Gamma est-il gratuit ?',
        es: '¿Es Gamma gratis?',
        ar: 'هل Gamma مجاني؟',
      },
      answer: {
        en: 'Yes, Gamma offers a free plan with a limited number of AI credits for generating presentations, documents, and webpages. Paid plans provide more credits and advanced customization.',
        fr: 'Oui, Gamma propose un plan gratuit avec un nombre limité de crédits IA pour générer présentations, documents et pages web. Les plans payants offrent plus de crédits et une personnalisation avancée.',
        es: 'Sí, Gamma ofrece un plan gratuito con un número limitado de créditos de IA para generar presentaciones, documentos y páginas web. Los planes de pago proporcionan más créditos y personalización avanzada.',
        ar: 'نعم، يوفر Gamma خطة مجانية بعدد محدود من أرصدة الذكاء الاصطناعي لتوليد العروض التقديمية والمستندات وصفحات الويب. تقدم الخطط المدفوعة أرصدة أكثر وتخصيصاً متقدماً.',
      },
    },
    {
      question: {
        en: 'What is Gamma used for?',
        fr: 'À quoi sert Gamma ?',
        es: '¿Para qué se usa Gamma?',
        ar: 'لماذا يُستخدم Gamma؟',
      },
      answer: {
        en: 'Gamma turns a text prompt or outline into a designed presentation, document, or webpage in seconds, automatically choosing layouts, images, and formatting.',
        fr: 'Gamma transforme un prompt texte ou un plan en présentation, document ou page web designé en quelques secondes, en choisissant automatiquement les mises en page, images et mise en forme.',
        es: 'Gamma convierte un prompt de texto o esquema en una presentación, documento o página web diseñada en segundos, eligiendo automáticamente diseños, imágenes y formato.',
        ar: 'يحوّل Gamma أمراً نصياً أو مخططاً إلى عرض تقديمي أو مستند أو صفحة ويب مصممة في ثوانٍ، مع اختيار تلقائي للتخطيطات والصور والتنسيق.',
      },
    },
    {
      question: {
        en: 'Can I export Gamma presentations to PowerPoint or PDF?',
        fr: 'Peut-on exporter les présentations Gamma vers PowerPoint ou PDF ?',
        es: '¿Puedo exportar presentaciones de Gamma a PowerPoint o PDF?',
        ar: 'هل يمكن تصدير عروض Gamma إلى PowerPoint أو PDF؟',
      },
      answer: {
        en: 'Yes, Gamma allows exporting your creations to PDF and PowerPoint formats, as well as sharing them as live web pages with interactive elements.',
        fr: 'Oui, Gamma permet d\'exporter vos créations aux formats PDF et PowerPoint, ainsi que de les partager en tant que pages web interactives.',
        es: 'Sí, Gamma permite exportar tus creaciones a formatos PDF y PowerPoint, así como compartirlas como páginas web interactivas en vivo.',
        ar: 'نعم، يتيح Gamma تصدير إبداعاتك إلى صيغ PDF وPowerPoint، وكذلك مشاركتها كصفحات ويب تفاعلية مباشرة.',
      },
    },
  ],
  'surfer-seo': [
    {
      question: {
        en: 'Is Surfer SEO free?',
        fr: 'Surfer SEO est-il gratuit ?',
        es: '¿Es Surfer SEO gratis?',
        ar: 'هل Surfer SEO مجاني؟',
      },
      answer: {
        en: 'Surfer SEO does not have a permanent free plan, but offers a trial period. Paid plans are based on the number of content articles and keyword analyses per month.',
        fr: 'Surfer SEO n\'a pas de plan gratuit permanent, mais propose une période d\'essai. Les plans payants sont basés sur le nombre d\'articles de contenu et d\'analyses de mots-clés par mois.',
        es: 'Surfer SEO no tiene un plan gratuito permanente, pero ofrece un período de prueba. Los planes de pago se basan en el número de artículos de contenido y análisis de palabras clave al mes.',
        ar: 'لا يوفر Surfer SEO خطة مجانية دائمة، لكنه يقدم فترة تجريبية. تعتمد الخطط المدفوعة على عدد مقالات المحتوى وتحليلات الكلمات المفتاحية شهرياً.',
      },
    },
    {
      question: {
        en: 'What does Surfer SEO do?',
        fr: 'Que fait Surfer SEO ?',
        es: '¿Qué hace Surfer SEO?',
        ar: 'ما الذي يفعله Surfer SEO؟',
      },
      answer: {
        en: 'Surfer SEO analyzes top-ranking pages for a target keyword and generates a content outline with recommended word count, headings, and key terms to help your article rank higher.',
        fr: 'Surfer SEO analyse les pages les mieux classées pour un mot-clé cible et génère un plan de contenu avec un nombre de mots recommandé, des titres et des termes clés pour aider votre article à mieux se classer.',
        es: 'Surfer SEO analiza las páginas mejor posicionadas para una palabra clave objetivo y genera un esquema de contenido con un recuento de palabras recomendado, encabezados y términos clave para ayudar a que tu artículo se posicione mejor.',
        ar: 'يحلل Surfer SEO الصفحات الأعلى تصنيفاً لكلمة مفتاحية مستهدفة ويولّد مخطط محتوى بعدد كلمات موصى به وعناوين ومصطلحات أساسية لمساعدة مقالتك على ترتيب أعلى.',
      },
    },
    {
      question: {
        en: 'Does Surfer SEO integrate with content writing tools?',
        fr: 'Surfer SEO s\'intègre-t-il avec des outils de rédaction de contenu ?',
        es: '¿Se integra Surfer SEO con herramientas de redacción de contenido?',
        ar: 'هل يتكامل Surfer SEO مع أدوات كتابة المحتوى؟',
      },
      answer: {
        en: 'Yes, Surfer integrates with Google Docs, WordPress, and AI writing tools like Jasper, and includes its own built-in AI content editor that scores your draft against the SEO outline in real time.',
        fr: 'Oui, Surfer s\'intègre à Google Docs, WordPress et des outils de rédaction IA comme Jasper, et inclut son propre éditeur de contenu IA intégré qui note votre brouillon par rapport au plan SEO en temps réel.',
        es: 'Sí, Surfer se integra con Google Docs, WordPress y herramientas de redacción de IA como Jasper, e incluye su propio editor de contenido con IA que puntúa tu borrador frente al esquema SEO en tiempo real.',
        ar: 'نعم، يتكامل Surfer مع Google Docs وWordPress وأدوات الكتابة بالذكاء الاصطناعي مثل Jasper، ويتضمن محرر محتوى مدمجاً بالذكاء الاصطناعي يقيّم مسودتك مقابل مخطط السيو في الوقت الفعلي.',
      },
    },
  ],
  synthesia: [
    {
      question: {
        en: 'Is Synthesia free?',
        fr: 'Synthesia est-il gratuit ?',
        es: '¿Es Synthesia gratis?',
        ar: 'هل Synthesia مجاني؟',
      },
      answer: {
        en: 'Synthesia offers a limited free trial. Paid plans unlock more video minutes per month, additional AI avatars, and custom avatar creation.',
        fr: 'Synthesia propose un essai gratuit limité. Les plans payants débloquent plus de minutes vidéo par mois, des avatars IA supplémentaires et la création d\'avatars personnalisés.',
        es: 'Synthesia ofrece una prueba gratuita limitada. Los planes de pago desbloquean más minutos de video al mes, avatares de IA adicionales y la creación de avatares personalizados.',
        ar: 'يوفر Synthesia تجربة مجانية محدودة. تفتح الخطط المدفوعة دقائق فيديو أكثر شهرياً، وصوراً رمزية إضافية بالذكاء الاصطناعي، وإنشاء صور رمزية مخصصة.',
      },
    },
    {
      question: {
        en: 'What is Synthesia used for?',
        fr: 'À quoi sert Synthesia ?',
        es: '¿Para qué se usa Synthesia?',
        ar: 'لماذا يُستخدم Synthesia؟',
      },
      answer: {
        en: 'Synthesia creates videos featuring realistic AI avatars that speak your script in over 140 languages, commonly used for corporate training, marketing, and product explainer videos.',
        fr: 'Synthesia crée des vidéos avec des avatars IA réalistes qui parlent votre script dans plus de 140 langues, couramment utilisé pour la formation d\'entreprise, le marketing et les vidéos explicatives produits.',
        es: 'Synthesia crea videos con avatares de IA realistas que hablan tu guion en más de 140 idiomas, comúnmente usado para capacitación corporativa, marketing y videos explicativos de productos.',
        ar: 'يُنشئ Synthesia فيديوهات بصور رمزية واقعية بالذكاء الاصطناعي تتحدث نصك بأكثر من 140 لغة، يُستخدم بكثرة للتدريب المؤسسي والتسويق وفيديوهات شرح المنتجات.',
      },
    },
    {
      question: {
        en: 'Can I create a custom AI avatar of myself in Synthesia?',
        fr: 'Peut-on créer un avatar IA personnalisé de soi-même dans Synthesia ?',
        es: '¿Puedo crear un avatar de IA personalizado de mí mismo en Synthesia?',
        ar: 'هل يمكن إنشاء صورة رمزية مخصصة لي بالذكاء الاصطناعي في Synthesia؟',
      },
      answer: {
        en: 'Yes, higher-tier Synthesia plans let you create a personal AI avatar (and voice clone) from a short video recording of yourself, which you can then use to generate new videos by typing scripts.',
        fr: 'Oui, les plans Synthesia supérieurs permettent de créer un avatar IA personnel (et un clone vocal) à partir d\'un court enregistrement vidéo de vous-même, utilisable ensuite pour générer de nouvelles vidéos en tapant des scripts.',
        es: 'Sí, los planes superiores de Synthesia permiten crear un avatar de IA personal (y un clon de voz) a partir de una breve grabación de video de ti mismo, que luego puedes usar para generar nuevos videos escribiendo guiones.',
        ar: 'نعم، تتيح خطط Synthesia الأعلى إنشاء صورة رمزية شخصية بالذكاء الاصطناعي (واستنساخ صوت) من تسجيل فيديو قصير لك، يمكنك استخدامها لتوليد فيديوهات جديدة بكتابة نصوص.',
      },
    },
  ],
  recraft: [
    {
      question: {
        en: 'Is Recraft free?',
        fr: 'Recraft est-il gratuit ?',
        es: '¿Es Recraft gratis?',
        ar: 'هل Recraft مجاني؟',
      },
      answer: {
        en: 'Yes, Recraft offers a free plan with daily generation credits. Paid plans increase credits, allow commercial use, and unlock vector and brand-style features.',
        fr: 'Oui, Recraft propose un plan gratuit avec des crédits de génération quotidiens. Les plans payants augmentent les crédits, permettent un usage commercial et débloquent les fonctionnalités vectorielles et de style de marque.',
        es: 'Sí, Recraft ofrece un plan gratuito con créditos de generación diarios. Los planes de pago aumentan los créditos, permiten el uso comercial y desbloquean funciones vectoriales y de estilo de marca.',
        ar: 'نعم، يوفر Recraft خطة مجانية بأرصدة توليد يومية. تزيد الخطط المدفوعة الأرصدة، وتسمح بالاستخدام التجاري، وتفتح ميزات المتجهات وأسلوب العلامة التجارية.',
      },
    },
    {
      question: {
        en: 'What makes Recraft different from other AI image tools?',
        fr: 'Qu\'est-ce qui différencie Recraft des autres outils d\'image IA ?',
        es: '¿Qué diferencia a Recraft de otras herramientas de imágenes con IA?',
        ar: 'ما الذي يميز Recraft عن أدوات الصور الأخرى بالذكاء الاصطناعي؟',
      },
      answer: {
        en: 'Recraft can generate vector graphics (SVG) in addition to raster images, and lets you define a consistent brand style — colors, fonts, and icon sets — applied across all generated assets.',
        fr: 'Recraft peut générer des graphiques vectoriels (SVG) en plus des images raster, et permet de définir un style de marque cohérent — couleurs, polices et jeux d\'icônes — appliqué à tous les assets générés.',
        es: 'Recraft puede generar gráficos vectoriales (SVG) además de imágenes ráster, y permite definir un estilo de marca consistente — colores, fuentes y conjuntos de iconos — aplicado a todos los assets generados.',
        ar: 'يمكن لـ Recraft توليد رسومات متجهة (SVG) بالإضافة إلى الصور النقطية، ويتيح تحديد أسلوب علامة تجارية متناسق — ألوان وخطوط ومجموعات أيقونات — يُطبَّق على جميع الأصول المولّدة.',
      },
    },
    {
      question: {
        en: 'Can Recraft generate icons and logos?',
        fr: 'Recraft peut-il générer des icônes et des logos ?',
        es: '¿Puede Recraft generar iconos y logos?',
        ar: 'هل يمكن لـ Recraft توليد أيقونات وشعارات؟',
      },
      answer: {
        en: 'Yes, Recraft is well-suited for generating icon sets, logos, illustrations, and mockups in consistent vector styles, making it popular among designers and UI teams.',
        fr: 'Oui, Recraft est bien adapté pour générer des jeux d\'icônes, logos, illustrations et mockups dans des styles vectoriels cohérents, ce qui le rend populaire auprès des designers et équipes UI.',
        es: 'Sí, Recraft es muy adecuado para generar conjuntos de iconos, logos, ilustraciones y mockups en estilos vectoriales consistentes, lo que lo hace popular entre diseñadores y equipos de UI.',
        ar: 'نعم، يناسب Recraft توليد مجموعات أيقونات وشعارات ورسوم توضيحية ونماذج أولية بأساليب متجهة متناسقة، مما يجعله شائعاً بين المصممين وفرق واجهات المستخدم.',
      },
    },
  ],
  'dify-ai': [
    {
      question: {
        en: 'What is Dify used for?',
        fr: 'À quoi sert Dify ?',
        es: '¿Para qué se usa Dify?',
        ar: 'لماذا يُستخدم Dify؟',
      },
      answer: {
        en: 'Dify is a platform for building AI applications and agent workflows on a visual canvas, then exposing them through an API or embedded widget. It is popular with teams adding AI features to an existing product.',
        fr: 'Dify est une plateforme pour créer des applications IA et des workflows d\'agents sur une interface visuelle, puis les exposer via une API ou un widget intégré. Il est populaire auprès des équipes qui ajoutent des fonctionnalités IA à un produit existant.',
        es: 'Dify es una plataforma para crear aplicaciones de IA y flujos de trabajo de agentes en un lienzo visual, y luego exponerlos mediante una API o un widget integrado. Es popular entre equipos que añaden funciones de IA a un producto existente.',
        ar: 'Dify هي منصة لبناء تطبيقات الذكاء الاصطناعي وسير عمل الوكلاء على لوحة بصرية، ثم عرضها عبر واجهة برمجة تطبيقات أو أداة مدمجة. تحظى بشعبية بين الفرق التي تضيف ميزات ذكاء اصطناعي لمنتج موجود.',
      },
    },
    {
      question: {
        en: 'Does Dify require coding?',
        fr: 'Dify nécessite-t-il de coder ?',
        es: '¿Dify requiere programación?',
        ar: 'هل يتطلب Dify كتابة كود؟',
      },
      answer: {
        en: 'Most of Dify\'s workflow builder is visual and no-code, but it also offers an API and SDKs for developers who want to integrate AI apps into their own codebase, making it usable by both technical and non-technical teams.',
        fr: 'La majeure partie du constructeur de workflows de Dify est visuelle et sans code, mais il propose aussi une API et des SDK pour les développeurs souhaitant intégrer des applications IA dans leur propre code, ce qui le rend utilisable par les équipes techniques et non techniques.',
        es: 'La mayor parte del constructor de flujos de Dify es visual y sin código, pero también ofrece una API y SDKs para desarrolladores que quieran integrar aplicaciones de IA en su propio código, lo que lo hace útil tanto para equipos técnicos como no técnicos.',
        ar: 'معظم منشئ سير العمل في Dify بصري وبدون كود، لكنه يوفر أيضاً واجهة برمجة تطبيقات وحزم تطوير للمطورين الذين يريدون دمج تطبيقات الذكاء الاصطناعي في كودهم الخاص، مما يجعله قابلاً للاستخدام من الفرق التقنية وغير التقنية.',
      },
    },
    {
      question: {
        en: 'Can Dify connect to external data sources?',
        fr: 'Dify peut-il se connecter à des sources de données externes ?',
        es: '¿Puede Dify conectarse a fuentes de datos externas?',
        ar: 'هل يمكن لـ Dify الاتصال بمصادر بيانات خارجية؟',
      },
      answer: {
        en: 'Yes, Dify supports knowledge bases built from your own documents (RAG), plus plugins and API tools so agents can query databases, call external services, and ground their answers in your data.',
        fr: 'Oui, Dify prend en charge des bases de connaissances construites à partir de vos propres documents (RAG), ainsi que des plugins et outils API permettant aux agents d\'interroger des bases de données, d\'appeler des services externes et de fonder leurs réponses sur vos données.',
        es: 'Sí, Dify admite bases de conocimiento construidas a partir de tus propios documentos (RAG), además de plugins y herramientas de API para que los agentes consulten bases de datos, llamen a servicios externos y basen sus respuestas en tus datos.',
        ar: 'نعم، يدعم Dify قواعد معرفية مبنية من مستنداتك الخاصة (RAG)، بالإضافة إلى الإضافات وأدوات واجهة برمجة التطبيقات حتى يتمكن الوكلاء من الاستعلام عن قواعد البيانات واستدعاء خدمات خارجية وتأسيس إجاباتهم على بياناتك.',
      },
    },
  ],
  langchain: [
    {
      question: {
        en: 'Is LangChain free to use?',
        fr: 'LangChain est-il gratuit ?',
        es: '¿LangChain es gratuito?',
        ar: 'هل LangChain مجاني الاستخدام؟',
      },
      answer: {
        en: 'LangChain is an open-source framework and free to use. You only pay for the underlying LLM API calls (such as OpenAI or Anthropic) and any optional hosted services like LangSmith for monitoring.',
        fr: 'LangChain est un framework open-source et gratuit. Vous ne payez que pour les appels API du LLM sous-jacent (comme OpenAI ou Anthropic) et les services hébergés optionnels comme LangSmith pour le monitoring.',
        es: 'LangChain es un framework de código abierto y gratuito. Solo pagas por las llamadas a la API del LLM subyacente (como OpenAI o Anthropic) y por servicios alojados opcionales como LangSmith para monitoreo.',
        ar: 'LangChain إطار عمل مفتوح المصدر ومجاني الاستخدام. تدفع فقط مقابل استدعاءات واجهة برمجة تطبيقات النموذج اللغوي الأساسي (مثل OpenAI أو Anthropic) وأي خدمات استضافة اختيارية مثل LangSmith للمراقبة.',
      },
    },
    {
      question: {
        en: 'What programming languages does LangChain support?',
        fr: 'Quels langages de programmation LangChain prend-il en charge ?',
        es: '¿Qué lenguajes de programación admite LangChain?',
        ar: 'ما لغات البرمجة التي يدعمها LangChain؟',
      },
      answer: {
        en: 'LangChain is available as a Python library and a JavaScript/TypeScript library, with largely equivalent feature sets, so you can build agents in either ecosystem.',
        fr: 'LangChain est disponible en tant que bibliothèque Python et bibliothèque JavaScript/TypeScript, avec des fonctionnalités largement équivalentes, ce qui permet de créer des agents dans l\'un ou l\'autre écosystème.',
        es: 'LangChain está disponible como biblioteca de Python y como biblioteca de JavaScript/TypeScript, con conjuntos de funciones prácticamente equivalentes, por lo que puedes crear agentes en cualquiera de los dos ecosistemas.',
        ar: 'يتوفر LangChain كمكتبة بايثون ومكتبة جافاسكريبت/تايبسكريبت، بميزات متكافئة إلى حد كبير، حتى تتمكن من بناء وكلاء في أي من النظامين.',
      },
    },
    {
      question: {
        en: 'What is LangGraph and how does it relate to LangChain?',
        fr: 'Qu\'est-ce que LangGraph et quel est son lien avec LangChain ?',
        es: '¿Qué es LangGraph y cómo se relaciona con LangChain?',
        ar: 'ما هو LangGraph وكيف يرتبط بـ LangChain؟',
      },
      answer: {
        en: 'LangGraph is a companion library built on top of LangChain for creating stateful, multi-step agents represented as graphs, with explicit control over loops, branching, and human-in-the-loop checkpoints — useful for complex production agents.',
        fr: 'LangGraph est une bibliothèque complémentaire construite sur LangChain pour créer des agents avec état, en plusieurs étapes, représentés sous forme de graphes, avec un contrôle explicite sur les boucles, les branchements et les points de contrôle humains — utile pour les agents de production complexes.',
        es: 'LangGraph es una biblioteca complementaria construida sobre LangChain para crear agentes con estado y de varios pasos representados como grafos, con control explícito sobre bucles, ramificaciones y puntos de control con intervención humana — útil para agentes de producción complejos.',
        ar: 'LangGraph مكتبة مكملة مبنية فوق LangChain لإنشاء وكلاء ذوي حالة ومتعددي الخطوات يتم تمثيلهم كرسوم بيانية، مع تحكم واضح في الحلقات والتفرعات ونقاط تدخل الإنسان — مفيدة للوكلاء الإنتاجيين المعقدين.',
      },
    },
  ],
  'n8n-ai': [
    {
      question: {
        en: 'Is n8n free to use?',
        fr: 'n8n est-il gratuit ?',
        es: '¿n8n es gratuito?',
        ar: 'هل n8n مجاني الاستخدام؟',
      },
      answer: {
        en: 'n8n is open-source and free to self-host with no execution limits. It also offers a paid cloud plan with managed hosting, additional users, and support, priced by workflow execution volume.',
        fr: 'n8n est open-source et gratuit en auto-hébergement, sans limite d\'exécution. Il propose aussi un plan cloud payant avec hébergement géré, utilisateurs supplémentaires et support, tarifé selon le volume d\'exécutions de workflows.',
        es: 'n8n es de código abierto y gratuito para autohospedar sin límites de ejecución. También ofrece un plan en la nube de pago con hospedaje gestionado, usuarios adicionales y soporte, con precio según el volumen de ejecuciones de flujos de trabajo.',
        ar: 'n8n مفتوح المصدر ومجاني للاستضافة الذاتية دون حدود تنفيذ. كما يقدم خطة سحابية مدفوعة باستضافة مدارة ومستخدمين إضافيين ودعم، يتم تسعيرها بحسب حجم تنفيذ سير العمل.',
      },
    },
    {
      question: {
        en: 'Can n8n run AI agents inside a workflow?',
        fr: 'n8n peut-il exécuter des agents IA dans un workflow ?',
        es: '¿Puede n8n ejecutar agentes de IA dentro de un flujo de trabajo?',
        ar: 'هل يمكن لـ n8n تشغيل وكلاء ذكاء اصطناعي داخل سير العمل؟',
      },
      answer: {
        en: 'Yes, n8n includes native AI agent nodes that connect to LLMs, give the agent access to tools and memory, and let it make decisions mid-workflow, combining traditional automation with autonomous reasoning.',
        fr: 'Oui, n8n inclut des nœuds d\'agents IA natifs qui se connectent aux LLM, donnent à l\'agent accès à des outils et à une mémoire, et lui permettent de prendre des décisions en cours de workflow, combinant automatisation traditionnelle et raisonnement autonome.',
        es: 'Sí, n8n incluye nodos de agentes de IA nativos que se conectan a LLMs, le dan al agente acceso a herramientas y memoria, y le permiten tomar decisiones en medio del flujo de trabajo, combinando automatización tradicional con razonamiento autónomo.',
        ar: 'نعم، يتضمن n8n عقد وكيل ذكاء اصطناعي أصلية تتصل بالنماذج اللغوية، وتمنح الوكيل وصولاً إلى الأدوات والذاكرة، وتتيح له اتخاذ القرارات في منتصف سير العمل، مما يجمع بين الأتمتة التقليدية والتفكير المستقل.',
      },
    },
    {
      question: {
        en: 'How many apps can n8n integrate with?',
        fr: 'Avec combien d\'applications n8n peut-il s\'intégrer ?',
        es: '¿Con cuántas aplicaciones puede integrarse n8n?',
        ar: 'مع كم تطبيق يمكن لـ n8n التكامل؟',
      },
      answer: {
        en: 'n8n ships with hundreds of pre-built integrations (CRMs, email, databases, messaging apps, and more), plus an HTTP request node and custom code nodes for connecting to virtually any API.',
        fr: 'n8n est livré avec des centaines d\'intégrations prêtes à l\'emploi (CRM, email, bases de données, applications de messagerie, etc.), ainsi qu\'un nœud de requête HTTP et des nœuds de code personnalisé pour se connecter à pratiquement n\'importe quelle API.',
        es: 'n8n viene con cientos de integraciones preconstruidas (CRMs, correo electrónico, bases de datos, aplicaciones de mensajería y más), además de un nodo de solicitud HTTP y nodos de código personalizado para conectarse a prácticamente cualquier API.',
        ar: 'يأتي n8n مزوداً بمئات التكاملات الجاهزة (أنظمة CRM، البريد الإلكتروني، قواعد البيانات، تطبيقات المراسلة، وأكثر)، بالإضافة إلى عقدة طلب HTTP وعقد كود مخصصة للاتصال بأي واجهة برمجة تطبيقات تقريباً.',
      },
    },
  ],
  'flowise-ai': [
    {
      question: {
        en: 'What is Flowise?',
        fr: 'Qu\'est-ce que Flowise ?',
        es: '¿Qué es Flowise?',
        ar: 'ما هو Flowise؟',
      },
      answer: {
        en: 'Flowise is an open-source, drag-and-drop visual builder for creating LLM-powered apps and agent flows, built on top of LangChain components but accessible without writing code.',
        fr: 'Flowise est un constructeur visuel open-source par glisser-déposer pour créer des applications et flux d\'agents basés sur des LLM, construit sur des composants LangChain mais accessible sans écrire de code.',
        es: 'Flowise es un constructor visual de código abierto, de arrastrar y soltar, para crear aplicaciones y flujos de agentes potenciados por LLM, construido sobre componentes de LangChain pero accesible sin escribir código.',
        ar: 'Flowise هو منشئ بصري مفتوح المصدر بالسحب والإفلات لإنشاء تطبيقات وتدفقات وكلاء مدعومة بالنماذج اللغوية، مبني على مكونات LangChain لكنه قابل للاستخدام دون كتابة كود.',
      },
    },
    {
      question: {
        en: 'Is Flowise free and can it be self-hosted?',
        fr: 'Flowise est-il gratuit et peut-il être auto-hébergé ?',
        es: '¿Flowise es gratis y se puede autohospedar?',
        ar: 'هل Flowise مجاني ويمكن استضافته ذاتياً؟',
      },
      answer: {
        en: 'Flowise is open-source under an Apache-based license and free to self-host on your own server or via Docker. A hosted cloud version is also available for teams that prefer managed infrastructure.',
        fr: 'Flowise est open-source sous une licence basée sur Apache et gratuit à auto-héberger sur votre propre serveur ou via Docker. Une version cloud hébergée est également disponible pour les équipes qui préfèrent une infrastructure gérée.',
        es: 'Flowise es de código abierto bajo una licencia basada en Apache y gratuito para autohospedar en tu propio servidor o vía Docker. También hay disponible una versión en la nube alojada para equipos que prefieren infraestructura gestionada.',
        ar: 'Flowise مفتوح المصدر بموجب ترخيص قائم على Apache ومجاني للاستضافة الذاتية على خادمك الخاص أو عبر Docker. تتوفر أيضاً نسخة سحابية مستضافة للفرق التي تفضل بنية تحتية مدارة.',
      },
    },
    {
      question: {
        en: 'Do I need to know how to code to use Flowise?',
        fr: 'Faut-il savoir coder pour utiliser Flowise ?',
        es: '¿Necesito saber programar para usar Flowise?',
        ar: 'هل أحتاج لمعرفة البرمجة لاستخدام Flowise؟',
      },
      answer: {
        en: 'No — Flowise is designed so you can build chatbots and agent workflows by connecting nodes on a canvas. Developers can still extend it with custom JavaScript/TypeScript functions when needed.',
        fr: 'Non — Flowise est conçu pour vous permettre de créer des chatbots et des workflows d\'agents en connectant des nœuds sur une interface. Les développeurs peuvent toujours l\'étendre avec des fonctions JavaScript/TypeScript personnalisées si nécessaire.',
        es: 'No — Flowise está diseñado para que puedas crear chatbots y flujos de trabajo de agentes conectando nodos en un lienzo. Los desarrolladores aún pueden extenderlo con funciones personalizadas de JavaScript/TypeScript cuando sea necesario.',
        ar: 'لا — تم تصميم Flowise حتى تتمكن من بناء روبوتات محادثة وتدفقات وكلاء عبر ربط العقد على لوحة. يمكن للمطورين توسيعه بوظائف جافاسكريبت/تايبسكريبت مخصصة عند الحاجة.',
      },
    },
  ],
  crewai: [
    {
      question: {
        en: 'What is CrewAI used for?',
        fr: 'À quoi sert CrewAI ?',
        es: '¿Para qué se usa CrewAI?',
        ar: 'لماذا يُستخدم CrewAI؟',
      },
      answer: {
        en: 'CrewAI is a Python framework for orchestrating teams of AI agents, each with a defined role, goal, and tools, that collaborate on multi-step tasks such as research, content creation, and data analysis pipelines.',
        fr: 'CrewAI est un framework Python pour orchestrer des équipes d\'agents IA, chacun avec un rôle, un objectif et des outils définis, qui collaborent sur des tâches en plusieurs étapes comme la recherche, la création de contenu et les pipelines d\'analyse de données.',
        es: 'CrewAI es un framework de Python para orquestar equipos de agentes de IA, cada uno con un rol, un objetivo y herramientas definidos, que colaboran en tareas de varios pasos como investigación, creación de contenido y pipelines de análisis de datos.',
        ar: 'CrewAI هو إطار عمل بايثون لتنسيق فرق من وكلاء الذكاء الاصطناعي، كل منهم له دور وهدف وأدوات محددة، يتعاونون في مهام متعددة الخطوات مثل البحث وإنشاء المحتوى وخطوط تحليل البيانات.',
      },
    },
    {
      question: {
        en: 'Is CrewAI free to use?',
        fr: 'CrewAI est-il gratuit ?',
        es: '¿CrewAI es gratuito?',
        ar: 'هل CrewAI مجاني الاستخدام؟',
      },
      answer: {
        en: 'The CrewAI open-source framework is free. CrewAI also offers a paid enterprise platform with hosting, observability, and team collaboration features for running crews in production.',
        fr: 'Le framework open-source CrewAI est gratuit. CrewAI propose également une plateforme entreprise payante avec hébergement, observabilité et fonctionnalités de collaboration d\'équipe pour exécuter des équipes en production.',
        es: 'El framework de código abierto CrewAI es gratuito. CrewAI también ofrece una plataforma empresarial de pago con hospedaje, observabilidad y funciones de colaboración en equipo para ejecutar crews en producción.',
        ar: 'إطار عمل CrewAI مفتوح المصدر مجاني. يقدم CrewAI أيضاً منصة مؤسسية مدفوعة مع استضافة وإمكانية مراقبة وميزات تعاون جماعي لتشغيل الفرق في الإنتاج.',
      },
    },
    {
      question: {
        en: 'How is CrewAI different from AutoGen or LangChain?',
        fr: 'En quoi CrewAI diffère-t-il d\'AutoGen ou LangChain ?',
        es: '¿En qué se diferencia CrewAI de AutoGen o LangChain?',
        ar: 'كيف يختلف CrewAI عن AutoGen أو LangChain؟',
      },
      answer: {
        en: 'CrewAI uses a higher-level, role-based abstraction (agents with roles, goals, and processes) compared to AutoGen\'s conversational multi-agent model and LangChain\'s lower-level component toolbox, making it faster to set up for business-process-style automations.',
        fr: 'CrewAI utilise une abstraction de plus haut niveau basée sur les rôles (agents avec rôles, objectifs et processus) par rapport au modèle conversationnel multi-agents d\'AutoGen et à la boîte à outils de composants de bas niveau de LangChain, ce qui le rend plus rapide à configurer pour les automatisations de type processus métier.',
        es: 'CrewAI utiliza una abstracción de nivel más alto basada en roles (agentes con roles, objetivos y procesos) en comparación con el modelo conversacional multiagente de AutoGen y la caja de herramientas de componentes de bajo nivel de LangChain, lo que lo hace más rápido de configurar para automatizaciones tipo proceso empresarial.',
        ar: 'يستخدم CrewAI تجريداً أعلى مستوى قائماً على الأدوار (وكلاء بأدوار وأهداف وعمليات) مقارنة بنموذج AutoGen الحواري متعدد الوكلاء وصندوق أدوات LangChain منخفض المستوى، مما يجعله أسرع في الإعداد لأتمتة العمليات التجارية.',
      },
    },
  ],
  opendevin: [
    {
      question: {
        en: 'What is OpenDevin?',
        fr: 'Qu\'est-ce qu\'OpenDevin ?',
        es: '¿Qué es OpenDevin?',
        ar: 'ما هو OpenDevin؟',
      },
      answer: {
        en: 'OpenDevin (also known as OpenHands) is an open-source platform for AI software development agents that can write code, run commands in a sandboxed terminal, browse the web, and iterate on tasks autonomously.',
        fr: 'OpenDevin (également connu sous le nom d\'OpenHands) est une plateforme open-source d\'agents de développement logiciel IA capables d\'écrire du code, d\'exécuter des commandes dans un terminal sandboxé, de naviguer sur le web et d\'itérer sur des tâches de manière autonome.',
        es: 'OpenDevin (también conocido como OpenHands) es una plataforma de código abierto para agentes de desarrollo de software con IA que pueden escribir código, ejecutar comandos en una terminal aislada, navegar por la web e iterar sobre tareas de forma autónoma.',
        ar: 'OpenDevin (المعروف أيضاً باسم OpenHands) هو منصة مفتوحة المصدر لوكلاء تطوير برمجيات بالذكاء الاصطناعي يمكنها كتابة الكود وتشغيل أوامر في طرفية معزولة والتصفح على الويب وتكرار المهام بشكل مستقل.',
      },
    },
    {
      question: {
        en: 'Is it safe to let OpenDevin run code automatically?',
        fr: 'Est-il sûr de laisser OpenDevin exécuter du code automatiquement ?',
        es: '¿Es seguro dejar que OpenDevin ejecute código automáticamente?',
        ar: 'هل من الآمن ترك OpenDevin يشغل الكود تلقائياً؟',
      },
      answer: {
        en: 'OpenDevin runs commands inside an isolated sandbox (typically a Docker container), which limits the impact on your main system. Even so, it is recommended to review agent-generated changes before merging them into production codebases.',
        fr: 'OpenDevin exécute les commandes dans un sandbox isolé (généralement un conteneur Docker), ce qui limite l\'impact sur votre système principal. Néanmoins, il est recommandé de relire les modifications générées par l\'agent avant de les fusionner dans des bases de code de production.',
        es: 'OpenDevin ejecuta los comandos dentro de un sandbox aislado (normalmente un contenedor Docker), lo que limita el impacto en tu sistema principal. Aun así, se recomienda revisar los cambios generados por el agente antes de fusionarlos en bases de código de producción.',
        ar: 'يشغل OpenDevin الأوامر داخل بيئة معزولة (عادة حاوية Docker)، مما يحد من التأثير على نظامك الرئيسي. ومع ذلك، يُنصح بمراجعة التغييرات التي يولدها الوكيل قبل دمجها في قواعد الكود الإنتاجية.',
      },
    },
    {
      question: {
        en: 'Do I need my own LLM API key to use OpenDevin?',
        fr: 'Ai-je besoin de ma propre clé API LLM pour utiliser OpenDevin ?',
        es: '¿Necesito mi propia clave API de LLM para usar OpenDevin?',
        ar: 'هل أحتاج إلى مفتاح واجهة برمجة تطبيقات نموذج لغوي خاص بي لاستخدام OpenDevin؟',
      },
      answer: {
        en: 'Yes, since OpenDevin is open-source and self-hosted, you connect it to an LLM provider of your choice (such as OpenAI, Anthropic, or a local model) using your own API key, and you pay that provider directly for usage.',
        fr: 'Oui, puisqu\'OpenDevin est open-source et auto-hébergé, vous le connectez à un fournisseur de LLM de votre choix (comme OpenAI, Anthropic ou un modèle local) avec votre propre clé API, et vous payez ce fournisseur directement pour l\'utilisation.',
        es: 'Sí, dado que OpenDevin es de código abierto y autohospedado, lo conectas a un proveedor de LLM de tu elección (como OpenAI, Anthropic o un modelo local) usando tu propia clave API, y pagas a ese proveedor directamente por el uso.',
        ar: 'نعم، بما أن OpenDevin مفتوح المصدر ومستضاف ذاتياً، فإنك تربطه بمزود نموذج لغوي من اختيارك (مثل OpenAI أو Anthropic أو نموذج محلي) باستخدام مفتاح واجهة برمجة التطبيقات الخاص بك، وتدفع لذلك المزود مباشرة مقابل الاستخدام.',
      },
    },
  ],
  'gpt-researcher': [
    {
      question: {
        en: 'What does GPT Researcher do?',
        fr: 'Que fait GPT Researcher ?',
        es: '¿Qué hace GPT Researcher?',
        ar: 'ما الذي يفعله GPT Researcher؟',
      },
      answer: {
        en: 'GPT Researcher is an autonomous agent that takes a research query, searches and reads multiple web sources, and compiles the findings into a structured, cited report — automating hours of manual research into minutes.',
        fr: 'GPT Researcher est un agent autonome qui prend une question de recherche, parcourt et lit plusieurs sources web, et compile les résultats dans un rapport structuré et sourcé — automatisant des heures de recherche manuelle en quelques minutes.',
        es: 'GPT Researcher es un agente autónomo que toma una consulta de investigación, busca y lee múltiples fuentes web, y compila los hallazgos en un informe estructurado y citado — automatizando horas de investigación manual en minutos.',
        ar: 'GPT Researcher هو وكيل مستقل يأخذ استعلام بحث، ويبحث ويقرأ مصادر ويب متعددة، ويجمع النتائج في تقرير منظم وموثق — مما يحول ساعات من البحث اليدوي إلى دقائق.',
      },
    },
    {
      question: {
        en: 'Is GPT Researcher free?',
        fr: 'GPT Researcher est-il gratuit ?',
        es: '¿GPT Researcher es gratis?',
        ar: 'هل GPT Researcher مجاني؟',
      },
      answer: {
        en: 'GPT Researcher is open-source and free to run yourself. You pay only for the LLM and search API calls it makes (such as OpenAI and a search provider), so cost depends on how many reports you generate.',
        fr: 'GPT Researcher est open-source et gratuit à exécuter soi-même. Vous payez uniquement les appels API LLM et de recherche qu\'il effectue (comme OpenAI et un fournisseur de recherche), donc le coût dépend du nombre de rapports générés.',
        es: 'GPT Researcher es de código abierto y gratis para ejecutar por tu cuenta. Solo pagas las llamadas a la API de LLM y de búsqueda que realiza (como OpenAI y un proveedor de búsqueda), por lo que el costo depende de cuántos informes generes.',
        ar: 'GPT Researcher مفتوح المصدر ومجاني للتشغيل بنفسك. تدفع فقط مقابل استدعاءات النموذج اللغوي والبحث التي يقوم بها (مثل OpenAI ومزود بحث)، لذا تعتمد التكلفة على عدد التقارير التي تنشئها.',
      },
    },
    {
      question: {
        en: 'How accurate and reliable are GPT Researcher\'s reports?',
        fr: 'Quelle est la fiabilité des rapports de GPT Researcher ?',
        es: '¿Qué tan precisos y confiables son los informes de GPT Researcher?',
        ar: 'ما مدى دقة وموثوقية تقارير GPT Researcher؟',
      },
      answer: {
        en: 'GPT Researcher cites the sources it used for each claim, which makes it easier to verify, but like any AI tool it can still misread or misweight sources. Treat its reports as a strong first draft to be reviewed, not a final authority.',
        fr: 'GPT Researcher cite les sources utilisées pour chaque affirmation, ce qui facilite la vérification, mais comme tout outil IA, il peut encore mal interpréter ou mal pondérer les sources. Considérez ses rapports comme un solide premier brouillon à vérifier, pas comme une autorité finale.',
        es: 'GPT Researcher cita las fuentes que usó para cada afirmación, lo que facilita su verificación, pero como cualquier herramienta de IA, puede malinterpretar o sobrevalorar fuentes. Trata sus informes como un buen primer borrador a revisar, no como una autoridad final.',
        ar: 'يستشهد GPT Researcher بالمصادر التي استخدمها لكل ادعاء، مما يسهل التحقق، لكنه مثل أي أداة ذكاء اصطناعي قد يخطئ في قراءة أو تقييم المصادر. تعامل مع تقاريره كمسودة أولى قوية تحتاج للمراجعة، وليس كمرجع نهائي.',
      },
    },
  ],
  'gpt-engineer': [
    {
      question: {
        en: 'What is GPT Engineer?',
        fr: 'Qu\'est-ce que GPT Engineer ?',
        es: '¿Qué es GPT Engineer?',
        ar: 'ما هو GPT Engineer؟',
      },
      answer: {
        en: 'GPT Engineer is an open-source AI agent that generates an entire codebase from a plain-language project description, asking clarifying questions before writing the code, project structure, and dependencies.',
        fr: 'GPT Engineer est un agent IA open-source qui génère une base de code entière à partir d\'une description de projet en langage naturel, en posant des questions de clarification avant d\'écrire le code, la structure du projet et les dépendances.',
        es: 'GPT Engineer es un agente de IA de código abierto que genera toda una base de código a partir de una descripción de proyecto en lenguaje natural, haciendo preguntas aclaratorias antes de escribir el código, la estructura del proyecto y las dependencias.',
        ar: 'GPT Engineer هو وكيل ذكاء اصطناعي مفتوح المصدر يولد قاعدة كود كاملة من وصف مشروع بلغة طبيعية، ويطرح أسئلة توضيحية قبل كتابة الكود وبنية المشروع والتبعيات.',
      },
    },
    {
      question: {
        en: 'Can GPT Engineer build a complete application?',
        fr: 'GPT Engineer peut-il créer une application complète ?',
        es: '¿Puede GPT Engineer crear una aplicación completa?',
        ar: 'هل يمكن لـ GPT Engineer بناء تطبيق كامل؟',
      },
      answer: {
        en: 'GPT Engineer can scaffold a working starting point for small-to-medium applications, including file structure and basic logic. For larger or production-grade apps, expect to refine and extend the generated code yourself.',
        fr: 'GPT Engineer peut créer un point de départ fonctionnel pour des applications petites à moyennes, incluant la structure des fichiers et la logique de base. Pour des applications plus grandes ou de niveau production, attendez-vous à devoir affiner et étendre le code généré vous-même.',
        es: 'GPT Engineer puede crear un punto de partida funcional para aplicaciones pequeñas a medianas, incluyendo la estructura de archivos y la lógica básica. Para aplicaciones más grandes o de nivel de producción, deberás refinar y ampliar el código generado tú mismo.',
        ar: 'يمكن لـ GPT Engineer إنشاء نقطة بداية عاملة لتطبيقات صغيرة إلى متوسطة، بما في ذلك بنية الملفات والمنطق الأساسي. بالنسبة للتطبيقات الأكبر أو الجاهزة للإنتاج، توقع أنك ستحتاج لتحسين وتوسيع الكود المولّد بنفسك.',
      },
    },
    {
      question: {
        en: 'Is GPT Engineer free to use?',
        fr: 'GPT Engineer est-il gratuit ?',
        es: '¿GPT Engineer es gratis?',
        ar: 'هل GPT Engineer مجاني الاستخدام؟',
      },
      answer: {
        en: 'GPT Engineer is open-source and free to run locally. You provide your own LLM API key, so the only cost is the API usage charged by your chosen model provider.',
        fr: 'GPT Engineer est open-source et gratuit à exécuter localement. Vous fournissez votre propre clé API LLM, donc le seul coût est l\'utilisation de l\'API facturée par le fournisseur de modèle choisi.',
        es: 'GPT Engineer es de código abierto y gratis para ejecutar localmente. Tú proporcionas tu propia clave API de LLM, por lo que el único costo es el uso de la API que cobra el proveedor del modelo elegido.',
        ar: 'GPT Engineer مفتوح المصدر ومجاني للتشغيل محلياً. توفر مفتاح واجهة برمجة تطبيقات النموذج اللغوي الخاص بك، لذا فإن التكلفة الوحيدة هي استخدام واجهة برمجة التطبيقات التي يفرضها مزود النموذج الذي تختاره.',
      },
    },
  ],
  'botpress-ai': [
    {
      question: {
        en: 'What is Botpress used for?',
        fr: 'À quoi sert Botpress ?',
        es: '¿Para qué se usa Botpress?',
        ar: 'لماذا يُستخدم Botpress؟',
      },
      answer: {
        en: 'Botpress is a platform for building AI-powered chatbots and conversational agents that can be deployed on websites, WhatsApp, Messenger, Slack, and other channels, combining a visual flow builder with LLM-based responses.',
        fr: 'Botpress est une plateforme pour créer des chatbots et agents conversationnels alimentés par IA, déployables sur des sites web, WhatsApp, Messenger, Slack et d\'autres canaux, combinant un constructeur de flux visuel avec des réponses basées sur des LLM.',
        es: 'Botpress es una plataforma para crear chatbots y agentes conversacionales impulsados por IA que se pueden desplegar en sitios web, WhatsApp, Messenger, Slack y otros canales, combinando un constructor de flujos visual con respuestas basadas en LLM.',
        ar: 'Botpress منصة لبناء روبوتات محادثة ووكلاء حوار مدعومين بالذكاء الاصطناعي يمكن نشرها على المواقع وWhatsApp وMessenger وSlack وقنوات أخرى، تجمع بين منشئ تدفقات بصري وردود قائمة على النماذج اللغوية.',
      },
    },
    {
      question: {
        en: 'Is Botpress free to use?',
        fr: 'Botpress est-il gratuit ?',
        es: '¿Botpress es gratuito?',
        ar: 'هل Botpress مجاني الاستخدام؟',
      },
      answer: {
        en: 'Botpress offers a free plan with usage limits suitable for testing and small bots, plus paid plans that scale with the number of conversations and add features like advanced analytics and team collaboration.',
        fr: 'Botpress propose un plan gratuit avec des limites d\'utilisation adaptées aux tests et aux petits bots, ainsi que des plans payants qui évoluent selon le nombre de conversations et ajoutent des fonctionnalités comme l\'analytique avancée et la collaboration d\'équipe.',
        es: 'Botpress ofrece un plan gratuito con límites de uso adecuados para pruebas y bots pequeños, además de planes de pago que escalan según el número de conversaciones y añaden funciones como análisis avanzado y colaboración en equipo.',
        ar: 'يقدم Botpress خطة مجانية بحدود استخدام مناسبة للاختبار والروبوتات الصغيرة، بالإضافة إلى خطط مدفوعة تتوسع مع عدد المحادثات وتضيف ميزات مثل التحليلات المتقدمة والتعاون الجماعي.',
      },
    },
    {
      question: {
        en: 'Can Botpress connect to WhatsApp and Messenger?',
        fr: 'Botpress peut-il se connecter à WhatsApp et Messenger ?',
        es: '¿Puede Botpress conectarse a WhatsApp y Messenger?',
        ar: 'هل يمكن لـ Botpress الاتصال بـ WhatsApp و Messenger؟',
      },
      answer: {
        en: 'Yes, Botpress provides built-in channel integrations for WhatsApp, Messenger, Slack, Telegram, and web chat widgets, so the same bot logic can run across multiple messaging platforms.',
        fr: 'Oui, Botpress fournit des intégrations de canaux intégrées pour WhatsApp, Messenger, Slack, Telegram et des widgets de chat web, afin que la même logique de bot puisse fonctionner sur plusieurs plateformes de messagerie.',
        es: 'Sí, Botpress proporciona integraciones de canal incorporadas para WhatsApp, Messenger, Slack, Telegram y widgets de chat web, de modo que la misma lógica del bot puede ejecutarse en múltiples plataformas de mensajería.',
        ar: 'نعم، يوفر Botpress تكاملات قنوات مدمجة لـ WhatsApp و Messenger و Slack و Telegram وأدوات الدردشة على الويب، حتى يتمكن منطق الروبوت نفسه من العمل عبر منصات مراسلة متعددة.',
      },
    },
  ],
  'voiceflow-ai': [
    {
      question: {
        en: 'What is Voiceflow used for?',
        fr: 'À quoi sert Voiceflow ?',
        es: '¿Para qué se usa Voiceflow?',
        ar: 'لماذا يُستخدم Voiceflow؟',
      },
      answer: {
        en: 'Voiceflow is a design and development platform for building conversational AI agents — chat and voice assistants — with a visual canvas that lets teams collaborate on dialogue flows before connecting them to an LLM.',
        fr: 'Voiceflow est une plateforme de conception et de développement pour créer des agents IA conversationnels — assistants de chat et vocaux — avec une interface visuelle permettant aux équipes de collaborer sur les flux de dialogue avant de les connecter à un LLM.',
        es: 'Voiceflow es una plataforma de diseño y desarrollo para crear agentes de IA conversacionales — asistentes de chat y voz — con un lienzo visual que permite a los equipos colaborar en flujos de diálogo antes de conectarlos a un LLM.',
        ar: 'Voiceflow منصة تصميم وتطوير لبناء وكلاء ذكاء اصطناعي حواريين — مساعدات دردشة وصوت — بلوحة بصرية تتيح للفرق التعاون على تدفقات الحوار قبل ربطها بنموذج لغوي.',
      },
    },
    {
      question: {
        en: 'Is Voiceflow free?',
        fr: 'Voiceflow est-il gratuit ?',
        es: '¿Voiceflow es gratis?',
        ar: 'هل Voiceflow مجاني؟',
      },
      answer: {
        en: 'Voiceflow offers a free starter plan for individuals building a single agent, with paid plans for teams that need more agents, higher usage limits, and collaboration features.',
        fr: 'Voiceflow propose un plan de démarrage gratuit pour les particuliers créant un seul agent, avec des plans payants pour les équipes ayant besoin de plus d\'agents, de limites d\'utilisation plus élevées et de fonctionnalités de collaboration.',
        es: 'Voiceflow ofrece un plan inicial gratuito para personas que crean un solo agente, con planes de pago para equipos que necesitan más agentes, límites de uso más altos y funciones de colaboración.',
        ar: 'يقدم Voiceflow خطة بداية مجانية للأفراد الذين يبنون وكيلاً واحداً، مع خطط مدفوعة للفرق التي تحتاج المزيد من الوكلاء وحدود استخدام أعلى وميزات تعاون.',
      },
    },
    {
      question: {
        en: 'Can Voiceflow build voice assistants, not just text chatbots?',
        fr: 'Voiceflow peut-il créer des assistants vocaux, pas seulement des chatbots texte ?',
        es: '¿Puede Voiceflow crear asistentes de voz, no solo chatbots de texto?',
        ar: 'هل يمكن لـ Voiceflow بناء مساعدات صوتية، وليس فقط روبوتات محادثة نصية؟',
      },
      answer: {
        en: 'Yes, Voiceflow was originally built for voice assistant design (such as Alexa skills) and supports both voice and text/chat interfaces from the same dialogue flow, making it useful for omnichannel agent design.',
        fr: 'Oui, Voiceflow a été conçu à l\'origine pour la conception d\'assistants vocaux (comme les skills Alexa) et prend en charge à la fois les interfaces vocales et texte/chat à partir du même flux de dialogue, ce qui le rend utile pour la conception d\'agents omnicanaux.',
        es: 'Sí, Voiceflow se creó originalmente para el diseño de asistentes de voz (como las skills de Alexa) y admite interfaces de voz y de texto/chat desde el mismo flujo de diálogo, lo que lo hace útil para el diseño de agentes omnicanal.',
        ar: 'نعم، تم بناء Voiceflow في الأصل لتصميم المساعدات الصوتية (مثل مهارات Alexa) ويدعم واجهات الصوت والنص/الدردشة من نفس تدفق الحوار، مما يجعله مفيداً لتصميم الوكلاء متعددي القنوات.',
      },
    },
  ],
  'google-veo': [
    {
      question: {
        en: 'Is Google Veo free to use?',
        fr: 'Google Veo est-il gratuit ?',
        es: '¿Es Google Veo gratis?',
        ar: 'هل Google Veo مجاني؟',
      },
      answer: {
        en: 'You can generate Veo video clips for free inside Google Vids with any Google account. For higher limits and the most advanced quality tiers, Veo is available through Google AI Pro ($19.99/mo), Google AI Ultra, and the Gemini API with pay-as-you-go per-second pricing.',
        fr: 'Vous pouvez générer des clips Veo gratuitement dans Google Vids avec n\'importe quel compte Google. Pour des limites plus élevées et les meilleures qualités, Veo est accessible via Google AI Pro (19,99$/mois), Google AI Ultra et l\'API Gemini avec une facturation à la seconde.',
        es: 'Puedes generar clips de Veo gratis dentro de Google Vids con cualquier cuenta de Google. Para límites más altos y las mejores calidades, Veo está disponible mediante Google AI Pro ($19.99/mes), Google AI Ultra y la API de Gemini con pago por segundo.',
        ar: 'يمكنك إنشاء مقاطع Veo مجاناً داخل Google Vids بأي حساب Google. وللحصول على حدود أعلى وأفضل مستويات الجودة، يتوفر Veo عبر Google AI Pro (19.99 دولار شهرياً) وGoogle AI Ultra وواجهة Gemini API بنظام الدفع لكل ثانية.',
      },
    },
    {
      question: {
        en: 'What makes Google Veo different from other AI video generators?',
        fr: 'Qu\'est-ce qui distingue Google Veo des autres générateurs vidéo IA ?',
        es: '¿Qué diferencia a Google Veo de otros generadores de vídeo con IA?',
        ar: 'ما الذي يميّز Google Veo عن مولّدات الفيديو الأخرى؟',
      },
      answer: {
        en: 'Veo generates native synchronized audio — including speech with lip-sync, sound effects and ambient sound — at the same time as the video, and is known for strong physical realism in motion. It is also deeply integrated across Google products like the Gemini app, Flow, Google Vids and YouTube Shorts.',
        fr: 'Veo génère un audio synchronisé natif — voix avec synchronisation labiale, effets sonores et sons d\'ambiance — en même temps que la vidéo, et se distingue par un réalisme de mouvement marqué. Il est aussi intégré dans les produits Google comme l\'app Gemini, Flow, Google Vids et YouTube Shorts.',
        es: 'Veo genera audio sincronizado nativo — voz con sincronización labial, efectos de sonido y sonido ambiente — al mismo tiempo que el vídeo, y destaca por su realismo de movimiento. Además está integrado en productos de Google como la app Gemini, Flow, Google Vids y YouTube Shorts.',
        ar: 'يولّد Veo صوتاً متزامناً أصلياً — يشمل الكلام مع مزامنة الشفاه والمؤثرات الصوتية والصوت المحيط — في الوقت نفسه مع الفيديو، ويتميّز بواقعية حركة قوية. كما أنه مدمج بعمق في منتجات Google مثل تطبيق Gemini وFlow وGoogle Vids وYouTube Shorts.',
      },
    },
  ],
  'genspark-ai': [
    {
      question: {
        en: 'Is Genspark free?',
        fr: 'Genspark est-il gratuit ?',
        es: '¿Es Genspark gratis?',
        ar: 'هل Genspark مجاني؟',
      },
      answer: {
        en: 'Genspark has a free plan that gives you around 100 credits per day, about 1GB of AI Drive storage, and basic access to the Super Agent. Paid tiers include Plus (around $24.99/mo with roughly 10,000–12,000 monthly credits) and a Pro/Team tier for heavier use and team workspaces.',
        fr: 'Genspark propose un plan gratuit offrant environ 100 crédits par jour, près d\'1 Go de stockage AI Drive et un accès de base au Super Agent. Les offres payantes incluent Plus (environ 24,99$/mois avec à peu près 10 000 à 12 000 crédits mensuels) et un palier Pro/Team pour un usage intensif et des espaces d\'équipe.',
        es: 'Genspark tiene un plan gratuito que ofrece alrededor de 100 créditos al día, cerca de 1 GB de almacenamiento en AI Drive y acceso básico al Súper Agente. Los niveles de pago incluyen Plus (en torno a $24.99/mes con aproximadamente 10,000–12,000 créditos mensuales) y un nivel Pro/Team para uso intensivo y espacios de equipo.',
        ar: 'يوفر Genspark خطة مجانية تمنحك نحو 100 رصيد يومياً، وقرابة 1 غيغابايت من تخزين AI Drive، ووصولاً أساسياً إلى الوكيل الخارق. وتشمل الخطط المدفوعة Plus (نحو 24.99 دولار شهرياً مع ما يقارب 10,000–12,000 رصيد شهري) وخطة Pro/Team للاستخدام المكثّف ومساحات الفرق.',
      },
    },
    {
      question: {
        en: 'What can the Genspark Super Agent do?',
        fr: 'Que peut faire le Super Agent de Genspark ?',
        es: '¿Qué puede hacer el Súper Agente de Genspark?',
        ar: 'ماذا يستطيع الوكيل الخارق من Genspark أن يفعل؟',
      },
      answer: {
        en: 'The Super Agent plans and completes multi-step tasks autonomously: it can research a topic, build a slide deck, generate images, take meeting notes, and even place real phone calls on your behalf with its "Call For Me" feature. It orchestrates multiple LLMs and more than 80 integrated tools to choose the best one for each step.',
        fr: 'Le Super Agent planifie et réalise des tâches en plusieurs étapes de façon autonome : il peut faire une recherche, créer une présentation, générer des images, prendre des notes de réunion et même passer de vrais appels téléphoniques pour vous grâce à sa fonction « Call For Me ». Il orchestre plusieurs LLM et plus de 80 outils intégrés pour choisir le meilleur à chaque étape.',
        es: 'El Súper Agente planifica y completa tareas de varios pasos de forma autónoma: puede investigar un tema, crear una presentación, generar imágenes, tomar notas de reuniones e incluso hacer llamadas telefónicas reales por ti con su función "Call For Me". Orquesta varios LLM y más de 80 herramientas integradas para elegir la mejor en cada paso.',
        ar: 'يخطّط الوكيل الخارق وينجز المهام متعددة الخطوات بشكل مستقل: يمكنه البحث في موضوع، وبناء عرض شرائح، وتوليد الصور، وتدوين ملاحظات الاجتماعات، بل وإجراء مكالمات هاتفية حقيقية نيابةً عنك عبر ميزة «Call For Me». وينسّق بين عدة نماذج لغوية وأكثر من 80 أداة مدمجة لاختيار الأنسب لكل خطوة.',
      },
    },
  ],
  'wan-video': [
    {
      question: {
        en: 'Is Wan really open source?',
        fr: 'Wan est-il vraiment open source ?',
        es: '¿Wan es realmente de código abierto?',
        ar: 'هل Wan مفتوح المصدر فعلاً؟',
      },
      answer: {
        en: 'Yes. Wan is a family of open-source video models from Alibaba\'s Tongyi Lab, released with weights, training code and inference scripts under the Apache 2.0 license. You can self-host it for free if you have suitable GPUs, or use hosted plans on wan.video without managing infrastructure.',
        fr: 'Oui. Wan est une famille de modèles vidéo open source du Tongyi Lab d\'Alibaba, publiée avec les poids, le code d\'entraînement et les scripts d\'inférence sous licence Apache 2.0. Vous pouvez l\'héberger gratuitement avec des GPU adaptés, ou utiliser les formules hébergées sur wan.video sans gérer l\'infrastructure.',
        es: 'Sí. Wan es una familia de modelos de vídeo de código abierto del Tongyi Lab de Alibaba, publicada con pesos, código de entrenamiento y scripts de inferencia bajo licencia Apache 2.0. Puedes alojarlo gratis con GPU adecuadas o usar planes alojados en wan.video sin gestionar infraestructura.',
        ar: 'نعم. Wan عائلة من نماذج الفيديو مفتوحة المصدر من Tongyi Lab التابع لـ Alibaba، صدرت مع الأوزان وكود التدريب وسكربتات الاستدلال بترخيص Apache 2.0. يمكنك استضافتها مجاناً إذا توفّرت لديك وحدات GPU مناسبة، أو استخدام الخطط المستضافة على wan.video دون إدارة البنية التحتية.',
      },
    },
    {
      question: {
        en: 'What can Wan generate?',
        fr: 'Que peut générer Wan ?',
        es: '¿Qué puede generar Wan?',
        ar: 'ماذا يمكن أن يولّد Wan؟',
      },
      answer: {
        en: 'Wan supports both text-to-video and image-to-video, generating clips up to about 15 seconds with native audio-visual synchronization, including speech with lip-sync and sound effects. Its reference-to-video feature keeps a character\'s appearance consistent across multiple clips for multi-shot storytelling.',
        fr: 'Wan prend en charge le texte-vers-vidéo et l\'image-vers-vidéo, en générant des clips jusqu\'à environ 15 secondes avec synchronisation audio-vidéo native, voix avec synchronisation labiale et effets sonores inclus. Sa fonction image de référence maintient l\'apparence d\'un personnage cohérente sur plusieurs clips pour une narration multi-plans.',
        es: 'Wan admite texto a vídeo e imagen a vídeo, generando clips de hasta unos 15 segundos con sincronización audiovisual nativa, incluida voz con sincronización labial y efectos de sonido. Su función de imagen de referencia mantiene la apariencia de un personaje consistente en varios clips para narrar en varios planos.',
        ar: 'يدعم Wan التحويل من نص إلى فيديو ومن صورة إلى فيديو، مولّداً مقاطع تصل إلى نحو 15 ثانية مع مزامنة صوتية-بصرية أصلية تشمل الكلام مع مزامنة الشفاه والمؤثرات الصوتية. وتحافظ ميزة الصورة المرجعية على ثبات مظهر الشخصية عبر عدة مقاطع للسرد متعدد اللقطات.',
      },
    },
  ],
};
