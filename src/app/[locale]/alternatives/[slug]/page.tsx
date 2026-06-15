import { notFound } from 'next/navigation';
import { TOOLS_DATA } from '@/lib/tools';
import { buildAffiliateUrl } from '@/lib/affiliate';
import { TOP_ALTERNATIVES } from '@/lib/alternatives';
import { Star, ArrowUpRight, Zap, ArrowRight } from 'lucide-react';

type Locale = 'en' | 'fr' | 'es' | 'ar';
interface Props { params: { slug: string; locale: Locale } }

const BASE = 'https://getaiverse.online';

const CATEGORY_EMOJI: Record<string, string> = {
  agents: '🤖', writing: '✍️', image: '🎨', code: '💻', video: '🎬', audio: '🎙️',
  marketing: '📈', productivity: '⚡', seo: '🔍', socialmedia: '📱', chatbots: '💬',
  data: '📊', design3d: '🎯', slides: '📊', excel: '📋', translation: '🌐',
  finance: '💰', legal: '⚖️', hr: '👥', cybersecurity: '🔐', pdf: '📄',
  elearning: '🎓', projectmgmt: '📌', mindmap: '🧠', travel: '✈️',
  contract: '📝', compression: '🗜️', conversion: '🔄',
};

export async function generateStaticParams() {
  const locales = ['en', 'fr', 'es', 'ar'];
  return TOP_ALTERNATIVES.flatMap((slug) =>
    locales.map((locale) => ({ slug, locale }))
  );
}

// Allow any "<toolId>-alternatives" slug beyond the pre-generated ones
export const dynamicParams = true;

function getToolId(slug: string) {
  return slug.replace(/-alternatives$/, '');
}

export async function generateMetadata({ params }: Props) {
  const toolId = getToolId(params.slug);
  const tool = TOOLS_DATA.find((t) => t.id === toolId);
  if (!tool) return {};
  const BASE = 'https://getaiverse.online';
  const locale = params.locale;

  const titleMap: Record<Locale, string> = {
    en: `${tool.name} Alternatives — Best Free & Paid Options in 2026 | Aiverse`,
    fr: `Alternatives à ${tool.name} — Meilleures Options Gratuites et Payantes en 2026 | Aiverse`,
    es: `Alternativas a ${tool.name} — Mejores Opciones Gratis y de Pago en 2026 | Aiverse`,
    ar: `بدائل ${tool.name} — أفضل الخيارات المجانية والمدفوعة في 2026 | Aiverse`,
  };

  const descMap: Record<Locale, string> = {
    en: `Looking for a ${tool.name} alternative? Discover the best free and paid AI tools that compete with ${tool.name} in 2026 — pricing, ratings and features compared.`,
    fr: `Vous cherchez une alternative à ${tool.name} ? Découvrez les meilleurs outils IA gratuits et payants qui rivalisent avec ${tool.name} en 2026 — prix, notes et fonctionnalités comparés.`,
    es: `¿Buscas una alternativa a ${tool.name}? Descubre las mejores herramientas IA gratuitas y de pago que compiten con ${tool.name} en 2026 — precios, valoraciones y funciones comparadas.`,
    ar: `تبحث عن بديل لـ ${tool.name}؟ اكتشف أفضل أدوات الذكاء الاصطناعي المجانية والمدفوعة التي تنافس ${tool.name} في 2026 — مقارنة الأسعار والتقييمات والميزات.`,
  };

  return {
    title: titleMap[locale],
    description: descMap[locale],
    keywords: `${tool.name} alternatives, ${tool.name} alternative, free ${tool.name} alternative, best AI tools 2026, alternatives à ${tool.name}, alternativas a ${tool.name}, بدائل ${tool.name}`,
    alternates: {
      canonical: `${BASE}/${locale}/alternatives/${params.slug}`,
      languages: {
        'en': `${BASE}/en/alternatives/${params.slug}`,
        'fr': `${BASE}/fr/alternatives/${params.slug}`,
        'es': `${BASE}/es/alternatives/${params.slug}`,
        'ar': `${BASE}/ar/alternatives/${params.slug}`,
      },
    },
    openGraph: {
      title: titleMap[locale],
      description: descMap[locale],
      url: `${BASE}/${locale}/alternatives/${params.slug}`,
      siteName: 'Aiverse',
    },
  };
}

const LABELS: Record<Locale, {
  badge: string; title: (name: string) => string; subtitle: (name: string) => string;
  originalLabel: string; rating: string; pricing: string; visit: string; view: string;
  compareWith: (a: string, b: string) => string; rank: string; back: string;
  faqTitle: string; faq: { q: string; a: string }[];
  moreAlternatives: string; backToHub: string; noAlternatives: string;
}> = {
  en: {
    badge: 'AI Tool Alternatives',
    title: (name) => `Best ${name} Alternatives in 2026`,
    subtitle: (name) => `${name} is a popular choice, but it's not the only option. Here are the top-rated alternatives — including free options — compared by pricing, rating and features.`,
    originalLabel: 'The original', rating: 'Rating', pricing: 'Pricing', visit: 'Visit', view: 'View details',
    compareWith: (a, b) => `Compare with ${a}`,
    rank: '#', back: '← Back',
    faqTitle: 'Frequently Asked Questions',
    faq: [
      { q: 'is-there-free', a: 'is-there-free-a' },
      { q: 'which-best', a: 'which-best-a' },
      { q: 'switch-cost', a: 'switch-cost-a' },
    ],
    moreAlternatives: 'More Alternative Guides',
    backToHub: 'Browse all alternatives',
    noAlternatives: 'No alternatives found in this category yet.',
  },
  fr: {
    badge: 'Alternatives Outils IA',
    title: (name) => `Meilleures Alternatives à ${name} en 2026`,
    subtitle: (name) => `${name} est un choix populaire, mais ce n'est pas la seule option. Voici les meilleures alternatives — y compris des options gratuites — comparées par prix, note et fonctionnalités.`,
    originalLabel: 'L\'original', rating: 'Note', pricing: 'Tarif', visit: 'Visiter', view: 'Voir les détails',
    compareWith: (a, b) => `Comparer avec ${a}`,
    rank: '#', back: '← Retour',
    faqTitle: 'Questions Fréquentes',
    faq: [
      { q: 'is-there-free', a: 'is-there-free-a' },
      { q: 'which-best', a: 'which-best-a' },
      { q: 'switch-cost', a: 'switch-cost-a' },
    ],
    moreAlternatives: 'Plus de guides d\'alternatives',
    backToHub: 'Voir toutes les alternatives',
    noAlternatives: 'Aucune alternative trouvée dans cette catégorie pour le moment.',
  },
  es: {
    badge: 'Alternativas de Herramientas IA',
    title: (name) => `Mejores Alternativas a ${name} en 2026`,
    subtitle: (name) => `${name} es una opción popular, pero no es la única. Aquí están las mejores alternativas — incluyendo opciones gratuitas — comparadas por precio, valoración y funciones.`,
    originalLabel: 'El original', rating: 'Valoración', pricing: 'Precio', visit: 'Visitar', view: 'Ver detalles',
    compareWith: (a, b) => `Comparar con ${a}`,
    rank: '#', back: '← Volver',
    faqTitle: 'Preguntas Frecuentes',
    faq: [
      { q: 'is-there-free', a: 'is-there-free-a' },
      { q: 'which-best', a: 'which-best-a' },
      { q: 'switch-cost', a: 'switch-cost-a' },
    ],
    moreAlternatives: 'Más guías de alternativas',
    backToHub: 'Ver todas las alternativas',
    noAlternatives: 'Aún no se encontraron alternativas en esta categoría.',
  },
  ar: {
    badge: 'بدائل أدوات الذكاء الاصطناعي',
    title: (name) => `أفضل بدائل ${name} في 2026`,
    subtitle: (name) => `${name} خيار شائع، لكنه ليس الخيار الوحيد. هذه هي أفضل البدائل المصنفة — بما في ذلك خيارات مجانية — مقارنة من حيث السعر والتقييم والميزات.`,
    originalLabel: 'الأصلي', rating: 'التقييم', pricing: 'السعر', visit: 'زيارة', view: 'عرض التفاصيل',
    compareWith: (a, b) => `قارن مع ${a}`,
    rank: '#', back: '→ رجوع',
    faqTitle: 'الأسئلة الشائعة',
    faq: [
      { q: 'is-there-free', a: 'is-there-free-a' },
      { q: 'which-best', a: 'which-best-a' },
      { q: 'switch-cost', a: 'switch-cost-a' },
    ],
    moreAlternatives: 'المزيد من دلائل البدائل',
    backToHub: 'تصفح جميع البدائل',
    noAlternatives: 'لم يتم العثور على بدائل في هذه الفئة حتى الآن.',
  },
};

// FAQ answer templates (per locale, generated from tool name)
const FAQ_ANSWERS: Record<Locale, Record<string, (name: string, alt: string) => string>> = {
  en: {
    'is-there-free': (name, alt) => `Yes — several ${name} alternatives offer a free plan or free tier, including ${alt}. Free tiers are usually limited in usage or features compared to paid plans, but they're a good way to test the tool before committing.`,
    'which-best': (name) => `The "best" alternative to ${name} depends on your needs and budget. Check the comparison table above — tools are ranked by rating and value for money so you can quickly spot the top pick for your use case.`,
    'switch-cost': (name) => `Switching from ${name} usually costs nothing beyond your time — most alternatives let you start on a free or freemium plan, so you can try them risk-free before deciding to switch fully.`,
  },
  fr: {
    'is-there-free': (name, alt) => `Oui — plusieurs alternatives à ${name} proposent un plan gratuit, dont ${alt}. Les offres gratuites sont généralement limitées en usage ou en fonctionnalités par rapport aux plans payants, mais elles permettent de tester l'outil avant de s'engager.`,
    'which-best': (name) => `La "meilleure" alternative à ${name} dépend de vos besoins et de votre budget. Consultez le tableau ci-dessus — les outils sont classés par note et rapport qualité-prix pour repérer rapidement le meilleur choix selon votre usage.`,
    'switch-cost': (name) => `Changer de ${name} ne coûte généralement rien d'autre que votre temps — la plupart des alternatives proposent un plan gratuit ou freemium, vous pouvez donc les tester sans risque avant de basculer définitivement.`,
  },
  es: {
    'is-there-free': (name, alt) => `Sí — varias alternativas a ${name} ofrecen un plan gratuito, incluyendo ${alt}. Los planes gratuitos suelen tener limitaciones de uso o funciones frente a los de pago, pero son una buena forma de probar la herramienta antes de comprometerte.`,
    'which-best': (name) => `La "mejor" alternativa a ${name} depende de tus necesidades y presupuesto. Consulta la tabla anterior — las herramientas están ordenadas por valoración y relación calidad-precio para que identifiques rápidamente la mejor opción para tu caso.`,
    'switch-cost': (name) => `Cambiar de ${name} normalmente no cuesta nada más que tu tiempo — la mayoría de alternativas tienen un plan gratuito o freemium, así que puedes probarlas sin riesgo antes de migrar por completo.`,
  },
  ar: {
    'is-there-free': (name, alt) => `نعم — تقدم العديد من بدائل ${name} خطة مجانية، بما في ذلك ${alt}. غالبًا تكون الخطط المجانية محدودة في الاستخدام أو الميزات مقارنة بالخطط المدفوعة، لكنها طريقة جيدة لتجربة الأداة قبل الالتزام.`,
    'which-best': (name) => `يعتمد "أفضل" بديل لـ ${name} على احتياجاتك وميزانيتك. راجع الجدول أعلاه — الأدوات مرتبة حسب التقييم والقيمة مقابل السعر لتحديد الخيار الأفضل لاستخدامك بسرعة.`,
    'switch-cost': (name) => `الانتقال من ${name} لا يكلف عادة شيئًا سوى وقتك — تتيح معظم البدائل بدء استخدامها بخطة مجانية أو فريميوم، فيمكنك تجربتها دون مخاطرة قبل التبديل الكامل.`,
  },
};

const FAQ_QUESTIONS: Record<Locale, Record<string, (name: string) => string>> = {
  en: {
    'is-there-free': (name) => `Is there a free alternative to ${name}?`,
    'which-best': (name) => `Which is the best alternative to ${name}?`,
    'switch-cost': (name) => `Does switching from ${name} cost anything?`,
  },
  fr: {
    'is-there-free': (name) => `Existe-t-il une alternative gratuite à ${name} ?`,
    'which-best': (name) => `Quelle est la meilleure alternative à ${name} ?`,
    'switch-cost': (name) => `Changer de ${name} coûte-t-il quelque chose ?`,
  },
  es: {
    'is-there-free': (name) => `¿Existe una alternativa gratuita a ${name}?`,
    'which-best': (name) => `¿Cuál es la mejor alternativa a ${name}?`,
    'switch-cost': (name) => `¿Cambiar de ${name} cuesta algo?`,
  },
  ar: {
    'is-there-free': (name) => `هل يوجد بديل مجاني لـ ${name}؟`,
    'which-best': (name) => `ما هو أفضل بديل لـ ${name}؟`,
    'switch-cost': (name) => `هل يكلف الانتقال من ${name} أي شيء؟`,
  },
};

export default async function AlternativesPage({ params }: Props) {
  const toolId = getToolId(params.slug);
  const tool = TOOLS_DATA.find((t) => t.id === toolId);
  if (!tool) notFound();

  const locale = params.locale;
  const L = LABELS[locale];
  const url = buildAffiliateUrl(tool.id, tool.websiteUrl);

  const alternatives = TOOLS_DATA
    .filter((t) => t.category === tool.category && t.id !== tool.id)
    .sort((a, b) => (b.rating - a.rating) || (b.views - a.views))
    .slice(0, 9);

  const topAltName = alternatives[0]?.name || tool.name;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${tool.name} Alternatives`,
    itemListElement: alternatives.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: t.name,
      url: `https://getaiverse.online/${locale}/tools/${t.id}`,
    })),
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'AIverse', item: `${BASE}/${locale}` },
      { '@type': 'ListItem', position: 2, name: 'Alternatives', item: `${BASE}/${locale}/alternatives` },
      { '@type': 'ListItem', position: 3, name: `${tool.name} Alternatives`, item: `${BASE}/${locale}/alternatives/${tool.id}-alternatives` },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: L.faq.map(({ q, a }) => ({
      '@type': 'Question',
      name: FAQ_QUESTIONS[locale][q](tool.name),
      acceptedAnswer: { '@type': 'Answer', text: FAQ_ANSWERS[locale][a.replace('-a', '')](tool.name, topAltName) },
    })),
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Back */}
      <a href={`/${locale}/alternatives`} className="text-sm text-gray-500 hover:text-gray-900 transition mb-8 inline-block">{L.back}</a>

      {/* Header */}
      <div className="text-center mb-12">
        <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#7C3AED] bg-[#7C3AED]/10 border border-[#7C3AED]/20 px-4 py-1.5 rounded-full mb-4">
          {L.badge}
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
          {L.title(tool.name)}
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-base">
          {L.subtitle(tool.name)}
        </p>
      </div>

      {/* Original tool card */}
      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 mb-10 flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{CATEGORY_EMOJI[tool.category] || '🛠️'}</span>
          <div>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-0.5">{L.originalLabel}</p>
            <p className="text-gray-900 font-black">{tool.name}</p>
          </div>
          <div className="flex items-center gap-1 ml-2">
            <Star className="w-4 h-4 fill-amber-400 text-amber-700" />
            <span className="text-gray-900 font-bold text-sm">{tool.rating.toFixed(1)}</span>
          </div>
          <span className="text-gray-600 text-sm">{tool.pricingLocalized[locale]}</span>
        </div>
        <div className="flex items-center gap-2">
          <a href={`/${locale}/tools/${tool.id}`} className="text-xs font-semibold text-violet-700 hover:text-violet-700 border border-violet-500/20 hover:border-violet-500/40 px-3 py-2 rounded-xl transition">{L.view}</a>
          <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-bold bg-violet-600 hover:bg-violet-500 text-white px-3 py-2 rounded-xl transition">
            {L.visit} <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Alternatives grid */}
      {alternatives.length === 0 ? (
        <p className="text-center text-gray-600 mb-10">{L.noAlternatives}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {alternatives.map((alt, i) => {
            const altUrl = buildAffiliateUrl(alt.id, alt.websiteUrl);
            return (
              <div key={alt.id} className="rounded-2xl border border-gray-200 bg-gray-50 p-5 flex flex-col gap-3 hover:border-violet-500/30 transition">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black text-violet-700 bg-violet-500/10 border border-violet-500/20 rounded-full w-6 h-6 flex items-center justify-center">{i + 1}</span>
                    <span className="text-xl">{CATEGORY_EMOJI[alt.category] || '🛠️'}</span>
                    <h3 className="text-gray-900 font-black">{alt.name}</h3>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-700" />
                    <span className="text-gray-900 font-bold text-sm">{alt.rating.toFixed(1)}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">{alt.description[locale]}</p>
                <div className="flex items-center justify-between mt-auto pt-2">
                  <span className={`text-xs font-semibold ${alt.pricing === 'Free' ? 'text-green-700' : alt.pricing === 'Freemium' ? 'text-amber-700' : 'text-gray-700'}`}>{alt.pricingLocalized[locale]}</span>
                  <div className="flex items-center gap-2">
                    <a href={`/${locale}/compare/${tool.id}-vs-${alt.id}`} className="text-xs font-semibold text-gray-600 hover:text-violet-700 transition flex items-center gap-1">
                      {L.compareWith(alt.name, tool.name)} <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
                <a href={altUrl} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2 rounded-xl text-sm font-bold bg-gray-50 hover:bg-violet-600 text-gray-700 hover:text-white border border-gray-200 hover:border-violet-500 transition-all">
                  {L.visit} {alt.name} <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>
      )}

      {/* FAQ */}
      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 mb-10">
        <h2 className="text-lg font-black text-gray-900 mb-4 flex items-center gap-2">
          <Zap className="w-5 h-5 text-violet-700" /> {L.faqTitle}
        </h2>
        <div className="space-y-4">
          {L.faq.map(({ q, a }, i) => (
            <div key={i} className="border-b border-gray-200 last:border-0 pb-4 last:pb-0">
              <p className="text-gray-900 font-bold text-sm mb-1.5">{FAQ_QUESTIONS[locale][q](tool.name)}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{FAQ_ANSWERS[locale][a.replace('-a', '')](tool.name, topAltName)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* More alternative guides */}
      {(() => {
        const others = TOP_ALTERNATIVES.filter((s) => s !== params.slug);
        if (others.length === 0) return null;
        return (
          <div className="mb-10">
            <h2 className="text-lg font-black text-gray-900 mb-4">{L.moreAlternatives}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {others.map((slug) => {
                const otherTool = TOOLS_DATA.find((t) => t.id === getToolId(slug));
                if (!otherTool) return null;
                return (
                  <a key={slug} href={`/${locale}/alternatives/${slug}`}
                    className="flex items-center gap-2 bg-gray-50 hover:bg-violet-600/10 border border-gray-200 hover:border-violet-500/30 rounded-xl px-4 py-3 transition group">
                    <span className="text-sm text-gray-900 font-semibold truncate flex-1">{otherTool.name}</span>
                    <ArrowUpRight className="w-3 h-3 text-gray-600 group-hover:text-violet-700 shrink-0" />
                  </a>
                );
              })}
            </div>
          </div>
        );
      })()}

      {/* Back to hub */}
      <div className="text-center">
        <a href={`/${locale}/alternatives`}
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 border border-gray-200 hover:border-gray-200 px-5 py-2.5 rounded-xl transition">
          {L.backToHub}
        </a>
      </div>
    </div>
  );
}
