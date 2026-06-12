import { getAllBlogPosts } from '@/lib/blog';
import { ArrowUpRight, Clock } from 'lucide-react';

type Locale = 'en' | 'fr' | 'es' | 'ar';
interface Props { params: { locale: Locale } }

const BASE = 'https://getaiverse.online';

export async function generateMetadata({ params }: Props) {
  const locale = params.locale;

  const titleMap: Record<Locale, string> = {
    en: 'AI Tools Blog — Guides, Comparisons & Reviews 2026 | Aiverse',
    fr: 'Blog Outils IA — Guides, Comparatifs & Avis 2026 | Aiverse',
    es: 'Blog de Herramientas IA — Guías, Comparativas y Reseñas 2026 | Aiverse',
    ar: 'مدونة أدوات الذكاء الاصطناعي — أدلة ومقارنات ومراجعات 2026 | Aiverse',
  };

  const descMap: Record<Locale, string> = {
    en: 'In-depth guides and comparisons to help you choose the best AI tools in 2026 — writing, image generation, coding assistants, and more.',
    fr: 'Guides et comparatifs approfondis pour choisir les meilleurs outils IA en 2026 — rédaction, génération d\'images, assistants de codage et plus.',
    es: 'Guías y comparativas detalladas para ayudarte a elegir las mejores herramientas IA en 2026 — escritura, generación de imágenes, asistentes de código y más.',
    ar: 'أدلة ومقارنات معمقة لمساعدتك في اختيار أفضل أدوات الذكاء الاصطناعي في 2026 — الكتابة، توليد الصور، مساعدات البرمجة، والمزيد.',
  };

  return {
    title: titleMap[locale],
    description: descMap[locale],
    alternates: {
      canonical: `${BASE}/${locale}/blog`,
      languages: {
        en: `${BASE}/en/blog`,
        fr: `${BASE}/fr/blog`,
        es: `${BASE}/es/blog`,
        ar: `${BASE}/ar/blog`,
      },
    },
    openGraph: {
      title: titleMap[locale],
      description: descMap[locale],
      url: `${BASE}/${locale}/blog`,
      siteName: 'Aiverse',
    },
  };
}

const T: Record<Locale, { badge: string; title: string; subtitle: string; readTime: (n: number) => string; back: string }> = {
  en: { badge: 'Blog', title: 'AI Tools Guides & Comparisons', subtitle: 'In-depth articles to help you pick the right AI tools for your workflow.', readTime: (n) => `${n} min read`, back: '← Back' },
  fr: { badge: 'Blog', title: 'Guides & Comparatifs d\'Outils IA', subtitle: 'Des articles approfondis pour vous aider à choisir les bons outils IA.', readTime: (n) => `${n} min de lecture`, back: '← Retour' },
  es: { badge: 'Blog', title: 'Guías y Comparativas de Herramientas IA', subtitle: 'Artículos detallados para ayudarte a elegir las herramientas IA adecuadas.', readTime: (n) => `${n} min de lectura`, back: '← Volver' },
  ar: { badge: 'المدونة', title: 'أدلة ومقارنات أدوات الذكاء الاصطناعي', subtitle: 'مقالات معمقة لمساعدتك في اختيار أدوات الذكاء الاصطناعي المناسبة لعملك.', readTime: (n) => `${n} دقائق قراءة`, back: '→ رجوع' },
};

export default function BlogIndexPage({ params }: Props) {
  const locale = params.locale;
  const L = T[locale];
  const posts = getAllBlogPosts();

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <a href={`/${locale}`} className="text-sm text-gray-500 hover:text-white transition mb-8 inline-block">{L.back}</a>

      <div className="text-center mb-12">
        <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#7C3AED] bg-[#7C3AED]/10 border border-[#7C3AED]/20 px-4 py-1.5 rounded-full mb-4">
          {L.badge}
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4">{L.title}</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base">{L.subtitle}</p>
      </div>

      <div className="grid gap-4">
        {posts.map((post) => (
          <a key={post.slug} href={`/${locale}/blog/${post.slug}`}
            className="group flex flex-col gap-2 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:border-violet-500/30 hover:bg-violet-950/10 p-6 transition-all">
            <div className="flex items-center gap-3 text-xs text-gray-500">
              <span className="text-lg">{post.emoji}</span>
              <span className="capitalize">{post.category}</span>
              <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{L.readTime(post.readTime)}</span>
            </div>
            <h2 className="text-xl font-black text-white group-hover:text-violet-300 transition-colors flex items-center gap-2">
              {post.title[locale]}
              <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-violet-400 shrink-0" />
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">{post.excerpt[locale]}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
