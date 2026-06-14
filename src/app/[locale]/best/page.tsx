import Link from 'next/link';
import { BEST_FOR } from '@/lib/bestFor';

type Locale = 'en' | 'fr' | 'es' | 'ar';
interface Props { params: { locale: Locale } }

const BASE = 'https://getaiverse.online';

export async function generateMetadata({ params }: Props) {
  const locale = params.locale;
  const titleMap: Record<Locale, string> = {
    en: 'Best AI Tools by Use Case 2026 — Curated Guides | AIverse',
    fr: 'Meilleurs Outils IA par Usage 2026 — Guides | AIverse',
    es: 'Mejores Herramientas IA por Caso de Uso 2026 — Guías | AIverse',
    ar: 'أفضل أدوات الذكاء الاصطناعي حسب الاستخدام 2026 | AIverse',
  };
  const descMap: Record<Locale, string> = {
    en: 'Curated guides to the best AI tools for students, marketing, developers, content creators, designers, writing, small business and teachers.',
    fr: "Guides des meilleurs outils IA pour étudiants, marketing, développeurs, créateurs, designers, écriture, petites entreprises et enseignants.",
    es: 'Guías de las mejores herramientas IA para estudiantes, marketing, desarrolladores, creadores, diseñadores, escritura y más.',
    ar: 'أدلة لأفضل أدوات الذكاء الاصطناعي للطلاب والتسويق والمطوّرين وصنّاع المحتوى والمصمّمين والكتابة والمزيد.',
  };
  return {
    title: titleMap[locale],
    description: descMap[locale],
    alternates: {
      canonical: `${BASE}/${locale}/best`,
      languages: {
        en: `${BASE}/en/best`, fr: `${BASE}/fr/best`,
        es: `${BASE}/es/best`, ar: `${BASE}/ar/best`,
      },
    },
    openGraph: {
      title: titleMap[locale], description: descMap[locale],
      url: `${BASE}/${locale}/best`, siteName: 'AIverse', type: 'website',
    },
  };
}

const T: Record<Locale, { title: string; subtitle: string }> = {
  en: { title: 'Best AI Tools by Use Case', subtitle: 'Hand-picked guides to the best AI tools for your job, study or project — updated for 2026.' },
  fr: { title: 'Meilleurs Outils IA par Usage', subtitle: 'Des guides sélectionnés des meilleurs outils IA pour votre métier, vos études ou vos projets — à jour pour 2026.' },
  es: { title: 'Mejores Herramientas IA por Caso de Uso', subtitle: 'Guías seleccionadas de las mejores herramientas IA para tu trabajo, estudio o proyecto — actualizadas para 2026.' },
  ar: { title: 'أفضل أدوات الذكاء الاصطناعي حسب الاستخدام', subtitle: 'أدلة مختارة لأفضل أدوات الذكاء الاصطناعي لعملك أو دراستك أو مشروعك — محدّثة لعام 2026.' },
};

export default function BestHubPage({ params }: Props) {
  const locale = params.locale;
  const t = T[locale] || T.en;
  return (
    <div className="max-w-5xl mx-auto px-4 py-14">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-3">{t.title}</h1>
        <p className="text-gray-400 max-w-xl mx-auto">{t.subtitle}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {BEST_FOR.map((g) => (
          <Link key={g.slug} href={`/${locale}/best/${g.slug}`}
            className="group flex items-start gap-3 bg-white/5 hover:bg-violet-600/10 border border-white/10 hover:border-violet-500/40 rounded-2xl px-5 py-4 transition-all">
            <span className="text-2xl">{g.emoji}</span>
            <span className="text-white font-semibold text-sm leading-snug group-hover:text-violet-200">{g.title[locale]}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
