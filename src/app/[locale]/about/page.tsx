import Link from 'next/link';

type Locale = 'en' | 'fr' | 'es' | 'ar';
interface Props { params: { locale: Locale } }

const BASE = 'https://getaiverse.online';

export async function generateMetadata({ params }: Props) {
  const locale = params.locale;
  const titleMap: Record<Locale, string> = {
    en: 'About AIverse — Our Mission & Rating Methodology',
    fr: 'À propos d\'AIverse — Notre mission et méthodologie de notation',
    es: 'Sobre AIverse — Nuestra misión y metodología de valoración',
    ar: 'عن AIverse — مهمتنا ومنهجية التقييم',
  };
  const descMap: Record<Locale, string> = {
    en: 'AIverse is an independent, multilingual directory of 580+ AI tools and 60+ AI agents. Learn who we are, why we built it, and how we rate tools.',
    fr: 'AIverse est un annuaire indépendant et multilingue de plus de 580 outils IA et 60+ agents IA. Découvrez qui nous sommes et comment nous notons les outils.',
    es: 'AIverse es un directorio independiente y multilingüe de más de 580 herramientas IA y 60+ agentes IA. Descubre quiénes somos y cómo valoramos.',
    ar: 'AIverse هو دليل مستقل ومتعدد اللغات لأكثر من 580 أداة ذكاء اصطناعي و60+ وكيلاً. تعرّف علينا وكيف نقيّم الأدوات.',
  };
  return {
    title: titleMap[locale],
    description: descMap[locale],
    alternates: {
      canonical: `${BASE}/${locale}/about`,
      languages: {
        en: `${BASE}/en/about`, fr: `${BASE}/fr/about`,
        es: `${BASE}/es/about`, ar: `${BASE}/ar/about`,
      },
    },
    openGraph: {
      title: titleMap[locale], description: descMap[locale],
      url: `${BASE}/${locale}/about`, siteName: 'AIverse', type: 'website',
    },
  };
}

export default function AboutPage({ params }: Props) {
  const { locale } = params;
  return (
    <article className="max-w-3xl mx-auto px-4 py-16">
      <Link href={`/${locale}`} className="text-sm text-gray-600 hover:text-gray-900">← Back to AIverse</Link>
      <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-6 mb-6">About AIverse</h1>

      <div className="space-y-6 text-gray-700 leading-relaxed text-[15px]">
        <p>AIverse is an independent, multilingual directory of artificial-intelligence tools. We catalog
          <strong> 580+ AI tools and 60+ AI agents</strong> across <strong>28 categories</strong> — from writing and image
          generation to code, video, audio, marketing, SEO, and productivity — and we publish it in English, French,
          Spanish, and Arabic.</p>

        <h2 className="text-xl font-bold text-gray-900 pt-4">Why We Built It</h2>
        <p>New AI tools launch every single day, and it is genuinely hard to keep up. Most directories are either shallow
          lists or paywalled. We wanted a fast, clean, genuinely useful place to <em>discover</em>, <em>compare</em>, and
          <em> choose</em> the right tool for a task — without the noise. AIverse is built to answer practical questions:
          What is the best tool for X? Is it free? What is a good alternative to Y? How does A compare to B?</p>

        <h2 className="text-xl font-bold text-gray-900 pt-4">How We Rate Tools</h2>
        <p>Every listing is assessed against a consistent set of criteria so comparisons stay fair:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Capability</strong> — how well the tool does its core job and the depth of its features.</li>
          <li><strong>Usability</strong> — onboarding, interface quality, and learning curve.</li>
          <li><strong>Pricing &amp; value</strong> — whether there is a free tier and how the cost compares to peers.</li>
          <li><strong>Reliability &amp; reputation</strong> — maturity of the product and feedback from real users.</li>
          <li><strong>Fit</strong> — who the tool is genuinely best for, and where it falls short.</li>
        </ul>
        <p>Ratings and rankings are editorial and are <strong>never</strong> influenced by whether a tool runs an affiliate
          program. Read more in our <Link href={`/${locale}/disclosure`} className="text-[#7C3AED] hover:underline">Affiliate Disclosure</Link>.</p>

        <h2 className="text-xl font-bold text-gray-900 pt-4">Keeping Information Current</h2>
        <p>AI pricing and features change constantly. We update listings regularly, but the official website of each tool is
          always the source of truth — please verify pricing there before you buy.</p>

        <h2 className="text-xl font-bold text-gray-900 pt-4">How AIverse Stays Free</h2>
        <p>AIverse is free for everyone. We cover costs through advertising and affiliate commissions on some links, at no
          extra cost to you. Our editorial independence is described in full on our disclosure page.</p>

        <h2 className="text-xl font-bold text-gray-900 pt-4">Get in Touch</h2>
        <p>Found an error, want to suggest a tool, or interested in partnering? Visit our
          {' '}<Link href={`/${locale}/contact`} className="text-[#7C3AED] hover:underline">Contact</Link> page or email
          {' '}<a className="text-[#7C3AED] hover:underline" href="mailto:contact@getaiverse.online">contact@getaiverse.online</a>.</p>
      </div>
    </article>
  );
}
