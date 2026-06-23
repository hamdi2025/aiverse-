import { TOOLS_DATA } from '@/lib/tools';
import { buildAffiliateUrl } from '@/lib/affiliate';

type Locale = 'en' | 'fr' | 'es' | 'ar';
interface Props { params: { locale: Locale } }

const BASE = 'https://getaiverse.online';
const LOCALES: Locale[] = ['en', 'fr', 'es', 'ar'];

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

const PAGE = {
  title: {
    en: 'Best AI Agents & LLMs in 2026: Coding Agents vs Autonomous Agents vs Open Models',
    fr: 'Meilleurs agents IA & LLM en 2026 : agents de code, agents autonomes et modèles ouverts',
    es: 'Mejores agentes de IA y LLM en 2026: agentes de código, agentes autónomos y modelos abiertos',
    ar: 'أفضل وكلاء الذكاء الاصطناعي ونماذج اللغة في 2026: وكلاء البرمجة والوكلاء المستقلون والنماذج المفتوحة',
  },
  meta: {
    en: 'A deep, expert comparison of 2026’s top AI agents and LLMs — Codex, Devin, OpenCode, Cline, Claude Cowork, Manus, OpenClaw, MiniMax, Kimi, Qwen, GLM, Hermes and Llama 4 — with plain-English guidance and when each one wins.',
    fr: 'Comparatif approfondi et expert des meilleurs agents IA et LLM de 2026 — Codex, Devin, OpenCode, Cline, Claude Cowork, Manus, OpenClaw, MiniMax, Kimi, Qwen, GLM, Hermes et Llama 4 — expliqué simplement, avec le cas où chacun gagne.',
    es: 'Comparativa profunda y experta de los mejores agentes de IA y LLM de 2026 — Codex, Devin, OpenCode, Cline, Claude Cowork, Manus, OpenClaw, MiniMax, Kimi, Qwen, GLM, Hermes y Llama 4 — explicada de forma sencilla y cuándo gana cada uno.',
    ar: 'مقارنة معمّقة واحترافية لأفضل وكلاء الذكاء الاصطناعي ونماذج اللغة لعام 2026 — Codex وDevin وOpenCode وCline وClaude Cowork وManus وOpenClaw وMiniMax وKimi وQwen وGLM وHermes وLlama 4 — بشرح مبسّط ومتى يتفوّق كل منها.',
  },
  intro: {
    en: 'AI agents exploded in 2026. But "agent" now means three very different things: coding agents that write and ship software, autonomous agents that finish everyday computer work, and the open LLMs (large language models) that power them. This guide explains each in plain language for beginners, then goes deep on benchmarks and pricing for specialists — and tells you exactly when each tool wins.',
    fr: 'Les agents IA ont explosé en 2026. Mais le mot « agent » recouvre désormais trois choses très différentes : les agents de code qui écrivent et livrent du logiciel, les agents autonomes qui accomplissent le travail quotidien sur ordinateur, et les LLM ouverts (grands modèles de langage) qui les propulsent. Ce guide explique chacun simplement pour les débutants, puis entre dans les benchmarks et les prix pour les spécialistes — et vous dit précisément quand chaque outil gagne.',
    es: 'Los agentes de IA explotaron en 2026. Pero "agente" ahora significa tres cosas muy distintas: agentes de código que escriben y entregan software, agentes autónomos que completan el trabajo diario en el ordenador, y los LLM abiertos (grandes modelos de lenguaje) que los impulsan. Esta guía explica cada uno de forma sencilla para principiantes, luego profundiza en benchmarks y precios para especialistas, y te dice exactamente cuándo gana cada herramienta.',
    ar: 'انفجر استخدام وكلاء الذكاء الاصطناعي في 2026. لكن كلمة « وكيل » باتت تعني ثلاثة أشياء مختلفة تماماً: وكلاء البرمجة الذين يكتبون البرمجيات ويسلّمونها، والوكلاء المستقلون الذين ينجزون العمل اليومي على الحاسوب، ونماذج اللغة المفتوحة التي تشغّلها. يشرح هذا الدليل كلاً منها ببساطة للمبتدئين، ثم يتعمّق في المقاييس والأسعار للمختصّين، ويخبرك بدقة متى يتفوّق كل أداة.',
  },
  beginnerTitle: {
    en: 'For beginners: agent vs LLM vs coding agent',
    fr: 'Pour les débutants : agent vs LLM vs agent de code',
    es: 'Para principiantes: agente vs LLM vs agente de código',
    ar: 'للمبتدئين: الوكيل مقابل نموذج اللغة مقابل وكيل البرمجة',
  },
  beginner: {
    en: [
      ['An LLM (large language model)', 'is the "brain" — it reads and writes text. On its own it just answers you. Examples here: MiniMax, Kimi, Qwen, GLM, Hermes, Llama 4.'],
      ['A coding agent', 'uses an LLM to actually build software: it edits files, runs tests and opens pull requests. Examples: Codex, Devin, OpenCode, Cline, Aider, Trae.'],
      ['An autonomous agent', 'does everyday computer work end-to-end: research, documents, spreadsheets, web tasks. Examples: Claude Cowork, Manus, OpenClaw.'],
    ],
    fr: [
      ['Un LLM (grand modèle de langage)', 'est le « cerveau » — il lit et écrit du texte. Seul, il se contente de vous répondre. Exemples ici : MiniMax, Kimi, Qwen, GLM, Hermes, Llama 4.'],
      ['Un agent de code', 'utilise un LLM pour vraiment construire du logiciel : il modifie des fichiers, lance des tests et ouvre des pull requests. Exemples : Codex, Devin, OpenCode, Cline, Aider, Trae.'],
      ['Un agent autonome', 'réalise le travail quotidien sur ordinateur de bout en bout : recherche, documents, tableurs, tâches web. Exemples : Claude Cowork, Manus, OpenClaw.'],
    ],
    es: [
      ['Un LLM (gran modelo de lenguaje)', 'es el "cerebro": lee y escribe texto. Por sí solo solo te responde. Ejemplos aquí: MiniMax, Kimi, Qwen, GLM, Hermes, Llama 4.'],
      ['Un agente de código', 'usa un LLM para construir software de verdad: edita archivos, ejecuta pruebas y abre pull requests. Ejemplos: Codex, Devin, OpenCode, Cline, Aider, Trae.'],
      ['Un agente autónomo', 'realiza el trabajo diario en el ordenador de principio a fin: investigación, documentos, hojas de cálculo, tareas web. Ejemplos: Claude Cowork, Manus, OpenClaw.'],
    ],
    ar: [
      ['نموذج اللغة (LLM)', 'هو « الدماغ » — يقرأ ويكتب النص. بمفرده يكتفي بالإجابة. أمثلة هنا: MiniMax وKimi وQwen وGLM وHermes وLlama 4.'],
      ['وكيل البرمجة', 'يستخدم نموذج لغة لبناء البرمجيات فعلياً: يحرّر الملفات ويشغّل الاختبارات ويفتح طلبات الدمج. أمثلة: Codex وDevin وOpenCode وCline وAider وTrae.'],
      ['الوكيل المستقل', 'ينجز العمل اليومي على الحاسوب من البداية للنهاية: بحث، مستندات، جداول، مهام ويب. أمثلة: Claude Cowork وManus وOpenClaw.'],
    ],
  },
  expertTitle: {
    en: 'For specialists: benchmarks, context & price',
    fr: 'Pour les spécialistes : benchmarks, contexte et prix',
    es: 'Para especialistas: benchmarks, contexto y precio',
    ar: 'للمختصّين: المقاييس والسياق والسعر',
  },
  expertNote: {
    en: 'Headline figures as of June 2026. Coding agents are ranked on Terminal-Bench; open models on SWE-Bench Verified / Pro. Rankings shift with each release — treat these as a snapshot, not gospel.',
    fr: 'Chiffres clés en date de juin 2026. Les agents de code sont classés sur Terminal-Bench ; les modèles ouverts sur SWE-Bench Verified / Pro. Les classements bougent à chaque sortie — voyez-les comme un instantané, pas une vérité gravée.',
    es: 'Cifras principales a junio de 2026. Los agentes de código se clasifican en Terminal-Bench; los modelos abiertos en SWE-Bench Verified / Pro. Los rankings cambian con cada lanzamiento: trátalos como una instantánea, no como dogma.',
    ar: 'الأرقام الرئيسية حتى يونيو 2026. تُصنّف وكلاء البرمجة على Terminal-Bench؛ والنماذج المفتوحة على SWE-Bench Verified / Pro. تتغيّر التصنيفات مع كل إصدار — اعتبرها لقطة لحظية لا حقيقة نهائية.',
  },
  whenTitle: {
    en: 'When each one wins',
    fr: 'Quand chacun l’emporte',
    es: 'Cuándo gana cada uno',
    ar: 'متى يتفوّق كل منها',
  },
  faqTitle: {
    en: 'Frequently asked questions',
    fr: 'Questions fréquentes',
    es: 'Preguntas frecuentes',
    ar: 'الأسئلة الشائعة',
  },
  th: {
    tool: { en: 'Tool', fr: 'Outil', es: 'Herramienta', ar: 'الأداة' },
    type: { en: 'Type', fr: 'Type', es: 'Tipo', ar: 'النوع' },
    best: { en: 'Best for', fr: 'Idéal pour', es: 'Ideal para', ar: 'الأفضل لـ' },
    open: { en: 'Open source', fr: 'Open source', es: 'Código abierto', ar: 'مفتوح المصدر' },
    price: { en: 'Price', fr: 'Prix', es: 'Precio', ar: 'السعر' },
    spec: { en: 'Standout spec', fr: 'Point fort', es: 'Punto fuerte', ar: 'الميزة البارزة' },
  },
  visit: { en: 'Visit', fr: 'Visiter', es: 'Visitar', ar: 'زيارة' },
  details: { en: 'Details', fr: 'Détails', es: 'Detalles', ar: 'التفاصيل' },
};

// Editorial comparison matrix (ids must exist in TOOLS_DATA).
const ROWS: { id: string; type: Record<Locale, string>; best: Record<Locale, string>; open: boolean; spec: string }[] = [
  { id: 'codex', type: { en: 'Coding agent', fr: 'Agent de code', es: 'Agente de código', ar: 'وكيل برمجة' }, best: { en: 'ChatGPT users wanting parallel autonomous coding', fr: 'Utilisateurs ChatGPT voulant du codage autonome en parallèle', es: 'Usuarios de ChatGPT que quieren codificación autónoma en paralelo', ar: 'مستخدمو ChatGPT الراغبون ببرمجة مستقلة متوازية' }, open: false, spec: '~83% Terminal-Bench' },
  { id: 'devin', type: { en: 'Coding agent', fr: 'Agent de code', es: 'Agente de código', ar: 'وكيل برمجة' }, best: { en: 'Teams clearing a large ticket backlog', fr: 'Équipes vidant un gros backlog de tickets', es: 'Equipos que despejan un gran backlog de tickets', ar: 'فرق تُنجز قائمة مهام كبيرة' }, open: false, spec: 'Own cloud workspace' },
  { id: 'opencode', type: { en: 'Coding agent', fr: 'Agent de code', es: 'Agente de código', ar: 'وكيل برمجة' }, best: { en: 'Devs wanting a free, model-agnostic terminal agent', fr: 'Devs voulant un agent terminal gratuit et agnostique', es: 'Devs que quieren un agente de terminal gratis y agnóstico', ar: 'مطوّرون يريدون وكيل طرفية مجاني ومحايد للنماذج' }, open: true, spec: '170K+ GitHub stars' },
  { id: 'cline', type: { en: 'Coding agent', fr: 'Agent de code', es: 'Agente de código', ar: 'وكيل برمجة' }, best: { en: 'In-editor coding with approval of every change', fr: 'Codage dans l’éditeur avec approbation de chaque changement', es: 'Codificación en el editor con aprobación de cada cambio', ar: 'برمجة داخل المحرّر مع موافقة على كل تغيير' }, open: true, spec: 'VS Code + JetBrains' },
  { id: 'aider', type: { en: 'Coding agent', fr: 'Agent de code', es: 'Agente de código', ar: 'وكيل برمجة' }, best: { en: 'Git-native incremental edits', fr: 'Modifications incrémentales natives git', es: 'Ediciones incrementales nativas de git', ar: 'تعديلات تدريجية مدمجة مع git' }, open: true, spec: 'Auto git commits' },
  { id: 'trae', type: { en: 'AI IDE', fr: 'IDE IA', es: 'IDE con IA', ar: 'بيئة تطوير ذكية' }, best: { en: 'Free AI IDE with premium models', fr: 'IDE IA gratuit avec modèles premium', es: 'IDE con IA gratis con modelos premium', ar: 'بيئة تطوير مجانية بنماذج متميزة' }, open: false, spec: 'Free Claude/GPT access' },
  { id: 'minimax', type: { en: 'Open LLM', fr: 'LLM ouvert', es: 'LLM abierto', ar: 'نموذج مفتوح' }, best: { en: 'Cheapest frontier-class agentic coding', fr: 'Codage agentique de pointe le moins cher', es: 'Codificación agéntica de élite más barata', ar: 'برمجة وكيلة متقدّمة بأرخص سعر' }, open: true, spec: '~205K ctx · $0.25/1M in' },
  { id: 'kimi', type: { en: 'Open LLM', fr: 'LLM ouvert', es: 'LLM abierto', ar: 'نموذج مفتوح' }, best: { en: 'Best open model for coding & agents', fr: 'Meilleur modèle ouvert pour code et agents', es: 'Mejor modelo abierto para código y agentes', ar: 'أفضل نموذج مفتوح للبرمجة والوكلاء' }, open: true, spec: '262K ctx · ties GPT-5.5' },
  { id: 'qwen', type: { en: 'Open LLM', fr: 'LLM ouvert', es: 'LLM abierto', ar: 'نموذج مفتوح' }, best: { en: 'Multilingual + on-device flexibility', fr: 'Multilingue + flexibilité embarquée', es: 'Multilingüe + flexibilidad en dispositivo', ar: 'متعدد اللغات + مرونة على الأجهزة' }, open: true, spec: 'Many sizes' },
  { id: 'glm', type: { en: 'Open LLM', fr: 'LLM ouvert', es: 'LLM abierto', ar: 'نموذج مفتوح' }, best: { en: 'Top open-weight coder + MIT license', fr: 'Meilleur codeur open-weight + licence MIT', es: 'Mejor codificador open-weight + licencia MIT', ar: 'أفضل مبرمج مفتوح الأوزان + رخصة MIT' }, open: true, spec: '1M ctx · 81.0 Terminal-Bench' },
  { id: 'hermes', type: { en: 'Open LLM', fr: 'LLM ouvert', es: 'LLM abierto', ar: 'نموذج مفتوح' }, best: { en: 'Steerable, neutral, tool-calling builds', fr: 'Builds pilotables, neutres, à appel d’outils', es: 'Builds orientables, neutrales, con llamada a herramientas', ar: 'بناءات قابلة للتوجيه ومحايدة باستدعاء أدوات' }, open: true, spec: '14B/70B/405B' },
  { id: 'llama', type: { en: 'Open LLM', fr: 'LLM ouvert', es: 'LLM abierto', ar: 'نموذج مفتوح' }, best: { en: 'Default open foundation + huge context', fr: 'Fondation ouverte par défaut + contexte énorme', es: 'Base abierta por defecto + contexto enorme', ar: 'أساس مفتوح افتراضي + سياق ضخم' }, open: true, spec: 'Scout: 10M ctx' },
  { id: 'claude-cowork', type: { en: 'Autonomous agent', fr: 'Agent autonome', es: 'Agente autónomo', ar: 'وكيل مستقل' }, best: { en: 'Non-devs finishing file & document work', fr: 'Non-devs finissant le travail sur fichiers/documents', es: 'No-devs que terminan trabajo con archivos/documentos', ar: 'غير المبرمجين لإنجاز أعمال الملفات والمستندات' }, open: false, spec: 'Acts on local files' },
  { id: 'manus', type: { en: 'Autonomous agent', fr: 'Agent autonome', es: 'Agente autónomo', ar: 'وكيل مستقل' }, best: { en: 'One agent to research, build & ship', fr: 'Un agent pour rechercher, construire et livrer', es: 'Un agente para investigar, construir y entregar', ar: 'وكيل واحد للبحث والبناء والتسليم' }, open: false, spec: 'Web + code + slides' },
  { id: 'openclaw', type: { en: 'Autonomous agent', fr: 'Agent autonome', es: 'Agente autónomo', ar: 'وكيل مستقل' }, best: { en: 'Privacy-first self-hosted personal agent', fr: 'Agent personnel auto-hébergé axé confidentialité', es: 'Agente personal autoalojado centrado en privacidad', ar: 'وكيل شخصي ذاتي الاستضافة يركّز على الخصوصية' }, open: true, spec: 'Local · 100+ skills' },
];

const FAQ: { q: Record<Locale, string>; a: Record<Locale, string> }[] = [
  {
    q: { en: 'What is the difference between an AI agent and an LLM?', fr: 'Quelle est la différence entre un agent IA et un LLM ?', es: '¿Cuál es la diferencia entre un agente de IA y un LLM?', ar: 'ما الفرق بين وكيل الذكاء الاصطناعي ونموذج اللغة؟' },
    a: { en: 'An LLM generates text and answers questions. An AI agent uses an LLM as its brain but can also take actions — edit files, run code, browse the web or operate apps — to complete a task end-to-end.', fr: 'Un LLM génère du texte et répond aux questions. Un agent IA utilise un LLM comme cerveau mais peut aussi agir — modifier des fichiers, exécuter du code, naviguer sur le web ou piloter des applis — pour accomplir une tâche de bout en bout.', es: 'Un LLM genera texto y responde preguntas. Un agente de IA usa un LLM como cerebro pero también puede actuar — editar archivos, ejecutar código, navegar por la web u operar apps — para completar una tarea de principio a fin.', ar: 'يولّد نموذج اللغة النص ويجيب عن الأسئلة. أما وكيل الذكاء الاصطناعي فيستخدم نموذج لغة كدماغ لكنه يستطيع أيضاً التصرّف — تحرير الملفات وتشغيل الكود وتصفّح الويب وتشغيل التطبيقات — لإنجاز المهمة كاملة.' },
  },
  {
    q: { en: 'What is the best AI coding agent in 2026?', fr: 'Quel est le meilleur agent de code IA en 2026 ?', es: '¿Cuál es el mejor agente de código con IA en 2026?', ar: 'ما أفضل وكيل برمجة بالذكاء الاصطناعي في 2026؟' },
    a: { en: 'For raw benchmark performance, Codex (on GPT-5.5) and Claude Code lead Terminal-Bench. For a free, open-source option, OpenCode and Cline are the top picks. The best choice depends on your ecosystem, budget and whether you want autonomy or per-change control.', fr: 'Pour la performance brute, Codex (sur GPT-5.5) et Claude Code mènent Terminal-Bench. Pour une option gratuite et open source, OpenCode et Cline sont en tête. Le meilleur choix dépend de votre écosystème, de votre budget et de votre préférence entre autonomie et contrôle par changement.', es: 'En rendimiento puro, Codex (en GPT-5.5) y Claude Code lideran Terminal-Bench. Como opción gratuita y de código abierto, OpenCode y Cline son las mejores. La mejor elección depende de tu ecosistema, presupuesto y si prefieres autonomía o control por cambio.', ar: 'من حيث الأداء الخام، يتصدّر Codex (على GPT-5.5) وClaude Code اختبار Terminal-Bench. وكخيار مجاني ومفتوح المصدر، يتصدّر OpenCode وCline. ويعتمد الخيار الأفضل على بيئتك وميزانيتك وتفضيلك بين الاستقلالية أو التحكّم بكل تغيير.' },
  },
  {
    q: { en: 'Are open-source LLMs as good as GPT-5.5 or Claude?', fr: 'Les LLM open source valent-ils GPT-5.5 ou Claude ?', es: '¿Los LLM de código abierto son tan buenos como GPT-5.5 o Claude?', ar: 'هل نماذج اللغة المفتوحة بجودة GPT-5.5 أو Claude؟' },
    a: { en: 'In 2026 the gap has narrowed dramatically. Open models like Kimi K2.6 tie GPT-5.5 on several coding benchmarks, and MiniMax, Qwen, GLM and Llama 4 are all close behind — often at a fraction of the cost, with weights you can self-host.', fr: 'En 2026, l’écart s’est considérablement réduit. Des modèles ouverts comme Kimi K2.6 égalent GPT-5.5 sur plusieurs benchmarks de code, et MiniMax, Qwen, GLM et Llama 4 suivent de près — souvent à une fraction du coût, avec des poids auto-hébergeables.', es: 'En 2026 la brecha se ha reducido muchísimo. Modelos abiertos como Kimi K2.6 igualan a GPT-5.5 en varios benchmarks de código, y MiniMax, Qwen, GLM y Llama 4 vienen muy cerca — a menudo por una fracción del coste y con pesos que puedes autoalojar.', ar: 'في 2026 تقلّصت الفجوة بشكل كبير. نماذج مفتوحة مثل Kimi K2.6 تضاهي GPT-5.5 في عدة اختبارات برمجية، ويأتي MiniMax وQwen وGLM وLlama 4 خلفها مباشرة — غالباً بجزء يسير من التكلفة وبأوزان يمكنك استضافتها بنفسك.' },
  },
];

export async function generateMetadata({ params }: Props) {
  const locale = params.locale;
  return {
    title: `${PAGE.title[locale]} | AIverse`,
    description: PAGE.meta[locale],
    alternates: {
      canonical: `${BASE}/${locale}/ai-agents`,
      languages: {
        en: `${BASE}/en/ai-agents`, fr: `${BASE}/fr/ai-agents`,
        es: `${BASE}/es/ai-agents`, ar: `${BASE}/ar/ai-agents`,
        'x-default': `${BASE}/en/ai-agents`,
      },
    },
    openGraph: {
      title: PAGE.title[locale], description: PAGE.meta[locale],
      url: `${BASE}/${locale}/ai-agents`, siteName: 'AIverse', type: 'article',
    },
  };
}

const pricingColor = (p: string) =>
  p === 'Free' ? 'text-green-700' : p === 'Freemium' ? 'text-amber-700' : 'text-gray-700';

export default function AiAgentsPage({ params }: Props) {
  const locale = params.locale;
  const rows = ROWS
    .map((r) => ({ ...r, tool: TOOLS_DATA.find((t) => t.id === r.id) }))
    .filter((r): r is typeof r & { tool: NonNullable<typeof r.tool> } => !!r.tool);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: PAGE.title[locale],
    description: PAGE.meta[locale],
    inLanguage: locale,
    author: { '@type': 'Organization', name: 'AIverse', url: BASE },
    publisher: { '@type': 'Organization', name: 'AIverse', url: BASE },
    mainEntityOfPage: `${BASE}/${locale}/ai-agents`,
  };
  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: PAGE.title[locale],
    itemListElement: rows.map((r, i) => ({
      '@type': 'ListItem', position: i + 1, name: r.tool.name,
      url: `${BASE}/${locale}/tools/${r.tool.id}`,
    })),
  };
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map((item) => ({
      '@type': 'Question', name: item.q[locale],
      acceptedAnswer: { '@type': 'Answer', text: item.a[locale] },
    })),
  };
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'AIverse', item: `${BASE}/${locale}` },
      { '@type': 'ListItem', position: 2, name: PAGE.title[locale], item: `${BASE}/${locale}/ai-agents` },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-14">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6 flex flex-wrap items-center gap-1.5">
        <a href={`/${locale}`} className="hover:text-gray-900 transition">{locale === 'fr' ? 'Accueil' : locale === 'es' ? 'Inicio' : locale === 'ar' ? 'الرئيسية' : 'Home'}</a>
        <span className="text-gray-700">/</span>
        <span className="text-gray-700">{locale === 'fr' ? 'Agents IA' : locale === 'es' ? 'Agentes IA' : locale === 'ar' ? 'وكلاء الذكاء' : 'AI Agents'}</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">{PAGE.title[locale]}</h1>
      <p className="text-gray-700 leading-relaxed mb-10">{PAGE.intro[locale]}</p>

      {/* Beginner section */}
      <h2 className="text-2xl font-black text-gray-900 mb-4">{PAGE.beginnerTitle[locale]}</h2>
      <div className="space-y-3 mb-12">
        {PAGE.beginner[locale].map(([term, def], i) => (
          <div key={i} className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
            <span className="font-bold text-gray-900">{term}</span>{' '}
            <span className="text-gray-700">{def}</span>
          </div>
        ))}
      </div>

      {/* Expert comparison table */}
      <h2 className="text-2xl font-black text-gray-900 mb-2">{PAGE.expertTitle[locale]}</h2>
      <p className="text-gray-500 text-sm mb-5">{PAGE.expertNote[locale]}</p>
      <div className="overflow-x-auto mb-12 rounded-2xl border border-gray-200">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-left">
              <th className="px-3 py-2.5 font-bold">{PAGE.th.tool[locale]}</th>
              <th className="px-3 py-2.5 font-bold">{PAGE.th.type[locale]}</th>
              <th className="px-3 py-2.5 font-bold">{PAGE.th.best[locale]}</th>
              <th className="px-3 py-2.5 font-bold whitespace-nowrap">{PAGE.th.open[locale]}</th>
              <th className="px-3 py-2.5 font-bold whitespace-nowrap">{PAGE.th.price[locale]}</th>
              <th className="px-3 py-2.5 font-bold">{PAGE.th.spec[locale]}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-t border-gray-200 align-top">
                <td className="px-3 py-2.5 font-bold whitespace-nowrap">
                  <a href={`/${locale}/tools/${r.id}`} className="text-violet-700 hover:underline">{r.tool.name}</a>
                </td>
                <td className="px-3 py-2.5 text-gray-700 whitespace-nowrap">{r.type[locale]}</td>
                <td className="px-3 py-2.5 text-gray-700">{r.best[locale]}</td>
                <td className="px-3 py-2.5 whitespace-nowrap">{r.open ? <span className="text-emerald-700 font-semibold">✓</span> : <span className="text-gray-400">—</span>}</td>
                <td className={`px-3 py-2.5 whitespace-nowrap font-semibold ${pricingColor(r.tool.pricing)}`}>{r.tool.pricingLocalized[locale]}</td>
                <td className="px-3 py-2.5 text-gray-600 whitespace-nowrap">{r.spec}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* When each one wins (expert verdicts) */}
      <h2 className="text-2xl font-black text-gray-900 mb-4">{PAGE.whenTitle[locale]}</h2>
      <div className="space-y-4 mb-12">
        {rows.map((r) => {
          const url = buildAffiliateUrl(r.id, r.tool.websiteUrl);
          return (
            <div key={r.id} className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
              <div className="flex items-center justify-between gap-3 flex-wrap mb-1.5">
                <a href={`/${locale}/tools/${r.id}`} className="text-lg font-bold text-gray-900 hover:text-violet-700 transition">{r.tool.name}</a>
                <span className="flex items-center gap-3 text-sm">
                  <span className="text-amber-700 font-bold">⭐ {r.tool.rating.toFixed(1)}</span>
                  <span className={`font-semibold ${pricingColor(r.tool.pricing)}`}>{r.tool.pricingLocalized[locale]}</span>
                </span>
              </div>
              {r.tool.verdict && <p className="text-gray-700 text-sm leading-relaxed">{r.tool.verdict}</p>}
              <div className="mt-3 flex items-center gap-3">
                <a href={url} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] rounded-lg px-3 py-1.5 hover:opacity-90 transition">
                  {PAGE.visit[locale]} →
                </a>
                <a href={`/${locale}/tools/${r.id}`} className="text-xs text-gray-600 hover:text-gray-900 transition">{PAGE.details[locale]}</a>
              </div>
            </div>
          );
        })}
      </div>

      {/* FAQ */}
      <h2 className="text-2xl font-black text-gray-900 mb-4">{PAGE.faqTitle[locale]}</h2>
      <div className="space-y-3">
        {FAQ.map((item, i) => (
          <details key={i} className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
            <summary className="font-bold text-gray-900 cursor-pointer">{item.q[locale]}</summary>
            <p className="text-gray-700 text-sm leading-relaxed mt-2">{item.a[locale]}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
