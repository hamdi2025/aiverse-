import Link from 'next/link';

type Locale = 'en' | 'fr' | 'es' | 'ar';
interface Props { params: { locale: Locale } }

const BASE = 'https://getaiverse.online';
const LAST_UPDATED = 'June 14, 2026';

export async function generateMetadata({ params }: Props) {
  const locale = params.locale;
  const titleMap: Record<Locale, string> = {
    en: 'Affiliate Disclosure | AIverse',
    fr: 'Divulgation d\'Affiliation | AIverse',
    es: 'Divulgación de Afiliados | AIverse',
    ar: 'الإفصاح عن الإحالة | AIverse',
  };
  const descMap: Record<Locale, string> = {
    en: 'AIverse earns commissions from some affiliate links. Learn how this works and how it affects our editorial independence.',
    fr: 'AIverse perçoit des commissions sur certains liens d\'affiliation. Découvrez comment cela fonctionne et notre indépendance éditoriale.',
    es: 'AIverse gana comisiones de algunos enlaces de afiliados. Descubre cómo funciona y nuestra independencia editorial.',
    ar: 'يكسب AIverse عمولات من بعض روابط الإحالة. تعرّف على كيفية عمل ذلك واستقلاليتنا التحريرية.',
  };
  return {
    title: titleMap[locale],
    description: descMap[locale],
    alternates: {
      canonical: `${BASE}/${locale}/disclosure`,
      languages: {
        en: `${BASE}/en/disclosure`, fr: `${BASE}/fr/disclosure`,
        es: `${BASE}/es/disclosure`, ar: `${BASE}/ar/disclosure`,
      },
    },
    openGraph: {
      title: titleMap[locale], description: descMap[locale],
      url: `${BASE}/${locale}/disclosure`, siteName: 'AIverse', type: 'website',
    },
  };
}

export default function DisclosurePage({ params }: Props) {
  const { locale } = params;
  return (
    <article className="max-w-3xl mx-auto px-4 py-16">
      <Link href={`/${locale}`} className="text-sm text-gray-600 hover:text-gray-900">← Back to AIverse</Link>
      <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-6 mb-2">Affiliate Disclosure</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: {LAST_UPDATED}</p>

      <div className="space-y-6 text-gray-700 leading-relaxed text-[15px]">
        <p>Transparency matters to us. This page explains how AIverse makes money and how we keep our recommendations honest.</p>

        <h2 className="text-xl font-bold text-gray-900 pt-4">How AIverse Earns</h2>
        <p>AIverse is free to use. To support the cost of running the site, some of the links to third-party tools are
          &quot;affiliate links.&quot; This means that if you click such a link and sign up for or purchase a product, we may
          receive a small commission — at <strong>no additional cost to you</strong>. We also display advertising
          (Google AdSense) on some pages.</p>

        <h2 className="text-xl font-bold text-gray-900 pt-4">Editorial Independence</h2>
        <p>Commissions never determine our rankings, ratings, or reviews. Tools are evaluated on their features, pricing,
          usability, and value. A tool does not receive a higher rating, better placement, or a more favorable review because
          it has an affiliate program. Many tools we recommend have no affiliate program at all, and we list them anyway when
          they are the best choice.</p>

        <h2 className="text-xl font-bold text-gray-900 pt-4">Sponsored Content</h2>
        <p>If a listing is sponsored or paid, it is clearly labeled as such (for example with a &quot;Sponsored&quot;,
          &quot;Partner&quot;, or &quot;Featured&quot; badge). Sponsorship buys visibility, not a fake review.</p>

        <h2 className="text-xl font-bold text-gray-900 pt-4">Accuracy</h2>
        <p>Pricing and features change frequently. We do our best to keep information current, but we always recommend
          confirming the latest details on the official website of the tool before purchasing.</p>

        <h2 className="text-xl font-bold text-gray-900 pt-4">Questions</h2>
        <p>If anything here is unclear, contact us at
          {' '}<a className="text-[#7C3AED] hover:underline" href="mailto:contact@getaiverse.online">contact@getaiverse.online</a>.
          See also our <Link href={`/${locale}/privacy`} className="text-[#7C3AED] hover:underline">Privacy Policy</Link>
          {' '}and <Link href={`/${locale}/terms`} className="text-[#7C3AED] hover:underline">Terms of Service</Link>.</p>
      </div>
    </article>
  );
}
