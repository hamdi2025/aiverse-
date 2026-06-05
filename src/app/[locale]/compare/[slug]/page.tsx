import { notFound } from 'next/navigation';
import { TOOLS_DATA } from '@/lib/tools';
import { buildAffiliateUrl } from '@/lib/affiliate';
import { Star, Check, ArrowUpRight, Zap } from 'lucide-react';

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
];

export async function generateStaticParams() {
  const locales = ['en', 'fr', 'es', 'ar'];
  return TOP_COMPARISONS.flatMap((slug) =>
    locales.map((locale) => ({ slug, locale }))
  );
}

export async function generateMetadata({ params }: Props) {
  const [id1, id2] = params.slug.split('-vs-');
  const t1 = TOOLS_DATA.find((t) => t.id === id1);
  const t2 = TOOLS_DATA.find((t) => t.id === id2);
  if (!t1 || !t2) return {};
  return {
    title: `${t1.name} vs ${t2.name} — Which is Better in 2025? | AIverse`,
    description: `Compare ${t1.name} vs ${t2.name}: pricing, features, ratings, pros & cons. Find out which AI tool is right for you.`,
    openGraph: {
      title: `${t1.name} vs ${t2.name} | AIverse`,
      description: `${t1.name} vs ${t2.name}: full comparison of pricing, features and ratings.`,
      url: `https://aiverse-lemon.vercel.app/${params.locale}/compare/${params.slug}`,
    },
  };
}

const LABELS: Record<Locale, { winner: string; tie: string; pricing: string; rating: string; category: string; pros: string; cons: string; verdict: string; visit: string; compare: string; back: string; criteria: string; about: string; moreComparisons: string; try: string; winnerText: (name: string, rating: string) => string; tieText: (n1: string, n2: string) => string }> = {
  en: { winner: 'Winner', tie: 'Tie', pricing: 'Pricing', rating: 'Rating', category: 'Category', pros: 'Pros', cons: 'Cons', verdict: 'Our Verdict', visit: 'Visit', compare: 'Compare', back: '← Back', criteria: 'Criteria', about: 'About', moreComparisons: 'More Comparisons', try: 'Try', winnerText: (name, rating) => `After comparing ratings, pricing and features, ${name} comes out ahead with a ${rating}/5 rating. It is the better choice for most users.`, tieText: (n1, n2) => `${n1} and ${n2} are equally matched — your choice depends on your specific use case and budget.` },
  fr: { winner: 'Gagnant', tie: 'Égalité', pricing: 'Tarif', rating: 'Note', category: 'Catégorie', pros: 'Avantages', cons: 'Inconvénients', verdict: 'Notre Verdict', visit: 'Visiter', compare: 'Comparer', back: '← Retour', criteria: 'Critère', about: 'À propos de', moreComparisons: 'Plus de comparaisons', try: 'Essayer', winnerText: (name, rating) => `Après comparaison des notes, tarifs et fonctionnalités, ${name} s'impose avec une note de ${rating}/5. C'est le meilleur choix pour la plupart des utilisateurs.`, tieText: (n1, n2) => `${n1} et ${n2} sont à égalité — votre choix dépend de votre cas d'usage et de votre budget.` },
  es: { winner: 'Ganador', tie: 'Empate', pricing: 'Precio', rating: 'Valoración', category: 'Categoría', pros: 'Ventajas', cons: 'Desventajas', verdict: 'Nuestro Veredicto', visit: 'Visitar', compare: 'Comparar', back: '← Volver', criteria: 'Criterio', about: 'Acerca de', moreComparisons: 'Más comparaciones', try: 'Probar', winnerText: (name, rating) => `Tras comparar valoraciones, precios y funciones, ${name} sale adelante con una nota de ${rating}/5. Es la mejor opción para la mayoría de usuarios.`, tieText: (n1, n2) => `${n1} y ${n2} están igualados — tu elección depende de tu caso de uso y presupuesto.` },
  ar: { winner: 'الفائز', tie: 'تعادل', pricing: 'السعر', rating: 'التقييم', category: 'الفئة', pros: 'المزايا', cons: 'العيوب', verdict: 'حكمنا', visit: 'زيارة', compare: 'مقارنة', back: '→ رجوع', criteria: 'المعيار', about: 'حول', moreComparisons: 'مقارنات أخرى', try: 'جرّب', winnerText: (name, rating) => `بعد مقارنة التقييمات والأسعار والميزات، يتفوق ${name} بتقييم ${rating}/5. هو الخيار الأفضل لمعظم المستخدمين.`, tieText: (n1, n2) => `${n1} و${n2} متكافئان — يعتمد اختيارك على حالة استخدامك وميزانيتك.` },
};

export default function ComparePage({ params }: Props) {
  const [id1, id2] = params.slug.split('-vs-');
  const t1 = TOOLS_DATA.find((t) => t.id === id1);
  const t2 = TOOLS_DATA.find((t) => t.id === id2);
  if (!t1 || !t2) notFound();

  const locale = params.locale;
  const L = LABELS[locale];
  const url1 = buildAffiliateUrl(t1.id, t1.websiteUrl);
  const url2 = buildAffiliateUrl(t2.id, t2.websiteUrl);

  const winner = t1.rating > t2.rating ? t1 : t2.rating > t1.rating ? t2 : null;

  // JSON-LD for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${t1.name} vs ${t2.name} — Which AI Tool is Better?`,
    description: `Full comparison of ${t1.name} and ${t2.name} including pricing, features, ratings and pros & cons.`,
    url: `https://aiverse-lemon.vercel.app/${locale}/compare/${params.slug}`,
    author: { '@type': 'Organization', name: 'AIverse' },
  };

  const rows = [
    {
      label: L.rating,
      v1: <div className="flex items-center gap-1"><Star className="w-4 h-4 fill-amber-400 text-amber-400" /><span className="font-black text-white">{t1.rating.toFixed(1)}</span></div>,
      v2: <div className="flex items-center gap-1"><Star className="w-4 h-4 fill-amber-400 text-amber-400" /><span className="font-black text-white">{t2.rating.toFixed(1)}</span></div>,
      winner1: t1.rating >= t2.rating,
      winner2: t2.rating >= t1.rating,
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
      winner1: false,
      winner2: false,
    },
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
              {row.winner1 && row.label !== 'Category' && <Check className="w-4 h-4 text-green-400 flex-shrink-0" />}
            </div>
            <div className="flex items-center gap-2">
              {row.v2}
              {row.winner2 && row.label !== 'Category' && <Check className="w-4 h-4 text-green-400 flex-shrink-0" />}
            </div>
          </div>
        ))}
      </div>

      {/* Descriptions full */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {[{ tool: t1, color: 'violet' }, { tool: t2, color: 'orange' }].map(({ tool, color }) => (
          <div key={tool.id} className={`rounded-2xl border p-6 ${color === 'violet' ? 'border-violet-500/20' : 'border-orange-500/20'}`}>
            <h3 className={`font-black text-lg mb-3 ${color === 'violet' ? 'text-violet-300' : 'text-orange-300'}`}>
              {L.about} {tool.name}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">{tool.description[locale]}</p>
          </div>
        ))}
      </div>

      {/* Verdict */}
      <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 text-center">
        <h2 className="text-2xl font-black text-white mb-4">{L.verdict}</h2>
        <p className="text-gray-300 text-base leading-relaxed max-w-2xl mx-auto">
          {winner
            ? L.winnerText(winner.name, winner.rating.toFixed(1))
            : L.tieText(t1.name, t2.name)}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <a href={url1} target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all">
            {L.try} {t1.name} <ArrowUpRight className="w-4 h-4" />
          </a>
          <a href={url2} target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all">
            {L.try} {t2.name} <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Other comparisons */}
      <div className="mt-16">
        <h3 className="text-lg font-black text-white mb-6">{L.moreComparisons}</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {TOP_COMPARISONS.filter(s => s !== params.slug).slice(0, 6).map((slug) => {
            const [a, b] = slug.split('-vs-');
            const ta = TOOLS_DATA.find(t => t.id === a);
            const tb = TOOLS_DATA.find(t => t.id === b);
            if (!ta || !tb) return null;
            return (
              <a key={slug} href={`/${locale}/compare/${slug}`}
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white border border-white/[0.06] hover:border-white/20 rounded-xl px-4 py-3 transition-all">
                <span className="text-violet-400 font-semibold">{ta.name}</span>
                <span className="text-gray-600">vs</span>
                <span className="text-orange-400 font-semibold">{tb.name}</span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
