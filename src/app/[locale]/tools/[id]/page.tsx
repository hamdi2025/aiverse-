import { notFound } from 'next/navigation';
import { TOOLS_DATA } from '@/lib/tools';
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
  const desc = tool.description[params.locale] || tool.description.en;
  return {
    title: `${tool.name} — Aiverse`,
    description: desc,
    openGraph: {
      title: `${tool.name} | Aiverse`,
      description: desc,
      url: `https://aiverse-lemon.vercel.app/${params.locale}/tools/${tool.id}`,
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
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: tool.rating,
      bestRating: 5,
      worstRating: 1,
      ratingCount: tool.views,
    },
    url: outboundUrl,
  };

  const pricingColor =
    tool.pricing === 'Free' ? 'text-green-400' :
    tool.pricing === 'Freemium' ? 'text-amber-400' : 'text-gray-300';

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
      </div>

      {/* Compare with section */}
      {(() => {
        const similar = TOOLS_DATA.filter(t => t.id !== tool.id && t.category === tool.category).slice(0, 5);
        if (similar.length === 0) return null;
        const compareLabel = locale === 'fr' ? `Comparer ${tool.name} avec` : locale === 'es' ? `Comparar ${tool.name} con` : locale === 'ar' ? `قارن ${tool.name} مع` : `Compare ${tool.name} with`;
        return (
          <div className="mb-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">🔀 {compareLabel}</h3>
            <div className="flex flex-wrap gap-2">
              {similar.map(s => (
                <a key={s.id} href={`/${locale}/compare/${tool.id}-vs-${s.id}`}
                  className="flex items-center gap-1.5 text-sm text-gray-300 hover:text-white border border-white/[0.08] hover:border-violet-500/50 hover:bg-violet-500/10 rounded-xl px-4 py-2 transition-all duration-200">
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
          {locale === 'fr' ? `Essayer ${tool.