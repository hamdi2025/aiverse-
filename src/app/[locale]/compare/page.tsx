import Link from 'next/link';
import { ArrowRight, Zap } from 'lucide-react';

type Locale = 'en' | 'fr' | 'es' | 'ar';
interface Props { params: { locale: Locale } }

const COMPARISONS = [
  { slug: 'chatgpt-vs-claude', emoji: '🤖' },
  { slug: 'chatgpt-vs-gemini', emoji: '🧠' },
  { slug: 'claude-vs-gemini', emoji: '⚡' },
  { slug: 'midjourney-vs-dalle3', emoji: '🎨' },
  { slug: 'midjourney-vs-stable-diffusion', emoji: '🖼️' },
  { slug: 'jasper-vs-writesonic', emoji: '✍️' },
  { slug: 'jasper-vs-copy-ai', emoji: '📝' },
  { slug: 'cursor-vs-github-copilot', emoji: '💻' },
  { slug: 'bolt-new-vs-v0-dev', emoji: '🔧' },
  { slug: 'elevenlabs-vs-murf-ai', emoji: '🎙️' },
  { slug: 'grammarly-ai-vs-quillbot', emoji: '📖' },
  { slug: 'runway-ml-vs-pika-labs', emoji: '🎬' },
  { slug: 'notion-ai-vs-coda-ai', emoji: '📋' },
  { slug: 'opus-clip-vs-fliki-ai', emoji: '✂️' },
  { slug: 'reclaim-ai-vs-fireflies-ai', emoji: '📅' },
];

const T = {
  en: {
    badge: 'AI Tool Comparisons',
    title: 'Compare AI Tools',
    subtitle: 'Side-by-side comparisons of the most popular AI tools — pricing, features, ratings and honest verdicts.',
    cta: 'Compare',
    popular: 'Most Popular',
  },
  fr: {
    badge: 'Comparaisons d\'outils IA',
    title: 'Comparer les Outils IA',
    subtitle: 'Comparaisons côte à côte des outils IA les plus populaires — prix, fonctionnalités, notes et verdicts honnêtes.',
    cta: 'Comparer',
    popular: 'Les plus populaires',
  },
  es: {
    badge: 'Comparaciones de herramientas IA',
    title: 'Comparar Herramientas IA',
    subtitle: 'Comparaciones lado a lado de las herramientas IA más populares — precios, funciones, valoraciones y veredictos honestos.',
    cta: 'Comparar',
    popular: 'Más populares',
  },
  ar: {
    badge: 'مقارنات أدوات الذكاء الاصطناعي',
    title: 'قارن أدوات الذكاء الاصطناعي',
    subtitle: 'مقارنات جنباً إلى جنب لأكثر أدوات الذكاء الاصطناعي شعبية — الأسعار والميزات والتقييمات وأحكام صادقة.',
    cta: 'قارن',
    popular: 'الأكثر شعبية',
  },
};

export async function generateMetadata({ params }: Props) {
  const locale = params.locale;
  const titles = {
    en: 'Compare AI Tools 2026 — Side-by-Side Comparisons | AIverse',
    fr: 'Comparer les Outils IA 2026 — Comparaisons Côte à Côte | AIverse',
    es: 'Comparar Herramientas IA 2026 — Comparaciones | AIverse',
    ar: 'مقارنة أدوات الذكاء الاصطناعي 2026 | AIverse',
  };
  const descs = {
    en: 'Compare the best AI tools side by side. Honest reviews, pricing comparisons and feature breakdowns for ChatGPT, Claude, Midjourney, Jasper and more.',
    fr: 'Comparez les meilleurs outils IA côte à côte. Avis honnêtes, comparaisons de prix et fonctionnalités pour ChatGPT, Claude, Midjourney, Jasper et plus.',
    es: 'Compara las mejores herramientas IA lado a lado. Opiniones honestas, comparaciones de precios y funciones para ChatGPT, Claude, Midjourney y más.',
    ar: 'قارن أفضل أدوات الذكاء الاصطناعي جنباً إلى جنب. مراجعات صادقة ومقارنات أسعار وميزات لـ ChatGPT وClaude وMidjourney والمزيد.',
  };
  return {
    title: titles[locale],
    description: descs[locale],
    alternates: {
      canonical: `https://getaiverse.online/${locale}/compare`,
      languages: {
        en: 'https://getaiverse.online/en/compare',
        fr: 'https://getaiverse.online/fr/compare',
        es: 'https://getaiverse.online/es/compare',
        ar: 'https://getaiverse.online/ar/compare',
      },
    },
  };
}

function formatSlug(slug: string) {
  return slug.split('-vs-').map(s =>
    s.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
  ).join(' vs ');
}

export default function ComparePage({ params }: Props) {
  const locale = params.locale;
  const t = T[locale] || T.en;

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-14">
        <span className="inline-flex items-center gap-2 bg-violet-600/20 text-violet-400 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
          <Zap className="w-3 h-3" /> {t.badge}
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4">{t.title}</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">{t.subtitle}</p>
      </div>

      {/* Popular label */}
      <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-6">{t.popular}</p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {COMPARISONS.map(({ slug, emoji }) => {
          const [a, b] = slug.split('-vs-').map(s =>
            s.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
          );
          return (
            <Link
              key={slug}
              href={`/${locale}/compare/${slug}`}
              className="group flex items-center justify-between gap-3 bg-white/5 hover:bg-violet-600/10 border border-white/10 hover:border-violet-500/40 rounded-2xl px-5 py-4 transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{emoji}</span>
                <div>
                  <p className="text-white font-semibold text-sm">{a}</p>
                  <p className="text-gray-500 text-xs">vs {b}</p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-violet-400 group-hover:translate-x-1 transition-all" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
