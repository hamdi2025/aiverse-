import { notFound } from 'next/navigation';
import { BLOG_POSTS, getBlogPostBySlug } from '@/lib/blog';
import { TOOLS_DATA } from '@/lib/tools';
import { ArrowUpRight, Clock, Calendar } from 'lucide-react';

type Locale = 'en' | 'fr' | 'es' | 'ar';
interface Props { params: { slug: string; locale: Locale } }

const BASE = 'https://getaiverse.online';

export async function generateStaticParams() {
  const locales = ['en', 'fr', 'es', 'ar'];
  return BLOG_POSTS.flatMap((post) => locales.map((locale) => ({ slug: post.slug, locale })));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return {};
  const locale = params.locale;

  return {
    title: `${post.title[locale]} | Aiverse`,
    description: post.excerpt[locale],
    alternates: {
      canonical: `${BASE}/${locale}/blog/${post.slug}`,
      languages: {
        en: `${BASE}/en/blog/${post.slug}`,
        fr: `${BASE}/fr/blog/${post.slug}`,
        es: `${BASE}/es/blog/${post.slug}`,
        ar: `${BASE}/ar/blog/${post.slug}`,
        'x-default': `${BASE}/en/blog/${post.slug}`,
      },
    },
    openGraph: {
      title: post.title[locale],
      description: post.excerpt[locale],
      url: `${BASE}/${locale}/blog/${post.slug}`,
      siteName: 'Aiverse',
      type: 'article',
      publishedTime: post.publishedDate,
    },
  };
}

const T: Record<Locale, { back: string; readTime: (n: number) => string; relatedTools: string; relatedComparisons: string; visitTool: string; moreArticles: string; faqTitle: string }> = {
  en: { back: '← Back to Blog', readTime: (n) => `${n} min read`, relatedTools: 'Related Tools', relatedComparisons: 'Related Comparisons', visitTool: 'View Tool', moreArticles: 'More Articles', faqTitle: 'Frequently Asked Questions' },
  fr: { back: '← Retour au Blog', readTime: (n) => `${n} min de lecture`, relatedTools: 'Outils Associés', relatedComparisons: 'Comparatifs Associés', visitTool: 'Voir l\'outil', moreArticles: 'Plus d\'articles', faqTitle: 'Questions fréquentes' },
  es: { back: '← Volver al Blog', readTime: (n) => `${n} min de lectura`, relatedTools: 'Herramientas Relacionadas', relatedComparisons: 'Comparativas Relacionadas', visitTool: 'Ver herramienta', moreArticles: 'Más artículos', faqTitle: 'Preguntas frecuentes' },
  ar: { back: '→ العودة إلى المدونة', readTime: (n) => `${n} دقائق قراءة`, relatedTools: 'أدوات ذات صلة', relatedComparisons: 'مقارنات ذات صلة', visitTool: 'عرض الأداة', moreArticles: 'مقالات أخرى', faqTitle: 'الأسئلة الشائعة' },
};

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  const locale = params.locale;
  const L = T[locale];

  const relatedTools = (post.relatedTools || [])
    .map((id) => TOOLS_DATA.find((t) => t.id === id))
    .filter((t): t is NonNullable<typeof t> => !!t);

  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title[locale],
    description: post.excerpt[locale],
    datePublished: post.publishedDate,
    dateModified: post.publishedDate,
    url: `${BASE}/${locale}/blog/${post.slug}`,
    author: { '@type': 'Organization', name: 'AIverse' },
    publisher: { '@type': 'Organization', name: 'AIverse' },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'AIverse', item: `${BASE}/${locale}` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE}/${locale}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title[locale], item: `${BASE}/${locale}/blog/${post.slug}` },
    ],
  };

  const faqJsonLd = post.faq && post.faq.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faq.map((item) => ({
      '@type': 'Question',
      name: item.question[locale] || item.question.en,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer[locale] || item.answer.en,
      },
    })),
  } : null;

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {faqJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      )}

      <a href={`/${locale}/blog`} className="text-sm text-gray-500 hover:text-gray-900 transition mb-8 inline-block">{L.back}</a>

      {/* Header */}
      <div className="mb-10">
        <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#7C3AED] bg-[#7C3AED]/10 border border-[#7C3AED]/20 px-4 py-1.5 rounded-full mb-4 capitalize">
          {post.emoji} {post.category}
        </span>
        <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 leading-tight">{post.title[locale]}</h1>
        <p className="text-gray-600 text-base mb-4">{post.excerpt[locale]}</p>
        <div className="flex items-center gap-4 text-xs text-gray-500">
          <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{post.publishedDate}</span>
          <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{L.readTime(post.readTime)}</span>
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-8 mb-12">
        {post.sections.map((section, i) => (
          <div key={i}>
            <h2 className="text-xl font-black text-gray-900 mb-3">{section.heading[locale]}</h2>
            <p className="text-gray-700 leading-relaxed text-sm">{section.body[locale]}</p>
          </div>
        ))}
      </div>

      {/* FAQ */}
      {post.faq && post.faq.length > 0 && (
        <div className="mb-10 rounded-2xl border border-gray-200 bg-gray-50 p-6">
          <h2 className="text-sm font-bold text-gray-600 uppercase tracking-wider mb-4">❓ {L.faqTitle}</h2>
          <div className="space-y-4">
            {post.faq.map((item, idx) => (
              <div key={idx} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                <h3 className="text-gray-900 font-semibold mb-1.5">{item.question[locale] || item.question.en}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.answer[locale] || item.answer.en}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Related comparisons */}
      {post.relatedComparisons && post.relatedComparisons.length > 0 && (
        <div className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4">{L.relatedComparisons}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {post.relatedComparisons.map((slug) => {
              const [id1, id2] = slug.split('-vs-');
              const tool1 = TOOLS_DATA.find((t) => t.id === id1);
              const tool2 = TOOLS_DATA.find((t) => t.id === id2);
              if (!tool1 || !tool2) return null;
              return (
                <a key={slug} href={`/${locale}/compare/${slug}`}
                  className="flex items-center gap-2 bg-gray-50 hover:bg-violet-600/10 border border-gray-200 hover:border-violet-500/30 rounded-xl px-4 py-3 transition group">
                  <span className="text-sm text-gray-900 font-semibold truncate flex-1">{tool1.name} vs {tool2.name}</span>
                  <ArrowUpRight className="w-3 h-3 text-gray-600 group-hover:text-violet-700 shrink-0" />
                </a>
              );
            })}
          </div>
        </div>
      )}

      {/* Related tools */}
      {relatedTools.length > 0 && (
        <div className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4">{L.relatedTools}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {relatedTools.map((tool) => (
              <a key={tool.id} href={`/${locale}/tools/${tool.id}`}
                className="flex items-center gap-2 bg-gray-50 hover:bg-violet-600/10 border border-gray-200 hover:border-violet-500/30 rounded-xl px-4 py-3 transition group">
                <span className="text-sm text-gray-900 font-semibold truncate flex-1">{tool.name}</span>
                <ArrowUpRight className="w-3 h-3 text-gray-600 group-hover:text-violet-700 shrink-0" />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* More articles */}
      {otherPosts.length > 0 && (
        <div className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4">{L.moreArticles}</h2>
          <div className="grid gap-3">
            {otherPosts.map((p) => (
              <a key={p.slug} href={`/${locale}/blog/${p.slug}`}
                className="flex items-center gap-2 bg-gray-50 hover:bg-violet-600/10 border border-gray-200 hover:border-violet-500/30 rounded-xl px-4 py-3 transition group">
                <span className="text-lg">{p.emoji}</span>
                <span className="text-sm text-gray-900 font-semibold truncate flex-1">{p.title[locale]}</span>
                <ArrowUpRight className="w-3 h-3 text-gray-600 group-hover:text-violet-700 shrink-0" />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Back */}
      <div className="text-center">
        <a href={`/${locale}/blog`}
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 border border-gray-200 hover:border-gray-200 px-5 py-2.5 rounded-xl transition">
          {L.back}
        </a>
      </div>
    </div>
  );
}
