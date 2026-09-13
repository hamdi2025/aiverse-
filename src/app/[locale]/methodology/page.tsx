import Link from 'next/link';
import type { Metadata } from 'next';

type Locale = 'en' | 'fr' | 'es' | 'ar';
interface Props { params: { locale: Locale } }

const BASE = 'https://getaiverse.online';

const T = {
  en: {
    h1: 'Our Methodology: How We Review AI Tools',
    subtitle: 'AIverse is built on editorial independence. This page explains exactly how we select, test, rate, and monetize the AI tools we list — so you can trust what you read.',
    lastVerified: 'Last updated: September 12, 2026',
    sections: [
      { title: '1. How Tools Are Selected', body: 'We curate, we do not scrape. Every tool in our directory is hand-picked by our editorial team based on real-world usefulness, category fit, and whether it verifiably works as described. We do not list a tool just because it pays us, and we actively review the market to surface new, genuinely useful AI tools and agents.' },
      { title: '2. How Tools Are Tested', body: 'Where possible we use a tool hands-on before recommending it. We evaluate it across five criteria: capability, usability, pricing and value, reliability and reputation, and fit for the intended use case. Where a tool is a paid service we may not subscribe to every plan, but we rely on official documentation, public pricing, and verified user reports — and we say so when a point is unverified.' },
      { title: '3. How Ratings Work', body: 'Ratings are editorial. They are produced by our team after analysis and are never purchased, rented, or traded. A tool does not receive a higher rating, better placement, or a more favorable review because it runs an affiliate program or pays for a listing. Sponsored tools are clearly marked with a badge.' },
      { title: '4. How Pricing Is Verified', body: 'Pricing changes constantly. We list pricing at the time of writing, mark the source, and encourage users to confirm the current price on the official site before purchasing. If you spot an outdated price, report it and we will fix it.' },
      { title: '5. How We Make Money (and Why It Does Not Bias Us)', body: 'AIverse is free to browse. We cover costs through three independent streams: Google AdSense display advertising, a limited number of clearly-marked sponsored placements, and affiliate commissions on some outbound links. Affiliate and sponsored links are always marked rel="sponsored" per Google\'s guidelines. None of these influence our editorial ratings — rankings are locked to our five criteria, not to who pays.' },
      { title: '6. How Advertisers Are Disclosed', body: 'Any placement a tool maker has paid for is labeled. We display badge labels such as "Sponsored" or "Featured" on sponsored cards, and our Affiliate Disclosure page describes the full relationship. There are no unmarked paid placements on AIverse.' },
      { title: '7. Ensuring Accuracy & How to Report an Error', body: 'Tools, prices, and features change fast. We review listings periodically and correct errors reported by our community. If you find incorrect information, email us with the tool name and the issue — we verify and fix it promptly.' },
    ],
    faqTitle: 'Methodology FAQ',
    faqs: [
      { q: 'Do paid advertisers get better ratings?', a: 'No. Ratings and rankings are editorial and never influenced by sponsorship or affiliate programs. Sponsored tools are clearly badged.' },
      { q: 'Do you use AI to write reviews?', a: 'We may use AI assistance for drafting and translation, but every listing is reviewed and edited by humans against our five criteria before publication.' },
      { q: 'Are your listings ever automated or scraped?', a: 'No. Tools are hand-curated by our editorial team. We do not mass-generate pages from a database with no human review.' },
    ],
    ctaLine: 'Have feedback on this methodology?',
    back: '← Back to AIverse',
  },
  fr: {
    h1: 'Notre Méthode : Comment Nous Évaluons les Outils IA',
    subtitle: 'AIverse repose sur l\'indépendance éditoriale. Cette page explique exactement comment nous sélectionnons, testons, notons et monétisons les outils IA que nous listons — pour que vous puissiez faire confiance à ce que vous lisez.',
    lastVerified: 'Dernière mise à jour : 12 septembre 2026',
    sections: [
      { title: '1. Comment les Outils Sont Sélectionnés', body: 'Nous curons, nous ne scrappons pas. Chaque outil de notre annuaire est choisi à la main par notre équipe éditoriale selon son utilité réelle, son adéquation à la catégorie, et le fait qu\'il fonctionne de manière vérifiable comme décrit. Nous ne listons pas un outil simplement parce qu\'il nous paie, et nous scrutons activement le marché pour mettre en avant de nouveaux outils et agents IA réellement utiles.' },
      { title: '2. Comment les Outils Sont Testés', body: 'Autant que possible, nous utilisons un outil en main avant de le recommander. Nous l\'évaluons selon cinq critères : capacité, facilité d\'utilisation, prix et valeur, fiabilité et réputation, et adéquation au cas d\'usage visé. Lorsqu\'un outil est payant, il peut nous arriver de ne pas souscrire à chaque formule ; nous nous appuyons alors sur la documentation officielle, les prix publics et les retours d\'utilisateurs vérifiés — et nous le précisons quand un point n\'est pas vérifié.' },
      { title: '3. Comment les Notes Fonctionnent', body: 'Les notes sont éditoriales. Elles sont produites par notre équipe après analyse et ne sont jamais achetées, louées ou échangées. Un outil n\'obtient pas une meilleure note, un meilleur placement ou une critique plus favorable parce qu\'il participe à un programme d\'affiliation ou paie pour un référencement. Les outils sponsorisés sont clairement signalés par un badge.' },
      { title: '4. Comment les Prix Sont Vérifiés', body: 'Les prix changent en permanence. Nous affichons le prix au moment de la rédaction, indiquons la source, et encourageons les utilisateurs à confirmer le tarif actuel sur le site officiel avant tout achat. Si vous repérez un prix obsolète, signalez-le et nous le corrigerons.' },
      { title: '5. Comment Nous Gagnons de l\'Argent (et Pourquoi Cela Ne Nous Biaise Pas)', body: 'AIverse est gratuit à consulter. Nous couvrons nos coûts via trois sources indépendantes : la publicité display Google AdSense, un nombre limité de placements sponsorisés clairement signalés, et des commissions d\'affiliation sur certains liens sortants. Les liens affiliés et sponsorisés sont toujours marqués rel="sponsored" conformément aux règles de Google. Aucune de ces sources n\'influence nos notes éditoriales — les classements sont verrouillés sur nos cinq critères, pas sur qui paie.' },
      { title: '6. Comment les Annonceurs Sont Révélés', body: 'Tout placement pour lequel un éditeur d\'outil a payé est étiqueté. Nous affichons des badges tels que « Sponsor » ou « Mis en avant » sur les cartes sponsorisées, et notre page de Divulgation d\'Affiliation décrit la relation complète. Il n\'y a aucun placement payant non marqué sur AIverse.' },
      { title: '7. Garantir l\'Exactitude & Signaler une Erreur', body: 'Les outils, prix et fonctionnalités évoluent vite. Nous réexaminons les fiches régulièrement et corrigeons les erreurs signalées par notre communauté. Si vous trouvez une information incorrecte, écrivez-nous avec le nom de l\'outil et le problème — nous vérifions et corrigeons rapidement.' },
    ],
    faqTitle: 'FAQ Méthode',
    faqs: [
      { q: 'Les annonceurs payants obtiennent-ils de meilleures notes ?', a: 'Non. Les notes et classements sont éditoriaux et ne sont jamais influencés par un sponsoring ou un programme d\'affiliation. Les outils sponsorisés sont clairement badgés.' },
      { q: 'Utilisez-vous l\'IA pour écrire les critiques ?', a: 'Nous pouvons recourir à l\'IA pour la rédaction et la traduction, mais chaque fiche est relue et éditée par des humains selon nos cinq critères avant publication.' },
      { q: 'Vos listes sont-elles automatisées ou scrapées ?', a: 'Non. Les outils sont sélectionnés à la main par notre équipe éditoriale. Nous ne générons pas en masse des pages à partir d\'une base de données sans revue humaine.' },
    ],
    ctaLine: 'Un retour sur cette méthode ?',
    back: '← Retour à AIverse',
  },
  es: {
    h1: 'Nuestra Metodología: Cómo Evaluamos las Herramientas de IA',
    subtitle: 'AIverse se basa en la independencia editorial. Esta página explica exactamente cómo seleccionamos, probamos, puntuamos y monetizamos las herramientas de IA que listamos — para que confíes en lo que lees.',
    lastVerified: 'Última actualización: 12 de septiembre de 2026',
    sections: [
      { title: '1. Cómo se Seleccionan las Herramientas', body: 'Seleccionamos, no hacemos scraping. Cada herramienta de nuestro directorio es elegida a mano por nuestro equipo editorial según su utilidad real, su encaje en la categoría y que funcione de forma verificable como se describe. No listamos una herramienta solo porque nos pague, y revisamos activamente el mercado para destacar herramientas y agentes de IA nuevos y realmente útiles.' },
      { title: '2. Cómo se Prueban las Herramientas', body: 'Siempre que es posible, usamos una herramienta en mano antes de recomendarla. La evaluamos según cinco criterios: capacidad, usabilidad, precio y valor, fiabilidad y reputación, y adecuación al caso de uso. Cuando una herramienta es de pago, puede que no nos suscribamos a todos los planes; nos apoyamos en la documentación oficial, los precios públicos y los informes verificados de usuarios — y lo decimos si un punto no está verificado.' },
      { title: '3. Cómo Funcionan las Valoraciones', body: 'Las valoraciones son editoriales. Las produce nuestro equipo tras el análisis y nunca se compran, alquilan o intercambian. Una herramienta no recibe mejor valoración, mejor colocación o una reseña más favorable porque participe en un programa de afiliados o pague por un listado. Las herramientas patrocinadas se marcan claramente con una insignia.' },
      { title: '4. Cómo se Verifican los Precios', body: 'Los precios cambian constantemente. Indicamos el precio en el momento de redactar, marcamos la fuente y animamos a los usuarios a confirmar el precio actual en el sitio oficial antes de comprar. Si detectas un precio desactualizado, repórtalo y lo corregiremos.' },
      { title: '5. Cómo Ganamos Dinero (y Por Qué No Nos Induce a Sesgo)', body: 'AIverse es gratis de navegar. Cubrimos costes a través de tres fuentes independientes: publicidad display de Google AdSense, un número limitado de colocaciones patrocinadas claramente marcadas, y comisiones de afiliados en algunos enlaces externos. Los enlaces de afiliados y patrocinados siempre llevan rel="sponsored" según las normas de Google. Ninguna de estas fuentes influye en nuestras valoraciones editoriales — los rankings se fijan en nuestros cinco criterios, no en quién paga.' },
      { title: '6. Cómo se Revelan los Anunciantes', body: 'Cualquier colocación pagada por un creador de herramientas está etiquetada. Mostramos insignias como «Patrocinado» o «Destacado» en las tarjetas patrocinadas, y nuestra página de Divulgación de Afiliados describe la relación completa. No hay colocaciones pagadas sin marcar en AIverse.' },
      { title: '7. Garantizar la Exactitud y Reportar un Error', body: 'Las herramientas, precios y funciones cambian rápido. Revisamos las fichas periódicamente y corregimos los errores que reporta nuestra comunidad. Si encuentras información incorrecta, escríbenos con el nombre de la herramienta y el problema — lo verificamos y corregimos con rapidez.' },
    ],
    faqTitle: 'FAQ de Metodología',
    faqs: [
      { q: '¿Los anunciantes pagados obtienen mejores valoraciones?', a: 'No. Las valoraciones y clasificaciones son editoriales y nunca están influidas por el patrocinio o los programas de afiliados. Las herramientas patrocinadas llevan insignia visible.' },
      { q: '¿Usan IA para escribir las reseñas?', a: 'Podemos usar asistencia de IA para redactar y traducir, pero cada ficha es revisada y editada por humanos según nuestros cinco criterios antes de publicarse.' },
      { q: '¿Tus listados están automatizados o son scraping?', a: 'No. Las herramientas se seleccionan a mano por nuestro equipo editorial. No generamos páginas en masa desde una base de datos sin revisión humana.' },
    ],
    ctaLine: '¿Comentarios sobre esta metodología?',
    back: '← Volver a AIverse',
  },
  ar: {
    h1: 'منهجيتنا: كيف نقيّم أدوات الذكاء الاصطناعي',
    subtitle: 'يقوم AIverse على الاستقلالية التحريرية. توضح هذه الصفحة بالضبط كيف نختار ونختبر ونقيّم ونُدرّ الأدوات التي نعرضها — لتثق بما تقرأه.',
    lastVerified: 'آخر تحديث: 12 سبتمبر 2026',
    sections: [
      { title: '1. كيف تُختار الأدوات', body: 'نُنسّق، لا نُسحب من الويب. كل أداة في دليلنا تُختار يدوياً من قبل فريقنا التحريري بناءً على فائدتها الحقيقية وملاءمتها للفئة، وعملها بشكل قابل للتحقق كما هو موصوف. لا ندرج أداة فقط لأنها تدفع لنا، ونراجع السوق بنشاط لإبراز أدوات ووكلاء ذكاء اصطناعي جديدة ومفيدة فعلاً.' },
      { title: '2. كيف تُختبر الأدوات', body: 'عند الإمكان، نستخدم الأداة عملياً قبل التوصية بها. نقيّمها وفق خمسة معايير: القدرة، سهولة الاستخدام، السعر والقيمة، الموثوقية والسمعة، والملاءمة لحالة الاستخدام. إذا كانت الأداة مدفوعة، قد لا نشترك في كل الخطة؛ نعتمد على التوثيق الرسمي والأسعار العامة وتقارير المستخدمين الموثقة — ونوضح ذلك عندما تكون أي نقطة غير موثقة.' },
      { title: '3. كيف تعمل التقييمات', body: 'التقييمات تحريرية. ينتجها فريقنا بعد التحليل ولا تُشترى أبداً أو تُؤجّر أو تُتداول. الأداة لا تحصل على تقييم أعلى أو مركز أفضل أو مراجعة أكثر إيجابية لأنها تشارك في برنامج إحالة أو تدفع مقابل الإدراج. الأدوات الممولة تُعلَّم بوضوح بشارة.' },
      { title: '4. كيف تُتحقق الأسعار', body: 'تتغير الأسعار باستمرار. نعرض السعر وقت الكتابة، ونحدد المصدر، ونشجع المستخدمين على تأكيد السعر الحالي من الموقع الرسمي قبل الشراء. إذا لاحظت سعراً قديماً، أبلِغنا وسنصحّحه.' },
      { title: '5. كيف نكسب المال (ولماذا لا يتحيّزنا)', body: 'تصفح AIverse مجاني. نغطي التكاليف عبر ثلاثة مصادر مستقلة: إعلانات العرض من Google AdSense، وعدد محدود من المواضع الممولة المعلنة بوضوح، وعمولات إحالة على بعض الروابط الخارجية. روابط الإحالة والرعاية تحمل دائماً rel="sponsored" وفق إرشادات Google. لا تؤثر أي من هذه المصادر على تقييماتنا التحريرية — فالتصنيفات مثبتة على معاييرنا الخمسة، وليس على من يدفع.' },
      { title: '6. كيف يُكشف عن المعلنين', body: 'أي موضع دفع مقابله صانع أداة يُعلَّم. نعرض شارات مثل «ممول» أو «مميز» على البطاقات الممولة، وتصف صفحة إفصاح العمولات العلاقة كاملة. لا توجد مواضع مدفوعة غير معلنة على AIverse.' },
      { title: '7. ضمان الدقة والإبلاغ عن خطأ', body: 'تتغير الأدوات والأسعار والميزات بسرعة. نراجع البطاقات دورياً ونصحح الأخطاء التي يبلغ عنها مجتمعنا. إذا وجدت معلومات غير صحيحة، راسلنا مع اسم الأداة والمشكلة — نتحقق ونصحح بسرعة.' },
    ],
    faqTitle: 'الأسئلة الشائعة عن المنهجية',
    faqs: [
      { q: 'هل يحصل المعلنون المدفوعون على تقييمات أفضل؟', a: 'لا. التقييمات والتصنيفات تحريرية ولا تتأثر أبداً بالرعاية أو برامج الإحالة. الأدوات الممولة تحمل شارة واضحة.' },
      { q: 'هل تستخدمون الذكاء الاصطناعي لكتابة المراجعات؟', a: 'قد نستخدم مساعدة الذكاء الاصطناعي للصياغة والترجمة، لكن كل بطاقة تُراجع وتُحرَّر من قبل بشر وفق معاييرنا الخمسة قبل النشر.' },
      { q: 'هل قوائمكم آلية أو مسحوبة؟', a: 'لا. تُختار الأدوات يدوياً من قبل فريقنا التحريري. لا ننشئ صفحات جماعية من قاعدة بيانات دون مراجعة بشرية.' },
    ],
    ctaLine: 'لديك ملاحظات حول هذه المنهجية؟',
    back: '← العودة إلى AIverse',
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = params.locale;
  const titleMap: Record<Locale, string> = {
    en: 'Our Methodology — How AIverse Reviews AI Tools',
    fr: 'Notre Méthode — Comment AIverse Évalue les Outils IA',
    es: 'Nuestra Metodología — Cómo AIverse Evalúa la Herramientas IA',
    ar: 'منهجيتنا — كيف يقيّم AIverse أدوات الذكاء الاصطناعي',
  };
  const descMap: Record<Locale, string> = {
    en: 'How AIverse selects, tests, and rates AI tools — our five rating criteria, how pricing is verified, and how ads and affiliate links are clearly disclosed. Editorial independence, explained.',
    fr: 'Comment AIverse sélectionne, teste et note les outils IA — nos cinq critères de notation, la vérification des prix, et la divulgation claire des publicités et liens affiliés. L\'indépendance éditoriale, expliquée.',
    es: 'Cómo AIverse selecciona, prueba y puntúa herramientas IA — nuestros cinco criterios, cómo se verifican los precios y cómo se revelan anuncios y enlaces de afiliados. Independencia editorial, explicada.',
    ar: 'كيف يختار AIverse ويختبر ويقيّم أدوات الذكاء الاصطناعي — معاييرنا الخمسة، وكيف تُتحقق الأسعار، وكيف تُعلَن الإعلانات وروابط الإحالة. الاستقلالية التحريرية موضحة.',
  };
  return {
    title: titleMap[locale],
    description: descMap[locale],
    alternates: {
      canonical: `${BASE}/${locale}/methodology`,
      languages: {
        en: `${BASE}/en/methodology`, fr: `${BASE}/fr/methodology`,
        es: `${BASE}/es/methodology`, ar: `${BASE}/ar/methodology`,
        'x-default': `${BASE}/en/methodology`,
      },
    },
    openGraph: {
      title: titleMap[locale], description: descMap[locale],
      url: `${BASE}/${locale}/methodology`, siteName: 'AIverse', type: 'article',
    },
  };
}

export default function MethodologyPage({ params }: Props) {
  const { locale } = params;
  const t = T[locale] || T.en;

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: t.faqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return (
    <article className="max-w-3xl mx-auto px-4 py-16">
      <Link href={`/${locale}`} className="text-sm text-gray-600 hover:text-gray-900">{t.back}</Link>
      <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-6 mb-3">{t.h1}</h1>
      <p className="text-sm text-gray-500 mb-2">{t.lastVerified}</p>
      <p className="text-gray-700 leading-relaxed text-[15px] mb-10">{t.subtitle}</p>

      <div className="space-y-8 mb-12">
        {t.sections.map((s, i) => (
          <section key={i}>
            <h2 className="text-xl font-bold text-gray-900 mb-2">{s.title}</h2>
            <p className="text-gray-700 text-[15px] leading-relaxed">{s.body}</p>
          </section>
        ))}
      </div>

      <h2 className="text-2xl font-black text-gray-900 mb-6">{t.faqTitle}</h2>
      <div className="space-y-4 mb-10">
        {t.faqs.map((item, i) => (
          <div key={i} className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
            <h3 className="text-gray-900 font-semibold mb-1.5">{item.q}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>

      <p className="text-gray-700 text-sm pb-2">
        {t.ctaLine}{' '}
        <Link href={`/${locale}/contact`} className="text-[#7C3AED] hover:underline">Contact us</Link>
      </p>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </article>
  );
}
