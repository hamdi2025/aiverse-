import { notFound } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';
import { TOOLS_DATA } from '@/lib/tools';
import { buildAffiliateUrl } from '@/lib/affiliate';
import { Star, Check, ArrowUpRight, Zap, Lock } from 'lucide-react';

type Locale = 'en' | 'fr' | 'es' | 'ar';
interface Props { params: { slug: string; locale: Locale } }

// Pre-generate the most searched comparisons
const TOP_COMPARISONS = [
  'chatgpt-vs-claude',
  'chatgpt-vs-gemini',
  'midjourney-vs-dalle3',
  'midjourney-vs-stable-diffusion',
  'jasper-vs-writesonic',
  'jasper-vs-copy-ai',
  'claude-vs-gemini',
  'grammarly-ai-vs-quillbot',
  'runway-ml-vs-pika-labs',
  'notion-ai-vs-coda-ai',
  'bolt-new-vs-v0-dev',
  'cursor-vs-github-copilot',
  'elevenlabs-vs-murf-ai',
  'opus-clip-vs-fliki-ai',
  'reclaim-ai-vs-fireflies-ai',
  'gamma-app-vs-tome-ai',
  'beautiful-ai-vs-pitch-deck-ai',
  'surfer-seo-vs-semrush-ai',
  'ilovepdf-ai-vs-smallpdf',
  'tinypng-ai-vs-squoosh-app',
];

// Generate static params for top comparisons (others rendered on-demand)
export async function generateStaticParams() {
  const locales = ['en', 'fr', 'es', 'ar'];
  return TOP_COMPARISONS.flatMap((slug) =>
    locales.map((locale) => ({ slug, locale }))
  );
}

// Allow any slug beyond the pre-generated ones
export const dynamicParams = true;

export async function generateMetadata({ params }: Props) {
  const [id1, id2] = params.slug.split('-vs-');
  const t1 = TOOLS_DATA.find((t) => t.id === id1);
  const t2 = TOOLS_DATA.find((t) => t.id === id2);
  if (!t1 || !t2) return {};
  const BASE = 'https://getaiverse.online';
  const locale = params.locale;

  const titleMap: Record<string, string> = {
    en: `${t1.name} vs ${t2.name} — Which is Better in 2026? | Aiverse`,
    fr: `${t1.name} vs ${t2.name} — Lequel est Meilleur en 2026 ? | Aiverse`,
    es: `${t1.name} vs ${t2.name} — ¿Cuál es Mejor en 2026? | Aiverse`,
    ar: `${t1.name} مقابل ${t2.name} — أيهما أفضل في 2026؟ | Aiverse`,
  };

  const descMap: Record<string, string> = {
    en: `Compare ${t1.name} vs ${t2.name}: pricing, features, ratings, pros & cons. Find the best AI tool for you in 2026.`,
    fr: `Comparez ${t1.name} vs ${t2.name} : prix, fonctionnalités, notes, avantages et inconvénients. Trouvez le meilleur outil IA en 2026.`,
    es: `Compara ${t1.name} vs ${t2.name}: precios, características, valoraciones, pros y contras. Encuentra la mejor herramienta IA en 2026.`,
    ar: `قارن بين ${t1.name} و${t2.name}: الأسعار، الميزات، التقييمات، المزايا والعيوب. اعثر على أفضل أداة ذكاء اصطناعي في 2026.`,
  };

  return {
    title: titleMap[locale],
    description: descMap[locale],
    keywords: `${t1.name} vs ${t2.name}, ${t1.name} alternative, ${t2.name} alternative, best AI tool 2026, compare AI tools, meilleur outil IA, herramienta IA, أداة ذكاء اصطناعي`,
    alternates: {
      canonical: `${BASE}/${locale}/compare/${params.slug}`,
      languages: {
        'en': `${BASE}/en/compare/${params.slug}`,
        'fr': `${BASE}/fr/compare/${params.slug}`,
        'es': `${BASE}/es/compare/${params.slug}`,
        'ar': `${BASE}/ar/compare/${params.slug}`,
      },
    },
    openGraph: {
      title: titleMap[locale],
      description: descMap[locale],
      url: `${BASE}/${locale}/compare/${params.slug}`,
      siteName: 'Aiverse',
    },
  };
}

const LABELS: Record<Locale, { winner: string; tie: string; pricing: string; rating: string; category: string; pros: string; cons: string; verdict: string; visit: string; compare: string; back: string; criteria: string; about: string; moreComparisons: string; try: string; winnerText: (name: string, rating: string) => string; tieText: (n1: string, n2: string) => string }> = {
  en: { winner: 'Winner', tie: 'Tie', pricing: 'Pricing', rating: 'Rating', category: 'Category', pros: 'Pros', cons: 'Cons', verdict: 'Our Verdict', visit: 'Visit', compare: 'Compare', back: '← Back', criteria: 'Criteria', about: 'About', moreComparisons: 'More Comparisons', try: 'Try', winnerText: (name, rating) => `After comparing ratings, pricing and features, ${name} comes out ahead with a ${rating}/5 rating. It is the better choice for most users.`, tieText: (n1, n2) => `${n1} and ${n2} are equally matched — your choice depends on your specific use case and budget.` },
  fr: { winner: 'Gagnant', tie: 'Égalité', pricing: 'Tarif', rating: 'Note', category: 'Catégorie', pros: 'Avantages', cons: 'Inconvénients', verdict: 'Notre Verdict', visit: 'Visiter', compare: 'Comparer', back: '← Retour', criteria: 'Critère', about: 'À propos de', moreComparisons: 'Plus de comparaisons', try: 'Essayer', winnerText: (name, rating) => `Après comparaison des notes, tarifs et fonctionnalités, ${name} s'impose avec une note de ${rating}/5. C'est le meilleur choix pour la plupart des utilisateurs.`, tieText: (n1, n2) => `${n1} et ${n2} sont à égalité — votre choix dépend de votre cas d'usage et de votre budget.` },
  es: { winner: 'Ganador', tie: 'Empate', pricing: 'Precio', rating: 'Valoración', category: 'Categoría', pros: 'Ventajas', cons: 'Desventajas', verdict: 'Nuestro Veredicto', visit: 'Visitar', compare: 'Comparar', back: '← Volver', criteria: 'Criterio', about: 'Acerca de', moreComparisons: 'Más comparaciones', try: 'Probar', winnerText: (name, rating) => `Tras comparar valoraciones, precios y funciones, ${name} sale adelante con una nota de ${rating}/5. Es la mejor opción para la mayoría de usuarios.`, tieText: (n1, n2) => `${n1} y ${n2} están igualados — tu elección depende de tu caso de uso y presupuesto.` },
  ar: { winner: 'الفائز', tie: 'تعادل', pricing: 'السعر', rating: 'التقييم', category: 'الفئة', pros: 'المزايا', cons: 'العيوب', verdict: 'حكمنا', visit: 'زيارة', compare: 'مقارنة', back: '→ رجوع', criteria: 'المعيار', about: 'حول', moreComparisons: 'مقارنات أخرى', try: 'جرّب', winnerText: (name, rating) => `بعد مقارنة التقييمات والأسعار والميزات، يتفوق ${name} بتقييم ${rating}/5. هو الخيار الأفضل لمعظم المستخدمين.`, tieText: (n1, n2) => `${n1} و${n2} متكافئان — يعتمد اختيارك على حالة استخدامك وميزانيتك.` },
};

export default async function ComparePage({ params }: Props) {
  const { userId } = auth();
  const isLoggedIn = !!userId;
  const [id1, id2] = params.slug.split('-vs-');
  const t1 = TOOLS_DATA.find((t) => t.id === id1);
  const t2 = TOOLS_DATA.find((t) => t.id === id2);
  if (!t1 || !t2) notFound();

  const locale = params.locale;
  const L = LABELS[locale];
  const url1 = buildAffiliateUrl(t1.id, t1.websiteUrl);
  const url2 = buildAffiliateUrl(t2.id, t2.websiteUrl);

  const winner = t1.rating > t2.rating ? t1 : t2.rating > t1.rating ? t2 : null;

  // Generate popularity label from views
  const popularityLabel = (views: number) => {
    if (views >= 30000) return '🔥 Very High';
    if (views >= 15000) return '📈 High';
    if (views >= 5000) return '👍 Medium';
    return '🌱 Growing';
  };

  // Pricing score (lower = better)
  const pricingScore = (p: string) => p === 'Free' ? 3 : p === 'Freemium' ? 2 : 1;

  // JSON-LD for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${t1.name} vs ${t2.name} — Which AI Tool is Better?`,
    description: `Full comparison of ${t1.name} and ${t2.name} including pricing, features, ratings and pros & cons.`,
    url: `https://aiverse-lemon.vercel.app/${locale}/compare/${params.slug}`,
    author: { '@type': 'Organization', name: 'AIverse' },
  };

  const yesNo = (val: boolean | undefined) => val
    ? <span className="text-green-400 font-bold">✅ Yes</span>
    : <span className="text-red-400 font-semibold">❌ No</span>;

  const rows = [
    {
      label: L.rating,
      v1: <div className="flex items-center gap-1"><Star className="w-4 h-4 fill-amber-400 text-amber-400" /><span className="font-black text-white">{t1.rating.toFixed(1)}/5</span></div>,
      v2: <div className="flex items-center gap-1"><Star className="w-4 h-4 fill-amber-400 text-amber-400" /><span className="font-black text-white">{t2.rating.toFixed(1)}/5</span></div>,
      winner1: t1.rating >= t2.rating, winner2: t2.rating >= t1.rating,
    },
    {
      label: L.pricing,
      v1: <span className={t1.pricing === 'Free' ? 'text-green-400 font-bold' : t1.pricing === 'Freemium' ? 'text-amber-400 font-semibold' : 'text-gray-300'}>{t1.pricingLocalized[locale]}</span>,
      v2: <span className={t2.pricing === 'Free' ? 'text-green-400 font-bold' : t2.pricing === 'Freemium' ? 'text-amber-400 font-semibold' : 'text-gray-300'}>{t2.pricingLocalized[locale]}</span>,
      winner1: t1.pricing === 'Free' || (t1.pricing === 'Freemium' && t2.pricing === 'Paid'),
      winner2: t2.pricing === 'Free' || (t2.pricing === 'Freemium' && t1.pricing === 'Paid'),
    },
    {
      label: L.category,
      v1: <span className="capitalize text-gray-300">{t1.category}</span>,
      v2: <span className="capitalize text-gray-300">{t2.category}</span>,
      winner1: false, winner2: false,
    },
    {
      label: 'Popularity',
      v1: <span className="text-gray-300">{popularityLabel(t1.views)}</span>,
      v2: <span className="text-gray-300">{popularityLabel(t2.views)}</span>,
      winner1: t1.views >= t2.views, winner2: t2.views >= t1.views,
    },
    {
      label: 'Value for Money',
      v1: <span className={pricingScore(t1.pricing) === 3 ? 'text-green-400 font-bold' : pricingScore(t1.pricing) === 2 ? 'text-amber-400' : 'text-gray-300'}>
        {pricingScore(t1.pricing) === 3 ? '⭐⭐⭐ Excellent' : pricingScore(t1.pricing) === 2 ? '⭐⭐ Good' : '⭐ Paid only'}
      </span>,
      v2: <span className={pricingScore(t2.pricing) === 3 ? 'text-green-400 font-bold' : pricingScore(t2.pricing) === 2 ? 'text-amber-400' : 'text-gray-300'}>
        {pricingScore(t2.pricing) === 3 ? '⭐⭐⭐ Excellent' : pricingScore(t2.pricing) === 2 ? '⭐⭐ Good' : '⭐ Paid only'}
      </span>,
      winner1: pricingScore(t1.pricing) >= pricingScore(t2.pricing),
      winner2: pricingScore(t2.pricing) >= pricingScore(t1.pricing),
    },
    ...(t1.releaseDate || t2.releaseDate ? [{
      label: '📅 Release Date',
      v1: <span className="text-gray-300">{t1.releaseDate || '—'}</span>,
      v2: <span className="text-gray-300">{t2.releaseDate || '—'}</span>,
      winner1: false, winner2: false,
    }] : []),
    ...(t1.lastUpdate || t2.lastUpdate ? [{
      label: '🔄 Last Update',
      v1: <span className="text-green-400 font-semibold">{t1.lastUpdate || '—'}</span>,
      v2: <span className="text-green-400 font-semibold">{t2.lastUpdate || '—'}</span>,
      winner1: false, winner2: false,
    }] : []),
    ...(t1.company || t2.company ? [{
      label: 'Company',
      v1: <span className="text-gray-300">{t1.company || '—'}</span>,
      v2: <span className="text-gray-300">{t2.company || '—'}</span>,
      winner1: false, winner2: false,
    }] : []),
    ...(t1.founded || t2.founded ? [{
      label: 'Founded',
      v1: <span className="text-gray-300">{t1.founded || '—'}</span>,
      v2: <span className="text-gray-300">{t2.founded || '—'}</span>,
      winner1: false, winner2: false,
    }] : []),
    ...(t1.hasAPI !== undefined || t2.hasAPI !== undefined ? [{
      label: 'API Access',
      v1: yesNo(t1.hasAPI),
      v2: yesNo(t2.hasAPI),
      winner1: !!t1.hasAPI && !t2.hasAPI, winner2: !!t2.hasAPI && !t1.hasAPI,
    }] : []),
    ...(t1.hasMobileApp !== undefined || t2.hasMobileApp !== undefined ? [{
      label: 'Mobile App',
      v1: yesNo(t1.hasMobileApp),
      v2: yesNo(t2.hasMobileApp),
      winner1: !!t1.hasMobileApp && !t2.hasMobileApp, winner2: !!t2.hasMobileApp && !t1.hasMobileApp,
    }] : []),
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Back */}
      <a href={`/${locale}`} className="text-sm text-gray-500 hover:text-white transition mb-8 inline-block">{L.back}</a>

      {/* Header */}
      <div className="text-center mb-12">
        <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#7C3AED] bg-[#7C3AED]/10 border border-[#7C3AED]/20 px-4 py-1.5 rounded-full mb-4">
          {L.compare}
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
          <span className="bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">{t1.name}</span>
          {' '}vs{' '}
          <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">{t2.name}</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base">
          {t1.description[locale]}
        </p>
      </div>

      {/* Winner banner */}
      {winner && (
        <div className="mb-10 flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-2xl px-6 py-4">
          <Zap className="w-5 h-5 text-amber-400" />
          <span className="text-white font-black text-lg">{L.winner}: <span className="text-amber-400">{winner.name}</span></span>
          <span className="text-amber-400 text-sm font-semibold">(⭐ {winner.rating.toFixed(1)})</span>
        </div>
      )}

      {/* Side-by-side cards */}
      <div className="grid grid-cols-2 gap-4 mb-10">
        {[{ tool: t1, url: url1 }, { tool: t2, url: url2 }].map(({ tool, url }, i) => (
          <div key={tool.id} className={`rounded-2xl border p-6 flex flex-col gap-4 ${i === 0 ? 'border-violet-500/30 bg-violet-950/10' : 'border-orange-500/30 bg-orange-950/10'}`}>
            <div>
              <h2 className={`text-xl font-black mb-1 ${i === 0 ? 'text-violet-300' : 'text-orange-300'}`}>{tool.name}</h2>
              <p className="text-gray-400 text-xs leading-relaxed line-clamp-3">{tool.description[locale]}</p>
            </div>
            <a href={url} target="_blank" rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold transition-all ${i === 0 ? 'bg-violet-600 hover:bg-violet-500 text-white' : 'bg-orange-500 hover:bg-orange-400 text-white'}`}>
              {L.visit} {tool.name} <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        ))}
      </div>

      {/* Comparison table */}
      <div className="rounded-2xl border border-white/[0.08] overflow-hidden mb-10">
        <div className="grid grid-cols-3 bg-white/[0.04] px-6 py-3 text-xs font-bold uppercase tracking-wider text-gray-500 border-b border-white/[0.06]">
          <span>{L.criteria}</span>
          <span className="text-violet-400">{t1.name}</span>
          <span className="text-orange-400">{t2.name}</span>
        </div>
        {rows.map((row, i) => (
          <div key={i} className={`grid grid-cols-3 px-6 py-4 items-center ${i % 2 === 0 ? 'bg-white/[0.01]' : ''} border-b border-white/[0.04] last:border-0`}>
            <span className="text-sm font-semibold text-gray-400">{row.label}</span>
            <div className="flex items-center gap-2">
              {row.v1}
              {row.winner1 && <Check className="w-4 h-4 text-green-400 ml-1" />}
            </div>
            <div className="flex items-center gap-2">
              {row.v2}
              {row.winner2 && <Check className="w-4 h-4 text-green-400 ml-1" />}
            </div>
          </div>
        ))}
      </div>

      {/* Pros & Cons */}
      {(t1.pros || t2.pros) && (
        <div className="grid grid-cols-2 gap-4 mb-10">
          {[{ tool: t1, color: 'violet' }, { tool: t2, color: 'orange' }].map(({ tool, color }, i) => (
            tool.pros && (
              <div key={tool.id} className={`rounded-2xl border p-5 ${i === 0 ? 'border-violet-500/20 bg-violet-950/10' : 'border-orange-500/20 bg-orange-950/10'}`}>
                <h3 className={`font-bold text-sm mb-3 ${i === 0 ? 'text-violet-300' : 'text-orange-300'}`}>{tool.name}</h3>
                <div className="mb-3">
                  <p className="text-xs font-bold text-green-400 uppercase tracking-wider mb-2">✅ {L.pros}</p>
                  <ul className="space-y-1">
                    {tool.pros?.map((p, j) => <li key={j} className="text-xs text-gray-300 flex items-start gap-1.5"><span className="text-green-400 mt-0.5">+</span>{p}</li>)}
                  </ul>
                </div>
                {tool.cons && (
                  <div>
                    <p className="text-xs font-bold text-red-400 uppercase tracking-wider mb-2">❌ {L.cons}</p>
                    <ul className="space-y-1">
                      {tool.cons?.map((c, j) => <li key={j} className="text-xs text-gray-300 flex items-start gap-1.5"><span className="text-red-400 mt-0.5">−</span>{c}</li>)}
                    </ul>
                  </div>
                )}
              </div>
            )
          ))}
        </div>
      )}

      {/* Use Cases */}
      {(t1.useCases || t2.useCases) && (
        <div className="grid grid-cols-2 gap-4 mb-10">
          {[{ tool: t1 }, { tool: t2 }].map(({ tool }, i) => (
            tool.useCases && (
              <div key={tool.id} className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">🎯 Best for — {tool.name}</p>
                <div className="flex flex-wrap gap-2">
                  {tool.useCases.map((u, j) => (
                    <span key={j} className="text-xs bg-white/5 border border-white/10 text-gray-300 px-2.5 py-1 rounded-full">{u}</span>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>
      )}

      {/* Tags */}
      {(t1.tags || t2.tags) && (
        <div className="grid grid-cols-2 gap-4 mb-10">
          {[{ tool: t1, color: 'violet' }, { tool: t2, color: 'orange' }].map(({ tool }, i) => (
            tool.tags && (
              <div key={tool.id} className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">🏷️ Tags — {tool.name}</p>
                <div className="flex flex-wrap gap-2">
                  {tool.tags.map((tag, j) => (
                    <span key={j} className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${i === 0 ? 'text-violet-300 bg-violet-500/10 border-violet-500/20' : 'text-orange-300 bg-orange-500/10 border-orange-500/20'}`}>{tag}</span>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>
      )}

      {/* Verdict — public summary */}
      <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 mb-6">
        <h2 className="text-lg font-black text-white mb-3 flex items-center gap-2">
          <Zap className="w-5 h-5 text-violet-400" /> {L.verdict}
        </h2>
        <p className="text-gray-300 leading-relaxed text-sm">
          {winner
            ? L.winnerText(winner.name, winner.rating.toFixed(1))
            : L.tieText(t1.name, t2.name)}
        </p>
      </div>

      {/* Expert Recommendation — protected by sign-in */}
      <div className="rounded-2xl border border-violet-500/30 bg-violet-950/10 p-6 mb-10 relative overflow-hidden">
        <div className="flex items-center gap-2 mb-3">
          <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
          <h2 className="text-lg font-black text-white">Expert Recommendation</h2>
          {!isLoggedIn && (
            <span className="ml-auto flex items-center gap-1.5 text-xs font-bold text-violet-300 bg-violet-500/20 px-2.5 py-1 rounded-full border border-violet-500/30">
              <Lock className="w-3 h-3" /> Free account required
            </span>
          )}
        </div>

        {isLoggedIn ? (
          <div className="space-y-4">
            {t1.verdict && (
              <div className="bg-violet-950/30 rounded-xl p-4 border border-violet-500/20">
                <p className="text-xs font-bold text-violet-300 mb-2">📌 {t1.name}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{t1.verdict}</p>
              </div>
            )}
            {t2.verdict && (
              <div className="bg-orange-950/30 rounded-xl p-4 border border-orange-500/20">
                <p className="text-xs font-bold text-orange-300 mb-2">📌 {t2.name}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{t2.verdict}</p>
              </div>
            )}
            {!t1.verdict && !t2.verdict && (
              <p className="text-gray-400 text-sm">Expert analysis coming soon for these tools.</p>
            )}
          </div>
        ) : (
          <div className="relative">
            <div className="blur-sm select-none pointer-events-none">
              <div className="bg-violet-950/30 rounded-xl p-4 border border-violet-500/20 mb-3">
                <p className="text-xs font-bold text-violet-300 mb-2">📌 {t1.name}</p>
                <p className="text-gray-300 text-sm">████████ is the best choice for ████████ who need ████████. Recommended for ████████ and ████████.</p>
              </div>
              <div className="bg-orange-950/30 rounded-xl p-4 border border-orange-500/20">
                <p className="text-xs font-bold text-orange-300 mb-2">📌 {t2.name}</p>
                <p className="text-gray-300 text-sm">████████ is ideal for ████████ use cases. Best for ████████ and ████████ professionals.</p>
              </div>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 rounded-xl backdrop-blur-sm">
              <Lock className="w-8 h-8 text-violet-400 mb-3" />
              <p className="text-white font-bold text-base mb-1">Unlock Expert Recommendations</p>
              <p className="text-gray-400 text-xs mb-4 text-center">Create a free account to see which tool we recommend and why</p>
              <a href={`/${locale}/sign-up`}
                className="flex items-center gap-2 bg-gradient-to-r from-violet-600 to-cyan-500 text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:opacity-90 transition">
                Create Free Account →
              </a>
            </div>
          </div>
        )}
      </div>

      {/* More comparisons — same category */}
      {(() => {
        const sameCategory = TOOLS_DATA
          .filter(t => t.category === t1.category && t.id !== t1.id && t.id !== t2.id)
          .sort((a, b) => b.views - a.views)
          .slice(0, 6);
        if (sameCategory.length === 0) return null;
        return (
          <div className="mb-10">
            <h2 className="text-lg font-black text-white mb-4">{L.moreComparisons}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {sameCategory.map(tool => (
                <a key={tool.id}
                  href={`/${locale}/compare/${t1.id}-vs-${tool.id}`}
                  className="flex items-center gap-2 bg-white/5 hover:bg-violet-600/10 border border-white/10 hover:border-violet-500/30 rounded-xl px-4 py-3 transition group">
                  <span className="text-sm text-white font-semibold truncate flex-1">{t1.name} vs {tool.name}</span>
                  <ArrowUpRight className="w-3 h-3 text-gray-600 group-hover:text-violet-400 shrink-0" />
                </a>
              ))}
            </div>
          </div>
        );
      })()}

      {/* Back to compare */}
      <div className="text-center">
        <a href={`/${locale}/compare`}
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white border border-white/10 hover:border-white/20 px-5 py-2.5 rounded-xl transition">
          {L.back} {L.moreComparisons}
        </a>
      </div>
    </div>
  );
}
