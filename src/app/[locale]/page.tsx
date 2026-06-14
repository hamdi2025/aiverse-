import type { Metadata } from 'next';
import HomePageClient from '@/components/home/HomePageClient';
import { getHomeMetadata } from './page-metadata';

const BASE = 'https://getaiverse.online';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale;
  const { title, description, keywords } = getHomeMetadata(locale);
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `${BASE}/${locale}`,
      languages: {
        en: `${BASE}/en`, fr: `${BASE}/fr`,
        es: `${BASE}/es`, ar: `${BASE}/ar`,
      },
    },
    openGraph: {
      title, description,
      url: `${BASE}/${locale}`, siteName: 'AIverse', type: 'website',
    },
  };
}

type Locale = 'en' | 'fr' | 'es' | 'ar';

const HOME_FAQ: Record<Locale, { q: string; a: string }[]> = {
  en: [
    { q: 'What is AIverse?', a: 'AIverse is a free, multilingual directory of 580+ AI tools and 60+ AI agents across 28 categories. It helps you discover, compare, and choose the right AI tool through reviews, side-by-side comparisons, ranked alternatives, and buying guides — in English, French, Spanish, and Arabic.' },
    { q: 'What are the best AI tools in 2026?', a: 'Top AI tools in 2026 include ChatGPT and Claude for writing, Midjourney and DALL·E 3 for images, GitHub Copilot and Cursor for code, ElevenLabs and Murf for voice, and Synthesia and HeyGen for video. AIverse ranks each by capability, pricing, and use case so you can compare them directly.' },
    { q: 'Is AIverse free to use?', a: 'Yes, AIverse is completely free to browse. You can search and filter 580+ AI tools, read reviews, and compare options at no cost. The site is supported by advertising and affiliate commissions on some links, which never affect our editorial rankings.' },
    { q: 'How does AIverse rate AI tools?', a: 'AIverse rates tools on five criteria: capability, usability, pricing and value, reliability and reputation, and fit for the user. Rankings are editorial and are never influenced by whether a tool runs an affiliate program.' },
  ],
  fr: [
    { q: "Qu'est-ce qu'AIverse ?", a: "AIverse est un annuaire gratuit et multilingue de plus de 580 outils IA et 60+ agents IA dans 28 catégories. Il vous aide à découvrir, comparer et choisir le bon outil IA grâce à des avis, des comparatifs, des alternatives classées et des guides d'achat — en anglais, français, espagnol et arabe." },
    { q: 'Quels sont les meilleurs outils IA en 2026 ?', a: 'Les meilleurs outils IA en 2026 incluent ChatGPT et Claude pour la rédaction, Midjourney et DALL·E 3 pour les images, GitHub Copilot et Cursor pour le code, ElevenLabs et Murf pour la voix, et Synthesia et HeyGen pour la vidéo. AIverse les classe par capacités, prix et cas d\'usage.' },
    { q: 'AIverse est-il gratuit ?', a: 'Oui, AIverse est entièrement gratuit à consulter. Vous pouvez chercher et filtrer plus de 580 outils IA, lire des avis et comparer sans frais. Le site est financé par la publicité et des commissions d\'affiliation sur certains liens, qui n\'influencent jamais nos classements.' },
    { q: 'Comment AIverse note-t-il les outils IA ?', a: 'AIverse note les outils selon cinq critères : capacités, facilité d\'usage, prix et valeur, fiabilité et réputation, et adéquation à l\'utilisateur. Les classements sont éditoriaux et ne dépendent jamais de l\'existence d\'un programme d\'affiliation.' },
  ],
  es: [
    { q: '¿Qué es AIverse?', a: 'AIverse es un directorio gratuito y multilingüe de más de 580 herramientas IA y 60+ agentes IA en 28 categorías. Te ayuda a descubrir, comparar y elegir la herramienta IA adecuada mediante reseñas, comparativas, alternativas clasificadas y guías de compra — en inglés, francés, español y árabe.' },
    { q: '¿Cuáles son las mejores herramientas IA en 2026?', a: 'Las mejores herramientas IA en 2026 incluyen ChatGPT y Claude para escritura, Midjourney y DALL·E 3 para imágenes, GitHub Copilot y Cursor para código, ElevenLabs y Murf para voz, y Synthesia y HeyGen para video. AIverse las clasifica por capacidad, precio y caso de uso.' },
    { q: '¿AIverse es gratis?', a: 'Sí, AIverse es completamente gratis para navegar. Puedes buscar y filtrar más de 580 herramientas IA, leer reseñas y comparar sin costo. El sitio se financia con publicidad y comisiones de afiliados en algunos enlaces, que nunca afectan nuestras clasificaciones.' },
    { q: '¿Cómo valora AIverse las herramientas IA?', a: 'AIverse valora las herramientas con cinco criterios: capacidad, usabilidad, precio y valor, fiabilidad y reputación, y adecuación al usuario. Las clasificaciones son editoriales y nunca dependen de si una herramienta tiene programa de afiliados.' },
  ],
  ar: [
    { q: 'ما هو AIverse؟', a: 'AIverse هو دليل مجاني ومتعدد اللغات لأكثر من 580 أداة ذكاء اصطناعي و60+ وكيلاً في 28 فئة. يساعدك على اكتشاف ومقارنة واختيار الأداة المناسبة عبر المراجعات والمقارنات والبدائل المصنّفة وأدلة الشراء — بالإنجليزية والفرنسية والإسبانية والعربية.' },
    { q: 'ما أفضل أدوات الذكاء الاصطناعي في 2026؟', a: 'تشمل أفضل الأدوات في 2026: ChatGPT وClaude للكتابة، وMidjourney وDALL·E 3 للصور، وGitHub Copilot وCursor للبرمجة، وElevenLabs وMurf للصوت، وSynthesia وHeyGen للفيديو. يصنّفها AIverse حسب القدرة والسعر وحالة الاستخدام.' },
    { q: 'هل AIverse مجاني؟', a: 'نعم، AIverse مجاني تمامًا للتصفح. يمكنك البحث والتصفية بين أكثر من 580 أداة وقراءة المراجعات والمقارنة دون تكلفة. يُموَّل الموقع عبر الإعلانات وعمولات الإحالة على بعض الروابط، وهي لا تؤثر أبدًا على تصنيفاتنا.' },
  ],
};

const HOME_FAQ_TITLE: Record<Locale, string> = {
  en: 'Frequently Asked Questions', fr: 'Questions fréquentes', es: 'Preguntas frecuentes', ar: 'الأسئلة الشائعة',
};

export default function HomePage({ params }: { params: { locale: string } }) {
  const locale = (params.locale as Locale) in HOME_FAQ ? (params.locale as Locale) : 'en';
  const faq = HOME_FAQ[locale];
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
  return (
    <>
      <HomePageClient />
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-black text-white mb-6 text-center">{HOME_FAQ_TITLE[locale]}</h2>
        <div className="space-y-4">
          {faq.map((item, i) => (
            <div key={i} className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5">
              <h3 className="text-white font-semibold mb-1.5">{item.q}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </>
  );
}
