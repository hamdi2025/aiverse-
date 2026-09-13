import Link from 'next/link';
import type { Metadata } from 'next';

type Locale = 'en' | 'fr' | 'es' | 'ar';
interface Props { params: { locale: Locale } }

const BASE = 'https://getaiverse.online';
const EMAIL = 'contact@getaiverse.online';
const LEMON_STANDARD = 'https://getaiverse.lemonsqueezy.com/checkout/buy/ce8a1d0a-c7d4-48b2-aefe-fb3d4391190e';
const LEMON_FEATURED = 'https://getaiverse.lemonsqueezy.com/checkout/buy/404170b0-173c-4b0e-abb6-b2fa44d79274';

const T = {
  en: {
    h1: 'Advertise on AIverse',
    intro: 'AIverse is a multilingual AI tools directory (English, French, Spanish, Arabic) visited by builders, developers, and marketers looking for their next AI tool. Choose the placement that fits your goals and budget.',
    audience: '70,000+ monthly builders · 20,000+ newsletter subscribers · 4 languages',
    streamsTitle: 'Advertising & Partnership Options',
    featured: {
      name: 'Featured Sponsor', price: '$99/mo',
      desc: 'Maximum visibility across the directory.',
      features: ['Gold "Sponsor" badge on your tool card', 'Homepage hero placement', 'Dedicated weekly spotlight + social media mention', 'Monthly analytics report'],
      cta: 'Become a Sponsor →',
    },
    standard: {
      name: 'Standard Listing', price: '$49 one-time',
      desc: 'Boost a new or existing listing.',
      features: ['"Featured" badge on your card', 'Priority placement in search results', 'Mention in the weekly newsletter', '3-month visibility boost'],
      cta: 'Get Standard →',
    },
    newsletter: {
      name: 'Newsletter Sponsorship', price: 'Contact for rates',
      desc: 'A dedicated sponsor slot in our weekly email to 20,000+ founders and builders.',
      features: ['Your tool presented as the week\'s sponsor', 'Clickable link + short pitch', 'Sent in English, French, Spanish & Arabic editions'],
      cta: 'Book the newsletter →',
    },
    guest: {
      name: 'Guest Post / Sponsored Article', price: 'Contact for rates',
      desc: 'We publish a quality article about your AI tool or an AI topic on the AIverse blog.',
      features: ['1–2 links to your product (marked rel="sponsored")', 'Written or reviewed by our editorial team', 'Disclosed as sponsored, per Google guidelines'],
      cta: 'Pitch an article →',
    },
    custom: {
      name: 'Custom Placements & Partnerships', price: 'Contact for rates',
      desc: 'Homepage banners, category takeovers, comparison placements, API/data partnerships — let\'s talk.',
      features: ['Banner on homepage or category pages', 'Featured placement inside a comparison page', 'Long-term partnerships welcome'],
      cta: 'Contact us →',
    },
    transparencyTitle: 'Transparency & Google Compliance',
    transparency: 'AIverse follows Google\'s link spam policies: every paid link (sponsored listings, guest posts, banners) is marked rel="sponsored" and disclosed to readers. Rankings and reviews remain fully editorial — paying never improves a rating. See our Affiliate Disclosure for details.',
    faqTitle: 'Advertising FAQ',
    faqs: [
      { q: 'Are sponsored links do-follow?', a: 'No. In line with Google\'s link spam policies, all paid links on AIverse carry rel="sponsored". Sponsored placements give you visibility and qualified traffic — not link equity. This protects your site and ours from Google penalties.' },
      { q: 'How much does it cost to advertise on AIverse?', a: 'Standard listing is $49 one-time, Featured Sponsor is $99/month, and newsletter sponsorship, guest posts and custom placements are quoted on request. Email contact@getaiverse.online for current rates.' },
      { q: 'How do I submit a guest post?', a: 'Email contact@getaiverse.online with "Guest Post" in the subject, a short outline, and the tool or topic you want to cover. We review pitches within a few business days and publish only original, reader-useful content.' },
      { q: 'Does paying affect my tool\'s rating?', a: 'No. Ratings and rankings are editorial and never influenced by sponsorship. Sponsored tools are clearly marked with a badge.' },
    ],
    ctaLine: 'Questions? Email',
    back: '← Back to AIverse',
  },
  fr: {
    h1: 'Publicité sur AIverse',
    intro: 'AIverse est un annuaire multilingue d\'outils IA (anglais, français, espagnol, arabe) fréquenté par des développeurs, créateurs et marketeurs à la recherche de leur prochain outil IA. Choisissez le format adapté à vos objectifs et à votre budget.',
    audience: '70 000+ créateurs/mois · 20 000+ abonnés newsletter · 4 langues',
    streamsTitle: 'Options de publicité et de partenariat',
    featured: {
      name: 'Sponsor Vedette', price: '99$/mois',
      desc: 'Visibilité maximale dans l\'annuaire.',
      features: ['Badge or « Sponsor » sur votre carte', 'Placement hero en page d\'accueil', 'Spotlight hebdomadaire + mention réseaux sociaux', 'Rapport analytics mensuel'],
      cta: 'Devenir Sponsor →',
    },
    standard: {
      name: 'Listing Standard', price: '49$ unique',
      desc: 'Boostez une fiche nouvelle ou existante.',
      features: ['Badge « Featured » sur votre carte', 'Priorité dans les résultats de recherche', 'Mention dans la newsletter hebdomadaire', 'Boost de visibilité 3 mois'],
      cta: 'Obtenir Standard →',
    },
    newsletter: {
      name: 'Sponsoring Newsletter', price: 'Tarifs sur demande',
      desc: 'Un emplacement sponsor dédié dans notre email hebdomadaire envoyé à 20 000+ fondateurs.',
      features: ['Votre outil présenté comme sponsor de la semaine', 'Lien cliquable + pitch court', 'Envoyé en anglais, français, espagnol et arabe'],
      cta: 'Réserver la newsletter →',
    },
    guest: {
      name: 'Guest Post / Article Sponsorisé', price: 'Tarifs sur demande',
      desc: 'Nous publions un article de qualité sur votre outil IA ou un sujet IA sur le blog AIverse.',
      features: ['1 à 2 liens vers votre produit (marqués rel="sponsored")', 'Rédigé ou relu par notre équipe éditoriale', 'Signalé comme sponsorisé, conformément aux règles Google'],
      cta: 'Proposer un article →',
    },
    custom: {
      name: 'Placements sur mesure & Partenariats', price: 'Tarifs sur demande',
      desc: 'Bannières page d\'accueil, takeover de catégorie, comparatifs, partenariats API/data — parlons-en.',
      features: ['Bannière sur la page d\'accueil ou de catégorie', 'Placement vedette dans une page comparative', 'Partenariats long terme bienvenus'],
      cta: 'Nous contacter →',
    },
    transparencyTitle: 'Transparence & conformité Google',
    transparency: 'AIverse respecte les règles de Google sur les liens sponsorisés : chaque lien payant (fiches sponsorisées, guest posts, bannières) est marqué rel="sponsored" et clairement signalé aux lecteurs. Les classements et avis restent 100% éditoriaux — payer n\'améliore jamais une note. Voir notre Divulgation d\'Affiliation pour plus de détails.',
    faqTitle: 'FAQ Publicité',
    faqs: [
      { q: 'Les liens sponsorisés sont-ils en do-follow ?', a: 'Non. Conformément aux règles de Google sur le spam de liens, tous les liens payants sur AIverse portent rel="sponsored". Les placements sponsorisés vous apportent visibilité et trafic qualifié — pas de link equity. Cela protège votre site et le nôtre des pénalités Google.' },
      { q: 'Combien coûte la publicité sur AIverse ?', a: 'Le listing Standard est à 49$ en paiement unique, le Sponsor Vedette à 99$/mois, et le sponsoring de newsletter, les guest posts et les placements sur mesure sont devisés sur demande. Écrivez à contact@getaiverse.online pour les tarifs actuels.' },
      { q: 'Comment proposer un guest post ?', a: 'Envoyez un email à contact@getaiverse.online avec « Guest Post » en objet, un plan détaillé et l\'outil ou le sujet souhaité. Nous examinons les propositions sous quelques jours ouvrés et publions uniquement du contenu original et utile aux lecteurs.' },
      { q: 'Payer influence-t-il la note de mon outil ?', a: 'Non. Les notes et classements sont éditoriaux et jamais influencés par le sponsoring. Les outils sponsorisés sont clairement identifiés par un badge.' },
    ],
    ctaLine: 'Des questions ? Écrivez à',
    back: '← Retour à AIverse',
  },
  es: {
    h1: 'Publicidad en AIverse',
    intro: 'AIverse es un directorio multilingüe de herramientas IA (inglés, francés, español, árabe) visitado por desarrolladores, creadores y marketeros que buscan su próxima herramienta IA. Elige el formato que se adapte a tus objetivos y presupuesto.',
    audience: '70 000+ creadores/mes · 20 000+ suscriptores del boletín · 4 idiomas',
    streamsTitle: 'Opciones de publicidad y colaboración',
    featured: {
      name: 'Sponsor Destacado', price: '99$/mes',
      desc: 'Visibilidad máxima en el directorio.',
      features: ['Insignia dorada "Sponsor" en tu tarjeta', 'Colocación en la portada', 'Spotlight semanal + mención en redes', 'Informe mensual de analíticas'],
      cta: 'Convertirse en Sponsor →',
    },
    standard: {
      name: 'Listado Estándar', price: '49$ pago único',
      desc: 'Impulsa una ficha nueva o existente.',
      features: ['Insignia "Featured" en tu tarjeta', 'Prioridad en resultados de búsqueda', 'Mención en el boletín semanal', 'Impulso de visibilidad 3 meses'],
      cta: 'Obtener Estándar →',
    },
    newsletter: {
      name: 'Patrocinio del Boletín', price: 'Consultar tarifas',
      desc: 'Un espacio dedicado en nuestro email semanal a 20 000+ fundadores y creadores.',
      features: ['Tu herramienta presentada como patrocinador de la semana', 'Enlace clicable + pitch breve', 'Enviado en inglés, francés, español y árabe'],
      cta: 'Reservar el boletín →',
    },
    guest: {
      name: 'Guest Post / Artículo Patrocinado', price: 'Consultar tarifas',
      desc: 'Publicamos un artículo de calidad sobre tu herramienta IA o un tema de IA en el blog de AIverse.',
      features: ['1–2 enlaces a tu producto (marcados rel="sponsored")', 'Escrito o revisado por nuestro equipo editorial', 'Divulgado como patrocinado, según las normas de Google'],
      cta: 'Proponer un artículo →',
    },
    custom: {
      name: 'Ubicaciones a medida y Colaboraciones', price: 'Consultar tarifas',
      desc: 'Banners en portada, takeovers de categoría, comparativas, colaboraciones de API/datos — hablemos.',
      features: ['Banner en portada o páginas de categoría', 'Ubicación destacada en una página comparativa', 'Colaboraciones a largo plazo bienvenidas'],
      cta: 'Contactar →',
    },
    transparencyTitle: 'Transparencia y cumplimiento de Google',
    transparency: 'AIverse cumple las políticas de enlaces de Google: cada enlace pagado (fichas patrocinadas, guest posts, banners) está marcado rel="sponsored" y divulgado a los lectores. Las clasificaciones y reseñas son 100% editoriales — pagar nunca mejora una valoración. Consulta nuestra Divulgación de Afiliados.',
    faqTitle: 'FAQ de Publicidad',
    faqs: [
      { q: '¿Los enlaces patrocinados son do-follow?', a: 'No. De acuerdo con las políticas de enlaces de Google, todos los enlaces pagados en AIverse llevan rel="sponsored". Las ubicaciones patrocinadas te dan visibilidad y tráfico cualificado — no link equity. Esto protege tu sitio y el nuestro de penalizaciones de Google.' },
      { q: '¿Cuánto cuesta anunciarse en AIverse?', a: 'El Listado Estándar cuesta 49$ por pago único, el Sponsor Destacado 99$/mes, y el patrocinio del boletín, los guest posts y las ubicaciones a medida se presupuestan bajo petición. Escribe a contact@getaiverse.online para las tarifas actuales.' },
      { q: '¿Cómo envío un guest post?', a: 'Escribe a contact@getaiverse.online con "Guest Post" en el asunto, un breve esquema y la herramienta o tema a tratar. Revisamos propuestas en pocos días laborables y publicamos solo contenido original y útil para los lectores.' },
      { q: '¿Pagar afecta a la valoración de mi herramienta?', a: 'No. Las valoraciones y clasificaciones son editoriales y nunca influidas por el patrocinio. Las herramientas patrocinadas se identifican claramente con una insignia.' },
    ],
    ctaLine: '¿Preguntas? Escribe a',
    back: '← Volver a AIverse',
  },
  ar: {
    h1: 'الإعلان على AIverse',
    intro: 'AIverse دليل متعدد اللغات لأدوات الذكاء الاصطناعي (الإنجليزية، الفرنسية، الإسبانية، العربية) يزوره مطورون وصناع محتوى ومسوّقون بحثاً عن أداتهم القادمة. اختر الصيغة المناسبة لأهدافك وميزانيتك.',
    audience: '+70,000 صانع شهرياً · +20,000 مشترك في النشرة · 4 لغات',
    streamsTitle: 'خيارات الإعلان والشراكة',
    featured: {
      name: 'راعٍ مميز', price: '99$/شهر',
      desc: 'أقصى ظهور في الدليل.',
      features: ['شارة "Sponsor" ذهبية على بطاقتك', 'موضع بارز في الصفحة الرئيسية', 'تسليط ضوء أسبوعي + ذكر على الشبكات', 'تقرير تحليلات شهري'],
      cta: 'كن راعياً →',
    },
    standard: {
      name: 'إدراج قياسي', price: '49$ دفعة واحدة',
      desc: 'عزّز إدراجك الجديد أو الحالي.',
      features: ['شارة "Featured" على بطاقتك', 'أولوية في نتائج البحث', 'ذكر في النشرة الأسبوعية', 'تعزيز ظهور لمدة 3 أشهر'],
      cta: 'احصل على القياسي →',
    },
    newsletter: {
      name: 'رعاية النشرة البريدية', price: 'الأسعار عند الطلب',
      desc: 'مساحة راعٍ مخصصة في بريدنا الأسبوعي الذي يصل إلى +20,000 مؤسس وصانع.',
      features: ['عرض أداتك كراعي الأسبوع', 'رابط قابل للنقر + نبذة قصيرة', 'يُرسل بالإنجليزية والفرنسية والإسبانية والعربية'],
      cta: 'احجز النشرة →',
    },
    guest: {
      name: 'مقال ضيف / مقال برعاية', price: 'الأسعار عند الطلب',
      desc: 'ننشر مقالاً عالي الجودة عن أداتك أو موضوع ذكاء اصطناعي في مدونة AIverse.',
      features: ['1–2 روابط لمنتجك (موسومة rel="sponsored")', 'كتابة أو مراجعة من فريقنا التحريري', 'يُعلن كمحتوى برعاية وفق إرشادات Google'],
      cta: 'اقترح مقالاً →',
    },
    custom: {
      name: 'مواضع مخصصة وشراكات', price: 'الأسعار عند الطلب',
      desc: 'لافتات في الصفحة الرئيسية، استحواذ على فئة، مقارنات، شراكات API/بيانات — لنتحدث.',
      features: ['لافتة في الرئيسية أو صفحات الفئات', 'موضع مميز داخل صفحة مقارنة', 'شراكات طويلة الأمد مرحب بها'],
      cta: 'اتصل بنا →',
    },
    transparencyTitle: 'الشفافية والالتزام بسياسات Google',
    transparency: 'يلتزم AIverse بسياسات Google بشأن الروابط: كل رابط مدفوع (إدراجات برعاية، مقالات ضيوف، لافتات) موسوم rel="sponsored" ومُعلن للقراء. التصنيفات والمراجعات تحريرية 100% — الدفع لا يحسّن التقييم أبداً. راجع إفصاح العمولات لدينا لمزيد من التفاصيل.',
    faqTitle: 'أسئلة شائعة عن الإعلان',
    faqs: [
      { q: 'هل الروابط المدفوعة do-follow؟', a: 'لا. وفقاً لسياسات Google، جميع الروابط المدفوعة في AIverse تحمل rel="sponsored". المواضع البرعاية تمنحك ظهوراً وزيارات مستهدفة — وليس قوة روابط. هذا يحمي موقعك وموقعنا من عقوبات Google.' },
      { q: 'كم تكلفة الإعلان على AIverse؟', a: 'الإدراج القياسي 49$ دفعة واحدة، والراعي المميز 99$/شهر، أما رعاية النشرة والمقالات الضيف والمواضع المخصصة فتُسعّر عند الطلب. راسلنا على contact@getaiverse.online للأسعار الحالية.' },
      { q: 'كيف أرسل مقال ضيف؟', a: 'أرسل بريداً إلى contact@getaiverse.online بعنوان "Guest Post" مع مخطط موجز والأداة أو الموضوع المطلوب. نراجع المقترحات خلال أيام عمل قليلة ولا ننشر سوى محتوى أصلي ومفيد للقراء.' },
      { q: 'هل الدفع يؤثر على تقييم أداتي؟', a: 'لا. التقييمات والتصنيفات تحريرية ولا تتأثر بالرعاية أبداً. الأدوات الممولة تُميَّز بوضوح بشارة.' },
    ],
    ctaLine: 'لديك أسئلة؟ راسلنا على',
    back: '← العودة إلى AIverse',
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = params.locale;
  const titleMap: Record<Locale, string> = {
    en: 'Advertise on AIverse | Featured Listing, Newsletter, Guest Post',
    fr: 'Publicité sur AIverse | Sponsoring, Newsletter, Guest Post',
    es: 'Publicidad en AIverse | Patrocinios, Boletín, Guest Post',
    ar: 'الإعلان على AIverse | رعاية، نشرة بريدية، مقالات ضيوف',
  };
  const descMap: Record<Locale, string> = {
    en: 'Promote your AI tool to 70,000+ monthly builders: featured sponsor listings, newsletter sponsorship, sponsored guest posts and custom placements — Google-compliant and clearly disclosed.',
    fr: 'Promouvez votre outil IA auprès de 70 000+ créateurs/mois : fiches sponsor vedette, sponsoring newsletter, articles sponsorisés et placements sur mesure — conformes Google et clairement signalés.',
    es: 'Promociona tu herramienta IA ante 70 000+ creadores/mes: listados destacados, patrocinio del boletín, artículos patrocinados y ubicaciones a medida — conformes con Google.',
    ar: 'روّج أداتك أمام +70,000 صانع شهرياً: إدراجات راعٍ مميز، رعاية النشرة، مقالات برعاية ومواضع مخصصة — متوافقة مع سياسات Google ومعلنة بوضوح.',
  };
  return {
    title: titleMap[locale],
    description: descMap[locale],
    alternates: {
      canonical: `${BASE}/${locale}/advertise`,
      languages: {
        en: `${BASE}/en/advertise`, fr: `${BASE}/fr/advertise`,
        es: `${BASE}/es/advertise`, ar: `${BASE}/ar/advertise`,
      },
    },
    openGraph: {
      title: titleMap[locale], description: descMap[locale],
      url: `${BASE}/${locale}/advertise`, siteName: 'AIverse', type: 'website',
    },
  };
}

export default function AdvertisePage({ params }: Props) {
  const { locale } = params;
  const t = T[locale] || T.en;

  const cards = [
    { id: 'featured', href: LEMON_FEATURED, external: true, accent: 'amber', ...t.featured },
    { id: 'standard', href: LEMON_STANDARD, external: true, accent: 'violet', ...t.standard },
    { id: 'newsletter', href: `mailto:${EMAIL}?subject=${encodeURIComponent('AIverse Newsletter Sponsorship')}`, external: false, accent: 'plain', ...t.newsletter },
    { id: 'guest-post', href: `mailto:${EMAIL}?subject=${encodeURIComponent('AIverse Guest Post')}`, external: false, accent: 'plain', ...t.guest },
    { id: 'custom', href: `mailto:${EMAIL}?subject=${encodeURIComponent('AIverse Custom Partnership')}`, external: false, accent: 'plain', ...t.custom },
  ];

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
    <article className="max-w-5xl mx-auto px-4 py-16">
      <Link href={`/${locale}`} className="text-sm text-gray-600 hover:text-gray-900">{t.back}</Link>
      <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-6 mb-4">{t.h1}</h1>
      <p className="text-gray-700 leading-relaxed text-[15px] mb-4">{t.intro}</p>

      <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5 text-sm font-semibold text-violet-700 mb-10">
        📣 {t.audience}
      </div>

      <h2 className="text-2xl font-black text-gray-900 mb-6">{t.streamsTitle}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {cards.map((c) => (
          <div
            key={c.id}
            id={c.id}
            className={`rounded-2xl border p-6 flex flex-col scroll-mt-24 ${
              c.accent === 'amber'
                ? 'bg-amber-500/10 border-amber-500/40'
                : c.accent === 'violet'
                  ? 'bg-violet-600/10 border-2 border-violet-500'
                  : 'bg-gray-50 border-gray-200'
            }`}
          >
            <p className="text-sm font-bold text-gray-900">{c.name}</p>
            <p className="text-2xl font-black text-gray-900 mb-1">{c.price}</p>
            <p className="text-sm text-gray-600 mb-4">{c.desc}</p>
            <ul className="space-y-2 mb-6 flex-1">
              {c.features.map((f: string, i: number) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-800">
                  <span className="text-green-700 mt-0.5 shrink-0">✓</span> {f}
                </li>
              ))}
            </ul>
            <a
              href={c.href}
              {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className={`w-full py-2 rounded-xl text-sm font-semibold text-center transition ${
                c.accent === 'amber'
                  ? 'bg-amber-500 hover:bg-amber-400 text-black'
                  : c.accent === 'violet'
                    ? 'bg-violet-600 hover:bg-violet-500 text-white'
                    : 'border border-[#7C3AED] text-[#7C3AED] hover:bg-[#7C3AED] hover:text-white'
              }`}
            >
              {c.cta}
            </a>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-3">{t.transparencyTitle}</h2>
        <p className="text-gray-700 text-[15px] leading-relaxed">{t.transparency}</p>
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

      <p className="text-gray-700 text-sm">
        {t.ctaLine}{' '}
        <a className="text-[#7C3AED] hover:underline" href={`mailto:${EMAIL}`}>{EMAIL}</a>
      </p>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </article>
  );
}
