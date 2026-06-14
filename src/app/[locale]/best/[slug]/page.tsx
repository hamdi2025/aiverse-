import { notFound } from 'next/navigation';
import { TOOLS_DATA } from '@/lib/tools';
import { buildAffiliateUrl } from '@/lib/affiliate';
import { tl } from '@/lib/dataI18n';
import { BEST_FOR, getBestFor, getBestForFaq } from '@/lib/bestFor';

type Locale = 'en' | 'fr' | 'es' | 'ar';
interface Props { params: { slug: string; locale: Locale } }

const BASE = 'https://getaiverse.online';

export function generateStaticParams() {
  const locales: Locale[] = ['en', 'fr', 'es', 'ar'];
  return BEST_FOR.flatMap((g) => locales.map((locale) => ({ slug: g.slug, locale })));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props) {
  const g = getBestFor(params.slug);
  if (!g) return {};
  const locale = params.locale;
  return {
    title: `${g.title[locale]} | AIverse`,
    description: g.meta[locale],
    alternates: {
      canonical: `${BASE}/${locale}/best/${g.slug}`,
      languages: {
        en: `${BASE}/en/best/${g.slug}`, fr: `${BASE}/fr/best/${g.slug}`,
        es: `${BASE}/es/best/${g.slug}`, ar: `${BASE}/ar/best/${g.slug}`,
      },
    },
    openGraph: {
      title: g.title[locale], description: g.meta[locale],
      url: `${BASE}/${locale}/best/${g.slug}`, siteName: 'AIverse', type: 'article',
    },
  };
}

const pricingColor = (p: string) =>
  p === 'Free' ? 'text-green-400' : p === 'Freemium' ? 'text-amber-400' : 'text-gray-300';

export default function BestForPage({ params }: Props) {
  const g = getBestFor(params.slug);
  if (!g) notFound();
  const locale = params.locale;

  const tools = g.toolIds
    .map((id) => TOOLS_DATA.find((t) => t.id === id))
    .filter((t): t is NonNullable<typeof t> => !!t);
  if (tools.length === 0) notFound();

  const faq = getBestForFaq(g, tools[0].name);
  const faqTitle = locale === 'fr' ? 'Questions fréquentes' : locale === 'es' ? 'Preguntas frecuentes' : locale === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions';

  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: g.title[locale],
    itemListElement: tools.map((t, i) => ({
      '@type': 'ListItem', position: i + 1, name: t.name,
      url: `${BASE}/${locale}/tools/${t.id}`,
    })),
  };
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question', name: item.q[locale],
      acceptedAnswer: { '@type': 'Answer', text: item.a[locale] },
    })),
  };
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'AIverse', item: `${BASE}/${locale}` },
      { '@type': 'ListItem', position: 2, name: 'Best AI Tools', item: `${BASE}/${locale}/best` },
      { '@type': 'ListItem', position: 3, name: g.title[locale], item: `${BASE}/${locale}/best/${g.slug}` },
    ],
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-14">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6 flex flex-wrap items-center gap-1.5">
        <a href={`/${locale}`} className="hover:text-white transition">{locale === 'fr' ? 'Accueil' : locale === 'es' ? 'Inicio' : locale === 'ar' ? 'الرئيسية' : 'Home'}</a>
        <span className="text-gray-700">/</span>
        <a href={`/${locale}/best`} className="hover:text-white transition">{locale === 'fr' ? 'Meilleurs outils' : locale === 'es' ? 'Mejores herramientas' : locale === 'ar' ? 'أفضل الأدوات' : 'Best AI Tools'}</a>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-black text-white mb-4">{g.emoji} {g.title[locale]}</h1>
      <p className="text-gray-300 leading-relaxed mb-10">{g.intro[locale]}</p>

      {/* Ranked tools */}
      <div className="space-y-4 mb-12">
        {tools.map((t, i) => {
          const url = buildAffiliateUrl(t.id, t.websiteUrl);
          return (
            <div key={t.id} className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-tr from-[#7C3AED] to-[#06B6D4] flex items-center justify-center text-white font-black text-sm">{i + 1}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <a href={`/${locale}/tools/${t.id}`} className="text-lg font-bold text-white hover:text-violet-300 transition">{t.name}</a>
                    <span className="flex items-center gap-3 text-sm">
                      <span className="text-amber-400 font-bold">⭐ {t.rating.toFixed(1)}</span>
                      <span className={`font-semibold ${pricingColor(t.pricing)}`}>{t.pricingLocalized[locale]}</span>
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mt-1.5">{t.description[locale]}</p>
                  {!!t.pros?.length && (
                    <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                      {t.pros.slice(0, 3).map((p, k) => (
                        <li key={k} className="text-xs text-gray-400"><span className="text-emerald-400">+</span> {tl(p, locale)}</li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-3 flex items-center gap-3">
                    <a href={url} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] rounded-lg px-3 py-1.5 hover:opacity-90 transition">
                      {locale === 'fr' ? 'Visiter' : locale === 'es' ? 'Visitar' : locale === 'ar' ? 'زيارة' : 'Visit'} →
                    </a>
                    <a href={`/${locale}/tools/${t.id}`} className="text-xs text-gray-400 hover:text-white transition">
                      {locale === 'fr' ? 'Détails' : locale === 'es' ? 'Detalles' : locale === 'ar' ? 'التفاصيل' : 'Details'}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* FAQ */}
      <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
        <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">❓ {faqTitle}</h2>
        <div className="space-y-4">
          {faq.map((item, idx) => (
            <div key={idx} className="border-b border-white/[0.06] pb-4 last:border-0 last:pb-0">
              <h3 className="text-white font-semibold mb-1.5">{item.q[locale]}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.a[locale]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
