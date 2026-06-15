import Link from 'next/link';

type Locale = 'en' | 'fr' | 'es' | 'ar';
interface Props { params: { locale: Locale } }

const BASE = 'https://getaiverse.online';

export async function generateMetadata({ params }: Props) {
  const locale = params.locale;
  const titleMap: Record<Locale, string> = {
    en: 'Contact AIverse',
    fr: 'Contacter AIverse',
    es: 'Contactar con AIverse',
    ar: 'اتصل بـ AIverse',
  };
  const descMap: Record<Locale, string> = {
    en: 'Get in touch with the AIverse team — suggest a tool, report an error, or ask about advertising and partnerships.',
    fr: 'Contactez l\'équipe AIverse — proposez un outil, signalez une erreur ou renseignez-vous sur la publicité et les partenariats.',
    es: 'Ponte en contacto con el equipo de AIverse — sugiere una herramienta, informa de un error o pregunta por publicidad.',
    ar: 'تواصل مع فريق AIverse — اقترح أداة، أبلغ عن خطأ، أو استفسر عن الإعلانات والشراكات.',
  };
  return {
    title: titleMap[locale],
    description: descMap[locale],
    alternates: {
      canonical: `${BASE}/${locale}/contact`,
      languages: {
        en: `${BASE}/en/contact`, fr: `${BASE}/fr/contact`,
        es: `${BASE}/es/contact`, ar: `${BASE}/ar/contact`,
      },
    },
    openGraph: {
      title: titleMap[locale], description: descMap[locale],
      url: `${BASE}/${locale}/contact`, siteName: 'AIverse', type: 'website',
    },
  };
}

export default function ContactPage({ params }: Props) {
  const { locale } = params;
  return (
    <article className="max-w-3xl mx-auto px-4 py-16">
      <Link href={`/${locale}`} className="text-sm text-gray-600 hover:text-gray-900">← Back to AIverse</Link>
      <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-6 mb-6">Contact Us</h1>

      <div className="space-y-6 text-gray-700 leading-relaxed text-[15px]">
        <p>We&apos;d love to hear from you. Whether you want to suggest a tool, report an error in a listing, ask about
          advertising, or explore a partnership, here is how to reach AIverse.</p>

        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 space-y-3">
          <p className="text-gray-900 font-semibold">General &amp; editorial</p>
          <p><a className="text-[#7C3AED] hover:underline" href="mailto:contact@getaiverse.online">contact@getaiverse.online</a></p>
          <p className="text-gray-900 font-semibold pt-2">Advertising &amp; partnerships</p>
          <p><a className="text-[#7C3AED] hover:underline" href="mailto:contact@getaiverse.online">contact@getaiverse.online</a>
            {' '}— or use our <Link href={`/${locale}/submit`} className="text-[#7C3AED] hover:underline">Submit / Advertise</Link> page.</p>
        </div>

        <h2 className="text-xl font-bold text-gray-900 pt-4">Suggest or Submit a Tool</h2>
        <p>Know an AI tool we&apos;re missing? Submit it through our
          {' '}<Link href={`/${locale}/submit`} className="text-[#7C3AED] hover:underline">Submit a Tool</Link> page and we&apos;ll
          review it for inclusion.</p>

        <h2 className="text-xl font-bold text-gray-900 pt-4">Report an Error</h2>
        <p>Pricing, features, and links change quickly. If you spot something out of date or incorrect, email us with the tool
          name and the issue, and we&apos;ll fix it.</p>

        <h2 className="text-xl font-bold text-gray-900 pt-4">Response Time</h2>
        <p>We&apos;re a small team and read every message. We typically respond within a few business days.</p>

        <p className="pt-2">See also our <Link href={`/${locale}/about`} className="text-[#7C3AED] hover:underline">About</Link>,
          {' '}<Link href={`/${locale}/privacy`} className="text-[#7C3AED] hover:underline">Privacy Policy</Link>, and
          {' '}<Link href={`/${locale}/terms`} className="text-[#7C3AED] hover:underline">Terms of Service</Link>.</p>
      </div>
    </article>
  );
}
