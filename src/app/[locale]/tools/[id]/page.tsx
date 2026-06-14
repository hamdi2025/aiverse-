import { notFound } from 'next/navigation';
import { TOOLS_DATA } from '@/lib/tools';
import { TOOL_FAQS } from '@/lib/faq';
import { getGenericFaq } from '@/lib/genericFaq';
import { buildAffiliateUrl } from '@/lib/affiliate';
import { getTranslations } from 'next-intl/server';
import { Star, ArrowUpRight, Tag, Globe, TrendingUp } from 'lucide-react';

type Locale = 'en' | 'fr' | 'es' | 'ar';

interface Props {
  params: { id: string; locale: Locale };
}

export async function generateStaticParams() {
  const locales = ['en', 'fr', 'es', 'ar'];
  return TOOLS_DATA.flatMap((tool) =>
    locales.map((locale) => ({ id: tool.id, locale }))
  );
}

export async function generateMetadata({ params }: Props) {
  const tool = TOOLS_DATA.find((t) => t.id === params.id);
  if (!tool) return {};

  const locale = params.locale;
  const desc = tool.description[locale] || tool.description.en;
  const BASE = 'https://getaiverse.online';

  // Multilingual keywords for maximum SEO coverage
  const keywordMap: Record<string, string> = {
    en: `${tool.name}, best ${tool.name} alternative, ${tool.name} review 2026, top AI tools, free AI tool, ${tool.category} AI, artificial intelligence tools`,
    fr: `${tool.name}, meilleur outil IA, alternative ${tool.name}, avis ${tool.name} 2026, outils intelligence artificielle, outil IA gratuit, ${tool.category} IA`,
    es: `${tool.name}, mejor herramienta IA, alternativa ${tool.name}, reseña ${tool.name} 2026, herramientas inteligencia artificial, herramienta IA gratis`,
    ar: `${tool.name}, أفضل أداة ذكاء اصطناعي, بديل ${tool.name}, مراجعة ${tool.name} 2026, أدوات الذكاء الاصطناعي, أداة ذكاء اصطناعي مجانية`,
  };

  const titleMap: Record<string, string> = {
    en: `${tool.name} — Review, Pricing & Alternatives 2026 | Aiverse`,
    fr: `${tool.name} — Avis, Prix & Alternatives 2026 | Aiverse`,
    es: `${tool.name} — Reseña, Precio & Alternativas 2026 | Aiverse`,
    ar: `${tool.name} — مراجعة، أسعار وبدائل 2026 | Aiverse`,
  };

  return {
    title: titleMap[locale] || `${tool.name} — Aiverse`,
    description: desc,
    keywords: keywordMap[locale],
    alternates: {
      canonical: `${BASE}/${locale}/tools/${tool.id}`,
      languages: {
        'en': `${BASE}/en/tools/${tool.id}`,
        'fr': `${BASE}/fr/tools/${tool.id}`,
        'es': `${BASE}/es/tools/${tool.id}`,
        'ar': `${BASE}/ar/tools/${tool.id}`,
      },
    },
    openGraph: {
      title: titleMap[locale] || `${tool.name} | Aiverse`,
      description: desc,
      url: `${BASE}/${locale}/tools/${tool.id}`,
      siteName: 'Aiverse',
      type: 'article',
    },
    twitter: {
      card: 'summary',
      title: titleMap[locale] || `${tool.name} | Aiverse`,
      description: desc,
    },
  };
}

export default async function ToolPage({ params }: Props) {
  const tool = TOOLS_DATA.find((t) => t.id === params.id);
  if (!tool) notFound();

  const t = await getTranslations({ locale: params.locale, namespace: 'Common' });
  const locale = params.locale;
  const outboundUrl = buildAffiliateUrl(tool.id, tool.websiteUrl);

  // JSON-LD structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: tool.name,
    description: tool.description.en,
    applicationCategory: 'AIApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: tool.pricing === 'Free' ? '0' : undefined,
      priceCurrency: 'USD',
      availability: 'https://schema.org/OnlineOnly',
    },
    url: outboundUrl,
  };

  const pricingColor =
    tool.pricing === 'Free' ? 'text-green-400' :
    tool.pricing === 'Freemium' ? 'text-amber-400' : 'text-gray-300';

  const faq = TOOL_FAQS[tool.id] || getGenericFaq(tool);
  const faqJsonLd = faq ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.question[locale] || item.question.en,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer[locale] || item.answer.en,
      },
    })),
  } : null;

  const faqTitle = locale === 'fr' ? 'Questions fréquentes' : locale === 'es' ? 'Preguntas frecuentes' : locale === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions';

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      {/* Back */}
      <a href={`/${locale}`} className="text-sm text-gray-500 hover:text-white transition mb-8 inline-block">
        ← {locale === 'fr' ? 'Retour' : locale === 'es' ? 'Volver' : locale === 'ar' ? 'رجوع' : 'Back'}
      </a>

      {/* Header */}
      <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 mb-6">
        <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400 bg-white/[0.06] px-3 py-1 rounded-full border border-white/5">
              {tool.category}
            </span>
            <h1 className="text-4xl font-black text-white mt-3 mb-2">{tool.name}</h1>
            <div className="flex items-center gap-4 text-sm">
              <span className="flex items-center gap-1.5">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="font-bold text-white">{tool.rating.toFixed(1)}</span>
                <span className="text-gray-500">/5</span>
              </span>
              <span className={`font-bold ${pricingColor}`}>
                <Tag className="w-3.5 h-3.5 inline mr-1" />
                {tool.pricingLocalized[locale]}
              </span>
            </div>
          </div>
          <a
            href={outboundUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] hover:opacity-90 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all hover:scale-105 shadow-lg shadow-purple-900/30"
          >
            {t('visit')} <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <p className="text-gray-300 text-base leading-relaxed">
          {tool.description[locale]}
        </p>
      </div>

      {/* Details */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 text-center">
          <Star className="w-5 h-5 text-amber-400 mx-auto mb-2" />
          <div className="text-2xl font-black text-white">{tool.rating.toFixed(1)}</div>
          <div className="text-xs text-gray-500 mt-1">{locale === 'fr' ? 'Note' : locale === 'es' ? 'Calificación' : locale === 'ar' ? 'التقييم' : 'Rating'}</div>
        </div>
        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 text-center">
          <TrendingUp className="w-5 h-5 text-purple-400 mx-auto mb-2" />
          <div className="text-2xl font-black text-white">{(tool.views / 1000).toFixed(1)}k</div>
          <div className="text-xs text-gray-500 mt-1">{locale === 'fr' ? 'Vues' : locale === 'es' ? 'Visitas' : locale === 'ar' ? 'المشاهدات' : 'Views'}</div>
        </div>
        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 text-center">
          <Globe className="w-5 h-5 text-cyan-400 mx-auto mb-2" />
          <div className={`text-xl font-black ${pricingColor}`}>{tool.pricing}</div>
          <div className="text-xs text-gray-500 mt-1">{t('pricing')}</div>
        </div>

      {/* Compare with */}
      {(() => {
        const similar = TOOLS_DATA.filter(s => s.id !== tool.id && s.category === tool.category).slice(0, 5);
        if (similar.length === 0) return null;
        const label = locale === 'fr' ? `Comparer ${tool.name} avec` : locale === 'es' ? `Comparar ${tool.name} con` : locale === 'ar' ? `قارن ${tool.name} مع` : `Compare ${tool.name} with`;
        return (
          <div className="mb-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">🔀 {label}</h3>
            <div className="flex flex-wrap gap-2">
              {similar.map(s => (
                <a key={s.id} href={`/${locale}/compare/${tool.id}-vs-${s.id}`}
                  className="flex items-center gap-1.5 text-sm text-gray-300 hover:text-white border border-white/[0.08] hover:border-violet-500/50 hover:bg-violet-500/10 rounded-xl px-4 py-2 transition-all">
                  <span className="text-violet-400 font-bold">{tool.name}</span>
                  <span className="text-gray-600 text-xs">vs</span>
                  <span className="text-orange-400 font-bold">{s.name}</span>
                </a>
              ))}
            </div>
          </div>
        );
      })()}

      {/* CTA */}
      <div className="rounded-2xl border border-[#7C3AED]/30 bg-[#7C3AED]/5 p-8 text-center">
        <h2 className="text-xl font-black text-white mb-2">
          {locale === 'fr' ? `Essayer ${tool.name} maintenant` : locale === 'es' ? `Prueba ${tool.name} ahora` : locale === 'ar' ? `جرّب ${tool.name} الآن` : `Try ${tool.name} Now`}
        </h2>
        <p className="text-gray-400 text-sm mb-6">{tool.description[locale]}</p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a href={outboundUrl} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] hover:opacity-90 text-white px-8 py-3 rounded-xl font-bold transition-all hover:scale-105">
            {locale === 'fr' ? 'Essayer' : locale === 'es' ? 'Probar' : locale === 'ar' ? 'جرّب الآن' : 'Try Free'} <ArrowUpRight className="w-4 h-4" />
          </a>
          <a href={`/${locale}/compare`}
            className="inline-flex items-center gap-2 border border-white/20 hover:border-violet-500/50 hover:bg-violet-600/10 text-gray-300 hover:text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all">
            ⚡ {locale === 'fr' ? `Comparer ${tool.name}` : locale === 'es' ? `Comparar ${tool.name}` : locale === 'ar' ? `قارن ${tool.name}` : `Compare ${tool.name}`}
          </a>
          <a href={`/${locale}/alternatives/${tool.id}-alternatives`}
            className="inline-flex items-center gap-2 border border-white/20 hover:border-cyan-500/50 hover:bg-cyan-600/10 text-gray-300 hover:text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all">
            🔁 {locale === 'fr' ? `Alternatives à ${tool.name}` : locale === 'es' ? `Alternativas a ${tool.name}` : locale === 'ar' ? `بدائل ${tool.name}` : `${tool.name} Alternatives`}
          </a>
        </div>
      </div>
    </div>

      {/* FAQ */}
      {faq && (
        <div className="mt-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">❓ {faqTitle}</h2>
          <div className="space-y-4">
            {faq.map((item, idx) => (
              <div key={idx} className="border-b border-white/[0.06] pb-4 last:border-b-0 last:pb-0">
                <h3 className="text-white font-semibold mb-1.5">{item.question[locale] || item.question.en}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.answer[locale] || item.answer.en}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
